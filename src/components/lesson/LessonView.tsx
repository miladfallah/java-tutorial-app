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
      { id: "why-it-matters", label: "چرایی موضوع" },
      { id: "introduction", label: "ورود به مبحث" },
      { id: "concepts", label: "مفاهیم و معماری" },
    ];
    if (lesson.internalsAndMechanisms) {
      items.push({ id: "internals", label: "کالبدشکافی زیرساخت" });
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
      { id: "best-practices", label: "اصول Best Practice" },
      { id: "exercise", label: "تمرین کارگاهی" },
      { id: "quiz", label: "آزمونک سنجش" },
      { id: "interview-questions", label: "سوالات مصاحبه ارشد" },
      { id: "summary", label: "جمع‌بندی و مراجع" }
    );
    return items;
  }, [lesson]);

  return (
    <div className="flex items-start gap-8 justify-between">
      {/* Main Prose Reading Column (Optimal max-w-3xl ~ 768px for focus) */}
      <article className="flex-1 min-w-0 max-w-3xl pb-20">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 font-sans select-none flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">
            داشبورد
          </Link>
          <span>/</span>
          <Link href="/roadmap" className="hover:text-foreground transition-colors">
            هفته {toPersianDigits(lesson.week)}
          </Link>
          <span>/</span>
          <span className="text-foreground truncate font-medium">
            درس {toPersianDigits(lesson.day)}
          </span>
        </nav>

        {/* Header Section */}
        <header className="space-y-3 pb-6 border-b border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-primary-muted text-primary border border-primary/20">
              Week {lesson.week} • Day {lesson.day}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-secondary text-muted-foreground border border-border/60">
              {lesson.category}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-secondary text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span>{toPersianDigits(lesson.estimatedMinutes)} دقیقه</span>
            </span>
            {isCompleted && (
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                تکمیل شده
              </span>
            )}
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
            {lesson.title}
          </h1>

          <div className="text-xs sm:text-sm font-mono text-muted-foreground ltr-dir">
            {lesson.titleEn}
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {lesson.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 pt-1">
            {lesson.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary/80 text-muted-foreground border border-border/50 ltr-dir"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Mobile Table of Contents */}
        <TableOfContents items={tocItems} />

        {/* Learning Objectives & Prerequisites */}
        <div id="objectives" className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h3 className="text-xs font-semibold text-foreground flex items-center gap-1.5 uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-primary" />
              <span>اهداف یادگیری این جلسه:</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {lesson.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card space-y-2">
            <h3 className="text-xs font-semibold text-foreground flex items-center gap-1.5 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>پیش‌نیازهای فنی:</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {lesson.prerequisites.map((req, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span className="text-foreground/90">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why it matters */}
        <section
          id="why-it-matters"
          className="my-6 p-4 sm:p-5 rounded-xl border border-primary/20 bg-primary-muted"
        >
          <div className="text-xs font-semibold text-primary mb-1">
            چرا این موضوع برای یک مهندس ارشد بک‌اند حیاتی است؟
          </div>
          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
            {lesson.whyItMatters}
          </p>
        </section>

        {/* Introduction */}
        <section id="introduction" className="my-8 space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2 border-r-2 border-primary pr-2.5">
            مقدمه و طرح بحث
          </h2>
          <div className="text-xs sm:text-sm text-foreground/90 leading-relaxed space-y-3 whitespace-pre-line">
            {lesson.introduction}
          </div>
        </section>

        {/* Conceptual Sections */}
        <section id="concepts" className="my-8 space-y-6">
          <h2 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2 border-r-2 border-primary pr-2.5">
            مفاهیم عمیق و اصول معماری
          </h2>

          <div className="space-y-4">
            {lesson.conceptualSections.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border border-border bg-card space-y-3"
              >
                <h3 className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded text-[11px] font-mono border border-border bg-secondary text-muted-foreground flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{sec.title}</span>
                </h3>

                <div className="text-xs sm:text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
                  {sec.content}
                </div>

                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <div className="pt-2 border-t border-border/50">
                    <span className="text-[11px] font-medium text-muted-foreground block mb-1">
                      نکات کلیدی:
                    </span>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {sec.keyPoints.map((kp, kpIdx) => (
                        <li key={kpIdx} className="flex items-start gap-1.5">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-foreground/90">{kp}</span>
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
            className="my-8 p-4 sm:p-5 rounded-xl border border-border bg-secondary/30 space-y-2.5"
          >
            <div className="flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm">
              <Cpu className="w-4 h-4 text-primary" />
              <span>کالبدشکافی عمیق زیرساخت و معماری داخلی (Internals)</span>
            </div>
            <div className="text-xs sm:text-sm text-foreground/90 leading-relaxed whitespace-pre-line border-r-2 border-primary/50 pr-2.5">
              {lesson.internalsAndMechanisms}
            </div>
          </section>
        )}

        {/* Real-World Scenario */}
        {lesson.realWorldScenario && (
          <section
            id="real-world-scenario"
            className="my-8 p-4 sm:p-5 rounded-xl border border-border bg-card space-y-2.5"
          >
            <div className="flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm">
              <Boxes className="w-4 h-4 text-primary" />
              <span>سناریوی واقعی پروداکشن (Real-world Scenario)</span>
            </div>
            <div className="p-3 rounded-lg border border-border bg-background space-y-2 text-xs sm:text-sm">
              <div>
                <span className="text-primary font-medium block mb-0.5">صورت مسئله در سیستم تجاری:</span>
                <p className="text-muted-foreground leading-relaxed">{lesson.realWorldScenario.scenario}</p>
              </div>
              <div className="pt-2 border-t border-border/50">
                <span className="text-emerald-400 font-medium block mb-0.5">راهکار پیاده‌سازی سازمانی:</span>
                <p className="text-foreground/90 leading-relaxed">{lesson.realWorldScenario.solution}</p>
              </div>
            </div>
          </section>
        )}

        {/* Code Examples */}
        {lesson.codeExamples && lesson.codeExamples.length > 0 && (
          <section id="code-examples" className="my-8 space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2 border-r-2 border-primary pr-2.5">
              نمونه کدهای اجرایی و استانداردهای صنعتی
            </h2>

            {lesson.codeExamples.map((example, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-baseline justify-between text-xs">
                  <h3 className="font-semibold text-foreground">
                    {idx + 1}. {example.title}
                  </h3>
                  {example.titleEn && (
                    <span className="font-mono text-[10px] text-muted-foreground ltr-dir">
                      {example.titleEn}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
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
          <section id="common-mistakes" className="my-8 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
              <AlertTriangle className="w-4 h-4" />
              <h2 className="text-foreground">اشتباهات متداول و الگوهای ضدطراحی (Anti-patterns)</h2>
            </div>

            <div className="space-y-3">
              {lesson.commonMistakes.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-2 text-xs sm:text-sm"
                >
                  <div className="font-bold text-foreground">
                    {idx + 1}. {m.mistake}
                  </div>
                  <div>
                    <span className="font-semibold text-rose-400 block mb-0.5">
                      چرا این رویکرد خطرناک و آسیب‌زننده است؟
                    </span>
                    <p className="text-muted-foreground leading-relaxed">{m.whyBad}</p>
                  </div>
                  <div className="pt-1.5 border-t border-rose-500/20">
                    <span className="font-semibold text-emerald-400 block mb-0.5">
                      راهکار اصولی:
                    </span>
                    <p className="text-foreground/90 leading-relaxed">{m.solution}</p>
                  </div>

                  {(m.codeBad || m.codeGood) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                      {m.codeBad && (
                        <div>
                          <span className="text-[10px] font-mono text-rose-400 font-semibold block mb-0.5">
                            ✕ کد نادرست:
                          </span>
                          <CodeBlock code={m.codeBad} language="java" />
                        </div>
                      )}
                      {m.codeGood && (
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-0.5">
                            ✓ کد اصلاح‌شده:
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
          className="my-8 p-4 sm:p-5 rounded-xl border border-border bg-card space-y-2.5"
        >
          <div className="flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>اصول زرین و Best Practices محیط پروداکشن</span>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
            {lesson.bestPractices.map((bp, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-foreground/90">{bp}</span>
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
          <section className="my-8 p-4 sm:p-5 rounded-xl border border-border bg-secondary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-primary uppercase tracking-wider block">
                {lesson.capstoneConnection.phase}
              </span>
              <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                {lesson.capstoneConnection.task}
              </h4>
              <div className="flex flex-wrap gap-1 text-[11px] font-mono text-muted-foreground ltr-dir pt-0.5">
                {lesson.capstoneConnection.filesToModify.map((f, i) => (
                  <span key={i} className="px-1.5 py-0.5 rounded bg-background border border-border">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/capstone"
              className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 border border-border text-foreground text-xs font-semibold shrink-0"
            >
              پروژه سفارشات
            </Link>
          </section>
        )}

        {/* Summary & References */}
        <section id="summary" className="my-8 space-y-4">
          <div className="p-4 sm:p-5 rounded-xl border border-border bg-card space-y-2">
            <h3 className="text-xs sm:text-sm font-semibold text-foreground">
              جمع‌بندی درس:
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {lesson.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              مراجع رسمی و مستندات:
            </h4>
            <div className="flex flex-wrap gap-2">
              {lesson.references.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-md border border-border bg-secondary/40 hover:bg-secondary text-muted-foreground hover:text-foreground text-xs flex items-center gap-1.5 font-mono transition-colors ltr-dir"
                >
                  <span>{ref.title}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
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

      {/* Desktop Sticky Table of Contents on the side */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
