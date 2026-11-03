"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal, FileCode } from "lucide-react";
import { useAcademyStore } from "@/lib/store";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  title?: string;
  showLineNumbers?: boolean;
}

const KEYWORDS = new Set([
  // Java 21 & 25
  "package", "import", "public", "private", "protected", "class", "interface",
  "record", "enum", "extends", "implements", "static", "final", "void", "return",
  "new", "this", "super", "if", "else", "switch", "case", "break", "continue",
  "default", "for", "while", "do", "try", "catch", "finally", "throw", "throws",
  "var", "yield", "sealed", "permits", "instanceof", "assert", "synchronized",
  "volatile", "transient", "native", "when",
  // TypeScript / JavaScript
  "const", "let", "function", "async", "await", "export", "from", "type",
  "of", "in", "typeof", "keyof", "readonly", "as",
  // SQL
  "SELECT", "FROM", "WHERE", "INSERT", "INTO", "VALUES", "UPDATE", "SET",
  "DELETE", "JOIN", "LEFT", "RIGHT", "INNER", "ON", "GROUP", "BY", "ORDER",
  "LIMIT", "OFFSET", "CREATE", "TABLE", "INDEX", "PRIMARY", "KEY"
]);

const TYPES = new Set([
  // Java Core & Spring
  "int", "long", "double", "float", "boolean", "byte", "char", "short",
  "String", "Integer", "Long", "Double", "Float", "Boolean", "List", "Map", "Set",
  "Optional", "CompletableFuture", "ResponseEntity", "UUID", "Instant", "BigDecimal",
  "Object", "Void", "Exception", "RuntimeException", "ProblemDetail", "URI",
  "Duration", "LocalDate", "LocalDateTime", "ZonedDateTime", "ZoneId",
  // TS Types
  "number", "string", "any", "unknown", "never", "Promise", "Observable"
]);

const LITERALS = new Set(["true", "false", "null", "undefined"]);

/**
 * Tokenizes a single line of code cleanly matching strings first so URLs like "https://..."
 * are never broken by single-line comment markers.
 */
