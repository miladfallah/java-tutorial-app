import { Lesson } from "../types";

export const WEEK_23_LESSONS: Lesson[] = [
  {
    "id": "lesson-133",
    "slug": "structured-logging",
    "week": 23,
    "day": 1,
    "title": "لاگ‌نویسی ساخت‌یافته JSON و همبستگی لاگ‌ها با MDC",
    "titleEn": "Structured Logging",
    "description": "تولید لاگ‌های فرمت JSON، ارسال کلیدهای TraceId و UserId به تمام لاگ‌های همان درخواست با استفاده از Mapped Diagnostic Context.",
    "category": "Observability",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Structured Logging",
      "JSON Logs",
      "MDC",
      "ELK Stack"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 22",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چه چیزی نباید در log عملیاتی باشد",
      "یک درخواست را در logها پیدا کن؛ payload حساس نباشد و خروجی با parser JSON قابل خواندن باشد."
    ],
    "whyItMatters": "خطا در propagation context را با log بدون correlation به عنوان trace کامل معرفی نکن.",
    "introduction": "تولید لاگ‌های فرمت JSON، ارسال کلیدهای TraceId و UserId به تمام لاگ‌های همان درخواست با استفاده از Mapped Diagnostic Context.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Structured logging رخداد را به فیلدهای قابل جستجو تبدیل می‌کند. requestId، traceId و orderId نقش‌های متفاوت دارند. داده شخصی و token را حذف یا mask کن؛ MDC در async خودبه‌خود همیشه منتقل نمی‌شود."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک درخواست را در logها پیدا کن؛ payload حساس نباشد و خروجی با parser JSON قابل خواندن باشد.",
      "solution": "خطا در propagation context را با log بدون correlation به عنوان trace کامل معرفی نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "log.info(\"order_confirmed orderId={} outcome={}\", orderId, \"success\");\n// Configure JSON output in the logging backend; do not concatenate raw user JSON.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Structured Logging",
      "explanation": "مفاهیم log/metric/trace مشترک‌اند؛ در Spring ابزارهایی مثل Micrometer اتصال را ساده می‌کنند. داده حساس و cardinality در هر پشته مهم است."
    },
    "commonMistakes": [
      {
        "mistake": "خطا در propagation context را با log بدون correlation به عنوان trace کامل معرفی نکن.",
        "whyBad": "Structured logging رخداد را به فیلدهای قابل جستجو تبدیل می‌کند. requestId، traceId و orderId نقش‌های متفاوت دارند. داده شخصی و token را حذف یا mask کن؛ MDC در async خودبه‌خود همیشه منتقل نمی‌شود.",
        "solution": "Bearer token کامل"
      }
    ],
    "bestPractices": [
      "خطا در propagation context را با log بدون correlation به عنوان trace کامل معرفی نکن.",
      "یک درخواست را در logها پیدا کن؛ payload حساس نباشد و خروجی با parser JSON قابل خواندن باشد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک درخواست را در logها پیدا کن؛ payload حساس نباشد و خروجی با parser JSON قابل خواندن باشد.",
      "acceptanceCriteria": [
        "یک درخواست را در logها پیدا کن؛ payload حساس نباشد و خروجی با parser JSON قابل خواندن باشد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "خطا در propagation context را با log بدون correlation به عنوان trace کامل معرفی نکن."
      ],
      "solution": {
        "code": "log.info(\"order_confirmed orderId={} outcome={}\", orderId, \"success\");\n// Configure JSON output in the logging backend; do not concatenate raw user JSON.",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. Bearer token کامل. خطا در propagation context را با log بدون correlation به عنوان trace کامل معرفی نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-133",
        "question": "چه چیزی نباید در log عملیاتی باشد؟",
        "options": [
          "شناسه سفارش مجاز برای رهگیری",
          "Bearer token کامل",
          "کد نتیجه غیرحساس"
        ],
        "correctIndex": 1,
        "explanation": "Bearer token کامل. Structured logging رخداد را به فیلدهای قابل جستجو تبدیل می‌کند. requestId، traceId و orderId نقش‌های متفاوت دارند. داده شخصی و token را حذف یا mask کن؛ MDC در async خودبه‌خود همیشه منتقل نمی‌شود."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چه چیزی نباید در log عملیاتی باشد؟",
        "answer": "Bearer token کامل. خطا در propagation context را با log بدون correlation به عنوان trace کامل معرفی نکن."
      }
    ],
    "summary": "Structured logging رخداد را به فیلدهای قابل جستجو تبدیل می‌کند. requestId، traceId و orderId نقش‌های متفاوت دارند. داده شخصی و token را حذف یا mask کن؛ MDC در async خودبه‌خود همیشه منتقل نمی‌شود.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.micrometer.io/micrometer/reference/concepts.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-134",
    "slug": "metrics-and-micrometer",
    "week": 23,
    "day": 2,
    "title": "استخراج متریک‌های برنامه‌نویسی با ابزار Micrometer",
    "titleEn": "Metrics and Micrometer",
    "description": "پیاده‌سازی کانترها، تایمرها و گیج‌ها برای شمارش سفارشات ثبت‌شده، زمان پردازش و سنجش عملکرد کدهای جاوا.",
    "category": "Observability",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Micrometer",
      "Metrics",
      "Counters",
      "Timers"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 22",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کدام label برای metric خطرناک‌تر است",
      "برای ثبت سفارش timer و counter نتیجه اضافه کن؛ تعداد series با تعداد سفارش‌ها رشد نکند."
    ],
    "whyItMatters": "ثبت attempted به جای success را در نام metric واضح کن؛ اندازه‌گیری نباید ادعای موفقیت غلط بسازد.",
    "introduction": "پیاده‌سازی کانترها، تایمرها و گیج‌ها برای شمارش سفارشات ثبت‌شده، زمان پردازش و سنجش عملکرد کدهای جاوا.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Counter رخداد تجمعی، gauge وضعیت لحظه‌ای و timer توزیع مدت را نشان می‌دهد. label پرکاردینال مانند userId یا orderId هزینه ذخیره را منفجر می‌کند؛ آن‌ها برای log/trace مناسب‌ترند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای ثبت سفارش timer و counter نتیجه اضافه کن؛ تعداد series با تعداد سفارش‌ها رشد نکند.",
      "solution": "ثبت attempted به جای success را در نام metric واضح کن؛ اندازه‌گیری نباید ادعای موفقیت غلط بسازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "Timer.Sample sample = Timer.start(registry);\ntry { placeOrder(); }\nfinally { sample.stop(registry.timer(\"orders.place\", \"outcome\", \"attempted\")); }",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Metrics and Micrometer",
      "explanation": "مفاهیم log/metric/trace مشترک‌اند؛ در Spring ابزارهایی مثل Micrometer اتصال را ساده می‌کنند. داده حساس و cardinality در هر پشته مهم است."
    },
    "commonMistakes": [
      {
        "mistake": "ثبت attempted به جای success را در نام metric واضح کن؛ اندازه‌گیری نباید ادعای موفقیت غلط بسازد.",
        "whyBad": "Counter رخداد تجمعی، gauge وضعیت لحظه‌ای و timer توزیع مدت را نشان می‌دهد. label پرکاردینال مانند userId یا orderId هزینه ذخیره را منفجر می‌کند؛ آن‌ها برای log/trace مناسب‌ترند.",
        "solution": "orderId یکتا برای هر درخواست"
      }
    ],
    "bestPractices": [
      "ثبت attempted به جای success را در نام metric واضح کن؛ اندازه‌گیری نباید ادعای موفقیت غلط بسازد.",
      "برای ثبت سفارش timer و counter نتیجه اضافه کن؛ تعداد series با تعداد سفارش‌ها رشد نکند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای ثبت سفارش timer و counter نتیجه اضافه کن؛ تعداد series با تعداد سفارش‌ها رشد نکند.",
      "acceptanceCriteria": [
        "برای ثبت سفارش timer و counter نتیجه اضافه کن؛ تعداد series با تعداد سفارش‌ها رشد نکند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "ثبت attempted به جای success را در نام metric واضح کن؛ اندازه‌گیری نباید ادعای موفقیت غلط بسازد."
      ],
      "solution": {
        "code": "Timer.Sample sample = Timer.start(registry);\ntry { placeOrder(); }\nfinally { sample.stop(registry.timer(\"orders.place\", \"outcome\", \"attempted\")); }",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. orderId یکتا برای هر درخواست. ثبت attempted به جای success را در نام metric واضح کن؛ اندازه‌گیری نباید ادعای موفقیت غلط بسازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-134",
        "question": "کدام label برای metric خطرناک‌تر است؟",
        "options": [
          "outcome با مقادیر success/failure",
          "نام ثابت endpoint template",
          "orderId یکتا برای هر درخواست"
        ],
        "correctIndex": 2,
        "explanation": "orderId یکتا برای هر درخواست. Counter رخداد تجمعی، gauge وضعیت لحظه‌ای و timer توزیع مدت را نشان می‌دهد. label پرکاردینال مانند userId یا orderId هزینه ذخیره را منفجر می‌کند؛ آن‌ها برای log/trace مناسب‌ترند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کدام label برای metric خطرناک‌تر است؟",
        "answer": "orderId یکتا برای هر درخواست. ثبت attempted به جای success را در نام metric واضح کن؛ اندازه‌گیری نباید ادعای موفقیت غلط بسازد."
      }
    ],
    "summary": "Counter رخداد تجمعی، gauge وضعیت لحظه‌ای و timer توزیع مدت را نشان می‌دهد. label پرکاردینال مانند userId یا orderId هزینه ذخیره را منفجر می‌کند؛ آن‌ها برای log/trace مناسب‌ترند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.micrometer.io/micrometer/reference/concepts.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-135",
    "slug": "distributed-tracing-with-opentelemetry",
    "week": 23,
    "day": 3,
    "title": "رهگیری توزیع‌شده درخواست‌ها با OpenTelemetry Tracing",
    "titleEn": "Distributed Tracing with OpenTelemetry",
    "description": "درک عملکرد Spans و Traces، انتشار هدرهای استاندارد W3C TraceContext میان سرویس‌های مختلف جهت تعقیب مسیر ریکوئست.",
    "category": "Observability",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "OpenTelemetry",
      "Distributed Tracing",
      "Spans",
      "W3C TraceContext"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 22",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای اتصال spanهای دو سرویس چه چیزی لازم است",
      "یک درخواست دارای DB و event را رهگیری کن؛ traceId در log قابل تطبیق و header قابل انتقال باشد."
    ],
    "whyItMatters": "traceId را authentication token فرض نکن؛ قابل اعتمادبودن داده ورودی را جدا بسنج.",
    "introduction": "درک عملکرد Spans و Traces، انتشار هدرهای استاندارد W3C TraceContext میان سرویس‌های مختلف جهت تعقیب مسیر ریکوئست.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Trace مسیر درخواست را با spanهای مرتبط نشان می‌دهد. context باید از HTTP و message header منتقل شود؛ ساخت trace تازه در هر سرویس زنجیره را می‌شکند. sampling و حذف داده حساس بخشی از طراحی است."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک درخواست دارای DB و event را رهگیری کن؛ traceId در log قابل تطبیق و header قابل انتقال باشد.",
      "solution": "traceId را authentication token فرض نکن؛ قابل اعتمادبودن داده ورودی را جدا بسنج."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "HTTP request -> server span\nDB query -> child span\nMessage -> propagated trace context\nConsumer -> linked/continued processing span",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Distributed Tracing with OpenTelemetry",
      "explanation": "مفاهیم log/metric/trace مشترک‌اند؛ در Spring ابزارهایی مثل Micrometer اتصال را ساده می‌کنند. داده حساس و cardinality در هر پشته مهم است."
    },
    "commonMistakes": [
      {
        "mistake": "traceId را authentication token فرض نکن؛ قابل اعتمادبودن داده ورودی را جدا بسنج.",
        "whyBad": "Trace مسیر درخواست را با spanهای مرتبط نشان می‌دهد. context باید از HTTP و message header منتقل شود؛ ساخت trace تازه در هر سرویس زنجیره را می‌شکند. sampling و حذف داده حساس بخشی از طراحی است.",
        "solution": "propagation استاندارد trace context"
      }
    ],
    "bestPractices": [
      "traceId را authentication token فرض نکن؛ قابل اعتمادبودن داده ورودی را جدا بسنج.",
      "یک درخواست دارای DB و event را رهگیری کن؛ traceId در log قابل تطبیق و header قابل انتقال باشد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک درخواست دارای DB و event را رهگیری کن؛ traceId در log قابل تطبیق و header قابل انتقال باشد.",
      "acceptanceCriteria": [
        "یک درخواست دارای DB و event را رهگیری کن؛ traceId در log قابل تطبیق و header قابل انتقال باشد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "traceId را authentication token فرض نکن؛ قابل اعتمادبودن داده ورودی را جدا بسنج."
      ],
      "solution": {
        "code": "HTTP request -> server span\nDB query -> child span\nMessage -> propagated trace context\nConsumer -> linked/continued processing span",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. propagation استاندارد trace context. traceId را authentication token فرض نکن؛ قابل اعتمادبودن داده ورودی را جدا بسنج."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-135",
        "question": "برای اتصال spanهای دو سرویس چه چیزی لازم است؟",
        "options": [
          "propagation استاندارد trace context",
          "نام یکسان کلاس Java",
          "اشتراک همان thread میان ماشین‌ها"
        ],
        "correctIndex": 0,
        "explanation": "propagation استاندارد trace context. Trace مسیر درخواست را با spanهای مرتبط نشان می‌دهد. context باید از HTTP و message header منتقل شود؛ ساخت trace تازه در هر سرویس زنجیره را می‌شکند. sampling و حذف داده حساس بخشی از طراحی است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای اتصال spanهای دو سرویس چه چیزی لازم است؟",
        "answer": "propagation استاندارد trace context. traceId را authentication token فرض نکن؛ قابل اعتمادبودن داده ورودی را جدا بسنج."
      }
    ],
    "summary": "Trace مسیر درخواست را با spanهای مرتبط نشان می‌دهد. context باید از HTTP و message header منتقل شود؛ ساخت trace تازه در هر سرویس زنجیره را می‌شکند. sampling و حذف داده حساس بخشی از طراحی است.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.micrometer.io/micrometer/reference/concepts.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-136",
    "slug": "instrumenting-the-order-api",
    "week": 23,
    "day": 4,
    "title": "تجهیز ماژول سفارشات به متریک‌های تجاری و Trace توزیع‌شده (پروژه محوری)",
    "titleEn": "Instrumenting the Order API",
    "description": "ثبت متریک‌های اختصاصی ارزش سفارشات، درصد خطاهای پرداخت و مشاهده جریان تراکنش در ابزارهای تست.",
    "category": "Observability",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Instrumentation",
      "Order Metrics",
      "OpenTelemetry"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 22",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "span دامنه مفید چه ویژگی دارد",
      "رزرو ناموفق و کند را ایجاد کن؛ در metric/trace بتوانی علت مرحله را از کل request جدا کنی."
    ],
    "whyItMatters": "instrumentation دوبل agent و library می‌تواند span تکراری و هزینه اضافه بسازد.",
    "introduction": "ثبت متریک‌های اختصاصی ارزش سفارشات، درصد خطاهای پرداخت و مشاهده جریان تراکنش در ابزارهای تست.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Instrumentation باید سؤال عملیاتی را پاسخ دهد: کدام مرحله سفارش کند یا ناموفق است؟ از instrument خودکار موجود استفاده کن و فقط span دامنه معنادار اضافه کن. error و exception را با semantics صحیح ثبت کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "رزرو ناموفق و کند را ایجاد کن؛ در metric/trace بتوانی علت مرحله را از کل request جدا کنی.",
      "solution": "instrumentation دوبل agent و library می‌تواند span تکراری و هزینه اضافه بسازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "Observation.createNotStarted(\"orders.reserve\", observationRegistry)\n    .observe(() -> inventory.reserve(productId, quantity));",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Instrumenting the Order API",
      "explanation": "مفاهیم log/metric/trace مشترک‌اند؛ در Spring ابزارهایی مثل Micrometer اتصال را ساده می‌کنند. داده حساس و cardinality در هر پشته مهم است."
    },
    "commonMistakes": [
      {
        "mistake": "instrumentation دوبل agent و library می‌تواند span تکراری و هزینه اضافه بسازد.",
        "whyBad": "Instrumentation باید سؤال عملیاتی را پاسخ دهد: کدام مرحله سفارش کند یا ناموفق است؟ از instrument خودکار موجود استفاده کن و فقط span دامنه معنادار اضافه کن. error و exception را با semantics صحیح ثبت کن.",
        "solution": "مرز عملیاتی معنادار با هزینه و داده محدود"
      }
    ],
    "bestPractices": [
      "instrumentation دوبل agent و library می‌تواند span تکراری و هزینه اضافه بسازد.",
      "رزرو ناموفق و کند را ایجاد کن؛ در metric/trace بتوانی علت مرحله را از کل request جدا کنی."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "رزرو ناموفق و کند را ایجاد کن؛ در metric/trace بتوانی علت مرحله را از کل request جدا کنی.",
      "acceptanceCriteria": [
        "رزرو ناموفق و کند را ایجاد کن؛ در metric/trace بتوانی علت مرحله را از کل request جدا کنی.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "instrumentation دوبل agent و library می‌تواند span تکراری و هزینه اضافه بسازد."
      ],
      "solution": {
        "code": "Observation.createNotStarted(\"orders.reserve\", observationRegistry)\n    .observe(() -> inventory.reserve(productId, quantity));",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. مرز عملیاتی معنادار با هزینه و داده محدود. instrumentation دوبل agent و library می‌تواند span تکراری و هزینه اضافه بسازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-136",
        "question": "span دامنه مفید چه ویژگی دارد؟",
        "options": [
          "یک span برای هر getter",
          "مرز عملیاتی معنادار با هزینه و داده محدود",
          "ثبت password به عنوان attribute"
        ],
        "correctIndex": 1,
        "explanation": "مرز عملیاتی معنادار با هزینه و داده محدود. Instrumentation باید سؤال عملیاتی را پاسخ دهد: کدام مرحله سفارش کند یا ناموفق است؟ از instrument خودکار موجود استفاده کن و فقط span دامنه معنادار اضافه کن. error و exception را با semantics صحیح ثبت کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: span دامنه مفید چه ویژگی دارد؟",
        "answer": "مرز عملیاتی معنادار با هزینه و داده محدود. instrumentation دوبل agent و library می‌تواند span تکراری و هزینه اضافه بسازد."
      }
    ],
    "summary": "Instrumentation باید سؤال عملیاتی را پاسخ دهد: کدام مرحله سفارش کند یا ناموفق است؟ از instrument خودکار موجود استفاده کن و فقط span دامنه معنادار اضافه کن. error و exception را با semantics صحیح ثبت کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.micrometer.io/micrometer/reference/concepts.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-137",
    "slug": "prometheus-and-grafana",
    "week": 23,
    "day": 5,
    "title": "جمع‌آوری داده‌ها با Prometheus و ایجاد داشبوردهای زنده با Grafana",
    "titleEn": "Prometheus and Grafana",
    "description": "پیکربندی Scraping از اندپوینت /actuator/prometheus، طراحی نمودارهای طلایی تاخیر، ترافیک، خطا و اشباع در گرافانا.",
    "category": "Observability",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Prometheus",
      "Grafana",
      "Dashboards",
      "Four Golden Signals"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 22",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا rate روی counter استفاده می‌شود",
      "نرخ درخواست و خطا را روی یک بازه یکسان نمایش بده؛ restart counter نباید نرخ منفی بسازد."
    ],
    "whyItMatters": "میانگین‌گرفتن p95 چند instance، p95 کل سرویس را درست نمی‌سازد.",
    "introduction": "پیکربندی Scraping از اندپوینت /actuator/prometheus، طراحی نمودارهای طلایی تاخیر، ترافیک، خطا و اشباع در گرافانا.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Prometheus سری زمانی metric را scrape می‌کند؛ Grafana آن را نمایش می‌دهد. dashboard باید نرخ، خطا، مدت و اشباع را کنار هم نشان دهد. histogram quantile با میانگین متفاوت است و bucket مناسب می‌خواهد."
      }
    ],
    "realWorldScenario": {
      "scenario": "نرخ درخواست و خطا را روی یک بازه یکسان نمایش بده؛ restart counter نباید نرخ منفی بسازد.",
      "solution": "میانگین‌گرفتن p95 چند instance، p95 کل سرویس را درست نمی‌سازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "promql",
        "code": "sum(rate(http_server_requests_seconds_count[5m]))\n# Request rate; filter service labels in a real multi-service deployment.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Prometheus and Grafana",
      "explanation": "مفاهیم log/metric/trace مشترک‌اند؛ در Spring ابزارهایی مثل Micrometer اتصال را ساده می‌کنند. داده حساس و cardinality در هر پشته مهم است."
    },
    "commonMistakes": [
      {
        "mistake": "میانگین‌گرفتن p95 چند instance، p95 کل سرویس را درست نمی‌سازد.",
        "whyBad": "Prometheus سری زمانی metric را scrape می‌کند؛ Grafana آن را نمایش می‌دهد. dashboard باید نرخ، خطا، مدت و اشباع را کنار هم نشان دهد. histogram quantile با میانگین متفاوت است و bucket مناسب می‌خواهد.",
        "solution": "محاسبه نرخ با درنظرگرفتن reset شمارنده"
      }
    ],
    "bestPractices": [
      "میانگین‌گرفتن p95 چند instance، p95 کل سرویس را درست نمی‌سازد.",
      "نرخ درخواست و خطا را روی یک بازه یکسان نمایش بده؛ restart counter نباید نرخ منفی بسازد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "نرخ درخواست و خطا را روی یک بازه یکسان نمایش بده؛ restart counter نباید نرخ منفی بسازد.",
      "acceptanceCriteria": [
        "نرخ درخواست و خطا را روی یک بازه یکسان نمایش بده؛ restart counter نباید نرخ منفی بسازد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "میانگین‌گرفتن p95 چند instance، p95 کل سرویس را درست نمی‌سازد."
      ],
      "solution": {
        "code": "sum(rate(http_server_requests_seconds_count[5m]))\n# Request rate; filter service labels in a real multi-service deployment.",
        "language": "promql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. محاسبه نرخ با درنظرگرفتن reset شمارنده. میانگین‌گرفتن p95 چند instance، p95 کل سرویس را درست نمی‌سازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-137",
        "question": "چرا rate روی counter استفاده می‌شود؟",
        "options": [
          "برای تبدیل UUID به label",
          "برای حذف نیاز به window زمانی",
          "محاسبه نرخ با درنظرگرفتن reset شمارنده"
        ],
        "correctIndex": 2,
        "explanation": "محاسبه نرخ با درنظرگرفتن reset شمارنده. Prometheus سری زمانی metric را scrape می‌کند؛ Grafana آن را نمایش می‌دهد. dashboard باید نرخ، خطا، مدت و اشباع را کنار هم نشان دهد. histogram quantile با میانگین متفاوت است و bucket مناسب می‌خواهد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا rate روی counter استفاده می‌شود؟",
        "answer": "محاسبه نرخ با درنظرگرفتن reset شمارنده. میانگین‌گرفتن p95 چند instance، p95 کل سرویس را درست نمی‌سازد."
      }
    ],
    "summary": "Prometheus سری زمانی metric را scrape می‌کند؛ Grafana آن را نمایش می‌دهد. dashboard باید نرخ، خطا، مدت و اشباع را کنار هم نشان دهد. histogram quantile با میانگین متفاوت است و bucket مناسب می‌خواهد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.micrometer.io/micrometer/reference/concepts.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-138",
    "slug": "alerting-and-sli-slo",
    "week": 23,
    "day": 6,
    "title": "تنظیم هشدارهای هوشمند و تعریف شاخص‌های SLI و SLO",
    "titleEn": "Alerting and SLI/SLO",
    "description": "تعیین توافق‌نامه سطح خدمات (SLA)، تعریف شاخص‌های کیفیت سرویس، مدیریت Error Budget و ارسال هشدارهای فوری به تلگرام یا اسلک.",
    "category": "Observability",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "SLI",
      "SLO",
      "SLA",
      "Alerting",
      "Error Budget"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 22",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "تفاوت SLI و SLO چیست",
      "برای checkout یک SLI و یک alert قابل اقدام بنویس؛ تعریف request موفق و ناموفق مبهم نباشد."
    ],
    "whyItMatters": "هشدار بدون owner و runbook احتمال alert fatigue را بالا می‌برد.",
    "introduction": "تعیین توافق‌نامه سطح خدمات (SLA)، تعریف شاخص‌های کیفیت سرویس، مدیریت Error Budget و ارسال هشدارهای فوری به تلگرام یا اسلک.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "SLI رفتار اندازه‌گیری‌شده کاربر و SLO هدف آن است. error budget حد مجاز شکست در بازه مشخص است؛ alert روی burn rate می‌تواند زودتر از پایان budget هشدار دهد. هر alert باید action مشخص داشته باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای checkout یک SLI و یک alert قابل اقدام بنویس؛ تعریف request موفق و ناموفق مبهم نباشد.",
      "solution": "هشدار بدون owner و runbook احتمال alert fatigue را بالا می‌برد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "SLO: 99.9% successful checkout requests over 30 days\nDefine denominator, exclusions, latency target and data source explicitly.\nAlert: sustained fast budget burn -> investigate checkout dependency health.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Alerting and SLI/SLO",
      "explanation": "مفاهیم log/metric/trace مشترک‌اند؛ در Spring ابزارهایی مثل Micrometer اتصال را ساده می‌کنند. داده حساس و cardinality در هر پشته مهم است."
    },
    "commonMistakes": [
      {
        "mistake": "هشدار بدون owner و runbook احتمال alert fatigue را بالا می‌برد.",
        "whyBad": "SLI رفتار اندازه‌گیری‌شده کاربر و SLO هدف آن است. error budget حد مجاز شکست در بازه مشخص است؛ alert روی burn rate می‌تواند زودتر از پایان budget هشدار دهد. هر alert باید action مشخص داشته باشد.",
        "solution": "SLI اندازه‌گیری و SLO هدف آن است"
      }
    ],
    "bestPractices": [
      "هشدار بدون owner و runbook احتمال alert fatigue را بالا می‌برد.",
      "برای checkout یک SLI و یک alert قابل اقدام بنویس؛ تعریف request موفق و ناموفق مبهم نباشد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای checkout یک SLI و یک alert قابل اقدام بنویس؛ تعریف request موفق و ناموفق مبهم نباشد.",
      "acceptanceCriteria": [
        "برای checkout یک SLI و یک alert قابل اقدام بنویس؛ تعریف request موفق و ناموفق مبهم نباشد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "هشدار بدون owner و runbook احتمال alert fatigue را بالا می‌برد."
      ],
      "solution": {
        "code": "SLO: 99.9% successful checkout requests over 30 days\nDefine denominator, exclusions, latency target and data source explicitly.\nAlert: sustained fast budget burn -> investigate checkout dependency health.",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. SLI اندازه‌گیری و SLO هدف آن است. هشدار بدون owner و runbook احتمال alert fatigue را بالا می‌برد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-138",
        "question": "تفاوت SLI و SLO چیست؟",
        "options": [
          "SLI اندازه‌گیری و SLO هدف آن است",
          "هر دو فقط درصد CPU هستند",
          "SLO همان نام dashboard است"
        ],
        "correctIndex": 0,
        "explanation": "SLI اندازه‌گیری و SLO هدف آن است. SLI رفتار اندازه‌گیری‌شده کاربر و SLO هدف آن است. error budget حد مجاز شکست در بازه مشخص است؛ alert روی burn rate می‌تواند زودتر از پایان budget هشدار دهد. هر alert باید action مشخص داشته باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: تفاوت SLI و SLO چیست؟",
        "answer": "SLI اندازه‌گیری و SLO هدف آن است. هشدار بدون owner و runbook احتمال alert fatigue را بالا می‌برد."
      }
    ],
    "summary": "SLI رفتار اندازه‌گیری‌شده کاربر و SLO هدف آن است. error budget حد مجاز شکست در بازه مشخص است؛ alert روی burn rate می‌تواند زودتر از پایان budget هشدار دهد. هر alert باید action مشخص داشته باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.micrometer.io/micrometer/reference/concepts.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
