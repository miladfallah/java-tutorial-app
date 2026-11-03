import { Lesson } from "../types";

export const WEEK_16_LESSONS: Lesson[] = [
  {
    "id": "lesson-091",
    "slug": "timeouts-and-retries",
    "week": 16,
    "day": 1,
    "title": "مدیریت مهلت زمان (Timeouts) و تلاش مجدد (Retries) هوشمند",
    "titleEn": "Timeouts and Retries",
    "description": "تنظیم مهلت پاسخ سرویس‌های خارجی، استراتژی Exponential Backoff و اضافه کردن Jitter جهت جلوگیری از طوفان ریکوئست‌ها.",
    "category": "Resilience",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Timeouts",
      "Retries",
      "Exponential Backoff",
      "Jitter"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 15",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای retry ثبت سفارش چه چیزی حیاتی است",
      "یک سرور آزمایشی دیرپاسخ بساز؛ timeout و قطع انتظار را مشاهده کن و POST بدون کلید را خودکار retry نکن."
    ],
    "whyItMatters": "Future timeout الزاماً کار زیرین یا درخواست شبکه را لغو نمی‌کند؛ cancellation را بررسی کن.",
    "introduction": "تنظیم مهلت پاسخ سرویس‌های خارجی، استراتژی Exponential Backoff و اضافه کردن Jitter جهت جلوگیری از طوفان ریکوئست‌ها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Timeout بودجه انتظار است؛ connect timeout و response timeout متفاوت‌اند. retry فقط برای شکست موقت و عملیات امن با سقف تلاش، backoff و jitter مناسب است. مجموع تلاش‌ها باید داخل deadline درخواست بماند."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک سرور آزمایشی دیرپاسخ بساز؛ timeout و قطع انتظار را مشاهده کن و POST بدون کلید را خودکار retry نکن.",
      "solution": "Future timeout الزاماً کار زیرین یا درخواست شبکه را لغو نمی‌کند؛ cancellation را بررسی کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "var client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(2)).build();\nvar request = HttpRequest.newBuilder(uri).timeout(Duration.ofSeconds(3)).GET().build();\nvar response = client.send(request, HttpResponse.BodyHandlers.ofString());",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Timeouts and Retries",
      "explanation": "Promise timeout در Node نیز ممکن است کار زیرین را ادامه دهد. در هر دو پشته deadline، cancellation، retry امن و ظرفیت downstream باید مستقل طراحی شوند."
    },
    "commonMistakes": [
      {
        "mistake": "Future timeout الزاماً کار زیرین یا درخواست شبکه را لغو نمی‌کند؛ cancellation را بررسی کن.",
        "whyBad": "Timeout بودجه انتظار است؛ connect timeout و response timeout متفاوت‌اند. retry فقط برای شکست موقت و عملیات امن با سقف تلاش، backoff و jitter مناسب است. مجموع تلاش‌ها باید داخل deadline درخواست بماند.",
        "solution": "سیاست idempotency و بودجه محدود تلاش"
      }
    ],
    "bestPractices": [
      "Future timeout الزاماً کار زیرین یا درخواست شبکه را لغو نمی‌کند؛ cancellation را بررسی کن.",
      "یک سرور آزمایشی دیرپاسخ بساز؛ timeout و قطع انتظار را مشاهده کن و POST بدون کلید را خودکار retry نکن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک سرور آزمایشی دیرپاسخ بساز؛ timeout و قطع انتظار را مشاهده کن و POST بدون کلید را خودکار retry نکن.",
      "acceptanceCriteria": [
        "یک سرور آزمایشی دیرپاسخ بساز؛ timeout و قطع انتظار را مشاهده کن و POST بدون کلید را خودکار retry نکن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "Future timeout الزاماً کار زیرین یا درخواست شبکه را لغو نمی‌کند؛ cancellation را بررسی کن."
      ],
      "solution": {
        "code": "var client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(2)).build();\nvar request = HttpRequest.newBuilder(uri).timeout(Duration.ofSeconds(3)).GET().build();\nvar response = client.send(request, HttpResponse.BodyHandlers.ofString());",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. سیاست idempotency و بودجه محدود تلاش. Future timeout الزاماً کار زیرین یا درخواست شبکه را لغو نمی‌کند؛ cancellation را بررسی کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-091",
        "question": "برای retry ثبت سفارش چه چیزی حیاتی است؟",
        "options": [
          "افزایش بی‌نهایت تعداد تلاش",
          "سیاست idempotency و بودجه محدود تلاش",
          "retry همه خطاهای 400"
        ],
        "correctIndex": 1,
        "explanation": "سیاست idempotency و بودجه محدود تلاش. Timeout بودجه انتظار است؛ connect timeout و response timeout متفاوت‌اند. retry فقط برای شکست موقت و عملیات امن با سقف تلاش، backoff و jitter مناسب است. مجموع تلاش‌ها باید داخل deadline درخواست بماند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای retry ثبت سفارش چه چیزی حیاتی است؟",
        "answer": "سیاست idempotency و بودجه محدود تلاش. Future timeout الزاماً کار زیرین یا درخواست شبکه را لغو نمی‌کند؛ cancellation را بررسی کن."
      }
    ],
    "summary": "Timeout بودجه انتظار است؛ connect timeout و response timeout متفاوت‌اند. retry فقط برای شکست موقت و عملیات امن با سقف تلاش، backoff و jitter مناسب است. مجموع تلاش‌ها باید داخل deadline درخواست بماند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://resilience4j.readme.io/docs/circuitbreaker"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-092",
    "slug": "circuit-breaker-and-bulkhead",
    "week": 16,
    "day": 2,
    "title": "الگوهای مدارشکن (Circuit Breaker) و جداسازی ظرفیت (Bulkhead)",
    "titleEn": "Circuit Breaker and Bulkhead",
    "description": "بررسی وضعیت‌های Closed، Open و Half-Open در مدارشکن و تفکیک منابع پردازشی در برابر ترافیک آسیب‌رسان.",
    "category": "Resilience",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Circuit Breaker",
      "Bulkhead",
      "Fault Tolerance",
      "Architecture"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 15",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "Bulkhead چه چیزی را جدا می‌کند",
      "وابستگی پرداخت را خراب کن و گذار closed/open/half-open را مشاهده کن؛ مسیر مستقل سالم بماند."
    ],
    "whyItMatters": "fallback نباید موفقیت پرداخت جعلی بسازد؛ degraded response باید معنای درست داشته باشد.",
    "introduction": "بررسی وضعیت‌های Closed، Open و Half-Open در مدارشکن و تفکیک منابع پردازشی در برابر ترافیک آسیب‌رسان.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Circuit breaker جلوی فشار تکراری به وابستگی خراب را می‌گیرد؛ bulkhead ظرفیت جدا می‌کند تا خرابی یک مسیر همه سرویس را نخواباند. حالت half-open با تعداد محدود درخواست بازیابی را می‌سنجد."
      }
    ],
    "realWorldScenario": {
      "scenario": "وابستگی پرداخت را خراب کن و گذار closed/open/half-open را مشاهده کن؛ مسیر مستقل سالم بماند.",
      "solution": "fallback نباید موفقیت پرداخت جعلی بسازد؛ degraded response باید معنای درست داشته باشد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "resilience4j:\n  circuitbreaker:\n    instances:\n      payment:\n        slidingWindowSize: 20\n        minimumNumberOfCalls: 10\n        failureRateThreshold: 50",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Circuit Breaker and Bulkhead",
      "explanation": "Promise timeout در Node نیز ممکن است کار زیرین را ادامه دهد. در هر دو پشته deadline، cancellation، retry امن و ظرفیت downstream باید مستقل طراحی شوند."
    },
    "commonMistakes": [
      {
        "mistake": "fallback نباید موفقیت پرداخت جعلی بسازد؛ degraded response باید معنای درست داشته باشد.",
        "whyBad": "Circuit breaker جلوی فشار تکراری به وابستگی خراب را می‌گیرد؛ bulkhead ظرفیت جدا می‌کند تا خرابی یک مسیر همه سرویس را نخواباند. حالت half-open با تعداد محدود درخواست بازیابی را می‌سنجد.",
        "solution": "ظرفیت همزمانی یا منابع مسیرها"
      }
    ],
    "bestPractices": [
      "fallback نباید موفقیت پرداخت جعلی بسازد؛ degraded response باید معنای درست داشته باشد.",
      "وابستگی پرداخت را خراب کن و گذار closed/open/half-open را مشاهده کن؛ مسیر مستقل سالم بماند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "وابستگی پرداخت را خراب کن و گذار closed/open/half-open را مشاهده کن؛ مسیر مستقل سالم بماند.",
      "acceptanceCriteria": [
        "وابستگی پرداخت را خراب کن و گذار closed/open/half-open را مشاهده کن؛ مسیر مستقل سالم بماند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "fallback نباید موفقیت پرداخت جعلی بسازد؛ degraded response باید معنای درست داشته باشد."
      ],
      "solution": {
        "code": "resilience4j:\n  circuitbreaker:\n    instances:\n      payment:\n        slidingWindowSize: 20\n        minimumNumberOfCalls: 10\n        failureRateThreshold: 50",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ظرفیت همزمانی یا منابع مسیرها. fallback نباید موفقیت پرداخت جعلی بسازد؛ degraded response باید معنای درست داشته باشد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-092",
        "question": "Bulkhead چه چیزی را جدا می‌کند؟",
        "options": [
          "schema تمام جدول‌ها",
          "کلیدهای JWT کاربران",
          "ظرفیت همزمانی یا منابع مسیرها"
        ],
        "correctIndex": 2,
        "explanation": "ظرفیت همزمانی یا منابع مسیرها. Circuit breaker جلوی فشار تکراری به وابستگی خراب را می‌گیرد؛ bulkhead ظرفیت جدا می‌کند تا خرابی یک مسیر همه سرویس را نخواباند. حالت half-open با تعداد محدود درخواست بازیابی را می‌سنجد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: Bulkhead چه چیزی را جدا می‌کند؟",
        "answer": "ظرفیت همزمانی یا منابع مسیرها. fallback نباید موفقیت پرداخت جعلی بسازد؛ degraded response باید معنای درست داشته باشد."
      }
    ],
    "summary": "Circuit breaker جلوی فشار تکراری به وابستگی خراب را می‌گیرد؛ bulkhead ظرفیت جدا می‌کند تا خرابی یک مسیر همه سرویس را نخواباند. حالت half-open با تعداد محدود درخواست بازیابی را می‌سنجد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://resilience4j.readme.io/docs/circuitbreaker"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-093",
    "slug": "owasp-api-security",
    "week": 16,
    "day": 3,
    "title": "امنیت وب‌سرویس‌ها بر اساس استانداردهای OWASP API Security Top 10",
    "titleEn": "OWASP API Security",
    "description": "شناسایی آسیب‌پذیری‌های BOLA، Mass Assignment و روش‌های امن‌سازی ورودی‌ها و خروجی‌های سیستم در جاوا.",
    "category": "Resilience",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "OWASP",
      "API Security",
      "BOLA",
      "Security Audit"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 15",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "UUID تصادفی چه چیزی را جایگزین نمی‌کند",
      "با حساب A، id سفارش B را درخواست کن؛ هیچ فیلد خصوصی در response یا log افشا نشود."
    ],
    "whyItMatters": "اعتبارسنجی syntactic ورودی با مجوز دسترسی به همان داده متفاوت است.",
    "introduction": "شناسایی آسیب‌پذیری‌های BOLA، Mass Assignment و روش‌های امن‌سازی ورودی‌ها و خروجی‌های سیستم در جاوا.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "در API، کنترل مالکیت منبع از چک role مهم‌تر هم می‌تواند باشد. شناسه غیرقابل حدس جای authorization نیست. page size، body size و مصرف منابع را محدود کن؛ URL ورودی کاربر می‌تواند ریسک SSRF بسازد."
      }
    ],
    "realWorldScenario": {
      "scenario": "با حساب A، id سفارش B را درخواست کن؛ هیچ فیلد خصوصی در response یا log افشا نشود.",
      "solution": "اعتبارسنجی syntactic ورودی با مجوز دسترسی به همان داده متفاوت است."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "repository.findByIdAndCustomerId(orderId, principal.customerId())\n    .orElseThrow(OrderNotFoundException::new);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "OWASP API Security",
      "explanation": "Promise timeout در Node نیز ممکن است کار زیرین را ادامه دهد. در هر دو پشته deadline، cancellation، retry امن و ظرفیت downstream باید مستقل طراحی شوند."
    },
    "commonMistakes": [
      {
        "mistake": "اعتبارسنجی syntactic ورودی با مجوز دسترسی به همان داده متفاوت است.",
        "whyBad": "در API، کنترل مالکیت منبع از چک role مهم‌تر هم می‌تواند باشد. شناسه غیرقابل حدس جای authorization نیست. page size، body size و مصرف منابع را محدود کن؛ URL ورودی کاربر می‌تواند ریسک SSRF بسازد.",
        "solution": "کنترل مالکیت و authorization"
      }
    ],
    "bestPractices": [
      "اعتبارسنجی syntactic ورودی با مجوز دسترسی به همان داده متفاوت است.",
      "با حساب A، id سفارش B را درخواست کن؛ هیچ فیلد خصوصی در response یا log افشا نشود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با حساب A، id سفارش B را درخواست کن؛ هیچ فیلد خصوصی در response یا log افشا نشود.",
      "acceptanceCriteria": [
        "با حساب A، id سفارش B را درخواست کن؛ هیچ فیلد خصوصی در response یا log افشا نشود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "اعتبارسنجی syntactic ورودی با مجوز دسترسی به همان داده متفاوت است."
      ],
      "solution": {
        "code": "repository.findByIdAndCustomerId(orderId, principal.customerId())\n    .orElseThrow(OrderNotFoundException::new);",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. کنترل مالکیت و authorization. اعتبارسنجی syntactic ورودی با مجوز دسترسی به همان داده متفاوت است."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-093",
        "question": "UUID تصادفی چه چیزی را جایگزین نمی‌کند؟",
        "options": [
          "کنترل مالکیت و authorization",
          "شناسه یکتا در قرارداد",
          "امکان lookup سفارش با id"
        ],
        "correctIndex": 0,
        "explanation": "کنترل مالکیت و authorization. در API، کنترل مالکیت منبع از چک role مهم‌تر هم می‌تواند باشد. شناسه غیرقابل حدس جای authorization نیست. page size، body size و مصرف منابع را محدود کن؛ URL ورودی کاربر می‌تواند ریسک SSRF بسازد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: UUID تصادفی چه چیزی را جایگزین نمی‌کند؟",
        "answer": "کنترل مالکیت و authorization. اعتبارسنجی syntactic ورودی با مجوز دسترسی به همان داده متفاوت است."
      }
    ],
    "summary": "در API، کنترل مالکیت منبع از چک role مهم‌تر هم می‌تواند باشد. شناسه غیرقابل حدس جای authorization نیست. page size، body size و مصرف منابع را محدود کن؛ URL ورودی کاربر می‌تواند ریسک SSRF بسازد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://resilience4j.readme.io/docs/circuitbreaker"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-094",
    "slug": "implementing-resilience4j",
    "week": 16,
    "day": 4,
    "title": "پیاده‌سازی مدارشکن برای سرویس پرداخت سفارشات با Resilience4j (پروژه محوری)",
    "titleEn": "Implementing Resilience4j",
    "description": "تجهیز سرویس شبیه‌سازی پرداخت به Circuit Breaker جهت بازگشت امن در زمان قطع بودن درگاه پرداخت بانکی.",
    "category": "Resilience",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Resilience4j",
      "Payment Circuit Breaker",
      "Fallback"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 15",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کدام failure برای breaker وابستگی پرداخت مرتبط‌تر است",
      "سرور پرداخت را با 503 و سپس بازیابی آزمایش کن؛ validation error نباید breaker را بی‌دلیل باز کند."
    ],
    "whyItMatters": "self-invocation advice را دور می‌زند؛ فقط وجود annotation را تست نکن.",
    "introduction": "تجهیز سرویس شبیه‌سازی پرداخت به Circuit Breaker جهت بازگشت امن در زمان قطع بودن درگاه پرداخت بانکی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "در Resilience4j، name باید به configuration همان instance اشاره کند و AOP dependency فعال باشد. exceptionهای تجاری را بی‌دلیل failure زیرساخت حساب نکن. decorator باید مرز درست فراخوانی بیرونی را احاطه کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "سرور پرداخت را با 503 و سپس بازیابی آزمایش کن؛ validation error نباید breaker را بی‌دلیل باز کند.",
      "solution": "self-invocation advice را دور می‌زند؛ فقط وجود annotation را تست نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@CircuitBreaker(name = \"payment\")\npublic Receipt charge(PaymentRequest request) {\n    return paymentClient.charge(request);\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Implementing Resilience4j",
      "explanation": "Promise timeout در Node نیز ممکن است کار زیرین را ادامه دهد. در هر دو پشته deadline، cancellation، retry امن و ظرفیت downstream باید مستقل طراحی شوند."
    },
    "commonMistakes": [
      {
        "mistake": "self-invocation advice را دور می‌زند؛ فقط وجود annotation را تست نکن.",
        "whyBad": "در Resilience4j، name باید به configuration همان instance اشاره کند و AOP dependency فعال باشد. exceptionهای تجاری را بی‌دلیل failure زیرساخت حساب نکن. decorator باید مرز درست فراخوانی بیرونی را احاطه کند.",
        "solution": "timeout و 503 همان وابستگی"
      }
    ],
    "bestPractices": [
      "self-invocation advice را دور می‌زند؛ فقط وجود annotation را تست نکن.",
      "سرور پرداخت را با 503 و سپس بازیابی آزمایش کن؛ validation error نباید breaker را بی‌دلیل باز کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "سرور پرداخت را با 503 و سپس بازیابی آزمایش کن؛ validation error نباید breaker را بی‌دلیل باز کند.",
      "acceptanceCriteria": [
        "سرور پرداخت را با 503 و سپس بازیابی آزمایش کن؛ validation error نباید breaker را بی‌دلیل باز کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "self-invocation advice را دور می‌زند؛ فقط وجود annotation را تست نکن."
      ],
      "solution": {
        "code": "@CircuitBreaker(name = \"payment\")\npublic Receipt charge(PaymentRequest request) {\n    return paymentClient.charge(request);\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. timeout و 503 همان وابستگی. self-invocation advice را دور می‌زند؛ فقط وجود annotation را تست نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-094",
        "question": "کدام failure برای breaker وابستگی پرداخت مرتبط‌تر است؟",
        "options": [
          "خطای validation مشتری پیش از تماس شبکه",
          "timeout و 503 همان وابستگی",
          "404 یک صفحه نامرتبط سایت"
        ],
        "correctIndex": 1,
        "explanation": "timeout و 503 همان وابستگی. در Resilience4j، name باید به configuration همان instance اشاره کند و AOP dependency فعال باشد. exceptionهای تجاری را بی‌دلیل failure زیرساخت حساب نکن. decorator باید مرز درست فراخوانی بیرونی را احاطه کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کدام failure برای breaker وابستگی پرداخت مرتبط‌تر است؟",
        "answer": "timeout و 503 همان وابستگی. self-invocation advice را دور می‌زند؛ فقط وجود annotation را تست نکن."
      }
    ],
    "summary": "در Resilience4j، name باید به configuration همان instance اشاره کند و AOP dependency فعال باشد. exceptionهای تجاری را بی‌دلیل failure زیرساخت حساب نکن. decorator باید مرز درست فراخوانی بیرونی را احاطه کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://resilience4j.readme.io/docs/circuitbreaker"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-095",
    "slug": "rate-limiting",
    "week": 16,
    "day": 5,
    "title": "کنترل نرخ مصرف (Rate Limiting) با الگوریتم سطل توکن",
    "titleEn": "Rate Limiting",
    "description": "پیاده‌سازی محدودیت تعداد درخواست در ثانیه برای هر کاربر یا IP با Bucket4j جهت جلوگیری از حملات DoS.",
    "category": "Resilience",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Rate Limiting",
      "Bucket4j",
      "Token Bucket",
      "DDoS Protection"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 15",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "Limiter محلی با دو instance چه تغییری می‌کند",
      "دو کاربر را جدا محدود کن و دو instance را آزمایش کن؛ پاسخ 429 راه retry منطقی بدهد."
    ],
    "whyItMatters": "X-Forwarded-For بدون مرز proxy مورد اعتماد می‌تواند قابل جعل باشد.",
    "introduction": "پیاده‌سازی محدودیت تعداد درخواست در ثانیه برای هر کاربر یا IP با Bucket4j جهت جلوگیری از حملات DoS.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Rate limit نرخ درخواست را محدود می‌کند؛ concurrency limit تعداد کارهای درحال‌اجرا را. کلید محدودیت باید مناسب کاربر/tenant و مدل تهدید باشد. در چند instance، limiter حافظه‌ای سقف سراسری نمی‌دهد."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو کاربر را جدا محدود کن و دو instance را آزمایش کن؛ پاسخ 429 راه retry منطقی بدهد.",
      "solution": "X-Forwarded-For بدون مرز proxy مورد اعتماد می‌تواند قابل جعل باشد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "http",
        "code": "HTTP/1.1 429 Too Many Requests\nRetry-After: 10\nContent-Type: application/problem+json\n\n{\"title\":\"Rate limit exceeded\",\"status\":429}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Rate Limiting",
      "explanation": "Promise timeout در Node نیز ممکن است کار زیرین را ادامه دهد. در هر دو پشته deadline، cancellation، retry امن و ظرفیت downstream باید مستقل طراحی شوند."
    },
    "commonMistakes": [
      {
        "mistake": "X-Forwarded-For بدون مرز proxy مورد اعتماد می‌تواند قابل جعل باشد.",
        "whyBad": "Rate limit نرخ درخواست را محدود می‌کند؛ concurrency limit تعداد کارهای درحال‌اجرا را. کلید محدودیت باید مناسب کاربر/tenant و مدل تهدید باشد. در چند instance، limiter حافظه‌ای سقف سراسری نمی‌دهد.",
        "solution": "ممکن است ظرفیت مؤثر چندبرابر شود"
      }
    ],
    "bestPractices": [
      "X-Forwarded-For بدون مرز proxy مورد اعتماد می‌تواند قابل جعل باشد.",
      "دو کاربر را جدا محدود کن و دو instance را آزمایش کن؛ پاسخ 429 راه retry منطقی بدهد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو کاربر را جدا محدود کن و دو instance را آزمایش کن؛ پاسخ 429 راه retry منطقی بدهد.",
      "acceptanceCriteria": [
        "دو کاربر را جدا محدود کن و دو instance را آزمایش کن؛ پاسخ 429 راه retry منطقی بدهد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "X-Forwarded-For بدون مرز proxy مورد اعتماد می‌تواند قابل جعل باشد."
      ],
      "solution": {
        "code": "HTTP/1.1 429 Too Many Requests\nRetry-After: 10\nContent-Type: application/problem+json\n\n{\"title\":\"Rate limit exceeded\",\"status\":429}",
        "language": "http",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ممکن است ظرفیت مؤثر چندبرابر شود. X-Forwarded-For بدون مرز proxy مورد اعتماد می‌تواند قابل جعل باشد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-095",
        "question": "Limiter محلی با دو instance چه تغییری می‌کند؟",
        "options": [
          "همیشه سقف سراسری دقیق می‌ماند",
          "خودکار داده را در Redis ذخیره می‌کند",
          "ممکن است ظرفیت مؤثر چندبرابر شود"
        ],
        "correctIndex": 2,
        "explanation": "ممکن است ظرفیت مؤثر چندبرابر شود. Rate limit نرخ درخواست را محدود می‌کند؛ concurrency limit تعداد کارهای درحال‌اجرا را. کلید محدودیت باید مناسب کاربر/tenant و مدل تهدید باشد. در چند instance، limiter حافظه‌ای سقف سراسری نمی‌دهد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: Limiter محلی با دو instance چه تغییری می‌کند؟",
        "answer": "ممکن است ظرفیت مؤثر چندبرابر شود. X-Forwarded-For بدون مرز proxy مورد اعتماد می‌تواند قابل جعل باشد."
      }
    ],
    "summary": "Rate limit نرخ درخواست را محدود می‌کند؛ concurrency limit تعداد کارهای درحال‌اجرا را. کلید محدودیت باید مناسب کاربر/tenant و مدل تهدید باشد. در چند instance، limiter حافظه‌ای سقف سراسری نمی‌دهد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://resilience4j.readme.io/docs/circuitbreaker"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-096",
    "slug": "dependency-vulnerability-scanning",
    "week": 16,
    "day": 6,
    "title": "پویش خودکار آسیب‌پذیری‌های کتابخانه‌ها در پروژه جاوا",
    "titleEn": "Dependency Vulnerability Scanning",
    "description": "بهره‌گیری از ابزارهای Snyk و OWASP Dependency-Check Maven Plugin جهت کشف CVEهای موجود در پکیج‌ها.",
    "category": "Resilience",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "CVE",
      "Vulnerability Scanning",
      "Supply Chain Security"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 15",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "پس از اسکن بدون هشدار چه نتیجه‌ای مجاز است",
      "یک advisory واقعی را با نسخه resolved تطبیق بده و تصمیم patch را همراه تست و منبع ثبت کن."
    ],
    "whyItMatters": "افزودن exception دائمی برای سبزشدن گزارش، ریسک را برطرف نمی‌کند.",
    "introduction": "بهره‌گیری از ابزارهای Snyk و OWASP Dependency-Check Maven Plugin جهت کشف CVEهای موجود در پکیج‌ها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "اسکن dependency نشانه‌های advisory را پیدا می‌کند، نه اثبات exploitability یا نبود همه ریسک‌ها. dependency مستقیم و transitive، نسخه قفل‌شده و image پایه را بررسی کن. اصلاح را با تست رفتار و build همراه کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک advisory واقعی را با نسخه resolved تطبیق بده و تصمیم patch را همراه تست و منبع ثبت کن.",
      "solution": "افزودن exception دائمی برای سبزشدن گزارش، ریسک را برطرف نمی‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "bash",
        "code": "./mvnw dependency:tree\npnpm audit --prod\n# Review official advisories and upgrade the actual resolved dependency.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Dependency Vulnerability Scanning",
      "explanation": "Promise timeout در Node نیز ممکن است کار زیرین را ادامه دهد. در هر دو پشته deadline، cancellation، retry امن و ظرفیت downstream باید مستقل طراحی شوند."
    },
    "commonMistakes": [
      {
        "mistake": "افزودن exception دائمی برای سبزشدن گزارش، ریسک را برطرف نمی‌کند.",
        "whyBad": "اسکن dependency نشانه‌های advisory را پیدا می‌کند، نه اثبات exploitability یا نبود همه ریسک‌ها. dependency مستقیم و transitive، نسخه قفل‌شده و image پایه را بررسی کن. اصلاح را با تست رفتار و build همراه کن.",
        "solution": "در آن پایگاه و زمان هشدار شناخته‌شده‌ای پیدا نشد"
      }
    ],
    "bestPractices": [
      "افزودن exception دائمی برای سبزشدن گزارش، ریسک را برطرف نمی‌کند.",
      "یک advisory واقعی را با نسخه resolved تطبیق بده و تصمیم patch را همراه تست و منبع ثبت کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک advisory واقعی را با نسخه resolved تطبیق بده و تصمیم patch را همراه تست و منبع ثبت کن.",
      "acceptanceCriteria": [
        "یک advisory واقعی را با نسخه resolved تطبیق بده و تصمیم patch را همراه تست و منبع ثبت کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "افزودن exception دائمی برای سبزشدن گزارش، ریسک را برطرف نمی‌کند."
      ],
      "solution": {
        "code": "./mvnw dependency:tree\npnpm audit --prod\n# Review official advisories and upgrade the actual resolved dependency.",
        "language": "bash",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. در آن پایگاه و زمان هشدار شناخته‌شده‌ای پیدا نشد. افزودن exception دائمی برای سبزشدن گزارش، ریسک را برطرف نمی‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-096",
        "question": "پس از اسکن بدون هشدار چه نتیجه‌ای مجاز است؟",
        "options": [
          "در آن پایگاه و زمان هشدار شناخته‌شده‌ای پیدا نشد",
          "اپ برای همیشه بدون آسیب‌پذیری است",
          "دیگر authentication و authorization لازم نیست"
        ],
        "correctIndex": 0,
        "explanation": "در آن پایگاه و زمان هشدار شناخته‌شده‌ای پیدا نشد. اسکن dependency نشانه‌های advisory را پیدا می‌کند، نه اثبات exploitability یا نبود همه ریسک‌ها. dependency مستقیم و transitive، نسخه قفل‌شده و image پایه را بررسی کن. اصلاح را با تست رفتار و build همراه کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: پس از اسکن بدون هشدار چه نتیجه‌ای مجاز است؟",
        "answer": "در آن پایگاه و زمان هشدار شناخته‌شده‌ای پیدا نشد. افزودن exception دائمی برای سبزشدن گزارش، ریسک را برطرف نمی‌کند."
      }
    ],
    "summary": "اسکن dependency نشانه‌های advisory را پیدا می‌کند، نه اثبات exploitability یا نبود همه ریسک‌ها. dependency مستقیم و transitive، نسخه قفل‌شده و image پایه را بررسی کن. اصلاح را با تست رفتار و build همراه کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://resilience4j.readme.io/docs/circuitbreaker"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
