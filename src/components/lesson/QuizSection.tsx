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
    <div className="my-10 rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900/60 p-5 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                سنجش درک مفهومی و کوییز
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1">
              آزمونک سنجش یادگیری ({toPersianDigits(quizzes.length)} سوال تخصصی)
            </h3>
          </div>
        </div>

        {submitted && (
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-1.5",
                isPassed
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                  : "bg-rose-500/20 text-rose-300 border-rose-500/40"
              )}
            >
              <Award className="w-4 h-4" />
              <span>
                نمره: {toPersianDigits(currentScore)} از {toPersianDigits(quizzes.length)} (
                {isPassed ? "قبول شدی!" : "نیاز به مرور"})
              </span>
            </div>

            <button
              onClick={handleRetry}
              className="p-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="آزمون مجدد"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Quiz questions */}
      <div className="mt-6 space-y-8">
        {quizzes.map((quiz, qIndex) => {
          const selected = selectedAnswers[quiz.id];
          const isAnswered = selected !== undefined;
          const isCorrect = isAnswered && selected === quiz.correctIndex;

          return (
            <div
              key={quiz.id}
              className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4 sm:p-5 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {toPersianDigits(qIndex + 1)}
                </span>
                <h4 className="text-sm font-semibold text-slate-100 leading-relaxed">
                  {quiz.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2.5 mr-9">
                {quiz.options.map((option, optIdx) => {
                  const isThisSelected = selected === optIdx;
                  const isThisCorrect = optIdx === quiz.correctIndex;

                  let optionStyle =
                    "border-slate-800/80 bg-slate-900/40 text-slate-300 hover:bg-slate-800/60 hover:text-white";

                  if (submitted) {
                    if (isThisCorrect) {
                      optionStyle =
                        "border-emerald-500/50 bg-emerald-950/40 text-emerald-200 font-medium";
                    } else if (isThisSelected && !isThisCorrect) {
                      optionStyle =
                        "border-rose-500/50 bg-rose-950/40 text-rose-200";
                    } else {
                      optionStyle = "border-slate-800/40 bg-slate-950/20 text-slate-500 opacity-60";
                    }
                  } else if (isThisSelected) {
                    optionStyle =
                      "border-orange-500/50 bg-orange-950/30 text-orange-200 font-medium";
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      onClick={() => handleSelectOption(quiz.id, optIdx)}
                      className={cn(
                        "w-full text-right p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-3 transition-all",
                        optionStyle
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-md border border-slate-700 bg-slate-800/80 text-slate-400 text-[11px] font-mono flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {submitted && (
                        <div>
                          {isThisCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          )}
                          {isThisSelected && !isThisCorrect && (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
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
                    "mt-4 mr-9 p-3.5 rounded-xl border text-xs leading-relaxed",
                    isCorrect
                      ? "border-emerald-500/30 bg-emerald-950/20 text-emerald-300"
                      : "border-amber-500/30 bg-amber-950/20 text-amber-300"
                  )}
                >
                  <div className="font-semibold flex items-center gap-1.5 mb-1">
                    {isCorrect ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    )}
                    <span>تحلیل و پاسخ تشریحی:</span>
                  </div>
                  <p>{quiz.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action button */}
      {!submitted && (
        <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <span className="text-xs text-slate-400">
            {toPersianDigits(answeredCount)} از {toPersianDigits(quizzes.length)} سوال پاسخ داده شده
          </span>
          <button
            disabled={!isAllAnswered}
            onClick={handleSubmit}
            className={cn(
              "px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all",
              isAllAnswered
                ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20"
                : "bg-slate-800 text-slate-500 cursor-not-allowed"
            )}
          >
            ثبت پاسخ‌ها و مشاهده نتیجه
          </button>
        </div>
      )}
    </div>
  );
}
