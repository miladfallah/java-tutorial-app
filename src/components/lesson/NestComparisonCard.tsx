"use client";

import React, { useState } from "react";
import { ArrowLeftRight, Code2 } from "lucide-react";
import { ComparisonWithNestJS } from "@/data/types";
import { CodeBlock } from "./CodeBlock";

interface NestComparisonCardProps {
  comparison: ComparisonWithNestJS;
}

export function NestComparisonCard({ comparison }: NestComparisonCardProps) {
  const [activeTab, setActiveTab] = useState<"side-by-side" | "nest" | "java">(
    "side-by-side"
  );

  return (
    <div className="my-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/20 to-slate-900/40 p-5 sm:p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
          <ArrowLeftRight className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>تطبیق و مقایسه فنی:</span>
            <span className="text-indigo-400 ltr-dir font-mono text-sm sm:text-base">
              {comparison.nestConcept} ⟷ {comparison.javaConcept}
            </span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            تحلیل تفاوت‌های معماری و الگویی برای مهندسان باسابقه Node.js و NestJS
          </p>
        </div>
      </div>

      <div className="text-sm text-slate-300 leading-relaxed space-y-3 mb-5 border-r-2 border-indigo-500/50 pr-4">
        <p>{comparison.explanation}</p>
      </div>

      {(comparison.nestCode || comparison.javaCode) && (
        <div className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {comparison.nestCode && (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold px-2 py-1 text-rose-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    NestJS / TypeScript
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 ltr-dir">
                    {comparison.nestConcept}
                  </span>
                </div>
                <CodeBlock
                  code={comparison.nestCode}
                  language="typescript"
                  title="NestJS / TypeScript"
                />
              </div>
            )}

            {comparison.javaCode && (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold px-2 py-1 text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Java 21 / Spring Boot
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 ltr-dir">
                    {comparison.javaConcept}
                  </span>
                </div>
                <CodeBlock
                  code={comparison.javaCode}
                  language="java"
                  title="Java / Spring Boot"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
