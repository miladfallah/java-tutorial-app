"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search as SearchIcon, BookOpen, Clock, Tag, X, ArrowLeft } from "lucide-react";
import { ALL_LESSON_SUMMARIES } from "@/data/curriculum";
import { toPersianDigits, normalizeText, cn } from "@/lib/utils";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    ALL_LESSON_SUMMARIES.forEach((l) => {
      l.tags.forEach((t) => set.add(t));
    });
    return Array.from(set).slice(0, 25);
  }, []);

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed && !selectedTag) return ALL_LESSON_SUMMARIES.slice(0, 15);

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
      <div className="space-y-4 pb-6 border-b border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          جستجوی هوشمند در تمام ۱۵۶ درس آکادمی
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
          می‌توانید کلیدواژه‌های فارسی یا انگلیسی (نظیر Transactional, Outbox, Concurrency, N+1, Kafka, Spring Security) را جستجو کنید.
        </p>

        {/* Input bar */}
        <div className="relative max-w-2xl">
          <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجوی عنوان، مفهوم فنی، تگ، انوتیشن یا کلمه کلیدی..."
            className="w-full pl-10 pr-12 py-3.5 rounded-2xl border border-slate-700 bg-slate-900/90 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-orange-500 shadow-xl"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="text-xs text-slate-500 ml-1">تگ‌های متداول:</span>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTag(selectedTag === t ? null : t)}
              className={cn(
                "text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-colors ltr-dir",
                selectedTag === t
                  ? "bg-orange-500 text-white border-orange-500 font-bold"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
              )}
            >
              #{t}
            </button>
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="text-xs text-rose-400 hover:underline mr-2"
            >
              حذف فیلتر تگ
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>
          {toPersianDigits(results.length)} نتیجه یافت شد
        </span>
      </div>

      {/* Results list */}
      <div className="space-y-3">
        {results.length === 0 ? (
          <div className="p-12 rounded-2xl border border-slate-800 text-center space-y-2">
            <p className="text-sm font-semibold text-slate-300">
              هیچ درسی با عبارت جستجو شده تطابق ندارد.
            </p>
            <p className="text-xs text-slate-500">
              عبارت دیگری را امتحان کنید یا از تگ‌های بالای صفحه استفاده نمایید.
            </p>
          </div>
        ) : (
          results.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.slug}`}
              className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 hover:border-orange-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 block group"
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold text-orange-400">
                    هفته {toPersianDigits(lesson.week)} • روز {toPersianDigits(lesson.day)}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400 font-medium">
                    {lesson.category}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-orange-400/80 ltr-dir">
                    {lesson.titleEn}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                  {lesson.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {lesson.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {lesson.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800/80 text-slate-400 ltr-dir"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-orange-400 group-hover:-translate-x-1 transition-transform">
                <span>ورود به درس</span>
                <ArrowLeft className="w-4 h-4" />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
