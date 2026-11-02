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
      className="my-8 rounded-xl border border-border bg-card p-5 sm:p-6"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-secondary text-primary border border-border flex items-center justify-center shrink-0 mt-0.5">
          <ArrowLeftRight className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
            NestJS ⟷ Java / Spring Boot
          </div>
          <h3 className="text-base font-semibold text-foreground mt-0.5">
            تطبیق مفهومی: <span className="font-mono text-primary ltr-dir">{comparison.nestConcept}</span> با <span className="font-mono text-primary ltr-dir">{comparison.javaConcept}</span>
          </h3>
        </div>
      </div>

      <div className="text-xs sm:text-sm text-foreground/90 leading-relaxed space-y-2 mb-4 border-r-2 border-primary/50 pr-3">
        <p>{comparison.explanation}</p>
      </div>

      {(comparison.nestCode || comparison.javaCode) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-2">
          {comparison.nestCode && (
            <div>
              <div className="text-xs font-mono font-medium text-muted-foreground px-1 pb-1">
                NestJS / TypeScript
              </div>
              <CodeBlock
                code={comparison.nestCode}
                language="typescript"
                title="TypeScript"
              />
            </div>
          )}

          {comparison.javaCode && (
            <div>
              <div className="text-xs font-mono font-medium text-muted-foreground px-1 pb-1">
                Java 21 / Spring Boot
              </div>
              <CodeBlock
                code={comparison.javaCode}
                language="java"
                title="Java"
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
