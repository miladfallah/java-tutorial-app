"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Clock, 
  Flame, 
  ArrowLeft, 
  Terminal,
  Layers,
  ChevronLeft,
  Circle,
  Map,
  RotateCcw,
  BookMarked,
  Boxes
} from "lucide-react";
import { useAcademyStore } from "@/lib/store";
import { ALL_LESSON_SUMMARIES, WEEKS_META } from "@/data/curriculum";
import { toPersianDigits, cn } from "@/lib/utils";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";

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
  const totalLessons = 156;
  const remainingLessons = totalLessons - completedCount;
  const completionPercent = Math.round((completedCount / totalLessons) * 100);

  // Next recommended lesson is the first incomplete lesson
  const nextLessonToStudy = useMemo(() => {
    return (
      ALL_LESSON_SUMMARIES.find((l) => !completedSet.has(l.id)) ||
      ALL_LESSON_SUMMARIES[0]
    );
  }, [completedSet]);

  const currentWeekNum = nextLessonToStudy ? nextLessonToStudy.week : 1;
  const currentWeekMeta = WEEKS_META.find((w) => w.weekNumber === currentWeekNum);
  const currentWeekLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === currentWeekNum);
  const currentWeekCompletedCount = currentWeekLessons.filter((l) => completedSet.has(l.id)).length;

  if (!mounted || !isLoaded) {
    return (
      <div className="py-24 flex flex-col items-center justify-center space-y-3">
        <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-xs text-muted-foreground font-mono">Loading academy state...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Page Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Engineering Command Center
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
          داشبورد یادگیری مهندسی جاوا
        </h1>
        <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed">
          انتقال ساخت‌یافته از Node.js/NestJS به معماری‌های مقیاس‌بزرگ با Java 21 LTS و Spring Boot 3.3.
        </p>
      </div>

      {/* Primary Hero: What is my next step? */}
      <div className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-primary-muted text-primary border border-primary/20">
                Next Scheduled Session
              </span>
              <span className="text-xs text-muted-foreground">
                هفته {toPersianDigits(currentWeekNum)} از ۲۶ • روز {toPersianDigits(nextLessonToStudy.day)}
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              {nextLessonToStudy.title}
            </h2>

            <div className="text-xs font-mono text-muted-foreground ltr-dir">
              {nextLessonToStudy.titleEn}
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {nextLessonToStudy.description}
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <Link href={`/lessons/${nextLessonToStudy.slug}`}>
              <Button variant="primary" size="lg" className="font-semibold text-xs sm:text-sm">
                <span>ادامه مطالعه جلسه {toPersianDigits(nextLessonToStudy.day)}</span>
                <ArrowLeft className="w-4 h-4 mr-1" />
              </Button>
            </Link>

            <div className="text-[11px] text-muted-foreground font-mono">
              مدت زمان تخمینی: {toPersianDigits(nextLessonToStudy.estimatedMinutes)} دقیقه
            </div>
          </div>
        </div>
      </div>

      {/* Three Crisp Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Metric 1: Course Progress */}
        <div className="p-4 rounded-xl border border-border bg-card space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>پیشرفت کل دوره</span>
            <span className="font-mono font-semibold text-foreground">
              {toPersianDigits(completionPercent)}%
            </span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-foreground font-mono">
            {toPersianDigits(completedCount)} <span className="text-xs text-muted-foreground font-sans">از {toPersianDigits(totalLessons)} درس</span>
          </div>
          <ProgressBar value={completionPercent} size="sm" />
        </div>

        {/* Metric 2: Streak */}
        <div className="p-4 rounded-xl border border-border bg-card space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>زنجیره مطالعه مداوم</span>
            <Flame className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-foreground font-mono">
            {toPersianDigits(progress.streakDays)} <span className="text-xs text-muted-foreground font-sans">روز پیوسته</span>
          </div>
          <div className="text-[11px] text-muted-foreground">
            {progress.streakDays > 0 ? "تداوم عالی! هر روز ۳۰ دقیقه" : "مطالعه امروز را ثبت کنید"}
          </div>
        </div>

        {/* Metric 3: Total Study Time */}
        <div className="p-4 rounded-xl border border-border bg-card space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>زمان یادگیری ثبت‌شده</span>
            <Clock className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-foreground font-mono">
            {toPersianDigits(Math.round((completedCount * 30) / 60))} <span className="text-xs text-muted-foreground font-sans">ساعت آموزشی</span>
          </div>
          <div className="text-[11px] text-muted-foreground">
            {toPersianDigits(remainingLessons)} جلسه باقیمانده تا اتمام
          </div>
        </div>
      </div>

      {/* 26-Week Bird's-Eye Matrix */}
      <div className="p-5 rounded-xl border border-border bg-card space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              ماتریس پیشرفت ۲۶ هفته
            </h3>
            <p className="text-xs text-muted-foreground">
              نمای کلی از کل مسیر دوره؛ هر مربع نشان‌دهنده یک هفته است.
            </p>
          </div>
          <Link
            href="/roadmap"
            className="text-xs text-primary hover:underline flex items-center gap-1 font-medium"
          >
            <span>مشاهده نقشه کامل</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid of 26 weeks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-13 gap-1.5 select-none">
          {WEEKS_META.map((w) => {
            const wLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === w.weekNumber);
            const wDone = wLessons.filter((l) => completedSet.has(l.id)).length;
            const isFull = wDone === 6;
            const isCurrent = w.weekNumber === currentWeekNum;

            return (
              <Link
                key={w.weekNumber}
                href="/roadmap"
                className={cn(
                  "p-2 rounded-lg border text-center transition-colors flex flex-col justify-between",
                  isFull
                    ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                    : isCurrent
                    ? "bg-primary-muted border-primary text-primary font-bold"
                    : "bg-secondary/40 border-border/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
                title={`هفته ${w.weekNumber}: ${w.titleEn} (${wDone}/6)`}
              >
                <div className="font-mono text-xs font-bold">
                  W{w.weekNumber}
                </div>
                <div className="text-[10px] font-mono mt-1 opacity-80">
                  {toPersianDigits(wDone)}/۶
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Current Active Week Breakdown & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Current Week Breakdown */}
        <div className="lg:col-span-2 p-5 sm:p-6 rounded-xl border border-border bg-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border/60">
            <div>
              <div className="text-[11px] font-mono text-primary uppercase">
                Active Week {currentWeekNum}
              </div>
              <h3 className="text-base font-semibold text-foreground mt-0.5">
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

          {/* List of 6 lessons */}
          <div className="space-y-1.5">
            {currentWeekLessons.map((lesson) => {
              const isDone = completedSet.has(lesson.id);
              const isNext = lesson.id === nextLessonToStudy.id;

              return (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.slug}`}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-lg border text-xs transition-colors group",
                    isDone
                      ? "border-border/50 bg-secondary/30 text-muted-foreground"
                      : isNext
                      ? "border-primary/50 bg-primary-muted text-foreground font-medium"
                      : "border-border bg-background hover:bg-secondary/60 text-foreground"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="shrink-0">
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Circle className="w-4 h-4 text-border group-hover:text-primary transition-colors" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-xs truncate">
                        {toPersianDigits(lesson.day)}. {lesson.titleEn}
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate mt-0.5">
                        {lesson.title}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-muted-foreground shrink-0 mr-2">
                    {toPersianDigits(lesson.estimatedMinutes)}m
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Column (1 Col): Secondary Hubs */}
        <div className="space-y-3">
          <Link
            href="/capstone"
            className="p-4 rounded-xl border border-border bg-card hover:bg-secondary/40 transition-colors block group"
          >
            <div className="flex items-center gap-2 text-primary font-medium text-xs mb-1">
              <Boxes className="w-4 h-4" />
              <span>پروژه محوری سفارشات</span>
            </div>
            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Order & Inventory Management
            </h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              معماری Modular Monolith، داکر، PostgreSQL، RabbitMQ و Outbox Pattern.
            </p>
          </Link>

          <Link
            href="/revision"
            className="p-4 rounded-xl border border-border bg-card hover:bg-secondary/40 transition-colors block group"
          >
            <div className="flex items-center gap-2 text-indigo-400 font-medium text-xs mb-1">
              <RotateCcw className="w-4 h-4" />
              <span>مرور و فلش‌کارت‌ها</span>
            </div>
            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              تثبیت مفاهیم و آمادگی مصاحبه
            </h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              فلش‌کارت‌های تخصصی، مرور درس‌های نشان‌شده و کوییزهای نیازمند تلاش مجدد.
            </p>
          </Link>

          <Link
            href="/glossary"
            className="p-4 rounded-xl border border-border bg-card hover:bg-secondary/40 transition-colors block group"
          >
            <div className="flex items-center gap-2 text-emerald-400 font-medium text-xs mb-1">
              <BookMarked className="w-4 h-4" />
              <span>واژه‌نامه مفاهیم</span>
            </div>
            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              تطبیق اصطلاحات جاوا و نودجی‌اس
            </h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              تعاریف استاندارد مفاهیم Spring Boot و معادل‌های آنها در NestJS.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
