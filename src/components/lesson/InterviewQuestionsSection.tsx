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
      className="my-8 rounded-xl border border-border bg-card p-5 sm:p-6 scroll-mt-24"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-secondary text-primary border border-border flex items-center justify-center shrink-0 mt-0.5">
          <Briefcase className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-mono text-muted-foreground">
            SENIOR_TECHNICAL_INTERVIEW
          </div>
          <h3 className="text-base sm:text-lg font-bold text-foreground mt-0.5">
            سوالات مصاحبه شغلی سطح ارشد و پروداکشن
          </h3>
        </div>
      </div>

      <div className="space-y-3">
        {questions.map((q, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-xl border border-border/70 bg-background/50 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 min-h-[48px] flex items-center justify-between text-right text-base font-semibold text-foreground hover:bg-secondary/40 transition-colors cursor-pointer"
                type="button"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded text-xs font-mono border border-border bg-secondary text-primary font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-[1.8]">{q.question}</span>
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
                <div className="p-4 sm:p-5 border-t border-border/60 bg-card/60 text-[15px] sm:text-base text-foreground/90 leading-[1.95] space-y-4">
                  <div className="border-r-2 border-primary/60 pr-3.5">
                    <span className="text-sm font-bold text-foreground block mb-1.5">
                      پاسخ تشریحی و تحلیل معماری:
                    </span>
                    <p className="whitespace-pre-line text-muted-foreground leading-[1.95]">
                      {q.answer}
                    </p>
                  </div>

                  {q.keyTakeaways && q.keyTakeaways.length > 0 && (
                    <div className="pt-3 border-t border-border/40">
                      <span className="text-xs font-bold text-foreground block mb-2">
                        نکات کلیدی برای مصاحبه‌کننده:
                      </span>
                      <ul className="space-y-1.5 text-[15px] text-muted-foreground">
                        {q.keyTakeaways.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-primary font-bold shrink-0">•</span>
                            <span className="leading-[1.8]">{point}</span>
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
