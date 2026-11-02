"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Bookmark, 
  Flag, 
  RotateCcw
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
    <div className="mt-12 pt-8 border-t border-slate-800 space-y-6">
      {/* Controls Bar: Completion, Bookmark, Review Needed */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl border border-slate-800 bg-slate-900/40">
        <div className="flex items-center gap-2">
          {/* Complete button */}
          <button
            onClick={() =>
              isCompleted
                ? markLessonIncomplete(lessonId)
                : markLessonComplete(lessonId)
            }
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border shadow-sm",
              isCompleted
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30"
                : "bg-orange-500 hover:bg-orange-600 text-white border-orange-500 shadow-orange-500/20"
            )}
          >
            <CheckCircle2
              className={cn(
                "w-4 h-4",
                isCompleted ? "text-emerald-400 fill-emerald-400/20" : "text-white"
              )}
            />
            <span>{isCompleted ? "درس تکمیل شده است ✓" : "ثبت به عنوان مطالعه شده"}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Bookmark */}
          <button
            onClick={() => toggleBookmark(lessonId)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-medium transition-colors",
              isBookmarked
                ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                : "bg-slate-800/80 text-slate-400 hover:text-white border-slate-700 hover:bg-slate-700"
            )}
            title={isBookmarked ? "حذف از نشان‌شده‌ها" : "نشان کردن این درس"}
          >
            <Bookmark
              className={cn(
                "w-3.5 h-3.5",
                isBookmarked ? "text-amber-400 fill-amber-400" : ""
              )}
            />
            <span>{isBookmarked ? "نشان‌شده" : "نشان کردن"}</span>
          </button>

          {/* Review Needed */}
          <button
            onClick={() => toggleReviewNeeded(lessonId)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-medium transition-colors",
              isReviewNeeded
                ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                : "bg-slate-800/80 text-slate-400 hover:text-white border-slate-700 hover:bg-slate-700"
            )}
            title={isReviewNeeded ? "حذف علامت مرور" : "نیاز به مرور مجدد"}
          >
            <Flag
              className={cn(
                "w-3.5 h-3.5",
                isReviewNeeded ? "text-rose-400 fill-rose-400" : ""
              )}
            />
            <span>{isReviewNeeded ? "نیازمند مرور" : "علامت برای مرور"}</span>
          </button>
        </div>
      </div>

      {/* Prev / Next Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevLesson ? (
          <Link
            href={`/lessons/${prevLesson.slug}`}
            className="p-4 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 hover:border-slate-700 transition-all flex items-center gap-3 group text-right"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white shrink-0">
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] text-slate-500 block">
                درس قبلی (هفته {toPersianDigits(prevLesson.week)})
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-orange-400 truncate block">
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
            className="p-4 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 hover:border-slate-700 transition-all flex items-center justify-between gap-3 group text-left sm:text-right"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[11px] text-slate-500 block">
                درس بعدی (هفته {toPersianDigits(nextLesson.week)})
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-orange-400 truncate block">
                {nextLesson.title}
              </span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white shrink-0">
              <ChevronLeft className="w-5 h-5" />
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
