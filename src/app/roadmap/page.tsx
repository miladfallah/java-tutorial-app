"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Target, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft,
  Sparkles,
  Filter
} from "lucide-react";
import { WEEKS_META, ALL_LESSON_SUMMARIES } from "@/data/curriculum";
import { useAcademyStore } from "@/lib/store";
import { toPersianDigits, cn } from "@/lib/utils";

export default function RoadmapPage() {
  const { progress, isLoaded } = useAcademyStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedWeeks, setExpandedWeeks] = useState<Record<number, boolean>>({
    1: true,
    2: true,
  });

  const categories = [
    { id: "all", label: "همه سرفصل‌ها (۲۶ هفته)" },
    { id: "Java Core", label: "هسته جاوا و JVM" },
    { id: "Spring Boot", label: "فریم‌ورک اسپرینگ‌بوت" },
    { id: "JPA & Hibernate", label: "پایگاه داده و هایبرنیت" },
    { id: "Testing", label: "تست‌نویسی و Testcontainers" },
    { id: "Event-Driven", label: "پیام‌رسانی و EDA" },
    { id: "Distributed Systems", label: "سیستم‌های توزیع‌شده" },
    { id: "DevOps", label: "دواپس و پروداکشن" },
  ];

  const toggleWeek = (wNum: number) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [wNum]: !prev[wNum],
    }));
  };

  const completedSet = new Set(isLoaded ? progress.completedLessons : []);

  const filteredWeeks = WEEKS_META.filter((w) => {
    if (selectedCategory === "all") return true;
    return (
      w.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      w.focus.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>برنامه زمانی ۲۶ هفته‌ای • ۱۵۶ جلسه ۳۰ دقیقه‌ای</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          نقشه راه جامع تبدیل به مهندس ارشد بک‌اند Java-first
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          هر هفته شامل ۶ درس هدفمند و یک روز مرور اختیاری است. شما می‌توانید به هر درسی بدون قفل‌گذاری دسترسی داشته باشید. 
          رنگ سبز نشان‌دهنده جلسات مطالعه‌شده است.
        </p>

        {/* Categories Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all border",
                selectedCategory === c.id
                  ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Weeks list */}
      <div className="space-y-6">
        {filteredWeeks.map((week) => {
          const weekLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === week.weekNumber);
          const completedInWeek = weekLessons.filter((l) => completedSet.has(l.id)).length;
          const weekProgressPercent = Math.round((completedInWeek / 6) * 100);
          const isWeekCompleted = completedInWeek === 6;
          const isExpanded = !!expandedWeeks[week.weekNumber];

          return (
            <div
              key={week.weekNumber}
              className={cn(
                "rounded-2xl border transition-all overflow-hidden",
                isWeekCompleted
                  ? "border-emerald-500/30 bg-emerald-950/10"
                  : "border-slate-800 bg-slate-900/40"
              )}
            >
              {/* Week Card Header */}
              <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                      هفته {toPersianDigits(week.weekNumber)}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {week.category}
                    </span>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {toPersianDigits(week.estimatedHours)} ساعت
                    </span>
                    {isWeekCompleted && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        تکمیل شد ✓
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{week.title}</span>
                    <span className="text-xs text-slate-400 font-mono ltr-dir">
                      ({week.titleEn})
                    </span>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                    {week.description}
                  </p>

                  <div className="text-[11px] text-slate-400 font-mono ltr-dir">
                    Focus: {week.focus}
                  </div>
                </div>

                {/* Progress bar & Toggle */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-200">
                      {toPersianDigits(completedInWeek)} از ۶ درس
                    </div>
                    <div className="w-28 bg-slate-800 rounded-full h-1.5 mt-1.5 overflow-hidden">
                      <div
                        className="bg-emerald-500 h-1.5 rounded-full transition-all"
                        style={{ width: `${weekProgressPercent}%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => toggleWeek(week.weekNumber)}
                    className="p-2.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    aria-label="نمایش جزئیات هفته"
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Learning Outcomes */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-4 pt-1 border-t border-slate-800/60 bg-slate-950/30">
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-orange-400" />
                      دستاوردهای تخصصی این هفته:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                      {week.learningOutcomes.map((out, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-orange-400 font-bold">•</span>
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 6 Lessons Cards */}
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    جلسات این هفته (۶ درس):
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {weekLessons.map((lesson) => {
                      const isComplete = completedSet.has(lesson.id);

                      return (
                        <Link
                          key={lesson.id}
                          href={`/lessons/${lesson.slug}`}
                          className={cn(
                            "p-3.5 rounded-xl border text-right transition-all flex flex-col justify-between group",
                            isComplete
                              ? "border-emerald-500/20 bg-emerald-950/15 hover:bg-emerald-950/25"
                              : "border-slate-800 bg-slate-900/60 hover:bg-slate-800/70 hover:border-orange-500/40"
                          )}
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-orange-400">
                                روز {toPersianDigits(lesson.day)}
                              </span>
                              {isComplete ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Circle className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400" />
                              )}
                            </div>
                            <h5 className="text-xs font-bold text-slate-100 group-hover:text-orange-400 transition-colors line-clamp-1">
                              {lesson.titleEn}
                            </h5>
                            <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                              {lesson.title}
                            </p>
                          </div>

                          <div className="pt-3 mt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
                            <span>{toPersianDigits(lesson.estimatedMinutes)} دقیقه</span>
                            <span className="group-hover:translate-x-0.5 text-orange-400 transition-transform">
                              مشاهده درس ←
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
