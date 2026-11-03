# پروژهٔ آزمایشگاهی سفارش و موجودی

مبنای قابل اجرای این نمونه **JDK 25 و Spring Boot 3.5.16** است. Boot 3.5 با JDK 25 سازگار است؛ جدیدترین major نیست. نمونه برای تمرین محلی است، نه انتشار عمومی بدون تکمیل امنیت و ارزیابی مستقل.

## اجرای تست

با JDK 25:

```bash
# macOS / Linux (حتی اگر executable bit فایل حفظ نشده باشد)
sh ./mvnw test

# Windows PowerShell
.\mvnw.cmd test
```

اولین اجرا Maven و وابستگی‌ها را دانلود می‌کند. تست‌های فعلی شامل بارگذاری context، validation درخواست و رقابت ۲۰ task روی ۱۰ موجودی‌اند و با **H2** اجرا می‌شوند؛ موفقیت آن‌ها اثبات lock، migration و isolation واقعی PostgreSQL نیست.

## اجرای محلی با PostgreSQL

```bash
docker compose up -d postgres
sh ./mvnw spring-boot:run
```

در ویندوز فرمان دوم `./mvnw.cmd spring-boot:run` است. تنظیمات پیش‌فرض آزمایشگاهی دیتابیس در `src/main/resources/application.yml` و seed محصول‌ها در migrationها هستند. پورت سرویس 8080 است؛ برای تغییر credential از متغیرهای محیطی datasource استفاده کن.

## آنچه واقعاً پیاده شده

- مدل سفارش/اقلام/موجودی و DTOها.
- Bean Validation، Problem Details و API ثبت/خواندن سفارش.
- رزرو موجودی با قفل ردیفی JPA در یک تراکنش.
- ذخیره رکورد OrderCreated در جدول outbox همراه با سفارش.
- replay سادهٔ کلید idempotency موجود در مسیر درخواست متوالی.

## تمرین‌های تکمیلی و حدود فعلی

- مسیر سفارش برای آزمایش باز است؛ JWT/OIDC، کنترل مالکیت و مجوزهای واقعی تکمیل نشده‌اند.
- کلید idempotency هنوز scope مشتری، fingerprint و مدیریت کامل رقابت درخواست همزمان را ندارد. SELECT پیش از INSERT کافی نیست؛ درس‌های ۴۵، ۴۶ و ۱۲۵ روش بهبود را توضیح می‌دهند.
- outbox فقط ثبت می‌شود؛ relay، publisher confirm و مصرف‌کننده idempotent هنوز پیاده نشده‌اند.
- مرتب‌کردن lockها احتمال deadlock را کاهش می‌دهد؛ ادعای حذف قطعی deadlock یا ظرفیت تضمینی نداریم.
- تست مستقل PostgreSQL، تست migration و load test با نتیجه ثبت‌شده، مراحل بعدی تمرین‌اند.
- Redis و Prometheus در Compose ابزارهای آزمایشی اختیاری‌اند؛ وجود آن‌ها به معنی استفاده کامل کد از cache یا dashboard آماده نیست.

برای آزمایش چند instance و قواعد دیتابیس، تست H2 را کافی ندان. از درس‌ها برای تکمیل مرحله‌ای همین پروژه و ثبت شاهد رفتاری استفاده کن.
