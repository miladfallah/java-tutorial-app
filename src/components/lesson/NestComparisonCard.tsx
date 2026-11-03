"use client";

import React from "react";
import { ArrowLeftRight } from "lucide-react";
import { ComparisonWithNestJS } from "@/data/types";
import { CodeBlock } from "./CodeBlock";

interface NestComparisonCardProps {
  comparison: ComparisonWithNestJS;
}

export function NestComparisonCard({ comparison }: NestComparisonCardProps) {
  return (
    <section
      id="nest-comparison"
      className="my-8 rounded-xl border border-border bg-card p-5 sm:p-6 scroll-mt-24"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-secondary text-primary border border-border flex items-center justify-center shrink-0 mt-0.5">
          <ArrowLeftRight className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-mono text-muted-foreground">
            NESTJS_TO_JAVA_BRIDGE
          </div>
          <h3 className="text-base sm:text-lg font-bold text-foreground mt-0.5">
            تطبیق مفهومی: <code dir="ltr" className="font-mono text-primary">{comparison.nestConcept}</code> با <code dir="ltr" className="font-mono text-primary">{comparison.javaConcept}</code>
          </h3>
        </div>
      </div>

      <div className="text-[15px] sm:text-base text-foreground/90 leading-[1.9] space-y-2 mb-4 border-r-2 border-primary/50 pr-3.5">
        <p className="whitespace-pre-line">{comparison.explanation}</p>
      </div>

      {/* Code comparison: stacks vertically on reading width to avoid cramped scrolling */}
      {(comparison.nestCode || comparison.javaCode) && (
        <div className="space-y-4 pt-2">
          {comparison.nestCode && (
            <div>
              <div className="text-xs font-mono font-medium text-muted-foreground px-1 pb-1 ltr-dir">
                // 1. NestJS / TypeScript Implementation
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
              <div className="text-xs font-mono font-medium text-muted-foreground px-1 pb-1 ltr-dir">
                // 2. Modern Java 21 / Spring Boot 3.3 Implementation
              </div>
              <CodeBlock
                code={comparison.javaCode}
                language="java"
                title="Java 21 / Spring Boot"
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
