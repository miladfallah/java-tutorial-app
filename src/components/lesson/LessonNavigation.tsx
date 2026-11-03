"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Bookmark, 
  Flag
} from "lucide-react";
import { LessonSummary } from "@/data/curriculum";
import { useAcademyStore } from "@/lib/store";
import { toPersianDigits, cn } from "@/lib/utils";

interface LessonNavigationProps {
  lessonId: string;
  prevLesson?: LessonSummary;
  nextLesson?: LessonSummary;
}

export function LessonNavigation({
  lessonId,
  prevLesson,
  nextLesson,
}: LessonNavigationProps) {
  const {
    progress,
    markLessonComplete,
    markLessonIncomplete,
    toggleBookmark,
    toggleReviewNeeded,
  } = useAcademyStore();

  const isCompleted = progress.completedLessons.includes(lessonId);
  const isBookmarked = progress.bookmarks.includes(lessonId);
  const isReviewNeeded = progress.reviewNeeded.includes(lessonId);

  return (
    <div className="mt-14 pt-8 border-t border-border space-y-6">
      {/* Action controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border border-border bg-card shadow-xs">
        {/* Complete button (Accessible touch target >= 44px) */}
        <button
          onClick={() =>
            isCompleted
              ? markLessonIncomplete(lessonId)
              : markLessonComplete(lessonId)
          }
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg text-xs sm:text-sm font-bold transition-all border cursor-pointer",
            isCompleted
              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/15"
              : "bg-primary text-primary-foreground border-primary hover:bg-primary/90 shadow-sm"
          )}
          type="button"
        >
          <CheckCircle2
            className={cn(
              "w-4 h-4",
              isCompleted ? "text-emerald-700 dark:text-emerald-400" : "text-primary-foreground"
            )}
          />
          <span>{isCompleted ? "جلسه تکمیل شده است ✓" : "علامت‌گذاری به عنوان خوانده شده"}</span>
        </button>

        {/* Bookmark & Review needed buttons (Accessible touch targets >= 44px) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmark(lessonId)}
            className={cn(
              "inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-lg border text-xs sm:text-sm font-medium transition-colors cursor-pointer",
              isBookmarked
                ? "bg-amber-500/10 text-amber-400 border-amber-500/30 font-bold"
                : "bg-secondary text-muted-foreground hover:text-foreground border-border hover:bg-secondary/80"
            )}
            title={isBookmarked ? "حذف از نشان‌شده‌ها" : "نشان کردن این درس"}
            type="button"
          >
            <Bookmark
              className={cn("w-4 h-4", isBookmarked && "fill-amber-400")}
            />
            <span>{isBookmarked ? "نشان‌شده" : "نشان کردن"}</span>
          </button>

          <button
            onClick={() => toggleReviewNeeded(lessonId)}
            className={cn(
              "inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-lg border text-xs sm:text-sm font-medium transition-colors cursor-pointer",
              isReviewNeeded
                ? "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30 font-bold"
                : "bg-secondary text-muted-foreground hover:text-foreground border-border hover:bg-secondary/80"
            )}
            title={isReviewNeeded ? "حذف علامت مرور" : "نیاز به مرور مجدد"}
            type="button"
          >
            <Flag
              className={cn("w-4 h-4", isReviewNeeded && "fill-rose-400")}
            />
            <span>{isReviewNeeded ? "نیازمند مرور" : "علامت مرور"}</span>
          </button>
        </div>
      </div>

      {/* Prev / Next lesson links with touch targets >= 44px */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevLesson ? (
          <Link
            href={`/lessons/${prevLesson.slug}`}
            className="p-4 min-h-[64px] rounded-xl border border-border bg-card hover:border-primary/40 transition-colors flex items-center gap-3.5 text-right group cursor-pointer shadow-xs"
          >
            <div className="w-9 h-9 rounded-lg bg-secondary text-muted-foreground group-hover:text-primary flex items-center justify-center shrink-0 border border-border">
              <ChevronRight className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-xs text-muted-foreground block font-mono">
                درس قبلی • هفته {toPersianDigits(prevLesson.week)}
              </span>
              <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate block mt-0.5">
                {prevLesson.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link
            href={`/lessons/${nextLesson.slug}`}
            className="p-4 min-h-[64px] rounded-xl border border-border bg-card hover:border-primary/40 transition-colors flex items-center justify-between gap-3.5 text-right group cursor-pointer shadow-xs"
          >
            <div className="min-w-0 flex-1">
              <span className="text-xs text-muted-foreground block font-mono">
                درس بعدی • هفته {toPersianDigits(nextLesson.week)}
              </span>
              <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate block mt-0.5">
                {nextLesson.title}
              </span>
            </div>
            <div className="w-9 h-9 rounded-lg bg-secondary text-muted-foreground group-hover:text-primary flex items-center justify-center shrink-0 border border-border">
              <ChevronLeft className="w-4 h-4" />
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
