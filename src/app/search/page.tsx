"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search as SearchIcon, BookOpen, Clock, Tag, X, ArrowRight } from "lucide-react";
import { ALL_LESSON_SUMMARIES } from "@/data/curriculum";
import { toPersianDigits, normalizeText, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract top tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    ALL_LESSON_SUMMARIES.forEach((l) => {
      l.tags.forEach((t) => set.add(t));
    });
    return Array.from(set).slice(0, 24);
  }, []);

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed && !selectedTag) return ALL_LESSON_SUMMARIES.slice(0, 18);

    const normQuery = normalizeText(trimmed);

    return ALL_LESSON_SUMMARIES.filter((lesson) => {
      // Match tag if selected
      if (selectedTag && !lesson.tags.includes(selectedTag)) {
        return false;
      }

      if (!trimmed) return true;

      const titleFa = normalizeText(lesson.title);
      const titleEn = lesson.titleEn.toLowerCase();
      const desc = normalizeText(lesson.description);
      const tags = lesson.tags.map((t) => t.toLowerCase()).join(" ");

      return (
        titleFa.includes(normQuery) ||
        titleEn.includes(normQuery) ||
        desc.includes(normQuery) ||
        tags.includes(normQuery) ||
        lesson.category.toLowerCase().includes(normQuery)
      );
    });
  }, [query, selectedTag]);

  return (
    <div className="space-y-8 pb-16">
      {/* Search Header */}
      <div className="space-y-4 pb-6 border-b border-border">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>GLOBAL_SEARCH</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="text-muted-foreground font-sans">جستجو در ۱۵۶ درس و مفاهیم فنی</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            جستجوی هوشمند در سرفصل‌ها و درس‌ها
          </h1>
          <p className="text-base text-muted-foreground leading-[1.85] max-w-2xl">
            مفاهیم تخصصی جاوا، انوتیشن‌ها، واژگان مهندسی یا اصطلاحات مقایسه‌ای NestJS را به فارسی یا انگلیسی جستجو کنید.
          </p>
        </div>

        {/* Input bar (Min height 48px) */}
        <div className="relative max-w-2xl">
          <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="مثال: Virtual Threads, Transactional, Outbox, Flyway, Concurrency..."
            className="w-full pl-12 pr-12 py-3.5 min-h-[48px] rounded-xl border border-border bg-card text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary shadow-xs transition-colors"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="پاک کردن جستجو"
              type="button"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Popular Tags */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium">
              <Tag className="w-3.5 h-3.5" />
              <span>فیلتر بر اساس تگ‌های متداول:</span>
            </span>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="text-xs text-primary hover:underline font-bold cursor-pointer"
                type="button"
              >
                حذف فیلتر تگ ({selectedTag}) ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(selectedTag === t ? null : t)}
                className={cn(
                  "text-xs font-mono px-3 py-1.5 min-h-[34px] rounded-md border transition-colors ltr-dir cursor-pointer",
                  selectedTag === t
                    ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                    : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
                type="button"
              >
                #{t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
        <span>
          {toPersianDigits(results.length)} نتیجه یافت شد
        </span>
        {!query && !selectedTag && (
          <span className="text-xs font-sans">
            (نمایش منتخب جلسات — با تایپ در کادر بالا نتایج فیلتر می‌شوند)
          </span>
        )}
      </div>

      {/* Results list */}
      <div className="space-y-3.5">
        {results.length === 0 ? (
          <div className="p-12 rounded-xl border border-dashed border-border text-center space-y-2">
            <p className="text-base font-semibold text-foreground">
              هیچ درسی با این عبارت یا تگ پیدا نشد
            </p>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              لطفاً املا یا کلیدواژه را تغییر دهید، یا تگ‌های منتخب بالای صفحه را بررسی کنید.
            </p>
          </div>
        ) : (
          results.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.slug}`}
              className="p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-xs cursor-pointer"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-secondary border border-border text-primary">
                    هفته {toPersianDigits(lesson.week)} • روز {toPersianDigits(lesson.day)}
                  </span>
                  <Badge variant="neutral">
                    {lesson.category}
                  </Badge>
                  <span className="text-muted-foreground/60">•</span>
                  <span
                    dir="ltr"
                    style={{ direction: "ltr", textAlign: "left" }}
                    className="text-xs font-mono text-muted-foreground ltr-dir"
                  >
                    {lesson.titleEn}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {lesson.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-muted-foreground line-clamp-2 leading-[1.85] max-w-3xl">
                  {lesson.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {lesson.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      dir="ltr"
                      style={{ direction: "ltr", textAlign: "left" }}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary border border-border text-muted-foreground ltr-dir"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary group-hover:-translate-x-1 transition-transform self-end sm:self-center">
                <span>ورود به درس</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
