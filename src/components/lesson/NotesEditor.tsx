"use client";

import React, { useState, useEffect } from "react";
import { StickyNote, Check } from "lucide-react";
import { useAcademyStore } from "@/lib/store";

interface NotesEditorProps {
  lessonId: string;
}

export function NotesEditor({ lessonId }: NotesEditorProps) {
  const { progress, saveNote } = useAcademyStore();
  const initialNote = progress.lessonNotes[lessonId] || "";
  const [note, setNote] = useState(initialNote);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setNote(progress.lessonNotes[lessonId] || "");
  }, [lessonId, progress.lessonNotes]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNote(val);
    saveNote(lessonId, val);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <section id="notes" className="my-8 rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
          <StickyNote className="w-3.5 h-3.5 text-primary" />
          <span>یادداشت‌های شخصی این جلسه</span>
        </div>
        <div className="text-[11px] text-muted-foreground flex items-center gap-1">
          {saved ? (
            <span className="text-emerald-400 flex items-center gap-1 font-mono">
              <Check className="w-3 h-3" />
              Saved
            </span>
          ) : (
            <span className="font-mono text-[10px]">Auto-saved locally</span>
          )}
        </div>
      </div>

      <textarea
        value={note}
        onChange={handleChange}
        placeholder="نکات، پرسش‌ها یا یادآوری‌های خود درباره این جلسه را یادداشت کنید..."
        rows={3}
        className="w-full rounded-lg border border-border bg-background p-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 resize-y leading-relaxed font-sans"
      />
    </section>
  );
}
