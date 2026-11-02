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
  variant: "mobile" | "desktop";
}

export function TableOfContents({ items, variant }: TableOfContentsProps) {
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
        rootMargin: "0% 0% -60% 0%",
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
      const yOffset = -70; // offset for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpenMobile(false);
    }
  };

  return (
    <>
      {/* Mobile Drawer Trigger */}
      {variant === "mobile" && <div className="xl:hidden my-4">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-card text-xs flex items-center justify-between text-muted-foreground hover:text-foreground"
        >
          <span className="flex items-center gap-2 font-medium">
            <List className="w-4 h-4 text-primary" />
            <span>فهرست عناوین این درس ({items.length} بخش)</span>
          </span>
          <ChevronDown
            className={cn("w-4 h-4 transition-transform", isOpenMobile && "rotate-180")}
          />
        </button>

        {isOpenMobile && (
          <div className="mt-1 p-2 rounded-lg border border-border bg-card text-xs space-y-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full text-right px-2.5 py-1.5 rounded-md transition-colors",
                  activeId === item.id
                    ? "bg-secondary text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>}

      {/* Desktop Sticky Table of Contents (on the left in RTL) */}
      {variant === "desktop" && <nav
        aria-label="فهرست محتوای صفحه"
        className="hidden xl:block sticky top-20 w-56 text-xs shrink-0 select-none space-y-2 border-r border-border/40 pr-4"
      >
        <div className="flex items-center gap-1.5 font-semibold text-foreground pb-1">
          <List className="w-3.5 h-3.5 text-primary" />
          <span>فهرست محتوا</span>
        </div>

        <div className="space-y-0.5 max-h-[calc(100vh-8rem)] overflow-y-auto">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full text-right px-2 py-1.5 rounded text-[11px] leading-snug transition-colors truncate block",
                  isActive
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                )}
                title={item.label}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>}
    </>
  );
}
