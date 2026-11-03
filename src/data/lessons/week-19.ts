import { Lesson } from "../types";

export const WEEK_19_LESSONS: Lesson[] = [
  {
    "id": "lesson-109",
    "slug": "redis-data-structures",
    "week": 19,
    "day": 1,
    "title": "کالبدشکافی ساختارهای داده Redis و سناریوهای کاربرد",
    "titleEn": "Redis Data Structures",
    "description": "بررسی String, Hash, List, Set و Sorted Set و مقایسه عملکرد ردیس به عنوان کش حافظه‌ای با پایگاه‌های داده رابطه‌ای.",
    "category": "Caching",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Redis",
      "In-Memory Database",
      "Data Structures",
      "NoSQL"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 18",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "دو فرمان GET و SET جدا چه تضمینی ندارند",
      "برای cache محصول TTL بگذار؛ نبود key و نبود محصول را از هم تفکیک کن."
    ],
    "whyItMatters": "داده حساس را بدون سیاست دسترسی، TTL و حفاظت کانال وارد cache نکن.",
    "introduction": "بررسی String, Hash, List, Set و Sorted Set و مقایسه عملکرد ردیس به عنوان کش حافظه‌ای با پایگاه‌های داده رابطه‌ای.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Redis فقط map رشته‌ای نیست: hash برای fieldها، set برای یکتایی و sorted set برای رتبه‌بندی مناسب‌اند. عملیات یک فرمان اتمیک است؛ چند فرمان جدا لزوماً یک تصمیم اتمیک نیستند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای cache محصول TTL بگذار؛ نبود key و نبود محصول را از هم تفکیک کن.",
      "solution": "داده حساس را بدون سیاست دسترسی، TTL و حفاظت کانال وارد cache نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "bash",
        "code": "redis-cli SET product:1 '{\"name\":\"book\"}' EX 60\nredis-cli GET product:1\nredis-cli TTL product:1",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Redis Data Structures",
      "explanation": "دانش Redis در Node منتقل می‌شود؛ annotationهای Spring فقط مسیر اتصال به cache را ساده می‌کنند، نه invalidation و consistency را."
    },
    "commonMistakes": [
      {
        "mistake": "داده حساس را بدون سیاست دسترسی، TTL و حفاظت کانال وارد cache نکن.",
        "whyBad": "Redis فقط map رشته‌ای نیست: hash برای fieldها، set برای یکتایی و sorted set برای رتبه‌بندی مناسب‌اند. عملیات یک فرمان اتمیک است؛ چند فرمان جدا لزوماً یک تصمیم اتمیک نیستند.",
        "solution": "اتمیک‌بودن تصمیم read-modify-write"
      }
    ],
    "bestPractices": [
      "داده حساس را بدون سیاست دسترسی، TTL و حفاظت کانال وارد cache نکن.",
      "برای cache محصول TTL بگذار؛ نبود key و نبود محصول را از هم تفکیک کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای cache محصول TTL بگذار؛ نبود key و نبود محصول را از هم تفکیک کن.",
      "acceptanceCriteria": [
        "برای cache محصول TTL بگذار؛ نبود key و نبود محصول را از هم تفکیک کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "داده حساس را بدون سیاست دسترسی، TTL و حفاظت کانال وارد cache نکن."
      ],
      "solution": {
        "code": "redis-cli SET product:1 '{\"name\":\"book\"}' EX 60\nredis-cli GET product:1\nredis-cli TTL product:1",
        "language": "bash",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. اتمیک‌بودن تصمیم read-modify-write. داده حساس را بدون سیاست دسترسی، TTL و حفاظت کانال وارد cache نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-109",
        "question": "دو فرمان GET و SET جدا چه تضمینی ندارند؟",
        "options": [
          "امکان ذخیره رشته",
          "اتمیک‌بودن تصمیم read-modify-write",
          "امکان انقضای key"
        ],
        "correctIndex": 1,
        "explanation": "اتمیک‌بودن تصمیم read-modify-write. Redis فقط map رشته‌ای نیست: hash برای fieldها، set برای یکتایی و sorted set برای رتبه‌بندی مناسب‌اند. عملیات یک فرمان اتمیک است؛ چند فرمان جدا لزوماً یک تصمیم اتمیک نیستند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: دو فرمان GET و SET جدا چه تضمینی ندارند؟",
        "answer": "اتمیک‌بودن تصمیم read-modify-write. داده حساس را بدون سیاست دسترسی، TTL و حفاظت کانال وارد cache نکن."
      }
    ],
    "summary": "Redis فقط map رشته‌ای نیست: hash برای fieldها، set برای یکتایی و sorted set برای رتبه‌بندی مناسب‌اند. عملیات یک فرمان اتمیک است؛ چند فرمان جدا لزوماً یک تصمیم اتمیک نیستند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://redis.io/docs/latest/develop/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-110",
    "slug": "spring-cache-abstraction",
    "week": 19,
    "day": 2,
    "title": "انتزاع کش در اسپرینگ با @Cacheable، @CachePut و @CacheEvict",
    "titleEn": "Spring Cache Abstraction",
    "description": "اتصال شفاف توابع به سیستم کش با انوتیشن‌ها، تنظیمات نام کلیدها و پیکربندی RedisCacheManager.",
    "category": "Caching",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Spring Cache",
      "Cacheable",
      "CacheEvict",
      "RedisCacheManager"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 18",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چه ورودی‌ای باید در cache key باشد",
      "دو tenant با id مشابه را تست کن؛ خروجی cache نباید میان مشتری‌ها نشت کند."
    ],
    "whyItMatters": "cache را جای authorization نگذار؛ هر hit همچنان باید به درخواست مجاز تعلق داشته باشد.",
    "introduction": "اتصال شفاف توابع به سیستم کش با انوتیشن‌ها، تنظیمات نام کلیدها و پیکربندی RedisCacheManager.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Spring Cache abstraction سیاست ذخیره را پشت annotation می‌برد؛ backend و cache manager هنوز باید درست پیکربندی شوند. key باید تمام ورودی‌های مؤثر مثل tenant را شامل شود. self-invocation می‌تواند cache advice را دور بزند."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو tenant با id مشابه را تست کن؛ خروجی cache نباید میان مشتری‌ها نشت کند.",
      "solution": "cache را جای authorization نگذار؛ هر hit همچنان باید به درخواست مجاز تعلق داشته باشد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Cacheable(cacheNames=\"products\", key=\"#tenant + ':' + #id\")\npublic ProductView find(String tenant, UUID id) {\n    return repository.load(tenant, id);\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Spring Cache Abstraction",
      "explanation": "دانش Redis در Node منتقل می‌شود؛ annotationهای Spring فقط مسیر اتصال به cache را ساده می‌کنند، نه invalidation و consistency را."
    },
    "commonMistakes": [
      {
        "mistake": "cache را جای authorization نگذار؛ هر hit همچنان باید به درخواست مجاز تعلق داشته باشد.",
        "whyBad": "Spring Cache abstraction سیاست ذخیره را پشت annotation می‌برد؛ backend و cache manager هنوز باید درست پیکربندی شوند. key باید تمام ورودی‌های مؤثر مثل tenant را شامل شود. self-invocation می‌تواند cache advice را دور بزند.",
        "solution": "تمام ورودی‌های مؤثر بر نتیجه از جمله tenant"
      }
    ],
    "bestPractices": [
      "cache را جای authorization نگذار؛ هر hit همچنان باید به درخواست مجاز تعلق داشته باشد.",
      "دو tenant با id مشابه را تست کن؛ خروجی cache نباید میان مشتری‌ها نشت کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو tenant با id مشابه را تست کن؛ خروجی cache نباید میان مشتری‌ها نشت کند.",
      "acceptanceCriteria": [
        "دو tenant با id مشابه را تست کن؛ خروجی cache نباید میان مشتری‌ها نشت کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "cache را جای authorization نگذار؛ هر hit همچنان باید به درخواست مجاز تعلق داشته باشد."
      ],
      "solution": {
        "code": "@Cacheable(cacheNames=\"products\", key=\"#tenant + ':' + #id\")\npublic ProductView find(String tenant, UUID id) {\n    return repository.load(tenant, id);\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تمام ورودی‌های مؤثر بر نتیجه از جمله tenant. cache را جای authorization نگذار؛ هر hit همچنان باید به درخواست مجاز تعلق داشته باشد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-110",
        "question": "چه ورودی‌ای باید در cache key باشد؟",
        "options": [
          "فقط نام متد برای همه درخواست‌ها",
          "شناسه thread برای reuse بیشتر",
          "تمام ورودی‌های مؤثر بر نتیجه از جمله tenant"
        ],
        "correctIndex": 2,
        "explanation": "تمام ورودی‌های مؤثر بر نتیجه از جمله tenant. Spring Cache abstraction سیاست ذخیره را پشت annotation می‌برد؛ backend و cache manager هنوز باید درست پیکربندی شوند. key باید تمام ورودی‌های مؤثر مثل tenant را شامل شود. self-invocation می‌تواند cache advice را دور بزند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چه ورودی‌ای باید در cache key باشد؟",
        "answer": "تمام ورودی‌های مؤثر بر نتیجه از جمله tenant. cache را جای authorization نگذار؛ هر hit همچنان باید به درخواست مجاز تعلق داشته باشد."
      }
    ],
    "summary": "Spring Cache abstraction سیاست ذخیره را پشت annotation می‌برد؛ backend و cache manager هنوز باید درست پیکربندی شوند. key باید تمام ورودی‌های مؤثر مثل tenant را شامل شود. self-invocation می‌تواند cache advice را دور بزند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://redis.io/docs/latest/develop/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-111",
    "slug": "cache-aside-and-cache-invalidation",
    "week": 19,
    "day": 3,
    "title": "الگوی کش مجزا (Cache-aside) و چالش ابطال کش (Cache Invalidation)",
    "titleEn": "Cache-aside and Cache Invalidation",
    "description": "چرا ابطال کش از سخت‌ترین مسائل مهندسی نرم‌افزار است و استراتژی‌های صحیح به‌روزرسانی اطلاعات پس از تغییر داده.",
    "category": "Caching",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Cache-aside",
      "Cache Invalidation",
      "Consistency"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 18",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "TTL چه چیزی را تضمین نمی‌کند",
      "write محصول و read همزمان را شبیه‌سازی کن؛ پنجره stale و راه کاهش آن را توضیح بده."
    ],
    "whyItMatters": "برای موجودی مالی یا مجوز دسترسی، tolerance داده stale را صریح و محتاطانه انتخاب کن.",
    "introduction": "چرا ابطال کش از سخت‌ترین مسائل مهندسی نرم‌افزار است و استراتژی‌های صحیح به‌روزرسانی اطلاعات پس از تغییر داده.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "در cache-aside ابتدا cache خوانده و در miss، DB بارگذاری می‌شود. پس از write سیاست invalidation لازم است؛ race میان خواننده و نویسنده می‌تواند مقدار قدیمی برگرداند. TTL فقط عمر خطا را محدود می‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "write محصول و read همزمان را شبیه‌سازی کن؛ پنجره stale و راه کاهش آن را توضیح بده.",
      "solution": "برای موجودی مالی یا مجوز دسترسی، tolerance داده stale را صریح و محتاطانه انتخاب کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Read: cache hit -> return; miss -> load DB -> cache with TTL\nWrite: commit DB -> invalidate affected keys\nDefine acceptable staleness and recovery when invalidation fails.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Cache-aside and Cache Invalidation",
      "explanation": "دانش Redis در Node منتقل می‌شود؛ annotationهای Spring فقط مسیر اتصال به cache را ساده می‌کنند، نه invalidation و consistency را."
    },
    "commonMistakes": [
      {
        "mistake": "برای موجودی مالی یا مجوز دسترسی، tolerance داده stale را صریح و محتاطانه انتخاب کن.",
        "whyBad": "در cache-aside ابتدا cache خوانده و در miss، DB بارگذاری می‌شود. پس از write سیاست invalidation لازم است؛ race میان خواننده و نویسنده می‌تواند مقدار قدیمی برگرداند. TTL فقط عمر خطا را محدود می‌کند.",
        "solution": "fresh بودن لحظه‌ای داده پس از هر write"
      }
    ],
    "bestPractices": [
      "برای موجودی مالی یا مجوز دسترسی، tolerance داده stale را صریح و محتاطانه انتخاب کن.",
      "write محصول و read همزمان را شبیه‌سازی کن؛ پنجره stale و راه کاهش آن را توضیح بده."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "write محصول و read همزمان را شبیه‌سازی کن؛ پنجره stale و راه کاهش آن را توضیح بده.",
      "acceptanceCriteria": [
        "write محصول و read همزمان را شبیه‌سازی کن؛ پنجره stale و راه کاهش آن را توضیح بده.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "برای موجودی مالی یا مجوز دسترسی، tolerance داده stale را صریح و محتاطانه انتخاب کن."
      ],
      "solution": {
        "code": "Read: cache hit -> return; miss -> load DB -> cache with TTL\nWrite: commit DB -> invalidate affected keys\nDefine acceptable staleness and recovery when invalidation fails.",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. fresh بودن لحظه‌ای داده پس از هر write. برای موجودی مالی یا مجوز دسترسی، tolerance داده stale را صریح و محتاطانه انتخاب کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-111",
        "question": "TTL چه چیزی را تضمین نمی‌کند؟",
        "options": [
          "fresh بودن لحظه‌ای داده پس از هر write",
          "انقضای خودکار key پس از مدت تنظیم‌شده",
          "امکان محدودکردن عمر cache"
        ],
        "correctIndex": 0,
        "explanation": "fresh بودن لحظه‌ای داده پس از هر write. در cache-aside ابتدا cache خوانده و در miss، DB بارگذاری می‌شود. پس از write سیاست invalidation لازم است؛ race میان خواننده و نویسنده می‌تواند مقدار قدیمی برگرداند. TTL فقط عمر خطا را محدود می‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: TTL چه چیزی را تضمین نمی‌کند؟",
        "answer": "fresh بودن لحظه‌ای داده پس از هر write. برای موجودی مالی یا مجوز دسترسی، tolerance داده stale را صریح و محتاطانه انتخاب کن."
      }
    ],
    "summary": "در cache-aside ابتدا cache خوانده و در miss، DB بارگذاری می‌شود. پس از write سیاست invalidation لازم است؛ race میان خواننده و نویسنده می‌تواند مقدار قدیمی برگرداند. TTL فقط عمر خطا را محدود می‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://redis.io/docs/latest/develop/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-112",
    "slug": "caching-product-data",
    "week": 19,
    "day": 4,
    "title": "کشینگ سریع داده‌های کالاها و لیست قیمت‌ها با Redis (پروژه محوری)",
    "titleEn": "Caching Product Data",
    "description": "کاهش بار کوئری‌های تکراری کاتالوگ با کش کردن در ردیس و پاکسازی هوشمند هنگام تغییر موجودی یا قیمت کالا.",
    "category": "Caching",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Redis Caching",
      "Product Catalog",
      "Performance Boost"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 18",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چه چیزی برای cache مناسب‌تر است",
      "دو read پیاپی را با شمارش DB call و سپس update/evict بررسی کن؛ خطای transaction را هم تست کن."
    ],
    "whyItMatters": "ترتیب commit و eviction مهم است؛ eviction پیش از commit می‌تواند race ایجاد کند.",
    "introduction": "کاهش بار کوئری‌های تکراری کاتالوگ با کش کردن در ردیس و پاکسازی هوشمند هنگام تغییر موجودی یا قیمت کالا.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "محصول خواندنی و کم‌تغییر گزینه مناسب cache است؛ قیمت نهایی سفارش باید هنگام تصمیم تجاری از منبع معتبر تعیین شود. DTO cache‌شده را از entity و session JPA جدا نگه دار."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو read پیاپی را با شمارش DB call و سپس update/evict بررسی کن؛ خطای transaction را هم تست کن.",
      "solution": "ترتیب commit و eviction مهم است؛ eviction پیش از commit می‌تواند race ایجاد کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Cacheable(\"productViews\")\npublic ProductView find(UUID id) { return products.loadView(id); }\n@CacheEvict(cacheNames=\"productViews\", key=\"#id\")\npublic void update(UUID id, UpdateProduct command) { products.update(id, command); }",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Caching Product Data",
      "explanation": "دانش Redis در Node منتقل می‌شود؛ annotationهای Spring فقط مسیر اتصال به cache را ساده می‌کنند، نه invalidation و consistency را."
    },
    "commonMistakes": [
      {
        "mistake": "ترتیب commit و eviction مهم است؛ eviction پیش از commit می‌تواند race ایجاد کند.",
        "whyBad": "محصول خواندنی و کم‌تغییر گزینه مناسب cache است؛ قیمت نهایی سفارش باید هنگام تصمیم تجاری از منبع معتبر تعیین شود. DTO cache‌شده را از entity و session JPA جدا نگه دار.",
        "solution": "DTO محصول با سیاست انقضا و invalidation مشخص"
      }
    ],
    "bestPractices": [
      "ترتیب commit و eviction مهم است؛ eviction پیش از commit می‌تواند race ایجاد کند.",
      "دو read پیاپی را با شمارش DB call و سپس update/evict بررسی کن؛ خطای transaction را هم تست کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو read پیاپی را با شمارش DB call و سپس update/evict بررسی کن؛ خطای transaction را هم تست کن.",
      "acceptanceCriteria": [
        "دو read پیاپی را با شمارش DB call و سپس update/evict بررسی کن؛ خطای transaction را هم تست کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "ترتیب commit و eviction مهم است؛ eviction پیش از commit می‌تواند race ایجاد کند."
      ],
      "solution": {
        "code": "@Cacheable(\"productViews\")\npublic ProductView find(UUID id) { return products.loadView(id); }\n@CacheEvict(cacheNames=\"productViews\", key=\"#id\")\npublic void update(UUID id, UpdateProduct command) { products.update(id, command); }",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. DTO محصول با سیاست انقضا و invalidation مشخص. ترتیب commit و eviction مهم است؛ eviction پیش از commit می‌تواند race ایجاد کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-112",
        "question": "چه چیزی برای cache مناسب‌تر است؟",
        "options": [
          "Entity managed مشترک میان threadها",
          "DTO محصول با سیاست انقضا و invalidation مشخص",
          "نتیجه authorization همه کاربران با key یکسان"
        ],
        "correctIndex": 1,
        "explanation": "DTO محصول با سیاست انقضا و invalidation مشخص. محصول خواندنی و کم‌تغییر گزینه مناسب cache است؛ قیمت نهایی سفارش باید هنگام تصمیم تجاری از منبع معتبر تعیین شود. DTO cache‌شده را از entity و session JPA جدا نگه دار."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چه چیزی برای cache مناسب‌تر است؟",
        "answer": "DTO محصول با سیاست انقضا و invalidation مشخص. ترتیب commit و eviction مهم است؛ eviction پیش از commit می‌تواند race ایجاد کند."
      }
    ],
    "summary": "محصول خواندنی و کم‌تغییر گزینه مناسب cache است؛ قیمت نهایی سفارش باید هنگام تصمیم تجاری از منبع معتبر تعیین شود. DTO cache‌شده را از entity و session JPA جدا نگه دار.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://redis.io/docs/latest/develop/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-113",
    "slug": "ttl-and-cache-stampede",
    "week": 19,
    "day": 5,
    "title": "تنظیم طول عمر (TTL) و راهکارهای جلوگیری از حمله Cache Stampede",
    "titleEn": "TTL and Cache Stampede",
    "description": "استفاده از قفل‌های توزیع‌شده با Redisson و تنوع‌بخشی به زمان انقضا جهت جلوگیری از هجوم همزمان درخواست‌ها به دیتابیس.",
    "category": "Caching",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "TTL",
      "Cache Stampede",
      "Dogpiling",
      "Distributed Locks"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 18",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "هدف jitter در TTL چیست",
      "با چند درخواست همزمان روی key منقضی، تعداد load DB را اندازه بگیر و با single-flight مقایسه کن."
    ],
    "whyItMatters": "lock بدون انقضا یا انتظار نامحدود می‌تواند مشکل stampede را به توقف تبدیل کند.",
    "introduction": "استفاده از قفل‌های توزیع‌شده با Redisson و تنوع‌بخشی به زمان انقضا جهت جلوگیری از هجوم همزمان درخواست‌ها به دیتابیس.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "انقضای همزمان key محبوب می‌تواند stampede بسازد. jitter در TTL، single-flight محدود و stale-while-revalidate در صورت پذیرش دامنه بار را کم می‌کنند. lock cache باید lease و timeout داشته باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "با چند درخواست همزمان روی key منقضی، تعداد load DB را اندازه بگیر و با single-flight مقایسه کن.",
      "solution": "lock بدون انقضا یا انتظار نامحدود می‌تواند مشکل stampede را به توقف تبدیل کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "base TTL = 60 seconds\nactual TTL = 60 + random(0..15) seconds\nOn hot miss: coordinate one loader; bound waiting and fallback.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "TTL and Cache Stampede",
      "explanation": "دانش Redis در Node منتقل می‌شود؛ annotationهای Spring فقط مسیر اتصال به cache را ساده می‌کنند، نه invalidation و consistency را."
    },
    "commonMistakes": [
      {
        "mistake": "lock بدون انقضا یا انتظار نامحدود می‌تواند مشکل stampede را به توقف تبدیل کند.",
        "whyBad": "انقضای همزمان key محبوب می‌تواند stampede بسازد. jitter در TTL، single-flight محدود و stale-while-revalidate در صورت پذیرش دامنه بار را کم می‌کنند. lock cache باید lease و timeout داشته باشد.",
        "solution": "پخش‌کردن زمان انقضا و کاهش موج همزمان"
      }
    ],
    "bestPractices": [
      "lock بدون انقضا یا انتظار نامحدود می‌تواند مشکل stampede را به توقف تبدیل کند.",
      "با چند درخواست همزمان روی key منقضی، تعداد load DB را اندازه بگیر و با single-flight مقایسه کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با چند درخواست همزمان روی key منقضی، تعداد load DB را اندازه بگیر و با single-flight مقایسه کن.",
      "acceptanceCriteria": [
        "با چند درخواست همزمان روی key منقضی، تعداد load DB را اندازه بگیر و با single-flight مقایسه کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "lock بدون انقضا یا انتظار نامحدود می‌تواند مشکل stampede را به توقف تبدیل کند."
      ],
      "solution": {
        "code": "base TTL = 60 seconds\nactual TTL = 60 + random(0..15) seconds\nOn hot miss: coordinate one loader; bound waiting and fallback.",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. پخش‌کردن زمان انقضا و کاهش موج همزمان. lock بدون انقضا یا انتظار نامحدود می‌تواند مشکل stampede را به توقف تبدیل کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-113",
        "question": "هدف jitter در TTL چیست؟",
        "options": [
          "دقیق‌ترکردن قیمت مالی",
          "تضمین durability Redis",
          "پخش‌کردن زمان انقضا و کاهش موج همزمان"
        ],
        "correctIndex": 2,
        "explanation": "پخش‌کردن زمان انقضا و کاهش موج همزمان. انقضای همزمان key محبوب می‌تواند stampede بسازد. jitter در TTL، single-flight محدود و stale-while-revalidate در صورت پذیرش دامنه بار را کم می‌کنند. lock cache باید lease و timeout داشته باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: هدف jitter در TTL چیست؟",
        "answer": "پخش‌کردن زمان انقضا و کاهش موج همزمان. lock بدون انقضا یا انتظار نامحدود می‌تواند مشکل stampede را به توقف تبدیل کند."
      }
    ],
    "summary": "انقضای همزمان key محبوب می‌تواند stampede بسازد. jitter در TTL، single-flight محدود و stale-while-revalidate در صورت پذیرش دامنه بار را کم می‌کنند. lock cache باید lease و timeout داشته باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://redis.io/docs/latest/develop/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-114",
    "slug": "redis-persistence-and-health-checks",
    "week": 19,
    "day": 6,
    "title": "پایداری داده در ردیس (RDB/AOF)، تنظیمات حافظه و تست سلامت",
    "titleEn": "Redis Persistence and Health Checks",
    "description": "مقایسه روش‌های ذخیره روی دیسک (Snapshotting در برابر Append-Only File)، سیاست‌های حذف حافظه (Eviction) و بررسی سلامت.",
    "category": "Caching",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Redis Persistence",
      "AOF",
      "RDB",
      "DevOps"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 18",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا PING موفق سلامت کل کاربرد Redis را اثبات می‌کند",
      "restart کنترل‌شده Redis را آزمایش و داده باقی‌مانده را بررسی کن؛ برای cache miss مسیر DB سالم بماند."
    ],
    "whyItMatters": "maxmemory و eviction را با نقش Redis انتخاب کن؛ حذف key قفل یا dedup می‌تواند اثر تجاری داشته باشد.",
    "introduction": "مقایسه روش‌های ذخیره روی دیسک (Snapshotting در برابر Append-Only File)، سیاست‌های حذف حافظه (Eviction) و بررسی سلامت.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "RDB snapshot و AOF سیاست‌های متفاوت persistence دارند و trade-off هزینه/بازیابی می‌سازند. cache بودن با datastore بودن فرق دارد؛ اگر Redis منبع حقیقت است، loss budget و backup ضروری‌تر می‌شود."
      }
    ],
    "realWorldScenario": {
      "scenario": "restart کنترل‌شده Redis را آزمایش و داده باقی‌مانده را بررسی کن؛ برای cache miss مسیر DB سالم بماند.",
      "solution": "maxmemory و eviction را با نقش Redis انتخاب کن؛ حذف key قفل یا dedup می‌تواند اثر تجاری داشته باشد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "bash",
        "code": "redis-cli INFO persistence\nredis-cli INFO memory\nredis-cli PING",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Redis Persistence and Health Checks",
      "explanation": "دانش Redis در Node منتقل می‌شود؛ annotationهای Spring فقط مسیر اتصال به cache را ساده می‌کنند، نه invalidation و consistency را."
    },
    "commonMistakes": [
      {
        "mistake": "maxmemory و eviction را با نقش Redis انتخاب کن؛ حذف key قفل یا dedup می‌تواند اثر تجاری داشته باشد.",
        "whyBad": "RDB snapshot و AOF سیاست‌های متفاوت persistence دارند و trade-off هزینه/بازیابی می‌سازند. cache بودن با datastore بودن فرق دارد؛ اگر Redis منبع حقیقت است، loss budget و backup ضروری‌تر می‌شود.",
        "solution": "خیر؛ حافظه، eviction و persistence هم مهم‌اند"
      }
    ],
    "bestPractices": [
      "maxmemory و eviction را با نقش Redis انتخاب کن؛ حذف key قفل یا dedup می‌تواند اثر تجاری داشته باشد.",
      "restart کنترل‌شده Redis را آزمایش و داده باقی‌مانده را بررسی کن؛ برای cache miss مسیر DB سالم بماند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "restart کنترل‌شده Redis را آزمایش و داده باقی‌مانده را بررسی کن؛ برای cache miss مسیر DB سالم بماند.",
      "acceptanceCriteria": [
        "restart کنترل‌شده Redis را آزمایش و داده باقی‌مانده را بررسی کن؛ برای cache miss مسیر DB سالم بماند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "maxmemory و eviction را با نقش Redis انتخاب کن؛ حذف key قفل یا dedup می‌تواند اثر تجاری داشته باشد."
      ],
      "solution": {
        "code": "redis-cli INFO persistence\nredis-cli INFO memory\nredis-cli PING",
        "language": "bash",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ حافظه، eviction و persistence هم مهم‌اند. maxmemory و eviction را با نقش Redis انتخاب کن؛ حذف key قفل یا dedup می‌تواند اثر تجاری داشته باشد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-114",
        "question": "آیا PING موفق سلامت کل کاربرد Redis را اثبات می‌کند؟",
        "options": [
          "خیر؛ حافظه، eviction و persistence هم مهم‌اند",
          "بله؛ خطای عملیاتی دیگری ممکن نیست",
          "بله؛ تمام keyها قطعاً durable شده‌اند"
        ],
        "correctIndex": 0,
        "explanation": "خیر؛ حافظه، eviction و persistence هم مهم‌اند. RDB snapshot و AOF سیاست‌های متفاوت persistence دارند و trade-off هزینه/بازیابی می‌سازند. cache بودن با datastore بودن فرق دارد؛ اگر Redis منبع حقیقت است، loss budget و backup ضروری‌تر می‌شود."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا PING موفق سلامت کل کاربرد Redis را اثبات می‌کند؟",
        "answer": "خیر؛ حافظه، eviction و persistence هم مهم‌اند. maxmemory و eviction را با نقش Redis انتخاب کن؛ حذف key قفل یا dedup می‌تواند اثر تجاری داشته باشد."
      }
    ],
    "summary": "RDB snapshot و AOF سیاست‌های متفاوت persistence دارند و trade-off هزینه/بازیابی می‌سازند. cache بودن با datastore بودن فرق دارد؛ اگر Redis منبع حقیقت است، loss budget و backup ضروری‌تر می‌شود.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://redis.io/docs/latest/develop/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
