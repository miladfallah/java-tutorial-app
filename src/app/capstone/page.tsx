"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Boxes, 
  Terminal, 
  Database, 
  Server, 
  Cpu, 
  Layers,
  ArrowRight,
  Check,
  Copy
} from "lucide-react";
import { CodeBlock } from "@/components/lesson/CodeBlock";
import { toPersianDigits, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function CapstonePage() {
  const [activeTab, setActiveTab] = useState<"architecture" | "phases" | "docker-local">("architecture");
  const [copiedCmd, setCopiedCmd] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("docker compose -f compose.yaml up -d");
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const phases = [
    {
      phaseNumber: 1,
      weekRange: "هفته ۱ تا ۴",
      title: "فونداسیون دامنه و همزمانی خالص در جاوا ۲۱",
      titleEn: "Domain Foundation & Pure Concurrency in Java 21",
      desc: "طراحی اشیای دامنه Order و Product با انکپسولیشن قوی و Value Objectها، حل رقابت همروند در کسر موجودی انبار با AtomicReference و ExecutorService، و بسته‌بندی ماژولار با Maven Multi-module.",
      techs: ["Java 21", "Maven", "OOP Patterns", "ExecutorService", "JUnit 5"],
      link: "/lessons/order-product-domain-models",
    },
    {
      phaseNumber: 2,
      weekRange: "هفته ۵ تا ۸",
      title: "وب سرویس استاندارد سازمانی با Spring Boot 3.3",
      titleEn: "Production RESTful Service with Spring Boot 3.3",
      desc: "تبدیل ماژول به وب‌سرویس RESTful، اعتبارسنجی جاکارتا (Jakarta Validation)، DTOها و Recordها، مدیریت متمرکز استثناها طبق استاندارد RFC 7807، فیلترهای لاگ‌نویسی و پیاده‌سازی Idempotency Key برای سفارشات تکراری.",
      techs: ["Spring Boot 3", "Spring MVC", "Jakarta Validation", "OpenAPI / Swagger", "Docker"],
      link: "/lessons/building-the-order-rest-api",
    },
    {
      phaseNumber: 3,
      weekRange: "هفته ۹ تا ۱۲",
      title: "پایداری داده با PostgreSQL، هایبرنیت و مدیریت تراکنش",
      titleEn: "Data Persistence with PostgreSQL, Hibernate & Transactions",
      desc: "مدل‌سازی دقیق جداول سفارشات و اقلام در PostgreSQL، پیشگیری از باگ فاجعه‌بار N+1 با EntityGraph، کنترل همروندی رزرو انبار با Pessimistic Lock و مایگریشن پایگاه‌داده با Flyway.",
      techs: ["PostgreSQL 16", "Spring Data JPA", "Hibernate 6", "Flyway", "HikariCP"],
      link: "/lessons/implementing-order-and-orderitem-entities",
    },
    {
      phaseNumber: 4,
      weekRange: "هفته ۱۳ تا ۱۶",
      title: "امنیت با JWT، تست‌های یکپارچه و الگوهای تاب‌آوری",
      titleEn: "Stateless Security, Real Integration Tests & Resilience",
      desc: "امن‌سازی اندپوینت‌ها با Spring Security 6 و توکن‌های JWT بدون وضعیت، تست‌های یکپارچه دیتابیس با داکر کانتینرهای واقعی به کمک Testcontainers و پیاده‌سازی Circuit Breaker و Rate Limiting.",
      techs: ["Spring Security 6", "JWT Bearer", "Testcontainers", "Resilience4j", "Bucket4j"],
      link: "/lessons/securing-the-order-api",
    },
    {
      phaseNumber: 5,
      weekRange: "هفته ۱۷ تا ۲۰",
      title: "پیام‌رسانی ناهمگام، کشینگ ردیس و ترد مجازی جاوا ۲۱",
      titleEn: "Asynchronous Messaging, Redis Caching & Virtual Threads",
      desc: "انتشار رویداد OrderCreated به صف RabbitMQ، پیاده‌سازی تضمینی Transactional Outbox جهت جلوگیری از عدم تطابق داده و پیام، کشینگ دو لایه با Redis و فعال‌سازی سراسری Virtual Threads جاوا ۲۱.",
      techs: ["RabbitMQ", "Transactional Outbox", "Redis", "Virtual Threads (Project Loom)", "k6 Benchmark"],
      link: "/lessons/publishing-ordercreated-events",
    },
    {
      phaseNumber: 6,
      weekRange: "هفته ۲۱ تا ۲۶",
      title: "معماری توزیع‌شده، مشاهده‌پذیری و استقرار نهایی",
      titleEn: "Distributed Architecture, Full Observability & Production",
      desc: "طراحی الگوی Saga جهت مدیریت تراکنش‌های چند سرویسی و جبران خطا، رهگیری درخواست‌ها (Distributed Tracing) با OpenTelemetry، متریک‌های پرومتئوس و گرافانا و پایپ‌لاین چندمرحله‌ای داکر.",
      techs: ["Saga Orchestration", "OpenTelemetry", "Prometheus", "Grafana", "Multi-stage Docker"],
      link: "/lessons/instrumenting-the-order-api",
    },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-4 pb-6 border-b border-border">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>CAPSTONE_PROJECT</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="text-muted-foreground font-sans">پروژه محوری ۲۶ هفته‌ای</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            سامانه مدیریت سفارشات و انبار سازمانی (Order & Inventory System)
          </h1>
          <p className="text-base text-muted-foreground leading-[1.85] max-w-3xl">
            در این آکادمی پروژه‌های کوچک جزیره‌ای وجود ندارد؛ بلکه در طول ۲۶ هفته یک سیستم واقعی، توزیع‌پذیر و با کارایی بالا بر اساس معماری Modular Monolith با قابلیت گذار به Event-Driven Microservices در مخزن لوکال خود می‌سازید.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => setActiveTab("architecture")}
            className={cn(
              "px-4 py-2 min-h-[42px] rounded-lg text-xs sm:text-sm font-medium transition-colors border cursor-pointer",
              activeTab === "architecture"
                ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
            type="button"
          >
            معماری و جریان داده‌ها
          </button>
          <button
            onClick={() => setActiveTab("phases")}
            className={cn(
              "px-4 py-2 min-h-[42px] rounded-lg text-xs sm:text-sm font-medium transition-colors border cursor-pointer",
              activeTab === "phases"
                ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
            type="button"
          >
            فازهای توسعه ۶ گانه
          </button>
          <button
            onClick={() => setActiveTab("docker-local")}
            className={cn(
              "px-4 py-2 min-h-[42px] rounded-lg text-xs sm:text-sm font-medium transition-colors border cursor-pointer",
              activeTab === "docker-local"
                ? "bg-primary text-primary-foreground border-primary font-bold shadow-xs"
                : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
            type="button"
          >
            داکر و زیرساخت لوکال
          </button>
        </div>
      </div>

      {/* Tab 1: Architecture */}
      {activeTab === "architecture" && (
        <div className="space-y-6">
          <div className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary shrink-0" />
                معماری سامانه: Modular Monolith رو به Event-Driven
              </h3>
              <p className="text-[15px] text-muted-foreground leading-[1.85]">
                برای جلوگیری از پیچیدگی نارس میکروسرویس‌ها، سیستم با مرزهای شفاف بیزینسی (Clean Boundaries) داخل یک پروژه ماژولار شکل می‌گیرد و سپس به کمک RabbitMQ، الگوی Transactional Outbox و پایگاه‌های داده توزیع‌شده بسط می‌یابد.
              </p>
            </div>

            {/* ASCII Architecture Diagram with explicit LTR and theme tokens */}
            <div
              dir="ltr"
              style={{
                direction: "ltr",
                textAlign: "left",
                backgroundColor: "var(--code-bg)",
                borderColor: "var(--code-border)",
                color: "var(--code-text)",
              }}
              className="p-4 sm:p-5 rounded-xl border font-mono text-[12px] sm:text-[13px] leading-6 ltr-dir overflow-x-auto shadow-inner"
            >
              <pre
                dir="ltr"
                style={{ direction: "ltr", textAlign: "left" }}
                className="overflow-visible whitespace-pre"
              >{`[ Client / React Frontend ]
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
            <div className="p-5 rounded-xl border border-border bg-card space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-secondary border border-border text-primary flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">پایگاه داده رابطه‌ای سازمانی</h4>
              <p className="text-sm text-muted-foreground leading-[1.85]">
                استفاده از PostgreSQL 16 به همراه مایگریشن‌های خودکار Flyway، تراکنش‌های ایزوله و قفل‌های Pessimistic جهت تضمین عدم موجودی منفی در انبار.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-card space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-secondary border border-border text-primary flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">پیام‌رسانی با اطمینان ۱۰۰٪</h4>
              <p className="text-sm text-muted-foreground leading-[1.85]">
                پیاده‌سازی RabbitMQ و الگوی حیاتی Transactional Outbox جهت جلوگیری از معضل 2PC و اطمینان از ارسال رویدادهای مالی پس از Commit قطعی دیتابیس.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-card space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-secondary border border-border text-primary flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">مقیاس‌پذیری با ترد مجازی</h4>
              <p className="text-sm text-muted-foreground leading-[1.85]">
                پیکربندی Virtual Threads در Java 21 برای مدیریت ده‌ها هزار درخواست همزمان I/O-bound بدون نیاز به پیچیدگی کدنویسی ری‌اکتیو (WebFlux).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Phases */}
      {activeTab === "phases" && (
        <div className="space-y-4">
          {phases.map((ph) => (
            <div
              key={ph.phaseNumber}
              className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-3.5 hover:border-border/80 transition-colors shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-secondary border border-border text-primary">
                    فاز {toPersianDigits(ph.phaseNumber)}
                  </span>
                  <Badge variant="neutral">
                    {ph.weekRange}
                  </Badge>
                </div>
                <Link
                  href={ph.link}
                  className="text-xs sm:text-sm text-primary hover:underline font-semibold flex items-center gap-1 group py-1"
                >
                  <span>ورود به درس شروع این فاز</span>
                  <ArrowRight className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-foreground flex flex-wrap items-baseline gap-2">
                  <span>{ph.title}</span>
                  <span
                    dir="ltr"
                    style={{ direction: "ltr", textAlign: "left" }}
                    className="text-xs text-muted-foreground font-mono ltr-dir"
                  >
                    [{ph.titleEn}]
                  </span>
                </h3>
                <p className="text-[15px] text-foreground/90 leading-[1.85]">
                  {ph.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {ph.techs.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    dir="ltr"
                    style={{ direction: "ltr", textAlign: "left" }}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-secondary border border-border text-muted-foreground ltr-dir"
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
        <div className="space-y-5">
          <div className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary shrink-0" />
                داکر کامپوز زیرساخت لوکال پروژه
              </h3>
              <p className="text-[15px] text-muted-foreground leading-[1.85]">
                این فایل <code dir="ltr" className="font-mono text-xs px-1.5 py-0.5 rounded bg-secondary border border-border text-foreground">compose.yaml</code> را در ریشه پروژه جاوا در کامپیوتر خود قرار دهید تا تمامی سرویس‌های مورد نیاز با یک فرمان اجرا شوند:
              </p>
            </div>

            <CodeBlock
              language="yaml"
              filename="compose.yaml"
              title="Local Infrastructure Compose"
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

            <div className="p-4 rounded-xl border border-border bg-secondary/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <span className="font-bold text-foreground block text-sm">دستور راه‌اندازی زیرساخت در ترمینال:</span>
                <code
                  dir="ltr"
                  style={{ direction: "ltr", textAlign: "left" }}
                  className="font-mono text-primary ltr-dir block text-xs sm:text-sm"
                >
                  docker compose -f compose.yaml up -d
                </code>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={copyCommand}
                className="text-xs h-10 px-3 shrink-0 self-start sm:self-center gap-1.5 cursor-pointer font-sans"
              >
                {copiedCmd ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCmd ? "کپی شد ✓" : "کپی دستور"}</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
