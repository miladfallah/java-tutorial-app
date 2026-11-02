"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Briefcase } from "lucide-react";
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
    <div className="my-10 rounded-2xl border border-slate-800 bg-slate-900/30 p-5 sm:p-7">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
          <Briefcase className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white">
            سوالات مصاحبه شغلی سطح ارشد (Senior Technical Interview)
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            نحوه طرح موضوع توسط معماران و مدیران فنی در مصاحبه‌های استخدامی بین‌المللی
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {questions.map((q, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-800/80 bg-slate-950/60 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 flex items-center justify-between text-right text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-md bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-bold shrink-0">
                    {toPersianDigits(idx + 1)}
                  </span>
                  <span>{q.question}</span>
                </div>
                <div className="text-slate-400 mr-2 shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-900/20 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
                  <div className="border-r-2 border-orange-500/80 pr-3">
                    <span className="text-xs font-semibold text-orange-400 block mb-1">
                      پاسخ طلایی و نحوه پاسخگویی در مصاحبه:
                    </span>
                    <p className="whitespace-pre-line">{q.answer}</p>
                  </div>

                  {q.keyTakeaways && q.keyTakeaways.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-800/60">
                      <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                        نکات کلیدی برای جلب توجه مصاحبه‌کننده:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {q.keyTakeaways.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2">
                            <span className="text-orange-400 font-bold">•</span>
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
    </div>
  );
}
