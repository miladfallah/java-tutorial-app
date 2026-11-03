"use client";

import React, { useEffect, useState } from "react";
import { List, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
  variant?: "mobile" | "desktop" | "inline" | "sidebar";
}

export function TableOfContents({ items, variant = "desktop" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0% -60% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpenMobile(false);
    }
  };

  const isMobile = variant === "mobile" || variant === "inline";
  const isDesktop = variant === "desktop" || variant === "sidebar";

  if (isMobile) {
    return (
      <nav
        aria-label="فهرست عناوین درس"
        className="xl:hidden my-6 rounded-xl border border-border bg-card p-3 shadow-xs select-none"
      >
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="w-full min-h-[44px] px-3 py-2 rounded-lg text-xs sm:text-sm flex items-center justify-between text-foreground hover:bg-secondary/60 transition-colors cursor-pointer"
          type="button"
          aria-expanded={isOpenMobile}
        >
          <span className="flex items-center gap-2 font-semibold">
            <List className="w-4 h-4 text-primary shrink-0" />
            <span>فهرست سرفصل‌های این درس ({items.length} بخش)</span>
          </span>
          <ChevronDown
            className={cn("w-4 h-4 text-muted-foreground transition-transform duration-200", isOpenMobile && "rotate-180")}
          />
        </button>

        {isOpenMobile && (
          <div className="mt-2 pt-2 border-t border-border/60 space-y-1">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full text-right px-3 py-2 min-h-[38px] rounded-lg text-xs sm:text-sm leading-normal transition-colors cursor-pointer flex items-center gap-2",
                    isActive
                      ? "bg-primary/10 text-primary font-bold border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                  type="button"
                >
                  <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", isActive ? "bg-primary" : "bg-muted-foreground/30")} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </nav>
    );
  }

  // Desktop Sticky Sidebar TOC
  if (isDesktop) {
    return (
      <nav
        aria-label="فهرست محتوای صفحه"
        className="hidden xl:block sticky top-20 w-64 shrink-0 select-none space-y-3 pl-2"
      >
        <div className="flex items-center gap-2 font-bold text-xs uppercase text-foreground pb-1 border-b border-border">
          <List className="w-3.5 h-3.5 text-primary" />
          <span>فهرست محتوای درس</span>
        </div>

        <div className="space-y-0.5 max-h-[calc(100vh-8rem)] overflow-y-auto pr-1">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full text-right px-2.5 py-1.5 rounded-md text-xs leading-relaxed transition-colors cursor-pointer block border-r-2",
                  isActive
                    ? "text-primary font-bold bg-primary/10 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40 border-transparent"
                )}
                type="button"
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    );
  }

  return null;
}
