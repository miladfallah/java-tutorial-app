"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  title?: string;
}

export function CodeBlock({
  code,
  language = "java",
  filename,
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };

  const lines = code.trim().split("\n");

  return (
    <div className="my-4 rounded-xl border border-border/80 bg-[#0c0e12] overflow-hidden text-xs">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-border/60 bg-[#12151b] text-muted-foreground select-none">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-primary/80" />
          {filename ? (
            <span className="font-mono text-foreground font-medium ltr-dir">
              {filename}
            </span>
          ) : (
            <span className="uppercase tracking-wider font-mono text-[10px] text-muted-foreground">
              {title || language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors font-mono text-[11px]"
          title="کپی کردن کد"
          aria-label="کپی کد"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">کپی شد</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>کپی</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content with Line Numbers */}
      <div className="p-3.5 overflow-x-auto text-xs leading-relaxed ltr-dir flex">
        <div
          aria-hidden="true"
          className="select-none text-muted-foreground/30 text-right pr-3 pl-1 font-mono shrink-0 hidden sm:block border-r border-border/30 mr-3"
        >
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre className="font-mono text-slate-200 overflow-x-auto flex-1">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}
