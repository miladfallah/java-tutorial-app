"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight,
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Flame, 
  Target, 
  Calendar,
  Sparkles,
  ChevronLeft,
  Circle,
  HelpCircle,
  Layers,
  Boxes,
  RotateCcw,
  BookMarked,
  Award
} from "lucide-react";
import { useAcademyStore } from "@/lib/store";
import { ALL_LESSON_SUMMARIES, WEEKS_META } from "@/data/curriculum";
import { toPersianDigits, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";

export default function DashboardPage() {
  const { progress, isLoaded, loadProgress } = useAcademyStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadProgress();
  }, [loadProgress]);

  const totalLessonsCount = ALL_LESSON_SUMMARIES.length;
  const totalWeeksCount = WEEKS_META.length;

  const completedSet = useMemo(
    () => new Set(isLoaded ? progress.completedLessons : []),
    [isLoaded, progress.completedLessons]
  );

  const completedCount = completedSet.size;
  const progressPercent = Math.round((completedCount / totalLessonsCount) * 100);
  const isAllCompleted = completedCount >= totalLessonsCount && totalLessonsCount > 0;

  // Find the immediate next lesson to study based on actual progress and last studied
  const nextLessonToStudy = useMemo(() => {
    if (!isLoaded) return ALL_LESSON_SUMMARIES[0];

    // 1. If user has a last-studied lesson that is still in progress (not completed)
    if (progress.lastStudiedLessonId && !completedSet.has(progress.lastStudiedLessonId)) {
      const match = ALL_LESSON_SUMMARIES.find((l) => l.id === progress.lastStudiedLessonId);
      if (match) return match;
    }

    // 2. Find the first uncompleted lesson in chronological order
    for (const lesson of ALL_LESSON_SUMMARIES) {
      if (!completedSet.has(lesson.id)) {
        return lesson;
      }
    }

    // 3. All lessons completed
    return null;
  }, [isLoaded, progress.lastStudiedLessonId, completedSet]);

  // Current active week
  const currentWeekNum = nextLessonToStudy ? nextLessonToStudy.week : totalWeeksCount;
  const currentWeekMeta = WEEKS_META.find((w) => w.weekNumber === currentWeekNum);
  const currentWeekLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === currentWeekNum);
  const currentWeekCompletedCount = currentWeekLessons.filter((l) => completedSet.has(l.id)).length;
  const currentWeekPercent = currentWeekLessons.length > 0 
    ? Math.round((currentWeekCompletedCount / currentWeekLessons.length) * 100) 
    : 0;

  // Quiz pass statistics
  const quizStats = useMemo(() => {
    const totalAttempted = Object.keys(progress.quizResults).length;
    const passed = Object.values(progress.quizResults).filter((r) => r.passed).length;
    const rate = totalAttempted > 0 ? Math.round((passed / totalAttempted) * 100) : null;
    return { passed, totalAttempted, rate };
  }, [progress.quizResults]);

  // Study time formatted
  const studyHours = Math.floor((progress.studyTimeMinutes || 0) / 60);
  const studyMinutes = (progress.studyTimeMinutes || 0) % 60;

  return (
    <div className="space-y-8 pb-16">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-primary">
          مسیر انتقال تخصصی Node.js به Java/Spring
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
          داشبورد یادگیری مهندسی جاوا
        </h1>
        <p className="text-base text-muted-foreground max-w-3xl leading-[1.85]">
          انتقال ساخت‌یافته و عمیق به معماری‌های مقیاس‌بزرگ سازمانی بر پایه Java 25 LTS و Spring Boot 3.4.
        </p>
      </div>

      {/* Primary Hero: What is my next step? */}
      {isAllCompleted ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
            <Award className="w-5 h-5 text-emerald-400" />
            <span>تبریک! تمامی {toPersianDigits(totalLessonsCount)} درس دوره را با موفقیت پشت سر گذاشتید</span>
          </div>
          <p className="text-foreground/90 leading-relaxed text-sm sm:text-base">
            اکنون زمان تثبیت آموخته‌ها با اجرای پروژه کامل Order & Inventory و مرور دوره‌ای مباحث از طریق فلش‌کارت‌های تخصصی است.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/capstone">
              <Button variant="primary" size="md" className="font-bold gap-2">
                <span>ورود به پروژه سفارشات و انبار</span>
                <ArrowLeft className="w-4 h-4 mr-1" />
              </Button>
            </Link>
            <Link href="/revision">
              <Button variant="secondary" size="md" className="gap-2">
                <RotateCcw className="w-4 h-4 text-primary" />
                <span>مرور هوشمند فلش‌کارت‌ها</span>
              </Button>
            </Link>
          </div>
        </div>
      ) : nextLessonToStudy ? (
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-primary-muted text-primary border border-primary/20">
                  جلسه پیشنهادی بعدی
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  هفته {toPersianDigits(currentWeekNum)} از {toPersianDigits(totalWeeksCount)} • روز {toPersianDigits(nextLessonToStudy.day)}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {nextLessonToStudy.title}
              </h2>

              <div
                dir="ltr"
                style={{ direction: "ltr", textAlign: "left" }}
                className="text-xs sm:text-sm font-mono text-muted-foreground ltr-dir"
              >
                {nextLessonToStudy.titleEn}
              </div>

              <p className="text-[15px] sm:text-base text-muted-foreground leading-[1.85]">
                {nextLessonToStudy.description}
              </p>
            </div>

            {/* Action Button */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <Link href={`/lessons/${nextLessonToStudy.slug}`}>
                <Button variant="primary" size="lg" className="font-bold text-sm min-h-[46px] px-5 gap-2 cursor-pointer">
                  <span>ادامه مطالعه جلسه {toPersianDigits(nextLessonToStudy.day)}</span>
                  <ArrowLeft className="w-4 h-4 mr-1" />
                </Button>
              </Link>

              <div className="text-xs text-muted-foreground font-mono">
                مدت زمان تخمینی: {toPersianDigits(nextLessonToStudy.estimatedMinutes)} دقیقه
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Crisp Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Course Progress */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
            <span>پیشرفت کل دوره</span>
            <span className="font-mono">{toPersianDigits(completedCount)} / {toPersianDigits(totalLessonsCount)} درس</span>
          </div>
          <div className="text-2xl font-extrabold text-foreground font-mono">
            ٪{toPersianDigits(progressPercent)}
          </div>
          <ProgressBar value={progressPercent} size="sm" />
        </div>

        {/* Metric 2: Quiz Success Rate */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
            <span>نرخ قبولی آزمونک‌ها</span>
            <span className="font-mono">
              {quizStats.totalAttempted > 0 
                ? `${toPersianDigits(quizStats.passed)} پاس‌شده`
                : "بدون آزمون"}
            </span>
          </div>
          <div className="text-2xl font-extrabold text-emerald-500 font-mono">
            {quizStats.rate !== null ? `٪${toPersianDigits(quizStats.rate)}` : "—"}
          </div>
          <div className="text-xs text-muted-foreground">
            {quizStats.totalAttempted > 0
              ? `${toPersianDigits(quizStats.totalAttempted)} آزمون ارزیابی ثبت شده`
              : "هنوز آزمونی انجام نشده است"}
          </div>
        </div>

        {/* Metric 3: Active Study Time */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
            <span>زمان فعال مطالعه</span>
            <span className="text-amber-500 font-semibold font-mono">
              {progress.streakDays > 0 ? `${toPersianDigits(progress.streakDays)} روز متوالی` : "شروع شده"}
            </span>
          </div>
          <div className="text-2xl font-extrabold text-foreground font-mono">
            {studyHours > 0 
              ? `${toPersianDigits(studyHours)} ساعت و ${toPersianDigits(studyMinutes)} دقیقه` 
              : `${toPersianDigits(studyMinutes)} دقیقه`}
          </div>
          <div className="text-xs text-muted-foreground">
            محاسبه‌شده بر اساس حضور فعال در صفحات درس
          </div>
        </div>
      </div>

      {/* Current Active Week Overview */}
      {currentWeekMeta && (
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-secondary text-primary border border-border">
                  هفته {toPersianDigits(currentWeekNum)} از {toPersianDigits(totalWeeksCount)}
                </span>
                <span className="text-xs text-muted-foreground">
                  {currentWeekMeta.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mt-1">
                {currentWeekMeta.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground font-mono">
                {toPersianDigits(currentWeekCompletedCount)} از {toPersianDigits(currentWeekLessons.length)} جلسه تکمیل شده
              </span>
              <Link href={`/roadmap#week-${currentWeekNum}`}>
                <Button variant="secondary" size="sm" className="gap-1 cursor-pointer">
                  <span>مشاهده هفته</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Lessons Grid for Active Week */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentWeekLessons.map((lesson) => {
              const isThisCompleted = completedSet.has(lesson.id);
              const isCurrent = nextLessonToStudy?.id === lesson.id;

              return (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.slug}`}
                  className={cn(
                    "p-4 rounded-lg border transition-all text-right flex flex-col justify-between gap-2.5",
                    isCurrent
                      ? "border-primary/60 bg-primary-muted ring-1 ring-primary/30"
                      : isThisCompleted
                      ? "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50"
                      : "border-border bg-secondary/30 hover:bg-secondary/60 hover:border-border/80"
                  )}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-muted-foreground">
                        روز {toPersianDigits(lesson.day)}
                      </span>
                      {isThisCompleted ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0" />
                      )}
                    </div>
                    <div className="text-sm font-bold text-foreground line-clamp-1">
                      {lesson.title}
                    </div>
                    <div
                      dir="ltr"
                      style={{ direction: "ltr", textAlign: "left" }}
                      className="text-[11px] font-mono text-muted-foreground truncate ltr-dir"
                    >
                      {lesson.titleEn}
                    </div>
                  </div>

                  <div className="text-[11px] text-muted-foreground flex items-center justify-between pt-2 border-t border-border/40">
                    <span>{toPersianDigits(lesson.estimatedMinutes)} دقیقه</span>
                    <span className="text-primary font-medium flex items-center gap-0.5">
                      مطالعه
                      <ChevronLeft className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick Navigation to Key Hubs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/roadmap"
          className="p-5 rounded-xl border border-border bg-card hover:bg-secondary/40 hover:border-border/80 transition-colors space-y-2 block"
        >
          <div className="w-8 h-8 rounded-lg bg-primary-muted text-primary border border-primary/20 flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <h4 className="text-base font-bold text-foreground">نقشه راه ۲۶ هفته‌ای</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            بررسی کل سرفصل‌ها، پیش‌نیازها و وضعیت پیشرفت در تمامی هفته‌ها.
          </p>
        </Link>

        <Link
          href="/capstone"
          className="p-5 rounded-xl border border-border bg-card hover:bg-secondary/40 hover:border-border/80 transition-colors space-y-2 block"
        >
          <div className="w-8 h-8 rounded-lg bg-primary-muted text-primary border border-primary/20 flex items-center justify-center">
            <Boxes className="w-4 h-4" />
          </div>
          <h4 className="text-base font-bold text-foreground">پروژه محوری سفارشات و انبار</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            سرویس کامل، قابل اجرا، تست‌شده و آماده با PostgreSQL، داکر و Maven.
          </p>
        </Link>

        <Link
          href="/revision"
          className="p-5 rounded-xl border border-border bg-card hover:bg-secondary/40 hover:border-border/80 transition-colors space-y-2 block"
        >
          <div className="w-8 h-8 rounded-lg bg-primary-muted text-primary border border-primary/20 flex items-center justify-center">
            <RotateCcw className="w-4 h-4" />
          </div>
          <h4 className="text-base font-bold text-foreground">مرور هوشمند و فلش‌کارت</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            یادآوری فعال مفاهیم کلیدی و مصاحبه‌های استخدامی ارشد جاوا و اسپرینگ.
          </p>
        </Link>
      </div>
    </div>
  );
}
