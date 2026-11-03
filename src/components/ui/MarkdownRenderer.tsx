"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/lesson/CodeBlock";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

interface ParsedBlock {
  type: "code" | "heading" | "blockquote" | "list" | "table" | "paragraph";
  level?: number;
  language?: string;
  filename?: string;
  rawText: string;
  items?: string[];
  ordered?: boolean;
  tableData?: { headers: string[]; rows: string[][] };
}

/**
 * Parses markdown inline syntax: bold, italic, inline code with bidi isolation, and links.
 */
function renderInlineMarkdown(text: string): React.ReactNode[] {
  if (!text) return [];

  // Tokenize regex: inline code, bold, italic, markdown link
  const inlineRegex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[([^\]]+)\]\(([^)]+)\))/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let keyIdx = 0;

  while ((match = inlineRegex.exec(text)) !== null) {
    // Text before match
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith("`") && token.endsWith("`")) {
      const codeContent = token.slice(1, -1);
      nodes.push(
        <code
          key={keyIdx++}
          dir="ltr"
          style={{ direction: "ltr", textAlign: "left", unicodeBidi: "isolate" }}
          className="bidi-isolate px-1.5 py-0.5 rounded-md bg-secondary text-foreground border border-border text-[0.88em] font-mono align-baseline mx-0.5 select-text"
        >
          {codeContent}
        </code>
      );
    } else if (token.startsWith("**") && token.endsWith("**")) {
      const boldContent = token.slice(2, -2);
      nodes.push(
        <strong key={keyIdx++} className="font-bold text-foreground">
          {boldContent}
        </strong>
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      const italicContent = token.slice(1, -1);
      nodes.push(
        <em key={keyIdx++} className="italic text-foreground/95">
          {italicContent}
        </em>
      );
    } else if (token.startsWith("[") && match[2] && match[3]) {
      const linkText = match[2];
      const linkUrl = match[3];
      // Keep untrusted lesson/import content from producing executable links.
      if (!/^(https?:\/\/|\/(?!\/)|#)/i.test(linkUrl)) {
        nodes.push(<span key={keyIdx++}>{linkText}</span>);
        lastIndex = inlineRegex.lastIndex;
        continue;
      }
      const isExternal = linkUrl.startsWith("http://") || linkUrl.startsWith("https://");

      if (isExternal) {
        nodes.push(
          <a
            key={keyIdx++}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium inline-flex items-center gap-0.5 mx-0.5"
          >
            <span>{linkText}</span>
            <span className="text-[10px] font-mono select-none">↗</span>
          </a>
        );
      } else {
        nodes.push(
          <Link
            key={keyIdx++}
            href={linkUrl}
            className="text-primary hover:underline font-medium mx-0.5"
          >
            {linkText}
          </Link>
        );
      }
    }

    lastIndex = inlineRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

/**
 * Splits markdown content into structural blocks: fenced code, headings, lists, tables, blockquotes, paragraphs.
 */
function parseMarkdownBlocks(content: string): ParsedBlock[] {
  if (!content) return [];
  const lines = content.split(/\r?\n/);
  const blocks: ParsedBlock[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // 1. Fenced Code Block (```lang)
    if (line.trim().startsWith("```")) {
      const fenceMatch = line.trim().match(/^```([a-zA-Z0-9_\-\.]+)?(?:\s+(.+))?$/);
      const language = fenceMatch?.[1] || "text";
      const filename = fenceMatch?.[2];
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      blocks.push({
        type: "code",
        language,
        filename,
        rawText: codeLines.join("\n"),
      });
      continue;
    }

    // 2. Heading (#, ##, ###)
    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        rawText: headingMatch[2].trim(),
      });
      i++;
      continue;
    }

    // 3. Blockquote (> ...)
    if (line.trim().startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({
        type: "blockquote",
        rawText: quoteLines.join("\n"),
      });
      continue;
    }

    // 4. Markdown Table (| ... |)
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const headerRow = tableLines[0].split("|").slice(1, -1).map((s) => s.trim());
        const dataRows: string[][] = [];
        // Skip separator row (line index 1)
        for (let r = 2; r < tableLines.length; r++) {
          const cells = tableLines[r].split("|").slice(1, -1).map((s) => s.trim());
          dataRows.push(cells);
        }
        blocks.push({
          type: "table",
          rawText: tableLines.join("\n"),
          tableData: { headers: headerRow, rows: dataRows },
        });
        continue;
      }
    }

    // 5. Lists (- or * or 1.)
    const unorderedMatch = line.match(/^(\s*)[-*]\s+(.+)$/);
    const orderedMatch = line.match(/^(\s*)\d+\.\s+(.+)$/);
    if (unorderedMatch || orderedMatch) {
      const isOrdered = !!orderedMatch;
      const listItems: string[] = [];
      while (i < lines.length) {
        const curLine = lines[i];
        const uMatch = curLine.match(/^(\s*)[-*]\s+(.+)$/);
        const oMatch = curLine.match(/^(\s*)\d+\.\s+(.+)$/);
        if (isOrdered && oMatch) {
          listItems.push(oMatch[2].trim());
          i++;
        } else if (!isOrdered && uMatch) {
          listItems.push(uMatch[2].trim());
          i++;
        } else if (curLine.trim() === "") {
          break;
        } else {
          break;
        }
      }
      blocks.push({
        type: "list",
        ordered: isOrdered,
        items: listItems,
        rawText: listItems.join("\n"),
      });
      continue;
    }

    // 6. Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // 7. Regular Paragraph
    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].match(/^#{1,4}\s/) &&
      !lines[i].trim().startsWith(">") &&
      !lines[i].trim().startsWith("|") &&
      !lines[i].match(/^\s*[-*]\s/) &&
      !lines[i].match(/^\s*\d+\.\s/)
    ) {
      paragraphLines.push(lines[i]);
      i++;
    }

    if (paragraphLines.length > 0) {
      blocks.push({
        type: "paragraph",
        rawText: paragraphLines.join("\n"),
      });
    }
  }

  return blocks;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const blocks = useMemo(() => parseMarkdownBlocks(content), [content]);

  return (
    <div className={cn("space-y-4 reading-body text-foreground/90 font-normal", className)}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "code":
            return (
              <div key={idx} className="my-4">
                <CodeBlock
                  code={block.rawText}
                  language={block.language || "text"}
                  filename={block.filename}
                />
              </div>
            );

          case "heading":
            if (block.level === 2) {
              return (
                <h3
                  key={idx}
                  className="text-lg sm:text-xl font-bold text-foreground mt-6 mb-2 border-r-3 border-primary pr-2.5"
                >
                  {renderInlineMarkdown(block.rawText)}
                </h3>
              );
            } else if (block.level === 3) {
              return (
                <h4
                  key={idx}
                  className="text-base sm:text-lg font-bold text-foreground mt-4 mb-2"
                >
                  {renderInlineMarkdown(block.rawText)}
                </h4>
              );
            } else {
              return (
                <h5
                  key={idx}
                  className="text-sm sm:text-base font-bold text-foreground mt-3 mb-1.5"
                >
                  {renderInlineMarkdown(block.rawText)}
                </h5>
              );
            }

          case "blockquote":
            return (
              <blockquote
                key={idx}
                className="my-3 p-3.5 sm:p-4 rounded-xl border border-primary/25 bg-primary-muted text-foreground/95 border-r-4 border-r-primary leading-[1.9]"
              >
                {block.rawText.split("\n").map((line, lIdx) => (
                  <p key={lIdx} className={lIdx > 0 ? "mt-2" : ""}>
                    {renderInlineMarkdown(line)}
                  </p>
                ))}
              </blockquote>
            );

          case "table":
            if (!block.tableData) return null;
            return (
              <div key={idx} className="my-4 overflow-x-auto rounded-xl border border-border bg-card">
                <table className="w-full text-xs sm:text-sm text-right border-collapse">
                  <thead className="bg-secondary/70 border-b border-border text-foreground font-semibold">
                    <tr>
                      {block.tableData.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3 text-right">
                          {renderInlineMarkdown(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {block.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-secondary/40 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 align-top leading-relaxed">
                            {renderInlineMarkdown(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "list":
            if (block.ordered) {
              return (
                <ol key={idx} className="my-3 space-y-1.5 list-decimal list-inside pr-1 leading-[1.9]">
                  {block.items?.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-foreground/90">
                      <span className="inline-block mr-1">{renderInlineMarkdown(item)}</span>
                    </li>
                  ))}
                </ol>
              );
            } else {
              return (
                <ul key={idx} className="my-3 space-y-1.5 pr-1 leading-[1.9]">
                  {block.items?.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-foreground/90">
                      <span className="text-primary font-bold shrink-0 mt-0.5">•</span>
                      <span>{renderInlineMarkdown(item)}</span>
                    </li>
                  ))}
                </ul>
              );
            }

          case "paragraph":
          default:
            return (
              <p key={idx} className="leading-[1.9] text-foreground/90">
                {renderInlineMarkdown(block.rawText)}
              </p>
            );
        }
      })}
    </div>
  );
}
