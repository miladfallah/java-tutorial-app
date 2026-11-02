"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useAcademyStore } from "@/lib/store";

export function ThemeToggle() {
  const { theme, setTheme } = useAcademyStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-slate-700/50 bg-slate-800/40" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-xl border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all shadow-sm"
      title={isDark ? "تغییر به تم روشن" : "تغییر به تم تاریک"}
      aria-label="تغییر تم"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-400" />
      )}
    </button>
  );
}
