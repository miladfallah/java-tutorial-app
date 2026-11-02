"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Clock, 
  Flame, 
  ArrowLeft, 
  Calendar, 
  Trophy, 
  Sparkles, 
  BookOpen, 
  TrendingUp,
  Boxes,
  Zap,
  Bookmark,
  ChevronLeft,
  RotateCcw
} from "lucide-react";
import { useAcademyStore } from "@/lib/store";
import { ALL_LESSON_SUMMARIES, WEEKS_META } from "@/data/curriculum";
import { toPersianDigits, formatMinutes, cn } from "@/lib/utils";

export default function DashboardPage() {
  const { progress, isLoaded, loadProgress } = useAcademyStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadProgress();
  }, [loadProgress]);

  if (!mounted || !isLoaded) {
    return (
      <div className="py-20 flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
        <p className="text-sm text-slate-400">در حال بارگذاری اطلاعات پیشرفت...</p>
      </div>
    );
  }

  const completedCount = progress.completedLessons.length;
  const totalLessons = 156;
  const remainingLessons = totalLessons - completedCount;
  const completionPercent = Math.round((completedCount / totalLessons) * 100);

  // Identify last studied lesson or next lesson to study
  let lastStudiedLesson = ALL_LESSON_SUMMARIES.find(
    (l) => l.id === progress.lastStudiedLessonId
  );
  if (!lastStudiedLesson && ALL_LESSON_SUMMARIES.length > 0) {
    lastStudiedLesson = ALL_LESSON_SUMMARIES[0];
  }

  // Next recommended lesson is the first incomplete lesson
  const nextLessonToStudy =
    ALL_LESSON_SUMMARIES.find(
      (l) => !progress.completedLessons.includes(l.id)
    ) || ALL_LESSON_SUMMARIES[0];

  const currentWeekNum = nextLessonToStudy ? nextLessonToStudy.week : 1;
  const currentWeekMeta = WEEKS_META.find((w) => w.weekNumber === currentWeekNum);

  // Estimated completion: 30 minutes per lesson * remaining lessons
  // Assuming 6 lessons/week study schedule
  const estimatedDaysRemaining = Math.ceil(remainingLessons * (7 / 6));
  const estimatedWeeksRemaining = Math.ceil(remainingLessons / 6);

  // Calculation of achievements
  const achievements = [
    {
      id: "first-step",
      title: "شروع قدرتمند",
      desc: "اولین درس آکادمی جاوا را با موفقیت مطالعه کردید.",
      unlocked: completedCount >= 1,
      icon: Zap,
    },
    {
      id: "week-1",
      title: "تسلط بر هسته جاوا",
      desc: "هفته اول و مبانی JVM را به پایان رساندید.",
      unlocked: completedCount >= 6,
      icon: Trophy,
    },
    {
      id: "quarter",
      title: "یک چهارم راه",
      desc: "بیش از ۳۹ درس از دوره را تکمیل کردید.",
      unlocked: completedCount >= 39,
      icon: Sparkles,
    },
    {
      id: "halfway",
      title: "نقطه عطف ۷۸ درس",
      desc: "نصف دوره ۲۶ هفته‌ای با موفقیت سپری شد.",
      unlocked: completedCount >= 78,
      icon: Flame,
    },
    {
      id: "senior-ready",
      title: "مهندس ارشد Java-first",
      desc: "تمام ۱۵۶ درس و پروژه محوری کامل شد.",
      unlocked: completedCount >= 156,
      icon: Boxes,
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Hero / Welcome Banner */}
      <div className="relative rounded-3xl border border-orange-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-orange-950/30 p-6 sm:p-8 overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                پلتفرم آموزشی اختصاصی مهندسان بک‌اند
              </span>
              <span className="text-xs text-slate-400">
                هفته فعلی: {toPersianDigits(currentWeekNum)} از {toPersianDigits(26)}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              خوش آمدید، مهندس! مسیر ارتقا به <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Java-first Engineer</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              شما در حال گذار از توسعه Node.js/NestJS به معماری‌های مقیاس‌بزرگ سازمانی با Java 21 و Spring Boot هستید. 
              هدف روزانه: ۳۰ دقیقه مطالعه متمرکز و پیاده‌سازی گام‌به‌گام پروژه سفارشات.
            </p>
          </div>

          {/* Continue Learning CTA */}
          {nextLessonToStudy && (
            <div className="shrink-0">
              <Link
                href={`/lessons/${nextLessonToStudy.slug}`}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm shadow-xl shadow-orange-500/25 hover:scale-[1.02] transition-all group"
              >
                <div className="text-right">
                  <span className="text-[11px] block font-medium opacity-90">
                    ادامه یادگیری (درس {toPersianDigits(nextLessonToStudy.day)}):
                  </span>
                  <span className="text-sm font-bold block truncate max-w-[220px]">
                    {nextLessonToStudy.titleEn}
                  </span>
                </div>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Primary Statistics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Overall Completion */}
        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>پیشرفت کل دوره</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            {toPersianDigits(completionPercent)}٪
          </div>
          <div className="text-[11px] text-slate-400">
            {toPersianDigits(completedCount)} از {toPersianDigits(totalLessons)} درس تکمیل شده
          </div>
          {/* Progress bar */}
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </div>

        {/* Stat 2: Streak */}
        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>زنجیره مطالعه مداوم</span>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
            {toPersianDigits(progress.streakDays)} روز
          </div>
          <div className="text-[11px] text-slate-400">
            {progress.streakDays > 0 ? "تداوم عالی! هر روز ۳۰ دقیقه" : "امروز مطالعه را شروع کنید"}
          </div>
        </div>

        {/* Stat 3: Study Time */}
        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>مجموع زمان مطالعه</span>
            <Clock className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">
            {toPersianDigits(Math.round((completedCount * 30) / 60))} ساعت
          </div>
          <div className="text-[11px] text-slate-400">
            بر مبنای جلسات ۳۰ دقیقه‌ای استاندارد
          </div>
        </div>

        {/* Stat 4: Remaining */}
        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>درس‌های باقیمانده</span>
            <TrendingUp className="w-4 h-4 text-orange-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">
            {toPersianDigits(remainingLessons)} درس
          </div>
          <div className="text-[11px] text-slate-400">
            تخمین اتمام: حدود {toPersianDigits(estimatedWeeksRemaining)} هفته دیگر
          </div>
        </div>
      </div>

      {/* Current Week Status & Upcoming Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Current Week Breakdown */}
        <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  هفته فعال شما
                </span>
              </div>
              <h2 className="text-lg font-bold text-white mt-1">
                هفته {toPersianDigits(currentWeekNum)}: {currentWeekMeta?.titleEn}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentWeekMeta?.title}
              </p>
            </div>

            <Link
              href="/roadmap"
              className="text-xs text-orange-400 hover:text-orange-300 font-medium flex items-center gap-1"
            >
              <span>مشاهده نقشه راه</span>
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>

          {/* Lessons list of current week */}
          <div className="space-y-2 pt-2">
            {ALL_LESSON_SUMMARIES.filter((l) => l.week === currentWeekNum).map((lesson) => {
              const isDone = progress.completedLessons.includes(lesson.id);

              return (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.slug}`}
                  className={cn(
                    "flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm transition-all group",
                    isDone
                      ? "border-slate-800/60 bg-slate-950/40 text-slate-300"
                      : "border-slate-800 bg-slate-900/60 hover:border-orange-500/40 hover:bg-slate-900 text-white"
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0">
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-600 group-hover:border-orange-400" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold truncate">
                          روز {toPersianDigits(lesson.day)}: {lesson.titleEn}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        {lesson.title}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-500 font-mono shrink-0 mr-3">
                    {toPersianDigits(lesson.estimatedMinutes)} دقیقه
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Column: Achievements & Quick Links */}
        <div className="space-y-6">
          {/* Recent Achievements */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              دستاوردهای یادگیری شما
            </h3>

            <div className="space-y-3">
              {achievements.map((ach) => {
                const Icon = ach.icon;
                return (
                  <div
                    key={ach.id}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-xl border text-xs transition-colors",
                      ach.unlocked
                        ? "border-amber-500/30 bg-amber-950/15 text-slate-200"
                        : "border-slate-800/60 bg-slate-950/30 text-slate-500 opacity-60"
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                        ach.unlocked
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "bg-slate-800 text-slate-500"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold flex items-center gap-2">
                        <span>{ach.title}</span>
                        {ach.unlocked && (
                          <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.2 rounded">
                            کسب شد ✓
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] mt-0.5 opacity-90">{ach.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Capstone Card Link */}
          <div className="p-5 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-950/20 to-slate-900/40 space-y-3">
            <div className="flex items-center gap-2 text-orange-400">
              <Boxes className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white">
                پروژه عملی: سامانه سفارشات و انبار
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              این پروژه پیوسته همگام با ۲۶ هفته جلو می‌رود و تمام مفاهیم Spring Boot، JPA، Kafka، Docker و تست را پوشش می‌دهد.
            </p>
            <Link
              href="/capstone"
              className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-semibold"
            >
              <span>مشاهده جزئیات معماری و کدها</span>
              <ChevronLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
