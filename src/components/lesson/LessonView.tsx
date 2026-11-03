"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  Target, 
  Zap, 
  Layers,
  Cpu,
  AlertTriangle,
  Bookmark,
  Boxes,
  RotateCcw,
  BookOpen
} from "lucide-react";
import { Lesson } from "@/data/types";
import { ALL_LESSON_SUMMARIES } from "@/data/curriculum";
import { useAcademyStore } from "@/lib/store";
import { toPersianDigits, cn } from "@/lib/utils";
import { CodeBlock } from "./CodeBlock";
import { NestComparisonCard } from "./NestComparisonCard";
import { ExerciseSection } from "./ExerciseSection";
import { QuizSection } from "./QuizSection";
import { InterviewQuestionsSection } from "./InterviewQuestionsSection";
import { NotesEditor } from "./NotesEditor";
import { LessonNavigation } from "./LessonNavigation";
import { TableOfContents, TOCItem } from "./TableOfContents";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { FocusedLessonView } from "./FocusedLessonView";

interface LessonViewProps {
  lesson: Lesson;
}

export function LessonView({ lesson }: LessonViewProps) {
  const { 
    progress, 
    isLoaded, 
    markLessonInProgress, 
    setLastStudied, 
    addStudyTime,
    isReaderMode 
  } = useAcademyStore();

  const [restoredScroll, setRestoredScroll] = useState(false);
  const lastActiveRef = useRef<number>(Date.now());

  // Mark lesson in progress and record last studied once data is loaded
  useEffect(() => {
    if (isLoaded) {
      markLessonInProgress(lesson.id);
      setLastStudied(lesson.id);
    }
  }, [lesson.id, isLoaded, markLessonInProgress, setLastStudied]);

  // Active study time tracker (counts actual active seconds in the lesson)
  useEffect(() => {
    const handleActivity = () => {
      lastActiveRef.current = Date.now();
    };

    window.addEventListener("mousemove", handleActivity, { passive: true });
    window.addEventListener("scroll", handleActivity, { passive: true });
    window.addEventListener("keydown", handleActivity, { passive: true });

    // Every 60 seconds, if the user was active within the last 3 minutes and document is visible
    const timer = setInterval(() => {
      if (document.visibilityState === "visible") {
        const timeSinceActive = Date.now() - lastActiveRef.current;
        if (timeSinceActive < 3 * 60 * 1000) {
          addStudyTime(1);
        }
      }
    }, 60000);

    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("keydown", handleActivity);
    };
  }, [addStudyTime]);

  // Scroll position save and restore per lesson
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Save scroll on unload or unmount
    const savePosition = () => {
      if (window.scrollY > 150) {
        localStorage.setItem(`academy_scroll_${lesson.id}`, String(Math.floor(window.scrollY)));
      }
    };

    window.addEventListener("beforeunload", savePosition);

    // Restore previous scroll position if no anchor hash in URL
    if (!window.location.hash && !restoredScroll) {
      const saved = localStorage.getItem(`academy_scroll_${lesson.id}`);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed > 200) {
          // Delay briefly to allow content layout to settle
          setTimeout(() => {
            window.scrollTo({ top: parsed, behavior: "smooth" });
            setRestoredScroll(true);
          }, 200);
        }
      }
    }

    return () => {
      savePosition();
      window.removeEventListener("beforeunload", savePosition);
    };
  }, [lesson.id, restoredScroll]);

  const currentIndex = ALL_LESSON_SUMMARIES.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? ALL_LESSON_SUMMARIES[currentIndex - 1] : undefined;
  const nextLesson =
    currentIndex < ALL_LESSON_SUMMARIES.length - 1
      ? ALL_LESSON_SUMMARIES[currentIndex + 1]
      : undefined;

  const isCompleted = isLoaded && progress.completedLessons.includes(lesson.id);

  // Table of Contents items
  const tocItems: TOCItem[] = useMemo(() => {
    const items: TOCItem[] = [
      { id: "objectives", label: "اهداف و پیش‌نیازها" },
      { id: "why-it-matters", label: "چرایی اهمیت موضوع" },
      { id: "introduction", label: "مقدمه و طرح بحث" },
      { id: "concepts", label: "مفاهیم عمیق و معماری" },
    ];
    if (lesson.internalsAndMechanisms) {
      items.push({ id: "internals", label: "کالبدشکافی زیرساخت (Internals)" });
    }
    if (lesson.realWorldScenario) {
      items.push({ id: "real-world-scenario", label: "سناریوی پروداکشن" });
    }
    if (lesson.codeExamples && lesson.codeExamples.length > 0) {
      items.push({ id: "code-examples", label: "نمونه کدهای اجرایی" });
    }
    items.push({ id: "nest-comparison", label: "تطبیق با NestJS" });
    if (lesson.commonMistakes && lesson.commonMistakes.length > 0) {
      items.push({ id: "common-mistakes", label: "اشتباهات متداول" });
    }
    items.push(
      { id: "best-practices", label: "اصول زرین Best Practices" },
      { id: "exercise", label: "تمرین کارگاهی" },
      { id: "quiz", label: "آزمونک سنجش یادگیری" },
      { id: "interview-questions", label: "سوالات مصاحبه شغلی ارشد" },
      { id: "summary", label: "جمع‌بندی و مراجع" }
    );
    return items;
  }, [lesson]);

  if (lesson.contentVersion === 2) return <FocusedLessonView lesson={lesson} />;

  return (
    <div className={cn("lesson-layout flex items-start gap-6 2xl:gap-8 justify-between", isReaderMode && "justify-center")}>
      {/* Main Prose Reading Column */}
      <article className="flex-1 min-w-0 reading-column mx-auto pb-20">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-5 select-none flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors font-medium">
            داشبورد
          </Link>
          <span>/</span>
          <Link href="/roadmap" className="hover:text-foreground transition-colors font-medium">
            هفته {toPersianDigits(lesson.week)}
          </Link>
          <span>/</span>
          <span className="text-foreground truncate font-semibold">
            درس {toPersianDigits(lesson.day)}
          </span>
        </nav>

        {/* Header Section */}
        <header className="space-y-4 pb-6 border-b border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-primary-muted text-primary border border-primary/20">
              Week {lesson.week} • Day {lesson.day}
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-muted-foreground border border-border">
              {lesson.category}
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-muted-foreground flex items-center gap-1.5 border border-border">
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              <span>{toPersianDigits(lesson.estimatedMinutes)} دقیقه</span>
            </span>
            {isCompleted && (
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                خوانده شد ✓
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
            {lesson.title}
          </h1>

          <div
            dir="ltr"
            style={{ direction: "ltr", textAlign: "left" }}
            className="text-xs sm:text-sm font-mono text-muted-foreground ltr-dir"
          >
            {lesson.titleEn}
          </div>

          <div className="text-[16px] sm:text-[17px] text-muted-foreground leading-[1.85]">
            <MarkdownRenderer content={lesson.description} />
          </div>

          {/* Tags */}
          {lesson.tags && lesson.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {lesson.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-secondary/80 text-muted-foreground border border-border"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Mobile Table of Contents */}
        <div className="lesson-toc-inline my-6">
          <TableOfContents items={tocItems} variant="mobile" />
        </div>

        {/* Learning Objectives & Prerequisites */}
        <div id="objectives" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 scroll-mt-24">
          <div className="p-5 rounded-xl border border-border bg-card space-y-3">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Target className="w-4 h-4 text-primary shrink-0" />
              <span>اهداف یادگیری این جلسه:</span>
            </h3>
            <ul className="space-y-2 text-[15px] leading-[1.85] text-foreground/90">
              {lesson.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0 mt-0.5">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-border bg-card space-y-3">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span>پیش‌نیازهای فنی:</span>
            </h3>
            <ul className="space-y-2 text-[15px] leading-[1.85] text-foreground/90">
              {lesson.prerequisites.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why it matters */}
        <section
          id="why-it-matters"
          className="my-8 p-5 rounded-xl border border-primary/20 bg-primary-muted scroll-mt-24 space-y-2"
        >
          <div className="text-sm font-bold text-primary">
            چرا این موضوع برای یک مهندس ارشد بک‌اند حیاتی است؟
          </div>
          <div className="text-[16px] sm:text-[17px] text-foreground/95 leading-[1.95]">
            <MarkdownRenderer content={lesson.whyItMatters} />
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" className="my-10 space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 border-r-3 border-primary pr-3">
            مقدمه و طرح بحث
          </h2>
          <div className="text-[17px] sm:text-[18px] text-foreground/90 leading-[1.95]">
            <MarkdownRenderer content={lesson.introduction} />
          </div>
        </section>

        {/* Conceptual Sections */}
        <section id="concepts" className="my-10 space-y-6 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 border-r-3 border-primary pr-3">
            مفاهیم عمیق و اصول معماری
          </h2>

          <div className="space-y-5">
            {lesson.conceptualSections.map((sec, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-4"
              >
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded text-xs font-mono border border-border bg-secondary text-primary font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{sec.title}</span>
                </h3>

                <div className="text-[16px] sm:text-[17px] text-foreground/90 leading-[1.95]">
                  <MarkdownRenderer content={sec.content} />
                </div>

                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <div className="pt-3 border-t border-border">
                    <span className="text-xs font-bold text-muted-foreground block mb-2">
                      نکات کلیدی مهندسی:
                    </span>
                    <ul className="space-y-1.5 text-[15px] text-foreground/90 leading-[1.85]">
                      {sec.keyPoints.map((kp, kpIdx) => (
                        <li key={kpIdx} className="flex items-start gap-2">
                          <span className="text-primary font-bold shrink-0 mt-0.5">•</span>
                          <span>{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Internals and Mechanisms */}
        {lesson.internalsAndMechanisms && (
          <section
            id="internals"
            className="my-10 p-5 sm:p-6 rounded-xl border border-border bg-secondary/30 space-y-3 scroll-mt-24"
          >
            <div className="flex items-center gap-2 text-foreground font-bold text-base sm:text-lg">
              <Cpu className="w-5 h-5 text-primary shrink-0" />
              <span>کالبدشکافی عمیق زیرساخت و معماری داخلی (Internals)</span>
            </div>
            <div className="text-[16px] sm:text-[17px] text-foreground/90 leading-[1.95] border-r-3 border-primary/50 pr-3.5">
              <MarkdownRenderer content={lesson.internalsAndMechanisms} />
            </div>
          </section>
        )}

        {/* Real-World Scenario */}
        {lesson.realWorldScenario && (
          <section
            id="real-world-scenario"
            className="my-10 p-5 sm:p-6 rounded-xl border border-border bg-card space-y-3 scroll-mt-24"
          >
            <div className="flex items-center gap-2 text-foreground font-bold text-base sm:text-lg">
              <Boxes className="w-5 h-5 text-primary shrink-0" />
              <span>سناریوی واقعی پروداکشن (Real-world Scenario)</span>
            </div>
            <div className="p-4 rounded-xl border border-border bg-background space-y-3 text-[15px] sm:text-base leading-[1.9]">
              <div>
                <span className="text-primary font-bold block mb-1">صورت مسئله در سیستم تجاری:</span>
                <div className="text-muted-foreground">
                  <MarkdownRenderer content={lesson.realWorldScenario.scenario} />
                </div>
              </div>
              <div className="pt-3 border-t border-border">
                <span className="text-emerald-500 font-bold block mb-1">راهکار پیاده‌سازی سازمانی:</span>
                <div className="text-foreground/90">
                  <MarkdownRenderer content={lesson.realWorldScenario.solution} />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Code Examples */}
        {lesson.codeExamples && lesson.codeExamples.length > 0 && (
          <section id="code-examples" className="my-10 space-y-6 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 border-r-3 border-primary pr-3">
              نمونه کدهای اجرایی و استانداردهای صنعتی
            </h2>

            {lesson.codeExamples.map((example, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-baseline justify-between text-sm">
                  <h3 className="font-bold text-foreground">
                    {idx + 1}. {example.title}
                  </h3>
                  {example.titleEn && (
                    <span className="font-mono text-xs text-muted-foreground ltr-dir">
                      {example.titleEn}
                    </span>
                  )}
                </div>
                <div className="text-[15px] text-muted-foreground leading-[1.85]">
                  <MarkdownRenderer content={example.explanation} />
                </div>
                <CodeBlock
                  code={example.code}
                  language={example.language}
                  filename={example.filename}
                  title={example.title}
                />
              </div>
            ))}
          </section>
        )}

        {/* Comparison with NestJS */}
        {lesson.comparisonWithNestJS && (
          <section id="nest-comparison" className="my-10 space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 border-r-3 border-primary pr-3">
              تطبیق مفهومی با Node.js و NestJS
            </h2>
            <NestComparisonCard comparison={lesson.comparisonWithNestJS} />
          </section>
        )}

        {/* Common Mistakes */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <section id="common-mistakes" className="my-10 space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 border-r-3 border-primary pr-3">
              اشتباهات متداول و Anti-patterns
            </h2>

            <div className="space-y-4">
              {lesson.commonMistakes.map((mistake, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-3"
                >
                  <div className="flex items-start gap-2 text-rose-700 dark:text-rose-400 font-bold text-base">
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{mistake.mistake}</span>
                  </div>

                  <div className="text-[15px] text-foreground/90 space-y-2 leading-[1.85]">
                    <div>
                      <span className="text-xs font-bold text-muted-foreground block mb-0.5">
                        چرا این رویکرد در جاوا اشتباه است؟
                      </span>
                      <p>{mistake.whyBad}</p>
                    </div>

                    <div className="pt-2 border-t border-rose-500/15">
                      <span className="text-xs font-bold text-emerald-500 block mb-0.5">
                        راهکار استاندارد:
                      </span>
                      <p className="text-foreground">{mistake.solution}</p>
                    </div>
                  </div>

                  {mistake.codeBad && (
                    <div className="pt-2">
                      <span className="text-xs font-mono text-rose-700 dark:text-rose-400 block mb-1">
                        ✗ رویکرد نادرست (Anti-pattern):
                      </span>
                      <CodeBlock
                        code={mistake.codeBad}
                        language="java"
                        showLineNumbers={false}
                      />
                    </div>
                  )}

                  {mistake.codeGood && (
                    <div className="pt-2">
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 block mb-1">
                        ✓ رویکرد استاندارد (Best Practice):
                      </span>
                      <CodeBlock
                        code={mistake.codeGood}
                        language="java"
                        showLineNumbers={false}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Best Practices */}
        {lesson.bestPractices && lesson.bestPractices.length > 0 && (
          <section id="best-practices" className="my-10 space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 border-r-3 border-primary pr-3">
              اصول زرین Best Practices مهندسی
            </h2>

            <div className="p-5 rounded-xl border border-border bg-card">
              <ul className="space-y-3">
                {lesson.bestPractices.map((bp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[15px] leading-[1.85] text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Personal Notes */}
        <NotesEditor lessonId={lesson.id} />

        {/* Hands-on Exercise */}
        <ExerciseSection lessonId={lesson.id} exercise={lesson.exercise} />

        {/* Concept Assessment Quiz */}
        <QuizSection lessonId={lesson.id} quizzes={lesson.quizzes} />

        {/* Senior Interview Questions */}
        {lesson.interviewQuestions && lesson.interviewQuestions.length > 0 && (
          <InterviewQuestionsSection questions={lesson.interviewQuestions} />
        )}

        {/* Lesson Summary and Official References */}
        <section id="summary" className="my-10 space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 border-r-3 border-primary pr-3">
            جمع‌بندی و مراجع رسمی
          </h2>

          <div className="p-5 rounded-xl border border-border bg-card space-y-4">
            <div className="text-[16px] text-foreground/90 leading-[1.95]">
              <MarkdownRenderer content={lesson.summary} />
            </div>

            {lesson.references && lesson.references.length > 0 && (
              <div className="pt-4 border-t border-border">
                <span className="text-xs font-bold text-muted-foreground block mb-2">
                  مستندات مرجع و منابع رسمی:
                </span>
                <ul className="space-y-2">
                  {lesson.references.map((ref, idx) => (
                    <li key={idx}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-primary hover:underline flex items-center gap-1.5 font-medium"
                      >
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        <span>{ref.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Navigation */}
        <LessonNavigation
          lessonId={lesson.id}
          prevLesson={prevLesson}
          nextLesson={nextLesson}
        />
      </article>

      {/* Desktop Sticky Table of Contents (Hidden in Reader Focus Mode) */}
      {!isReaderMode && (
        <aside className="lesson-toc-sidebar w-64 shrink-0 sticky top-20 self-start max-h-[calc(100dvh-6rem)] overflow-y-auto">
          <TableOfContents items={tocItems} variant="desktop" />
        </aside>
      )}
    </div>
  );
}
