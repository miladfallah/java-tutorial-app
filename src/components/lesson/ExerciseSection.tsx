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
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { formatTechnicalText } from "@/lib/format-technical-text";

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
      className="my-8 rounded-xl border border-border bg-card p-5 sm:p-6 scroll-mt-24"
    >
      {/* Exercise Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-secondary text-primary border border-border flex items-center justify-center shrink-0 mt-0.5">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-muted-foreground">
              تمرین عملی · ثبت انجام به انتخاب شما
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground mt-0.5">
              {exercise.title}
            </h3>
          </div>
        </div>

        {/* Completion toggle (Accessible touch target >= 44px) */}
        <button
          onClick={() => toggleExerciseCompleted(lessonId)}
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs sm:text-sm font-medium border transition-colors self-start sm:self-auto cursor-pointer",
            isCompleted
              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/15"
              : "bg-secondary text-foreground border-border hover:bg-secondary/80"
          )}
          type="button"
        >
          <CheckCircle2
            className={cn(
              "w-4 h-4 shrink-0",
              isCompleted ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground"
            )}
          />
          <span>{isCompleted ? "تمرین تکمیل شد ✓" : "علامت‌گذاری به عنوان انجام شده"}</span>
        </button>
      </div>

      {/* Instructions: readable body text */}
      <div className="mt-5 space-y-5">
        <div className="reading-body text-foreground/90 whitespace-pre-line">
          <MarkdownRenderer content={formatTechnicalText(exercise.instructions)} />
        </div>

        {/* Expected output with CodeBlock */}
        {exercise.expectedOutput && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span>خروجی یا کنسول مورد انتظار:</span>
            </div>
            <CodeBlock
              code={exercise.expectedOutput}
              language="bash"
              title="Expected Output"
              showLineNumbers={false}
            />
          </div>
        )}

        {/* Acceptance Criteria */}
        <div className="rounded-xl border border-border bg-secondary/30 p-4">
          <h4 className="text-sm font-bold text-foreground flex items-center gap-2 mb-3">
            <CheckSquare className="w-4 h-4 text-primary shrink-0" />
            <span>معیارهای پذیرش تمرین (Acceptance Criteria):</span>
          </h4>
          <ul className="space-y-2 text-[15px] leading-[1.85] text-foreground/90">
            {exercise.acceptanceCriteria.map((criterion, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded bg-secondary text-primary text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-border">
                  {idx + 1}
                </span>
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hints */}
        {exercise.hints && exercise.hints.length > 0 && (
          <div className="rounded-xl border border-border overflow-hidden">
            <button
              onClick={() => setShowHints(!showHints)}
              className="w-full px-4 py-3 min-h-[44px] flex items-center justify-between text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors cursor-pointer"
              type="button"
            >
              <span className="flex items-center gap-2 font-medium">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                <span>راهنمایی‌های حل مرحله‌به‌مرحله ({toPersianDigits(exercise.hints.length)} نکته)</span>
              </span>
              {showHints ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showHints && (
              <div className="p-4 border-t border-border bg-background space-y-2.5 text-[15px] leading-[1.85]">
                {exercise.hints.map((hint, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <p className="text-foreground/90">{hint}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Reference Solution */}
        <div className="rounded-xl border border-border overflow-hidden">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="w-full px-4 py-3 min-h-[44px] flex items-center justify-between text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors cursor-pointer"
            type="button"
          >
            <span className="flex items-center gap-2 font-medium">
              {showSolution ? (
                <EyeOff className="w-4 h-4 text-muted-foreground shrink-0" />
              ) : (
                <Eye className="w-4 h-4 text-primary shrink-0" />
              )}
              <span>{showSolution ? "مخفی کردن کد راهکار مرجع" : "مشاهده کد راهکار مرجع مهندسی"}</span>
            </span>
            {showSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showSolution && (
            <div className="p-4 border-t border-border bg-background space-y-3">
              <div className="text-xs text-muted-foreground leading-relaxed">
                راهکار استاندارد و بهینه جاوا ۲۱ برای این تمرین:
              </div>
              <CodeBlock
                code={exercise.solution.code}
                language={exercise.solution.language || "java"}
                filename={exercise.solution.filename}
                title="Reference Solution"
              />
              {exercise.solution.explanation && (
                <div className="text-[15px] text-muted-foreground leading-[1.85] pt-2">
                  {exercise.solution.explanation}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
