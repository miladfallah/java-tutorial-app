"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Boxes, 
  Terminal, 
  Database, 
  ShieldCheck, 
  Server, 
  Cpu, 
  GitBranch, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Layers,
  ArrowRight
} from "lucide-react";
import { CodeBlock } from "@/components/lesson/CodeBlock";
import { toPersianDigits } from "@/lib/utils";

export default function CapstonePage() {
  const [activeTab, setActiveTab] = useState<string>("architecture");

  const phases = [
    {
      weekRange: "هفته ۱ تا ۴",
      title: "فاز ۱ — فونداسیون دامنه و همزمانی خالص در جاوا ۲۱",
      desc: "طراحی اشیای دامنه Order و Product با انکپسولیشن قوی، حل Race Condition در کسر موجودی با Atomic و ExecutorService، و بسته‌بندی با Maven.",
      techs: ["Java 21", "Maven", "OOP", "Concurrency", "JUnit 5"],
      link: "/lessons/order-product-domain-models",
    },
    {
      weekRange: "هفته ۵ تا ۸",
      title: "فاز ۲ — وب سرویس میکروسرویس با Spring Boot 3.3",
      desc: "تبدیل ماژول به وب‌سرویس RESTful، اعتبارسنجی جاکارتا، DTOها، هندلر خطای سراسری RFC 7807، فیلترهای لاگ‌نویسی و اعمال Idempotency Key.",
      techs: ["Spring Boot 3", "Spring MVC", "Jakarta Validation", "OpenAPI", "Docker"],
      link: "/lessons/building-the-order-rest-api",
    },
    {
      weekRange: "هفته ۹ تا ۱۲",
      title: "فاز ۳ — پایداری داده با PostgreSQL، هایبرنیت و تراکنش‌ها",
      desc: "مدل‌سازی جداول سفارشات در PostgreSQL، حل باگ N+1 با EntityGraph، کنترل همروندی رزرو انبار با Pessimistic Lock و مایگریشن با Flyway.",
      techs: ["PostgreSQL", "Spring Data JPA", "Hibernate", "Flyway", "HikariCP"],
      link: "/lessons/implementing-order-and-orderitem-entities",
    },
    {
      weekRange: "هفته ۱۳ تا ۱۶",
      title: "فاز ۴ — امنیت با JWT، تست‌های یکپارچه و تاب‌آوری",
      desc: "امن‌سازی اندپوینت‌ها با Spring Security 6 و توکن‌های بدون وضعیت JWT، تست‌های واقعی دیتابیس با Testcontainers و مدارشکن با Resilience4j.",
      techs: ["Spring Security", "JWT", "Testcontainers", "Resilience4j", "Bucket4j"],
      link: "/lessons/securing-the-order-api",
    },
    {
      weekRange: "هفته ۱۷ تا ۲۰",
      title: "فاز ۵ — پیام‌رسانی ناهمگام، کشینگ ردیس و ترد مجازی",
      desc: "انتشار رویداد OrderCreated به RabbitMQ، پیاده‌سازی Transactional Outbox جهت تضمین ارسال رویداد، کش ردیس و ارتقا به Virtual Threads جاوا ۲۱.",
      techs: ["RabbitMQ", "Transactional Outbox", "Redis", "Virtual Threads", "k6"],
      link: "/lessons/publishing-ordercreated-events",
    },
    {
      weekRange: "هفته ۲۱ تا ۲۶",
      title: "فاز ۶ — معماری توزیع‌شده، مشاهده‌پذیری و استقرار نهایی",
      desc: "طراحی الگوی Saga برای جبران شکست پرداخت، رهگیری توزیع‌شده با OpenTelemetry، متریک‌های پرومتئوس و گرافانا و دیپلوی چندمرحله‌ای داکر.",
      techs: ["Saga Pattern", "OpenTelemetry", "Prometheus", "Grafana", "CI/CD"],
      link: "/lessons/instrumenting-the-order-api",
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="space-y-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
            پروژه محوری پیوسته در طول ۲۶ هفته
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
          سامانه جامع مدیریت سفارشات و انبار (Order & Inventory System)
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          شما در طول این آکادمی فقط تئوری یاد نمی‌گیرید؛ بلکه همگام با آموزش‌ها یک سیستم سفارشات و انبارداری سازمانی مقیاس‌پذیر، 
          مبتنی بر Modular Monolith با قابلیت گذار به Event-Driven Microservices را در محیط توسعه IDE خود ایجاد خواهید کرد.
        </p>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === "architecture"
                ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            معماری و جریان داده‌ها
          </button>
          <button
            onClick={() => setActiveTab("phases")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === "phases"
                ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            فازهای توسعه ۲۶ هفته
          </button>
          <button
            onClick={() => setActiveTab("docker-local")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === "docker-local"
                ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            داکر و زیرساخت لوکال پروژه
          </button>
        </div>
      </div>

      {/* Tab 1: Architecture */}
      {activeTab === "architecture" && (
        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-orange-400" />
              معماری کلی سیستم: Modular Monolith رو به Event-Driven
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ما از پیچیدگی نارس و زودهنگام میکروسرویس‌ها پرهیز می‌کنیم. پروژه با یک مونولیت ماژولار با مرزهای شفاف بیزینسی (Clean Boundaries) شروع می‌شود 
              و به مرور زمان پایگاه‌های داده PostgreSQL، کشینگ Redis، پیام‌رسانی RabbitMQ و الگوی حیاتی Transactional Outbox به آن اضافه می‌گردد.
            </p>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 font-mono text-xs text-slate-300 ltr-dir leading-relaxed overflow-x-auto">
              <pre>{`[ Client / React Frontend ]
           │  HTTP REST (OpenAPI 3 / JWT Bearer)
           ▼
┌────────────────────────────────────────────────────────┐
│               Spring Boot Application                  │
│                                                        │
│  [ OrderController ] ──► [ OrderService ]              │
│                              │                         │
│                              ├─► [ PostgreSQL (JPA) ]  │
│                              │   (Orders & Outbox tbl) │
│                              │                         │
│                              ├─► [ Redis Cache ]       │
│                              │   (Products & Stock)    │
│                              │                         │
│                              └─► [ Outbox Publisher ]  │
└──────────────────────────────────────┬─────────────────┘
                                       │ Async AMQP Events
                                       ▼
                             [ RabbitMQ Broker ]
                                       │
                      ┌────────────────┴────────────────┐
                      ▼                                 ▼
             [ Inventory Worker ]              [ Notification Service ]`}</pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">پایگاه داده رابطه‌ای</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                PostgreSQL 16 با مایگریشن‌های Flyway، قفل‌های Pessimistic برای جلوگیری از اتمام موجودی و ایندکس‌های کامپوزیت بهینه.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">پیام‌رسانی با اطمینان ۱۰۰٪</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                RabbitMQ به همراه الگوی Transactional Outbox جهت حل معضل قطعی شبکه و تضمین ارسال ایونت پس از Commit تراکنش دیتابیس.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">همروندی مدرن با ترد مجازی</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Java 21 Virtual Threads جهت پاسخگویی به دهها هزار اتصال همزمان بدون نیاز به پیچیدگی‌های برنامه‌نویسی واکنشی (Reactive).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Phases */}
      {activeTab === "phases" && (
        <div className="space-y-4">
          {phases.map((ph, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  {ph.weekRange}
                </span>
                <Link
                  href={ph.link}
                  className="text-xs text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
                >
                  <span>شروع این فاز در درس‌های آکادمی</span>
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                </Link>
              </div>

              <h3 className="text-base font-bold text-white">{ph.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {ph.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {ph.techs.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 ltr-dir"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Docker Local Setup */}
      {activeTab === "docker-local" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-orange-400" />
              داکر کامپوز زیرساخت بک‌اند پروژه عملی
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              این فایل \`compose.yaml\` را می‌توانید در مخزن پروژه جاوا خود در لوکال قرار دهید تا با یک دستور، PostgreSQL، Redis و RabbitMQ با تنظیمات پروداکشن بالا بیایند:
            </p>

            <CodeBlock
              language="yaml"
              filename="capstone-infra/compose.yaml"
              title="Infrastructure Compose"
              code={`services:
  postgres:
    image: postgres:16-alpine
    container_name: academy-postgres
    environment:
      POSTGRES_DB: order_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password123
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: academy-redis
    ports:
      - "6379:6379"
    volumes:
      - redisdata:/data

  rabbitmq:
    image: rabbitmq:3-management-alpine
    container_name: academy-rabbitmq
    environment:
      RABBITMQ_DEFAULT_USER: guest
      RABBITMQ_DEFAULT_PASS: guest
    ports:
      - "5672:5672"     # AMQP protocol
      - "15672:15672"   # Management Web UI
    volumes:
      - rabbitmqdata:/var/lib/rabbitmq

volumes:
  pgdata:
  redisdata:
  rabbitmqdata:`}
            />

            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/70 text-xs text-slate-300 space-y-1">
              <span className="font-semibold text-orange-400 block">دستور راه‌اندازی زیرساخت لوکال:</span>
              <pre className="font-mono text-slate-200 ltr-dir">docker compose -f compose.yaml up -d</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
