"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  ChevronLeft, 
  CheckCircle, 
  Circle, 
  Clock, 
  BookOpen, 
  LayoutDashboard, 
  Map, 
  Boxes, 
  RotateCcw, 
  BookMarked,
  Search,
  Download
} from "lucide-react";
import { WEEKS_META, ALL_LESSON_SUMMARIES } from "@/data/curriculum";
import { useAcademyStore } from "@/lib/store";
import { toPersianDigits, cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { progress, isLoaded } = useAcademyStore();
  const [expandedWeeks, setExpandedWeeks] = useState<Record<number, boolean>>({
    1: true,
  });

  const toggleWeek = (weekNum: number) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [weekNum]: !prev[weekNum],
    }));
  };

  const completedSet = new Set(isLoaded ? progress.completedLessons : []);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={cn(
          "fixed top-16 right-0 z-40 h-[calc(100vh-4rem)] w-80 bg-slate-950 border-l border-slate-800/80 transition-transform duration-300 overflow-y-auto flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        )}
      >
        {/* Navigation Quick Links */}
        <div className="p-4 border-b border-slate-800/80 space-y-1">
          <Link
            href="/"
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
              pathname === "/"
                ? "bg-orange-500/10 text-orange-400 font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            )}
          >
            <LayoutDashboard className="w-4 h-4" />
            داشبورد کلی
          </Link>
          <Link
            href="/roadmap"
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
              pathname === "/roadmap"
                ? "bg-orange-500/10 text-orange-400 font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            )}
          >
            <Map className="w-4 h-4" />
            نقشه راه کامل (۲۶ هفته)
          </Link>
          <Link
            href="/capstone"
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
              pathname === "/capstone"
                ? "bg-orange-500/10 text-orange-400 font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            )}
          >
            <Boxes className="w-4 h-4 text-orange-400" />
            پروژه محوری (مدیریت سفارشات)
          </Link>
          <Link
            href="/revision"
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
              pathname === "/revision"
                ? "bg-orange-500/10 text-orange-400 font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            )}
          >
            <RotateCcw className="w-4 h-4 text-indigo-400" />
            مرور، نشان‌شده‌ها و فلش‌کارت
          </Link>
          <Link
            href="/glossary"
            onClick={onClose}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
              pathname === "/glossary"
                ? "bg-orange-500/10 text-orange-400 font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            )}
          >
            <BookMarked className="w-4 h-4 text-emerald-400" />
            واژه‌نامه مفاهیم جاوا
          </Link>
        </div>

        {/* 26 Weeks Accordion */}
        <div className="flex-1 p-3 space-y-2">
          <div className="px-2 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
            <span>سرفصل‌های ۲۶ هفته</span>
            <span className="text-[10px] text-slate-400">۱۵۶ درس</span>
          </div>

          {WEEKS_META.map((week) => {
            const isExpanded = !!expandedWeeks[week.weekNumber];
            const weekLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === week.weekNumber);
            const completedInWeek = weekLessons.filter((l) => completedSet.has(l.id)).length;
            const isWeekDone = completedInWeek === weekLessons.length && weekLessons.length > 0;

            return (
              <div
                key={week.weekNumber}
                className="rounded-xl border border-slate-800/80 bg-slate-900/30 overflow-hidden"
              >
                {/* Week Header */}
                <button
                  onClick={() => toggleWeek(week.weekNumber)}
                  className="w-full px-3 py-2.5 flex items-center justify-between text-right hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold",
                        isWeekDone
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-slate-800 text-slate-400"
                      )}
                    >
                      {toPersianDigits(week.weekNumber)}
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-xs font-medium text-slate-200">
                        هفته {toPersianDigits(week.weekNumber)}: {week.titleEn}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {toPersianDigits(completedInWeek)} از {toPersianDigits(weekLessons.length)} تکمیل شده
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-400">
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronLeft className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Week Lessons List */}
                {isExpanded && (
                  <div className="border-t border-slate-800/60 p-1.5 space-y-1 bg-slate-950/60">
                    {weekLessons.map((lesson) => {
                      const isComplete = completedSet.has(lesson.id);
                      const isCurrent = pathname === `/lessons/${lesson.slug}`;

                      return (
                        <Link
                          key={lesson.id}
                          href={`/lessons/${lesson.slug}`}
                          onClick={onClose}
                          className={cn(
                            "flex items-start gap-2.5 p-2 rounded-lg text-xs transition-colors group",
                            isCurrent
                              ? "bg-orange-500/15 text-orange-300 font-medium border border-orange-500/30"
                              : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                          )}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isComplete ? (
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Circle className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 justify-between">
                              <span className="truncate font-medium">
                                درس {toPersianDigits(lesson.day)}: {lesson.titleEn}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 truncate mt-0.5">
                              {lesson.title}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info in sidebar */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950/90 text-[11px] text-slate-500 text-center">
          داده‌های آموزشی و پیشرفت تماماً به صورت محلی در مرورگر شما ذخیره می‌شود.
        </div>
      </aside>
    </>
  );
}
