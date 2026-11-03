import { Lesson } from "../types";

export const WEEK_06_LESSONS: Lesson[] = [
  {
    "id": "lesson-031",
    "slug": "controllers-and-request-mapping",
    "week": 6,
    "day": 1,
    "title": "کنترلرها، مسیریابی و نگاشت درخواست‌ها در Spring MVC",
    "titleEn": "Controllers and Request Mapping",
    "description": "پیاده‌سازی @RestController، @GetMapping، @PostMapping و مقایسه کنترلرهای اسپرینگ با ساختار @Controller در NestJS.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "RestController",
      "RequestMapping",
      "HTTP",
      "Spring MVC"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 5",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "Controller بهتر است چه چیزی برگرداند",
      "GET با UUID معتبر و نامعتبر را تست کن؛ ورودی نامعتبر 400 و سفارش غایب 404 باشد."
    ],
    "whyItMatters": "annotationها جای طراحی قرارداد و تست HTTP را نمی‌گیرند.",
    "introduction": "پیاده‌سازی @RestController، @GetMapping، @PostMapping و مقایسه کنترلرهای اسپرینگ با ساختار @Controller در NestJS.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Controller قرارداد HTTP را به use case تبدیل می‌کند؛ نباید تراکنش، SQL و قواعد تجاری در آن انباشته شود. binding مسیر، query و body را صریح انتخاب کن و DTO خروجی را از Entity جدا نگه دار."
      }
    ],
    "realWorldScenario": {
      "scenario": "GET با UUID معتبر و نامعتبر را تست کن؛ ورودی نامعتبر 400 و سفارش غایب 404 باشد.",
      "solution": "annotationها جای طراحی قرارداد و تست HTTP را نمی‌گیرند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@RestController\n@RequestMapping(\"/api/orders\")\nclass OrderController {\n    @GetMapping(\"/{id}\")\n    OrderResponse get(@PathVariable UUID id) { return orders.get(id); }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Controllers and Request Mapping",
      "explanation": "Controller/DTO در Nest مشابهت دارند، اما Bean Validation و زنجیره Servlet قرارداد خود را دارند. status و body را از قواعد تجاری مستقل طراحی کن."
    },
    "commonMistakes": [
      {
        "mistake": "annotationها جای طراحی قرارداد و تست HTTP را نمی‌گیرند.",
        "whyBad": "Controller قرارداد HTTP را به use case تبدیل می‌کند؛ نباید تراکنش، SQL و قواعد تجاری در آن انباشته شود. binding مسیر، query و body را صریح انتخاب کن و DTO خروجی را از Entity جدا نگه دار.",
        "solution": "DTO قرارداد API"
      }
    ],
    "bestPractices": [
      "annotationها جای طراحی قرارداد و تست HTTP را نمی‌گیرند.",
      "GET با UUID معتبر و نامعتبر را تست کن؛ ورودی نامعتبر 400 و سفارش غایب 404 باشد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "GET با UUID معتبر و نامعتبر را تست کن؛ ورودی نامعتبر 400 و سفارش غایب 404 باشد.",
      "acceptanceCriteria": [
        "GET با UUID معتبر و نامعتبر را تست کن؛ ورودی نامعتبر 400 و سفارش غایب 404 باشد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "annotationها جای طراحی قرارداد و تست HTTP را نمی‌گیرند."
      ],
      "solution": {
        "code": "@RestController\n@RequestMapping(\"/api/orders\")\nclass OrderController {\n    @GetMapping(\"/{id}\")\n    OrderResponse get(@PathVariable UUID id) { return orders.get(id); }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. DTO قرارداد API. annotationها جای طراحی قرارداد و تست HTTP را نمی‌گیرند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-031",
        "question": "Controller بهتر است چه چیزی برگرداند؟",
        "options": [
          "Entity با روابط lazy و فیلدهای داخلی",
          "DTO قرارداد API",
          "همیشه String شامل JSON دست‌ساز"
        ],
        "correctIndex": 1,
        "explanation": "DTO قرارداد API. Controller قرارداد HTTP را به use case تبدیل می‌کند؛ نباید تراکنش، SQL و قواعد تجاری در آن انباشته شود. binding مسیر، query و body را صریح انتخاب کن و DTO خروجی را از Entity جدا نگه دار."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: Controller بهتر است چه چیزی برگرداند؟",
        "answer": "DTO قرارداد API. annotationها جای طراحی قرارداد و تست HTTP را نمی‌گیرند."
      }
    ],
    "summary": "Controller قرارداد HTTP را به use case تبدیل می‌کند؛ نباید تراکنش، SQL و قواعد تجاری در آن انباشته شود. binding مسیر، query و body را صریح انتخاب کن و DTO خروجی را از Entity جدا نگه دار.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/web/webmvc.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-032",
    "slug": "dtos-and-bean-validation",
    "week": 6,
    "day": 2,
    "title": "انتقال داده با DTOها و اعتبارسنجی با Jakarta Bean Validation",
    "titleEn": "DTOs and Bean Validation",
    "description": "استفاده از @Valid، @NotNull، @Size و ایجاد اعتبارسنجی‌های سفارشی مشابه class-validator در NestJS.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "DTO",
      "Validation",
      "Jakarta",
      "Data Integrity"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 5",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای validation آیتم‌های داخل لیست چه چیزی لازم است",
      "body خالی، items خالی و quantity صفر را تست کن؛ خطا باید مسیر فیلد نامعتبر را نشان دهد."
    ],
    "whyItMatters": "فعال‌بودن dependency validation و فراخوانی @Valid را جدا بررسی کن.",
    "introduction": "استفاده از @Valid، @NotNull، @Size و ایجاد اعتبارسنجی‌های سفارشی مشابه class-validator در NestJS.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Bean Validation شکل ورودی را بررسی می‌کند؛ روی body از @Valid استفاده کن و برای collection، validation تو‌در‌تو لازم است. DTO ورودی با entity یکسان نیست؛ جلوگیری از mass assignment مهم است."
      }
    ],
    "realWorldScenario": {
      "scenario": "body خالی، items خالی و quantity صفر را تست کن؛ خطا باید مسیر فیلد نامعتبر را نشان دهد.",
      "solution": "فعال‌بودن dependency validation و فراخوانی @Valid را جدا بررسی کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "record CreateOrder(@NotBlank String customerId,\n    @NotEmpty List<@Valid Line> items) {}\nrecord Line(@NotNull UUID productId, @Positive int quantity) {}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "DTOs and Bean Validation",
      "explanation": "Controller/DTO در Nest مشابهت دارند، اما Bean Validation و زنجیره Servlet قرارداد خود را دارند. status و body را از قواعد تجاری مستقل طراحی کن."
    },
    "commonMistakes": [
      {
        "mistake": "فعال‌بودن dependency validation و فراخوانی @Valid را جدا بررسی کن.",
        "whyBad": "Bean Validation شکل ورودی را بررسی می‌کند؛ روی body از @Valid استفاده کن و برای collection، validation تو‌در‌تو لازم است. DTO ورودی با entity یکسان نیست؛ جلوگیری از mass assignment مهم است.",
        "solution": "فعال‌سازی validation تو‌در‌تو با @Valid"
      }
    ],
    "bestPractices": [
      "فعال‌بودن dependency validation و فراخوانی @Valid را جدا بررسی کن.",
      "body خالی، items خالی و quantity صفر را تست کن؛ خطا باید مسیر فیلد نامعتبر را نشان دهد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "body خالی، items خالی و quantity صفر را تست کن؛ خطا باید مسیر فیلد نامعتبر را نشان دهد.",
      "acceptanceCriteria": [
        "body خالی، items خالی و quantity صفر را تست کن؛ خطا باید مسیر فیلد نامعتبر را نشان دهد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "فعال‌بودن dependency validation و فراخوانی @Valid را جدا بررسی کن."
      ],
      "solution": {
        "code": "record CreateOrder(@NotBlank String customerId,\n    @NotEmpty List<@Valid Line> items) {}\nrecord Line(@NotNull UUID productId, @Positive int quantity) {}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. فعال‌سازی validation تو‌در‌تو با @Valid. فعال‌بودن dependency validation و فراخوانی @Valid را جدا بررسی کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-032",
        "question": "برای validation آیتم‌های داخل لیست چه چیزی لازم است؟",
        "options": [
          "فقط @NotEmpty روی لیست",
          "نام‌گذاری فیلد به validatedItems",
          "فعال‌سازی validation تو‌در‌تو با @Valid"
        ],
        "correctIndex": 2,
        "explanation": "فعال‌سازی validation تو‌در‌تو با @Valid. Bean Validation شکل ورودی را بررسی می‌کند؛ روی body از @Valid استفاده کن و برای collection، validation تو‌در‌تو لازم است. DTO ورودی با entity یکسان نیست؛ جلوگیری از mass assignment مهم است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای validation آیتم‌های داخل لیست چه چیزی لازم است؟",
        "answer": "فعال‌سازی validation تو‌در‌تو با @Valid. فعال‌بودن dependency validation و فراخوانی @Valid را جدا بررسی کن."
      }
    ],
    "summary": "Bean Validation شکل ورودی را بررسی می‌کند؛ روی body از @Valid استفاده کن و برای collection، validation تو‌در‌تو لازم است. DTO ورودی با entity یکسان نیست؛ جلوگیری از mass assignment مهم است.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/web/webmvc.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-033",
    "slug": "http-semantics-and-status-codes",
    "week": 6,
    "day": 3,
    "title": "معناشناسی استانداردهای HTTP و وضعیت کدهای بازگشتی",
    "titleEn": "HTTP Semantics and Status Codes",
    "description": "طراحی پاسخ‌های دقیق بر اساس وضعیت‌های ۲xx، ۴xx و ۵xx با استفاده از شیء قدرتمند ResponseEntity.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "HTTP Status Codes",
      "ResponseEntity",
      "REST Standards"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 5",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "در ایجاد موفق یک منبع جدید کدام مناسب است",
      "برای ایجاد سفارش status، Location و body را تست کن؛ 204 را بدون body تولید کن."
    ],
    "whyItMatters": "خطای تجاری را در HTTP 200 با success=false پنهان نکن.",
    "introduction": "طراحی پاسخ‌های دقیق بر اساس وضعیت‌های ۲xx، ۴xx و ۵xx با استفاده از شیء قدرتمند ResponseEntity.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Status code بخشی از قرارداد است: 201 برای ایجاد، 404 برای نبود منبع، 409 برای تعارض با وضعیت فعلی. 204 بدنه ندارد. idempotent بودن به معنای یکسان‌بودن تمام responseها نیست؛ اثر تکرار درخواست مهم است."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای ایجاد سفارش status، Location و body را تست کن؛ 204 را بدون body تولید کن.",
      "solution": "خطای تجاری را در HTTP 200 با success=false پنهان نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "return ResponseEntity.created(URI.create(\"/api/orders/\" + order.id()))\n    .body(order);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "HTTP Semantics and Status Codes",
      "explanation": "Controller/DTO در Nest مشابهت دارند، اما Bean Validation و زنجیره Servlet قرارداد خود را دارند. status و body را از قواعد تجاری مستقل طراحی کن."
    },
    "commonMistakes": [
      {
        "mistake": "خطای تجاری را در HTTP 200 با success=false پنهان نکن.",
        "whyBad": "Status code بخشی از قرارداد است: 201 برای ایجاد، 404 برای نبود منبع، 409 برای تعارض با وضعیت فعلی. 204 بدنه ندارد. idempotent بودن به معنای یکسان‌بودن تمام responseها نیست؛ اثر تکرار درخواست مهم است.",
        "solution": "201 همراه Location منبع"
      }
    ],
    "bestPractices": [
      "خطای تجاری را در HTTP 200 با success=false پنهان نکن.",
      "برای ایجاد سفارش status، Location و body را تست کن؛ 204 را بدون body تولید کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای ایجاد سفارش status، Location و body را تست کن؛ 204 را بدون body تولید کن.",
      "acceptanceCriteria": [
        "برای ایجاد سفارش status، Location و body را تست کن؛ 204 را بدون body تولید کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "خطای تجاری را در HTTP 200 با success=false پنهان نکن."
      ],
      "solution": {
        "code": "return ResponseEntity.created(URI.create(\"/api/orders/\" + order.id()))\n    .body(order);",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. 201 همراه Location منبع. خطای تجاری را در HTTP 200 با success=false پنهان نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-033",
        "question": "در ایجاد موفق یک منبع جدید کدام مناسب است؟",
        "options": [
          "201 همراه Location منبع",
          "200 برای تمام نتیجه‌ها شامل خطا",
          "204 همراه JSON کامل سفارش"
        ],
        "correctIndex": 0,
        "explanation": "201 همراه Location منبع. Status code بخشی از قرارداد است: 201 برای ایجاد، 404 برای نبود منبع، 409 برای تعارض با وضعیت فعلی. 204 بدنه ندارد. idempotent بودن به معنای یکسان‌بودن تمام responseها نیست؛ اثر تکرار درخواست مهم است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: در ایجاد موفق یک منبع جدید کدام مناسب است؟",
        "answer": "201 همراه Location منبع. خطای تجاری را در HTTP 200 با success=false پنهان نکن."
      }
    ],
    "summary": "Status code بخشی از قرارداد است: 201 برای ایجاد، 404 برای نبود منبع، 409 برای تعارض با وضعیت فعلی. 204 بدنه ندارد. idempotent بودن به معنای یکسان‌بودن تمام responseها نیست؛ اثر تکرار درخواست مهم است.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/web/webmvc.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-034",
    "slug": "building-the-order-rest-api",
    "week": 6,
    "day": 4,
    "title": "پیاده‌سازی اندپوینت‌های REST ماژول سفارشات (پروژه محوری)",
    "titleEn": "Building the Order REST API",
    "description": "ساخت متدهای ثبت سفارش، مشاهده جزییات و تغییر وضعیت سفارش با مستندات مشخص ورودی و خروجی.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "REST API",
      "Order Module",
      "CRUD"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 5",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "قیمت نهایی سفارش از کجا تعیین شود",
      "POST و سپس GET همان سفارش را با MockMvc یا curl آزمایش کن؛ client نتواند total را تعیین کند."
    ],
    "whyItMatters": "افزودن endpoint بدون مسیر خطا و contract test، API کامل نمی‌سازد.",
    "introduction": "ساخت متدهای ثبت سفارش، مشاهده جزییات و تغییر وضعیت سفارش با مستندات مشخص ورودی و خروجی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "مسیر ایجاد سفارش باید request validation، use case تراکنشی و DTO پاسخ را به هم وصل کند. شناسه و قیمت نهایی باید تحت اختیار سرور باشند؛ قیمت ارسالی کلاینت منبع حقیقت نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "POST و سپس GET همان سفارش را با MockMvc یا curl آزمایش کن؛ client نتواند total را تعیین کند.",
      "solution": "افزودن endpoint بدون مسیر خطا و contract test، API کامل نمی‌سازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@PostMapping\nResponseEntity<OrderResponse> create(@Valid @RequestBody CreateOrder request) {\n    var result = orders.create(request);\n    return ResponseEntity.created(URI.create(\"/api/orders/\" + result.id())).body(result);\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Building the Order REST API",
      "explanation": "Controller/DTO در Nest مشابهت دارند، اما Bean Validation و زنجیره Servlet قرارداد خود را دارند. status و body را از قواعد تجاری مستقل طراحی کن."
    },
    "commonMistakes": [
      {
        "mistake": "افزودن endpoint بدون مسیر خطا و contract test، API کامل نمی‌سازد.",
        "whyBad": "مسیر ایجاد سفارش باید request validation، use case تراکنشی و DTO پاسخ را به هم وصل کند. شناسه و قیمت نهایی باید تحت اختیار سرور باشند؛ قیمت ارسالی کلاینت منبع حقیقت نیست.",
        "solution": "داده معتبر سمت سرور و قواعد قیمت‌گذاری"
      }
    ],
    "bestPractices": [
      "افزودن endpoint بدون مسیر خطا و contract test، API کامل نمی‌سازد.",
      "POST و سپس GET همان سفارش را با MockMvc یا curl آزمایش کن؛ client نتواند total را تعیین کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "POST و سپس GET همان سفارش را با MockMvc یا curl آزمایش کن؛ client نتواند total را تعیین کند.",
      "acceptanceCriteria": [
        "POST و سپس GET همان سفارش را با MockMvc یا curl آزمایش کن؛ client نتواند total را تعیین کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "افزودن endpoint بدون مسیر خطا و contract test، API کامل نمی‌سازد."
      ],
      "solution": {
        "code": "@PostMapping\nResponseEntity<OrderResponse> create(@Valid @RequestBody CreateOrder request) {\n    var result = orders.create(request);\n    return ResponseEntity.created(URI.create(\"/api/orders/\" + result.id())).body(result);\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. داده معتبر سمت سرور و قواعد قیمت‌گذاری. افزودن endpoint بدون مسیر خطا و contract test، API کامل نمی‌سازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-034",
        "question": "قیمت نهایی سفارش از کجا تعیین شود؟",
        "options": [
          "فیلد total در body کلاینت بدون بررسی",
          "داده معتبر سمت سرور و قواعد قیمت‌گذاری",
          "جمع رشته‌های ارسالی در controller"
        ],
        "correctIndex": 1,
        "explanation": "داده معتبر سمت سرور و قواعد قیمت‌گذاری. مسیر ایجاد سفارش باید request validation، use case تراکنشی و DTO پاسخ را به هم وصل کند. شناسه و قیمت نهایی باید تحت اختیار سرور باشند؛ قیمت ارسالی کلاینت منبع حقیقت نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: قیمت نهایی سفارش از کجا تعیین شود؟",
        "answer": "داده معتبر سمت سرور و قواعد قیمت‌گذاری. افزودن endpoint بدون مسیر خطا و contract test، API کامل نمی‌سازد."
      }
    ],
    "summary": "مسیر ایجاد سفارش باید request validation، use case تراکنشی و DTO پاسخ را به هم وصل کند. شناسه و قیمت نهایی باید تحت اختیار سرور باشند؛ قیمت ارسالی کلاینت منبع حقیقت نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/web/webmvc.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-035",
    "slug": "global-exception-handling",
    "week": 6,
    "day": 5,
    "title": "مدیریت خطاهای سراسری و استاندارد RFC 7807 (ProblemDetail)",
    "titleEn": "Global Exception Handling",
    "description": "استفاده از @RestControllerAdvice و @ExceptionHandler برای تولید پاسخ‌های یکدست با فرمت مدرن ProblemDetail.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Exception Handling",
      "RestControllerAdvice",
      "RFC 7807",
      "ProblemDetail"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 5",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "در پاسخ عمومی خطای داخلی چه چیزی مناسب است",
      "برای not-found و خطای نامنتظره تست بنویس؛ پاسخ 500 نباید stack trace داشته باشد."
    ],
    "whyItMatters": "برای هر Exception نامشخص 400 برنگردان؛ خطای client و server را تفکیک کن.",
    "introduction": "استفاده از @RestControllerAdvice و @ExceptionHandler برای تولید پاسخ‌های یکدست با فرمت مدرن ProblemDetail.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Exception handler خطاهای دامنه را به قرارداد HTTP تبدیل می‌کند. ProblemDetail مدل استاندارد خطاست؛ stack trace و SQL نباید به client نشت کنند. کد پایدار خطا و traceId برای پشتیبانی مفیدند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای not-found و خطای نامنتظره تست بنویس؛ پاسخ 500 نباید stack trace داشته باشد.",
      "solution": "برای هر Exception نامشخص 400 برنگردان؛ خطای client و server را تفکیک کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@ExceptionHandler(OrderNotFoundException.class)\nProblemDetail notFound(OrderNotFoundException error) {\n    return ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, \"Order not found\");\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Global Exception Handling",
      "explanation": "Controller/DTO در Nest مشابهت دارند، اما Bean Validation و زنجیره Servlet قرارداد خود را دارند. status و body را از قواعد تجاری مستقل طراحی کن."
    },
    "commonMistakes": [
      {
        "mistake": "برای هر Exception نامشخص 400 برنگردان؛ خطای client و server را تفکیک کن.",
        "whyBad": "Exception handler خطاهای دامنه را به قرارداد HTTP تبدیل می‌کند. ProblemDetail مدل استاندارد خطاست؛ stack trace و SQL نباید به client نشت کنند. کد پایدار خطا و traceId برای پشتیبانی مفیدند.",
        "solution": "پیام امن و شناسه رهگیری"
      }
    ],
    "bestPractices": [
      "برای هر Exception نامشخص 400 برنگردان؛ خطای client و server را تفکیک کن.",
      "برای not-found و خطای نامنتظره تست بنویس؛ پاسخ 500 نباید stack trace داشته باشد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای not-found و خطای نامنتظره تست بنویس؛ پاسخ 500 نباید stack trace داشته باشد.",
      "acceptanceCriteria": [
        "برای not-found و خطای نامنتظره تست بنویس؛ پاسخ 500 نباید stack trace داشته باشد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "برای هر Exception نامشخص 400 برنگردان؛ خطای client و server را تفکیک کن."
      ],
      "solution": {
        "code": "@ExceptionHandler(OrderNotFoundException.class)\nProblemDetail notFound(OrderNotFoundException error) {\n    return ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, \"Order not found\");\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. پیام امن و شناسه رهگیری. برای هر Exception نامشخص 400 برنگردان؛ خطای client و server را تفکیک کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-035",
        "question": "در پاسخ عمومی خطای داخلی چه چیزی مناسب است؟",
        "options": [
          "SQL کامل و password اتصال",
          "نام تمام کلاس‌ها و stack trace",
          "پیام امن و شناسه رهگیری"
        ],
        "correctIndex": 2,
        "explanation": "پیام امن و شناسه رهگیری. Exception handler خطاهای دامنه را به قرارداد HTTP تبدیل می‌کند. ProblemDetail مدل استاندارد خطاست؛ stack trace و SQL نباید به client نشت کنند. کد پایدار خطا و traceId برای پشتیبانی مفیدند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: در پاسخ عمومی خطای داخلی چه چیزی مناسب است؟",
        "answer": "پیام امن و شناسه رهگیری. برای هر Exception نامشخص 400 برنگردان؛ خطای client و server را تفکیک کن."
      }
    ],
    "summary": "Exception handler خطاهای دامنه را به قرارداد HTTP تبدیل می‌کند. ProblemDetail مدل استاندارد خطاست؛ stack trace و SQL نباید به client نشت کنند. کد پایدار خطا و traceId برای پشتیبانی مفیدند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/web/webmvc.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-036",
    "slug": "openapi-and-swagger",
    "week": 6,
    "day": 6,
    "title": "مستندسازی اتوماتیک وب‌سرویس با OpenAPI 3 و Swagger",
    "titleEn": "OpenAPI and Swagger",
    "description": "پیکربندی SpringDoc OpenAPI، تولید خودکار صفحه تعاملی اسواگر و تعریف توصیف‌های دامنه بدون تکرار کد.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "OpenAPI",
      "Swagger",
      "SpringDoc",
      "API Documentation"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 5",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "OpenAPI بدون تست چه چیزی را تضمین نمی‌کند",
      "برای GET سفارش schema و دو response را مستند کن؛ یک contract test مغایرت body را آشکار کند."
    ],
    "whyItMatters": "نسخه springdoc یا ابزار مستندات باید با نسخه Boot سازگار باشد.",
    "introduction": "پیکربندی SpringDoc OpenAPI، تولید خودکار صفحه تعاملی اسواگر و تعریف توصیف‌های دامنه بدون تکرار کد.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "OpenAPI قرارداد قابل مصرف API است، نه فقط صفحه Swagger. schema، error response، pagination و security scheme باید رفتار واقعی را منعکس کنند. تولید مستندات به تنهایی تغییر ناسازگار را پیدا نمی‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای GET سفارش schema و دو response را مستند کن؛ یک contract test مغایرت body را آشکار کند.",
      "solution": "نسخه springdoc یا ابزار مستندات باید با نسخه Boot سازگار باشد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "paths:\n  /api/orders/{id}:\n    get:\n      responses:\n        \"200\":\n          description: Order found\n        \"404\":\n          description: Order not found",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "OpenAPI and Swagger",
      "explanation": "Controller/DTO در Nest مشابهت دارند، اما Bean Validation و زنجیره Servlet قرارداد خود را دارند. status و body را از قواعد تجاری مستقل طراحی کن."
    },
    "commonMistakes": [
      {
        "mistake": "نسخه springdoc یا ابزار مستندات باید با نسخه Boot سازگار باشد.",
        "whyBad": "OpenAPI قرارداد قابل مصرف API است، نه فقط صفحه Swagger. schema، error response، pagination و security scheme باید رفتار واقعی را منعکس کنند. تولید مستندات به تنهایی تغییر ناسازگار را پیدا نمی‌کند.",
        "solution": "تطابق رفتار واقعی پیاده‌سازی با قرارداد"
      }
    ],
    "bestPractices": [
      "نسخه springdoc یا ابزار مستندات باید با نسخه Boot سازگار باشد.",
      "برای GET سفارش schema و دو response را مستند کن؛ یک contract test مغایرت body را آشکار کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای GET سفارش schema و دو response را مستند کن؛ یک contract test مغایرت body را آشکار کند.",
      "acceptanceCriteria": [
        "برای GET سفارش schema و دو response را مستند کن؛ یک contract test مغایرت body را آشکار کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "نسخه springdoc یا ابزار مستندات باید با نسخه Boot سازگار باشد."
      ],
      "solution": {
        "code": "paths:\n  /api/orders/{id}:\n    get:\n      responses:\n        \"200\":\n          description: Order found\n        \"404\":\n          description: Order not found",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تطابق رفتار واقعی پیاده‌سازی با قرارداد. نسخه springdoc یا ابزار مستندات باید با نسخه Boot سازگار باشد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-036",
        "question": "OpenAPI بدون تست چه چیزی را تضمین نمی‌کند؟",
        "options": [
          "تطابق رفتار واقعی پیاده‌سازی با قرارداد",
          "امکان توصیف endpoint و schema",
          "امکان تولید client از یک specification معتبر"
        ],
        "correctIndex": 0,
        "explanation": "تطابق رفتار واقعی پیاده‌سازی با قرارداد. OpenAPI قرارداد قابل مصرف API است، نه فقط صفحه Swagger. schema، error response، pagination و security scheme باید رفتار واقعی را منعکس کنند. تولید مستندات به تنهایی تغییر ناسازگار را پیدا نمی‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: OpenAPI بدون تست چه چیزی را تضمین نمی‌کند؟",
        "answer": "تطابق رفتار واقعی پیاده‌سازی با قرارداد. نسخه springdoc یا ابزار مستندات باید با نسخه Boot سازگار باشد."
      }
    ],
    "summary": "OpenAPI قرارداد قابل مصرف API است، نه فقط صفحه Swagger. schema، error response، pagination و security scheme باید رفتار واقعی را منعکس کنند. تولید مستندات به تنهایی تغییر ناسازگار را پیدا نمی‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/web/webmvc.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