function tokenizeLine(line: string, language: string): React.ReactNode {
  if (!line) {
    return " "; // Non-empty to keep exact row height
  }

  // Regex matches:
  // 1. Text blocks: """..."""
  // 2. Double-quoted string: "(?:[^"\\]|\\.)*"
  // 3. Single-quoted string: '(?:[^'\\]|\\.)*'
  // 4. Backtick string: `[^`]*`
  // 5. Line comment: //.*$
  // 6. Hash comment (bash/yaml): #.*$
  // 7. Annotations: @\w+
  // 8. Numbers: \b\d+(?:\.\d+)?(?:[fFdDlL])?\b
  // 9. Words / Identifiers: \b[A-Za-z_]\w*\b
  // 10. Symbols / Punctuation
  // 11. Whitespace
  const tokenRegex = /("""[\s\S]*?"""|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[\s\S]*?`|\/\/[^\r\n]*|#[^\r\n]*|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?(?:[fFdDlL])?\b|\b[A-Za-z_]\w*\b|[^\sA-Za-z0-9_'"@`#\/]+|\s+|\/)/g;

  const elements: React.ReactNode[] = [];
  let match: RegExpExecArray | null;
  let keyIndex = 0;

  while ((match = tokenRegex.exec(line)) !== null) {
    const token = match[0];

    // String literals (text block, double, single, backtick)
    if (token.startsWith('"""') || token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) {
      elements.push(
        <span key={keyIndex++} className="token-string">
          {token}
        </span>
      );
    }
    // Comments: // or # (for bash/yaml)
    else if (token.startsWith("//") || ((language === "yaml" || language === "bash" || language === "sh") && token.startsWith("#"))) {
      elements.push(
        <span key={keyIndex++} className="token-comment">
          {token}
        </span>
      );
    }
    // Annotations: @Override, @Service, etc.
    else if (token.startsWith("@")) {
      elements.push(
        <span key={keyIndex++} className="token-annotation">
          {token}
        </span>
      );
    }
    // Numbers
    else if (/^\d/.test(token)) {
      elements.push(
        <span key={keyIndex++} className="token-number">
          {token}
        </span>
      );
    }
    // Keywords
    else if (KEYWORDS.has(token) || KEYWORDS.has(token.toUpperCase())) {
      elements.push(
        <span key={keyIndex++} className="token-keyword">
          {token}
        </span>
      );
    }
    // Types
    else if (TYPES.has(token)) {
      elements.push(
        <span key={keyIndex++} className="token-type">
          {token}
        </span>
      );
    }
    // Literals
    else if (LITERALS.has(token)) {
      elements.push(
        <span key={keyIndex++} className="token-keyword">
          {token}
        </span>
      );
    }
    // Other tokens (operators, identifiers, whitespace)
    else {
      elements.push(token);
    }
  }

  return elements;
}

export function CodeBlock({
  code,
  language = "java",
  filename,
  title,
  showLineNumbers = true,
}: CodeBlockProps) {
  const { settings } = useAcademyStore();
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  // If user disabled line numbers globally in settings, respect it
  const effectiveShowLineNumbers = showLineNumbers && settings.showLineNumbers;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
      setCopyError(true);
      setTimeout(() => setCopyError(false), 2500);
    }
  };

  const lines = code.split("\n");

  return (
    <div
      dir="ltr"
      style={{ direction: "ltr", textAlign: "left" }}
      className="my-4 rounded-xl border border-[var(--code-border)] bg-[var(--code-bg)] overflow-hidden text-[var(--code-text)] font-mono text-[13px] leading-6 shadow-sm select-text"
    >
      {/* Header Bar */}
      <div
        dir="ltr"
        style={{ direction: "ltr" }}
        className="flex items-center justify-between px-3.5 py-2 border-b border-[var(--code-border)] bg-[var(--code-header-bg)] select-none"
      >
        <div className="flex items-center gap-2 min-w-0">
          {filename ? (
            <FileCode className="w-3.5 h-3.5 text-primary shrink-0" />
          ) : (
            <Terminal className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
          )}
          <span className="font-mono text-xs font-semibold truncate text-[var(--code-text)]">
            {filename || title || language}
          </span>
          {filename && (
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded border border-[var(--code-border)] text-muted-foreground">
              {language}
            </span>
          )}
        </div>

        {/* Copy Button with Persian accessible feedback */}
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer border border-transparent font-sans",
            copied
              ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
              : copyError
              ? "bg-rose-500/15 text-rose-400 border-rose-500/30"
              : "hover:bg-[var(--code-border)]/50 text-muted-foreground hover:text-foreground hover:border-[var(--code-border)]"
          )}
          title="کپی کردن کد"
          aria-label="کپی کردن قطعه کد"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium font-sans">کپی شد ✓</span>
            </>
          ) : copyError ? (
            <span className="text-[11px] font-medium font-sans">خطا در کپی</span>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px] font-sans">کپی</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area with single horizontal scroll container */}
      <div
        dir="ltr"
        style={{ direction: "ltr", textAlign: "left" }}
        className="flex min-w-0 p-3.5 overflow-x-auto text-[13px] leading-6"
      >
        {effectiveShowLineNumbers && (
          <div
            dir="ltr"
            style={{ direction: "ltr", textAlign: "right" }}
            aria-hidden="true"
            className="select-none pointer-events-none text-[var(--code-line-number)] text-right pr-3.5 border-r border-[var(--code-border)]/60 font-mono shrink-0"
          >
            {lines.map((_, i) => (
              <div key={i} className="h-6 leading-6 text-[12px] opacity-75">
                {i + 1}
              </div>
            ))}
          </div>
        )}

        <pre
          dir="ltr"
          style={{ direction: "ltr", textAlign: "left" }}
          className={cn(
            "flex-1 min-w-0 font-mono m-0 p-0 bg-transparent overflow-visible text-[13px] leading-6",
            effectiveShowLineNumbers ? "pl-3.5" : "pl-1"
          )}
        >
          <code>
            {lines.map((line, i) => (
              <div key={i} className="h-6 leading-6 whitespace-pre">
                {tokenizeLine(line, language)}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
