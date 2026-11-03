import { Lesson } from "../types";

export const WEEK_25_LESSONS: Lesson[] = [
  {
    "id": "lesson-145",
    "slug": "graceful-shutdown",
    "week": 25,
    "day": 1,
    "title": "خاموش‌سازی امن و بدون خطا (Graceful Shutdown) در وب‌سرورهای اسپرینگ",
    "titleEn": "Graceful Shutdown",
    "description": "پیکربندی server.shutdown=graceful، مهلت دادن به پردازش تراکنش‌های در حال اجرا و جلوگیری از قطع ناگهانی درخواست مشتریان.",
    "category": "Production",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Graceful Shutdown",
      "High Availability",
      "Production Stability"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 24",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا stop timeout باید با graceful shutdown هماهنگ باشد",
      "در حین یک درخواست کند SIGTERM بده؛ در deadline مجاز درخواست تمام و کار جدید پذیرفته نشود."
    ],
    "whyItMatters": "کار async و consumer نیز lifecycle جدا دارند؛ فقط HTTP را بررسی نکن.",
    "introduction": "پیکربندی server.shutdown=graceful، مهلت دادن به پردازش تراکنش‌های در حال اجرا و جلوگیری از قطع ناگهانی درخواست مشتریان.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "SIGTERM باید فرصت پایان درخواست‌های درحال‌اجرا را بدهد. ابتدا از routing خارج شو و سپس با deadline منطقی shutdown کن. زمان توقف container باید از بودجه drain کوتاه‌تر نباشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "در حین یک درخواست کند SIGTERM بده؛ در deadline مجاز درخواست تمام و کار جدید پذیرفته نشود.",
      "solution": "کار async و consumer نیز lifecycle جدا دارند؛ فقط HTTP را بررسی نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "server:\n  shutdown: graceful\nspring:\n  lifecycle:\n    timeout-per-shutdown-phase: 20s",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Graceful Shutdown",
      "explanation": "مهارت عملیات Node منتقل می‌شود؛ برای Java به heap/native memory، GC، thread و زمان drain نیز نگاه کن. با شواهد تغییر بده، نه حدس."
    },
    "commonMistakes": [
      {
        "mistake": "کار async و consumer نیز lifecycle جدا دارند؛ فقط HTTP را بررسی نکن.",
        "whyBad": "SIGTERM باید فرصت پایان درخواست‌های درحال‌اجرا را بدهد. ابتدا از routing خارج شو و سپس با deadline منطقی shutdown کن. زمان توقف container باید از بودجه drain کوتاه‌تر نباشد.",
        "solution": "تا SIGKILL زودهنگام کارهای درحال‌اجرا را قطع نکند"
      }
    ],
    "bestPractices": [
      "کار async و consumer نیز lifecycle جدا دارند؛ فقط HTTP را بررسی نکن.",
      "در حین یک درخواست کند SIGTERM بده؛ در deadline مجاز درخواست تمام و کار جدید پذیرفته نشود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "در حین یک درخواست کند SIGTERM بده؛ در deadline مجاز درخواست تمام و کار جدید پذیرفته نشود.",
      "acceptanceCriteria": [
        "در حین یک درخواست کند SIGTERM بده؛ در deadline مجاز درخواست تمام و کار جدید پذیرفته نشود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "کار async و consumer نیز lifecycle جدا دارند؛ فقط HTTP را بررسی نکن."
      ],
      "solution": {
        "code": "server:\n  shutdown: graceful\nspring:\n  lifecycle:\n    timeout-per-shutdown-phase: 20s",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تا SIGKILL زودهنگام کارهای درحال‌اجرا را قطع نکند. کار async و consumer نیز lifecycle جدا دارند؛ فقط HTTP را بررسی نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-145",
        "question": "چرا stop timeout باید با graceful shutdown هماهنگ باشد؟",
        "options": [
          "برای افزایش خودکار حجم heap",
          "تا SIGKILL زودهنگام کارهای درحال‌اجرا را قطع نکند",
          "برای خاموش‌کردن validation"
        ],
        "correctIndex": 1,
        "explanation": "تا SIGKILL زودهنگام کارهای درحال‌اجرا را قطع نکند. SIGTERM باید فرصت پایان درخواست‌های درحال‌اجرا را بدهد. ابتدا از routing خارج شو و سپس با deadline منطقی shutdown کن. زمان توقف container باید از بودجه drain کوتاه‌تر نباشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا stop timeout باید با graceful shutdown هماهنگ باشد؟",
        "answer": "تا SIGKILL زودهنگام کارهای درحال‌اجرا را قطع نکند. کار async و consumer نیز lifecycle جدا دارند؛ فقط HTTP را بررسی نکن."
      }
    ],
    "summary": "SIGTERM باید فرصت پایان درخواست‌های درحال‌اجرا را بدهد. ابتدا از routing خارج شو و سپس با deadline منطقی shutdown کن. زمان توقف container باید از بودجه drain کوتاه‌تر نباشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/web/graceful-shutdown.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-146",
    "slug": "performance-and-jvm-tuning",
    "week": 25,
    "day": 2,
    "title": "تیونینگ پیشرفته JVM و تنظیم پارامترهای حافظه برای ترافیک بالا",
    "titleEn": "Performance and JVM Tuning",
    "description": "تنظیم پارامترهای جمع‌آوری زباله G1 (مانند MaxGCPauseMillis)، تخصیص بهینه Metaspace و مدیریت مستقیم حافظه Off-Heap.",
    "category": "Production",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "JVM Tuning",
      "G1GC Tuning",
      "Metaspace",
      "Production Performance"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 24",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای query کند اولین درمان منطقی چیست",
      "یک run ثابت را دو بار با تنها یک تغییر اجرا کن؛ p95، error و حافظه را ثبت کن."
    ],
    "whyItMatters": "نتیجه benchmark لپ‌تاپ را به SLA production تبدیل نکن.",
    "introduction": "تنظیم پارامترهای جمع‌آوری زباله G1 (مانند MaxGCPauseMillis)، تخصیص بهینه Metaspace و مدیریت مستقیم حافظه Off-Heap.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "تیونینگ با baseline و یک فرضیه آغاز می‌شود؛ همزمان چند flag عوض نکن. pause، throughput، allocation و RSS را با نیاز کاربر بسنج. GC متفاوت درمان query کند یا صف pool اشباع نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک run ثابت را دو بار با تنها یک تغییر اجرا کن؛ p95، error و حافظه را ثبت کن.",
      "solution": "نتیجه benchmark لپ‌تاپ را به SLA production تبدیل نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "bash",
        "code": "java -Xlog:gc*:file=/tmp/gc.log -XX:StartFlightRecording=duration=60s,filename=/tmp/run.jfr -jar app.jar",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Performance and JVM Tuning",
      "explanation": "مهارت عملیات Node منتقل می‌شود؛ برای Java به heap/native memory، GC، thread و زمان drain نیز نگاه کن. با شواهد تغییر بده، نه حدس."
    },
    "commonMistakes": [
      {
        "mistake": "نتیجه benchmark لپ‌تاپ را به SLA production تبدیل نکن.",
        "whyBad": "تیونینگ با baseline و یک فرضیه آغاز می‌شود؛ همزمان چند flag عوض نکن. pause، throughput، allocation و RSS را با نیاز کاربر بسنج. GC متفاوت درمان query کند یا صف pool اشباع نیست.",
        "solution": "تحلیل query و زمان انتظار، نه تغییر تصادفی GC"
      }
    ],
    "bestPractices": [
      "نتیجه benchmark لپ‌تاپ را به SLA production تبدیل نکن.",
      "یک run ثابت را دو بار با تنها یک تغییر اجرا کن؛ p95، error و حافظه را ثبت کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک run ثابت را دو بار با تنها یک تغییر اجرا کن؛ p95، error و حافظه را ثبت کن.",
      "acceptanceCriteria": [
        "یک run ثابت را دو بار با تنها یک تغییر اجرا کن؛ p95، error و حافظه را ثبت کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "نتیجه benchmark لپ‌تاپ را به SLA production تبدیل نکن."
      ],
      "solution": {
        "code": "java -Xlog:gc*:file=/tmp/gc.log -XX:StartFlightRecording=duration=60s,filename=/tmp/run.jfr -jar app.jar",
        "language": "bash",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تحلیل query و زمان انتظار، نه تغییر تصادفی GC. نتیجه benchmark لپ‌تاپ را به SLA production تبدیل نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-146",
        "question": "برای query کند اولین درمان منطقی چیست؟",
        "options": [
          "همیشه افزایش تعداد GC thread",
          "خاموش‌کردن تمام monitoring",
          "تحلیل query و زمان انتظار، نه تغییر تصادفی GC"
        ],
        "correctIndex": 2,
        "explanation": "تحلیل query و زمان انتظار، نه تغییر تصادفی GC. تیونینگ با baseline و یک فرضیه آغاز می‌شود؛ همزمان چند flag عوض نکن. pause، throughput، allocation و RSS را با نیاز کاربر بسنج. GC متفاوت درمان query کند یا صف pool اشباع نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای query کند اولین درمان منطقی چیست؟",
        "answer": "تحلیل query و زمان انتظار، نه تغییر تصادفی GC. نتیجه benchmark لپ‌تاپ را به SLA production تبدیل نکن."
      }
    ],
    "summary": "تیونینگ با baseline و یک فرضیه آغاز می‌شود؛ همزمان چند flag عوض نکن. pause، throughput، allocation و RSS را با نیاز کاربر بسنج. GC متفاوت درمان query کند یا صف pool اشباع نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/web/graceful-shutdown.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-147",
    "slug": "threat-modeling-and-failure-testing",
    "week": 25,
    "day": 3,
    "title": "مدل‌سازی تهدیدات امنیتی و تست تزریق خطای عمدی (Chaos Engineering)",
    "titleEn": "Threat Modeling and Failure Testing",
    "description": "آزمون مقاومت سرویس با تزریق تاخیر عمدی دیتابیس و شبیه‌سازی قطعی قطب‌های ارتباطی جهت اثبات پایداری نرم‌افزار.",
    "category": "Production",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Chaos Engineering",
      "Threat Modeling",
      "Fault Injection"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 24",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آزمایش failure امن چه ویژگی دارد",
      "سه تهدید و سه failure برای checkout بنویس؛ برای هرکدام کنترل و شاهد تست مشخص کن."
    ],
    "whyItMatters": "فهرست ابزار امنیتی جای تحلیل مرز اعتماد و مالکیت داده را نمی‌گیرد.",
    "introduction": "آزمون مقاومت سرویس با تزریق تاخیر عمدی دیتابیس و شبیه‌سازی قطعی قطب‌های ارتباطی جهت اثبات پایداری نرم‌افزار.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Threat model دارایی، مرز اعتماد، مهاجم و مسیر سوءاستفاده را مشخص می‌کند. failure test می‌سنجد سیستم زیر قطع شبکه، DB کند یا پیام تکراری چه می‌کند. آزمایش باید محدود، قابل توقف و ترجیحاً محیط جدا باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "سه تهدید و سه failure برای checkout بنویس؛ برای هرکدام کنترل و شاهد تست مشخص کن.",
      "solution": "فهرست ابزار امنیتی جای تحلیل مرز اعتماد و مالکیت داده را نمی‌گیرد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Asset: customer order data\nBoundary: authenticated API -> order lookup\nThreat: user A reads user B order\nControl: principal-scoped query + authorization tests",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Threat Modeling and Failure Testing",
      "explanation": "مهارت عملیات Node منتقل می‌شود؛ برای Java به heap/native memory، GC، thread و زمان drain نیز نگاه کن. با شواهد تغییر بده، نه حدس."
    },
    "commonMistakes": [
      {
        "mistake": "فهرست ابزار امنیتی جای تحلیل مرز اعتماد و مالکیت داده را نمی‌گیرد.",
        "whyBad": "Threat model دارایی، مرز اعتماد، مهاجم و مسیر سوءاستفاده را مشخص می‌کند. failure test می‌سنجد سیستم زیر قطع شبکه، DB کند یا پیام تکراری چه می‌کند. آزمایش باید محدود، قابل توقف و ترجیحاً محیط جدا باشد.",
        "solution": "دامنه محدود، rollback/stop plan و مشاهده‌پذیری"
      }
    ],
    "bestPractices": [
      "فهرست ابزار امنیتی جای تحلیل مرز اعتماد و مالکیت داده را نمی‌گیرد.",
      "سه تهدید و سه failure برای checkout بنویس؛ برای هرکدام کنترل و شاهد تست مشخص کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "سه تهدید و سه failure برای checkout بنویس؛ برای هرکدام کنترل و شاهد تست مشخص کن.",
      "acceptanceCriteria": [
        "سه تهدید و سه failure برای checkout بنویس؛ برای هرکدام کنترل و شاهد تست مشخص کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "فهرست ابزار امنیتی جای تحلیل مرز اعتماد و مالکیت داده را نمی‌گیرد."
      ],
      "solution": {
        "code": "Asset: customer order data\nBoundary: authenticated API -> order lookup\nThreat: user A reads user B order\nControl: principal-scoped query + authorization tests",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. دامنه محدود، rollback/stop plan و مشاهده‌پذیری. فهرست ابزار امنیتی جای تحلیل مرز اعتماد و مالکیت داده را نمی‌گیرد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-147",
        "question": "آزمایش failure امن چه ویژگی دارد؟",
        "options": [
          "دامنه محدود، rollback/stop plan و مشاهده‌پذیری",
          "قطع تصادفی سرویس واقعی بدون هماهنگی",
          "فقط پنهان‌کردن exceptionها از log"
        ],
        "correctIndex": 0,
        "explanation": "دامنه محدود، rollback/stop plan و مشاهده‌پذیری. Threat model دارایی، مرز اعتماد، مهاجم و مسیر سوءاستفاده را مشخص می‌کند. failure test می‌سنجد سیستم زیر قطع شبکه، DB کند یا پیام تکراری چه می‌کند. آزمایش باید محدود، قابل توقف و ترجیحاً محیط جدا باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آزمایش failure امن چه ویژگی دارد؟",
        "answer": "دامنه محدود، rollback/stop plan و مشاهده‌پذیری. فهرست ابزار امنیتی جای تحلیل مرز اعتماد و مالکیت داده را نمی‌گیرد."
      }
    ],
    "summary": "Threat model دارایی، مرز اعتماد، مهاجم و مسیر سوءاستفاده را مشخص می‌کند. failure test می‌سنجد سیستم زیر قطع شبکه، DB کند یا پیام تکراری چه می‌کند. آزمایش باید محدود، قابل توقف و ترجیحاً محیط جدا باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/web/graceful-shutdown.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-148",
    "slug": "fixing-application-bottlenecks",
    "week": 25,
    "day": 4,
    "title": "شناسایی و رفع گلوگاه‌های حافظه و پردازش در پروژه سفارشات (پروژه محوری)",
    "titleEn": "Fixing Application Bottlenecks",
    "description": "تحلیل گزارش بارگذاری همزمان ۵۰۰۰ کاربر، رفع نشست‌های احتمالی حافظه و رساندن زمان پاسخدهی به استانداردهای سازمانی.",
    "category": "Production",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Performance Fix",
      "Bottleneck Elimination"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 24",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "بهبود قابل دفاع چه شواهدی دارد",
      "گزارش قبل/بعد با workload یکسان بساز؛ اگر فرضیه رد شد آن را ثبت و تغییر بی‌فایده را برگردان."
    ],
    "whyItMatters": "بهینه‌سازی نباید correctness مانند کنترل موجودی را قربانی کند.",
    "introduction": "تحلیل گزارش بارگذاری همزمان ۵۰۰۰ کاربر، رفع نشست‌های احتمالی حافظه و رساندن زمان پاسخدهی به استانداردهای سازمانی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Bottleneck را از trace و profiling پیدا و با یک تغییر کوچک درمان کن. اگر pool DB اشباع است، اول مدت query و transaction را ببین؛ زیادکردن pool ممکن است رقابت را بیشتر کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "گزارش قبل/بعد با workload یکسان بساز؛ اگر فرضیه رد شد آن را ثبت و تغییر بی‌فایده را برگردان.",
      "solution": "بهینه‌سازی نباید correctness مانند کنترل موجودی را قربانی کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Hypothesis: N+1 extends DB connection hold time\nChange: projection + bounded page\nVerify: query count, pool wait, p95, error rate under same load",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Fixing Application Bottlenecks",
      "explanation": "مهارت عملیات Node منتقل می‌شود؛ برای Java به heap/native memory، GC، thread و زمان drain نیز نگاه کن. با شواهد تغییر بده، نه حدس."
    },
    "commonMistakes": [
      {
        "mistake": "بهینه‌سازی نباید correctness مانند کنترل موجودی را قربانی کند.",
        "whyBad": "Bottleneck را از trace و profiling پیدا و با یک تغییر کوچک درمان کن. اگر pool DB اشباع است، اول مدت query و transaction را ببین؛ زیادکردن pool ممکن است رقابت را بیشتر کند.",
        "solution": "مقایسه کنترل‌شده با خطا و latency و throughput"
      }
    ],
    "bestPractices": [
      "بهینه‌سازی نباید correctness مانند کنترل موجودی را قربانی کند.",
      "گزارش قبل/بعد با workload یکسان بساز؛ اگر فرضیه رد شد آن را ثبت و تغییر بی‌فایده را برگردان."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "گزارش قبل/بعد با workload یکسان بساز؛ اگر فرضیه رد شد آن را ثبت و تغییر بی‌فایده را برگردان.",
      "acceptanceCriteria": [
        "گزارش قبل/بعد با workload یکسان بساز؛ اگر فرضیه رد شد آن را ثبت و تغییر بی‌فایده را برگردان.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "بهینه‌سازی نباید correctness مانند کنترل موجودی را قربانی کند."
      ],
      "solution": {
        "code": "Hypothesis: N+1 extends DB connection hold time\nChange: projection + bounded page\nVerify: query count, pool wait, p95, error rate under same load",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. مقایسه کنترل‌شده با خطا و latency و throughput. بهینه‌سازی نباید correctness مانند کنترل موجودی را قربانی کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-148",
        "question": "بهبود قابل دفاع چه شواهدی دارد؟",
        "options": [
          "فقط احساس سریع‌ترشدن یک reload",
          "مقایسه کنترل‌شده با خطا و latency و throughput",
          "یک عدد بدون شرح محیط"
        ],
        "correctIndex": 1,
        "explanation": "مقایسه کنترل‌شده با خطا و latency و throughput. Bottleneck را از trace و profiling پیدا و با یک تغییر کوچک درمان کن. اگر pool DB اشباع است، اول مدت query و transaction را ببین؛ زیادکردن pool ممکن است رقابت را بیشتر کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: بهبود قابل دفاع چه شواهدی دارد؟",
        "answer": "مقایسه کنترل‌شده با خطا و latency و throughput. بهینه‌سازی نباید correctness مانند کنترل موجودی را قربانی کند."
      }
    ],
    "summary": "Bottleneck را از trace و profiling پیدا و با یک تغییر کوچک درمان کن. اگر pool DB اشباع است، اول مدت query و transaction را ببین؛ زیادکردن pool ممکن است رقابت را بیشتر کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/web/graceful-shutdown.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-149",
    "slug": "runbooks-and-incident-response",
    "week": 25,
    "day": 5,
    "title": "نگارش کتابچه‌های راهنمای عملیات (Runbooks) و مدیریت بحران حوادث",
    "titleEn": "Runbooks and Incident Response",
    "description": "تدوین دستورالعمل‌های شفاف برای شیفت‌های پاسخ به بحران، ساختارهای عیب‌یابی در قطعی سرویس و تحلیل پس از حادثه (Post-mortem).",
    "category": "Production",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Runbooks",
      "Incident Response",
      "Post-mortem",
      "Site Reliability"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 24",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "اولویت پاسخ حادثه چیست",
      "برای backlog صف یک runbook یک‌صفحه‌ای بنویس؛ purge بدون بررسی نباید اقدام پیش‌فرض باشد."
    ],
    "whyItMatters": "در گزارش حادثه secret یا داده شخصی مشتری را بازنشر نکن.",
    "introduction": "تدوین دستورالعمل‌های شفاف برای شیفت‌های پاسخ به بحران، ساختارهای عیب‌یابی در قطعی سرویس و تحلیل پس از حادثه (Post-mortem).",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Runbook برای حادثه باید علائم، بررسی‌های کم‌خطر، اقدام و escalation داشته باشد. ابتدا اثر کاربر و scope را مشخص کن؛ تغییرات را ثبت کن تا علت و recovery قابل پیگیری بماند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای backlog صف یک runbook یک‌صفحه‌ای بنویس؛ purge بدون بررسی نباید اقدام پیش‌فرض باشد.",
      "solution": "در گزارش حادثه secret یا داده شخصی مشتری را بازنشر نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "markdown",
        "code": "# Checkout latency incident\n1. Check error rate and dependency latency.\n2. Compare DB pool wait and active queries.\n3. Stop the rollout if regression began after deploy.\n4. Escalate to the service owner; preserve relevant traces.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Runbooks and Incident Response",
      "explanation": "مهارت عملیات Node منتقل می‌شود؛ برای Java به heap/native memory، GC، thread و زمان drain نیز نگاه کن. با شواهد تغییر بده، نه حدس."
    },
    "commonMistakes": [
      {
        "mistake": "در گزارش حادثه secret یا داده شخصی مشتری را بازنشر نکن.",
        "whyBad": "Runbook برای حادثه باید علائم، بررسی‌های کم‌خطر، اقدام و escalation داشته باشد. ابتدا اثر کاربر و scope را مشخص کن؛ تغییرات را ثبت کن تا علت و recovery قابل پیگیری بماند.",
        "solution": "کاهش اثر کاربر با اقدام قابل کنترل و شواهد"
      }
    ],
    "bestPractices": [
      "در گزارش حادثه secret یا داده شخصی مشتری را بازنشر نکن.",
      "برای backlog صف یک runbook یک‌صفحه‌ای بنویس؛ purge بدون بررسی نباید اقدام پیش‌فرض باشد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای backlog صف یک runbook یک‌صفحه‌ای بنویس؛ purge بدون بررسی نباید اقدام پیش‌فرض باشد.",
      "acceptanceCriteria": [
        "برای backlog صف یک runbook یک‌صفحه‌ای بنویس؛ purge بدون بررسی نباید اقدام پیش‌فرض باشد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "در گزارش حادثه secret یا داده شخصی مشتری را بازنشر نکن."
      ],
      "solution": {
        "code": "# Checkout latency incident\n1. Check error rate and dependency latency.\n2. Compare DB pool wait and active queries.\n3. Stop the rollout if regression began after deploy.\n4. Escalate to the service owner; preserve relevant traces.",
        "language": "markdown",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. کاهش اثر کاربر با اقدام قابل کنترل و شواهد. در گزارش حادثه secret یا داده شخصی مشتری را بازنشر نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-149",
        "question": "اولویت پاسخ حادثه چیست؟",
        "options": [
          "اثبات مقصر پیش از بازیابی",
          "حذف logها برای کاهش خطاهای dashboard",
          "کاهش اثر کاربر با اقدام قابل کنترل و شواهد"
        ],
        "correctIndex": 2,
        "explanation": "کاهش اثر کاربر با اقدام قابل کنترل و شواهد. Runbook برای حادثه باید علائم، بررسی‌های کم‌خطر، اقدام و escalation داشته باشد. ابتدا اثر کاربر و scope را مشخص کن؛ تغییرات را ثبت کن تا علت و recovery قابل پیگیری بماند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: اولویت پاسخ حادثه چیست؟",
        "answer": "کاهش اثر کاربر با اقدام قابل کنترل و شواهد. در گزارش حادثه secret یا داده شخصی مشتری را بازنشر نکن."
      }
    ],
    "summary": "Runbook برای حادثه باید علائم، بررسی‌های کم‌خطر، اقدام و escalation داشته باشد. ابتدا اثر کاربر و scope را مشخص کن؛ تغییرات را ثبت کن تا علت و recovery قابل پیگیری بماند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/web/graceful-shutdown.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-150",
    "slug": "production-readiness-checklist",
    "week": 25,
    "day": 6,
    "title": "چک‌لیست ۵۰ بندی آمادگی استقرار پروداکشن برای سرویس‌های تجاری",
    "titleEn": "Production Readiness Checklist",
    "description": "ارزیابی جامع امنیت، مانیتورینگ، بکاپ، تنظیمات حافظه، تست و کارایی قبل از باز شدن دسترسی برای عموم کاربران.",
    "category": "Production",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Production Checklist",
      "Go-Live",
      "Enterprise Standards"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 24",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چه چیزی شاهد آمادگی واقعی است",
      "برای پروژه خود به هر مورد لینک log، تست یا سند بده؛ موارد اجرا‌نشده را صریح علامت بزن."
    ],
    "whyItMatters": "امنیت آموزشی ساده و محیط local را از تنظیمات production تفکیک کن.",
    "introduction": "ارزیابی جامع امنیت، مانیتورینگ، بکاپ، تنظیمات حافظه، تست و کارایی قبل از باز شدن دسترسی برای عموم کاربران.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "آمادگی انتشار از build سبز فراتر است: rollback، backup restore، کنترل دسترسی، observability و محدودیت منابع لازم‌اند. هر مورد checklist باید شاهد داشته باشد؛ برچسب production-ready بدون اجرا معتبر نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای پروژه خود به هر مورد لینک log، تست یا سند بده؛ موارد اجرا‌نشده را صریح علامت بزن.",
      "solution": "امنیت آموزشی ساده و محیط local را از تنظیمات production تفکیک کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Release evidence:\n- tests and migration rehearsal\n- authentication + ownership checks\n- restore rehearsal\n- load/error budget baseline\n- rollback/runbook owner",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Production Readiness Checklist",
      "explanation": "مهارت عملیات Node منتقل می‌شود؛ برای Java به heap/native memory، GC، thread و زمان drain نیز نگاه کن. با شواهد تغییر بده، نه حدس."
    },
    "commonMistakes": [
      {
        "mistake": "امنیت آموزشی ساده و محیط local را از تنظیمات production تفکیک کن.",
        "whyBad": "آمادگی انتشار از build سبز فراتر است: rollback، backup restore، کنترل دسترسی، observability و محدودیت منابع لازم‌اند. هر مورد checklist باید شاهد داشته باشد؛ برچسب production-ready بدون اجرا معتبر نیست.",
        "solution": "تست و rehearsal ثبت‌شده برای ریسک‌های مهم"
      }
    ],
    "bestPractices": [
      "امنیت آموزشی ساده و محیط local را از تنظیمات production تفکیک کن.",
      "برای پروژه خود به هر مورد لینک log، تست یا سند بده؛ موارد اجرا‌نشده را صریح علامت بزن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای پروژه خود به هر مورد لینک log، تست یا سند بده؛ موارد اجرا‌نشده را صریح علامت بزن.",
      "acceptanceCriteria": [
        "برای پروژه خود به هر مورد لینک log، تست یا سند بده؛ موارد اجرا‌نشده را صریح علامت بزن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "امنیت آموزشی ساده و محیط local را از تنظیمات production تفکیک کن."
      ],
      "solution": {
        "code": "Release evidence:\n- tests and migration rehearsal\n- authentication + ownership checks\n- restore rehearsal\n- load/error budget baseline\n- rollback/runbook owner",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تست و rehearsal ثبت‌شده برای ریسک‌های مهم. امنیت آموزشی ساده و محیط local را از تنظیمات production تفکیک کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-150",
        "question": "چه چیزی شاهد آمادگی واقعی است؟",
        "options": [
          "تست و rehearsal ثبت‌شده برای ریسک‌های مهم",
          "فقط عبارت enterprise در README",
          "فقط زیادبودن تعداد کلاس‌ها"
        ],
        "correctIndex": 0,
        "explanation": "تست و rehearsal ثبت‌شده برای ریسک‌های مهم. آمادگی انتشار از build سبز فراتر است: rollback، backup restore، کنترل دسترسی، observability و محدودیت منابع لازم‌اند. هر مورد checklist باید شاهد داشته باشد؛ برچسب production-ready بدون اجرا معتبر نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چه چیزی شاهد آمادگی واقعی است؟",
        "answer": "تست و rehearsal ثبت‌شده برای ریسک‌های مهم. امنیت آموزشی ساده و محیط local را از تنظیمات production تفکیک کن."
      }
    ],
    "summary": "آمادگی انتشار از build سبز فراتر است: rollback، backup restore، کنترل دسترسی، observability و محدودیت منابع لازم‌اند. هر مورد checklist باید شاهد داشته باشد؛ برچسب production-ready بدون اجرا معتبر نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/web/graceful-shutdown.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
