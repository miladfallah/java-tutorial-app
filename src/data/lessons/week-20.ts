import { Lesson } from "../types";

export const WEEK_20_LESSONS: Lesson[] = [
  {
    "id": "lesson-115",
    "slug": "completablefuture",
    "week": 20,
    "day": 1,
    "title": "برنامه‌نویسی ناهمگام و ترکیب وظایف با CompletableFuture",
    "titleEn": "CompletableFuture",
    "description": "زنجیره‌سازی عملیات غیرانسدادی با thenApply و thenCombine، مقایسه با Promise و async/await در جاوااسکریپت و مدیریت خطای خط لوله.",
    "category": "Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "CompletableFuture",
      "Async Java",
      "Promises vs Futures",
      "Non-blocking"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 19",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای متدی که خودش Future می‌دهد کدام مناسب‌تر است",
      "ترکیب دو مرحله async را با شکست مرحله دوم تست کن؛ exception نباید ناپدید شود."
    ],
    "whyItMatters": "orTimeout الزاماً عملیات زیرین را متوقف نمی‌کند؛ cancellation را جدا طراحی کن.",
    "introduction": "زنجیره‌سازی عملیات غیرانسدادی با thenApply و thenCombine، مقایسه با Promise و async/await در جاوااسکریپت و مدیریت خطای خط لوله.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "CompletableFuture ترکیب نتیجه async را بیان می‌کند؛ thenApply تبدیل همگام و thenCompose تخت‌کردن async تو‌در‌تو است. executor پیش‌فرض برای blocking I/O الزاماً مناسب نیست. خطا و timeout باید مسیر مشخص داشته باشند."
      }
    ],
    "realWorldScenario": {
      "scenario": "ترکیب دو مرحله async را با شکست مرحله دوم تست کن؛ exception نباید ناپدید شود.",
      "solution": "orTimeout الزاماً عملیات زیرین را متوقف نمی‌کند؛ cancellation را جدا طراحی کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "CompletableFuture<Product> product = loadProduct(id);\nCompletableFuture<Quote> quote = product.thenCompose(this::loadQuote)\n    .orTimeout(2, TimeUnit.SECONDS);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "CompletableFuture",
      "explanation": "CompletableFuture معادل کامل Promise نیست و Virtual Thread هم Event Loop نیست. blocking، executor، context و cancellation هرکدام قرارداد جدا دارند."
    },
    "commonMistakes": [
      {
        "mistake": "orTimeout الزاماً عملیات زیرین را متوقف نمی‌کند؛ cancellation را جدا طراحی کن.",
        "whyBad": "CompletableFuture ترکیب نتیجه async را بیان می‌کند؛ thenApply تبدیل همگام و thenCompose تخت‌کردن async تو‌در‌تو است. executor پیش‌فرض برای blocking I/O الزاماً مناسب نیست. خطا و timeout باید مسیر مشخص داشته باشند.",
        "solution": "thenCompose"
      }
    ],
    "bestPractices": [
      "orTimeout الزاماً عملیات زیرین را متوقف نمی‌کند؛ cancellation را جدا طراحی کن.",
      "ترکیب دو مرحله async را با شکست مرحله دوم تست کن؛ exception نباید ناپدید شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "ترکیب دو مرحله async را با شکست مرحله دوم تست کن؛ exception نباید ناپدید شود.",
      "acceptanceCriteria": [
        "ترکیب دو مرحله async را با شکست مرحله دوم تست کن؛ exception نباید ناپدید شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "orTimeout الزاماً عملیات زیرین را متوقف نمی‌کند؛ cancellation را جدا طراحی کن."
      ],
      "solution": {
        "code": "CompletableFuture<Product> product = loadProduct(id);\nCompletableFuture<Quote> quote = product.thenCompose(this::loadQuote)\n    .orTimeout(2, TimeUnit.SECONDS);",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. thenCompose. orTimeout الزاماً عملیات زیرین را متوقف نمی‌کند؛ cancellation را جدا طراحی کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-115",
        "question": "برای متدی که خودش Future می‌دهد کدام مناسب‌تر است؟",
        "options": [
          "thenApply و رهاکردن Future داخلی",
          "thenCompose",
          "join روی event loop بدون ملاحظه"
        ],
        "correctIndex": 1,
        "explanation": "thenCompose. CompletableFuture ترکیب نتیجه async را بیان می‌کند؛ thenApply تبدیل همگام و thenCompose تخت‌کردن async تو‌در‌تو است. executor پیش‌فرض برای blocking I/O الزاماً مناسب نیست. خطا و timeout باید مسیر مشخص داشته باشند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای متدی که خودش Future می‌دهد کدام مناسب‌تر است؟",
        "answer": "thenCompose. orTimeout الزاماً عملیات زیرین را متوقف نمی‌کند؛ cancellation را جدا طراحی کن."
      }
    ],
    "summary": "CompletableFuture ترکیب نتیجه async را بیان می‌کند؛ thenApply تبدیل همگام و thenCompose تخت‌کردن async تو‌در‌تو است. executor پیش‌فرض برای blocking I/O الزاماً مناسب نیست. خطا و timeout باید مسیر مشخص داشته باشند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/virtual-threads.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-116",
    "slug": "virtual-threads",
    "week": 20,
    "day": 2,
    "title": "انقلاب رشته‌های مجازی (Virtual Threads) در جاوا ۲۱ (Project Loom)",
    "titleEn": "Virtual Threads",
    "description": "کالبدشکافی Carrier Threads و رشته‌های مجازی با مصرف حافظه ناچیز، خداحافظی با مدل‌های پیچیده Reactive و بازگشت به کدنویسی سرراست.",
    "category": "Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Virtual Threads",
      "Java 21",
      "Project Loom",
      "High Concurrency"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 19",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "Virtual Thread چه چیزی را بیشتر هدف می‌گیرد",
      "یک بار I/O و یک بار CPU را با baseline یکسان مقایسه کن؛ throughput و p95 را جدا ثبت کن."
    ],
    "whyItMatters": "برای هر Virtual Thread یک اتصال DB دائمی رزرو نکن؛ backpressure را حفظ کن.",
    "introduction": "کالبدشکافی Carrier Threads و رشته‌های مجازی با مصرف حافظه ناچیز، خداحافظی با مدل‌های پیچیده Reactive و بازگشت به کدنویسی سرراست.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Virtual Thread برای همزمانی زیادِ کار منتظر I/O است، نه سریع‌ترکردن محاسبه CPU. تعداد connection و ظرفیت سرویس پایین‌دست همچنان محدود است. در Java 25، محدودیت pinning با synchronized نسبت به JDK 21 تغییر کرده؛ native blocking هنوز نیازمند بررسی است."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک بار I/O و یک بار CPU را با baseline یکسان مقایسه کن؛ throughput و p95 را جدا ثبت کن.",
      "solution": "برای هر Virtual Thread یک اتصال DB دائمی رزرو نکن؛ backpressure را حفظ کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n    var result = executor.submit(() -> blockingClient.load(id));\n    System.out.println(result.get());\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Virtual Threads",
      "explanation": "CompletableFuture معادل کامل Promise نیست و Virtual Thread هم Event Loop نیست. blocking، executor، context و cancellation هرکدام قرارداد جدا دارند."
    },
    "commonMistakes": [
      {
        "mistake": "برای هر Virtual Thread یک اتصال DB دائمی رزرو نکن؛ backpressure را حفظ کن.",
        "whyBad": "Virtual Thread برای همزمانی زیادِ کار منتظر I/O است، نه سریع‌ترکردن محاسبه CPU. تعداد connection و ظرفیت سرویس پایین‌دست همچنان محدود است. در Java 25، محدودیت pinning با synchronized نسبت به JDK 21 تغییر کرده؛ native blocking هنوز نیازمند بررسی است.",
        "solution": "همزمانی زیاد در کارهای منتظر I/O"
      }
    ],
    "bestPractices": [
      "برای هر Virtual Thread یک اتصال DB دائمی رزرو نکن؛ backpressure را حفظ کن.",
      "یک بار I/O و یک بار CPU را با baseline یکسان مقایسه کن؛ throughput و p95 را جدا ثبت کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک بار I/O و یک بار CPU را با baseline یکسان مقایسه کن؛ throughput و p95 را جدا ثبت کن.",
      "acceptanceCriteria": [
        "یک بار I/O و یک بار CPU را با baseline یکسان مقایسه کن؛ throughput و p95 را جدا ثبت کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "برای هر Virtual Thread یک اتصال DB دائمی رزرو نکن؛ backpressure را حفظ کن."
      ],
      "solution": {
        "code": "try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n    var result = executor.submit(() -> blockingClient.load(id));\n    System.out.println(result.get());\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. همزمانی زیاد در کارهای منتظر I/O. برای هر Virtual Thread یک اتصال DB دائمی رزرو نکن؛ backpressure را حفظ کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-116",
        "question": "Virtual Thread چه چیزی را بیشتر هدف می‌گیرد؟",
        "options": [
          "افزایش سرعت هر محاسبه CPU",
          "نامحدودکردن ظرفیت connection دیتابیس",
          "همزمانی زیاد در کارهای منتظر I/O"
        ],
        "correctIndex": 2,
        "explanation": "همزمانی زیاد در کارهای منتظر I/O. Virtual Thread برای همزمانی زیادِ کار منتظر I/O است، نه سریع‌ترکردن محاسبه CPU. تعداد connection و ظرفیت سرویس پایین‌دست همچنان محدود است. در Java 25، محدودیت pinning با synchronized نسبت به JDK 21 تغییر کرده؛ native blocking هنوز نیازمند بررسی است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: Virtual Thread چه چیزی را بیشتر هدف می‌گیرد؟",
        "answer": "همزمانی زیاد در کارهای منتظر I/O. برای هر Virtual Thread یک اتصال DB دائمی رزرو نکن؛ backpressure را حفظ کن."
      }
    ],
    "summary": "Virtual Thread برای همزمانی زیادِ کار منتظر I/O است، نه سریع‌ترکردن محاسبه CPU. تعداد connection و ظرفیت سرویس پایین‌دست همچنان محدود است. در Java 25، محدودیت pinning با synchronized نسبت به JDK 21 تغییر کرده؛ native blocking هنوز نیازمند بررسی است.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/virtual-threads.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-117",
    "slug": "backpressure-and-queueing",
    "week": 20,
    "day": 3,
    "title": "مدیریت فشار متقابل (Backpressure) و صف‌بندی ایمن تسک‌ها",
    "titleEn": "Backpressure and Queueing",
    "description": "جلوگیری از انباشت میلیون‌ها کار در صف‌های نامحدود با استفاده از ArrayBlockingQueue و استراتژی‌های Reject Handler.",
    "category": "Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Backpressure",
      "Queue Sizing",
      "Resource Protection"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 19",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "صف نامحدود هنگام overload چه ریسکی دارد",
      "با نرخ ورودی بالاتر از پردازش بار بده؛ صف نباید بی‌حد رشد کند و ردشدن قابل مشاهده باشد."
    ],
    "whyItMatters": "CallerRunsPolicy روی thread حساس مانند event loop می‌تواند توقف نامناسب بسازد.",
    "introduction": "جلوگیری از انباشت میلیون‌ها کار در صف‌های نامحدود با استفاده از ArrayBlockingQueue و استراتژی‌های Reject Handler.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "صف نامحدود overload را به تاخیر و مصرف حافظه تبدیل می‌کند. backpressure یعنی سرعت ورودی با ظرفیت هماهنگ شود؛ صف محدود، timeout و رد کنترل‌شده ابزارهای آن‌اند. از ظرفیت‌سازی بدون سنجش latency پرهیز کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "با نرخ ورودی بالاتر از پردازش بار بده؛ صف نباید بی‌حد رشد کند و ردشدن قابل مشاهده باشد.",
      "solution": "CallerRunsPolicy روی thread حساس مانند event loop می‌تواند توقف نامناسب بسازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "var pool = new ThreadPoolExecutor(4, 4, 0, TimeUnit.SECONDS,\n    new ArrayBlockingQueue<>(100), new ThreadPoolExecutor.AbortPolicy());",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Backpressure and Queueing",
      "explanation": "CompletableFuture معادل کامل Promise نیست و Virtual Thread هم Event Loop نیست. blocking، executor، context و cancellation هرکدام قرارداد جدا دارند."
    },
    "commonMistakes": [
      {
        "mistake": "CallerRunsPolicy روی thread حساس مانند event loop می‌تواند توقف نامناسب بسازد.",
        "whyBad": "صف نامحدود overload را به تاخیر و مصرف حافظه تبدیل می‌کند. backpressure یعنی سرعت ورودی با ظرفیت هماهنگ شود؛ صف محدود، timeout و رد کنترل‌شده ابزارهای آن‌اند. از ظرفیت‌سازی بدون سنجش latency پرهیز کن.",
        "solution": "رشد حافظه و latency بدون حد"
      }
    ],
    "bestPractices": [
      "CallerRunsPolicy روی thread حساس مانند event loop می‌تواند توقف نامناسب بسازد.",
      "با نرخ ورودی بالاتر از پردازش بار بده؛ صف نباید بی‌حد رشد کند و ردشدن قابل مشاهده باشد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با نرخ ورودی بالاتر از پردازش بار بده؛ صف نباید بی‌حد رشد کند و ردشدن قابل مشاهده باشد.",
      "acceptanceCriteria": [
        "با نرخ ورودی بالاتر از پردازش بار بده؛ صف نباید بی‌حد رشد کند و ردشدن قابل مشاهده باشد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "CallerRunsPolicy روی thread حساس مانند event loop می‌تواند توقف نامناسب بسازد."
      ],
      "solution": {
        "code": "var pool = new ThreadPoolExecutor(4, 4, 0, TimeUnit.SECONDS,\n    new ArrayBlockingQueue<>(100), new ThreadPoolExecutor.AbortPolicy());",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. رشد حافظه و latency بدون حد. CallerRunsPolicy روی thread حساس مانند event loop می‌تواند توقف نامناسب بسازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-117",
        "question": "صف نامحدود هنگام overload چه ریسکی دارد؟",
        "options": [
          "رشد حافظه و latency بدون حد",
          "حذف نیاز به rejection policy",
          "افزایش نامحدود توان CPU"
        ],
        "correctIndex": 0,
        "explanation": "رشد حافظه و latency بدون حد. صف نامحدود overload را به تاخیر و مصرف حافظه تبدیل می‌کند. backpressure یعنی سرعت ورودی با ظرفیت هماهنگ شود؛ صف محدود، timeout و رد کنترل‌شده ابزارهای آن‌اند. از ظرفیت‌سازی بدون سنجش latency پرهیز کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: صف نامحدود هنگام overload چه ریسکی دارد؟",
        "answer": "رشد حافظه و latency بدون حد. CallerRunsPolicy روی thread حساس مانند event loop می‌تواند توقف نامناسب بسازد."
      }
    ],
    "summary": "صف نامحدود overload را به تاخیر و مصرف حافظه تبدیل می‌کند. backpressure یعنی سرعت ورودی با ظرفیت هماهنگ شود؛ صف محدود، timeout و رد کنترل‌شده ابزارهای آن‌اند. از ظرفیت‌سازی بدون سنجش latency پرهیز کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/virtual-threads.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-118",
    "slug": "asynchronous-order-processing",
    "week": 20,
    "day": 4,
    "title": "پردازش غیرانسدادی اعتبارسنجی و ثبت سفارشات با Virtual Threads (پروژه محوری)",
    "titleEn": "Asynchronous Order Processing",
    "description": "به‌کارگیری Virtual Threads اسپرینگ برای پاسخگویی به هزاران درخواست سفارش همزمان بدون افزایش مصرف رم سرور.",
    "category": "Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Virtual Threads Implementation",
      "Order Processing"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 19",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "202 چه چیزی را اعلام می‌کند",
      "پس از پاسخ 202، worker را restart کن؛ کار پذیرفته‌شده نباید در صف حافظه‌ای گم شود."
    ],
    "whyItMatters": "fire-and-forget حافظه‌ای برای کار تجاری مهم، دوام لازم را ندارد.",
    "introduction": "به‌کارگیری Virtual Threads اسپرینگ برای پاسخگویی به هزاران درخواست سفارش همزمان بدون افزایش مصرف رم سرور.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "پذیرش کار async با تکمیل موفق آن فرق دارد. API می‌تواند 202 و شناسه job بدهد؛ وضعیت پردازش باید پایدار و قابل پیگیری باشد. @Async خودبه‌خود transaction caller یا context امنیتی را منتقل نمی‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "پس از پاسخ 202، worker را restart کن؛ کار پذیرفته‌شده نباید در صف حافظه‌ای گم شود.",
      "solution": "fire-and-forget حافظه‌ای برای کار تجاری مهم، دوام لازم را ندارد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "http",
        "code": "HTTP/1.1 202 Accepted\nLocation: /api/jobs/j1\nContent-Type: application/json\n\n{\"jobId\":\"j1\",\"status\":\"QUEUED\"}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Asynchronous Order Processing",
      "explanation": "CompletableFuture معادل کامل Promise نیست و Virtual Thread هم Event Loop نیست. blocking، executor، context و cancellation هرکدام قرارداد جدا دارند."
    },
    "commonMistakes": [
      {
        "mistake": "fire-and-forget حافظه‌ای برای کار تجاری مهم، دوام لازم را ندارد.",
        "whyBad": "پذیرش کار async با تکمیل موفق آن فرق دارد. API می‌تواند 202 و شناسه job بدهد؛ وضعیت پردازش باید پایدار و قابل پیگیری باشد. @Async خودبه‌خود transaction caller یا context امنیتی را منتقل نمی‌کند.",
        "solution": "پذیرش برای پردازش، نه تضمین تکمیل"
      }
    ],
    "bestPractices": [
      "fire-and-forget حافظه‌ای برای کار تجاری مهم، دوام لازم را ندارد.",
      "پس از پاسخ 202، worker را restart کن؛ کار پذیرفته‌شده نباید در صف حافظه‌ای گم شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "پس از پاسخ 202، worker را restart کن؛ کار پذیرفته‌شده نباید در صف حافظه‌ای گم شود.",
      "acceptanceCriteria": [
        "پس از پاسخ 202، worker را restart کن؛ کار پذیرفته‌شده نباید در صف حافظه‌ای گم شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "fire-and-forget حافظه‌ای برای کار تجاری مهم، دوام لازم را ندارد."
      ],
      "solution": {
        "code": "HTTP/1.1 202 Accepted\nLocation: /api/jobs/j1\nContent-Type: application/json\n\n{\"jobId\":\"j1\",\"status\":\"QUEUED\"}",
        "language": "http",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. پذیرش برای پردازش، نه تضمین تکمیل. fire-and-forget حافظه‌ای برای کار تجاری مهم، دوام لازم را ندارد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-118",
        "question": "202 چه چیزی را اعلام می‌کند؟",
        "options": [
          "اتمام قطعی همه مراحل سفارش",
          "پذیرش برای پردازش، نه تضمین تکمیل",
          "rollback خودکار پس از پاسخ"
        ],
        "correctIndex": 1,
        "explanation": "پذیرش برای پردازش، نه تضمین تکمیل. پذیرش کار async با تکمیل موفق آن فرق دارد. API می‌تواند 202 و شناسه job بدهد؛ وضعیت پردازش باید پایدار و قابل پیگیری باشد. @Async خودبه‌خود transaction caller یا context امنیتی را منتقل نمی‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: 202 چه چیزی را اعلام می‌کند؟",
        "answer": "پذیرش برای پردازش، نه تضمین تکمیل. fire-and-forget حافظه‌ای برای کار تجاری مهم، دوام لازم را ندارد."
      }
    ],
    "summary": "پذیرش کار async با تکمیل موفق آن فرق دارد. API می‌تواند 202 و شناسه job بدهد؛ وضعیت پردازش باید پایدار و قابل پیگیری باشد. @Async خودبه‌خود transaction caller یا context امنیتی را منتقل نمی‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/virtual-threads.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-119",
    "slug": "thread-pool-sizing",
    "week": 20,
    "day": 5,
    "title": "فرمول محاسباتی سایزبندی استخرهای رشته (Thread Pool Sizing)",
    "titleEn": "Thread Pool Sizing",
    "description": "محاسبه تعداد بهینه رشته‌ها برای کارهای I/O-Bound در برابر CPU-Bound بر اساس تعداد هسته‌های سیستم و زمان انتظار.",
    "category": "Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Thread Pool Sizing",
      "Performance Engineering",
      "CPU vs IO"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 19",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "افزایش pool چه زمانی می‌تواند بدتر کند",
      "با poolهای ۴، ۸ و ۱۶ یک workload ثابت اجرا کن؛ knee point را از latency و throughput پیدا کن."
    ],
    "whyItMatters": "میانگین latency به تنهایی tail latency و صف انتظار را پنهان می‌کند.",
    "introduction": "محاسبه تعداد بهینه رشته‌ها برای کارهای I/O-Bound در برابر CPU-Bound بر اساس تعداد هسته‌های سیستم و زمان انتظار.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "اندازه pool از CPU، زمان انتظار، latency هدف و ظرفیت وابستگی‌ها اثر می‌گیرد. فرمول‌های ساده نقطه شروع‌اند، نه نسخه قطعی. برای CPU-bound نزدیک تعداد هسته و برای I/O با محدودیت downstream اندازه‌گیری کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "با poolهای ۴، ۸ و ۱۶ یک workload ثابت اجرا کن؛ knee point را از latency و throughput پیدا کن.",
      "solution": "میانگین latency به تنهایی tail latency و صف انتظار را پنهان می‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Measure: active workers, queue length, rejection rate, p95 latency\nBound: DB connections and external-service concurrency\nTune one setting at a time under a representative workload.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Thread Pool Sizing",
      "explanation": "CompletableFuture معادل کامل Promise نیست و Virtual Thread هم Event Loop نیست. blocking، executor، context و cancellation هرکدام قرارداد جدا دارند."
    },
    "commonMistakes": [
      {
        "mistake": "میانگین latency به تنهایی tail latency و صف انتظار را پنهان می‌کند.",
        "whyBad": "اندازه pool از CPU، زمان انتظار، latency هدف و ظرفیت وابستگی‌ها اثر می‌گیرد. فرمول‌های ساده نقطه شروع‌اند، نه نسخه قطعی. برای CPU-bound نزدیک تعداد هسته و برای I/O با محدودیت downstream اندازه‌گیری کن.",
        "solution": "وقتی رقابت CPU یا فشار downstream بیشتر شود"
      }
    ],
    "bestPractices": [
      "میانگین latency به تنهایی tail latency و صف انتظار را پنهان می‌کند.",
      "با poolهای ۴، ۸ و ۱۶ یک workload ثابت اجرا کن؛ knee point را از latency و throughput پیدا کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با poolهای ۴، ۸ و ۱۶ یک workload ثابت اجرا کن؛ knee point را از latency و throughput پیدا کن.",
      "acceptanceCriteria": [
        "با poolهای ۴، ۸ و ۱۶ یک workload ثابت اجرا کن؛ knee point را از latency و throughput پیدا کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "میانگین latency به تنهایی tail latency و صف انتظار را پنهان می‌کند."
      ],
      "solution": {
        "code": "Measure: active workers, queue length, rejection rate, p95 latency\nBound: DB connections and external-service concurrency\nTune one setting at a time under a representative workload.",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. وقتی رقابت CPU یا فشار downstream بیشتر شود. میانگین latency به تنهایی tail latency و صف انتظار را پنهان می‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-119",
        "question": "افزایش pool چه زمانی می‌تواند بدتر کند؟",
        "options": [
          "هرگز؛ thread بیشتر همیشه بهتر است",
          "فقط وقتی زبان JavaScript باشد",
          "وقتی رقابت CPU یا فشار downstream بیشتر شود"
        ],
        "correctIndex": 2,
        "explanation": "وقتی رقابت CPU یا فشار downstream بیشتر شود. اندازه pool از CPU، زمان انتظار، latency هدف و ظرفیت وابستگی‌ها اثر می‌گیرد. فرمول‌های ساده نقطه شروع‌اند، نه نسخه قطعی. برای CPU-bound نزدیک تعداد هسته و برای I/O با محدودیت downstream اندازه‌گیری کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: افزایش pool چه زمانی می‌تواند بدتر کند؟",
        "answer": "وقتی رقابت CPU یا فشار downstream بیشتر شود. میانگین latency به تنهایی tail latency و صف انتظار را پنهان می‌کند."
      }
    ],
    "summary": "اندازه pool از CPU، زمان انتظار، latency هدف و ظرفیت وابستگی‌ها اثر می‌گیرد. فرمول‌های ساده نقطه شروع‌اند، نه نسخه قطعی. برای CPU-bound نزدیک تعداد هسته و برای I/O با محدودیت downstream اندازه‌گیری کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/virtual-threads.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-120",
    "slug": "introduction-to-load-testing",
    "week": 20,
    "day": 6,
    "title": "مقدمه‌ای بر تست بار (Load Testing) با k6 و تحلیل رفتار همزمانی",
    "titleEn": "Introduction to Load Testing",
    "description": "نگارش اسکریپت تست کارایی با k6، ارسال هزاران درخواست همزمان و شناسایی گلوگاه‌های همروندی در اپلیکیشن جاوا.",
    "category": "Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Load Testing",
      "k6",
      "Performance Metrics",
      "Throughput"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 19",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا فقط میانگین latency کافی نیست",
      "این baseline سلامت را اجرا کن؛ سپس سناریوی ثبت سفارش با داده مستقل و بررسی نتیجه تجاری اضافه کن."
    ],
    "whyItMatters": "هیچ عدد کارایی را بدون سخت‌افزار، dataset و روش تست به عنوان تضمین درس ثبت نکن.",
    "introduction": "نگارش اسکریپت تست کارایی با k6، ارسال هزاران درخواست همزمان و شناسایی گلوگاه‌های همروندی در اپلیکیشن جاوا.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Load test باید هدف، داده، نرخ ورودی و معیار شکست داشته باشد. warmup و steady state را جدا کن؛ p95/p99 و error rate مهم‌تر از فقط میانگین‌اند. request موفق با کار درست تجاری یکسان نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "این baseline سلامت را اجرا کن؛ سپس سناریوی ثبت سفارش با داده مستقل و بررسی نتیجه تجاری اضافه کن.",
      "solution": "هیچ عدد کارایی را بدون سخت‌افزار، dataset و روش تست به عنوان تضمین درس ثبت نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "javascript",
        "code": "import http from \"k6/http\";\nexport const options = { vus: 10, duration: \"30s\", thresholds: { http_req_failed: [\"rate<0.01\"] } };\nexport default function () { http.get(\"http://localhost:8080/actuator/health\"); }",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Introduction to Load Testing",
      "explanation": "CompletableFuture معادل کامل Promise نیست و Virtual Thread هم Event Loop نیست. blocking، executor، context و cancellation هرکدام قرارداد جدا دارند."
    },
    "commonMistakes": [
      {
        "mistake": "هیچ عدد کارایی را بدون سخت‌افزار، dataset و روش تست به عنوان تضمین درس ثبت نکن.",
        "whyBad": "Load test باید هدف، داده، نرخ ورودی و معیار شکست داشته باشد. warmup و steady state را جدا کن؛ p95/p99 و error rate مهم‌تر از فقط میانگین‌اند. request موفق با کار درست تجاری یکسان نیست.",
        "solution": "تاخیرهای دنباله و تجربه کاربران کند را پنهان می‌کند"
      }
    ],
    "bestPractices": [
      "هیچ عدد کارایی را بدون سخت‌افزار، dataset و روش تست به عنوان تضمین درس ثبت نکن.",
      "این baseline سلامت را اجرا کن؛ سپس سناریوی ثبت سفارش با داده مستقل و بررسی نتیجه تجاری اضافه کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "این baseline سلامت را اجرا کن؛ سپس سناریوی ثبت سفارش با داده مستقل و بررسی نتیجه تجاری اضافه کن.",
      "acceptanceCriteria": [
        "این baseline سلامت را اجرا کن؛ سپس سناریوی ثبت سفارش با داده مستقل و بررسی نتیجه تجاری اضافه کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "هیچ عدد کارایی را بدون سخت‌افزار، dataset و روش تست به عنوان تضمین درس ثبت نکن."
      ],
      "solution": {
        "code": "import http from \"k6/http\";\nexport const options = { vus: 10, duration: \"30s\", thresholds: { http_req_failed: [\"rate<0.01\"] } };\nexport default function () { http.get(\"http://localhost:8080/actuator/health\"); }",
        "language": "javascript",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تاخیرهای دنباله و تجربه کاربران کند را پنهان می‌کند. هیچ عدد کارایی را بدون سخت‌افزار، dataset و روش تست به عنوان تضمین درس ثبت نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-120",
        "question": "چرا فقط میانگین latency کافی نیست؟",
        "options": [
          "تاخیرهای دنباله و تجربه کاربران کند را پنهان می‌کند",
          "میانگین هیچ‌وقت قابل محاسبه نیست",
          "p95 همیشه از تمام timeoutها کمتر است"
        ],
        "correctIndex": 0,
        "explanation": "تاخیرهای دنباله و تجربه کاربران کند را پنهان می‌کند. Load test باید هدف، داده، نرخ ورودی و معیار شکست داشته باشد. warmup و steady state را جدا کن؛ p95/p99 و error rate مهم‌تر از فقط میانگین‌اند. request موفق با کار درست تجاری یکسان نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا فقط میانگین latency کافی نیست؟",
        "answer": "تاخیرهای دنباله و تجربه کاربران کند را پنهان می‌کند. هیچ عدد کارایی را بدون سخت‌افزار، dataset و روش تست به عنوان تضمین درس ثبت نکن."
      }
    ],
    "summary": "Load test باید هدف، داده، نرخ ورودی و معیار شکست داشته باشد. warmup و steady state را جدا کن؛ p95/p99 و error rate مهم‌تر از فقط میانگین‌اند. request موفق با کار درست تجاری یکسان نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/virtual-threads.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
