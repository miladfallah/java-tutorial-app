"use client";

import React, { useState, useEffect, useRef } from "react";
import { StickyNote, Check, Loader2, AlertCircle } from "lucide-react";
import { useAcademyStore } from "@/lib/store";

interface NotesEditorProps {
  lessonId: string;
}

export function NotesEditor({ lessonId }: NotesEditorProps) {
  const { progress, saveNote } = useAcademyStore();
  const initialNote = progress.lessonNotes[lessonId] || "";
  const [note, setNote] = useState(initialNote);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setNote(progress.lessonNotes[lessonId] || "");
    setStatus("idle");
  }, [lessonId, progress.lessonNotes]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNote(val);
    setStatus("saving");

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(async () => {
      try {
        await saveNote(lessonId, val);
        setStatus("saved");
        setTimeout(() => setStatus("idle"), 2500);
      } catch (err) {
        console.error("Error saving note:", err);
        setStatus("error");
      }
    }, 500);
  };

  return (
    <section id="notes" className="my-8 rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
          <StickyNote className="w-3.5 h-3.5 text-primary" />
          <span>یادداشت‌های شخصی این جلسه</span>
        </div>
        <div className="text-[11px] text-muted-foreground flex items-center gap-1">
          {status === "saving" && (
            <span className="text-muted-foreground flex items-center gap-1 font-sans">
              <Loader2 className="w-3 h-3 animate-spin text-primary" />
              در حال ذخیره...
            </span>
          )}
          {status === "saved" && (
            <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-sans font-medium">
              <Check className="w-3 h-3" />
              ذخیره شد ✓
            </span>
          )}
          {status === "error" && (
            <span className="text-rose-700 dark:text-rose-400 flex items-center gap-1 font-sans font-medium">
              <AlertCircle className="w-3 h-3" />
              خطا در ذخیره
            </span>
          )}
          {status === "idle" && (
            <span className="text-muted-foreground text-[11px]">ذخیره‌سازی خودکار در پایگاه‌داده محلی</span>
          )}
        </div>
      </div>

      <textarea
        value={note}
        onChange={handleChange}
        placeholder="نکات، پرسش‌ها یا یادآوری‌های خود درباره این جلسه را یادداشت کنید..."
        rows={3}
        className="w-full rounded-lg border border-border bg-background p-3 text-[14px] sm:text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 resize-y leading-relaxed font-sans"
      />
    </section>
  );
}
