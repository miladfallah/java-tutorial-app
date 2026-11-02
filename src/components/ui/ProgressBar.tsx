import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  value: number; // 0 to 100
  max?: number;
  className?: string;
  indicatorClassName?: string;
  size?: "sm" | "md";
}

export function ProgressBar({
  value,
  max = 100,
  className,
  indicatorClassName,
  size = "md",
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const heights = {
    sm: "h-1.5",
    md: "h-2",
  };

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn(
        "w-full overflow-hidden rounded-full bg-secondary border border-border/40",
        heights[size],
        className
      )}
    >
      <div
        className={cn(
          "h-full bg-primary transition-all duration-300 ease-out rounded-full",
          indicatorClassName
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
