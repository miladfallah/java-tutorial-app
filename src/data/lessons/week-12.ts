import { Lesson } from "../types";

export const WEEK_12_LESSONS: Lesson[] = [
  {
    "id": "lesson-067",
    "slug": "connection-pooling-with-hikaricp",
    "week": 12,
    "day": 1,
    "title": "مدیریت استخر اتصالات دیتابیس (Connection Pool) با HikariCP",
    "titleEn": "Connection Pooling with HikariCP",
    "description": "علت برتری HikariCP در عملکرد، فرمول ریاضی سایزبندی بهینه استخر اتصالات و تنظیم پارامترهای connectionTimeout و maxLifetime.",
    "category": "Database",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "HikariCP",
      "Connection Pooling",
      "Performance Tuning"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 11",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "connectionTimeout Hikari چه چیزی را محدود می‌کند",
      "زیر بار زمان انتظار pool، تعداد active و زمان query را اندازه بگیر؛ سقف کل اتصال همه instanceها را حساب کن."
    ],
    "whyItMatters": "Virtual Thread ظرفیت دیتابیس و تعداد اتصال مجاز را نامحدود نمی‌کند.",
    "introduction": "علت برتری HikariCP در عملکرد، فرمول ریاضی سایزبندی بهینه استخر اتصالات و تنظیم پارامترهای connectionTimeout و maxLifetime.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Pool اتصال یک حد ظرفیت برای DB است؛ بزرگ‌ترشدن آن همیشه throughput بهتر نمی‌دهد. connectionTimeout زمان انتظار اتصال است، نه timeout اجرای query. تعداد instanceها ضرب در pool size باید با ظرفیت DB سازگار باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "زیر بار زمان انتظار pool، تعداد active و زمان query را اندازه بگیر؛ سقف کل اتصال همه instanceها را حساب کن.",
      "solution": "Virtual Thread ظرفیت دیتابیس و تعداد اتصال مجاز را نامحدود نمی‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "spring:\n  datasource:\n    hikari:\n      maximum-pool-size: 10\n      connection-timeout: 2000",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Connection Pooling with HikariCP",
      "explanation": "قواعد SQL و ظرفیت DB در هر دو پشته مشترک‌اند؛ تفاوت اصلی در مدیریت context، pool و migration است، نه قدرت جادویی زبان Java."
    },
    "commonMistakes": [
      {
        "mistake": "Virtual Thread ظرفیت دیتابیس و تعداد اتصال مجاز را نامحدود نمی‌کند.",
        "whyBad": "Pool اتصال یک حد ظرفیت برای DB است؛ بزرگ‌ترشدن آن همیشه throughput بهتر نمی‌دهد. connectionTimeout زمان انتظار اتصال است، نه timeout اجرای query. تعداد instanceها ضرب در pool size باید با ظرفیت DB سازگار باشد.",
        "solution": "انتظار برای گرفتن connection از pool"
      }
    ],
    "bestPractices": [
      "Virtual Thread ظرفیت دیتابیس و تعداد اتصال مجاز را نامحدود نمی‌کند.",
      "زیر بار زمان انتظار pool، تعداد active و زمان query را اندازه بگیر؛ سقف کل اتصال همه instanceها را حساب کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "زیر بار زمان انتظار pool، تعداد active و زمان query را اندازه بگیر؛ سقف کل اتصال همه instanceها را حساب کن.",
      "acceptanceCriteria": [
        "زیر بار زمان انتظار pool، تعداد active و زمان query را اندازه بگیر؛ سقف کل اتصال همه instanceها را حساب کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "Virtual Thread ظرفیت دیتابیس و تعداد اتصال مجاز را نامحدود نمی‌کند."
      ],
      "solution": {
        "code": "spring:\n  datasource:\n    hikari:\n      maximum-pool-size: 10\n      connection-timeout: 2000",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. انتظار برای گرفتن connection از pool. Virtual Thread ظرفیت دیتابیس و تعداد اتصال مجاز را نامحدود نمی‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-067",
        "question": "connectionTimeout Hikari چه چیزی را محدود می‌کند؟",
        "options": [
          "مدت اجرای تمام SQLها",
          "انتظار برای گرفتن connection از pool",
          "عمر HTTP request در مرورگر"
        ],
        "correctIndex": 1,
        "explanation": "انتظار برای گرفتن connection از pool. Pool اتصال یک حد ظرفیت برای DB است؛ بزرگ‌ترشدن آن همیشه throughput بهتر نمی‌دهد. connectionTimeout زمان انتظار اتصال است، نه timeout اجرای query. تعداد instanceها ضرب در pool size باید با ظرفیت DB سازگار باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: connectionTimeout Hikari چه چیزی را محدود می‌کند؟",
        "answer": "انتظار برای گرفتن connection از pool. Virtual Thread ظرفیت دیتابیس و تعداد اتصال مجاز را نامحدود نمی‌کند."
      }
    ],
    "summary": "Pool اتصال یک حد ظرفیت برای DB است؛ بزرگ‌ترشدن آن همیشه throughput بهتر نمی‌دهد. connectionTimeout زمان انتظار اتصال است، نه timeout اجرای query. تعداد instanceها ضرب در pool size باید با ظرفیت DB سازگار باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/ddl-constraints.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-068",
    "slug": "batching-and-pagination",
    "week": 12,
    "day": 2,
    "title": "بهینه‌سازی عملیات درج انبوه (JDBC Batching) و صفحه‌بندی",
    "titleEn": "Batching and Pagination",
    "description": "تنظیم hibernate.jdbc.batch_size برای درج هزاران قلم سفارش در چند میلی‌ثانیه و پرهیز از تخصیص حافظه بیش از حد.",
    "category": "Database",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "JDBC Batching",
      "Bulk Inserts",
      "High Performance"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 11",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا در import بزرگ clear می‌کنیم",
      "۱۰۰۰ ردیف را با batch محدود وارد کن؛ مصرف heap و SQL واقعی را ثبت کن."
    ],
    "whyItMatters": "flush/clear به معنی commit batch نیست؛ مرز transaction را جدا طراحی کن.",
    "introduction": "تنظیم hibernate.jdbc.batch_size برای درج هزاران قلم سفارش در چند میلی‌ثانیه و پرهیز از تخصیص حافظه بیش از حد.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Batching تعداد round-trip نوشتن را کم می‌کند اما با transaction بسیار بزرگ، حافظه context رشد می‌کند. flush/clear دوره‌ای و batch size را با driver و شیوه تولید شناسه بررسی کن؛ تضمین batch را از log ببین."
      }
    ],
    "realWorldScenario": {
      "scenario": "۱۰۰۰ ردیف را با batch محدود وارد کن؛ مصرف heap و SQL واقعی را ثبت کن.",
      "solution": "flush/clear به معنی commit batch نیست؛ مرز transaction را جدا طراحی کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "for (int i = 0; i < rows.size(); i++) {\n    entityManager.persist(rows.get(i));\n    if ((i + 1) % 50 == 0) { entityManager.flush(); entityManager.clear(); }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Batching and Pagination",
      "explanation": "قواعد SQL و ظرفیت DB در هر دو پشته مشترک‌اند؛ تفاوت اصلی در مدیریت context، pool و migration است، نه قدرت جادویی زبان Java."
    },
    "commonMistakes": [
      {
        "mistake": "flush/clear به معنی commit batch نیست؛ مرز transaction را جدا طراحی کن.",
        "whyBad": "Batching تعداد round-trip نوشتن را کم می‌کند اما با transaction بسیار بزرگ، حافظه context رشد می‌کند. flush/clear دوره‌ای و batch size را با driver و شیوه تولید شناسه بررسی کن؛ تضمین batch را از log ببین.",
        "solution": "کاهش اشیای managed نگه‌داری‌شده در context"
      }
    ],
    "bestPractices": [
      "flush/clear به معنی commit batch نیست؛ مرز transaction را جدا طراحی کن.",
      "۱۰۰۰ ردیف را با batch محدود وارد کن؛ مصرف heap و SQL واقعی را ثبت کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "۱۰۰۰ ردیف را با batch محدود وارد کن؛ مصرف heap و SQL واقعی را ثبت کن.",
      "acceptanceCriteria": [
        "۱۰۰۰ ردیف را با batch محدود وارد کن؛ مصرف heap و SQL واقعی را ثبت کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "flush/clear به معنی commit batch نیست؛ مرز transaction را جدا طراحی کن."
      ],
      "solution": {
        "code": "for (int i = 0; i < rows.size(); i++) {\n    entityManager.persist(rows.get(i));\n    if ((i + 1) % 50 == 0) { entityManager.flush(); entityManager.clear(); }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. کاهش اشیای managed نگه‌داری‌شده در context. flush/clear به معنی commit batch نیست؛ مرز transaction را جدا طراحی کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-068",
        "question": "چرا در import بزرگ clear می‌کنیم؟",
        "options": [
          "برای commit قطعی هر ۵۰ ردیف",
          "برای حذف رکوردها از دیتابیس",
          "کاهش اشیای managed نگه‌داری‌شده در context"
        ],
        "correctIndex": 2,
        "explanation": "کاهش اشیای managed نگه‌داری‌شده در context. Batching تعداد round-trip نوشتن را کم می‌کند اما با transaction بسیار بزرگ، حافظه context رشد می‌کند. flush/clear دوره‌ای و batch size را با driver و شیوه تولید شناسه بررسی کن؛ تضمین batch را از log ببین."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا در import بزرگ clear می‌کنیم؟",
        "answer": "کاهش اشیای managed نگه‌داری‌شده در context. flush/clear به معنی commit batch نیست؛ مرز transaction را جدا طراحی کن."
      }
    ],
    "summary": "Batching تعداد round-trip نوشتن را کم می‌کند اما با transaction بسیار بزرگ، حافظه context رشد می‌کند. flush/clear دوره‌ای و batch size را با driver و شیوه تولید شناسه بررسی کن؛ تضمین batch را از log ببین.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/ddl-constraints.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-069",
    "slug": "consistency-and-data-integrity",
    "week": 12,
    "day": 3,
    "title": "حفظ یکپارچگی داده و پایداری در تراکنش‌های پرحجم",
    "titleEn": "Consistency and Data Integrity",
    "description": "بررسی الگوهای پایداری رابطه در معماری نرم‌افزار، قیود یکپارچگی پایگاه داده و تعامل آن با لایه کد.",
    "category": "Database",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Data Integrity",
      "Constraints",
      "Reliability"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 11",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کدام لایه از تمام نویسنده‌های مستقیم DB محافظت می‌کند",
      "درج مستقیم داده نامعتبر و مسیر API را تست کن؛ هر دو باید invariant را حفظ کنند."
    ],
    "whyItMatters": "constraint را جای کنترل مالکیت و authorization کاربر نگذار.",
    "introduction": "بررسی الگوهای پایداری رابطه در معماری نرم‌افزار، قیود یکپارچگی پایگاه داده و تعامل آن با لایه کد.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Data integrity را با NOT NULL، UNIQUE، FK و CHECK محافظت کن. constraint جلوی چند نویسنده را می‌گیرد؛ validation اپ فقط یک مسیر نوشتن را پوشش می‌دهد. consistency در چند سرویس نیازمند قرارداد و جبران خطاست."
      }
    ],
    "realWorldScenario": {
      "scenario": "درج مستقیم داده نامعتبر و مسیر API را تست کن؛ هر دو باید invariant را حفظ کنند.",
      "solution": "constraint را جای کنترل مالکیت و authorization کاربر نگذار."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "ALTER TABLE orders ADD CONSTRAINT order_total_nonnegative CHECK (total_amount >= 0);\nALTER TABLE order_items ADD CONSTRAINT order_fk FOREIGN KEY (order_id) REFERENCES orders(id);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Consistency and Data Integrity",
      "explanation": "قواعد SQL و ظرفیت DB در هر دو پشته مشترک‌اند؛ تفاوت اصلی در مدیریت context، pool و migration است، نه قدرت جادویی زبان Java."
    },
    "commonMistakes": [
      {
        "mistake": "constraint را جای کنترل مالکیت و authorization کاربر نگذار.",
        "whyBad": "Data integrity را با NOT NULL، UNIQUE، FK و CHECK محافظت کن. constraint جلوی چند نویسنده را می‌گیرد؛ validation اپ فقط یک مسیر نوشتن را پوشش می‌دهد. consistency در چند سرویس نیازمند قرارداد و جبران خطاست.",
        "solution": "constraint دیتابیس"
      }
    ],
    "bestPractices": [
      "constraint را جای کنترل مالکیت و authorization کاربر نگذار.",
      "درج مستقیم داده نامعتبر و مسیر API را تست کن؛ هر دو باید invariant را حفظ کنند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "درج مستقیم داده نامعتبر و مسیر API را تست کن؛ هر دو باید invariant را حفظ کنند.",
      "acceptanceCriteria": [
        "درج مستقیم داده نامعتبر و مسیر API را تست کن؛ هر دو باید invariant را حفظ کنند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "constraint را جای کنترل مالکیت و authorization کاربر نگذار."
      ],
      "solution": {
        "code": "ALTER TABLE orders ADD CONSTRAINT order_total_nonnegative CHECK (total_amount >= 0);\nALTER TABLE order_items ADD CONSTRAINT order_fk FOREIGN KEY (order_id) REFERENCES orders(id);",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. constraint دیتابیس. constraint را جای کنترل مالکیت و authorization کاربر نگذار."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-069",
        "question": "کدام لایه از تمام نویسنده‌های مستقیم DB محافظت می‌کند؟",
        "options": [
          "constraint دیتابیس",
          "فقط decorator اعتبارسنجی controller",
          "فقط schema OpenAPI"
        ],
        "correctIndex": 0,
        "explanation": "constraint دیتابیس. Data integrity را با NOT NULL، UNIQUE، FK و CHECK محافظت کن. constraint جلوی چند نویسنده را می‌گیرد؛ validation اپ فقط یک مسیر نوشتن را پوشش می‌دهد. consistency در چند سرویس نیازمند قرارداد و جبران خطاست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کدام لایه از تمام نویسنده‌های مستقیم DB محافظت می‌کند؟",
        "answer": "constraint دیتابیس. constraint را جای کنترل مالکیت و authorization کاربر نگذار."
      }
    ],
    "summary": "Data integrity را با NOT NULL، UNIQUE، FK و CHECK محافظت کن. constraint جلوی چند نویسنده را می‌گیرد؛ validation اپ فقط یک مسیر نوشتن را پوشش می‌دهد. consistency در چند سرویس نیازمند قرارداد و جبران خطاست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/ddl-constraints.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-070",
    "slug": "optimizing-order-queries",
    "week": 12,
    "day": 4,
    "title": "تیونینگ کوئری‌های ماژول سفارشات برای پاسخ‌دهی زیر ۱۰ میلی‌ثانیه (پروژه محوری)",
    "titleEn": "Optimizing Order Queries",
    "description": "بازنویسی کوئری‌های گزارش‌گیری و لیست سفارشات کاربر با ایندکس‌های پیشرفته و واکشی دقیق داده‌های مورد نیاز.",
    "category": "Database",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Performance",
      "Optimization",
      "Order Queries"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 11",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چه داده‌ای برای list summary لازم است",
      "list API را به projection تبدیل کن؛ ستون‌ها، query count و اندازه JSON را قبل/بعد ثبت کن."
    ],
    "whyItMatters": "query سریع بدون page limit می‌تواند با رشد داده دوباره مسئله بسازد.",
    "introduction": "بازنویسی کوئری‌های گزارش‌گیری و لیست سفارشات کاربر با ایندکس‌های پیشرفته و واکشی دقیق داده‌های مورد نیاز.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "بهینه‌سازی query باید از use case و اندازه خروجی آغاز شود. برای فهرست به تمام ستون‌ها و روابط entity نیاز نیست؛ projection کوچک هزینه I/O و hydration را کم می‌کند. نتیجه را با benchmark نماینده بسنج."
      }
    ],
    "realWorldScenario": {
      "scenario": "list API را به projection تبدیل کن؛ ستون‌ها، query count و اندازه JSON را قبل/بعد ثبت کن.",
      "solution": "query سریع بدون page limit می‌تواند با رشد داده دوباره مسئله بسازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "record OrderSummary(UUID id, BigDecimal total) {}\n@Query(\"select new com.academy.order.OrderSummary(o.id, o.totalAmount) from Order o where o.customerId=:customer\")\nList<OrderSummary> summaries(@Param(\"customer\") String customer);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Optimizing Order Queries",
      "explanation": "قواعد SQL و ظرفیت DB در هر دو پشته مشترک‌اند؛ تفاوت اصلی در مدیریت context، pool و migration است، نه قدرت جادویی زبان Java."
    },
    "commonMistakes": [
      {
        "mistake": "query سریع بدون page limit می‌تواند با رشد داده دوباره مسئله بسازد.",
        "whyBad": "بهینه‌سازی query باید از use case و اندازه خروجی آغاز شود. برای فهرست به تمام ستون‌ها و روابط entity نیاز نیست؛ projection کوچک هزینه I/O و hydration را کم می‌کند. نتیجه را با benchmark نماینده بسنج.",
        "solution": "فقط فیلدهای مورد نیاز قرارداد"
      }
    ],
    "bestPractices": [
      "query سریع بدون page limit می‌تواند با رشد داده دوباره مسئله بسازد.",
      "list API را به projection تبدیل کن؛ ستون‌ها، query count و اندازه JSON را قبل/بعد ثبت کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "list API را به projection تبدیل کن؛ ستون‌ها، query count و اندازه JSON را قبل/بعد ثبت کن.",
      "acceptanceCriteria": [
        "list API را به projection تبدیل کن؛ ستون‌ها، query count و اندازه JSON را قبل/بعد ثبت کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "query سریع بدون page limit می‌تواند با رشد داده دوباره مسئله بسازد."
      ],
      "solution": {
        "code": "record OrderSummary(UUID id, BigDecimal total) {}\n@Query(\"select new com.academy.order.OrderSummary(o.id, o.totalAmount) from Order o where o.customerId=:customer\")\nList<OrderSummary> summaries(@Param(\"customer\") String customer);",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. فقط فیلدهای مورد نیاز قرارداد. query سریع بدون page limit می‌تواند با رشد داده دوباره مسئله بسازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-070",
        "question": "چه داده‌ای برای list summary لازم است؟",
        "options": [
          "تمام entityها و تمام collectionها",
          "فقط فیلدهای مورد نیاز قرارداد",
          "همه ستون‌ها چون projection همیشه کندتر است"
        ],
        "correctIndex": 1,
        "explanation": "فقط فیلدهای مورد نیاز قرارداد. بهینه‌سازی query باید از use case و اندازه خروجی آغاز شود. برای فهرست به تمام ستون‌ها و روابط entity نیاز نیست؛ projection کوچک هزینه I/O و hydration را کم می‌کند. نتیجه را با benchmark نماینده بسنج."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چه داده‌ای برای list summary لازم است؟",
        "answer": "فقط فیلدهای مورد نیاز قرارداد. query سریع بدون page limit می‌تواند با رشد داده دوباره مسئله بسازد."
      }
    ],
    "summary": "بهینه‌سازی query باید از use case و اندازه خروجی آغاز شود. برای فهرست به تمام ستون‌ها و روابط entity نیاز نیست؛ projection کوچک هزینه I/O و hydration را کم می‌کند. نتیجه را با benchmark نماینده بسنج.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/ddl-constraints.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-071",
    "slug": "unique-constraints-and-upsert",
    "week": 12,
    "day": 5,
    "title": "قیود یکتایی و عملیات Upsert در PostgreSQL",
    "titleEn": "Unique Constraints and Upsert",
    "description": "استفاده از عبارت ON CONFLICT DO UPDATE در کوئری‌های بومی جهت ثبت و به‌روزرسانی بدون Race Condition.",
    "category": "Database",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Upsert",
      "Unique Constraints",
      "PostgreSQL Advanced"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 11",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "وجود یک SELECT پیش از INSERT جلوی duplicate را تضمین می‌کند",
      "دو insert همزمان یک external_id را اجرا کن؛ مشخص کن update مجاز است یا باید conflict بدهد."
    ],
    "whyItMatters": "unique violation را در transaction شکست‌خورده نبلع؛ مرز rollback و retry را رعایت کن.",
    "introduction": "استفاده از عبارت ON CONFLICT DO UPDATE در کوئری‌های بومی جهت ثبت و به‌روزرسانی بدون Race Condition.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Unique constraint تصمیم رقابت را در DB انجام می‌دهد. Upsert سیاست تعارض را صریح می‌کند؛ DO UPDATE ممکن است داده قبلی را بازنویسی کند و برای idempotency همیشه مطلوب نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو insert همزمان یک external_id را اجرا کن؛ مشخص کن update مجاز است یا باید conflict بدهد.",
      "solution": "unique violation را در transaction شکست‌خورده نبلع؛ مرز rollback و retry را رعایت کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "INSERT INTO customers(external_id, name) VALUES (:id, :name)\nON CONFLICT (external_id) DO UPDATE SET name = EXCLUDED.name;",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Unique Constraints and Upsert",
      "explanation": "قواعد SQL و ظرفیت DB در هر دو پشته مشترک‌اند؛ تفاوت اصلی در مدیریت context، pool و migration است، نه قدرت جادویی زبان Java."
    },
    "commonMistakes": [
      {
        "mistake": "unique violation را در transaction شکست‌خورده نبلع؛ مرز rollback و retry را رعایت کن.",
        "whyBad": "Unique constraint تصمیم رقابت را در DB انجام می‌دهد. Upsert سیاست تعارض را صریح می‌کند؛ DO UPDATE ممکن است داده قبلی را بازنویسی کند و برای idempotency همیشه مطلوب نیست.",
        "solution": "خیر؛ unique constraint هنوز لازم است"
      }
    ],
    "bestPractices": [
      "unique violation را در transaction شکست‌خورده نبلع؛ مرز rollback و retry را رعایت کن.",
      "دو insert همزمان یک external_id را اجرا کن؛ مشخص کن update مجاز است یا باید conflict بدهد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو insert همزمان یک external_id را اجرا کن؛ مشخص کن update مجاز است یا باید conflict بدهد.",
      "acceptanceCriteria": [
        "دو insert همزمان یک external_id را اجرا کن؛ مشخص کن update مجاز است یا باید conflict بدهد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "unique violation را در transaction شکست‌خورده نبلع؛ مرز rollback و retry را رعایت کن."
      ],
      "solution": {
        "code": "INSERT INTO customers(external_id, name) VALUES (:id, :name)\nON CONFLICT (external_id) DO UPDATE SET name = EXCLUDED.name;",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ unique constraint هنوز لازم است. unique violation را در transaction شکست‌خورده نبلع؛ مرز rollback و retry را رعایت کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-071",
        "question": "وجود یک SELECT پیش از INSERT جلوی duplicate را تضمین می‌کند؟",
        "options": [
          "بله؛ حتی در چند connection",
          "بله؛ اگر اسم متد exists باشد",
          "خیر؛ unique constraint هنوز لازم است"
        ],
        "correctIndex": 2,
        "explanation": "خیر؛ unique constraint هنوز لازم است. Unique constraint تصمیم رقابت را در DB انجام می‌دهد. Upsert سیاست تعارض را صریح می‌کند؛ DO UPDATE ممکن است داده قبلی را بازنویسی کند و برای idempotency همیشه مطلوب نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: وجود یک SELECT پیش از INSERT جلوی duplicate را تضمین می‌کند؟",
        "answer": "خیر؛ unique constraint هنوز لازم است. unique violation را در transaction شکست‌خورده نبلع؛ مرز rollback و retry را رعایت کن."
      }
    ],
    "summary": "Unique constraint تصمیم رقابت را در DB انجام می‌دهد. Upsert سیاست تعارض را صریح می‌کند؛ DO UPDATE ممکن است داده قبلی را بازنویسی کند و برای idempotency همیشه مطلوب نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/ddl-constraints.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-072",
    "slug": "database-backup-and-migration-rollback",
    "week": 12,
    "day": 6,
    "title": "فرآیند بکاپ‌گیری، آزمون بازیابی و بازگشت از مایگریشن‌ها",
    "titleEn": "Database Backup and Migration Rollback",
    "description": "روش‌های امن بازگشت از اسکریپت‌های ناقص Flyway، استراتژی‌های تهیه پشتیبان pg_dump و ارزیابی زمان بازیابی (RTO/RPO).",
    "category": "Database",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Database Recovery",
      "Backups",
      "Rollback",
      "Disaster Recovery"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 11",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "مهم‌ترین شاهد قابل استفاده‌بودن backup چیست",
      "backup را در DB جدا restore کن؛ تعداد ردیف، constraints و یک query تجاری را بررسی کن."
    ],
    "whyItMatters": "فرمان restore را روی DB مقصد واقعی بی‌برنامه اجرا نکن؛ --clean اشیای موجود را حذف می‌کند.",
    "introduction": "روش‌های امن بازگشت از اسکریپت‌های ناقص Flyway، استراتژی‌های تهیه پشتیبان pg_dump و ارزیابی زمان بازیابی (RTO/RPO).",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Backup بدون آزمایش restore تضمین بازیابی نیست. RPO میزان داده قابل ازدست‌رفتن و RTO زمان بازیابی قابل قبول است. rollback کد با rollback schema یکی نیست؛ بسیاری تغییرها migration رو به جلو می‌خواهند."
      }
    ],
    "realWorldScenario": {
      "scenario": "backup را در DB جدا restore کن؛ تعداد ردیف، constraints و یک query تجاری را بررسی کن.",
      "solution": "فرمان restore را روی DB مقصد واقعی بی‌برنامه اجرا نکن؛ --clean اشیای موجود را حذف می‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "bash",
        "code": "pg_dump -Fc -h localhost -U orders -d orders -f orders.dump\npg_restore --clean --if-exists -h localhost -U orders -d orders_restore orders.dump",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Database Backup and Migration Rollback",
      "explanation": "قواعد SQL و ظرفیت DB در هر دو پشته مشترک‌اند؛ تفاوت اصلی در مدیریت context، pool و migration است، نه قدرت جادویی زبان Java."
    },
    "commonMistakes": [
      {
        "mistake": "فرمان restore را روی DB مقصد واقعی بی‌برنامه اجرا نکن؛ --clean اشیای موجود را حذف می‌کند.",
        "whyBad": "Backup بدون آزمایش restore تضمین بازیابی نیست. RPO میزان داده قابل ازدست‌رفتن و RTO زمان بازیابی قابل قبول است. rollback کد با rollback schema یکی نیست؛ بسیاری تغییرها migration رو به جلو می‌خواهند.",
        "solution": "restore موفق و بررسی داده و رفتار"
      }
    ],
    "bestPractices": [
      "فرمان restore را روی DB مقصد واقعی بی‌برنامه اجرا نکن؛ --clean اشیای موجود را حذف می‌کند.",
      "backup را در DB جدا restore کن؛ تعداد ردیف، constraints و یک query تجاری را بررسی کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "backup را در DB جدا restore کن؛ تعداد ردیف، constraints و یک query تجاری را بررسی کن.",
      "acceptanceCriteria": [
        "backup را در DB جدا restore کن؛ تعداد ردیف، constraints و یک query تجاری را بررسی کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "فرمان restore را روی DB مقصد واقعی بی‌برنامه اجرا نکن؛ --clean اشیای موجود را حذف می‌کند."
      ],
      "solution": {
        "code": "pg_dump -Fc -h localhost -U orders -d orders -f orders.dump\npg_restore --clean --if-exists -h localhost -U orders -d orders_restore orders.dump",
        "language": "bash",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. restore موفق و بررسی داده و رفتار. فرمان restore را روی DB مقصد واقعی بی‌برنامه اجرا نکن؛ --clean اشیای موجود را حذف می‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-072",
        "question": "مهم‌ترین شاهد قابل استفاده‌بودن backup چیست؟",
        "options": [
          "restore موفق و بررسی داده و رفتار",
          "صرف وجود فایل با پسوند dump",
          "بزرگ‌بودن اندازه فایل backup"
        ],
        "correctIndex": 0,
        "explanation": "restore موفق و بررسی داده و رفتار. Backup بدون آزمایش restore تضمین بازیابی نیست. RPO میزان داده قابل ازدست‌رفتن و RTO زمان بازیابی قابل قبول است. rollback کد با rollback schema یکی نیست؛ بسیاری تغییرها migration رو به جلو می‌خواهند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: مهم‌ترین شاهد قابل استفاده‌بودن backup چیست؟",
        "answer": "restore موفق و بررسی داده و رفتار. فرمان restore را روی DB مقصد واقعی بی‌برنامه اجرا نکن؛ --clean اشیای موجود را حذف می‌کند."
      }
    ],
    "summary": "Backup بدون آزمایش restore تضمین بازیابی نیست. RPO میزان داده قابل ازدست‌رفتن و RTO زمان بازیابی قابل قبول است. rollback کد با rollback schema یکی نیست؛ بسیاری تغییرها migration رو به جلو می‌خواهند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/ddl-constraints.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
