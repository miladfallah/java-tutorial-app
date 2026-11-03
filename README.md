# Java-first Backend Engineer Academy ☕🚀

> **پلتفرم جامع، خودکفا و خودمیزبان (Self-hosted) آموزش عمیق مهندسی ارشد جاوا و اسپرینگ‌بوت برای توسعه‌دهندگان ارشد Node.js و NestJS.**

---

## 🌟 نمای کلی پروژه (Project Overview)

این پروژه یک برنامه وب آموزشی با کیفیت پروداکشن، توسعه‌یافته با **Next.js 14 App Router** و **TypeScript** است که شامل **۱۵۶ درس کامل به زبان فارسی، ساختاریافته در ۲۶ هفته تخصصی** است.

این سامانه به صورت ۱۰۰٪ مستقل (بدون نیاز به دیتابیس یا سرور بک‌اند سفارشی) طراحی شده است؛ تمام محتوای آموزشی به صورت لوکال پکیج شده، پیشرفت کاربر به صورت دائمی در **IndexedDB** مرورگر ذخیره می‌شود و پس از نخستین راه‌اندازی، به صورت کاملاً **آفلاین** کار می‌کند.

---

## 🎯 مخاطب هدف (Target Student Profile)

- بیش از ۴ سال تجربه حرفه‌ای توسعه بک‌اند با **Node.js, TypeScript, NestJS**.
- تسلط بر PostgreSQL, Redis, RabbitMQ, Docker و طراحی میکروسرویس.
- نیازمند درک عمیق تمایزات معماری، تفاوت‌های ماشین مجازی جاوا (JVM) با موتور V8، و تسلط بر **Java 21 LTS** و **Spring Boot 3.3**.
- زمان‌بندی: **۳۰ دقیقه در روز**، از شنبه تا پنجشنبه (جمعه‌ها استراحت و مرور اختیاری).

---

## ⚡ دستورات راه‌اندازی سریع (Quick Start)

### روش اول: اجرای مستقیم با Docker Compose (توصیه شده)

بار اول (با اینترنت برای دریافت ایمیج پایه و وابستگی‌ها) در پوشه پروژه:

```bash
docker compose up --build -d
```

روی MacBook Air M1 این build را روی خود مک انجام دهید تا ایمیج مناسب ARM64 ساخته شود؛ نیازی به تنظیم اجباری `platform: linux/amd64` نیست.

دفعات بعد، بدون build یا دانلود و بدون نیاز برنامه به اینترنت:

```bash
docker compose up -d --no-build --pull never
```

اگر کانتینر قبلاً ساخته شده و فقط متوقف است، `docker compose start` هم کافی است.
Docker Desktop باید روشن و ایمیج محلی حفظ شده باشد. با حذف ایمیج یا تغییر سورس، build مجدد لازم است.
درس‌ها، جستجو، فونت‌ها و داده‌های پیشرفت محلی‌اند؛ بازکردن لینک منابع بیرونی و دانلود وابستگی‌های تمرین‌های Java همچنان اینترنت می‌خواهد.
آفلاین به معنی دسترسی به برنامه در `localhost:3000` با سرور Docker روشن است، نه اجرای سایت بدون سرور.

سپس مرورگر خود را باز کرده و به آدرس زیر بروید:

```text
http://localhost:3000
```

برای بررسی وضعیت سلامت کانتینر:
```bash
docker compose ps
```

برای توقف کانتینر:
```bash
docker compose down
```

---

### روش دوم: اجرای لوکال در محیط توسعه (Local Development)

پیش‌نیازها: Node.js 20+ و pnpm

```bash
# ۱. نصب وابستگی‌ها
pnpm install

# ۲. تایید خودکار سلامت و کمال محتوای ۱۵۶ درس
pnpm validate

# ۳. اجرای سرور توسعه
pnpm dev
```

سامانه روی پورت `http://localhost:3000` آماده به کار خواهد بود.

---

## 🏗️ ساختار نقشه راه ۲۶ هفته‌ای (Curriculum Structure)

