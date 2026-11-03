import { Lesson } from "../types";

export const WEEK_03_LESSONS: Lesson[] = [
  {
    "id": "lesson-013",
    "slug": "records-and-immutability",
    "week": 3,
    "day": 1,
    "title": "رکوردها (Records) و داده‌های تغییرناپذیر در جاوای مدرن",
    "titleEn": "Records and Immutability",
    "description": "معرفی Java Records به عنوان گزینه‌ای بهینه برای DTOها و Value Objects، مقایسه با Type/Interface در تایپ‌اسکریپت و کدهای بویلرپلیت لومبوک.",
    "category": "Modern Java",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Records",
      "Immutability",
      "DTO",
      "Value Object",
      "Java 17+"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 2",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا record دارای List خودبه‌خود عمیقاً immutable است",
      "لیست مبدا را پس از ساخت Basket تغییر بده؛ مقدار record نباید تغییر کند. null element را نیز بررسی کن."
    ],
    "whyItMatters": "Entity JPA را صرفاً برای کوتاه‌شدن کد record نکن؛ lifecycle و هویت آن متفاوت است.",
    "introduction": "معرفی Java Records به عنوان گزینه‌ای بهینه برای DTOها و Value Objects، مقایسه با Type/Interface در تایپ‌اسکریپت و کدهای بویلرپلیت لومبوک.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Record برای حامل داده با equality بر اساس componentها مناسب است؛ immutability آن سطحی است. اگر component یک List قابل تغییر باشد، final بودن reference محتوا را ثابت نمی‌کند. برای ورودی mutable نسخه دفاعی بساز."
      }
    ],
    "realWorldScenario": {
      "scenario": "لیست مبدا را پس از ساخت Basket تغییر بده؛ مقدار record نباید تغییر کند. null element را نیز بررسی کن.",
      "solution": "Entity JPA را صرفاً برای کوتاه‌شدن کد record نکن؛ lifecycle و هویت آن متفاوت است."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "record Basket(List<String> skus) {\n    Basket { skus = List.copyOf(skus); }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Records and Immutability",
      "explanation": "با تجربه TypeScript، destructuring یا readonly را با immutability عمیق یکی نگیر. برابری، واحد پول و مدل زمان در Java قراردادهای صریح دارند."
    },
    "commonMistakes": [
      {
        "mistake": "Entity JPA را صرفاً برای کوتاه‌شدن کد record نکن؛ lifecycle و هویت آن متفاوت است.",
        "whyBad": "Record برای حامل داده با equality بر اساس componentها مناسب است؛ immutability آن سطحی است. اگر component یک List قابل تغییر باشد، final بودن reference محتوا را ثابت نمی‌کند. برای ورودی mutable نسخه دفاعی بساز.",
        "solution": "خیر؛ باید کپی دفاعی یا ساختار immutable انتخاب شود"
      }
    ],
    "bestPractices": [
      "Entity JPA را صرفاً برای کوتاه‌شدن کد record نکن؛ lifecycle و هویت آن متفاوت است.",
      "لیست مبدا را پس از ساخت Basket تغییر بده؛ مقدار record نباید تغییر کند. null element را نیز بررسی کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "لیست مبدا را پس از ساخت Basket تغییر بده؛ مقدار record نباید تغییر کند. null element را نیز بررسی کن.",
      "acceptanceCriteria": [
        "لیست مبدا را پس از ساخت Basket تغییر بده؛ مقدار record نباید تغییر کند. null element را نیز بررسی کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "Entity JPA را صرفاً برای کوتاه‌شدن کد record نکن؛ lifecycle و هویت آن متفاوت است."
      ],
      "solution": {
        "code": "record Basket(List<String> skus) {\n    Basket { skus = List.copyOf(skus); }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ باید کپی دفاعی یا ساختار immutable انتخاب شود. Entity JPA را صرفاً برای کوتاه‌شدن کد record نکن؛ lifecycle و هویت آن متفاوت است."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-013",
        "question": "آیا record دارای List خودبه‌خود عمیقاً immutable است؟",
        "options": [
          "بله؛ JVM تمام اشیای داخل آن را freeze می‌کند",
          "خیر؛ باید کپی دفاعی یا ساختار immutable انتخاب شود",
          "فقط با اضافه‌کردن synchronized به accessor"
        ],
        "correctIndex": 1,
        "explanation": "خیر؛ باید کپی دفاعی یا ساختار immutable انتخاب شود. Record برای حامل داده با equality بر اساس componentها مناسب است؛ immutability آن سطحی است. اگر component یک List قابل تغییر باشد، final بودن reference محتوا را ثابت نمی‌کند. برای ورودی mutable نسخه دفاعی بساز."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا record دارای List خودبه‌خود عمیقاً immutable است؟",
        "answer": "خیر؛ باید کپی دفاعی یا ساختار immutable انتخاب شود. Entity JPA را صرفاً برای کوتاه‌شدن کد record نکن؛ lifecycle و هویت آن متفاوت است."
      }
    ],
    "summary": "Record برای حامل داده با equality بر اساس componentها مناسب است؛ immutability آن سطحی است. اگر component یک List قابل تغییر باشد، final بودن reference محتوا را ثابت نمی‌کند. برای ورودی mutable نسخه دفاعی بساز.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/records/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-014",
    "slug": "optional-and-null-safety",
    "week": 3,
    "day": 2,
    "title": "مدیریت اصولی غیاب داده با Optional و مقابله با NPE",
    "titleEn": "Optional and Null Safety",
    "description": "حل بزرگ‌ترین چالش جاوا یعنی NullPointerException، قوانین قطعی استفاده و عدم استفاده از Optional و مقایسه با Optional Chaining در جاوااسکریپت.",
    "category": "Modern Java",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Optional",
      "Null Safety",
      "NPE",
      "Clean Code",
      "Defensive Programming"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 2",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای ساخت تنبل مقدار جایگزین چه انتخابی درست است",
      "ساخت جایگزین پرهزینه را با orElse و orElseGet مقایسه کن؛ تعداد فراخوانی supplier را تست کن."
    ],
    "whyItMatters": "Optional را برای هر فیلد DTO یا پارامتر اجباری به‌کار نبر؛ قرارداد مشخص مهم‌تر است.",
    "introduction": "حل بزرگ‌ترین چالش جاوا یعنی NullPointerException، قوانین قطعی استفاده و عدم استفاده از Optional و مقایسه با Optional Chaining در جاوااسکریپت.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Optional برای بیان نبود نتیجه، مخصوصاً در خروجی query، مفید است. orElse آرگومان خود را پیش از فراخوانی ارزیابی می‌کند؛ orElseGet ساخت مقدار جایگزین را به زمان نیاز عقب می‌اندازد. get بدون بررسی همان خطای کنترل‌نشده را بازمی‌گرداند."
      }
    ],
    "realWorldScenario": {
      "scenario": "ساخت جایگزین پرهزینه را با orElse و orElseGet مقایسه کن؛ تعداد فراخوانی supplier را تست کن.",
      "solution": "Optional را برای هر فیلد DTO یا پارامتر اجباری به‌کار نبر؛ قرارداد مشخص مهم‌تر است."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "Order order = repository.findById(id)\n    .orElseThrow(() -> new OrderNotFoundException(id));",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Optional and Null Safety",
      "explanation": "با تجربه TypeScript، destructuring یا readonly را با immutability عمیق یکی نگیر. برابری، واحد پول و مدل زمان در Java قراردادهای صریح دارند."
    },
    "commonMistakes": [
      {
        "mistake": "Optional را برای هر فیلد DTO یا پارامتر اجباری به‌کار نبر؛ قرارداد مشخص مهم‌تر است.",
        "whyBad": "Optional برای بیان نبود نتیجه، مخصوصاً در خروجی query، مفید است. orElse آرگومان خود را پیش از فراخوانی ارزیابی می‌کند؛ orElseGet ساخت مقدار جایگزین را به زمان نیاز عقب می‌اندازد. get بدون بررسی همان خطای کنترل‌نشده را بازمی‌گرداند.",
        "solution": "orElseGet(() -> expensive())"
      }
    ],
    "bestPractices": [
      "Optional را برای هر فیلد DTO یا پارامتر اجباری به‌کار نبر؛ قرارداد مشخص مهم‌تر است.",
      "ساخت جایگزین پرهزینه را با orElse و orElseGet مقایسه کن؛ تعداد فراخوانی supplier را تست کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "ساخت جایگزین پرهزینه را با orElse و orElseGet مقایسه کن؛ تعداد فراخوانی supplier را تست کن.",
      "acceptanceCriteria": [
        "ساخت جایگزین پرهزینه را با orElse و orElseGet مقایسه کن؛ تعداد فراخوانی supplier را تست کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "Optional را برای هر فیلد DTO یا پارامتر اجباری به‌کار نبر؛ قرارداد مشخص مهم‌تر است."
      ],
      "solution": {
        "code": "Order order = repository.findById(id)\n    .orElseThrow(() -> new OrderNotFoundException(id));",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. orElseGet(() -> expensive()). Optional را برای هر فیلد DTO یا پارامتر اجباری به‌کار نبر؛ قرارداد مشخص مهم‌تر است."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-014",
        "question": "برای ساخت تنبل مقدار جایگزین چه انتخابی درست است؟",
        "options": [
          "orElse(expensive())",
          "get() سپس catch کردن همه exceptionها",
          "orElseGet(() -> expensive())"
        ],
        "correctIndex": 2,
        "explanation": "orElseGet(() -> expensive()). Optional برای بیان نبود نتیجه، مخصوصاً در خروجی query، مفید است. orElse آرگومان خود را پیش از فراخوانی ارزیابی می‌کند؛ orElseGet ساخت مقدار جایگزین را به زمان نیاز عقب می‌اندازد. get بدون بررسی همان خطای کنترل‌نشده را بازمی‌گرداند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای ساخت تنبل مقدار جایگزین چه انتخابی درست است؟",
        "answer": "orElseGet(() -> expensive()). Optional را برای هر فیلد DTO یا پارامتر اجباری به‌کار نبر؛ قرارداد مشخص مهم‌تر است."
      }
    ],
    "summary": "Optional برای بیان نبود نتیجه، مخصوصاً در خروجی query، مفید است. orElse آرگومان خود را پیش از فراخوانی ارزیابی می‌کند؛ orElseGet ساخت مقدار جایگزین را به زمان نیاز عقب می‌اندازد. get بدون بررسی همان خطای کنترل‌نشده را بازمی‌گرداند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/records/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-015",
    "slug": "clean-code-and-naming-conventions",
    "week": 3,
    "day": 3,
    "title": "کدنویسی تمیز، استانداردهای نام‌گذاری و بسته‌بندی در جاوا",
    "titleEn": "Clean Code and Naming",
    "description": "قراردادهای نام‌گذاری اصولی کلاس‌ها، پکیج‌ها و متدها در جاوا، پرهیز از کدهای تکراری، تکنیک‌های تفکیک پکیج بر اساس لایه در مقابل ویژگی.",
    "category": "Modern Java",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Clean Code",
      "Naming Conventions",
      "Package by Feature",
      "Refactoring"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 2",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کدام نام ابهام واحد را کمتر می‌کند",
      "کد دارای timeout عددی بدون واحد و نام‌های data/process را بازنام‌گذاری کن؛ رفتار تست‌ها ثابت بماند."
    ],
    "whyItMatters": "کامنت توضیح نام بد نیست؛ دلیل تصمیم یا محدودیت را توضیح بده.",
    "introduction": "قراردادهای نام‌گذاری اصولی کلاس‌ها، پکیج‌ها و متدها در جاوا، پرهیز از کدهای تکراری، تکنیک‌های تفکیک پکیج بر اساس لایه در مقابل ویژگی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "نام خوب هدف و واحد اندازه را آشکار می‌کند. به جای متد عمومی process، مرز کسب‌وکار مانند reserveStock را نام ببر. متد کوچک باید یک سطح abstraction داشته باشد؛ کوتاهی به تنهایی معیار کیفیت نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "کد دارای timeout عددی بدون واحد و نام‌های data/process را بازنام‌گذاری کن؛ رفتار تست‌ها ثابت بماند.",
      "solution": "کامنت توضیح نام بد نیست؛ دلیل تصمیم یا محدودیت را توضیح بده."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "Duration reservationTimeout = Duration.ofSeconds(30);\nboolean canReserve(int requested, int available) {\n    return requested > 0 && available >= requested;\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Clean Code and Naming",
      "explanation": "با تجربه TypeScript، destructuring یا readonly را با immutability عمیق یکی نگیر. برابری، واحد پول و مدل زمان در Java قراردادهای صریح دارند."
    },
    "commonMistakes": [
      {
        "mistake": "کامنت توضیح نام بد نیست؛ دلیل تصمیم یا محدودیت را توضیح بده.",
        "whyBad": "نام خوب هدف و واحد اندازه را آشکار می‌کند. به جای متد عمومی process، مرز کسب‌وکار مانند reserveStock را نام ببر. متد کوچک باید یک سطح abstraction داشته باشد؛ کوتاهی به تنهایی معیار کیفیت نیست.",
        "solution": "Duration reservationTimeout"
      }
    ],
    "bestPractices": [
      "کامنت توضیح نام بد نیست؛ دلیل تصمیم یا محدودیت را توضیح بده.",
      "کد دارای timeout عددی بدون واحد و نام‌های data/process را بازنام‌گذاری کن؛ رفتار تست‌ها ثابت بماند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "کد دارای timeout عددی بدون واحد و نام‌های data/process را بازنام‌گذاری کن؛ رفتار تست‌ها ثابت بماند.",
      "acceptanceCriteria": [
        "کد دارای timeout عددی بدون واحد و نام‌های data/process را بازنام‌گذاری کن؛ رفتار تست‌ها ثابت بماند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "کامنت توضیح نام بد نیست؛ دلیل تصمیم یا محدودیت را توضیح بده."
      ],
      "solution": {
        "code": "Duration reservationTimeout = Duration.ofSeconds(30);\nboolean canReserve(int requested, int available) {\n    return requested > 0 && available >= requested;\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. Duration reservationTimeout. کامنت توضیح نام بد نیست؛ دلیل تصمیم یا محدودیت را توضیح بده."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-015",
        "question": "کدام نام ابهام واحد را کمتر می‌کند؟",
        "options": [
          "Duration reservationTimeout",
          "int timeout",
          "long value"
        ],
        "correctIndex": 0,
        "explanation": "Duration reservationTimeout. نام خوب هدف و واحد اندازه را آشکار می‌کند. به جای متد عمومی process، مرز کسب‌وکار مانند reserveStock را نام ببر. متد کوچک باید یک سطح abstraction داشته باشد؛ کوتاهی به تنهایی معیار کیفیت نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کدام نام ابهام واحد را کمتر می‌کند؟",
        "answer": "Duration reservationTimeout. کامنت توضیح نام بد نیست؛ دلیل تصمیم یا محدودیت را توضیح بده."
      }
    ],
    "summary": "نام خوب هدف و واحد اندازه را آشکار می‌کند. به جای متد عمومی process، مرز کسب‌وکار مانند reserveStock را نام ببر. متد کوچک باید یک سطح abstraction داشته باشد؛ کوتاهی به تنهایی معیار کیفیت نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/records/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-016",
    "slug": "refactoring-order-domain-modern-java",
    "week": 3,
    "day": 4,
    "title": "بازطراحی دامنه سفارش با قابلیت‌های مدرن جاوا (پروژه محوری)",
    "titleEn": "Refactoring the Order Domain",
    "description": "مهاجرت مدل‌های اولیه سفارش و قلم سفارش به رکوردهای تغییرناپذیر مدرن، اضافه کردن Value Objects و متدهای پردازشی با Streams.",
    "category": "Modern Java",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Refactoring",
      "Records",
      "Modern Java",
      "Domain Model"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 2",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای مقدار ده‌دهی دقیق پول چه ورودی مناسب است",
      "جمع دو Money هم‌ارز را بساز و جمع ارزهای متفاوت را رد کن؛ قبل از refactor تست رفتار بنویس."
    ],
    "whyItMatters": "مقایسه BigDecimal با equals به scale حساس است؛ برای برابری عددی compareTo را آگاهانه انتخاب کن.",
    "introduction": "مهاجرت مدل‌های اولیه سفارش و قلم سفارش به رکوردهای تغییرناپذیر مدرن، اضافه کردن Value Objects و متدهای پردازشی با Streams.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Refactor یعنی تغییر ساختار با حفظ رفتار مشاهده‌شدنی. مبلغ را با BigDecimal و currency مدل کن؛ double برای جمع پول مناسب نیست. scale و rounding تصمیم دامنه‌اند و باید صریح باشند."
      }
    ],
    "realWorldScenario": {
      "scenario": "جمع دو Money هم‌ارز را بساز و جمع ارزهای متفاوت را رد کن؛ قبل از refactor تست رفتار بنویس.",
      "solution": "مقایسه BigDecimal با equals به scale حساس است؛ برای برابری عددی compareTo را آگاهانه انتخاب کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "record Money(BigDecimal amount, Currency currency) {\n    Money {\n        Objects.requireNonNull(currency);\n        amount = amount.setScale(currency.getDefaultFractionDigits(), RoundingMode.HALF_UP);\n    }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Refactoring the Order Domain",
      "explanation": "با تجربه TypeScript، destructuring یا readonly را با immutability عمیق یکی نگیر. برابری، واحد پول و مدل زمان در Java قراردادهای صریح دارند."
    },
    "commonMistakes": [
      {
        "mistake": "مقایسه BigDecimal با equals به scale حساس است؛ برای برابری عددی compareTo را آگاهانه انتخاب کن.",
        "whyBad": "Refactor یعنی تغییر ساختار با حفظ رفتار مشاهده‌شدنی. مبلغ را با BigDecimal و currency مدل کن؛ double برای جمع پول مناسب نیست. scale و rounding تصمیم دامنه‌اند و باید صریح باشند.",
        "solution": "new BigDecimal(\"0.10\")"
      }
    ],
    "bestPractices": [
      "مقایسه BigDecimal با equals به scale حساس است؛ برای برابری عددی compareTo را آگاهانه انتخاب کن.",
      "جمع دو Money هم‌ارز را بساز و جمع ارزهای متفاوت را رد کن؛ قبل از refactor تست رفتار بنویس."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "جمع دو Money هم‌ارز را بساز و جمع ارزهای متفاوت را رد کن؛ قبل از refactor تست رفتار بنویس.",
      "acceptanceCriteria": [
        "جمع دو Money هم‌ارز را بساز و جمع ارزهای متفاوت را رد کن؛ قبل از refactor تست رفتار بنویس.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "مقایسه BigDecimal با equals به scale حساس است؛ برای برابری عددی compareTo را آگاهانه انتخاب کن."
      ],
      "solution": {
        "code": "record Money(BigDecimal amount, Currency currency) {\n    Money {\n        Objects.requireNonNull(currency);\n        amount = amount.setScale(currency.getDefaultFractionDigits(), RoundingMode.HALF_UP);\n    }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. new BigDecimal(\"0.10\"). مقایسه BigDecimal با equals به scale حساس است؛ برای برابری عددی compareTo را آگاهانه انتخاب کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-016",
        "question": "برای مقدار ده‌دهی دقیق پول چه ورودی مناسب است؟",
        "options": [
          "new BigDecimal(0.1)",
          "new BigDecimal(\"0.10\")",
          "float و گردکردن پس از هر جمع بدون سیاست"
        ],
        "correctIndex": 1,
        "explanation": "new BigDecimal(\"0.10\"). Refactor یعنی تغییر ساختار با حفظ رفتار مشاهده‌شدنی. مبلغ را با BigDecimal و currency مدل کن؛ double برای جمع پول مناسب نیست. scale و rounding تصمیم دامنه‌اند و باید صریح باشند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای مقدار ده‌دهی دقیق پول چه ورودی مناسب است؟",
        "answer": "new BigDecimal(\"0.10\"). مقایسه BigDecimal با equals به scale حساس است؛ برای برابری عددی compareTo را آگاهانه انتخاب کن."
      }
    ],
    "summary": "Refactor یعنی تغییر ساختار با حفظ رفتار مشاهده‌شدنی. مبلغ را با BigDecimal و currency مدل کن؛ double برای جمع پول مناسب نیست. scale و rounding تصمیم دامنه‌اند و باید صریح باشند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/records/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-017",
    "slug": "java-date-and-time-api",
    "week": 3,
    "day": 5,
    "title": "مدیریت زمان، تاریخ و تایم‌زون‌ها با java.time API",
    "titleEn": "Java Date and Time API",
    "description": "بررسی کلاس‌های تغییرناپذیر Instant، LocalDateTime و ZonedDateTime، رفع مشکلات کلاس‌های منسوخ شده Date/Calendar و حل معضل اختلاف زمان در تراکنش‌ها.",
    "category": "Modern Java",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Date Time API",
      "Instant",
      "ZonedDateTime",
      "Timezones",
      "Transactions"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 2",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای ثبت لحظه ایجاد سفارش چه نوعی مناسب‌تر است",
      "انقضای سفارش را درست قبل، دقیقاً روی مرز و بعد از مهلت تست کن؛ timezone نمایش را جدا نگه دار."
    ],
    "whyItMatters": "یک روز تقویمی همیشه معادل ۲۴ ساعت نیست؛ تغییر ساعت و timezone را در برنامه‌ریزی لحاظ کن.",
    "introduction": "بررسی کلاس‌های تغییرناپذیر Instant، LocalDateTime و ZonedDateTime، رفع مشکلات کلاس‌های منسوخ شده Date/Calendar و حل معضل اختلاف زمان در تراکنش‌ها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Instant یک نقطه روی خط زمان است؛ LocalDate تاریخ بدون timezone و ZonedDateTime زمان همراه منطقه است. برای آزمون از Clock تزریق‌شده استفاده کن. مهلت سفارش را با Instant بسنج، نه رشته تاریخ محلی."
      }
    ],
    "realWorldScenario": {
      "scenario": "انقضای سفارش را درست قبل، دقیقاً روی مرز و بعد از مهلت تست کن؛ timezone نمایش را جدا نگه دار.",
      "solution": "یک روز تقویمی همیشه معادل ۲۴ ساعت نیست؛ تغییر ساعت و timezone را در برنامه‌ریزی لحاظ کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "Clock clock = Clock.fixed(Instant.parse(\"2026-01-01T00:00:00Z\"), ZoneOffset.UTC);\nInstant expiresAt = clock.instant().plus(Duration.ofMinutes(15));",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Java Date and Time API",
      "explanation": "با تجربه TypeScript، destructuring یا readonly را با immutability عمیق یکی نگیر. برابری، واحد پول و مدل زمان در Java قراردادهای صریح دارند."
    },
    "commonMistakes": [
      {
        "mistake": "یک روز تقویمی همیشه معادل ۲۴ ساعت نیست؛ تغییر ساعت و timezone را در برنامه‌ریزی لحاظ کن.",
        "whyBad": "Instant یک نقطه روی خط زمان است؛ LocalDate تاریخ بدون timezone و ZonedDateTime زمان همراه منطقه است. برای آزمون از Clock تزریق‌شده استفاده کن. مهلت سفارش را با Instant بسنج، نه رشته تاریخ محلی.",
        "solution": "Instant"
      }
    ],
    "bestPractices": [
      "یک روز تقویمی همیشه معادل ۲۴ ساعت نیست؛ تغییر ساعت و timezone را در برنامه‌ریزی لحاظ کن.",
      "انقضای سفارش را درست قبل، دقیقاً روی مرز و بعد از مهلت تست کن؛ timezone نمایش را جدا نگه دار."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "انقضای سفارش را درست قبل، دقیقاً روی مرز و بعد از مهلت تست کن؛ timezone نمایش را جدا نگه دار.",
      "acceptanceCriteria": [
        "انقضای سفارش را درست قبل، دقیقاً روی مرز و بعد از مهلت تست کن؛ timezone نمایش را جدا نگه دار.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "یک روز تقویمی همیشه معادل ۲۴ ساعت نیست؛ تغییر ساعت و timezone را در برنامه‌ریزی لحاظ کن."
      ],
      "solution": {
        "code": "Clock clock = Clock.fixed(Instant.parse(\"2026-01-01T00:00:00Z\"), ZoneOffset.UTC);\nInstant expiresAt = clock.instant().plus(Duration.ofMinutes(15));",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. Instant. یک روز تقویمی همیشه معادل ۲۴ ساعت نیست؛ تغییر ساعت و timezone را در برنامه‌ریزی لحاظ کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-017",
        "question": "برای ثبت لحظه ایجاد سفارش چه نوعی مناسب‌تر است؟",
        "options": [
          "LocalTime بدون تاریخ",
          "String با فرمت نمایش کاربر",
          "Instant"
        ],
        "correctIndex": 2,
        "explanation": "Instant. Instant یک نقطه روی خط زمان است؛ LocalDate تاریخ بدون timezone و ZonedDateTime زمان همراه منطقه است. برای آزمون از Clock تزریق‌شده استفاده کن. مهلت سفارش را با Instant بسنج، نه رشته تاریخ محلی."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای ثبت لحظه ایجاد سفارش چه نوعی مناسب‌تر است؟",
        "answer": "Instant. یک روز تقویمی همیشه معادل ۲۴ ساعت نیست؛ تغییر ساعت و timezone را در برنامه‌ریزی لحاظ کن."
      }
    ],
    "summary": "Instant یک نقطه روی خط زمان است؛ LocalDate تاریخ بدون timezone و ZonedDateTime زمان همراه منطقه است. برای آزمون از Clock تزریق‌شده استفاده کن. مهلت سفارش را با Instant بسنج، نه رشته تاریخ محلی.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/records/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-018",
    "slug": "git-workflow-and-code-review-java",
    "week": 3,
    "day": 6,
    "title": "گردش کار حرفه‌ای Git، استانداردهای Commit و Code Review جاوا",
    "titleEn": "Git Workflow and Code Review",
    "description": "تنظیم .gitignore استاندارد پروژه‌های جاوا، قراردادهای چک‌کردن کدهای پول‌ریکوئست و بررسی آسیب‌پذیری‌های متداول در سورس‌کد تیمی.",
    "category": "Modern Java",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Git",
      "Code Review",
      "Best Practices",
      "Team Collaboration"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 2",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای review مؤثر کدام تغییر مناسب‌تر است",
      "یک تغییر validation با تست و توضیح قبل/بعد در commit مستقل آماده کن؛ secrets و خروجی build وارد diff نشوند."
    ],
    "whyItMatters": "force push روی شاخه مشترک بدون هماهنگی تاریخچه همکار را به خطر می‌اندازد.",
    "introduction": "تنظیم .gitignore استاندارد پروژه‌های جاوا، قراردادهای چک‌کردن کدهای پول‌ریکوئست و بررسی آسیب‌پذیری‌های متداول در سورس‌کد تیمی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Commit کوچک باید یک تغییر قابل توضیح و قابل برگشت باشد. در review ابتدا صحت، تست و قرارداد عمومی را ببین؛ اختلاف سبک را formatter حل کند. تغییر schema را همراه سازگاری نسخه قبلی سرویس بررسی کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک تغییر validation با تست و توضیح قبل/بعد در commit مستقل آماده کن؛ secrets و خروجی build وارد diff نشوند.",
      "solution": "force push روی شاخه مشترک بدون هماهنگی تاریخچه همکار را به خطر می‌اندازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "bash",
        "code": "git switch -c feature/order-validation\ngit diff --check\ngit diff --stat\ngit status --short",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Git Workflow and Code Review",
      "explanation": "با تجربه TypeScript، destructuring یا readonly را با immutability عمیق یکی نگیر. برابری، واحد پول و مدل زمان در Java قراردادهای صریح دارند."
    },
    "commonMistakes": [
      {
        "mistake": "force push روی شاخه مشترک بدون هماهنگی تاریخچه همکار را به خطر می‌اندازد.",
        "whyBad": "Commit کوچک باید یک تغییر قابل توضیح و قابل برگشت باشد. در review ابتدا صحت، تست و قرارداد عمومی را ببین؛ اختلاف سبک را formatter حل کند. تغییر schema را همراه سازگاری نسخه قبلی سرویس بررسی کن.",
        "solution": "یک رفتار مشخص با تست مرتبط و diff محدود"
      }
    ],
    "bestPractices": [
      "force push روی شاخه مشترک بدون هماهنگی تاریخچه همکار را به خطر می‌اندازد.",
      "یک تغییر validation با تست و توضیح قبل/بعد در commit مستقل آماده کن؛ secrets و خروجی build وارد diff نشوند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک تغییر validation با تست و توضیح قبل/بعد در commit مستقل آماده کن؛ secrets و خروجی build وارد diff نشوند.",
      "acceptanceCriteria": [
        "یک تغییر validation با تست و توضیح قبل/بعد در commit مستقل آماده کن؛ secrets و خروجی build وارد diff نشوند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "force push روی شاخه مشترک بدون هماهنگی تاریخچه همکار را به خطر می‌اندازد."
      ],
      "solution": {
        "code": "git switch -c feature/order-validation\ngit diff --check\ngit diff --stat\ngit status --short",
        "language": "bash",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. یک رفتار مشخص با تست مرتبط و diff محدود. force push روی شاخه مشترک بدون هماهنگی تاریخچه همکار را به خطر می‌اندازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-018",
        "question": "برای review مؤثر کدام تغییر مناسب‌تر است؟",
        "options": [
          "یک رفتار مشخص با تست مرتبط و diff محدود",
          "ترکیب ارتقای framework و تغییر دامنه و فرمت کل repo",
          "فقط توضیح شفاهی بدون تست یا diff"
        ],
        "correctIndex": 0,
        "explanation": "یک رفتار مشخص با تست مرتبط و diff محدود. Commit کوچک باید یک تغییر قابل توضیح و قابل برگشت باشد. در review ابتدا صحت، تست و قرارداد عمومی را ببین؛ اختلاف سبک را formatter حل کند. تغییر schema را همراه سازگاری نسخه قبلی سرویس بررسی کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای review مؤثر کدام تغییر مناسب‌تر است؟",
        "answer": "یک رفتار مشخص با تست مرتبط و diff محدود. force push روی شاخه مشترک بدون هماهنگی تاریخچه همکار را به خطر می‌اندازد."
      }
    ],
    "summary": "Commit کوچک باید یک تغییر قابل توضیح و قابل برگشت باشد. در review ابتدا صحت، تست و قرارداد عمومی را ببین؛ اختلاف سبک را formatter حل کند. تغییر schema را همراه سازگاری نسخه قبلی سرویس بررسی کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/records/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
