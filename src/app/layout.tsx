"use client";

import React, { useState } from "react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { useAcademyStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const themeInitScript = `
  (function() {
    try {
      var stored = localStorage.getItem('academy_reader_settings');
      var theme = 'dark';
      var fontSize = 'normal';
      var lineHeight = 'relaxed';
      var columnWidth = 'normal';
      var reduceMotion = 'system';
      if (stored) {
        var parsed = JSON.parse(stored);
        theme = parsed.theme || theme;
        fontSize = parsed.fontSize || fontSize;
        lineHeight = parsed.lineHeight || lineHeight;
        columnWidth = parsed.columnWidth || columnWidth;
        reduceMotion = parsed.reduceMotion || reduceMotion;
      } else {
        var legacy = localStorage.getItem('academy_theme');
        if (legacy === 'light' || legacy === 'dark') theme = legacy;
      }
      var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var root = document.documentElement;
      if (isDark) {
        root.classList.add('dark');
        root.classList.remove('light');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
      root.setAttribute('data-font-size', fontSize);
      root.setAttribute('data-line-height', lineHeight);
      root.setAttribute('data-column-width', columnWidth);
      root.setAttribute('data-reduce-motion', reduceMotion);
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { isReaderMode, toggleReaderMode } = useAcademyStore();

  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className="dark">
      <head>
        <title>Java-first Backend Engineer Academy</title>
        <meta
          name="description"
          content="دوره جامع و فشرده ۲۶ هفته‌ای (۱۵۶ درس) برای انتقال حرفه‌ای از Node.js و NestJS به Java و Spring Boot."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <Header
          isSidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          isDesktopSidebarOpen={!isReaderMode && !sidebarCollapsed}
          onToggleDesktopSidebar={() => {
            if (isReaderMode) {
              toggleReaderMode();
              setSidebarCollapsed(false);
            } else {
              setSidebarCollapsed((prev) => !prev);
            }
          }}
        />

        <div
          className={cn(
            "flex-1 flex flex-col min-w-0 transition-all duration-200",
            isReaderMode || sidebarCollapsed ? "lg:mr-0" : "lg:mr-72"
          )}
        >
          {/* Main content container */}
          <main
            className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8"
          >
            <div className="max-w-6xl mx-auto">{children}</div>
          </main>

          <Footer />
        </div>

        {/* RTL Sidebar on the right */}
        {!isReaderMode && (
          <div className={sidebarCollapsed ? "lg:hidden" : undefined}>
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          </div>
        )}
      </body>
    </html>
  );
}
