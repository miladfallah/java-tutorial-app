"use client";

import Link from "next/link";
import { Lesson } from "@/data/types";
import { ALL_LESSON_SUMMARIES } from "@/data/curriculum";
import { useAcademyStore } from "@/lib/store";
import { toPersianDigits } from "@/lib/utils";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { CodeBlock } from "./CodeBlock";
import { ExerciseSection } from "./ExerciseSection";
import { QuizSection } from "./QuizSection";
import { NotesEditor } from "./NotesEditor";
import { LessonNavigation } from "./LessonNavigation";
import { TableOfContents } from "./TableOfContents";
import { formatTechnicalText } from "@/lib/format-technical-text";

const sections = [
  { id: "concepts", label: "اصل موضوع" },
  { id: "code-examples", label: "نمونهٔ متمرکز" },
  { id: "exercise", label: "تمرین ۱۵ دقیقه‌ای" },
  { id: "quiz", label: "سنجش یادگیری" },
  { id: "further-reading", label: "مطالعهٔ اختیاری و یادداشت" },
];

export function FocusedLessonView({ lesson }: { lesson: Lesson }) {
  const { isReaderMode, progress } = useAcademyStore();
  const index = ALL_LESSON_SUMMARIES.findIndex(item => item.id === lesson.id);
  const number = Number(lesson.id.slice(-3));
  const practice = [7, 13, 16, 17, 151].includes(number) ? "CoreLab.java" : [20, 21, 22].includes(number) ? "InventoryLab.java" : [115, 116, 117, 119].includes(number) ? "AsyncLab.java" : null;
  return (
    <div className="lesson-layout flex items-start gap-6 2xl:gap-8">
      <article className="reading-column min-w-0 flex-1 mx-auto pb-12">
        <nav aria-label="مسیر درس" className="text-sm text-muted-foreground flex flex-wrap gap-2 mb-5">
          <Link href="/" className="hover:text-primary">داشبورد</Link><span>/</span>
          <Link href={`/roadmap#week-${lesson.week}`} className="hover:text-primary">هفته {toPersianDigits(lesson.week)}</Link>
          <span>/ روز {toPersianDigits(lesson.day)}</span>
        </nav>
        <header className="space-y-4 border-b border-border pb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-primary/10 text-primary px-2 py-1">جلسهٔ متمرکز · حدود {toPersianDigits(lesson.estimatedMinutes)} دقیقه</span>
            <span>{lesson.category}</span>
            {progress.completedLessons.includes(lesson.id) && <span className="text-primary">✓ خوانده شده</span>}
          </div>
          <h1 className="text-2xl sm:text-3xl leading-relaxed font-bold">{lesson.title}</h1>
          <p dir="ltr" className="text-sm text-left text-muted-foreground font-mono">{lesson.titleEn}</p>
          <p className="text-muted-foreground leading-relaxed">{lesson.description}</p>
          <p className="text-sm bg-secondary rounded-lg p-3 leading-relaxed">برنامهٔ پیشنهادی: ۵ دقیقه مطالعه، ۱۵ دقیقه تمرین و ۵ دقیقه سنجش. منابع و مقایسهٔ تکمیلی اختیاری‌اند؛ زمان، برآورد است.</p>
        </header>
        {!isReaderMode && <div className="lesson-toc-inline"><TableOfContents items={sections} variant="mobile" /></div>}
        <section id="concepts" className="my-8 scroll-mt-24 space-y-4">
          <h2 className="text-xl font-bold">اصل موضوع</h2>
          {lesson.conceptualSections.map(section => <MarkdownRenderer key={section.title} content={formatTechnicalText(section.content)} className="reading-body" />)}
          <div className="border-r-2 border-primary bg-primary/5 p-4 rounded-lg space-y-2">
            <p className="text-sm font-semibold text-primary">دام رایج</p>
            <MarkdownRenderer content={lesson.whyItMatters} />
          </div>
        </section>
        <section id="code-examples" className="my-8 scroll-mt-24">
          <h2 className="text-xl font-bold">نمونهٔ متمرکز</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">قطعهٔ آموزشی است؛ نوع‌های دامنه، importها و وابستگی‌های لازم را در پروژهٔ تمرین قرار بده. هر قطعه الزاماً یک فایل مستقل قابل اجرا نیست.</p>
          {lesson.codeExamples.map((example, i) => <CodeBlock key={i} code={example.code} language={example.language} title={example.language} />)}
        </section>
        <ExerciseSection key={`exercise-${lesson.id}`} lessonId={lesson.id} exercise={lesson.exercise} />
        {practice && <div className="my-4 rounded-lg border border-border p-4 space-y-2">
          <a download href={`/practice/${practice}`} className="text-primary underline font-semibold">دریافت آزمایش مستقل Java 25: <bdi>{practice}</bdi></a>
          <p className="text-sm text-muted-foreground leading-relaxed">بدون Maven و بدون دانلود وابستگی اجرا می‌شود. با JDK 25 در پوشهٔ فایل بزن: <code dir="ltr">java {practice}</code>. این آزمایش، نمونهٔ مکمل است؛ معیارهای تمرین جلسه را نیز جدا بررسی کن.</p>
        </div>}
        <QuizSection key={`quiz-${lesson.id}`} lessonId={lesson.id} quizzes={lesson.quizzes} />
        <section id="further-reading" className="my-8 scroll-mt-24 space-y-3">
          <h2 className="text-xl font-bold">برای ادامه، به انتخاب تو</h2>
          <details className="rounded-xl border border-border p-4">
            <summary className="cursor-pointer font-semibold">پل به تجربهٔ Node.js و منابع</summary>
            <div className="mt-4 space-y-4 leading-relaxed">
              <MarkdownRenderer content={lesson.comparisonWithNestJS.explanation} />
              {lesson.references.map(ref => <a key={ref.url} href={ref.url} target="_blank" rel="noopener noreferrer" className="block text-primary underline underline-offset-4">{ref.title} ↗</a>)}
              <p className="text-sm text-muted-foreground">خواندن منبع بیرونی اختیاری و نیازمند اینترنت است. نمونه‌های Java با مبنای JDK 25 نوشته شده‌اند؛ مثال‌های framework به وابستگی مربوط نیاز دارند.</p>
            </div>
          </details>
          <details className="rounded-xl border border-border p-4">
            <summary className="cursor-pointer font-semibold">یادداشت شخصی این جلسه</summary>
            <NotesEditor lessonId={lesson.id} />
          </details>
        </section>
        <LessonNavigation lessonId={lesson.id} prevLesson={ALL_LESSON_SUMMARIES[index - 1]} nextLesson={ALL_LESSON_SUMMARIES[index + 1]} />
      </article>
      {!isReaderMode && <aside className="lesson-toc-sidebar w-64 shrink-0 sticky top-20 self-start"><TableOfContents items={sections} variant="desktop" /></aside>}
    </div>
  );
}
