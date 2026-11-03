# Java-first Backend Engineer Academy ☕🚀

> **پلتفرم جامع، خودکفا و خودمیزبان (Self-hosted) آموزش عمیق مهندسی ارشد جاوا و اسپرینگ‌بوت برای توسعه‌دهندگان ارشد Node.js و NestJS.**

---

## 🌟 نمای کلی پروژه (Project Overview)

این پروژه یک برنامه وب آموزشی محلی، توسعه‌یافته با **Next.js 16 App Router** و **TypeScript** است که شامل **۱۵۶ درس به زبان فارسی با مسیر تمرین و سنجش، ساختاریافته در ۲۶ هفته تخصصی** است.

این سامانه به صورت ۱۰۰٪ مستقل (بدون نیاز به دیتابیس یا سرور بک‌اند سفارشی) طراحی شده است؛ تمام محتوای آموزشی به صورت لوکال پکیج شده، پیشرفت کاربر به صورت دائمی در **IndexedDB** مرورگر ذخیره می‌شود و پس از نخستین راه‌اندازی، به صورت کاملاً **آفلاین** کار می‌کند.

---

## 🎯 مخاطب هدف (Target Student Profile)

- تجربه میدلول رو به بالا در توسعه بک‌اند با **Node.js, TypeScript, NestJS**.
- تسلط بر PostgreSQL, Redis, RabbitMQ, Docker و طراحی میکروسرویس.
- نیازمند درک عمیق تمایزات معماری، تفاوت‌های ماشین مجازی جاوا (JVM) با موتور V8، و تسلط بر **Java 25 LTS** و **Spring Boot 3.5**.
- زمان‌بندی پیشنهادی: **۲۵ دقیقه همراه تمرین** برای جلسه‌های متمرکز؛ شش جلسهٔ اول حدود ۳۰ دقیقه‌اند. سرعت پیشروی را با زمان واقعی تمرین تنظیم کنید.

---

## ⚡ دستورات راه‌اندازی سریع (Quick Start)

### روش اول: اجرای مستقیم با Docker Compose (توصیه شده)

#### ۱. اجرای بار اول — با اینترنت

Docker Desktop را نصب و اجرا کنید. ترمینال را در ریشهٔ همین پروژه، کنار فایل `compose.yaml`، باز کنید. سپس ایمیج را بسازید و برنامه را اجرا کنید:

```bash
docker compose build
docker compose up -d --no-build --pull never
```

روی MacBook Air M1 این build را روی خود مک انجام دهید تا ایمیج مناسب ARM64 ساخته شود؛ نیازی به تنظیم اجباری `platform: linux/amd64` نیست.

#### ۲. اجرای دفعات بعد — بدون build و بدون اینترنت

Docker Desktop باید روشن و ایمیج ساخته‌شده روی همان دستگاه موجود باشد. فقط اجرا کنید:

```bash
docker compose up -d --no-build --pull never
```

اگر قبلاً با `docker compose stop` متوقف کرده‌اید، `docker compose start` هم کافی است. پس از `docker compose down` از دستور `up` بالا استفاده کنید.

#### ۳. پس از تغییر کد یا دریافت نسخهٔ جدید با Git

برای اعمال تغییرات سورس، یک بار ایمیج را دوباره بسازید؛ اجرای ساده به‌تنهایی کد جدید را وارد ایمیج قبلی نمی‌کند:

```bash
docker compose build
docker compose up -d --no-build --pull never
```

با حذف ایمیج محلی نیز build مجدد لازم می‌شود. دریافت وابستگی‌ها یا ایمیج پایهٔ جدید ممکن است اینترنت بخواهد.

#### ۴. آدرس برنامه و حدود اجرای آفلاین

درس‌ها، جستجو، فونت‌ها و داده‌های پیشرفت محلی‌اند؛ بازکردن لینک منابع بیرونی و دانلود وابستگی‌های تمرین‌های Java همچنان اینترنت می‌خواهد.
آفلاین به معنی دسترسی به برنامه در `localhost:3000` با سرور Docker روشن است، نه اجرای سایت بدون سرور.

سپس مرورگر خود را باز کرده و به آدرس زیر بروید:

