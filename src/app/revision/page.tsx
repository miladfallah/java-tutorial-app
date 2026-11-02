"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  RotateCcw, 
  Bookmark, 
  Flag, 
  HelpCircle, 
  Download, 
  Upload, 
  ChevronRight, 
  ChevronLeft, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Shuffle
} from "lucide-react";
import { useAcademyStore } from "@/lib/store";
import { ALL_LESSON_SUMMARIES } from "@/data/curriculum";
import { FLASHCARDS } from "@/data/flashcards";
import { exportProgressJSON, validateImportedProgress } from "@/lib/storage";
import { toPersianDigits, cn } from "@/lib/utils";

export default function RevisionPage() {
  const { progress, importProgress, resetProgress } = useAcademyStore();
  const [activeTab, setActiveTab] = useState<"flashcards" | "bookmarks" | "review" | "quizzes" | "backup">("flashcards");

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Backup state
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const bookmarkedLessons = ALL_LESSON_SUMMARIES.filter((l) =>
    progress.bookmarks.includes(l.id)
  );

  const reviewNeededLessons = ALL_LESSON_SUMMARIES.filter((l) =>
    progress.reviewNeeded.includes(l.id)
  );

  const failedQuizzesLessons = ALL_LESSON_SUMMARIES.filter((l) => {
    const result = progress.quizResults[l.id];
    return result && !result.passed;
  });

  const currentCard = FLASHCARDS[currentCardIndex];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * FLASHCARDS.length);
    setCurrentCardIndex(randomIndex);
  };

  // Export JSON file
  const handleExport = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(exportProgressJSON(progress));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `java-academy-progress-${new Date().toISOString().slice(0, 10)}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON file
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);
        if (validateImportedProgress(parsed)) {
          await importProgress(parsed);
          setImportStatus("اطلاعات پیشرفت با موفقیت بازیابی شد! ✓");
        } else {
          setImportStatus("فایل نامعتبر است. فرمت پشتیبان مطابقت ندارد.");
        }
      } catch (err) {
        setImportStatus("خطا در خواندن فایل JSON.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
          <RotateCcw className="w-4 h-4" />
          <span>مرکز تثبیت یادگیری و بازیابی داده‌ها</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          مرور، فلش‌کارت‌های مفهومی و مدیریت پشتیبان
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          جمعه‌ها و زمان‌های فراغت خود را به مرور فلش‌کارت‌ها، درس‌های نشان‌شده و کوییزهای ناموفق اختصاص دهید تا مفاهیم عمیقاً در ذهن تثبیت شوند.
        </p>

        {/* Tab switch */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => setActiveTab("flashcards")}
            className={cn(
              "px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5",
              activeTab === "flashcards"
                ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            فلش‌کارت‌های تخصصی ({toPersianDigits(FLASHCARDS.length)})
          </button>
          <button
            onClick={() => setActiveTab("bookmarks")}
            className={cn(
              "px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5",
              activeTab === "bookmarks"
                ? "bg-amber-600 text-white border-amber-500 shadow-sm"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
            )}
          >
            <Bookmark className="w-3.5 h-3.5" />
            نشان‌شده‌ها ({toPersianDigits(bookmarkedLessons.length)})
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={cn(
              "px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5",
              activeTab === "review"
                ? "bg-rose-600 text-white border-rose-500 shadow-sm"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
            )}
          >
            <Flag className="w-3.5 h-3.5" />
            نیازمند مرور ({toPersianDigits(reviewNeededLessons.length)})
          </button>
          <button
            onClick={() => setActiveTab("quizzes")}
            className={cn(
              "px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5",
              activeTab === "quizzes"
                ? "bg-purple-600 text-white border-purple-500 shadow-sm"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
            )}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            کوییزهای نیازمند تلاش مجدد ({toPersianDigits(failedQuizzesLessons.length)})
          </button>
          <button
            onClick={() => setActiveTab("backup")}
            className={cn(
              "px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5",
              activeTab === "backup"
                ? "bg-slate-700 text-white border-slate-600 shadow-sm"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
            )}
          >
            <Download className="w-3.5 h-3.5" />
            پشتیبان‌گیری و بازیابی
          </button>
        </div>
      </div>

      {/* Tab: Flashcards */}
      {activeTab === "flashcards" && (
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Controls Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>
              کارت {toPersianDigits(currentCardIndex + 1)} از {toPersianDigits(FLASHCARDS.length)}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 font-mono text-[11px]">
              {currentCard.category}
            </span>
            <button
              onClick={handleShuffle}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>تصادفی</span>
            </button>
          </div>

          {/* Flashcard Box */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[300px] p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/20 to-slate-900/60 shadow-xl flex flex-col justify-between transition-all hover:border-indigo-500/50"
          >
            <div>
              <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider mb-3">
                {isFlipped ? "پاسخ تخصصی و تحلیل مهندسی:" : "پرسش مفهومی:"}
              </div>

              {!isFlipped ? (
                <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                  {currentCard.question}
                </h3>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm sm:text-base font-semibold text-emerald-300 leading-relaxed">
                    {currentCard.answer}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-r-2 border-indigo-500 pr-3">
                    {currentCard.explanation}
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-400 block mb-1">
                      نکات طلایی:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {currentCard.keyPoints.map((kp, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-indigo-400 font-bold">•</span>
                          <span>{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                {isFlipped ? (
                  <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                ) : (
                  <Eye className="w-3.5 h-3.5 text-indigo-400" />
                )}
                {isFlipped ? "برای بازگشت به سوال کلیک کنید" : "برای مشاهده پاسخ کلیک کنید"}
              </span>
              <span className="text-[11px] text-slate-500">Space یا Click</span>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevCard}
              className="px-4 py-2 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 flex items-center gap-2 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
              <span>کارت قبلی</span>
            </button>
            <button
              onClick={handleNextCard}
              className="px-4 py-2 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 flex items-center gap-2 transition-colors"
            >
              <span>کارت بعدی</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab: Bookmarks */}
      {activeTab === "bookmarks" && (
        <div className="space-y-3">
          {bookmarkedLessons.length === 0 ? (
            <div className="p-8 rounded-2xl border border-slate-800 text-center text-slate-400 text-xs">
              شما هنوز هیچ درسی را نشان نکرده‌اید. در صفحه درس‌ها می‌توانید با آیکون بوکمارک جلسات مهم را علامت بزنید.
            </div>
          ) : (
            bookmarkedLessons.map((l) => (
              <Link
                key={l.id}
                href={`/lessons/${l.slug}`}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-all flex items-center justify-between gap-4 block"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-amber-400 font-bold">
                    <span>هفته {toPersianDigits(l.week)} • روز {toPersianDigits(l.day)}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 font-mono ltr-dir">{l.titleEn}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1">{l.title}</h4>
                </div>
                <ChevronLeft className="w-4 h-4 text-slate-500" />
              </Link>
            ))
          )}
        </div>
      )}

      {/* Tab: Review Needed */}
      {activeTab === "review" && (
        <div className="space-y-3">
          {reviewNeededLessons.length === 0 ? (
            <div className="p-8 rounded-2xl border border-slate-800 text-center text-slate-400 text-xs">
              هیچ درسی برای مرور علامت نخورده است. عالیه!
            </div>
          ) : (
            reviewNeededLessons.map((l) => (
              <Link
                key={l.id}
                href={`/lessons/${l.slug}`}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-all flex items-center justify-between gap-4 block"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-rose-400 font-bold">
                    <span>هفته {toPersianDigits(l.week)} • روز {toPersianDigits(l.day)}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 font-mono ltr-dir">{l.titleEn}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1">{l.title}</h4>
                </div>
                <ChevronLeft className="w-4 h-4 text-slate-500" />
              </Link>
            ))
          )}
        </div>
      )}

      {/* Tab: Quizzes to Retry */}
      {activeTab === "quizzes" && (
        <div className="space-y-3">
          {failedQuizzesLessons.length === 0 ? (
            <div className="p-8 rounded-2xl border border-slate-800 text-center text-emerald-400 text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>تمام کوییزهایی که در آن‌ها شرکت کرده‌اید با نمره قبولی پاس شده‌اند!</span>
            </div>
          ) : (
            failedQuizzesLessons.map((l) => {
              const res = progress.quizResults[l.id];
              return (
                <Link
                  key={l.id}
                  href={`/lessons/${l.slug}`}
                  className="p-4 rounded-xl border border-rose-500/30 bg-rose-950/10 hover:bg-rose-950/20 transition-all flex items-center justify-between gap-4 block"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-rose-400 font-bold">
                      <span>نمره کسب شده: {toPersianDigits(res?.score || 0)} از {toPersianDigits(res?.total || 0)}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 font-mono ltr-dir">{l.titleEn}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-1">{l.title}</h4>
                  </div>
                  <span className="text-xs text-rose-400 font-bold shrink-0">
                    آزمون مجدد ←
                  </span>
                </Link>
              );
            })
          )}
        </div>
      )}

      {/* Tab: Backup & Restore */}
      {activeTab === "backup" && (
        <div className="space-y-6 max-w-xl">
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Download className="w-4 h-4 text-emerald-400" />
              خروجی گرفتن از تمام پیشرفت و یادداشت‌ها (JSON Export)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              شما می‌توانید با دانلود فایل پشتیبان، تمام وضعیت درس‌های تکمیل شده، یادداشت‌های شخصی و نتایج کوییزها را ذخیره کرده و به کامپیوتر یا مرورگر دیگر منتقل کنید.
            </p>
            <button
              onClick={handleExport}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>دانلود فایل پشتیبان (.json)</span>
            </button>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Upload className="w-4 h-4 text-indigo-400" />
              بازیابی پیشرفت از فایل پشتیبان (JSON Import)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              فایل JSON قبلی خود را انتخاب کنید تا اطلاعات پیشرفت شما بدون نیاز به سرور فوراً در IndexedDB جایگزین شود.
            </p>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="block w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 file:cursor-pointer"
            />
            {importStatus && (
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-emerald-300">
                {importStatus}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
