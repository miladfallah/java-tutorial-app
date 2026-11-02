"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Flame, 
  Search, 
  BookOpen, 
  CheckCircle2, 
  Boxes, 
  Menu, 
  X,
  RotateCcw,
  BookMarked
} from "lucide-react";
import { useAcademyStore } from "@/lib/store";
import { ThemeToggle } from "./ThemeToggle";
import { toPersianDigits } from "@/lib/utils";

interface HeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export function Header({ onToggleSidebar, isSidebarOpen }: HeaderProps) {
  const { progress, isLoaded, loadProgress } = useAcademyStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadProgress();
  }, [loadProgress]);

  const completedCount = isLoaded ? progress.completedLessons.length : 0;
  const streak = isLoaded ? progress.streakDays : 0;
  const progressPercent = Math.round((completedCount / 156) * 100);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Right side (RTL Start): Logo & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 border border-slate-800"
            aria-label="منوی سرفصل‌ها"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Boxes className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 text-base sm:text-lg group-hover:text-orange-400 transition-colors">
                  Java-first Academy
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Node to Java
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                آکادمی مهندسی ارشد جاوا و اسپرینگ‌بوت برای توسعه‌دهندگان نودجی‌اس
              </p>
            </div>
          </Link>
        </div>

        {/* Center / Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
          <Link
            href="/"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors"
          >
            داشبورد
          </Link>
          <Link
            href="/roadmap"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors"
          >
            نقشه راه ۲۶ هفته
          </Link>
          <Link
            href="/capstone"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors flex items-center gap-1.5"
          >
            <Boxes className="w-4 h-4 text-orange-400" />
            پروژه سفارشات
          </Link>
          <Link
            href="/revision"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4 text-indigo-400" />
            مرور و فلش‌کارت
          </Link>
          <Link
            href="/glossary"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors flex items-center gap-1.5"
          >
            <BookMarked className="w-4 h-4 text-emerald-400" />
            واژه‌نامه
          </Link>
        </nav>

        {/* Left side (RTL End): Search, Progress, Streak & Theme */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/search"
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white flex items-center gap-2 text-sm transition-all"
            title="جستجو در درس‌ها (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline text-xs text-slate-400">جستجو...</span>
          </Link>

          {/* Streak indicator */}
          <div
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-semibold"
            title="روزهای متوالی مطالعه"
          >
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>{toPersianDigits(streak)} روز پیوسته</span>
          </div>

          {/* Progress pill */}
          <Link
            href="/roadmap"
            className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>
              {toPersianDigits(completedCount)} از {toPersianDigits(156)} ({toPersianDigits(progressPercent)}٪)
            </span>
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
