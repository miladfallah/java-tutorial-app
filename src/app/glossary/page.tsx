"use client";

import React, { useState, useMemo } from "react";
import { BookMarked, Search, ArrowLeftRight, Code } from "lucide-react";
import { GLOSSARY_TERMS } from "@/data/glossary";
import { normalizeText, cn } from "@/lib/utils";

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  const categories = ["all", "Java Core", "Spring Boot", "JPA & Hibernate", "Database & Concurrency", "Event-Driven", "Security", "Testing"];

  const filtered = useMemo(() => {
    const q = normalizeText(search.trim());
    return GLOSSARY_TERMS.filter((item) => {
      if (selectedCat !== "all" && item.category !== selectedCat) return false;
      if (!q) return true;
      return (
        normalizeText(item.termEn).includes(q) ||
        normalizeText(item.termFa).includes(q) ||
        normalizeText(item.definition).includes(q) ||
        normalizeText(item.nestComparison).includes(q)
      );
    });
  }, [search, selectedCat]);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
          <BookMarked className="w-4 h-4" />
          <span>پل مفهومی بین اکوسیستم Node.js و Java</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          واژه‌نامه تخصصی مفاهیم و الگوهای مهندسی جاوا
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          تعاریف دقیق اصطلاحات معماری جاوا و اسپرینگ‌بوت همراه با تطبیق مستقیم با معادل‌های NestJS و TypeScript.
        </p>

        {/* Search & Categories */}
        <div className="pt-2 space-y-3 max-w-xl">
          <div className="relative">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو در اصطلاحات فنی..."
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCat(c)}
                className={cn(
                  "px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors",
                  selectedCat === c
                    ? "bg-emerald-500 text-white border-emerald-500 font-bold"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                )}
              >
                {c === "all" ? "همه دسته‌ها" : c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((term) => (
          <div
            key={term.id}
            className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white ltr-dir font-mono">
                  {term.termEn}
                </span>
                <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {term.category}
                </span>
              </div>
              <div className="text-xs font-bold text-slate-300">
                {term.termFa}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {term.definition}
              </p>

              {/* NestJS comparison */}
              <div className="p-3 rounded-xl border border-indigo-500/20 bg-indigo-950/20 text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-indigo-400 font-semibold text-[11px]">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span>تطبیق با دنیای NestJS / Node.js:</span>
                </div>
                <p>{term.nestComparison}</p>
              </div>
            </div>

            {term.example && (
              <div className="pt-2 border-t border-slate-800/80">
                <pre className="font-mono text-[11px] text-slate-400 ltr-dir bg-slate-950 p-2 rounded-lg overflow-x-auto">
                  <code>{term.example}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
