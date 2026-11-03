"use client";

import React, { useEffect, useMemo } from "react";
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
  Boxes
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

interface LessonViewProps {
  lesson: Lesson;
}

export function LessonView({ lesson }: LessonViewProps) {
  const { progress, markLessonInProgress, setLastStudied } = useAcademyStore();

  useEffect(() => {
    markLessonInProgress(lesson.id);
    setLastStudied(lesson.id);
  }, [lesson.id, markLessonInProgress, setLastStudied]);

  const currentIndex = ALL_LESSON_SUMMARIES.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? ALL_LESSON_SUMMARIES[currentIndex - 1] : undefined;
  const nextLesson =
    currentIndex < ALL_LESSON_SUMMARIES.length - 1
      ? ALL_LESSON_SUMMARIES[currentIndex + 1]
      : undefined;

  const isCompleted = progress.completedLessons.includes(lesson.id);

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
    items.push({ id: "nest-comparison", label: "تطبیق مفهومی با NestJS" });
    if (lesson.commonMistakes && lesson.commonMistakes.length > 0) {
      items.push({ id: "common-mistakes", label: "اشتباهات متداول و Anti-patterns" });
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

  return (
    <div className="flex items-start gap-8 justify-between">
      {/* Main Prose Reading Column (Optimal max-w-3xl ~ 768px for deep reading comfort) */}
      <article className="flex-1 min-w-0 max-w-3xl pb-20">
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
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                خوانده شد ✓
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-snug">
            {lesson.title}
          </h1>

          <div className="text-sm font-mono text-muted-foreground ltr-dir">
            {lesson.titleEn}
          </div>

          <p className="text-base sm:text-[17px] text-muted-foreground leading-[1.9]">
            {lesson.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {lesson.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border ltr-dir"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Mobile/Tablet In-line Table of Contents */}
        <TableOfContents items={tocItems} variant="mobile" />

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
          <p className="text-[16px] sm:text-[17px] text-foreground/95 leading-[1.95]">
            {lesson.whyItMatters}
          </p>
        </section>

        {/* Introduction */}
        <section id="introduction" className="my-10 space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 border-r-3 border-primary pr-3">
            مقدمه و طرح بحث
          </h2>
          <div className="text-[17px] sm:text-[18px] text-foreground/90 leading-[1.95] space-y-4 whitespace-pre-line">
            {lesson.introduction}
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

                <div className="text-[16px] sm:text-[17px] text-foreground/90 leading-[1.95] whitespace-pre-line">
                  {sec.content}
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
            <div className="text-[16px] sm:text-[17px] text-foreground/90 leading-[1.95] whitespace-pre-line border-r-3 border-primary/50 pr-3.5">
              {lesson.internalsAndMechanisms}
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
                <p className="text-muted-foreground">{lesson.realWorldScenario.scenario}</p>
              </div>
              <div className="pt-3 border-t border-border">
                <span className="text-emerald-500 font-bold block mb-1">راهکار پیاده‌سازی سازمانی:</span>
                <p className="text-foreground/90">{lesson.realWorldScenario.solution}</p>
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
                <p className="text-[15px] text-muted-foreground leading-[1.85]">
                  {example.explanation}
                </p>
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

        {/* NestJS vs Java Comparison */}
        <NestComparisonCard comparison={lesson.comparisonWithNestJS} />

        {/* Common Mistakes */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <section id="common-mistakes" className="my-10 space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 text-rose-500 font-bold text-xl sm:text-2xl border-r-3 border-rose-500 pr-3">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <h2 className="text-foreground">اشتباهات متداول و الگوهای ضدطراحی (Anti-patterns)</h2>
            </div>

            <div className="space-y-4">
              {lesson.commonMistakes.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-3"
                >
                  <div className="font-bold text-base text-foreground">
                    {idx + 1}. {m.mistake}
                  </div>
                  <div>
                    <span className="font-semibold text-rose-400 block mb-1 text-sm">
                      چرا این رویکرد خطرناک و آسیب‌زننده است؟
                    </span>
                    <p className="text-[15px] leading-[1.85] text-muted-foreground">{m.whyBad}</p>
                  </div>
                  <div className="pt-2 border-t border-rose-500/20">
                    <span className="font-semibold text-emerald-400 block mb-1 text-sm">
                      راهکار اصولی:
                    </span>
                    <p className="text-[15px] leading-[1.85] text-foreground/90">{m.solution}</p>
                  </div>

                  {(m.codeBad || m.codeGood) && (
                    <div className="space-y-3 pt-2">
                      {m.codeBad && (
                        <div>
                          <span className="text-xs font-mono text-rose-400 font-semibold block mb-1 ltr-dir">
                            // ✕ Bad Practice
                          </span>
                          <CodeBlock code={m.codeBad} language="java" />
                        </div>
                      )}
                      {m.codeGood && (
                        <div>
                          <span className="text-xs font-mono text-emerald-400 font-semibold block mb-1 ltr-dir">
                            // ✓ Recommended Practice
                          </span>
                          <CodeBlock code={m.codeGood} language="java" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Best Practices */}
        <section
          id="best-practices"
          className="my-10 p-5 sm:p-6 rounded-xl border border-border bg-card space-y-3 scroll-mt-24"
        >
          <div className="flex items-center gap-2 text-foreground font-bold text-base sm:text-lg">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>اصول زرین و Best Practices محیط پروداکشن</span>
          </div>
          <ul className="space-y-2 text-[15px] sm:text-base leading-[1.9] text-foreground/90">
            {lesson.bestPractices.map((bp, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                <span>{bp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Practical Workshop Exercise */}
        <ExerciseSection lessonId={lesson.id} exercise={lesson.exercise} />

        {/* Conceptual Quiz */}
        <QuizSection lessonId={lesson.id} quizzes={lesson.quizzes} />

        {/* Senior Interview Questions */}
        <InterviewQuestionsSection questions={lesson.interviewQuestions} />

        {/* Capstone Connection */}
        {lesson.capstoneConnection && (
          <section className="my-8 p-5 rounded-xl border border-border bg-secondary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-primary block">
                {lesson.capstoneConnection.phase}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-foreground">
                {lesson.capstoneConnection.task}
              </h4>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono text-muted-foreground ltr-dir pt-1">
                {lesson.capstoneConnection.filesToModify.map((f, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-background border border-border">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/capstone"
              className="px-4 py-2 min-h-[44px] rounded-lg bg-secondary hover:bg-secondary/80 border border-border text-foreground text-xs font-bold shrink-0 flex items-center justify-center transition-colors"
            >
              پروژه سفارشات
            </Link>
          </section>
        )}

        {/* Summary & References */}
        <section id="summary" className="my-10 space-y-5 scroll-mt-24">
          <div className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-foreground">
              جمع‌بندی درس:
            </h3>
            <p className="text-[16px] sm:text-[17px] text-muted-foreground leading-[1.95]">
              {lesson.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-muted-foreground uppercase mb-3">
              مراجع رسمی و مستندات:
            </h4>
            <div className="flex flex-wrap gap-2">
              {lesson.references.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-border bg-secondary/40 hover:bg-secondary text-muted-foreground hover:text-foreground text-xs flex items-center gap-1.5 font-mono transition-colors ltr-dir min-h-[36px]"
                >
                  <span>{ref.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Notes Editor */}
        <NotesEditor lessonId={lesson.id} />

        {/* Navigation (Prev, Next, Complete) */}
        <LessonNavigation
          lessonId={lesson.id}
          prevLesson={prevLesson}
          nextLesson={nextLesson}
        />
      </article>

      {/* Desktop Sticky Table of Contents on the side (Visible only on xl+ screens) */}
      <TableOfContents items={tocItems} variant="desktop" />
    </div>
  );
}
