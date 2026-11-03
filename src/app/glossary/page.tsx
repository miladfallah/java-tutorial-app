"use client";

import React, { useState, useMemo } from "react";
import { BookMarked, Search, ArrowLeftRight, X } from "lucide-react";
import { GLOSSARY_TERMS } from "@/data/glossary";
import { normalizeText, cn, toPersianDigits } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/lesson/CodeBlock";

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  const categories = [
    { id: "all", label: "همه مفاهیم" },
    { id: "Java Core", label: "هسته جاوا" },
    { id: "Spring Boot", label: "اسپرینگ‌بوت" },
    { id: "JPA & Hibernate", label: "پایگاه داده و هایبرنیت" },
    { id: "Database & Concurrency", label: "همروندی و قفل‌ها" },
    { id: "Event-Driven", label: "معماری رویدادمحور" },
    { id: "Security", label: "امنیت و احراز هویت" },
    { id: "Testing", label: "تست‌نویسی" },
  ];

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
      <div className="space-y-4 pb-6 border-b border-border">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>JAVA_NESTJS_GLOSSARY</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="text-muted-foreground font-sans">تطبیق مفهومی اصطلاحات تخصصی</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            واژه‌نامه تخصصی مفاهیم و الگوهای مهندسی جاوا
          </h1>
          <p className="text-base text-muted-foreground leading-[1.85] max-w-3xl">
            تعاریف دقیق اصطلاحات معماری جاوا و اسپرینگ‌بوت همراه با تطبیق مستقیم با معادل‌های NestJS و اکوسیستم TypeScript برای درک سریع‌تر و دقیق‌تر معادل‌ها.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="space-y-3 max-w-2xl pt-1">
          <div className="relative">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو در اصطلاحات انگلیسی یا فارسی (مثال: IoC, Hibernate, Transactional, Virtual Thread)..."
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary shadow-xs transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="پاک کردن جستجو"
                type="button"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={cn(
                  "px-3 py-1.5 min-h-[38px] rounded-lg text-xs sm:text-sm font-medium border transition-colors cursor-pointer",
                  selectedCat === c.id
                    ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                    : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
                type="button"
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
        <span>
          {toPersianDigits(filtered.length)} واژه و مفهوم فنی
        </span>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.length === 0 ? (
          <div className="col-span-full p-12 rounded-xl border border-dashed border-border text-center space-y-2">
            <p className="text-base font-semibold text-foreground">
              واژه‌ای مطابق با جستجوی شما یافت نشد
            </p>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              لطفاً املای انگلیسی یا معادل فارسی اصطلاح را بررسی فرمایید.
            </p>
          </div>
        ) : (
          filtered.map((term) => (
            <div
              key={term.id}
              className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-4 flex flex-col justify-between hover:border-border/80 transition-colors shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span
                    dir="ltr"
                    style={{ direction: "ltr", textAlign: "left" }}
                    className="text-base font-bold text-foreground ltr-dir font-mono"
                  >
                    {term.termEn}
                  </span>
                  <Badge variant="neutral" className="text-xs">
                    {term.category}
                  </Badge>
                </div>

                <div className="text-sm font-bold text-primary">
                  {term.termFa}
                </div>

                <p className="text-[15px] text-foreground/90 leading-[1.85]">
                  {term.definition}
                </p>

                {/* NestJS comparison callout */}
                <div className="p-3.5 rounded-lg border border-border bg-secondary/50 text-[14px] sm:text-[15px] space-y-1.5 leading-[1.85]">
                  <div className="flex items-center gap-1.5 text-foreground font-bold text-xs">
                    <ArrowLeftRight className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>تطبیق با اکوسیستم NestJS / Node.js:</span>
                  </div>
                  <p className="text-muted-foreground pr-5">
                    {term.nestComparison}
                  </p>
                </div>
              </div>

              {term.example && (
                <div className="pt-2 border-t border-border/60">
                  <CodeBlock
                    code={term.example}
                    language="java"
                    title={term.termEn}
                    showLineNumbers={false}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
