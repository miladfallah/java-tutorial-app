import { Lesson } from "../types";

export const WEEK_02_LESSONS: Lesson[] = [
  {
    "id": "lesson-007",
    "slug": "generics-and-type-bounds",
    "week": 2,
    "day": 1,
    "title": "ژنریک‌ها، پاک‌سازی نوع (Type Erasure) و کران‌های نوع",
    "titleEn": "Generics and Type Bounds",
    "description": "درک عملکرد ژنریک‌ها در سطح کامپایلر جاوا، مقایسه با Generics در تایپ‌اسکریپت و نحوه استفاده از PECS (Producer Extends, Consumer Super).",
    "category": "Java Core",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Generics",
      "Type Erasure",
      "PECS",
      "Wildcards",
      "Type Safety"
    ],
    "prerequisites": [
      "مدل کلاس، متد و کالکشن‌های هفته اول",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای مقصدی که Integer می‌پذیرد کدام مناسب است",
      "متد copy را با List<Integer> و List<Number> آزمایش کن؛ تلاش برای افزودن Double به مبدا Integer باید کامپایل نشود."
    ],
    "whyItMatters": "raw type و cast اجباری ایمنی قرارداد را دور می‌زنند؛ warning را پنهان نکن.",
    "introduction": "درک عملکرد ژنریک‌ها در سطح کامپایلر جاوا، مقایسه با Generics در تایپ‌اسکریپت و نحوه استفاده از PECS (Producer Extends, Consumer Super).",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "ژنریک جاوا در زمان کامپایل قرارداد نوع را بررسی می‌کند؛ List<Integer> زیرنوع List<Number> نیست. از ? extends برای خواندن و ? super برای افزودن استفاده کن. برخلاف تایپ TypeScript، پارامتر نوع جاوا نیز غالباً در runtime پاک می‌شود؛ new T() مجاز نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "متد copy را با List<Integer> و List<Number> آزمایش کن؛ تلاش برای افزودن Double به مبدا Integer باید کامپایل نشود.",
      "solution": "raw type و cast اجباری ایمنی قرارداد را دور می‌زنند؛ warning را پنهان نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "static <T> void copy(List<? extends T> from, List<? super T> to) {\n    for (T value : from) to.add(value);\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Generics and Type Bounds",
      "explanation": "در TypeScript تایپ‌ها هنگام اجرا حذف می‌شوند؛ قرارداد کامپایل جاوا هم جای validation ورودی را نمی‌گیرد. به API و نوع خطای مثال دقت کن."
    },
    "commonMistakes": [
      {
        "mistake": "raw type و cast اجباری ایمنی قرارداد را دور می‌زنند؛ warning را پنهان نکن.",
        "whyBad": "ژنریک جاوا در زمان کامپایل قرارداد نوع را بررسی می‌کند؛ List<Integer> زیرنوع List<Number> نیست. از ? extends برای خواندن و ? super برای افزودن استفاده کن. برخلاف تایپ TypeScript، پارامتر نوع جاوا نیز غالباً در runtime پاک می‌شود؛ new T() مجاز نیست.",
        "solution": "List<? super Integer>"
      }
    ],
    "bestPractices": [
      "raw type و cast اجباری ایمنی قرارداد را دور می‌زنند؛ warning را پنهان نکن.",
      "متد copy را با List<Integer> و List<Number> آزمایش کن؛ تلاش برای افزودن Double به مبدا Integer باید کامپایل نشود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "متد copy را با List<Integer> و List<Number> آزمایش کن؛ تلاش برای افزودن Double به مبدا Integer باید کامپایل نشود.",
      "acceptanceCriteria": [
        "متد copy را با List<Integer> و List<Number> آزمایش کن؛ تلاش برای افزودن Double به مبدا Integer باید کامپایل نشود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "raw type و cast اجباری ایمنی قرارداد را دور می‌زنند؛ warning را پنهان نکن."
      ],
      "solution": {
        "code": "static <T> void copy(List<? extends T> from, List<? super T> to) {\n    for (T value : from) to.add(value);\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. List<? super Integer>. raw type و cast اجباری ایمنی قرارداد را دور می‌زنند؛ warning را پنهان نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-007",
        "question": "برای مقصدی که Integer می‌پذیرد کدام مناسب است؟",
        "options": [
          "List<? extends Integer>",
          "List<? super Integer>",
          "List<?> با افزودن مستقیم هر Object"
        ],
        "correctIndex": 1,
        "explanation": "List<? super Integer>. ژنریک جاوا در زمان کامپایل قرارداد نوع را بررسی می‌کند؛ List<Integer> زیرنوع List<Number> نیست. از ? extends برای خواندن و ? super برای افزودن استفاده کن. برخلاف تایپ TypeScript، پارامتر نوع جاوا نیز غالباً در runtime پاک می‌شود؛ new T() مجاز نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای مقصدی که Integer می‌پذیرد کدام مناسب است؟",
        "answer": "List<? super Integer>. raw type و cast اجباری ایمنی قرارداد را دور می‌زنند؛ warning را پنهان نکن."
      }
    ],
    "summary": "ژنریک جاوا در زمان کامپایل قرارداد نوع را بررسی می‌کند؛ List<Integer> زیرنوع List<Number> نیست. از ? extends برای خواندن و ? super برای افزودن استفاده کن. برخلاف تایپ TypeScript، پارامتر نوع جاوا نیز غالباً در runtime پاک می‌شود؛ new T() مجاز نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/generics/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-008",
    "slug": "exception-handling-and-design",
    "week": 2,
    "day": 2,
    "title": "طراحی اصولی سیستم خطاها: Checked در برابر Unchecked",
    "titleEn": "Exception Handling and Exception Design",
    "description": "فلسفه استثناها در جاوا، تفاوت ساختاری با Error Handling در نودجی‌اس و طراحی کاتالوگ خطاهای اختصاصی دامنه تجارت الکترونیک.",
    "category": "Java Core",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Exceptions",
      "Checked vs Unchecked",
      "Domain Exceptions",
      "Error Design",
      "Try-with-resources"
    ],
    "prerequisites": [
      "مدل کلاس، متد و کالکشن‌های هفته اول",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "هنگام ترجمه IOException چه چیزی حفظ شود",
      "یک فایل موقت بخوان و مسیر ناموجود را تست کن؛ cause و بسته‌شدن stream را بررسی کن."
    ],
    "whyItMatters": "Exception را با return null نپوشان؛ خطای قابل انتظار را با HTTP response یکی نکن.",
    "introduction": "فلسفه استثناها در جاوا، تفاوت ساختاری با Error Handling در نودجی‌اس و طراحی کاتالوگ خطاهای اختصاصی دامنه تجارت الکترونیک.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Checked exception در امضای متد اعلام یا مدیریت می‌شود؛ RuntimeException چنین اجباری ندارد. خطای دامنه را از خطای زیرساخت جدا کن و هنگام ترجمه exception علت اصلی را حفظ کن. try-with-resources منابع AutoCloseable را حتی در شکست می‌بندد."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک فایل موقت بخوان و مسیر ناموجود را تست کن؛ cause و بسته‌شدن stream را بررسی کن.",
      "solution": "Exception را با return null نپوشان؛ خطای قابل انتظار را با HTTP response یکی نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "try (var input = Files.newInputStream(path)) {\n    return input.readAllBytes();\n} catch (IOException cause) {\n    throw new UncheckedIOException(\"Cannot read order\", cause);\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Exception Handling and Exception Design",
      "explanation": "در TypeScript تایپ‌ها هنگام اجرا حذف می‌شوند؛ قرارداد کامپایل جاوا هم جای validation ورودی را نمی‌گیرد. به API و نوع خطای مثال دقت کن."
    },
    "commonMistakes": [
      {
        "mistake": "Exception را با return null نپوشان؛ خطای قابل انتظار را با HTTP response یکی نکن.",
        "whyBad": "Checked exception در امضای متد اعلام یا مدیریت می‌شود؛ RuntimeException چنین اجباری ندارد. خطای دامنه را از خطای زیرساخت جدا کن و هنگام ترجمه exception علت اصلی را حفظ کن. try-with-resources منابع AutoCloseable را حتی در شکست می‌بندد.",
        "solution": "علت اصلی در cause"
      }
    ],
    "bestPractices": [
      "Exception را با return null نپوشان؛ خطای قابل انتظار را با HTTP response یکی نکن.",
      "یک فایل موقت بخوان و مسیر ناموجود را تست کن؛ cause و بسته‌شدن stream را بررسی کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک فایل موقت بخوان و مسیر ناموجود را تست کن؛ cause و بسته‌شدن stream را بررسی کن.",
      "acceptanceCriteria": [
        "یک فایل موقت بخوان و مسیر ناموجود را تست کن؛ cause و بسته‌شدن stream را بررسی کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "Exception را با return null نپوشان؛ خطای قابل انتظار را با HTTP response یکی نکن."
      ],
      "solution": {
        "code": "try (var input = Files.newInputStream(path)) {\n    return input.readAllBytes();\n} catch (IOException cause) {\n    throw new UncheckedIOException(\"Cannot read order\", cause);\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. علت اصلی در cause. Exception را با return null نپوشان؛ خطای قابل انتظار را با HTTP response یکی نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-008",
        "question": "هنگام ترجمه IOException چه چیزی حفظ شود؟",
        "options": [
          "فقط متن getMessage بدون cause",
          "نادیده‌گرفتن خطا و برگرداندن آرایه خالی",
          "علت اصلی در cause"
        ],
        "correctIndex": 2,
        "explanation": "علت اصلی در cause. Checked exception در امضای متد اعلام یا مدیریت می‌شود؛ RuntimeException چنین اجباری ندارد. خطای دامنه را از خطای زیرساخت جدا کن و هنگام ترجمه exception علت اصلی را حفظ کن. try-with-resources منابع AutoCloseable را حتی در شکست می‌بندد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: هنگام ترجمه IOException چه چیزی حفظ شود؟",
        "answer": "علت اصلی در cause. Exception را با return null نپوشان؛ خطای قابل انتظار را با HTTP response یکی نکن."
      }
    ],
    "summary": "Checked exception در امضای متد اعلام یا مدیریت می‌شود؛ RuntimeException چنین اجباری ندارد. خطای دامنه را از خطای زیرساخت جدا کن و هنگام ترجمه exception علت اصلی را حفظ کن. try-with-resources منابع AutoCloseable را حتی در شکست می‌بندد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/generics/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-009",
    "slug": "solid-principles-in-java",
    "week": 2,
    "day": 3,
    "title": "پیاده‌سازی پروداکشن اصول SOLID در معماری جاوا",
    "titleEn": "SOLID Principles in Java",
    "description": "بررسی پنج اصل مهندسی نرم‌افزار تمیز با مثال‌های دنیای واقعی، تحلیل نقاط نقض و بازطراحی اصولی اجزای سیستم سفارشات.",
    "category": "Java Core",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "SOLID",
      "Clean Architecture",
      "Design Principles",
      "Decoupling"
    ],
    "prerequisites": [
      "مدل کلاس، متد و کالکشن‌های هفته اول",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "interface پرداخت کجا تعریف شود",
      "برای PaymentPort یک fake بساز و نشان بده تغییر درگاه، منطق سفارش را تغییر نمی‌دهد."
    ],
    "whyItMatters": "تعداد زیاد abstraction بدون یک نقطه تغییر واقعی، خواندن و تست را سخت می‌کند.",
    "introduction": "بررسی پنج اصل مهندسی نرم‌افزار تمیز با مثال‌های دنیای واقعی، تحلیل نقاط نقض و بازطراحی اصولی اجزای سیستم سفارشات.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "SOLID ابزار کنترل تغییر است، نه دستور ساخت interface برای هر کلاس. سرویس سفارش باید به قرارداد پرداخت وابسته باشد، نه SDK یک درگاه. جایگزینی پیاده‌سازی نباید شرط‌های قرارداد ورودی و خروجی را بشکند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای PaymentPort یک fake بساز و نشان بده تغییر درگاه، منطق سفارش را تغییر نمی‌دهد.",
      "solution": "تعداد زیاد abstraction بدون یک نقطه تغییر واقعی، خواندن و تست را سخت می‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "interface PaymentPort { Receipt charge(Money amount); }\nfinal class Checkout {\n    private final PaymentPort payments;\n    Checkout(PaymentPort payments) { this.payments = payments; }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "SOLID Principles in Java",
      "explanation": "در TypeScript تایپ‌ها هنگام اجرا حذف می‌شوند؛ قرارداد کامپایل جاوا هم جای validation ورودی را نمی‌گیرد. به API و نوع خطای مثال دقت کن."
    },
    "commonMistakes": [
      {
        "mistake": "تعداد زیاد abstraction بدون یک نقطه تغییر واقعی، خواندن و تست را سخت می‌کند.",
        "whyBad": "SOLID ابزار کنترل تغییر است، نه دستور ساخت interface برای هر کلاس. سرویس سفارش باید به قرارداد پرداخت وابسته باشد، نه SDK یک درگاه. جایگزینی پیاده‌سازی نباید شرط‌های قرارداد ورودی و خروجی را بشکند.",
        "solution": "نزدیک نیاز لایه مصرف‌کننده و مستقل از SDK"
      }
    ],
    "bestPractices": [
      "تعداد زیاد abstraction بدون یک نقطه تغییر واقعی، خواندن و تست را سخت می‌کند.",
      "برای PaymentPort یک fake بساز و نشان بده تغییر درگاه، منطق سفارش را تغییر نمی‌دهد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای PaymentPort یک fake بساز و نشان بده تغییر درگاه، منطق سفارش را تغییر نمی‌دهد.",
      "acceptanceCriteria": [
        "برای PaymentPort یک fake بساز و نشان بده تغییر درگاه، منطق سفارش را تغییر نمی‌دهد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "تعداد زیاد abstraction بدون یک نقطه تغییر واقعی، خواندن و تست را سخت می‌کند."
      ],
      "solution": {
        "code": "interface PaymentPort { Receipt charge(Money amount); }\nfinal class Checkout {\n    private final PaymentPort payments;\n    Checkout(PaymentPort payments) { this.payments = payments; }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. نزدیک نیاز لایه مصرف‌کننده و مستقل از SDK. تعداد زیاد abstraction بدون یک نقطه تغییر واقعی، خواندن و تست را سخت می‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-009",
        "question": "interface پرداخت کجا تعریف شود؟",
        "options": [
          "نزدیک نیاز لایه مصرف‌کننده و مستقل از SDK",
          "داخل کلاس SDK درگاه و وابسته به پاسخ اختصاصی آن",
          "به ازای هر متد getter یک interface مستقل"
        ],
        "correctIndex": 0,
        "explanation": "نزدیک نیاز لایه مصرف‌کننده و مستقل از SDK. SOLID ابزار کنترل تغییر است، نه دستور ساخت interface برای هر کلاس. سرویس سفارش باید به قرارداد پرداخت وابسته باشد، نه SDK یک درگاه. جایگزینی پیاده‌سازی نباید شرط‌های قرارداد ورودی و خروجی را بشکند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: interface پرداخت کجا تعریف شود؟",
        "answer": "نزدیک نیاز لایه مصرف‌کننده و مستقل از SDK. تعداد زیاد abstraction بدون یک نقطه تغییر واقعی، خواندن و تست را سخت می‌کند."
      }
    ],
    "summary": "SOLID ابزار کنترل تغییر است، نه دستور ساخت interface برای هر کلاس. سرویس سفارش باید به قرارداد پرداخت وابسته باشد، نه SDK یک درگاه. جایگزینی پیاده‌سازی نباید شرط‌های قرارداد ورودی و خروجی را بشکند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/generics/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-010",
    "slug": "implementing-order-validation",
    "week": 2,
    "day": 4,
    "title": "پیاده‌سازی سرویس اعتبارسنجی دامنه سفارشات",
    "titleEn": "Implementing Order Validation",
    "description": "توسعه اعتبارسنجی قوانین تجاری سخت‌گیرانه (قیمت، سقف سفارش، موجودی انبار) با استفاده از اینترفیس‌ها و الگوهای رفتاری بدون وابستگی خارجی.",
    "category": "Java Core",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Validation",
      "Business Rules",
      "Order Processing"
    ],
    "prerequisites": [
      "مدل کلاس، متد و کالکشن‌های هفته اول",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کنترل موجودی کافی در کدام دسته است",
      "برای quantity صفر، منفی و یک، تست مرزی بنویس؛ ساخت مستقیم OrderLine نامعتبر نیز باید شکست بخورد."
    ],
    "whyItMatters": "validate سپس update بدون تراکنش در حضور درخواست همزمان کافی نیست.",
    "introduction": "توسعه اعتبارسنجی قوانین تجاری سخت‌گیرانه (قیمت، سقف سفارش، موجودی انبار) با استفاده از اینترفیس‌ها و الگوهای رفتاری بدون وابستگی خارجی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "اعتبارسنجی شکل درخواست با اعتبار دامنه فرق دارد: quantity مثبت است اما موجودی کافی نیازمند داده فعلی انبار است. invariant باید داخل دامنه نیز حفظ شود تا مسیرهای غیر HTTP نتوانند آن را دور بزنند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای quantity صفر، منفی و یک، تست مرزی بنویس؛ ساخت مستقیم OrderLine نامعتبر نیز باید شکست بخورد.",
      "solution": "validate سپس update بدون تراکنش در حضور درخواست همزمان کافی نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "record OrderLine(String sku, int quantity) {\n    OrderLine {\n        if (sku == null || sku.isBlank() || quantity < 1)\n            throw new IllegalArgumentException(\"Invalid line\");\n    }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Implementing Order Validation",
      "explanation": "در TypeScript تایپ‌ها هنگام اجرا حذف می‌شوند؛ قرارداد کامپایل جاوا هم جای validation ورودی را نمی‌گیرد. به API و نوع خطای مثال دقت کن."
    },
    "commonMistakes": [
      {
        "mistake": "validate سپس update بدون تراکنش در حضور درخواست همزمان کافی نیست.",
        "whyBad": "اعتبارسنجی شکل درخواست با اعتبار دامنه فرق دارد: quantity مثبت است اما موجودی کافی نیازمند داده فعلی انبار است. invariant باید داخل دامنه نیز حفظ شود تا مسیرهای غیر HTTP نتوانند آن را دور بزنند.",
        "solution": "قاعده دامنه وابسته به داده و تراکنش"
      }
    ],
    "bestPractices": [
      "validate سپس update بدون تراکنش در حضور درخواست همزمان کافی نیست.",
      "برای quantity صفر، منفی و یک، تست مرزی بنویس؛ ساخت مستقیم OrderLine نامعتبر نیز باید شکست بخورد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای quantity صفر، منفی و یک، تست مرزی بنویس؛ ساخت مستقیم OrderLine نامعتبر نیز باید شکست بخورد.",
      "acceptanceCriteria": [
        "برای quantity صفر، منفی و یک، تست مرزی بنویس؛ ساخت مستقیم OrderLine نامعتبر نیز باید شکست بخورد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "validate سپس update بدون تراکنش در حضور درخواست همزمان کافی نیست."
      ],
      "solution": {
        "code": "record OrderLine(String sku, int quantity) {\n    OrderLine {\n        if (sku == null || sku.isBlank() || quantity < 1)\n            throw new IllegalArgumentException(\"Invalid line\");\n    }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. قاعده دامنه وابسته به داده و تراکنش. validate سپس update بدون تراکنش در حضور درخواست همزمان کافی نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-010",
        "question": "کنترل موجودی کافی در کدام دسته است؟",
        "options": [
          "فقط اعتبارسنجی JSON",
          "قاعده دامنه وابسته به داده و تراکنش",
          "فقط محدودیت اندازه متن sku"
        ],
        "correctIndex": 1,
        "explanation": "قاعده دامنه وابسته به داده و تراکنش. اعتبارسنجی شکل درخواست با اعتبار دامنه فرق دارد: quantity مثبت است اما موجودی کافی نیازمند داده فعلی انبار است. invariant باید داخل دامنه نیز حفظ شود تا مسیرهای غیر HTTP نتوانند آن را دور بزنند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کنترل موجودی کافی در کدام دسته است؟",
        "answer": "قاعده دامنه وابسته به داده و تراکنش. validate سپس update بدون تراکنش در حضور درخواست همزمان کافی نیست."
      }
    ],
    "summary": "اعتبارسنجی شکل درخواست با اعتبار دامنه فرق دارد: quantity مثبت است اما موجودی کافی نیازمند داده فعلی انبار است. invariant باید داخل دامنه نیز حفظ شود تا مسیرهای غیر HTTP نتوانند آن را دور بزنند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/generics/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-011",
    "slug": "stream-api-and-lambdas",
    "week": 2,
    "day": 5,
    "title": "پردازش اعلانی داده‌ها با Stream API و Lambda Expressions",
    "titleEn": "Stream API and Lambda Expressions",
    "description": "مقایسه متدهای آرایه جاوااسکریپت با Java Streams، عملیات میانی و پایانی، Collectors، بهینه‌سازی محاسبات و خطرات جریان‌های موازی.",
    "category": "Java Core",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Streams",
      "Lambdas",
      "Functional Java",
      "Collectors",
      "Performance"
    ],
    "prerequisites": [
      "مدل کلاس، متد و کالکشن‌های هفته اول",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "بدون terminal operation چه اتفاقی می‌افتد",
      "مجموع سفارش خالی و چند قلم را تست کن؛ از تغییر متغیر بیرون stream پرهیز کن."
    ],
    "whyItMatters": "parallelStream برای کار I/O یا تراکنش دیتابیس انتخاب پیش‌فرض مناسبی نیست.",
    "introduction": "مقایسه متدهای آرایه جاوااسکریپت با Java Streams، عملیات میانی و پایانی، Collectors، بهینه‌سازی محاسبات و خطرات جریان‌های موازی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Stream یک pipeline تنبل است؛ terminal operation اجرای آن را آغاز می‌کند. map تبدیل، filter انتخاب و reduce تجمیع است. side effect در map، مخصوصاً با parallel، ترتیب و ایمنی را مبهم می‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "مجموع سفارش خالی و چند قلم را تست کن؛ از تغییر متغیر بیرون stream پرهیز کن.",
      "solution": "parallelStream برای کار I/O یا تراکنش دیتابیس انتخاب پیش‌فرض مناسبی نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "var total = lines.stream()\n    .filter(line -> line.quantity() > 0)\n    .map(line -> line.unitPrice().multiply(BigDecimal.valueOf(line.quantity())))\n    .reduce(BigDecimal.ZERO, BigDecimal::add);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Stream API and Lambda Expressions",
      "explanation": "در TypeScript تایپ‌ها هنگام اجرا حذف می‌شوند؛ قرارداد کامپایل جاوا هم جای validation ورودی را نمی‌گیرد. به API و نوع خطای مثال دقت کن."
    },
    "commonMistakes": [
      {
        "mistake": "parallelStream برای کار I/O یا تراکنش دیتابیس انتخاب پیش‌فرض مناسبی نیست.",
        "whyBad": "Stream یک pipeline تنبل است؛ terminal operation اجرای آن را آغاز می‌کند. map تبدیل، filter انتخاب و reduce تجمیع است. side effect در map، مخصوصاً با parallel، ترتیب و ایمنی را مبهم می‌کند.",
        "solution": "پردازش pipeline معمولاً آغاز نمی‌شود"
      }
    ],
    "bestPractices": [
      "parallelStream برای کار I/O یا تراکنش دیتابیس انتخاب پیش‌فرض مناسبی نیست.",
      "مجموع سفارش خالی و چند قلم را تست کن؛ از تغییر متغیر بیرون stream پرهیز کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "مجموع سفارش خالی و چند قلم را تست کن؛ از تغییر متغیر بیرون stream پرهیز کن.",
      "acceptanceCriteria": [
        "مجموع سفارش خالی و چند قلم را تست کن؛ از تغییر متغیر بیرون stream پرهیز کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "parallelStream برای کار I/O یا تراکنش دیتابیس انتخاب پیش‌فرض مناسبی نیست."
      ],
      "solution": {
        "code": "var total = lines.stream()\n    .filter(line -> line.quantity() > 0)\n    .map(line -> line.unitPrice().multiply(BigDecimal.valueOf(line.quantity())))\n    .reduce(BigDecimal.ZERO, BigDecimal::add);",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. پردازش pipeline معمولاً آغاز نمی‌شود. parallelStream برای کار I/O یا تراکنش دیتابیس انتخاب پیش‌فرض مناسبی نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-011",
        "question": "بدون terminal operation چه اتفاقی می‌افتد؟",
        "options": [
          "تمام mapها هنگام تعریف اجرا می‌شوند",
          "به طور خودکار یک thread جدید ساخته می‌شود",
          "پردازش pipeline معمولاً آغاز نمی‌شود"
        ],
        "correctIndex": 2,
        "explanation": "پردازش pipeline معمولاً آغاز نمی‌شود. Stream یک pipeline تنبل است؛ terminal operation اجرای آن را آغاز می‌کند. map تبدیل، filter انتخاب و reduce تجمیع است. side effect در map، مخصوصاً با parallel، ترتیب و ایمنی را مبهم می‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: بدون terminal operation چه اتفاقی می‌افتد؟",
        "answer": "پردازش pipeline معمولاً آغاز نمی‌شود. parallelStream برای کار I/O یا تراکنش دیتابیس انتخاب پیش‌فرض مناسبی نیست."
      }
    ],
    "summary": "Stream یک pipeline تنبل است؛ terminal operation اجرای آن را آغاز می‌کند. map تبدیل، filter انتخاب و reduce تجمیع است. side effect در map، مخصوصاً با parallel، ترتیب و ایمنی را مبهم می‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/generics/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-012",
    "slug": "logging-with-slf4j-and-logback",
    "week": 2,
    "day": 6,
    "title": "لاگ‌نویسی ساختاریافته سازمانی با SLF4J و Logback",
    "titleEn": "Logging with SLF4J",
    "description": "تفاوت انتزاع لاگ و پیاده‌سازی آن، فرمت‌بندی پارامتری جهت افزایش سرعت، سطوح لاگ‌نویسی و آماده‌سازی برای سیستم‌های لاگ متمرکز.",
    "category": "Java Core",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "SLF4J",
      "Logback",
      "Logging",
      "MDC",
      "Production Readiness"
    ],
    "prerequisites": [
      "مدل کلاس، متد و کالکشن‌های هفته اول",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای رخداد ثبت سفارش چه داده‌ای مناسب‌تر است",
      "یک مسیر موفق و یک شکست را log کن؛ ثابت کن token و payload شخصی در خروجی نیست."
    ],
    "whyItMatters": "logging جای error handling نیست؛ یک exception را در تمام لایه‌ها دوباره log نکن.",
    "introduction": "تفاوت انتزاع لاگ و پیاده‌سازی آن، فرمت‌بندی پارامتری جهت افزایش سرعت، سطوح لاگ‌نویسی و آماده‌سازی برای سیستم‌های لاگ متمرکز.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "SLF4J قرارداد logging است؛ backend تعیین می‌کند رخداد کجا و چگونه ذخیره شود. لاگ پارامتری ساخت رشته بیهوده را کم می‌کند. رخداد عملیاتی را با شناسه سفارش ثبت کن، نه داده حساس کاربر."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک مسیر موفق و یک شکست را log کن؛ ثابت کن token و payload شخصی در خروجی نیست.",
      "solution": "logging جای error handling نیست؛ یک exception را در تمام لایه‌ها دوباره log نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "private static final Logger log = LoggerFactory.getLogger(OrderService.class);\n// In a service method:\nlog.info(\"order_created orderId={} itemCount={}\", orderId, count);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Logging with SLF4J",
      "explanation": "در TypeScript تایپ‌ها هنگام اجرا حذف می‌شوند؛ قرارداد کامپایل جاوا هم جای validation ورودی را نمی‌گیرد. به API و نوع خطای مثال دقت کن."
    },
    "commonMistakes": [
      {
        "mistake": "logging جای error handling نیست؛ یک exception را در تمام لایه‌ها دوباره log نکن.",
        "whyBad": "SLF4J قرارداد logging است؛ backend تعیین می‌کند رخداد کجا و چگونه ذخیره شود. لاگ پارامتری ساخت رشته بیهوده را کم می‌کند. رخداد عملیاتی را با شناسه سفارش ثبت کن، نه داده حساس کاربر.",
        "solution": "شناسه سفارش و نتیجه عملیات"
      }
    ],
    "bestPractices": [
      "logging جای error handling نیست؛ یک exception را در تمام لایه‌ها دوباره log نکن.",
      "یک مسیر موفق و یک شکست را log کن؛ ثابت کن token و payload شخصی در خروجی نیست."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک مسیر موفق و یک شکست را log کن؛ ثابت کن token و payload شخصی در خروجی نیست.",
      "acceptanceCriteria": [
        "یک مسیر موفق و یک شکست را log کن؛ ثابت کن token و payload شخصی در خروجی نیست.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "logging جای error handling نیست؛ یک exception را در تمام لایه‌ها دوباره log نکن."
      ],
      "solution": {
        "code": "private static final Logger log = LoggerFactory.getLogger(OrderService.class);\n// In a service method:\nlog.info(\"order_created orderId={} itemCount={}\", orderId, count);",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. شناسه سفارش و نتیجه عملیات. logging جای error handling نیست؛ یک exception را در تمام لایه‌ها دوباره log نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-012",
        "question": "برای رخداد ثبت سفارش چه داده‌ای مناسب‌تر است؟",
        "options": [
          "شناسه سفارش و نتیجه عملیات",
          "Authorization header کامل",
          "رمز عبور برای دیباگ"
        ],
        "correctIndex": 0,
        "explanation": "شناسه سفارش و نتیجه عملیات. SLF4J قرارداد logging است؛ backend تعیین می‌کند رخداد کجا و چگونه ذخیره شود. لاگ پارامتری ساخت رشته بیهوده را کم می‌کند. رخداد عملیاتی را با شناسه سفارش ثبت کن، نه داده حساس کاربر."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای رخداد ثبت سفارش چه داده‌ای مناسب‌تر است؟",
        "answer": "شناسه سفارش و نتیجه عملیات. logging جای error handling نیست؛ یک exception را در تمام لایه‌ها دوباره log نکن."
      }
    ],
    "summary": "SLF4J قرارداد logging است؛ backend تعیین می‌کند رخداد کجا و چگونه ذخیره شود. لاگ پارامتری ساخت رشته بیهوده را کم می‌کند. رخداد عملیاتی را با شناسه سفارش ثبت کن، نه داده حساس کاربر.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/generics/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
