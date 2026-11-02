"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  ChevronLeft, 
  CheckCircle2, 
  Circle, 
  Search, 
  Layers,
  Map,
  RotateCcw,
  BookMarked,
  Boxes,
  LayoutDashboard
} from "lucide-react";
import { WEEKS_META, ALL_LESSON_SUMMARIES } from "@/data/curriculum";
import { useAcademyStore } from "@/lib/store";
import { toPersianDigits, normalizeText, cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { progress, isLoaded } = useAcademyStore();
  const [filterQuery, setFilterQuery] = useState("");

  // Determine active week based on current path
  const activeLessonSlug = pathname.startsWith("/lessons/")
    ? pathname.replace("/lessons/", "")
    : null;

  const activeLesson = ALL_LESSON_SUMMARIES.find(
    (l) => l.slug === activeLessonSlug
  );

  const initialWeek = activeLesson ? activeLesson.week : 1;
  const [expandedWeeks, setExpandedWeeks] = useState<Record<number, boolean>>({
    [initialWeek]: true,
  });

  const toggleWeek = (weekNum: number) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [weekNum]: !prev[weekNum],
    }));
  };

  const completedSet = useMemo(
    () => new Set(isLoaded ? progress.completedLessons : []),
    [isLoaded, progress.completedLessons]
  );

  // Filter lessons if user typed in sidebar search
  const filteredWeeks = useMemo(() => {
    if (!filterQuery.trim()) return WEEKS_META;
    const q = normalizeText(filterQuery.trim());

    return WEEKS_META.filter((w) => {
      const weekLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === w.weekNumber);
      return (
        normalizeText(w.title).includes(q) ||
        w.titleEn.toLowerCase().includes(q) ||
        weekLessons.some(
          (l) =>
            normalizeText(l.title).includes(q) ||
            l.titleEn.toLowerCase().includes(q) ||
            l.tags.some((t) => t.toLowerCase().includes(q))
        )
      );
    });
  }, [filterQuery]);

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
        />
      )}

      <aside
        className={cn(
          "fixed top-14 right-0 z-40 h-[calc(100vh-3.5rem)] w-72 bg-card border-l border-border transition-transform duration-200 ease-in-out overflow-hidden flex flex-col select-none",
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        )}
      >
        {/* Quick Search inside Sidebar */}
        <div className="p-3 border-b border-border">
          <div className="relative">
            <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="فیلتر درس‌ها و هفته‌ها..."
              className="w-full pl-2 pr-8 py-1.5 text-xs rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60"
            />
          </div>
        </div>

        {/* 26 Weeks Accordion List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <div className="px-2 py-1.5 text-[11px] font-medium text-muted-foreground flex items-center justify-between">
            <span>سرفصل‌های آموزشی</span>
            <span className="font-mono text-[10px]">۲۶ هفته / ۱۵۶ درس</span>
          </div>

          {filteredWeeks.map((week) => {
            const isExpanded = !!expandedWeeks[week.weekNumber] || filterQuery.trim().length > 0;
            const weekLessons = ALL_LESSON_SUMMARIES.filter((l) => l.week === week.weekNumber);
            const completedInWeek = weekLessons.filter((l) => completedSet.has(l.id)).length;
            const isWeekDone = completedInWeek === 6;

            return (
              <div
                key={week.weekNumber}
                className="rounded-lg border border-border/50 bg-background/50 overflow-hidden"
              >
                {/* Week Header */}
                <button
                  onClick={() => toggleWeek(week.weekNumber)}
                  className="w-full px-2.5 py-2 flex items-center justify-between text-right hover:bg-secondary/60 transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={cn(
                        "w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-bold shrink-0",
                        isWeekDone
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-secondary text-muted-foreground"
                      )}
                    >
                      {toPersianDigits(week.weekNumber)}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-foreground truncate">
                        {week.titleEn}
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        {toPersianDigits(completedInWeek)}/۶ تکمیل شده
                      </div>
                    </div>
                  </div>

                  <div className="text-muted-foreground shrink-0 mr-1">
                    {isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronLeft className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {/* Lessons in this week */}
                {isExpanded && (
                  <div className="border-t border-border/40 py-1 bg-card/60">
                    {weekLessons.map((lesson) => {
                      const isComplete = completedSet.has(lesson.id);
                      const isCurrent = pathname === `/lessons/${lesson.slug}`;

                      return (
                        <Link
                          key={lesson.id}
                          href={`/lessons/${lesson.slug}`}
                          onClick={onClose}
                          className={cn(
                            "flex items-start gap-2 px-2.5 py-1.5 text-xs transition-colors",
                            isCurrent
                              ? "bg-primary/10 text-primary font-medium border-r-2 border-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                          )}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isComplete ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            ) : (
                              <Circle className="w-3 h-3 text-border" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-mono leading-tight truncate">
                              {toPersianDigits(lesson.day)}. {lesson.titleEn}
                            </div>
                            <div className="text-[10px] text-muted-foreground truncate mt-0.5">
                              {lesson.title}
                            </div>
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
        <div className="p-2.5 border-t border-border bg-card text-[11px] text-muted-foreground flex items-center justify-between">
          <Link
            href="/roadmap"
            onClick={onClose}
            className="hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <Map className="w-3.5 h-3.5" />
            <span>مشاهده نقشه کامل</span>
          </Link>
          <span className="font-mono text-[10px]">Offline Ready</span>
        </div>
      </aside>
    </>
  );
}
