"use client";

import React, { useState, useEffect } from "react";
import { StickyNote, Check, Save } from "lucide-react";
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
    <div className="my-8 rounded-2xl border border-slate-800 bg-slate-900/30 p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
          <StickyNote className="w-4 h-4 text-amber-400" />
          <span>یادداشت‌های شخصی شما برای این درس:</span>
        </div>
        <div className="text-[11px] text-slate-400 flex items-center gap-1">
          {saved ? (
            <span className="text-emerald-400 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              ذخیره شد
            </span>
          ) : (
            <span className="text-slate-500">ذخیره‌سازی خودکار در مرورگر</span>
          )}
        </div>
      </div>

      <textarea
        value={note}
        onChange={handleChange}
        placeholder="نکات کلیدی، پرسش‌ها یا یادآوری‌های خود درباره این مبحث را اینجا بنویسید..."
        rows={4}
        className="w-full rounded-xl border border-slate-800 bg-slate-950/80 p-3.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 resize-y leading-relaxed"
      />
    </div>
  );
}
