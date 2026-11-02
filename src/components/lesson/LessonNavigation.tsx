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
    <div className="mt-12 pt-6 border-t border-border space-y-5">
      {/* Action controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl border border-border bg-card">
        {/* Complete button */}
        <button
          onClick={() =>
            isCompleted
              ? markLessonIncomplete(lessonId)
              : markLessonComplete(lessonId)
          }
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all border",
            isCompleted
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/15"
              : "bg-primary text-primary-foreground border-primary hover:bg-primary/90 shadow-sm"
          )}
        >
          <CheckCircle2
            className={cn(
              "w-4 h-4",
              isCompleted ? "text-emerald-400" : "text-primary-foreground"
            )}
          />
          <span>{isCompleted ? "جلسه تکمیل شده است ✓" : "ثبت به عنوان مطالعه شده"}</span>
        </button>

        {/* Bookmark & Review needed buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmark(lessonId)}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-colors",
              isBookmarked
                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                : "bg-secondary text-muted-foreground hover:text-foreground border-border hover:bg-secondary/80"
            )}
            title={isBookmarked ? "حذف از نشان‌شده‌ها" : "نشان کردن این درس"}
          >
            <Bookmark
              className={cn("w-3.5 h-3.5", isBookmarked && "fill-amber-400")}
            />
            <span>{isBookmarked ? "نشان‌شده" : "نشان کردن"}</span>
          </button>

          <button
            onClick={() => toggleReviewNeeded(lessonId)}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-colors",
              isReviewNeeded
                ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                : "bg-secondary text-muted-foreground hover:text-foreground border-border hover:bg-secondary/80"
            )}
            title={isReviewNeeded ? "حذف علامت مرور" : "نیاز به مرور مجدد"}
          >
            <Flag
              className={cn("w-3.5 h-3.5", isReviewNeeded && "fill-rose-400")}
            />
            <span>{isReviewNeeded ? "نیازمند مرور" : "علامت مرور"}</span>
          </button>
        </div>
      </div>

      {/* Prev / Next lesson links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prevLesson ? (
          <Link
            href={`/lessons/${prevLesson.slug}`}
            className="p-3.5 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors flex items-center gap-3 text-right group"
          >
            <div className="w-8 h-8 rounded-lg bg-secondary text-muted-foreground group-hover:text-foreground flex items-center justify-center shrink-0 border border-border/60">
              <ChevronRight className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-muted-foreground block font-mono">
                درس قبلی • هفته {toPersianDigits(prevLesson.week)}
              </span>
              <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors truncate block">
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
            className="p-3.5 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors flex items-center justify-between gap-3 text-right group"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[10px] text-muted-foreground block font-mono">
                درس بعدی • هفته {toPersianDigits(nextLesson.week)}
              </span>
              <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors truncate block">
                {nextLesson.title}
              </span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-secondary text-muted-foreground group-hover:text-foreground flex items-center justify-center shrink-0 border border-border/60">
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
