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
  Settings2,
  BookOpen,
  Layout,
  PanelRightClose,
  PanelRightOpen
} from "lucide-react";
import { useAcademyStore, applySettingsToDOM } from "@/lib/store";
import { ThemeToggle } from "./ThemeToggle";
import { ReaderSettingsModal } from "./ReaderSettingsModal";
import { toPersianDigits, cn } from "@/lib/utils";

interface HeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
  isDesktopSidebarOpen: boolean;
  onToggleDesktopSidebar: () => void;
}

export function Header({ onToggleSidebar, isSidebarOpen, isDesktopSidebarOpen, onToggleDesktopSidebar }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { progress, isLoaded, loadProgress, isReaderMode, toggleReaderMode, settings } = useAcademyStore();
  const [mounted, setMounted] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (settings.theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => applySettingsToDOM(useAcademyStore.getState().settings);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [settings.theme]);

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

      if (!isEditing && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
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
  const isLessonPage = pathname.startsWith("/lessons/");

  const navLinks = [
    { href: "/", label: "داشبورد" },
    { href: "/roadmap", label: "نقشه راه" },
    { href: "/capstone", label: "پروژه سفارشات" },
    { href: "/revision", label: "مرور و فلش‌کارت" },
    { href: "/glossary", label: "واژه‌نامه" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3 sm:gap-4">
          {/* Right side (RTL start): Brand & Mobile toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onToggleDesktopSidebar}
              className="hidden lg:flex p-2 min-h-[40px] min-w-[40px] text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary border border-border items-center justify-center cursor-pointer"
              aria-label={isDesktopSidebarOpen ? "بستن فهرست سمت راست" : "باز کردن فهرست سمت راست"}
              title={isDesktopSidebarOpen ? "بستن فهرست سمت راست" : "باز کردن فهرست سمت راست"}
              aria-expanded={isDesktopSidebarOpen}
              type="button"
            >
              {isDesktopSidebarOpen ? <PanelRightClose className="w-4 h-4" /> : <PanelRightOpen className="w-4 h-4" />}
            </button>
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
          <details className="hidden lg:block 2xl:hidden relative shrink-0"
            onKeyDown={event => { if (event.key === "Escape") { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus(); } }}>
            <summary className="cursor-pointer rounded-lg border border-border px-3 py-2 text-sm hover:bg-secondary">بخش‌های سایت</summary>
            <nav aria-label="بخش‌های سایت" className="absolute top-full mt-2 right-0 w-56 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-xl border border-border bg-card shadow-xl p-2 space-y-1">
              {navLinks.map(link => <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary"
                onClick={event => { const menu = event.currentTarget.closest('details'); if (menu) menu.open = false; }}>{link.label}</Link>)}
              <Link href="/getting-started" className="block rounded-lg px-3 py-2 text-sm text-primary hover:bg-secondary"
                onClick={event => { const menu = event.currentTarget.closest('details'); if (menu) menu.open = false; }}>راهنمای شروع</Link>
            </nav>
          </details>
          <nav className="hidden 2xl:flex items-center gap-1 text-xs sm:text-sm font-medium">
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

          {/* Left side (RTL end): Search, Streak, Progress & Settings */}
          <div className="flex items-center gap-1.5 sm:gap-2">
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

            {/* Reader Mode Toggle (visible on lesson page) */}
            {isLessonPage && (
              <button
                type="button"
                onClick={toggleReaderMode}
                className={cn(
                  "hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 min-h-[36px] rounded-lg border text-xs transition-colors cursor-pointer",
                  isReaderMode
                    ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                    : "bg-secondary/60 hover:bg-secondary border-border text-muted-foreground hover:text-foreground"
                )}
                title={isReaderMode ? "خروج از حالت تمرکز مطالعه" : "فعال‌سازی حالت تمرکز مطالعه (پنهان‌سازی سایدبار)"}
              >
                {isReaderMode ? <Layout className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                <span className="text-xs">{isReaderMode ? "خروج از تمرکز" : "تمرکز مطالعه"}</span>
              </button>
            )}

            {/* Streak badge */}
            {streak > 0 && (
              <div
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 min-h-[36px] rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-semibold"
                title="تعداد روزهای متوالی مطالعه بر اساس تاریخ محلی"
              >
                <Flame className="w-3.5 h-3.5 fill-amber-500/30" />
                <span>{toPersianDigits(streak)} روز</span>
              </div>
            )}

            {/* Quick Theme Toggle */}
            <ThemeToggle />

            {/* Settings button opening ReaderSettingsModal */}
            <button
              type="button"
              onClick={() => setSettingsOpen(true)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent hover:border-border transition-colors cursor-pointer"
              title="تنظیمات مطالعه، اندازه متن و تم"
              aria-label="تنظیمات مطالعه"
            >
              <Settings2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Reader Settings Modal */}
      <ReaderSettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </>
  );
}
