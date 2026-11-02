"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Circle,
  Clock,
  Target,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Filter,
  Layers,
  ArrowRight,
  ChevronsUpDown,
} from "lucide-react";
import { WEEKS_META, ALL_LESSON_SUMMARIES } from "@/data/curriculum";
import { useAcademyStore } from "@/lib/store";
import { toPersianDigits, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";

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

  const completedSet = useMemo(
    () => new Set(isLoaded ? progress.completedLessons : []),
    [isLoaded, progress.completedLessons]
  );

  const totalCompleted = completedSet.size;
  const overallPercent = Math.round((totalCompleted / ALL_LESSON_SUMMARIES.length) * 100);

  // Find first uncompleted week or default to week 1
  const currentActiveWeek = useMemo(() => {
    for (const week of WEEKS_META) {
      const weekLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === week.weekNumber);
      const isWeekDone = weekLessons.every((l) => completedSet.has(l.id));
      if (!isWeekDone) return week.weekNumber;
    }
    return 1;
  }, [completedSet]);

  const toggleWeek = (wNum: number) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [wNum]: !prev[wNum],
    }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    WEEKS_META.forEach((w) => {
      all[w.weekNumber] = true;
    });
    setExpandedWeeks(all);
  };

  const collapseAll = () => {
    setExpandedWeeks({});
  };

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
      <div className="space-y-4 pb-6 border-b border-border">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>CURRICULUM_ROADMAP</span>
            <span className="text-muted-foreground/60">•</span>
            <span className="text-muted-foreground font-sans">۲۶ هفته • ۱۵۶ درس مهندسی</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={expandAll}
              className="text-xs h-7 px-2.5"
            >
              باز کردن همه
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={collapseAll}
              className="text-xs h-7 px-2.5 text-muted-foreground"
            >
              بستن همه
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            نقشه راه یادگیری و سرفصل‌های تخصصی
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            برنامه ساختاریافته ۶ ماهه برای ارتقای مهارت از Node.js/NestJS به معماری سازمانی Java 21 و Spring Boot 3.3. 
            تمام درس‌ها از ابتدا باز و قابل دسترسی هستند و پیشرفت شما به صورت خودکار و محلی ذخیره می‌شود.
          </p>
        </div>

        {/* Overview Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl border border-border bg-card/60">
          <div>
            <div className="text-[11px] text-muted-foreground font-medium">جلسات تکمیل شده</div>
            <div className="text-lg font-bold text-foreground font-mono mt-0.5">
              {toPersianDigits(totalCompleted)} <span className="text-xs font-normal text-muted-foreground">/ ۱۵۶</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] text-muted-foreground font-medium">درصد کل پیشرفت</div>
            <div className="text-lg font-bold text-primary font-mono mt-0.5">
              ٪{toPersianDigits(overallPercent)}
            </div>
          </div>
          <div>
            <div className="text-[11px] text-muted-foreground font-medium">مدت کل دوره</div>
            <div className="text-lg font-bold text-foreground font-mono mt-0.5">
              {toPersianDigits(78)} <span className="text-xs font-normal text-muted-foreground">ساعت</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] text-muted-foreground font-medium">هفته فعال فعلی</div>
            <div className="text-lg font-bold text-foreground font-mono mt-0.5">
              هفته {toPersianDigits(currentActiveWeek)}
            </div>
          </div>
        </div>

        {/* Categories Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 pb-1 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-muted-foreground shrink-0 ml-1" />
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border",
                selectedCategory === c.id
                  ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                  : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Weeks list */}
      <div className="space-y-4">
        {filteredWeeks.map((week) => {
          const weekLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === week.weekNumber);
          const completedInWeek = weekLessons.filter((l) => completedSet.has(l.id)).length;
          const weekProgressPercent = Math.round((completedInWeek / 6) * 100);
          const isWeekCompleted = completedInWeek === 6;
          const isCurrentActive = week.weekNumber === currentActiveWeek;
          const isExpanded = !!expandedWeeks[week.weekNumber];

          return (
            <div
              key={week.weekNumber}
              id={`week-${week.weekNumber}`}
              className={cn(
                "rounded-xl border transition-all duration-200 overflow-hidden",
                isCurrentActive
                  ? "border-primary/40 bg-card shadow-xs ring-1 ring-primary/20"
                  : isWeekCompleted
                  ? "border-border/80 bg-card/60"
                  : "border-border bg-card"
              )}
            >
              {/* Week Card Header */}
              <div
                onClick={() => toggleWeek(week.weekNumber)}
                className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-accent/40 transition-colors"
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleWeek(week.weekNumber);
                  }
                }}
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded border border-border bg-secondary text-foreground">
                      W{String(week.weekNumber).padStart(2, "0")}
                    </span>
                    <Badge variant={isWeekCompleted ? "success" : isCurrentActive ? "primary" : "neutral"}>
                      هفته {toPersianDigits(week.weekNumber)}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">
                      {week.category}
                    </span>
                    <span className="text-muted-foreground/40">•</span>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {toPersianDigits(week.estimatedHours)} ساعت
                    </span>
                    {isWeekCompleted && (
                      <Badge variant="success" className="text-[10px] py-0">
                        تکمیل شد ✓
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-foreground flex flex-wrap items-baseline gap-2">
                      <span>{week.title}</span>
                      <span className="text-xs text-muted-foreground font-mono ltr-dir">
                        [{week.titleEn}]
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-3xl">
                      {week.description}
                    </p>
                  </div>

                  <div className="text-[11px] text-muted-foreground/80 font-mono ltr-dir flex items-center gap-1.5">
                    <span className="text-primary font-bold">Focus:</span>
                    <span>{week.focus}</span>
                  </div>
                </div>

                {/* Progress bar & Toggle */}
                <div className="flex items-center gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-border/60">
                  <div className="text-right min-w-[100px]">
                    <div className="text-xs font-mono font-medium text-foreground">
                      {toPersianDigits(completedInWeek)} / ۶ درس
                    </div>
                    <div className="w-24 mt-1.5">
                      <ProgressBar value={weekProgressPercent} size="sm" />
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg border border-border bg-secondary/60 text-muted-foreground hover:text-foreground">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              {isExpanded && (
                <div className="px-4 sm:px-6 pb-5 pt-3 border-t border-border bg-secondary/20 space-y-5">
                  {/* Learning Outcomes */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-primary" />
                      <span>دستاوردهای تخصصی این هفته:</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      {week.learningOutcomes.map((out, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-card/60 p-2 rounded-lg border border-border/60">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 6 Lessons Cards */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-foreground">
                      جلسات این هفته (۶ درس روزانه):
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {weekLessons.map((lesson) => {
                        const isComplete = completedSet.has(lesson.id);

                        return (
                          <Link
                            key={lesson.id}
                            href={`/lessons/${lesson.slug}`}
                            className={cn(
                              "p-3.5 rounded-xl border text-right transition-all flex flex-col justify-between group",
                              isComplete
                                ? "border-emerald-500/20 bg-emerald-950/5 hover:border-emerald-500/40"
                                : "border-border bg-card hover:border-primary/40 hover:bg-accent/30"
                            )}
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-secondary border border-border text-primary">
                                  D{lesson.day} • روز {toPersianDigits(lesson.day)}
                                </span>
                                {isComplete ? (
                                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-500 font-medium">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>خوانده شد</span>
                                  </span>
                                ) : (
                                  <Circle className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                                )}
                              </div>

                              <div className="space-y-1">
                                <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 font-mono ltr-dir">
                                  {lesson.titleEn}
                                </h4>
                                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                  {lesson.title}
                                </p>
                              </div>
                            </div>

                            <div className="pt-3 mt-2 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                              <span className="font-mono flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {toPersianDigits(lesson.estimatedMinutes)} دقیقه
                              </span>
                              <span className="text-primary font-medium group-hover:-translate-x-0.5 transition-transform flex items-center gap-0.5">
                                مطالعه درس
                                <ArrowRight className="w-3 h-3 rotate-180" />
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
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
