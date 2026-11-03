"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  Flame, 
  Search, 
  CheckCircle2, 
  Menu, 
  X,
  Terminal,
} from "lucide-react";
import { useAcademyStore } from "@/lib/store";
import { ThemeToggle } from "./ThemeToggle";
import { toPersianDigits, cn } from "@/lib/utils";

interface HeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export function Header({ onToggleSidebar, isSidebarOpen }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { progress, isLoaded, loadProgress } = useAcademyStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadProgress();
  }, [loadProgress]);

  // Global search shortcut listener: Ctrl+K / Cmd+K and /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isEditing = target && (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      );

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        router.push("/search");
      } else if (!isEditing && e.key === "/") {
        e.preventDefault();
        router.push("/search");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  const completedCount = isLoaded ? progress.completedLessons.length : 0;
  const streak = isLoaded ? progress.streakDays : 0;

  const navLinks = [
    { href: "/", label: "داشبورد" },
    { href: "/roadmap", label: "نقشه راه" },
    { href: "/capstone", label: "پروژه سفارشات" },
    { href: "/revision", label: "مرور و فلش‌کارت" },
    { href: "/glossary", label: "واژه‌نامه" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3 sm:gap-4">
        {/* Right side (RTL start): Brand & Mobile toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 min-h-[40px] min-w-[40px] text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary border border-border flex items-center justify-center cursor-pointer"
            aria-label="منوی سرفصل‌ها و ناوبری"
            type="button"
          >
            {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 text-primary flex items-center justify-center font-mono font-bold text-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                Java-first Academy
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border border-border bg-secondary text-muted-foreground">
                Node → Java
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Tablet and Desktop navigation links */}
        <nav className="hidden md:flex items-center gap-1 text-xs sm:text-sm font-medium">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-2.5 lg:px-3 py-1.5 rounded-md transition-colors",
                  isActive
                    ? "bg-secondary text-foreground font-bold shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Left side (RTL end): Search, Streak, Progress & Theme */}
        <div className="flex items-center gap-2">
          {/* Quick search button */}
          <Link
            href="/search"
            className="px-2.5 py-1.5 min-h-[36px] rounded-lg border border-border hover:border-border/80 bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground flex items-center gap-2 text-xs transition-colors cursor-pointer"
            title="جستجو در درس‌ها (Ctrl+K یا /)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-xs font-medium">جستجو</span>
            <kbd className="hidden lg:inline-flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-background border border-border text-muted-foreground font-semibold">
              Ctrl+K
            </kbd>
          </Link>

          {/* Streak badge (visible on desktop) */}
          {streak > 0 && (
            <div
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 min-h-[36px] rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-semibold"
              title="تعداد روزهای متوالی مطالعه"
            >
              <Flame className="w-3.5 h-3.5 fill-amber-500/30" />
              <span>{toPersianDigits(streak)} روز</span>
            </div>
          )}

          {/* Progress pill (visible on xl) */}
          <Link
            href="/roadmap"
            className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 min-h-[36px] rounded-lg border border-border bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary text-xs transition-colors"
            title="مشاهده پیشرفت در نقشه راه"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-mono">
              {toPersianDigits(completedCount)}/{toPersianDigits(156)}
            </span>
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