| هفته | سرفصل تخصصی | دستاورد کلیدی |
| :---: | :--- | :--- |
| **۱** | مبانی هسته جاوا و ابزارها | JDK, JRE, JVM, Maven, Collections, مدل دامنه شی‌گرا |
| **۲** | پایه‌های پیشرفته جاوا | Generics, طراحی خطاها، اصول SOLID, Streams, SLF4J |
| **۳** | جاوای مدرن و کدنویسی تمیز | Records, Immutability, Optional, Date/Time API |
| **۴** | معماری JVM و همزمانی | Heap/Stack, الگوریتم‌های GC, ExecutorService, Race Conditions, Profiling |
| **۵** | اصول فونداسیون Spring | IoC Container, Bean Scopes, DIP, Spring Boot Auto-config |
| **۶** | طراحی REST API با اسپرینگ | Controllers, DTOs, Bean Validation, RFC 7807, OpenAPI 3 |
| **۷** | معماری سرویس در اسپرینگ | Service Layer, Repository Pattern, Hexagonal Architecture, Actuator |
| **۸** | اصول پروداکشن در اسپرینگ | Filters, MDC, Spring AOP, HTTP Idempotency, Dockerizing |
| **۹** | مبانی پیشرفته JPA | EntityManager, Spring Data JPA, OneToMany, PostgreSQL Docker |
| **۱۰** | هایبرنیت و مهندسی کوئری‌ها | Persistence Context, رفع خطای N+1 با EntityGraph, EXPLAIN ANALYZE |
| **۱۱** | مدیریت تراکنش‌ها و همروندی | ACID, @Transactional Propagation, Optimistic/Pessimistic Locking, Flyway |
| **۱۲** | مهندسی پیشرفته پایگاه داده | HikariCP Connection Pool, JDBC Batching, Upsert, Backups |
| **۱۳** | امنیت حرفه‌ای با Spring Security | SecurityFilterChain, JWT Stateless Auth, RBAC, @PreAuthorize |
| **۱۴** | مبانی تست‌نویسی خودکار | JUnit 5, AssertJ, Mockito, Test Pyramid, WebMvcTest, JaCoCo |
| **۱۵** | تست‌های یکپارچگی پیشرفته | Testcontainers with PostgreSQL, Contract Testing, CI Pipeline |
| **۱۶** | تاب‌آوری و پایداری در مقیاس | Timeouts, Retries, Circuit Breaker (Resilience4j), OWASP API, Bucket4j |
| **۱۷** | پیام‌رسانی ناهمگام با RabbitMQ | Exchanges, Queues, AMQP, Acknowledgments, Dead Letter Queues |
| **۱۸** | معماری مبتنی بر رویداد (EDA) | Transactional Outbox Pattern, Idempotent Consumers, Debezium |
| **۱۹** | کشینگ پیشرفته با Redis | Spring Cache, Cache-aside, جلوگیری از Cache Stampede, Redisson |
| **۲۰** | همروندی مدرن و Virtual Threads | CompletableFuture, Java 21 Virtual Threads (Project Loom), Load Testing k6 |
| **۲۱** | سیستم‌های توزیع‌شده | CAP Theorem, Saga Pattern (Orchestration/Choreography), Distributed Locks |
| **۲۲** | طراحی سیستم‌های مقیاس‌پذیر | High-level System Design, Load Balancing, Read-Replicas, Sharding, ADR |
| **۲۳** | مشاهده‌پذیری و مانیتورینگ | Structured JSON Logs, Micrometer Metrics, OpenTelemetry Traces, Prometheus, Grafana |
| **۲۴** | دواپس، داکر و پایپ‌لاین‌ها | Multi-stage Docker, Compose Networks, GitHub Actions, Kubernetes Probes |
| **۲۵** | آمادگی پروداکشن و تیونینگ | Graceful Shutdown, JVM G1 Tuning, Chaos Engineering, Runbooks, Checklist |
| **۲۶** | مرور نهایی و مصاحبه‌های فنی | شبیه‌سازی مصاحبه فنی ارشد هسته جاوا، اسپرینگ، دیتابیس و تکمیل پروژه تجمیعی |

---

## 📦 ویژگی‌های فنی پلتفرم

1. **طراحی واکنش‌گرا و مدرن:** پشتیبانی کامل از دارک‌مود (پیش‌فرض) و لایت‌مود، فونت فارسی زیبای وزیرمتن، و بلوک‌های کد LTR با قابلیت کپی.
2. **سیستم آزمونک (Quiz Engine):** حداقل ۳ سوال مفهومی به ازای هر درس (مجموعاً ۴۶۸ سوال) با بازخورد آنی و توضیحات تفصیلی.
3. **کارگاه‌های عملی و تمرین:** ۱۵۶ تمرین کارگاهی با معیارهای پذیرش (Acceptance Criteria)، راهنمایی‌ها و کد مرجع.
4. **تطبیق فنی مستقیم با NestJS:** بخش ویژه در هر درس برای مقایسه معماری، دکوراتورها و الگوها با دنیای نودجی‌اس.
5. **ذخیره‌سازی پیشرفت در IndexedDB:** ثبت دقیق درس‌های تکمیل‌شده، یادداشت‌های متنی شخصی، بوکمارک‌ها، کوییزها و زنجیره استریک (Streak).
6. **پشتیبان‌گیری و بازیابی (JSON Backup/Restore):** امکان خروجی گرفتن و بازیابی کل سوابق یادگیری با اعتبارسنجی خودکار.
7. **پروژه محوری پیوسته (Capstone Project):** سیستم مدیریت سفارشات و انبار (Order & Inventory System).

---

## 🧪 تست و تضمین کیفیت (Quality Assurance)

برای اعتبارسنجی کامل محتوا، اسکریپت تست خودکار اختصاصی در پروژه تعبیه شده است:

```bash
pnpm run validate
```

این اسکریپت موارد زیر را به طور خودکار بررسی می‌کند:
- حضور قطعی ۱۵۶ درس مجزا و ۲۶ هفته بدون هیچ جای خالی یا Placeholder.
- یکتایی شناسه‌ها و اسلاگ‌های تمام دروس.
- کامل بودن محتوای فارسی، مقایسه با NestJS، کدهای نمونه، تمرین، راه‌حل، و آزمونک‌ها.
- صحت شاخص پاسخ‌های صحیح در تمام ۴۶۸ سوال کوییز.

برای تست بیلد پروداکشن:
```bash
pnpm run build
```

---

## 📜 مراجع رسمی مورد استناد
- [Oracle Java Documentation & dev.java](https://dev.java/)
- [Spring Boot Official Reference Docs](https://docs.spring.io/spring-boot/)
- [Hibernate ORM Documentation](https://hibernate.org/orm/documentation/)
- [PostgreSQL Official Manual](https://www.postgresql.org/docs/)
- [RabbitMQ Documentation](https://www.rabbitmq.com/docs)
- [OpenTelemetry Docs](https://opentelemetry.io/docs/)
