import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "primary" | "success" | "warning" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "neutral",
  size = "md",
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center font-medium rounded-md transition-colors";

  const variants = {
    neutral:
      "bg-secondary text-muted-foreground border border-border/60",
    primary:
      "bg-primary-muted text-primary border border-primary/20",
    success:
      "bg-success-muted text-emerald-700 dark:text-emerald-400 border border-success/20",
    warning:
      "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    outline:
      "border border-border text-muted-foreground bg-transparent",
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5 leading-none gap-1",
    md: "text-xs px-2.5 py-1 leading-none gap-1.5",
  };

  return (
    <span
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
