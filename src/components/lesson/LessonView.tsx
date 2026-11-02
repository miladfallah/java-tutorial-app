"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { 
  Clock, 
  Calendar, 
  BookOpen, 
  CheckCircle, 
  AlertTriangle, 
  Sparkles, 
  ExternalLink, 
  Boxes,
  Cpu,
  Target,
  Zap,
  Bookmark,
  Share2
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

interface LessonViewProps {
  lesson: Lesson;
}

export function LessonView({ lesson }: LessonViewProps) {
  const { progress, markLessonInProgress, setLastStudied } = useAcademyStore();

  useEffect(() => {
    // Record study session and mark in-progress if not yet completed
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

  return (
    <article className="pb-16 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
        <Link href="/" className="hover:text-white transition-colors">
          داشبورد
        </Link>
        <span>/</span>
        <Link href="/roadmap" className="hover:text-white transition-colors">
          هفته {toPersianDigits(lesson.week)}
        </Link>
        <span>/</span>
        <span className="text-slate-200 font-medium truncate">
          درس {toPersianDigits(lesson.day)}: {lesson.titleEn}
        </span>
      </nav>

      {/* Main Header */}
      <header className="space-y-4 pb-8 border-b border-slate-800">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/15 text-orange-400 border border-orange-500/30">
            هفته {toPersianDigits(lesson.week)} • روز {toPersianDigits(lesson.day)}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
            {lesson.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {toPersianDigits(lesson.estimatedMinutes)} دقیقه مطالعه
          </span>
          {isCompleted && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              تکمیل شده
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
          {lesson.title}
        </h1>

        <div className="text-sm font-mono text-orange-400/90 ltr-dir">
          {lesson.titleEn}
        </div>

        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          {lesson.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {lesson.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 ltr-dir"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Learning Objectives & Prerequisites Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Target className="w-4 h-4 text-orange-400" />
            اهداف یادگیری این جلسه:
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {lesson.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-orange-400 font-bold shrink-0 mt-0.5">•</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            پیش‌نیازهای فنی:
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {lesson.prerequisites.map((req, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why it matters */}
      <div className="my-8 p-5 sm:p-6 rounded-2xl border border-orange-500/30 bg-orange-950/10">
        <h3 className="text-sm font-bold text-orange-400 mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-orange-400" />
          چرا این موضوع برای یک مهندس ارشد بک‌اند حیاتی است؟
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          {lesson.whyItMatters}
        </p>
      </div>

      {/* Introduction */}
      <section className="my-8 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-r-4 border-orange-500 pr-3">
          مقدمه و ورود به مبحث
        </h2>
        <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-3 whitespace-pre-line">
          {lesson.introduction}
        </div>
      </section>

      {/* Conceptual Sections */}
      <div className="my-10 space-y-8">
        {lesson.conceptualSections.map((sec, idx) => (
          <section
            key={idx}
            className="p-5 sm:p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30 space-y-4"
          >
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-lg bg-slate-800 text-orange-400 flex items-center justify-center text-xs font-mono font-bold">
                {toPersianDigits(idx + 1)}
              </span>
              <span>{sec.title}</span>
            </h3>

            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {sec.content}
            </div>

            {sec.keyPoints && sec.keyPoints.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-800/60 bg-slate-950/40 p-3.5 rounded-xl">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  نکات کلیدی این بخش:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {sec.keyPoints.map((kp, kpIdx) => (
                    <li key={kpIdx} className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>{kp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Internals & Mechanisms */}
      {lesson.internalsAndMechanisms && (
        <section className="my-10 p-5 sm:p-7 rounded-2xl border border-cyan-500/30 bg-cyan-950/15">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                کالبدشکافی عمیق زیرساخت و معماری داخلی (Internals)
              </h3>
              <p className="text-xs text-cyan-300/80">
                بررسی لایه‌های پنهان ماشین مجازی جاوا، بایت‌کد و رفتار سطح پایین
              </p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line border-r-2 border-cyan-500/40 pr-3">
            {lesson.internalsAndMechanisms}
          </div>
        </section>
      )}

      {/* Real-World Scenario */}
      {lesson.realWorldScenario && (
        <section className="my-10 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <Boxes className="w-4 h-4 text-emerald-400" />
            سناریوی واقعی پروداکشن (Real-world Scenario)
          </h3>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <span className="text-emerald-400 font-semibold block mb-1">مسئله در سیستم تجاری:</span>
            <p className="mb-3">{lesson.realWorldScenario.scenario}</p>
            <span className="text-emerald-400 font-semibold block mb-1">راهکار پیاده‌سازی سازمانی:</span>
            <p>{lesson.realWorldScenario.solution}</p>
          </div>
        </section>
      )}

      {/* Code Examples */}
      <section className="my-10 space-y-6">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-r-4 border-orange-500 pr-3">
          نمونه کدهای اجرایی و استانداردهای صنعتی
        </h2>

        {lesson.codeExamples.map((example, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <span className="text-orange-400 font-mono">[{toPersianDigits(idx + 1)}]</span>
              <span>{example.title}</span>
            </h3>
            <p className="text-xs text-slate-400">{example.explanation}</p>
            <CodeBlock
              code={example.code}
              language={example.language}
              filename={example.filename}
              title={example.title}
            />
          </div>
        ))}
      </section>

      {/* NestJS vs Java Comparison Card */}
      <NestComparisonCard comparison={lesson.comparisonWithNestJS} />

      {/* Common Mistakes */}
      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
        <section className="my-10 space-y-4">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">
              اشتباهات متداول و الگوهای ضدطراحی (Anti-patterns)
            </h2>
          </div>

          <div className="space-y-4">
            {lesson.commonMistakes.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-rose-500/20 bg-rose-950/10 space-y-3"
              >
                <div className="text-sm font-bold text-rose-300">
                  {toPersianDigits(idx + 1)}. {m.mistake}
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-slate-400 block mb-1">
                    چرا این رویکرد خطرناک و آسیب‌زننده است؟
                  </span>
                  <p>{m.whyBad}</p>
                </div>
                <div className="text-xs text-emerald-300 leading-relaxed pt-2 border-t border-rose-500/20">
                  <span className="font-semibold text-emerald-400 block mb-1">
                    راهکار و شیوه اصولی:
                  </span>
                  <p>{m.solution}</p>
                </div>

                {(m.codeBad || m.codeGood) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {m.codeBad && (
                      <div>
                        <span className="text-[11px] text-rose-400 font-semibold block mb-1">
                          ✕ کد نادرست / ضدالگو:
                        </span>
                        <CodeBlock code={m.codeBad} language="java" />
                      </div>
                    )}
                    {m.codeGood && (
                      <div>
                        <span className="text-[11px] text-emerald-400 font-semibold block mb-1">
                          ✓ کد اصلاح‌شده و استاندارد:
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
      <section className="my-10 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/30">
        <h3 className="text-sm sm:text-base font-bold text-white mb-4 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          اصول زرین و Best Practices محیط پروداکشن
        </h3>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
          {lesson.bestPractices.map((bp, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <span>{bp}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Practical Exercise */}
      <ExerciseSection lessonId={lesson.id} exercise={lesson.exercise} />

      {/* Quiz */}
      <QuizSection lessonId={lesson.id} quizzes={lesson.quizzes} />

      {/* Senior Interview Questions */}
      <InterviewQuestionsSection questions={lesson.interviewQuestions} />

      {/* Capstone Connection */}
      {lesson.capstoneConnection && (
        <section className="my-8 p-5 rounded-2xl border border-orange-500/30 bg-orange-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider block">
              اتصال به پروژه محوری Order & Inventory System:
            </span>
            <h4 className="text-sm font-bold text-white">
              {lesson.capstoneConnection.task}
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300 ltr-dir pt-1">
              {lesson.capstoneConnection.filesToModify.map((f, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  {f}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/capstone"
            className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shrink-0 shadow-sm"
          >
            مشاهده پروژه محوری
          </Link>
        </section>
      )}

      {/* Summary */}
      <section className="my-8 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
        <h3 className="text-sm font-bold text-white mb-2">
          جمع‌بندی درس:
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {lesson.summary}
        </p>
      </section>

      {/* Official References */}
      <section className="my-8">
        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          مراجع رسمی و مستندات تکمیلی:
        </h4>
        <div className="flex flex-wrap gap-2">
          {lesson.references.map((ref, idx) => (
            <a
              key={idx}
              href={ref.url}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-1.5 transition-colors ltr-dir"
            >
              <span>{ref.title}</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          ))}
        </div>
      </section>

      {/* Personal Notes */}
      <NotesEditor lessonId={lesson.id} />

      {/* Navigation */}
      <LessonNavigation
        lessonId={lesson.id}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
    </article>
  );
}
