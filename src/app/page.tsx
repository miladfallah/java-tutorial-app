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
  BookMarked
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

  const completedSet = useMemo(
    () => new Set(isLoaded ? progress.completedLessons : []),
    [isLoaded, progress.completedLessons]
  );

  const completedCount = completedSet.size;
  const progressPercent = Math.round((completedCount / ALL_LESSON_SUMMARIES.length) * 100);

  // Find the immediate next lesson to study based on actual progress
  const nextLessonToStudy = useMemo(() => {
    // If user has a last studied lesson that is not finished, or first uncompleted
    for (const lesson of ALL_LESSON_SUMMARIES) {
      if (!completedSet.has(lesson.id)) {
        return lesson;
      }
    }
    return ALL_LESSON_SUMMARIES[0];
  }, [completedSet]);

  // Current active week number
  const currentWeekNum = nextLessonToStudy ? nextLessonToStudy.week : 1;
  const currentWeekMeta = WEEKS_META.find((w) => w.weekNumber === currentWeekNum);
  const currentWeekLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === currentWeekNum);
  const currentWeekCompletedCount = currentWeekLessons.filter((l) => completedSet.has(l.id)).length;
  const currentWeekPercent = Math.round((currentWeekCompletedCount / 6) * 100);

  // Quiz pass statistics
  const quizStats = useMemo(() => {
    const passed = Object.values(progress.quizResults).filter((r) => r.passed).length;
    const totalAttempted = Object.keys(progress.quizResults).length;
    const rate = totalAttempted > 0 ? Math.round((passed / totalAttempted) * 100) : 100;
    return { passed, totalAttempted, rate };
  }, [progress.quizResults]);

  return (
    <div className="space-y-8 pb-16">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-muted-foreground uppercase">
          ENGINEERING_COMMAND_CENTER
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
          داشبورد یادگیری مهندسی جاوا
        </h1>
        <p className="text-base text-muted-foreground max-w-3xl leading-[1.85]">
          انتقال ساخت‌یافته از Node.js/NestJS به معماری‌های مقیاس‌بزرگ با Java 21 LTS و Spring Boot 3.3.
        </p>
      </div>

      {/* Primary Hero: What is my next step? */}
      <div className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-primary-muted text-primary border border-primary/20">
                Next Scheduled Session
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                هفته {toPersianDigits(currentWeekNum)} از ۲۶ • روز {toPersianDigits(nextLessonToStudy.day)}
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

          {/* Action Button (Min touch target >= 44px) */}
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

      {/* Three Crisp Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Course Progress */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
            <span>پیشرفت کل دوره</span>
            <span className="font-mono">{toPersianDigits(completedCount)} / ۱۵۶ درس</span>
          </div>
          <div className="text-2xl font-extrabold text-foreground font-mono">
            ٪{toPersianDigits(progressPercent)}
          </div>
          <ProgressBar value={progressPercent} size="sm" />
        </div>

        {/* Metric 2: Quiz Success Rate */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
            <span>نرخ قبولی در آزمونک‌ها</span>
            <span className="font-mono">{toPersianDigits(quizStats.passed)} آزمون پاس شده</span>
          </div>
          <div className="text-2xl font-extrabold text-emerald-500 font-mono">
            ٪{toPersianDigits(quizStats.rate)}
          </div>
          <div className="text-xs text-muted-foreground">
            {quizStats.totalAttempted > 0
              ? `${toPersianDigits(quizStats.totalAttempted)} آزمون ارزیابی ثبت شده`
              : "هنوز در آزمونی شرکت نکرده‌اید"}
          </div>
        </div>

        {/* Metric 3: Study Streak */}
        <div className="p-5 rounded-xl border border-border bg-card space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
            <span>استمرار روزانه مطالعه (Streak)</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-extrabold text-amber-500 font-mono flex items-baseline gap-1.5">
            <span>{toPersianDigits(progress.streakDays)}</span>
            <span className="text-xs font-normal text-muted-foreground">روز متوالی</span>
          </div>
          <div className="text-xs text-muted-foreground">
            برنامه پیشنهادی: ۳۰ دقیقه روزانه از شنبه تا پنجشنبه
          </div>
        </div>
      </div>

      {/* Bird's Eye View: 26 Weeks Progress Matrix */}
      <div className="rounded-xl border border-border bg-card p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border">
          <div className="space-y-0.5">
            <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              <span>ماتریس دید پرنده ۲۶ هفته آموزشی</span>
            </h3>
            <p className="text-xs text-muted-foreground">
              روی هر هفته کلیک کنید تا سرفصل‌ها و درس‌های آن را مشاهده نمایید.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
              <span>تکمیل‌شده</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-primary" />
              <span>هفته فعال</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-secondary border border-border" />
              <span>خوانده‌نشده</span>
            </span>
          </div>
        </div>

        {/* 26 Blocks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-13 gap-2">
          {WEEKS_META.map((w) => {
            const wLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === w.weekNumber);
            const wDone = wLessons.filter((l) => completedSet.has(l.id)).length;
            const isFull = wDone === 6;
            const isCurrent = w.weekNumber === currentWeekNum;

            return (
              <Link
                key={w.weekNumber}
                href={`/roadmap#week-${w.weekNumber}`}
                className={cn(
                  "p-2.5 rounded-lg border text-center transition-all group flex flex-col justify-between min-h-[64px]",
                  isFull
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:border-emerald-500/60"
                    : isCurrent
                    ? "border-primary bg-primary-muted text-primary ring-1 ring-primary/40 font-bold"
                    : "border-border bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
                title={`هفته ${w.weekNumber}: ${w.title} (${wDone}/۶)`}
              >
                <div className="font-mono text-xs font-bold">
                  W{String(w.weekNumber).padStart(2, "0")}
                </div>
                <div className="text-[10px] font-mono mt-1">
                  {toPersianDigits(wDone)}/۶
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Active Week Focused View + Quick Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Active Week Breakdown */}
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div>
              <div className="text-xs font-mono text-primary font-semibold">
                ACTIVE_WEEK_MODULE
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mt-0.5">
                هفته {toPersianDigits(currentWeekNum)}: {currentWeekMeta?.titleEn}
              </h3>
              <p className="text-xs text-muted-foreground">
                {currentWeekMeta?.title}
              </p>
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              {toPersianDigits(currentWeekCompletedCount)} از ۶ تکمیل شده
            </div>
          </div>

          {/* List of 6 lessons with min touch target >= 44px */}
          <div className="space-y-2">
            {currentWeekLessons.map((lesson) => {
              const isDone = completedSet.has(lesson.id);
              const isNext = lesson.id === nextLessonToStudy.id;

              return (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.slug}`}
                  className={cn(
                    "flex items-center justify-between p-3.5 min-h-[48px] rounded-lg border text-xs sm:text-sm transition-colors group",
                    isDone
                      ? "border-border/50 bg-secondary/30 text-muted-foreground"
                      : isNext
                      ? "border-primary/50 bg-primary-muted text-foreground font-bold ring-1 ring-primary/30"
                      : "border-border bg-background hover:bg-secondary/60 text-foreground"
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0">
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Circle className="w-4 h-4 text-border group-hover:text-primary transition-colors" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div
                        dir="ltr"
                        style={{ direction: "ltr", textAlign: "left" }}
                        className="font-mono text-xs sm:text-sm truncate"
                      >
                        {toPersianDigits(lesson.day)}. {lesson.titleEn}
                      </div>
                      <div className="text-xs text-muted-foreground truncate mt-0.5">
                        {lesson.title}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-muted-foreground shrink-0 mr-2">
                    {toPersianDigits(lesson.estimatedMinutes)}m
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Column (1 Col): Secondary Hubs with touch targets >= 44px */}
        <div className="space-y-4">
          <Link
            href="/capstone"
            className="p-5 rounded-xl border border-border bg-card hover:bg-secondary/40 transition-colors block group shadow-xs"
          >
            <div className="flex items-center gap-2 text-primary font-bold text-xs mb-1">
              <Boxes className="w-4 h-4" />
              <span>پروژه محوری سفارشات</span>
            </div>
            <h4
              dir="ltr"
              style={{ direction: "ltr", textAlign: "left" }}
              className="text-sm font-bold text-foreground group-hover:text-primary transition-colors font-mono"
            >
              Order & Inventory Management
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
              معماری Modular Monolith، داکر، PostgreSQL، RabbitMQ و Outbox Pattern.
            </p>
          </Link>

          <Link
            href="/revision"
            className="p-5 rounded-xl border border-border bg-card hover:bg-secondary/40 transition-colors block group shadow-xs"
          >
            <div className="flex items-center gap-2 text-primary font-bold text-xs mb-1">
              <RotateCcw className="w-4 h-4" />
              <span>مرور و فلش‌کارت‌ها</span>
            </div>
            <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              تثبیت مفاهیم و آمادگی مصاحبه
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
              فلش‌کارت‌های تخصصی، مرور درس‌های نشان‌شده و کوییزهای نیازمند تلاش مجدد.
            </p>
          </Link>

          <Link
            href="/glossary"
            className="p-5 rounded-xl border border-border bg-card hover:bg-secondary/40 transition-colors block group shadow-xs"
          >
            <div className="flex items-center gap-2 text-primary font-bold text-xs mb-1">
              <BookMarked className="w-4 h-4" />
              <span>واژه‌نامه مفاهیم</span>
            </div>
            <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              تطبیق اصطلاحات جاوا و نودجی‌اس
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
              تعاریف استاندارد مفاهیم Spring Boot و معادل‌های آنها در NestJS.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
