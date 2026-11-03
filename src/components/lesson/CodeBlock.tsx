"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  title?: string;
  showLineNumbers?: boolean;
}

const KEYWORDS = new Set([
  // Java
  "package", "import", "public", "private", "protected", "class", "interface",
  "record", "enum", "extends", "implements", "static", "final", "void", "return",
  "new", "this", "super", "if", "else", "switch", "case", "break", "continue",
  "default", "for", "while", "do", "try", "catch", "finally", "throw", "throws",
  "var", "yield", "sealed", "permits", "instanceof", "assert", "synchronized",
  "volatile", "transient", "native",
  // TypeScript / JavaScript
  "const", "let", "function", "async", "await", "export", "from", "type",
  "of", "in", "typeof", "keyof", "readonly", "as",
  // SQL
  "SELECT", "FROM", "WHERE", "INSERT", "INTO", "VALUES", "UPDATE", "SET",
  "DELETE", "JOIN", "LEFT", "RIGHT", "INNER", "ON", "GROUP", "BY", "ORDER",
  "LIMIT", "OFFSET", "CREATE", "TABLE", "INDEX", "PRIMARY", "KEY"
]);

const TYPES = new Set([
  // Java Types
  "int", "long", "double", "float", "boolean", "byte", "char", "short",
  "String", "Integer", "Long", "Double", "Float", "Boolean", "List", "Map", "Set",
  "Optional", "CompletableFuture", "ResponseEntity", "UUID", "Instant", "BigDecimal",
  "Object", "Void", "Exception", "RuntimeException",
  // TS Types
  "number", "string", "any", "unknown", "never", "Promise", "Observable"
]);

const LITERALS = new Set(["true", "false", "null", "undefined"]);

function tokenizeLine(line: string, language: string): React.ReactNode {
  if (!line) {
    return " "; // Non-empty so empty lines maintain exact height
  }

  // Handle full line comments (Java // or Bash/Yaml #)
  const trimmed = line.trimStart();
  const indent = line.slice(0, line.length - trimmed.length);

  // Check if comment starts
  const commentIdx = line.indexOf("//");
  const hashCommentIdx = (language === "yaml" || language === "bash" || language === "sh") ? line.indexOf("#") : -1;

  let codePart = line;
  let commentPart = "";

  if (commentIdx !== -1) {
    codePart = line.slice(0, commentIdx);
    commentPart = line.slice(commentIdx);
  } else if (hashCommentIdx !== -1) {
    codePart = line.slice(0, hashCommentIdx);
    commentPart = line.slice(hashCommentIdx);
  }

  // Tokenize codePart using regex
  // Matches: strings, annotations, words, numbers, punctuation
  const tokenRegex = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[\s\S]*?`|@\w+|\b\d+(?:\.\d+)?(?:[fFdDlL])?\b|\b[A-Za-z_]\w*\b|[^\sA-Za-z0-9_'"@`]+|\s+)/g;

  const elements: React.ReactNode[] = [];
  let match: RegExpExecArray | null;
  let keyIndex = 0;

  while ((match = tokenRegex.exec(codePart)) !== null) {
    const token = match[0];

    if (/^["'`]/.test(token)) {
      elements.push(
        <span key={keyIndex++} className="token-string">
          {token}
        </span>
      );
    } else if (token.startsWith("@")) {
      elements.push(
        <span key={keyIndex++} className="token-annotation">
          {token}
        </span>
      );
    } else if (/^\d/.test(token)) {
      elements.push(
        <span key={keyIndex++} className="token-number">
          {token}
        </span>
      );
    } else if (KEYWORDS.has(token) || KEYWORDS.has(token.toUpperCase())) {
      elements.push(
        <span key={keyIndex++} className="token-keyword">
          {token}
        </span>
      );
    } else if (TYPES.has(token)) {
      elements.push(
        <span key={keyIndex++} className="token-type">
          {token}
        </span>
      );
    } else if (LITERALS.has(token)) {
      elements.push(
        <span key={keyIndex++} className="token-keyword">
          {token}
        </span>
      );
    } else {
      elements.push(token);
    }
  }

  if (commentPart) {
    elements.push(
      <span key={keyIndex++} className="token-comment">
        {commentPart}
      </span>
    );
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

  // Preserve exact lines and indentation
  const lines = code.split("\n");

  return (
    <div
      className="my-5 rounded-xl border overflow-hidden text-xs transition-colors shadow-xs"
      style={{
        backgroundColor: "var(--code-bg)",
        borderColor: "var(--code-border)",
      }}
    >
      {/* Code Header Bar */}
      <div
        className="flex items-center justify-between px-3.5 py-2 border-b select-none"
        style={{
          backgroundColor: "var(--code-header-bg)",
          borderColor: "var(--code-border)",
        }}
      >
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-primary shrink-0" />
          {filename ? (
            <span
              dir="ltr"
              style={{ direction: "ltr", textAlign: "left" }}
              className="font-mono font-medium ltr-dir text-[12px]"
            >
              {filename}
            </span>
          ) : (
            <span
              dir="ltr"
              style={{ direction: "ltr", textAlign: "left" }}
              className="font-mono text-[11px] text-muted-foreground ltr-dir font-medium uppercase"
            >
              {title || language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-secondary hover:bg-secondary/80 text-foreground transition-colors font-sans text-xs font-medium cursor-pointer"
          title="کپی کردن قطعه کد در کلیپ‌بورد"
          aria-label="کپی کد در حافظه"
          type="button"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="text-emerald-500 font-sans">کپی شد ✓</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span className="font-sans">کپی کد</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content Container with Single Horizontal Scroll */}
      <div className="p-3.5 flex font-mono text-[13px] leading-6 select-text">
        {showLineNumbers && (
          <div
            aria-hidden="true"
            className="select-none pointer-events-none text-right pr-3 pl-1 font-mono shrink-0 border-r mr-3"
            style={{
              borderColor: "var(--code-border)",
              color: "var(--code-line-number)",
            }}
          >
            {lines.map((_, i) => (
              <div key={i} className="leading-6 h-6 text-[12px]">
                {i + 1}
              </div>
            ))}
          </div>
        )}

        <div className="flex-1 min-w-0 overflow-x-auto">
          <pre
            dir="ltr"
            style={{
              direction: "ltr",
              textAlign: "left",
              color: "var(--code-text)",
            }}
            className="font-mono text-[13px] leading-6 m-0 p-0 overflow-visible"
          >
            <code
              dir="ltr"
              style={{ direction: "ltr", textAlign: "left" }}
              className="block"
            >
              {lines.map((line, idx) => (
                <div key={idx} className="leading-6 h-6 whitespace-pre">
                  {tokenizeLine(line, language)}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
