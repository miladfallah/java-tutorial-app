"use client";

import React, { useState } from "react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="fa" dir="rtl" className="dark">
      <head>
        <title>Java-first Backend Engineer Academy</title>
        <meta
          name="description"
          content="دوره جامع و فشرده ۲۶ هفته‌ای (۱۵۶ درس) برای انتقال حرفه‌ای از Node.js و NestJS به Java و Spring Boot."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <Header
          isSidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />

        <div className="flex-1 flex w-full">
          {/* Main content container */}
          <main className="flex-1 min-w-0 lg:mr-72 p-4 sm:p-6 lg:p-8 transition-all">
            <div className="max-w-6xl mx-auto">{children}</div>
          </main>

          {/* RTL Sidebar on the right */}
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>

        <Footer />
      </body>
    </html>
  );
}
