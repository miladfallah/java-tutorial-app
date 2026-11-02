"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { InterviewQuestion } from "@/data/types";
import { toPersianDigits } from "@/lib/utils";

interface InterviewQuestionsSectionProps {
  questions: InterviewQuestion[];
}

export function InterviewQuestionsSection({
  questions,
}: InterviewQuestionsSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="interview-questions"
      className="my-8 rounded-xl border border-border bg-card p-5 sm:p-6"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-secondary text-primary border border-border flex items-center justify-center shrink-0 mt-0.5">
          <Briefcase className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
            Senior Engineering Interview
          </div>
          <h3 className="text-base font-semibold text-foreground mt-0.5">
            سوالات مصاحبه شغلی سطح ارشد
          </h3>
        </div>
      </div>

      <div className="space-y-2">
        {questions.map((q, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-lg border border-border/70 bg-background/50 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-3.5 flex items-center justify-between text-right text-xs sm:text-sm font-medium text-foreground hover:bg-secondary/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded text-[10px] font-mono border border-border bg-secondary text-muted-foreground flex items-center justify-center shrink-0">
                    {toPersianDigits(idx + 1)}
                  </span>
                  <span>{q.question}</span>
                </div>
                <div className="text-muted-foreground mr-2 shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="p-4 border-t border-border/60 bg-card/60 text-xs sm:text-sm text-foreground/90 leading-relaxed space-y-3">
                  <div className="border-r-2 border-primary/60 pr-3">
                    <span className="text-xs font-semibold text-foreground block mb-1">
                      پاسخ تشریحی در مصاحبه:
                    </span>
                    <p className="whitespace-pre-line text-muted-foreground">
                      {q.answer}
                    </p>
                  </div>

                  {q.keyTakeaways && q.keyTakeaways.length > 0 && (
                    <div className="pt-2 border-t border-border/40">
                      <span className="text-[11px] font-semibold text-foreground block mb-1">
                        نکات کلیدی برای مصاحبه‌کننده:
                      </span>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {q.keyTakeaways.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
