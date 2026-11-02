"use client";

import React, { useState } from "react";
import { 
  Code, 
  CheckSquare, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Eye, 
  EyeOff,
  Terminal,
  Trophy
} from "lucide-react";
import { LessonExercise } from "@/data/types";
import { useAcademyStore } from "@/lib/store";
import { CodeBlock } from "./CodeBlock";
import { toPersianDigits, cn } from "@/lib/utils";

interface ExerciseSectionProps {
  lessonId: string;
  exercise: LessonExercise;
}

export function ExerciseSection({ lessonId, exercise }: ExerciseSectionProps) {
  const { progress, toggleExerciseCompleted } = useAcademyStore();
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const isCompleted = !!progress.exerciseCompleted[lessonId];

  return (
    <div className="my-10 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-slate-900/60 p-5 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <Code className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                تمرین عملی کارگاهی
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1">
              {exercise.title}
            </h3>
          </div>
        </div>

        {/* Completion button */}
        <button
          onClick={() => toggleExerciseCompleted(lessonId)}
          className={cn(
            "flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border shadow-sm",
            isCompleted
              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30"
              : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"
          )}
        >
          <CheckCircle2
            className={cn(
              "w-4 h-4",
              isCompleted ? "text-emerald-400 fill-emerald-400/20" : "text-slate-400"
            )}
          />
          <span>{isCompleted ? "تمرین انجام شد ✓" : "ثبت به عنوان انجام شده"}</span>
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-5 space-y-4">
        <div className="text-sm text-slate-300 leading-relaxed">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            صورت مسئله:
          </h4>
          <p className="whitespace-pre-line">{exercise.instructions}</p>
        </div>

        {/* Expected output if present */}
        {exercise.expectedOutput && (
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 text-xs">
            <div className="flex items-center gap-2 text-slate-400 font-semibold mb-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>خروجی مورد انتظار در کنسول / پاسخ تست:</span>
            </div>
            <pre className="font-mono text-slate-300 ltr-dir text-xs bg-slate-900/80 p-2.5 rounded-lg overflow-x-auto">
              <code>{exercise.expectedOutput}</code>
            </pre>
          </div>
        )}

        {/* Acceptance Criteria */}
        <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <CheckSquare className="w-4 h-4 text-emerald-400" />
            معیارهای پذیرش تمرین (Acceptance Criteria):
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {exercise.acceptanceCriteria.map((criterion, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                  {toPersianDigits(idx + 1)}
                </span>
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hints accordion */}
        {exercise.hints && exercise.hints.length > 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
            <button
              onClick={() => setShowHints(!showHints)}
              className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-medium text-amber-300 hover:bg-slate-800/40 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                راهنمایی‌ها و سرنخ‌های حل ({toPersianDigits(exercise.hints.length)} نکته)
              </span>
              {showHints ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showHints && (
              <div className="p-4 border-t border-slate-800/60 bg-slate-950/50 space-y-2 text-xs text-slate-300">
                {exercise.hints.map((hint, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <p>{hint}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Solution Toggle */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="w-full px-4 py-3 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
          >
            <span className="flex items-center gap-2">
              {showSolution ? (
                <EyeOff className="w-4 h-4 text-slate-400" />
              ) : (
                <Eye className="w-4 h-4 text-orange-400" />
              )}
              {showSolution ? "مخفی کردن کد مرجع راهکار" : "مشاهده کد مرجع و راهکار پیشنهادی"}
            </span>
            {showSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showSolution && (
            <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/90 space-y-4">
              <div className="text-xs text-slate-300 leading-relaxed border-r-2 border-orange-500 pr-3">
                <span className="font-semibold text-orange-400 block mb-1">
                  تحلیل و توضیح راهکار:
                </span>
                <p>{exercise.solution.explanation}</p>
              </div>

              <CodeBlock
                code={exercise.solution.code}
                language={exercise.solution.language || "java"}
                filename={exercise.solution.filename}
                title="Reference Solution"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
