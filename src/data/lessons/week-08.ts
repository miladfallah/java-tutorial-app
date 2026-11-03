import { Lesson } from "../types";

export const WEEK_08_LESSONS: Lesson[] = [
  {
    "id": "lesson-043",
    "slug": "filters-and-interceptors",
    "week": 8,
    "day": 1,
    "title": "فیلترها و اینترسپتورها در اکوسیستم وب اسپرینگ",
    "titleEn": "Filters and Interceptors",
    "description": "تفاوت اساسی OncePerRequestFilter با HandlerInterceptor و کاربرد آنها در لاگ‌نویسی و ردیابی تراکنش‌ها.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Filters",
      "Interceptors",
      "MDC",
      "Servlet API"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 7",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا MDC در finally پاک می‌شود",
      "دو درخواست پشت سر هم و یک مسیر exception را تست کن؛ requestId نباید میان آن‌ها مشترک بماند."
    ],
    "whyItMatters": "برای authorization از interceptor سفارشی به جای زنجیره استاندارد Security استفاده نکن.",
    "introduction": "تفاوت اساسی OncePerRequestFilter با HandlerInterceptor و کاربرد آنها در لاگ‌نویسی و ردیابی تراکنش‌ها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Servlet Filter در زنجیره HTTP و بیرون MVC کار می‌کند؛ HandlerInterceptor به handlerهای MVC نزدیک‌تر است. برای correlation id یک Filter مناسب است؛ context را در finally پاک کن تا thread reuse داده درخواست قبلی را نشت ندهد."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو درخواست پشت سر هم و یک مسیر exception را تست کن؛ requestId نباید میان آن‌ها مشترک بماند.",
      "solution": "برای authorization از interceptor سفارشی به جای زنجیره استاندارد Security استفاده نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "MDC.put(\"requestId\", UUID.randomUUID().toString());\ntry { chain.doFilter(request, response); }\nfinally { MDC.remove(\"requestId\"); }",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Filters and Interceptors",
      "explanation": "Filter/Interceptor و decoratorهای Nest را یک‌به‌یک معادل proxy Spring نگیر. برای idempotency در هر دو اکوسیستم، حافظه یک process کافی نیست."
    },
    "commonMistakes": [
      {
        "mistake": "برای authorization از interceptor سفارشی به جای زنجیره استاندارد Security استفاده نکن.",
        "whyBad": "Servlet Filter در زنجیره HTTP و بیرون MVC کار می‌کند؛ HandlerInterceptor به handlerهای MVC نزدیک‌تر است. برای correlation id یک Filter مناسب است؛ context را در finally پاک کن تا thread reuse داده درخواست قبلی را نشت ندهد.",
        "solution": "جلوگیری از نشت context در threadهای بازاستفاده‌شده"
      }
    ],
    "bestPractices": [
      "برای authorization از interceptor سفارشی به جای زنجیره استاندارد Security استفاده نکن.",
      "دو درخواست پشت سر هم و یک مسیر exception را تست کن؛ requestId نباید میان آن‌ها مشترک بماند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو درخواست پشت سر هم و یک مسیر exception را تست کن؛ requestId نباید میان آن‌ها مشترک بماند.",
      "acceptanceCriteria": [
        "دو درخواست پشت سر هم و یک مسیر exception را تست کن؛ requestId نباید میان آن‌ها مشترک بماند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "برای authorization از interceptor سفارشی به جای زنجیره استاندارد Security استفاده نکن."
      ],
      "solution": {
        "code": "MDC.put(\"requestId\", UUID.randomUUID().toString());\ntry { chain.doFilter(request, response); }\nfinally { MDC.remove(\"requestId\"); }",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. جلوگیری از نشت context در threadهای بازاستفاده‌شده. برای authorization از interceptor سفارشی به جای زنجیره استاندارد Security استفاده نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-043",
        "question": "چرا MDC در finally پاک می‌شود؟",
        "options": [
          "جلوگیری از اجرای controller",
          "جلوگیری از نشت context در threadهای بازاستفاده‌شده",
          "تبدیل خودکار response به JSON"
        ],
        "correctIndex": 1,
        "explanation": "جلوگیری از نشت context در threadهای بازاستفاده‌شده. Servlet Filter در زنجیره HTTP و بیرون MVC کار می‌کند؛ HandlerInterceptor به handlerهای MVC نزدیک‌تر است. برای correlation id یک Filter مناسب است؛ context را در finally پاک کن تا thread reuse داده درخواست قبلی را نشت ندهد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا MDC در finally پاک می‌شود؟",
        "answer": "جلوگیری از نشت context در threadهای بازاستفاده‌شده. برای authorization از interceptor سفارشی به جای زنجیره استاندارد Security استفاده نکن."
      }
    ],
    "summary": "Servlet Filter در زنجیره HTTP و بیرون MVC کار می‌کند؛ HandlerInterceptor به handlerهای MVC نزدیک‌تر است. برای correlation id یک Filter مناسب است؛ context را در finally پاک کن تا thread reuse داده درخواست قبلی را نشت ندهد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/core/aop.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-044",
    "slug": "spring-aop-fundamentals",
    "week": 8,
    "day": 2,
    "title": "مبانی برنامه‌نویسی جنبه‌گرا (Spring AOP) و تفکیک دغدغه‌ها",
    "titleEn": "Spring AOP Fundamentals",
    "description": "درک عملکرد پروکسی‌های دینامیک، Pointcuts و انوتیشن‌های سفارشی برای سنجش زمان اجرا و ممیزی رویدادها.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "AOP",
      "Aspects",
      "Cross-cutting Concerns",
      "Dynamic Proxies"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 7",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا this.transactionalMethod() الزاماً proxy را عبور می‌کند",
      "یک self-invocation تراکنشی بساز؛ سپس متد را به bean جدا منتقل کن و فعال‌بودن تراکنش را مقایسه کن."
    ],
    "whyItMatters": "annotation بدون درک مرز proxy می‌تواند حس کاذب امنیت یا تراکنش بسازد.",
    "introduction": "درک عملکرد پروکسی‌های دینامیک، Pointcuts و انوتیشن‌های سفارشی برای سنجش زمان اجرا و ممیزی رویدادها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Spring AOP معمولاً با proxy کار می‌کند. فراخوانی از بیرون proxy advice را اجرا می‌کند؛ this.method آن را دور می‌زند. Transaction، Async و Cache هم از همین محدودیت اثر می‌گیرند."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک self-invocation تراکنشی بساز؛ سپس متد را به bean جدا منتقل کن و فعال‌بودن تراکنش را مقایسه کن.",
      "solution": "annotation بدون درک مرز proxy می‌تواند حس کاذب امنیت یا تراکنش بسازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Service\nclass Checkout {\n    private final Billing billing;\n    Checkout(Billing billing) { this.billing = billing; }\n    void place() { billing.charge(); }\n}\n// Billing.charge is invoked through its Spring bean proxy.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Spring AOP Fundamentals",
      "explanation": "Filter/Interceptor و decoratorهای Nest را یک‌به‌یک معادل proxy Spring نگیر. برای idempotency در هر دو اکوسیستم، حافظه یک process کافی نیست."
    },
    "commonMistakes": [
      {
        "mistake": "annotation بدون درک مرز proxy می‌تواند حس کاذب امنیت یا تراکنش بسازد.",
        "whyBad": "Spring AOP معمولاً با proxy کار می‌کند. فراخوانی از بیرون proxy advice را اجرا می‌کند؛ this.method آن را دور می‌زند. Transaction، Async و Cache هم از همین محدودیت اثر می‌گیرند.",
        "solution": "خیر؛ فراخوانی داخلی معمولاً advice را دور می‌زند"
      }
    ],
    "bestPractices": [
      "annotation بدون درک مرز proxy می‌تواند حس کاذب امنیت یا تراکنش بسازد.",
      "یک self-invocation تراکنشی بساز؛ سپس متد را به bean جدا منتقل کن و فعال‌بودن تراکنش را مقایسه کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک self-invocation تراکنشی بساز؛ سپس متد را به bean جدا منتقل کن و فعال‌بودن تراکنش را مقایسه کن.",
      "acceptanceCriteria": [
        "یک self-invocation تراکنشی بساز؛ سپس متد را به bean جدا منتقل کن و فعال‌بودن تراکنش را مقایسه کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "annotation بدون درک مرز proxy می‌تواند حس کاذب امنیت یا تراکنش بسازد."
      ],
      "solution": {
        "code": "@Service\nclass Checkout {\n    private final Billing billing;\n    Checkout(Billing billing) { this.billing = billing; }\n    void place() { billing.charge(); }\n}\n// Billing.charge is invoked through its Spring bean proxy.",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ فراخوانی داخلی معمولاً advice را دور می‌زند. annotation بدون درک مرز proxy می‌تواند حس کاذب امنیت یا تراکنش بسازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-044",
        "question": "آیا this.transactionalMethod() الزاماً proxy را عبور می‌کند؟",
        "options": [
          "بله؛ annotation تمام bytecodeها را تغییر می‌دهد",
          "فقط اگر متد نام place داشته باشد",
          "خیر؛ فراخوانی داخلی معمولاً advice را دور می‌زند"
        ],
        "correctIndex": 2,
        "explanation": "خیر؛ فراخوانی داخلی معمولاً advice را دور می‌زند. Spring AOP معمولاً با proxy کار می‌کند. فراخوانی از بیرون proxy advice را اجرا می‌کند؛ this.method آن را دور می‌زند. Transaction، Async و Cache هم از همین محدودیت اثر می‌گیرند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا this.transactionalMethod() الزاماً proxy را عبور می‌کند؟",
        "answer": "خیر؛ فراخوانی داخلی معمولاً advice را دور می‌زند. annotation بدون درک مرز proxy می‌تواند حس کاذب امنیت یا تراکنش بسازد."
      }
    ],
    "summary": "Spring AOP معمولاً با proxy کار می‌کند. فراخوانی از بیرون proxy advice را اجرا می‌کند؛ this.method آن را دور می‌زند. Transaction، Async و Cache هم از همین محدودیت اثر می‌گیرند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/core/aop.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-045",
    "slug": "http-idempotency",
    "week": 8,
    "day": 3,
    "title": "مفهوم پردازش یکتا (HTTP Idempotency) در تراکنش‌های مالی و خرید",
    "titleEn": "HTTP Idempotency",
    "description": "تحلیل خطرات تکرار درخواست در شبکه‌های نامطمئن، روش‌های استفاده از Idempotency-Key و مقایسه با راهکارهای نودجی‌اس.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Idempotency",
      "Network Failures",
      "Distributed Design"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 7",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "همان کلید با payload متفاوت چه رفتاری می‌خواهد",
      "دو POST همزمان با کلید یکسان را تست کن؛ یک سفارش ایجاد شود و payload متفاوت با همان کلید رد شود."
    ],
    "whyItMatters": "SELECT سپس INSERT بدون unique constraint در برابر race امن نیست.",
    "introduction": "تحلیل خطرات تکرار درخواست در شبکه‌های نامطمئن، روش‌های استفاده از Idempotency-Key و مقایسه با راهکارهای نودجی‌اس.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Idempotency اثر درخواست تکراری را کنترل می‌کند. برای POST کلید، محدوده مالک، fingerprint درخواست و پاسخ ذخیره شود. همان کلید با payload متفاوت باید تعارض بدهد؛ cache حافظه‌ای در چند instance کافی نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو POST همزمان با کلید یکسان را تست کن؛ یک سفارش ایجاد شود و payload متفاوت با همان کلید رد شود.",
      "solution": "SELECT سپس INSERT بدون unique constraint در برابر race امن نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "CREATE TABLE idempotency_keys (\n  owner_id text NOT NULL, key text NOT NULL,\n  request_hash text NOT NULL, response jsonb,\n  PRIMARY KEY (owner_id, key)\n);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "HTTP Idempotency",
      "explanation": "Filter/Interceptor و decoratorهای Nest را یک‌به‌یک معادل proxy Spring نگیر. برای idempotency در هر دو اکوسیستم، حافظه یک process کافی نیست."
    },
    "commonMistakes": [
      {
        "mistake": "SELECT سپس INSERT بدون unique constraint در برابر race امن نیست.",
        "whyBad": "Idempotency اثر درخواست تکراری را کنترل می‌کند. برای POST کلید، محدوده مالک، fingerprint درخواست و پاسخ ذخیره شود. همان کلید با payload متفاوت باید تعارض بدهد؛ cache حافظه‌ای در چند instance کافی نیست.",
        "solution": "تشخیص تعارض و عدم اجرای درخواست جدید"
      }
    ],
    "bestPractices": [
      "SELECT سپس INSERT بدون unique constraint در برابر race امن نیست.",
      "دو POST همزمان با کلید یکسان را تست کن؛ یک سفارش ایجاد شود و payload متفاوت با همان کلید رد شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو POST همزمان با کلید یکسان را تست کن؛ یک سفارش ایجاد شود و payload متفاوت با همان کلید رد شود.",
      "acceptanceCriteria": [
        "دو POST همزمان با کلید یکسان را تست کن؛ یک سفارش ایجاد شود و payload متفاوت با همان کلید رد شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "SELECT سپس INSERT بدون unique constraint در برابر race امن نیست."
      ],
      "solution": {
        "code": "CREATE TABLE idempotency_keys (\n  owner_id text NOT NULL, key text NOT NULL,\n  request_hash text NOT NULL, response jsonb,\n  PRIMARY KEY (owner_id, key)\n);",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تشخیص تعارض و عدم اجرای درخواست جدید. SELECT سپس INSERT بدون unique constraint در برابر race امن نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-045",
        "question": "همان کلید با payload متفاوت چه رفتاری می‌خواهد؟",
        "options": [
          "تشخیص تعارض و عدم اجرای درخواست جدید",
          "بازگرداندن سفارش هر مشتری با همان کلید",
          "ساخت سفارش دوم و حذف اولی"
        ],
        "correctIndex": 0,
        "explanation": "تشخیص تعارض و عدم اجرای درخواست جدید. Idempotency اثر درخواست تکراری را کنترل می‌کند. برای POST کلید، محدوده مالک، fingerprint درخواست و پاسخ ذخیره شود. همان کلید با payload متفاوت باید تعارض بدهد؛ cache حافظه‌ای در چند instance کافی نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: همان کلید با payload متفاوت چه رفتاری می‌خواهد؟",
        "answer": "تشخیص تعارض و عدم اجرای درخواست جدید. SELECT سپس INSERT بدون unique constraint در برابر race امن نیست."
      }
    ],
    "summary": "Idempotency اثر درخواست تکراری را کنترل می‌کند. برای POST کلید، محدوده مالک، fingerprint درخواست و پاسخ ذخیره شود. همان کلید با payload متفاوت باید تعارض بدهد؛ cache حافظه‌ای در چند instance کافی نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/core/aop.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-046",
    "slug": "implementing-idempotent-order-creation",
    "week": 8,
    "day": 4,
    "title": "پیاده‌سازی ایجاد سفارش با کلید یکتایی (پروژه محوری)",
    "titleEn": "Implementing Idempotent Order Creation",
    "description": "ساخت لایه محافظت از ثبت دوباره سفارش با کش کردن کلیدها و قفل‌های توزیع‌شده موقت.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Idempotency Implementation",
      "Order Module"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 7",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "پس از unique violation در تراکنش JPA چه چیزی خطرناک است",
      "رقابت دو درخواست، rollback عملیات و retry پس از قطع پاسخ را تست کن؛ هیچ رزرو دوباره‌ای ایجاد نشود."
    ],
    "whyItMatters": "Idempotency بدون scope کاربر می‌تواند پاسخ مشتری دیگری را افشا کند.",
    "introduction": "ساخت لایه محافظت از ثبت دوباره سفارش با کش کردن کلیدها و قفل‌های توزیع‌شده موقت.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "برای claim کلید تکرار از uniqueness دیتابیس استفاده کن و تغییر سفارش را در تراکنش هماهنگ بساز. خطای unique می‌تواند تراکنش JPA را rollback-only کند؛ ادامه query در همان تراکنش راه replay مطمئنی نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "رقابت دو درخواست، rollback عملیات و retry پس از قطع پاسخ را تست کن؛ هیچ رزرو دوباره‌ای ایجاد نشود.",
      "solution": "Idempotency بدون scope کاربر می‌تواند پاسخ مشتری دیگری را افشا کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "INSERT INTO idempotency_keys(owner_id,key,request_hash)\nVALUES (:owner,:key,:hash)\nON CONFLICT DO NOTHING\nRETURNING key;",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Implementing Idempotent Order Creation",
      "explanation": "Filter/Interceptor و decoratorهای Nest را یک‌به‌یک معادل proxy Spring نگیر. برای idempotency در هر دو اکوسیستم، حافظه یک process کافی نیست."
    },
    "commonMistakes": [
      {
        "mistake": "Idempotency بدون scope کاربر می‌تواند پاسخ مشتری دیگری را افشا کند.",
        "whyBad": "برای claim کلید تکرار از uniqueness دیتابیس استفاده کن و تغییر سفارش را در تراکنش هماهنگ بساز. خطای unique می‌تواند تراکنش JPA را rollback-only کند؛ ادامه query در همان تراکنش راه replay مطمئنی نیست.",
        "solution": "ادامه کار و فرض سالم‌بودن همان تراکنش"
      }
    ],
    "bestPractices": [
      "Idempotency بدون scope کاربر می‌تواند پاسخ مشتری دیگری را افشا کند.",
      "رقابت دو درخواست، rollback عملیات و retry پس از قطع پاسخ را تست کن؛ هیچ رزرو دوباره‌ای ایجاد نشود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "رقابت دو درخواست، rollback عملیات و retry پس از قطع پاسخ را تست کن؛ هیچ رزرو دوباره‌ای ایجاد نشود.",
      "acceptanceCriteria": [
        "رقابت دو درخواست، rollback عملیات و retry پس از قطع پاسخ را تست کن؛ هیچ رزرو دوباره‌ای ایجاد نشود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "Idempotency بدون scope کاربر می‌تواند پاسخ مشتری دیگری را افشا کند."
      ],
      "solution": {
        "code": "INSERT INTO idempotency_keys(owner_id,key,request_hash)\nVALUES (:owner,:key,:hash)\nON CONFLICT DO NOTHING\nRETURNING key;",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ادامه کار و فرض سالم‌بودن همان تراکنش. Idempotency بدون scope کاربر می‌تواند پاسخ مشتری دیگری را افشا کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-046",
        "question": "پس از unique violation در تراکنش JPA چه چیزی خطرناک است؟",
        "options": [
          "rollback و تصمیم retry در مرز بیرونی",
          "ادامه کار و فرض سالم‌بودن همان تراکنش",
          "اتکا به unique constraint برای تشخیص race"
        ],
        "correctIndex": 1,
        "explanation": "ادامه کار و فرض سالم‌بودن همان تراکنش. برای claim کلید تکرار از uniqueness دیتابیس استفاده کن و تغییر سفارش را در تراکنش هماهنگ بساز. خطای unique می‌تواند تراکنش JPA را rollback-only کند؛ ادامه query در همان تراکنش راه replay مطمئنی نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: پس از unique violation در تراکنش JPA چه چیزی خطرناک است؟",
        "answer": "ادامه کار و فرض سالم‌بودن همان تراکنش. Idempotency بدون scope کاربر می‌تواند پاسخ مشتری دیگری را افشا کند."
      }
    ],
    "summary": "برای claim کلید تکرار از uniqueness دیتابیس استفاده کن و تغییر سفارش را در تراکنش هماهنگ بساز. خطای unique می‌تواند تراکنش JPA را rollback-only کند؛ ادامه query در همان تراکنش راه replay مطمئنی نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/core/aop.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-047",
    "slug": "api-versioning",
    "week": 8,
    "day": 5,
    "title": "استراتژی‌های نسخه‌بندی API بدون شکستن قراردادهای کلاینت",
    "titleEn": "API Versioning",
    "description": "مقایسه روش‌های نسخه‌بندی بر اساس URI، هدر و پارامتر و حفظ سازگاری عقبرو (Backward Compatibility).",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "API Versioning",
      "REST Design",
      "Client Compatibility"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 7",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "تغییر کدام مورد معمولاً breaking است",
      "یک فیلد را با روش expand اضافه کن؛ تست client قدیمی باید همچنان موفق باشد."
    ],
    "whyItMatters": "کپی کل منطق دامنه برای هر نسخه نگه‌داری را دشوار می‌کند؛ adapter قرارداد را جدا کن.",
    "introduction": "مقایسه روش‌های نسخه‌بندی بر اساس URI، هدر و پارامتر و حفظ سازگاری عقبرو (Backward Compatibility).",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "نسخه API برای تغییر قرارداد ناسازگار است، نه هر deploy. افزودن فیلد اختیاری معمولاً آسان‌تر از حذف یا تغییر معنای فیلد موجود است. سیاست deprecation و پنجره سازگاری را مستند کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک فیلد را با روش expand اضافه کن؛ تست client قدیمی باید همچنان موفق باشد.",
      "solution": "کپی کل منطق دامنه برای هر نسخه نگه‌داری را دشوار می‌کند؛ adapter قرارداد را جدا کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "GET /api/v1/orders/{id}\nGET /api/v2/orders/{id}\n// Keep v1 contract tests while v1 clients are supported.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "API Versioning",
      "explanation": "Filter/Interceptor و decoratorهای Nest را یک‌به‌یک معادل proxy Spring نگیر. برای idempotency در هر دو اکوسیستم، حافظه یک process کافی نیست."
    },
    "commonMistakes": [
      {
        "mistake": "کپی کل منطق دامنه برای هر نسخه نگه‌داری را دشوار می‌کند؛ adapter قرارداد را جدا کن.",
        "whyBad": "نسخه API برای تغییر قرارداد ناسازگار است، نه هر deploy. افزودن فیلد اختیاری معمولاً آسان‌تر از حذف یا تغییر معنای فیلد موجود است. سیاست deprecation و پنجره سازگاری را مستند کن.",
        "solution": "تغییر نوع total از عدد به object بدون نسخه یا سازگاری"
      }
    ],
    "bestPractices": [
      "کپی کل منطق دامنه برای هر نسخه نگه‌داری را دشوار می‌کند؛ adapter قرارداد را جدا کن.",
      "یک فیلد را با روش expand اضافه کن؛ تست client قدیمی باید همچنان موفق باشد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک فیلد را با روش expand اضافه کن؛ تست client قدیمی باید همچنان موفق باشد.",
      "acceptanceCriteria": [
        "یک فیلد را با روش expand اضافه کن؛ تست client قدیمی باید همچنان موفق باشد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "کپی کل منطق دامنه برای هر نسخه نگه‌داری را دشوار می‌کند؛ adapter قرارداد را جدا کن."
      ],
      "solution": {
        "code": "GET /api/v1/orders/{id}\nGET /api/v2/orders/{id}\n// Keep v1 contract tests while v1 clients are supported.",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تغییر نوع total از عدد به object بدون نسخه یا سازگاری. کپی کل منطق دامنه برای هر نسخه نگه‌داری را دشوار می‌کند؛ adapter قرارداد را جدا کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-047",
        "question": "تغییر کدام مورد معمولاً breaking است؟",
        "options": [
          "اضافه‌شدن endpoint مستقل",
          "بهبود index داخلی دیتابیس",
          "تغییر نوع total از عدد به object بدون نسخه یا سازگاری"
        ],
        "correctIndex": 2,
        "explanation": "تغییر نوع total از عدد به object بدون نسخه یا سازگاری. نسخه API برای تغییر قرارداد ناسازگار است، نه هر deploy. افزودن فیلد اختیاری معمولاً آسان‌تر از حذف یا تغییر معنای فیلد موجود است. سیاست deprecation و پنجره سازگاری را مستند کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: تغییر کدام مورد معمولاً breaking است؟",
        "answer": "تغییر نوع total از عدد به object بدون نسخه یا سازگاری. کپی کل منطق دامنه برای هر نسخه نگه‌داری را دشوار می‌کند؛ adapter قرارداد را جدا کن."
      }
    ],
    "summary": "نسخه API برای تغییر قرارداد ناسازگار است، نه هر deploy. افزودن فیلد اختیاری معمولاً آسان‌تر از حذف یا تغییر معنای فیلد موجود است. سیاست deprecation و پنجره سازگاری را مستند کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/core/aop.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-048",
    "slug": "dockerizing-spring-boot",
    "week": 8,
    "day": 6,
    "title": "کانتینرسازی بهینه سرویس Spring Boot با Docker",
    "titleEn": "Dockerizing Spring Boot",
    "description": "ساخت لایه‌بندی داکر با ساختار جدید Spring Boot Buildpack و استخراج لایه‌های وابستگی جهت کشینگ سریع.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Docker",
      "Containers",
      "DevOps",
      "Layered JAR"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 7",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "فرم مناسب ENTRYPOINT برای دریافت signal چیست",
      "JAR را بساز و container را با memory limit اجرا کن؛ SIGTERM باید به JVM برسد."
    ],
    "whyItMatters": "وجود java.version در pom به تنهایی JDK داخل Docker را تغییر نمی‌دهد.",
    "introduction": "ساخت لایه‌بندی داکر با ساختار جدید Spring Boot Buildpack و استخراج لایه‌های وابستگی جهت کشینگ سریع.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "ایمیج runtime نباید Maven و سورس لازم‌نبودنی را حمل کند. JAR ساخته‌شده را با کاربر غیر root اجرا کن و signal را به JVM برسان. در Apple Silicon، build بومی از emulation غیرضروری جلوگیری می‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "JAR را بساز و container را با memory limit اجرا کن؛ SIGTERM باید به JVM برسد.",
      "solution": "وجود java.version در pom به تنهایی JDK داخل Docker را تغییر نمی‌دهد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "dockerfile",
        "code": "FROM eclipse-temurin:25-jre\nWORKDIR /app\nCOPY target/app.jar app.jar\nUSER 10001\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Dockerizing Spring Boot",
      "explanation": "Filter/Interceptor و decoratorهای Nest را یک‌به‌یک معادل proxy Spring نگیر. برای idempotency در هر دو اکوسیستم، حافظه یک process کافی نیست."
    },
    "commonMistakes": [
      {
        "mistake": "وجود java.version در pom به تنهایی JDK داخل Docker را تغییر نمی‌دهد.",
        "whyBad": "ایمیج runtime نباید Maven و سورس لازم‌نبودنی را حمل کند. JAR ساخته‌شده را با کاربر غیر root اجرا کن و signal را به JVM برسان. در Apple Silicon، build بومی از emulation غیرضروری جلوگیری می‌کند.",
        "solution": "فرم exec آرایه‌ای"
      }
    ],
    "bestPractices": [
      "وجود java.version در pom به تنهایی JDK داخل Docker را تغییر نمی‌دهد.",
      "JAR را بساز و container را با memory limit اجرا کن؛ SIGTERM باید به JVM برسد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "JAR را بساز و container را با memory limit اجرا کن؛ SIGTERM باید به JVM برسد.",
      "acceptanceCriteria": [
        "JAR را بساز و container را با memory limit اجرا کن؛ SIGTERM باید به JVM برسد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "وجود java.version در pom به تنهایی JDK داخل Docker را تغییر نمی‌دهد."
      ],
      "solution": {
        "code": "FROM eclipse-temurin:25-jre\nWORKDIR /app\nCOPY target/app.jar app.jar\nUSER 10001\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]",
        "language": "dockerfile",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. فرم exec آرایه‌ای. وجود java.version در pom به تنهایی JDK داخل Docker را تغییر نمی‌دهد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-048",
        "question": "فرم مناسب ENTRYPOINT برای دریافت signal چیست؟",
        "options": [
          "فرم exec آرایه‌ای",
          "shell که JVM را در background می‌گذارد",
          "اجرای Maven download در هر شروع container"
        ],
        "correctIndex": 0,
        "explanation": "فرم exec آرایه‌ای. ایمیج runtime نباید Maven و سورس لازم‌نبودنی را حمل کند. JAR ساخته‌شده را با کاربر غیر root اجرا کن و signal را به JVM برسان. در Apple Silicon، build بومی از emulation غیرضروری جلوگیری می‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: فرم مناسب ENTRYPOINT برای دریافت signal چیست؟",
        "answer": "فرم exec آرایه‌ای. وجود java.version در pom به تنهایی JDK داخل Docker را تغییر نمی‌دهد."
      }
    ],
    "summary": "ایمیج runtime نباید Maven و سورس لازم‌نبودنی را حمل کند. JAR ساخته‌شده را با کاربر غیر root اجرا کن و signal را به JVM برسان. در Apple Silicon، build بومی از emulation غیرضروری جلوگیری می‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/core/aop.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
