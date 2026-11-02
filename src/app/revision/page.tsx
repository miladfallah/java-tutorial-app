"use client";

import React, { useState, useEffect } from "react";
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
  Shuffle,
  Clock,
  ArrowRight
} from "lucide-react";
import { useAcademyStore } from "@/lib/store";
import { ALL_LESSON_SUMMARIES } from "@/data/curriculum";
import { FLASHCARDS } from "@/data/flashcards";
import { exportProgressJSON, validateImportedProgress } from "@/lib/storage";
import { toPersianDigits, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function RevisionPage() {
  const { progress, importProgress } = useAcademyStore();
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

  // Keyboard navigation for flashcards
  useEffect(() => {
    if (activeTab !== "flashcards") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.code === "Space") {
        e.preventDefault();
        setIsFlipped((f) => !f);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleNextCard();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handlePrevCard();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab]);

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
          setImportStatus("فایل نامعتبر است. ساختار JSON مطابقت ندارد.");
        }
      } catch {
        setImportStatus("خطا در پردازش فایل JSON.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-4 pb-6 border-b border-border">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>REVISION_HUB</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="text-muted-foreground font-sans">تثبیت مفاهیم، مرور و پشتیبان</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            مرور، فلش‌کارت‌های مفهومی و مدیریت پشتیبان
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            روزهای جمعه یا ساعات مرور را به بررسی فلش‌کارت‌های معماری، رفع اشکال کوییزهای آزموده شده و جلسات نشان‌شده اختصاص دهید تا مفاهیم عمیقاً در حافظه کاری شما تثبیت شوند.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <button
            onClick={() => setActiveTab("flashcards")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border flex items-center gap-1.5",
              activeTab === "flashcards"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>فلش‌کارت‌ها</span>
            <span className="font-mono text-[10px] opacity-80">({toPersianDigits(FLASHCARDS.length)})</span>
          </button>

          <button
            onClick={() => setActiveTab("bookmarks")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border flex items-center gap-1.5",
              activeTab === "bookmarks"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>نشان‌شده‌ها</span>
            <span className="font-mono text-[10px] opacity-80">({toPersianDigits(bookmarkedLessons.length)})</span>
          </button>

          <button
            onClick={() => setActiveTab("review")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border flex items-center gap-1.5",
              activeTab === "review"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            <Flag className="w-3.5 h-3.5" />
            <span>نیازمند مرور</span>
            <span className="font-mono text-[10px] opacity-80">({toPersianDigits(reviewNeededLessons.length)})</span>
          </button>

          <button
            onClick={() => setActiveTab("quizzes")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border flex items-center gap-1.5",
              activeTab === "quizzes"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>کوییزهای ناموفق</span>
            <span className="font-mono text-[10px] opacity-80">({toPersianDigits(failedQuizzesLessons.length)})</span>
          </button>

          <button
            onClick={() => setActiveTab("backup")}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors border flex items-center gap-1.5",
              activeTab === "backup"
                ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            <Download className="w-3.5 h-3.5" />
            <span>پشتیبان‌گیری و بازیابی</span>
          </button>
        </div>
      </div>

      {/* Tab: Flashcards */}
      {activeTab === "flashcards" && (
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* Controls Bar */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono">
              کارت {toPersianDigits(currentCardIndex + 1)} از {toPersianDigits(FLASHCARDS.length)}
            </span>
            <Badge variant="neutral" className="font-mono text-[11px]">
              {currentCard.category}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShuffle}
              className="text-xs h-7 px-2 text-muted-foreground hover:text-foreground gap-1"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>کارت تصادفی</span>
            </Button>
          </div>

          {/* Flashcard Box */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[320px] p-6 sm:p-8 rounded-xl border border-border bg-card shadow-xs hover:border-primary/40 flex flex-col justify-between transition-all select-none"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsFlipped(!isFlipped);
              }
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-primary uppercase tracking-wider">
                  {isFlipped ? "ANSWER & ARCHITECTURE ANALYSIS" : "QUESTION"}
                </span>
                <span className="text-[11px] text-muted-foreground/60 font-mono">
                  {isFlipped ? "رویه پاسخ" : "رویه سوال"}
                </span>
              </div>

              {!isFlipped ? (
                <div className="py-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground leading-relaxed">
                    {currentCard.question}
                  </h3>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm sm:text-base font-bold text-foreground leading-relaxed">
                    {currentCard.answer}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed border-r-2 border-primary pr-3">
                    {currentCard.explanation}
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-foreground block mb-1.5">
                      نکات کلیدی مهندسی:
                    </span>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {currentCard.keyPoints.map((kp, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                {isFlipped ? (
                  <EyeOff className="w-3.5 h-3.5 text-muted-foreground" />
                ) : (
                  <Eye className="w-3.5 h-3.5 text-primary" />
                )}
                <span>{isFlipped ? "برای بازگشت به سوال کلیک کنید" : "برای مشاهده پاسخ کلیک کنید"}</span>
              </span>
              <kbd className="hidden sm:inline-block font-mono text-[10px] px-1.5 py-0.5 rounded bg-secondary border border-border text-muted-foreground">
                Space / Click
              </kbd>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-between pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevCard}
              className="text-xs h-8 gap-1.5"
            >
              <ChevronRight className="w-4 h-4" />
              <span>کارت قبلی</span>
            </Button>
            <span className="text-[11px] text-muted-foreground font-mono hidden sm:inline-block">
              کلیدهای جهت‌نما ← / → برای جابجایی
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextCard}
              className="text-xs h-8 gap-1.5"
            >
              <span>کارت بعدی</span>
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Tab: Bookmarks */}
      {activeTab === "bookmarks" && (
        <div className="space-y-3">
          {bookmarkedLessons.length === 0 ? (
            <div className="p-10 rounded-xl border border-dashed border-border text-center space-y-2">
              <Bookmark className="w-8 h-8 mx-auto text-muted-foreground/40" />
              <p className="text-sm font-semibold text-foreground">
                هنوز درسی را نشان نکرده‌اید
              </p>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                در صفحه هر درس، با کلیک روی آیکون نشان می‌توانید مباحث مهم را برای مراجعه بعدی در این قسمت ذخیره کنید.
              </p>
            </div>
          ) : (
            bookmarkedLessons.map((l) => (
              <Link
                key={l.id}
                href={`/lessons/${l.slug}`}
                className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors flex items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono">
                    <span className="text-primary font-bold">هفته {toPersianDigits(l.week)} • روز {toPersianDigits(l.day)}</span>
                    <span>•</span>
                    <span className="ltr-dir">{l.titleEn}</span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {l.title}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary">
                  <span className="hidden sm:inline">مشاهده درس</span>
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))
          )}
        </div>
      )}

      {/* Tab: Review Needed */}
      {activeTab === "review" && (
        <div className="space-y-3">
          {reviewNeededLessons.length === 0 ? (
            <div className="p-10 rounded-xl border border-dashed border-border text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500/60" />
              <p className="text-sm font-semibold text-foreground">
                هیچ درسی برای مرور علامت نخورده است
              </p>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                جلساتی که مباحث چالش‌برانگیز دارند را می‌توانید در انتهای درس به عنوان «نیازمند مرور مجدد» علامت بزنید.
              </p>
            </div>
          ) : (
            reviewNeededLessons.map((l) => (
              <Link
                key={l.id}
                href={`/lessons/${l.slug}`}
                className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors flex items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono">
                    <span className="text-amber-500 font-bold">هفته {toPersianDigits(l.week)} • روز {toPersianDigits(l.day)}</span>
                    <span>•</span>
                    <span className="ltr-dir">{l.titleEn}</span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {l.title}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary">
                  <span className="hidden sm:inline">مرور مجدد</span>
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))
          )}
        </div>
      )}

      {/* Tab: Quizzes to Retry */}
      {activeTab === "quizzes" && (
        <div className="space-y-3">
          {failedQuizzesLessons.length === 0 ? (
            <div className="p-10 rounded-xl border border-dashed border-border text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500" />
              <p className="text-sm font-semibold text-foreground">
                وضعیت عالی است! کوییز ناموفقی وجود ندارد
              </p>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                تمامی آزمون‌هایی که تا الان در آن‌ها شرکت کرده‌اید با نمره قبولی پشت سر گذاشته شده‌اند.
              </p>
            </div>
          ) : (
            failedQuizzesLessons.map((l) => {
              const res = progress.quizResults[l.id];
              return (
                <Link
                  key={l.id}
                  href={`/lessons/${l.slug}`}
                  className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors flex items-center justify-between gap-4 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono">
                      <Badge variant="warning" className="text-[10px] py-0">
                        نمره: {toPersianDigits(res?.score || 0)} از {toPersianDigits(res?.total || 0)}
                      </Badge>
                      <span>•</span>
                      <span className="ltr-dir">{l.titleEn}</span>
                    </div>
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {l.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
                    <span>تلاش مجدد</span>
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </div>
                </Link>
              );
            })
          )}
        </div>
      )}

      {/* Tab: Backup & Restore */}
      {activeTab === "backup" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          <div className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <Download className="w-4 h-4 text-primary" />
                دانلود فایل پشتیبان (JSON Export)
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                ذخیره کامل وضعیت جلسات مطالعه‌شده، یادداشت‌های شخصی هر درس و سوابق کوییزها در قالب یک فایل متنی JSON استاندارد.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              className="w-full text-xs h-9 gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>دانلود فایل JSON</span>
            </Button>
          </div>

          <div className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <Upload className="w-4 h-4 text-primary" />
                بازیابی اطلاعات (JSON Import)
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                فایل JSON تهیه‌شده از دستگاه قبلی را انتخاب نمایید تا دیتابیس محلی IndexedDB مرورگر به‌روزرسانی شود.
              </p>
            </div>
            <div className="space-y-2">
              <label className="block w-full">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  className="block w-full text-xs text-muted-foreground file:mr-0 file:ml-3 file:py-1.5 file:px-3 file:rounded-lg file:border file:border-border file:text-xs file:font-semibold file:bg-secondary file:text-foreground hover:file:bg-secondary/80 file:cursor-pointer cursor-pointer"
                />
              </label>
              {importStatus && (
                <div className="p-2.5 rounded-lg bg-secondary/80 border border-border text-xs text-foreground font-mono">
                  {importStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
