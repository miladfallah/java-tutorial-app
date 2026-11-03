"use client";

import React, { useEffect, useRef } from "react";
import { 
  X, 
  Sun, 
  Moon, 
  Monitor, 
  Type, 
  AlignJustify, 
  Maximize2, 
  Binary, 
  RotateCcw,
  Sparkles
} from "lucide-react";
import { useAcademyStore, ReaderSettings, DEFAULT_SETTINGS } from "@/lib/store";
import { cn } from "@/lib/utils";

interface ReaderSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReaderSettingsModal({ isOpen, onClose }: ReaderSettingsModalProps) {
  const { settings, updateSettings, resetSettings } = useAcademyStore();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-settings-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-2xl space-y-6 text-foreground"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary-muted border border-primary/20 text-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 id="reader-settings-title" className="text-base sm:text-lg font-bold text-foreground">
                تنظیمات مطالعه و تم
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                شخصی‌سازی فونت، فاصله خطوط و ظاهر برنامه
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent transition-colors"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Setting Groups */}
        <div className="space-y-5 max-h-[70vh] overflow-y-auto px-1">
          {/* 1. Theme Selection */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
              <span>حالت نمایش (تم)</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => updateSettings({ theme: "dark" })}
                className={cn(
                  "flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-xs font-medium transition-all",
                  settings.theme === "dark"
                    ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>تیره</span>
              </button>

              <button
                type="button"
                onClick={() => updateSettings({ theme: "light" })}
                className={cn(
                  "flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-xs font-medium transition-all",
                  settings.theme === "light"
                    ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>روشن</span>
              </button>

              <button
                type="button"
                onClick={() => updateSettings({ theme: "system" })}
                className={cn(
                  "flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-xs font-medium transition-all",
                  settings.theme === "system"
                    ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>سیستم</span>
              </button>
            </div>
          </div>

          {/* 2. Font Size */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
              <Type className="w-3.5 h-3.5 text-primary" />
              <span>اندازه متن درس‌ها</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => updateSettings({ fontSize: "normal" })}
                className={cn(
                  "py-2 px-3 rounded-lg border text-xs transition-all",
                  settings.fontSize === "normal"
                    ? "bg-primary text-primary-foreground border-primary font-bold"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                استاندارد (۱۷px)
              </button>
              <button
                type="button"
                onClick={() => updateSettings({ fontSize: "large" })}
                className={cn(
                  "py-2 px-3 rounded-lg border text-xs transition-all",
                  settings.fontSize === "large"
                    ? "bg-primary text-primary-foreground border-primary font-bold"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                بزرگ (۱۸.۵px)
              </button>
              <button
                type="button"
                onClick={() => updateSettings({ fontSize: "xlarge" })}
                className={cn(
                  "py-2 px-3 rounded-lg border text-xs transition-all",
                  settings.fontSize === "xlarge"
                    ? "bg-primary text-primary-foreground border-primary font-bold"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                خیلی بزرگ (۲۰px)
              </button>
            </div>
          </div>

          {/* 3. Line Spacing */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
              <AlignJustify className="w-3.5 h-3.5 text-primary" />
              <span>فاصله خطوط متن (Line Height)</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => updateSettings({ lineHeight: "normal" })}
                className={cn(
                  "py-2 px-3 rounded-lg border text-xs transition-all",
                  settings.lineHeight === "normal"
                    ? "bg-primary text-primary-foreground border-primary font-bold"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                معمولی (۱.۸۵)
              </button>
              <button
                type="button"
                onClick={() => updateSettings({ lineHeight: "relaxed" })}
                className={cn(
                  "py-2 px-3 rounded-lg border text-xs transition-all",
                  settings.lineHeight === "relaxed"
                    ? "bg-primary text-primary-foreground border-primary font-bold"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                راحت (۱.۹۵)
              </button>
              <button
                type="button"
                onClick={() => updateSettings({ lineHeight: "loose" })}
                className={cn(
                  "py-2 px-3 rounded-lg border text-xs transition-all",
                  settings.lineHeight === "loose"
                    ? "bg-primary text-primary-foreground border-primary font-bold"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                باز و گسترده (۲.۱)
              </button>
            </div>
          </div>

          {/* 4. Column Width */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
              <Maximize2 className="w-3.5 h-3.5 text-primary" />
              <span>عرض ستون مطالعه</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => updateSettings({ columnWidth: "normal" })}
                className={cn(
                  "py-2 px-3 rounded-lg border text-xs transition-all",
                  settings.columnWidth === "normal"
                    ? "bg-primary text-primary-foreground border-primary font-bold"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                استاندارد مطالعه (۷۶۸px)
              </button>
              <button
                type="button"
                onClick={() => updateSettings({ columnWidth: "wide" })}
                className={cn(
                  "py-2 px-3 rounded-lg border text-xs transition-all",
                  settings.columnWidth === "wide"
                    ? "bg-primary text-primary-foreground border-primary font-bold"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80"
                )}
              >
                عریض (۸۹۶px)
              </button>
            </div>
          </div>

          {/* 5. Line Numbers & Motion Switches */}
          <div className="pt-2 border-t border-border space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                <Binary className="w-3.5 h-3.5 text-primary" />
                <span>نمایش شماره خطوط در بلوک‌های کد</span>
              </div>
              <input
                type="checkbox"
                checked={settings.showLineNumbers}
                onChange={(e) => updateSettings({ showLineNumbers: e.target.checked })}
                className="w-4 h-4 rounded text-primary border-border focus:ring-primary cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>کاهش انیمیشن‌ها و اسکرول سریع (Reduced Motion)</span>
              </div>
              <input
                type="checkbox"
                checked={settings.reduceMotion === "reduce"}
                onChange={(e) => updateSettings({ reduceMotion: e.target.checked ? "reduce" : "system" })}
                className="w-4 h-4 rounded text-primary border-border focus:ring-primary cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <button
            type="button"
            onClick={resetSettings}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>بازگردانی تنظیمات به پیش‌فرض</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="py-2 px-4 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors"
          >
            تایید و ذخیره
          </button>
        </div>
      </div>
    </div>
  );
}