```text
http://localhost:3000
```

برای شروع مطالعه، [راهنمای شروع](http://localhost:3000/getting-started) را باز کنید. پیشرفت در مرورگر همان دستگاه ذخیره می‌شود؛ برای انتقال به مک یا مرورگر دیگر، از بخش مرور فایل پشتیبان بگیرید.

#### ۵. بررسی وضعیت و توقف

برای بررسی وضعیت سلامت کانتینر:
```bash
docker compose ps
```

برای مشاهدهٔ لاگ‌ها:

```bash
docker compose logs --tail=100 academy-web
```

برای توقف و نگه‌داشتن کانتینر جهت اجرای سریع بعدی:

```bash
docker compose stop
```

برای توقف و حذف کانتینر (ایمیج محلی حفظ می‌شود):
```bash
docker compose down
```

---

### روش دوم: اجرای لوکال در محیط توسعه (Local Development)

پیش‌نیازها: Node.js 24+ و pnpm

```bash
# ۱. نصب وابستگی‌ها
pnpm install

# ۲. بررسی ساختار محتوا و قواعد جلوگیری از بازگشت محتوای قالبی
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
| **۶** | طراحی REST API با اسپرینگ | Controllers, DTOs, Bean Validation, RFC 9457, OpenAPI 3 |
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

1. **طراحی واکنش‌گرا:** تم تیره، روشن و هماهنگ با سیستم، فونت محلی استعداد، تنظیم اندازه و فاصله خطوط و بلوک‌های کد LTR با قابلیت کپی.
2. **سیستم آزمونک (Quiz Engine):** ۱۶۸ سؤال با توضیح پاسخ؛ شش درس نخست هرکدام سه سؤال و درس‌های متمرکز هرکدام یک سؤال مرتبط دارند.
3. **کارگاه‌های عملی و تمرین:** ۱۵۶ تمرین کارگاهی با معیارهای پذیرش (Acceptance Criteria)، راهنمایی‌ها و کد مرجع.
4. **تطبیق فنی مستقیم با NestJS:** بخش ویژه در هر درس برای مقایسه معماری، دکوراتورها و الگوها با دنیای نودجی‌اس.
5. **ذخیره‌سازی پیشرفت در IndexedDB:** ثبت دقیق درس‌های تکمیل‌شده، یادداشت‌های متنی شخصی، بوکمارک‌ها، کوییزها و زنجیره استریک (Streak).
6. **پشتیبان‌گیری و بازیابی (JSON Backup/Restore):** امکان خروجی گرفتن و بازیابی کل سوابق یادگیری با اعتبارسنجی خودکار.
7. **پروژه محوری پیوسته (Capstone Project):** سیستم مدیریت سفارشات و انبار (Order & Inventory System).

کدهای درس‌ها عمدتاً قطعه‌های آموزشی‌اند. سه آزمایش مستقل Java 25 در `public/practice/` و نمونهٔ Spring قابل اجرا در `capstone-project/` قرار دارند. برای اجرا و حدود نمونهٔ Spring، [راهنمای پروژهٔ همراه](capstone-project/README.md) را بخوانید.

---

## 🧪 تست و تضمین کیفیت (Quality Assurance)

برای بررسی ساختار محتوا و جلوگیری از بازگشت الگوهای قالبی:

```bash
pnpm run validate
```

این اسکریپت موارد زیر را به طور خودکار بررسی می‌کند:
- تطابق مسیرها و زمان جلسات با نقشهٔ راه و یکتایی شناسه‌ها و اسلاگ‌ها.
- وجود بخش‌های لازم و جلوگیری از بازگشت کد قالبی و ادعای بنچمارک بدون شاهد.
- معتبر بودن گزینه‌ها و شاخص پاسخ و نبود کد نمونهٔ تکراری در درس‌های بازنویسی‌شده.
- بررسی بازیابی و پالایش فایل پیشرفت.

این بررسی‌ها تأیید علمی کامل درس‌ها یا اثبات کامپایل تمام قطعه‌کدها نیستند. گزارش اجراهای انجام‌شده در [یادداشت انتشار](RELEASE-NOTES.md) ثبت شده است.

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
