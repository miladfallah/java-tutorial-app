import React from "react";
import Link from "next/link";
import { Terminal, ExternalLink } from "lucide-react";

export function Footer() {
  const officialDocs = [
    { title: "dev.java", url: "https://dev.java/" },
    { title: "docs.spring.io", url: "https://docs.spring.io/spring-boot/" },
    { title: "hibernate.org", url: "https://hibernate.org/orm/documentation/" },
    { title: "postgresql.org", url: "https://www.postgresql.org/docs/" },
    { title: "rabbitmq.com", url: "https://www.rabbitmq.com/docs" },
    { title: "testcontainers.com", url: "https://testcontainers.com/" },
  ];

  return (
    <footer className="w-full border-t border-border bg-card/40 text-muted-foreground text-xs mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <div className="w-6 h-6 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-mono text-xs">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold">Java-first Backend Engineer Academy</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md text-xs sm:text-sm">
              سامانه آموزشی مهندسی، طراحی‌شده برای توسعه‌دهندگان ارشد Node.js/NestJS. 
              آموزش عمیق و کاربردی Java 21 LTS، Spring Boot 3.3، معماری‌های توزیع‌شده و آزمون‌های خودکار در قالب ۲۶ هفته و ۱۵۶ جلسه.
            </p>
            <div className="text-xs text-muted-foreground font-mono">
              Self-hosted • Local Storage (IndexedDB) • Zero Cloud Dependencies
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-foreground text-xs uppercase">
              بخش‌های سامانه
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors py-1 inline-block">
                  داشبورد وضعیت
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-foreground transition-colors py-1 inline-block">
                  نقشه راه ۲۶ هفته
                </Link>
              </li>
              <li>
                <Link href="/capstone" className="hover:text-foreground transition-colors py-1 inline-block">
                  پروژه عملی سفارشات
                </Link>
              </li>
              <li>
                <Link href="/revision" className="hover:text-foreground transition-colors py-1 inline-block">
                  مرور و فلش‌کارت‌ها
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="hover:text-foreground transition-colors py-1 inline-block">
                  واژه‌نامه مفاهیم
                </Link>
              </li>
            </ul>
          </div>

          {/* Official documentation links */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-foreground text-xs uppercase">
              مستندات رسمی
            </h4>
            <ul className="space-y-2 text-xs">
              {officialDocs.map((doc) => (
                <li key={doc.title}>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors ltr-dir inline-flex items-center gap-1 font-mono py-1"
                  >
                    <span>{doc.title}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <div>
            توسعه‌یافته بر اساس استانداردهای باز و سازگار با Docker Compose.
          </div>
          <div className="font-mono">
            Next.js 14 • Java 21 LTS • Spring Boot 3.3
          </div>
        </div>
      </div>
    </footer>
  );
}
