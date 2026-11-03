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
  Copy,
  FolderGit2,
  Play,
  ShieldCheck,
  CheckCircle2,
  FileCode
} from "lucide-react";
import { CodeBlock } from "@/components/lesson/CodeBlock";
import { toPersianDigits, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function CapstonePage() {
  const [activeTab, setActiveTab] = useState<"architecture" | "phases" | "runnable-code" | "docker-local">("architecture");
  const [copiedCmd, setCopiedCmd] = useState(false);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const phases = [
    {
      phaseNumber: 1,
      weekRange: "هفته ۱ تا ۴",
      title: "فونداسیون دامنه و همزمانی خالص در جاوا ۲۵ LTS",
      titleEn: "Domain Foundation & Pure Concurrency in Java 25 LTS",
      desc: "طراحی اشیای دامنه Order و Product با انکپسولیشن قوی، Value Objectها، رکوردها، ایمنی حافظه در مدل JMM و بسته‌بندی استاندارد با Maven Wrapper.",
      techs: ["Java 25 LTS", "Maven Wrapper", "Java Records", "JMM & Happens-Before", "JUnit 5"],
      link: "/lessons/order-product-domain-models",
    },
    {
      phaseNumber: 2,
      weekRange: "هفته ۵ تا ۸",
      title: "وب سرویس استاندارد سازمانی با Spring Boot 3.4",
      titleEn: "Production RESTful Service with Spring Boot 3.4",
      desc: "تبدیل ماژول به وب‌سرویس RESTful، اعتبارسنجی Jakarta Validation، مدیریت خطای استاندارد RFC 9457 (Problem Details)، و پیاده‌سازی Idempotency Key جهت ایمنی شبکه.",
      techs: ["Spring Boot 3.4", "Spring MVC", "RFC 9457 Problem Details", "Jakarta Validation", "Idempotency"],
      link: "/lessons/building-the-order-rest-api",
    },
    {
      phaseNumber: 3,
      weekRange: "هفته ۹ تا ۱۲",
      title: "پایداری داده با PostgreSQL 17، هایبرنیت و قفل همزمانی",
      titleEn: "Data Persistence with PostgreSQL 17, Hibernate & Concurrency Control",
      desc: "طراحی جداول سفارشات، پیشگیری از N+1 با EntityGraph، کنترل همروندی رزرو انبار با Pessimistic Lock (SELECT FOR UPDATE) و مایگریشن با Flyway.",
      techs: ["PostgreSQL 17", "Spring Data JPA", "Pessimistic Locking", "Flyway Migration", "HikariCP"],
      link: "/lessons/implementing-order-and-orderitem-entities",
    },
    {
      phaseNumber: 4,
      weekRange: "هفته ۱۳ تا ۱۶",
      title: "امنیت Stateless، تست‌های همزمانی و تاب‌آوری",
      titleEn: "Stateless Security, Concurrency Tests & Resilience",
      desc: "امن‌سازی با Spring Security، تست‌های چندنخی بررسی عدم Overselling در همزمانی بالا، و تست‌های یکپارچه با Testcontainers.",
      techs: ["Spring Security 6", "Testcontainers", "Concurrency Testing", "Resilience4j", "AssertJ"],
      link: "/lessons/securing-the-order-api",
    },
    {
      phaseNumber: 5,
      weekRange: "هفته ۱۷ تا ۲۰",
      title: "پیام‌رسانی با Transactional Outbox و ترد مجازی جاوا ۲۵",
      titleEn: "Transactional Outbox Messaging & Java 25 Virtual Threads",
      desc: "ثبت رویداد OrderCreated در جدول Outbox درون همان تراکنش پایگاه‌داده جهت انتشار مطمئن به صف پیام، و فعال‌سازی Virtual Threads بدون پیچیدگی کدنویسی ری‌اکتیو.",
      techs: ["Transactional Outbox", "RabbitMQ", "Redis Cache", "Java 25 Virtual Threads"],
      link: "/lessons/publishing-ordercreated-events",
    },
    {
      phaseNumber: 6,
      weekRange: "هفته ۲۱ تا ۲۶",
      title: "معماری ماژولار، مشاهده‌پذیری و استقرار پروداکشن",
      titleEn: "Modular Architecture, Observability & Production Deployment",
      desc: "طراحی معماری Modular Monolith، متریک‌های Prometheus و Actuator، لاگ‌های ساختاریافته و بیلد چندمرحله‌ای داکر.",
      techs: ["Modular Monolith", "Spring Actuator", "Prometheus Metrics", "Multi-stage Docker"],
      link: "/lessons/instrumenting-the-order-api",
    },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="space-y-4 pb-6 border-b border-border">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>پروژه عملی و قابل اجرای دوره</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="text-muted-foreground font-mono">capstone-project/</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            پروژه محوری: وب‌سرویس مدیریت سفارشات و انبار (Order & Inventory)
          </h1>
          <p className="text-base text-muted-foreground max-w-3xl leading-[1.85]">
            یک پروژه واقعی، تست‌شده و کاملاً قابل اجرا با Maven Wrapper، پایگاه‌داده PostgreSQL، آزمون‌های همزمانی، کلید یکتایی و مایگریشن‌های Flyway.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 pt-2 border-b border-border/80 overflow-x-auto">
          <button
            onClick={() => setActiveTab("architecture")}
            className={cn(
              "px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer",
              activeTab === "architecture"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
            type="button"
          >
            معماری و دیاگرام مهندسی
          </button>

          <button
            onClick={() => setActiveTab("runnable-code")}
            className={cn(
              "px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer",
              activeTab === "runnable-code"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
            type="button"
          >
            سورس‌کد و اجرای لوکال
          </button>

          <button
            onClick={() => setActiveTab("phases")}
            className={cn(
              "px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer",
              activeTab === "phases"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
            type="button"
          >
            فازهای تدریجی پروژه
          </button>

          <button
            onClick={() => setActiveTab("docker-local")}
            className={cn(
              "px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer",
              activeTab === "docker-local"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
            type="button"
          >
            داکر کامپوز زیرساخت
          </button>
        </div>
      </div>

      {/* Tab 1: Architecture */}
      {activeTab === "architecture" && (
        <div className="space-y-6">
          <div className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-foreground">
              دیاگرام معماری سیستم و پایپ‌لاین ثبت سفارش
            </h3>
            <p className="text-[15px] text-muted-foreground leading-[1.85]">
              جریان ثبت سفارش تضمین می‌کند که کسر موجودی انبار به صورت همگام با قفل ردیفی پایگاه‌داده (Pessimistic Lock) انجام شود و رویدادهای خروجی با الگوی Transactional Outbox در همان تراکنش ذخیره شوند:
            </p>

            <div
              dir="ltr"
              style={{ direction: "ltr", textAlign: "left" }}
              className="p-4 rounded-xl bg-background border border-border font-mono text-xs sm:text-[13px] text-foreground/90 overflow-x-auto leading-relaxed shadow-inner ltr-dir"
            >
              <pre>{`[ Client Request ] (HTTP POST /api/v1/orders + Idempotency-Key)
        │
        ▼
[ Security Filter Chain ] (Stateless JWT / Public endpoints validation)
        │
        ▼
[ OrderController ] (Jakarta Bean Validation @Valid)
        │
        ▼
[ OrderService (@Transactional) ]
  ├── 1. Idempotency Check ──► [ Idempotency Table ] (Fast return on duplicate key)
  │
  ├── 2. SELECT ... FOR UPDATE ──► [ PostgreSQL Inventory Row ] (Hardware-level Lock)
  │      └── Deduct availableQuantity, Increment reservedQuantity
  │
  ├── 3. INSERT INTO orders & order_items ──► [ PostgreSQL ]
  │
  └── 4. INSERT INTO outbox_events ──► [ PostgreSQL ] (Transactional Outbox Pattern)
        │
        ▼
[ Transaction Commit ]
        │
        ├──► 201 Created (RFC 9457 ProblemDetail on failure)
        │
        ▼
[ Async Outbox Publisher ] ──► [ RabbitMQ / Kafka ] ──► [ Notification & Billing ]`}</pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-border bg-card space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-secondary border border-border text-primary flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">قفل ردیفی پایگاه‌داده (Pessimistic Lock)</h4>
              <p className="text-sm text-muted-foreground leading-[1.85]">
                استفاده از <code dir="ltr">SELECT ... FOR UPDATE</code> در PostgreSQL به همراه مرتب‌سازی شناسه‌ها مانع از خطای کشنده بیش‌فروشی (Overselling) و بن‌بست (Deadlock) در پردازش‌های چند سروری می‌شود.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-card space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-secondary border border-border text-primary flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">کلید یکتایی (Idempotency Key)</h4>
              <p className="text-sm text-muted-foreground leading-[1.85]">
                محافظت کامل در برابر درخواست‌های تکراری شبکه (Network Retries)؛ ارسال مکرر یک سفارش هیچ‌گاه موجودی انبار را مجدداً کسر نمی‌کند.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-card space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-secondary border border-border text-primary flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">خطای استاندارد RFC 9457</h4>
              <p className="text-sm text-muted-foreground leading-[1.85]">
                پاسخ‌های خطای دقیق و ساخت‌یافته Problem Details در سراسر سرویس به جای خروجی‌های غیراستاندارد متن یا استک تریس خام.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Runnable Source Code & Execution */}
      {activeTab === "runnable-code" && (
        <div className="space-y-6">
          {/* Quick Start Run Banner */}
          <div className="p-5 sm:p-6 rounded-xl border border-primary/25 bg-primary-muted space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-base">
              <Play className="w-4 h-4 fill-primary" />
              <span>اجرای فوری آزمون‌های خودکار و تست همزمانی ۲۰ نخی در ترمینال</span>
            </div>
            <p className="text-sm sm:text-[15px] text-foreground/90 leading-[1.85]">
              سورس پروژه در پوشه <code dir="ltr" className="font-mono text-xs px-1.5 py-0.5 rounded bg-background border border-border text-primary">capstone-project/</code> قرار دارد و مجهز به پایگاه‌داده تست سبک و مستقل H2 است. برای اجرای تست‌ها نیازی به نصب داکر یا تنظیمات دیتابیس ندارید:
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-lg bg-background border border-border">
              <code dir="ltr" className="font-mono text-xs sm:text-sm text-primary">
                cd capstone-project && ./mvnw.cmd test
              </code>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyCommand("cd capstone-project && ./mvnw.cmd test")}
                className="text-xs h-9 px-3 shrink-0 gap-1.5 cursor-pointer font-sans"
              >
                {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCmd ? "کپی شد ✓" : "کپی دستور"}</span>
              </Button>
            </div>
          </div>

          {/* Key Source Code Showcase */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                <FileCode className="w-4 h-4 text-primary" />
                <span>۱. ریپازیتوری انبار با قفل ردیفی دیتابیس (Pessimistic Lock)</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                این انوتیشن در زمان اجرای تراکنش روی PostgreSQL فرمان <code dir="ltr">SELECT ... FOR UPDATE</code> را صادر می‌کند و ردیف کالا را تا لحظه پایان تراکنش قفل نگه می‌دارد:
              </p>
              <CodeBlock
                language="java"
                filename="capstone-project/src/main/java/com/academy/order/repository/InventoryRepository.java"
                code={`package com.academy.order.repository;

import com.academy.order.domain.InventoryItem;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface InventoryRepository extends JpaRepository<InventoryItem, UUID> {

    /**
     * Executes SELECT ... FOR UPDATE on PostgreSQL to acquire an exclusive row-level lock.
     * Prevents race conditions and overselling across multiple instances and concurrent threads.
     */
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT i FROM InventoryItem i WHERE i.productId = :productId")
    Optional<InventoryItem> findByProductIdForUpdate(@Param("productId") UUID productId);
}`}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                <FileCode className="w-4 h-4 text-primary" />
                <span>۲. آزمون چندنخی سنجش همزمانی (Concurrency Test)</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                این تست واحد، ۲۰ درخواست موازی همزمان را برای خرید کالایی که فقط ۱۰ عدد موجودی دارد ارسال می‌کند و اثبات می‌کند که دقیقاً ۱۰ سفارش موفق و ۱۰ سفارش ناموفق شده و موجودی نهایی دقیقاً ۰ است:
              </p>
              <CodeBlock
                language="java"
                filename="capstone-project/src/test/java/com/academy/order/OrderServiceConcurrencyTest.java"
                code={`@Test
@DisplayName("آزمون همزمانی: ۲۰ درخواست همزمان برای کالایی با ۱۰ موجودی باید دقیقاً به ۱۰ موفقیت و ۱۰ شکست منجر شود")
void testConcurrentOrderPlacementNoOverselling() throws InterruptedException {
    int numberOfThreads = 20;
    ExecutorService executorService = Executors.newFixedThreadPool(numberOfThreads);
    CountDownLatch latch = new CountDownLatch(numberOfThreads);

    AtomicInteger successfulOrders = new AtomicInteger(0);
    AtomicInteger failedOrders = new AtomicInteger(0);

    for (int i = 0; i < numberOfThreads; i++) {
        final int index = i;
        executorService.submit(() -> {
            try {
                CreateOrderRequest request = new CreateOrderRequest(
                    UUID.randomUUID(),
                    List.of(new OrderItemRequest(productId, 1))
                );
                orderService.createOrder(request, "concurrent-key-" + index);
                successfulOrders.incrementAndGet();
            } catch (InsufficientStockException ex) {
                failedOrders.incrementAndGet();
            } finally {
                latch.countDown();
            }
        });
    }

    latch.await();
    executorService.shutdown();

    // Verify exactly 10 orders succeeded and 0 overselling occurred
    assertEquals(10, successfulOrders.get());
    assertEquals(10, failedOrders.get());

    InventoryItem updatedInventory = inventoryRepository.findByProductId(productId).orElseThrow();
    assertEquals(0, updatedInventory.getAvailableQuantity());
}`}
              />
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Phases */}
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

      {/* Tab 4: Docker Local Setup */}
      {activeTab === "docker-local" && (
        <div className="space-y-5">
          <div className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary shrink-0" />
                داکر کامپوز زیرساخت لوکال پروژه (PostgreSQL 17 & Redis)
              </h3>
              <p className="text-[15px] text-muted-foreground leading-[1.85]">
                فایل <code dir="ltr" className="font-mono text-xs px-1.5 py-0.5 rounded bg-secondary border border-border text-foreground">capstone-project/compose.yaml</code> را در کامپیوتر خود با دستور زیر اجرا کنید:
              </p>
            </div>

            <CodeBlock
              language="yaml"
              filename="capstone-project/compose.yaml"
              title="PostgreSQL 17 & Prometheus Compose"
              code={`services:
  postgres:
    image: postgres:17-alpine
    container_name: academy_postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: order_inventory_db
      POSTGRES_USER: academy_user
      POSTGRES_PASSWORD: academy_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U academy_user -d order_inventory_db"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: academy_redis
    ports:
      - "6379:6379"

  prometheus:
    image: prom/prometheus:v2.54.1
    container_name: academy_prometheus
    ports:
      - "9090:9090"

volumes:
  postgres_data:`}
            />

            <div className="p-4 rounded-xl border border-border bg-secondary/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <span className="font-bold text-foreground block text-sm">دستور راه‌اندازی زیرساخت:</span>
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
                onClick={() => copyCommand("docker compose -f compose.yaml up -d")}
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
