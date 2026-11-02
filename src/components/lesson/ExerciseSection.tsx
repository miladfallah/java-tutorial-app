"use client";

import React, { useState } from "react";
import { 
  Code2, 
  CheckSquare, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Eye, 
  EyeOff,
  Terminal
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
    <section
      id="exercise"
      className="my-8 rounded-xl border border-border bg-card p-5 sm:p-6"
    >
      {/* Exercise Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-secondary text-primary border border-border flex items-center justify-center shrink-0 mt-0.5">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              Hands-on Workshop
            </div>
            <h3 className="text-base font-semibold text-foreground mt-0.5">
              {exercise.title}
            </h3>
          </div>
        </div>

        {/* Completion toggle */}
        <button
          onClick={() => toggleExerciseCompleted(lessonId)}
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors self-start sm:self-auto",
            isCompleted
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/15"
              : "bg-secondary text-muted-foreground border-border hover:text-foreground hover:bg-secondary/80"
          )}
        >
          <CheckCircle2
            className={cn(
              "w-3.5 h-3.5",
              isCompleted ? "text-emerald-400" : "text-muted-foreground"
            )}
          />
          <span>{isCompleted ? "تمرین تکمیل شد ✓" : "ثبت به عنوان انجام شده"}</span>
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-4 space-y-4 text-xs sm:text-sm">
        <div className="text-foreground/90 leading-relaxed whitespace-pre-line">
          {exercise.instructions}
        </div>

        {/* Expected output */}
        {exercise.expectedOutput && (
          <div className="rounded-lg border border-border bg-background p-3 text-xs space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground font-mono text-[11px]">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span>خروجی یا نتیجه مورد انتظار:</span>
            </div>
            <pre className="font-mono text-slate-300 ltr-dir text-[11px] overflow-x-auto bg-[#0c0e12] p-2.5 rounded">
              <code>{exercise.expectedOutput}</code>
            </pre>
          </div>
        )}

        {/* Acceptance Criteria */}
        <div className="rounded-lg border border-border bg-secondary/30 p-3.5">
          <h4 className="text-xs font-semibold text-foreground flex items-center gap-1.5 mb-2">
            <CheckSquare className="w-3.5 h-3.5 text-primary" />
            <span>معیارهای پذیرش تمرین (Acceptance Criteria):</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {exercise.acceptanceCriteria.map((criterion, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded bg-secondary text-foreground text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-foreground/90">{criterion}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hints */}
        {exercise.hints && exercise.hints.length > 0 && (
          <div className="rounded-lg border border-border overflow-hidden">
            <button
              onClick={() => setShowHints(!showHints)}
              className="w-full px-3.5 py-2 flex items-center justify-between text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span>راهنمایی‌های حل ({toPersianDigits(exercise.hints.length)} نکته)</span>
              </span>
              {showHints ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showHints && (
              <div className="p-3.5 border-t border-border bg-background text-xs space-y-1.5 text-muted-foreground">
                {exercise.hints.map((hint, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <p className="text-foreground/90">{hint}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Reference Solution */}
        <div className="rounded-lg border border-border overflow-hidden">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              {showSolution ? (
                <EyeOff className="w-3.5 h-3.5 text-muted-foreground" />
              ) : (
                <Eye className="w-3.5 h-3.5 text-primary" />
              )}
              <span>{showSolution ? "مخفی کردن کد مرجع" : "مشاهده راهکار و کد مرجع"}</span>
            </span>
            {showSolution ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showSolution && (
            <div className="p-3.5 border-t border-border bg-background space-y-3">
              <div className="text-xs text-foreground/90 leading-relaxed border-r-2 border-primary/60 pr-2.5">
                <span className="font-semibold text-foreground block mb-1">
                  تحلیل راهکار:
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
    </section>
  );
}
