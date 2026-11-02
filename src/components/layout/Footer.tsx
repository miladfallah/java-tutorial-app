import React from "react";
import Link from "next/link";
import { Boxes, ShieldCheck, Heart, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 text-slate-400 py-10 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center">
              <Boxes className="w-5 h-5" />
            </div>
            <span className="font-bold text-white text-base">
              Java-first Backend Engineer Academy
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-md">
            پلتفرم تخصصی آموزش عمیق، عملی و مهندسی جاوا و اسپرینگ‌بوت برای مهندسان باسابقه Node.js و NestJS.
            شامل ۱۵۶ جلسه روزانه ۳۰ دقیقه‌ای، پروژه محوری ماژولار فروشگاهی، بررسی تفاوت‌های معماری و آمادگی کامل برای موقعیت‌های شغلی ارشد.
          </p>
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>اجرای ۱۰۰٪ آفلاین، بدون وابستگی به سرور خارجی و ذخیره‌سازی در IndexedDB</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">
            بخش‌های آکادمی
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                داشبورد پیشرفت
              </Link>
            </li>
            <li>
              <Link href="/roadmap" className="hover:text-white transition-colors">
                نقشه راه ۲۶ هفته (۱۵۶ درس)
              </Link>
            </li>
            <li>
              <Link href="/capstone" className="hover:text-white transition-colors">
                پروژه عملی Order Management
              </Link>
            </li>
            <li>
              <Link href="/revision" className="hover:text-white transition-colors">
                مرور و فلش‌کارت‌های تخصصی
              </Link>
            </li>
            <li>
              <Link href="/glossary" className="hover:text-white transition-colors">
                واژه‌نامه مفاهیم جاوا به نود
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">
            مراجع رسمی
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://dev.java/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors ltr-dir inline-block"
              >
                dev.java
              </a>
            </li>
            <li>
              <a
                href="https://docs.spring.io/spring-boot/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors ltr-dir inline-block"
              >
                docs.spring.io
              </a>
            </li>
            <li>
              <a
                href="https://hibernate.org/orm/documentation/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors ltr-dir inline-block"
              >
                hibernate.org
              </a>
            </li>
            <li>
              <a
                href="https://www.postgresql.org/docs/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors ltr-dir inline-block"
              >
                postgresql.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          توسعه‌یافته بر پایه استانداردهای مدرن Java 21 LTS و Spring Boot 3.3.
        </div>
        <div className="flex items-center gap-1">
          <span>طراحی شده برای پیشرفت مهندسی</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-1" />
          <span>بدون وابستگی و قابل استقرار با Docker Compose</span>
        </div>
      </div>
    </footer>
  );
}
