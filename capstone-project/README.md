# 📦 پروژه محوری: سرویس مدیریت سفارشات و موجودی انبار (Order & Inventory)
### Java-first Backend Engineer Academy — Runnable Capstone Project

این پروژه یک وب‌سرویس سازمانی واقعی، تست‌شده، قابل اجرا و کاملاً منطبق بر استانداردهای مهندسی مدرن است که بر پایه **Java 25 LTS** و **Spring Boot 3.4** پیاده‌سازی شده است.

---

## 🏗️ معماری و قابلیت‌های مهندسی

۱. **کنترل همزمانی و پیشگیری از بیش‌فروشی (Overselling Prevention):**
   - استفاده از قفل ردیفی در سطح دیتابیس PostgreSQL با عبارت `SELECT ... FOR UPDATE` از طریق انوتیشن `@Lock(LockModeType.PESSIMISTIC_WRITE)`.
   - مرتب‌سازی اقلام سفارش بر اساس `productId` جهت پیشگیری قطعی از پدیده Deadlock در تراکنش‌های همزمان.
   - تضمین عدم ثبت حتی یک سفارش بیش از موجودی فیزیکی انبار در سناریوهای ترافیک بسیار سنگین (High Concurrency).

۲. **کلید یکتایی و عملیات چندباره (Idempotency Key):**
   - دریافت هدر `Idempotency-Key` در اندپوینت ثبت سفارش.
   - کشف و بازگرداندن پاسخ قبلی در صورت ارسال درخواست‌های تکراری شبکه یا Retry کلاینت، بدون ایجاد سفارش مضاعف یا کسر دوباره موجودی.

۳. **الگوی Transactional Outbox:**
   - ثبت رویداد `OrderCreated` در جدول `outbox_events` درون همان تراکنش پایگاه‌داده جهت انتشار مطمئن به صف پیام (RabbitMQ/Kafka) بدون ریسک Dual-write.

۴. **پاسخ خطای استاندارد RFC 9457 (Problem Details):**
   - استاندارد جدید IETF برای نمایش خطاهای ماشین‌خوان با فیلدهای `type`, `title`, `status`, `detail`, `invalidFields`.

---

## 🚀 پیش‌نیازها و راه‌اندازی سریع

### پیش‌نیازها:
- **Java 25 LTS** یا بالاتر
- **Docker & Docker Compose** (اختیاری جهت اجرای PostgreSQL و Prometheus لوکال)

### ۱. اجرای کانتینرهای زیرساخت (PostgreSQL & Redis):
```bash
docker compose -f compose.yaml up -d
```

### ۲. اجرای تست‌های خودکار و آزمون همزمانی:
پروژه مجهز به پروفایل تست سبک H2 است و بدون نیاز به نصب داکر نیز آزمون‌های واحد و آزمون همزمانی ۲۰ نخی را اجرا می‌کند:
```bash
# ویندوز
./mvnw.cmd test

# لینوکس و مک
./mvnw test
```

### ۳. اجرای سرویس:
```bash
# ویندوز
./mvnw.cmd spring-boot:run

# لینوکس و مک
./mvnw spring-boot:run
```

---

## 📡 نمونه درخواست‌های API (cURL)

### ۱. ثبت سفارش جدید با رعایت Idempotency:
```bash
curl -X POST http://localhost:8080/api/v1/orders \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: req-order-2026-001" \
  -d '{
    "customerId": "c1111111-1111-1111-1111-111111111111",
    "items": [
      {
        "productId": "b0000000-0000-0000-0000-000000000001",
        "quantity": 1
      }
    ]
  }'
```

### ۲. استعلام جزئیات سفارش (حل مسئله N+1 با EntityGraph):
```bash
curl -X GET http://localhost:8080/api/v1/orders/{orderId}
```

### ۳. بررسی سلامت سرویس (Kubernetes Liveness & Readiness):
```bash
curl -X GET http://localhost:8080/actuator/health
```

---

## 📂 ساختار ماژولار سورس‌کد
```
capstone-project/
├── compose.yaml                      # کانتینر پایگاه‌داده PostgreSQL 17 و ابزارهای مانیتورینگ
├── pom.xml                           # بیلد فایل مِیون بر پایه Java 25 LTS و Spring Boot 3.4
├── src/
│   ├── main/
│   │   ├── java/com/academy/order/
│   │   │   ├── OrderApplication.java # نقطه ورود سرویس
│   │   │   ├── domain/               # موجودیت‌های دامنه (Order, OrderItem, InventoryItem, Outbox)
│   │   │   ├── repository/           # ریپازیتوری‌های دیتابیس با Pessimistic Lock و EntityGraph
│   │   │   ├── service/              # منطق تجاری تراکنشی، کنترل موجودی و Idempotency
│   │   │   ├── web/                  # کنترلرهای REST و مدیریت استاندارد استثناها (RFC 9457)
│   │   │   └── config/               # پیکربندی امنیتی Stateless با Spring Security
│   │   └── resources/
│   │       ├── application.yml       # تنظیمات پروداکشن، لاگ‌ها و Actuator
│   │       └── db/migration/         # اسکریپت‌های Flyway Migration (V1__init, V2__seed)
│   └── test/
│       ├── java/com/academy/order/   # آزمون همزمانی چند نخی و تست کنترلر
│       └── resources/application-test.yml
```
