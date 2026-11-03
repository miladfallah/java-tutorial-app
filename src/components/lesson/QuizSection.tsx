"use client";

import React, { useState } from "react";
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award,
  AlertCircle
} from "lucide-react";
import { QuizQuestion } from "@/data/types";
import { useAcademyStore } from "@/lib/store";
import { toPersianDigits, cn } from "@/lib/utils";

interface QuizSectionProps {
  lessonId: string;
  quizzes: QuizQuestion[];
}

export function QuizSection({ lessonId, quizzes }: QuizSectionProps) {
  const { progress, recordQuizResult } = useAcademyStore();
  const existingResult = progress.quizResults[lessonId];

  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(
    existingResult?.answers || {}
  );
  const [submitted, setSubmitted] = useState<boolean>(!!existingResult);

  const handleSelectOption = (quizId: string, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [quizId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quizzes.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setSubmitted(true);
    recordQuizResult(lessonId, score, quizzes.length, selectedAnswers);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const isAllAnswered = answeredCount === quizzes.length;
  const currentScore = calculateScore();
  const passThreshold = Math.ceil(quizzes.length * 0.65);
  const isPassed = currentScore >= passThreshold;

  return (
    <section
      id="quiz"
      className="my-8 rounded-xl border border-border bg-card p-5 sm:p-6 scroll-mt-24"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-secondary text-primary border border-border flex items-center justify-center shrink-0 mt-0.5">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-muted-foreground">
              CONCEPT_ASSESSMENT
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground mt-0.5">
              آزمونک سنجش یادگیری ({toPersianDigits(quizzes.length)} سوال تخصصی)
            </h3>
          </div>
        </div>

        {submitted && (
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium border",
                isPassed
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-semibold"
                  : "bg-rose-500/10 text-rose-400 border-rose-500/30 font-semibold"
              )}
            >
              نمره: {toPersianDigits(currentScore)} از {toPersianDigits(quizzes.length)} ({isPassed ? "قبول ✓" : "نیازمند مرور"})
            </span>

            <button
              onClick={handleRetry}
              className="p-2 min-h-[36px] min-w-[36px] rounded-lg border border-border bg-secondary hover:bg-secondary/80 text-foreground transition-colors cursor-pointer flex items-center justify-center"
              title="آزمون مجدد"
              aria-label="آزمون مجدد"
              type="button"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Quizzes List */}
      <div className="mt-5 space-y-6">
        {quizzes.map((quiz, qIndex) => {
          const selected = selectedAnswers[quiz.id];
          const isAnswered = selected !== undefined;
          const isCorrect = isAnswered && selected === quiz.correctIndex;

          return (
            <div
              key={quiz.id}
              className="rounded-xl border border-border/70 bg-background/50 p-4 sm:p-5 space-y-4"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-secondary text-primary flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 border border-border">
                  {qIndex + 1}
                </span>
                <h4 className="text-base sm:text-[17px] font-semibold text-foreground leading-[1.85]">
                  {quiz.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2 mr-0 sm:mr-9">
                {quiz.options.map((option, optIdx) => {
                  const isThisSelected = selected === optIdx;
                  const isThisCorrect = optIdx === quiz.correctIndex;

                  let optionStyle =
                    "border-border bg-card hover:bg-secondary/60 text-foreground";

                  if (submitted) {
                    if (isThisCorrect) {
                      optionStyle =
                        "border-emerald-500/60 bg-emerald-500/10 text-emerald-400 font-semibold ring-1 ring-emerald-500/30";
                    } else if (isThisSelected && !isThisCorrect) {
                      optionStyle =
                        "border-rose-500/60 bg-rose-500/10 text-rose-400 font-semibold ring-1 ring-rose-500/30";
                    } else {
                      optionStyle = "border-border/40 bg-card/40 text-muted-foreground opacity-60";
                    }
                  } else if (isThisSelected) {
                    optionStyle =
                      "border-primary bg-primary-muted text-primary font-semibold ring-1 ring-primary/40";
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      onClick={() => handleSelectOption(quiz.id, optIdx)}
                      className={cn(
                        "w-full text-right p-3.5 min-h-[46px] rounded-lg border text-[15px] sm:text-base leading-[1.8] flex items-center justify-between gap-3 transition-colors cursor-pointer",
                        optionStyle
                      )}
                      type="button"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded text-xs font-mono border border-border bg-secondary text-muted-foreground flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {submitted && (
                        <div className="shrink-0 mr-2">
                          {isThisCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          )}
                          {isThisSelected && !isThisCorrect && (
                            <XCircle className="w-4 h-4 text-rose-500" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submit */}
              {submitted && (
                <div
                  className={cn(
                    "mr-0 sm:mr-9 p-3.5 rounded-lg border text-[15px] leading-[1.85]",
                    isCorrect
                      ? "border-emerald-500/20 bg-emerald-500/5 text-foreground"
                      : "border-border bg-secondary/30 text-foreground"
                  )}
                >
                  <span className="font-bold text-foreground block mb-1">
                    تحلیل و بررسی پاسخ:
                  </span>
                  <p className="text-muted-foreground leading-relaxed">{quiz.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit Button (Accessible touch target >= 44px) */}
      {!submitted && (
        <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground font-medium">
            {toPersianDigits(answeredCount)} از {toPersianDigits(quizzes.length)} سوال پاسخ داده شد
          </span>
          <button
            disabled={!isAllAnswered}
            onClick={handleSubmit}
            className={cn(
              "px-5 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold transition-colors cursor-pointer w-full sm:w-auto",
              isAllAnswered
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                : "bg-secondary text-muted-foreground cursor-not-allowed border border-border"
            )}
            type="button"
          >
            مشاهده نتیجه آزمونک
          </button>
        </div>
      )}
    </section>
  );
}
