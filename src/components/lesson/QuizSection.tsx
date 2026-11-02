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
      className="my-8 rounded-xl border border-border bg-card p-5 sm:p-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-secondary text-primary border border-border flex items-center justify-center shrink-0 mt-0.5">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              Concept Check
            </div>
            <h3 className="text-base font-semibold text-foreground mt-0.5">
              آزمونک سنجش یادگیری ({toPersianDigits(quizzes.length)} سوال تخصصی)
            </h3>
          </div>
        </div>

        {submitted && (
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "px-2.5 py-1 rounded-md text-xs font-mono font-medium border",
                isPassed
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-rose-500/10 text-rose-400 border-rose-500/20"
              )}
            >
              نمره: {toPersianDigits(currentScore)} / {toPersianDigits(quizzes.length)} (
              {isPassed ? "قبول" : "نیازمند مرور"})
            </span>

            <button
              onClick={handleRetry}
              className="p-1.5 rounded-lg border border-border bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
              title="آزمون مجدد"
              aria-label="آزمون مجدد"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Quizzes List */}
      <div className="mt-4 space-y-6">
        {quizzes.map((quiz, qIndex) => {
          const selected = selectedAnswers[quiz.id];
          const isAnswered = selected !== undefined;
          const isCorrect = isAnswered && selected === quiz.correctIndex;

          return (
            <div
              key={quiz.id}
              className="rounded-lg border border-border/70 bg-background/50 p-4 space-y-3"
            >
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded bg-secondary text-foreground flex items-center justify-center text-xs font-mono font-medium shrink-0 mt-0.5 border border-border/60">
                  {toPersianDigits(qIndex + 1)}
                </span>
                <h4 className="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
                  {quiz.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-1.5 mr-7">
                {quiz.options.map((option, optIdx) => {
                  const isThisSelected = selected === optIdx;
                  const isThisCorrect = optIdx === quiz.correctIndex;

                  let optionStyle =
                    "border-border/60 bg-card hover:bg-secondary/50 text-foreground";

                  if (submitted) {
                    if (isThisCorrect) {
                      optionStyle =
                        "border-emerald-500/50 bg-emerald-500/5 text-emerald-300 font-medium";
                    } else if (isThisSelected && !isThisCorrect) {
                      optionStyle =
                        "border-rose-500/50 bg-rose-500/5 text-rose-300";
                    } else {
                      optionStyle = "border-border/30 bg-card/40 text-muted-foreground opacity-50";
                    }
                  } else if (isThisSelected) {
                    optionStyle =
                      "border-primary bg-primary-muted text-primary font-medium";
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      onClick={() => handleSelectOption(quiz.id, optIdx)}
                      className={cn(
                        "w-full text-right p-2.5 rounded-lg border text-xs flex items-center justify-between gap-2.5 transition-colors",
                        optionStyle
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded text-[10px] font-mono border border-border bg-secondary text-muted-foreground flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-relaxed">{option}</span>
                      </div>

                      {submitted && (
                        <div>
                          {isThisCorrect && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          )}
                          {isThisSelected && !isThisCorrect && (
                            <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
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
                    "mr-7 p-2.5 rounded-lg border text-xs leading-relaxed",
                    isCorrect
                      ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-300"
                      : "border-border bg-secondary/30 text-muted-foreground"
                  )}
                >
                  <span className="font-semibold text-foreground block mb-1">
                    تحلیل و توضیح:
                  </span>
                  <p>{quiz.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit Button */}
      {!submitted && (
        <div className="mt-5 pt-3 border-t border-border flex items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">
            {toPersianDigits(answeredCount)} از {toPersianDigits(quizzes.length)} سوال پاسخ داده شد
          </span>
          <button
            disabled={!isAllAnswered}
            onClick={handleSubmit}
            className={cn(
              "px-4 py-2 rounded-lg text-xs font-semibold transition-colors",
              isAllAnswered
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                : "bg-secondary text-muted-foreground cursor-not-allowed border border-border"
            )}
          >
            مشاهده نتیجه آزمونک
          </button>
        </div>
      )}
    </section>
  );
}
