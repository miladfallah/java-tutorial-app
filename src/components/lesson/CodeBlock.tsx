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

  return (
    <div className="my-4 rounded-xl border border-slate-800 bg-slate-950/90 overflow-hidden shadow-lg">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-orange-400" />
          {filename ? (
            <span className="font-mono text-slate-200 font-medium ltr-dir">
              {filename}
            </span>
          ) : (
            <span className="uppercase tracking-wider font-mono text-[11px] text-slate-300">
              {title || language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-mono"
          title="کپی کردن کد"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">کپی شد!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>کپی</span>
            </>
          )}
        </button>
      </div>

      {/* Code body - strictly LTR */}
      <div className="p-4 overflow-x-auto text-sm leading-relaxed ltr-dir">
        <pre className="font-mono text-slate-200">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}
