import { Lesson } from "../types";

export const WEEK_11_LESSONS: Lesson[] = [
  {
    "id": "lesson-061",
    "slug": "acid-and-transaction-isolation-levels",
    "week": 11,
    "day": 1,
    "title": "اصول ACID و سطوح ایزولاسیون تراکنش‌های پایگاه داده",
    "titleEn": "ACID and Transaction Isolation Levels",
    "description": "بررسی پدیده‌های Dirty Read, Non-repeatable Read و Phantom Read و تطبیق سطوح ایزولاسیون در سیستم‌های پرداخت.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "ACID",
      "Isolation Levels",
      "Database Concurrency"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 10",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "SELECT عادی در READ COMMITTED برای رزرو امن کافی است",
      "در دو connection یک موجودی را رزرو کن؛ زمان انتظار lock و نتیجه نهایی را مشاهده کن."
    ],
    "whyItMatters": "زمان نگه‌داشتن lock را با تماس شبکه طولانی نکن.",
    "introduction": "بررسی پدیده‌های Dirty Read, Non-repeatable Read و Phantom Read و تطبیق سطوح ایزولاسیون در سیستم‌های پرداخت.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "ACID با invariant کسب‌وکار یکی نیست؛ isolation تعیین می‌کند تراکنش‌ها چه چیزی از یکدیگر ببینند. READ COMMITTED در PostgreSQL برای هر statement snapshot تازه دارد؛ یک SELECT عادی موجودی را قفل نمی‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "در دو connection یک موجودی را رزرو کن؛ زمان انتظار lock و نتیجه نهایی را مشاهده کن.",
      "solution": "زمان نگه‌داشتن lock را با تماس شبکه طولانی نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "BEGIN;\nSELECT available_quantity FROM inventory WHERE product_id = :id FOR UPDATE;\nUPDATE inventory SET available_quantity = available_quantity - 1 WHERE product_id = :id;\nCOMMIT;",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "ACID and Transaction Isolation Levels",
      "explanation": "قفل Node در یک process هم مشکل چند instance را حل نمی‌کند. در Spring مرز transaction معمولاً با proxy و thread فعلی مرتبط است، نه کل زنجیره Promise دلخواه."
    },
    "commonMistakes": [
      {
        "mistake": "زمان نگه‌داشتن lock را با تماس شبکه طولانی نکن.",
        "whyBad": "ACID با invariant کسب‌وکار یکی نیست؛ isolation تعیین می‌کند تراکنش‌ها چه چیزی از یکدیگر ببینند. READ COMMITTED در PostgreSQL برای هر statement snapshot تازه دارد؛ یک SELECT عادی موجودی را قفل نمی‌کند.",
        "solution": "خیر؛ قفل یا update شرطی و تراکنش لازم است"
      }
    ],
    "bestPractices": [
      "زمان نگه‌داشتن lock را با تماس شبکه طولانی نکن.",
      "در دو connection یک موجودی را رزرو کن؛ زمان انتظار lock و نتیجه نهایی را مشاهده کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "در دو connection یک موجودی را رزرو کن؛ زمان انتظار lock و نتیجه نهایی را مشاهده کن.",
      "acceptanceCriteria": [
        "در دو connection یک موجودی را رزرو کن؛ زمان انتظار lock و نتیجه نهایی را مشاهده کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "زمان نگه‌داشتن lock را با تماس شبکه طولانی نکن."
      ],
      "solution": {
        "code": "BEGIN;\nSELECT available_quantity FROM inventory WHERE product_id = :id FOR UPDATE;\nUPDATE inventory SET available_quantity = available_quantity - 1 WHERE product_id = :id;\nCOMMIT;",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ قفل یا update شرطی و تراکنش لازم است. زمان نگه‌داشتن lock را با تماس شبکه طولانی نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-061",
        "question": "SELECT عادی در READ COMMITTED برای رزرو امن کافی است؟",
        "options": [
          "بله؛ ACID همه invariantها را حدس می‌زند",
          "خیر؛ قفل یا update شرطی و تراکنش لازم است",
          "بله؛ commit خودکار مانع تمام raceهاست"
        ],
        "correctIndex": 1,
        "explanation": "خیر؛ قفل یا update شرطی و تراکنش لازم است. ACID با invariant کسب‌وکار یکی نیست؛ isolation تعیین می‌کند تراکنش‌ها چه چیزی از یکدیگر ببینند. READ COMMITTED در PostgreSQL برای هر statement snapshot تازه دارد؛ یک SELECT عادی موجودی را قفل نمی‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: SELECT عادی در READ COMMITTED برای رزرو امن کافی است؟",
        "answer": "خیر؛ قفل یا update شرطی و تراکنش لازم است. زمان نگه‌داشتن lock را با تماس شبکه طولانی نکن."
      }
    ],
    "summary": "ACID با invariant کسب‌وکار یکی نیست؛ isolation تعیین می‌کند تراکنش‌ها چه چیزی از یکدیگر ببینند. READ COMMITTED در PostgreSQL برای هر statement snapshot تازه دارد؛ یک SELECT عادی موجودی را قفل نمی‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-062",
    "slug": "transactional-and-propagation",
    "week": 11,
    "day": 2,
    "title": "انوتیشن @Transactional، قوانین انتشار (Propagation) و تله‌های رول‌بک",
    "titleEn": "@Transactional and Propagation",
    "description": "تحلیل خطای شایع فراخوانی داخلی متدهای تراکنشی (Self-invocation)، انتشار REQUIRED در برابر REQUIRES_NEW و rollbackFor.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Transactional",
      "Propagation",
      "Rollback",
      "Spring AOP Proxies"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 10",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "REQUIRES_NEW چه خصوصیتی دارد",
      "یک checked exception پس از insert ایجاد کن و rollback را با و بدون rollbackFor بررسی کن."
    ],
    "whyItMatters": "readOnly تضمین امنیتی منع تمام writeها نیست؛ قرارداد و تنظیم persistence را بشناس.",
    "introduction": "تحلیل خطای شایع فراخوانی داخلی متدهای تراکنشی (Self-invocation)، انتشار REQUIRED در برابر REQUIRES_NEW و rollbackFor.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "REQUIRED به تراکنش موجود می‌پیوندد؛ REQUIRES_NEW تراکنش مستقلی می‌سازد و اتصال دیگری می‌تواند بخواهد. به طور پیش‌فرض RuntimeException rollback می‌کند؛ checked exception الزاماً چنین نیست. proxy و self-invocation را لحاظ کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک checked exception پس از insert ایجاد کن و rollback را با و بدون rollbackFor بررسی کن.",
      "solution": "readOnly تضمین امنیتی منع تمام writeها نیست؛ قرارداد و تنظیم persistence را بشناس."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Transactional(rollbackFor = IOException.class)\npublic void importOrders() throws IOException {\n    saveRows();\n    readRequiredDocument();\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "@Transactional and Propagation",
      "explanation": "قفل Node در یک process هم مشکل چند instance را حل نمی‌کند. در Spring مرز transaction معمولاً با proxy و thread فعلی مرتبط است، نه کل زنجیره Promise دلخواه."
    },
    "commonMistakes": [
      {
        "mistake": "readOnly تضمین امنیتی منع تمام writeها نیست؛ قرارداد و تنظیم persistence را بشناس.",
        "whyBad": "REQUIRED به تراکنش موجود می‌پیوندد؛ REQUIRES_NEW تراکنش مستقلی می‌سازد و اتصال دیگری می‌تواند بخواهد. به طور پیش‌فرض RuntimeException rollback می‌کند؛ checked exception الزاماً چنین نیست. proxy و self-invocation را لحاظ کن.",
        "solution": "تراکنش مستقل با commit/rollback جدا"
      }
    ],
    "bestPractices": [
      "readOnly تضمین امنیتی منع تمام writeها نیست؛ قرارداد و تنظیم persistence را بشناس.",
      "یک checked exception پس از insert ایجاد کن و rollback را با و بدون rollbackFor بررسی کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک checked exception پس از insert ایجاد کن و rollback را با و بدون rollbackFor بررسی کن.",
      "acceptanceCriteria": [
        "یک checked exception پس از insert ایجاد کن و rollback را با و بدون rollbackFor بررسی کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "readOnly تضمین امنیتی منع تمام writeها نیست؛ قرارداد و تنظیم persistence را بشناس."
      ],
      "solution": {
        "code": "@Transactional(rollbackFor = IOException.class)\npublic void importOrders() throws IOException {\n    saveRows();\n    readRequiredDocument();\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تراکنش مستقل با commit/rollback جدا. readOnly تضمین امنیتی منع تمام writeها نیست؛ قرارداد و تنظیم persistence را بشناس."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-062",
        "question": "REQUIRES_NEW چه خصوصیتی دارد؟",
        "options": [
          "همیشه بخشی از همان commit بیرونی است",
          "هیچ اتصال دیتابیس نمی‌خواهد",
          "تراکنش مستقل با commit/rollback جدا"
        ],
        "correctIndex": 2,
        "explanation": "تراکنش مستقل با commit/rollback جدا. REQUIRED به تراکنش موجود می‌پیوندد؛ REQUIRES_NEW تراکنش مستقلی می‌سازد و اتصال دیگری می‌تواند بخواهد. به طور پیش‌فرض RuntimeException rollback می‌کند؛ checked exception الزاماً چنین نیست. proxy و self-invocation را لحاظ کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: REQUIRES_NEW چه خصوصیتی دارد؟",
        "answer": "تراکنش مستقل با commit/rollback جدا. readOnly تضمین امنیتی منع تمام writeها نیست؛ قرارداد و تنظیم persistence را بشناس."
      }
    ],
    "summary": "REQUIRED به تراکنش موجود می‌پیوندد؛ REQUIRES_NEW تراکنش مستقلی می‌سازد و اتصال دیگری می‌تواند بخواهد. به طور پیش‌فرض RuntimeException rollback می‌کند؛ checked exception الزاماً چنین نیست. proxy و self-invocation را لحاظ کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-063",
    "slug": "optimistic-vs-pessimistic-locking",
    "week": 11,
    "day": 3,
    "title": "قفل‌گذاری خوش‌بینانه در برابر بدبینانه (Optimistic vs Pessimistic)",
    "titleEn": "Optimistic vs Pessimistic Locking",
    "description": "استفاده از انوتیشن @Version برای سیستم‌های کم‌تداخل و LockModeType.PESSIMISTIC_WRITE برای حفظ موجودی انبار.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Locking",
      "Optimistic Lock",
      "Pessimistic Lock",
      "Inventory Protection"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 10",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای optimistic locking چه چیزی تعارض را آشکار می‌کند",
      "دو transaction یک entity را بخوانند و تغییر دهند؛ یکی باید تعارض نسخه بگیرد و retry کل use case بررسی شود."
    ],
    "whyItMatters": "retry یک save روی entity کهنه کافی نیست؛ داده و تصمیم دامنه دوباره خوانده شوند.",
    "introduction": "استفاده از انوتیشن @Version برای سیستم‌های کم‌تداخل و LockModeType.PESSIMISTIC_WRITE برای حفظ موجودی انبار.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Optimistic locking با @Version تعارض را هنگام write تشخیص می‌دهد؛ pessimistic locking دسترسی رقیب را منتظر می‌گذارد. انتخاب به میزان contention، زمان تراکنش و سیاست retry وابسته است."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو transaction یک entity را بخوانند و تغییر دهند؛ یکی باید تعارض نسخه بگیرد و retry کل use case بررسی شود.",
      "solution": "retry یک save روی entity کهنه کافی نیست؛ داده و تصمیم دامنه دوباره خوانده شوند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Version\nprivate long version;\n// A stale update fails instead of silently overwriting the newer value.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Optimistic vs Pessimistic Locking",
      "explanation": "قفل Node در یک process هم مشکل چند instance را حل نمی‌کند. در Spring مرز transaction معمولاً با proxy و thread فعلی مرتبط است، نه کل زنجیره Promise دلخواه."
    },
    "commonMistakes": [
      {
        "mistake": "retry یک save روی entity کهنه کافی نیست؛ داده و تصمیم دامنه دوباره خوانده شوند.",
        "whyBad": "Optimistic locking با @Version تعارض را هنگام write تشخیص می‌دهد؛ pessimistic locking دسترسی رقیب را منتظر می‌گذارد. انتخاب به میزان contention، زمان تراکنش و سیاست retry وابسته است.",
        "solution": "بررسی نسخه هنگام update"
      }
    ],
    "bestPractices": [
      "retry یک save روی entity کهنه کافی نیست؛ داده و تصمیم دامنه دوباره خوانده شوند.",
      "دو transaction یک entity را بخوانند و تغییر دهند؛ یکی باید تعارض نسخه بگیرد و retry کل use case بررسی شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو transaction یک entity را بخوانند و تغییر دهند؛ یکی باید تعارض نسخه بگیرد و retry کل use case بررسی شود.",
      "acceptanceCriteria": [
        "دو transaction یک entity را بخوانند و تغییر دهند؛ یکی باید تعارض نسخه بگیرد و retry کل use case بررسی شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "retry یک save روی entity کهنه کافی نیست؛ داده و تصمیم دامنه دوباره خوانده شوند."
      ],
      "solution": {
        "code": "@Version\nprivate long version;\n// A stale update fails instead of silently overwriting the newer value.",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. بررسی نسخه هنگام update. retry یک save روی entity کهنه کافی نیست؛ داده و تصمیم دامنه دوباره خوانده شوند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-063",
        "question": "برای optimistic locking چه چیزی تعارض را آشکار می‌کند؟",
        "options": [
          "بررسی نسخه هنگام update",
          "final بودن id در DTO",
          "فقط خواندن entity با findById"
        ],
        "correctIndex": 0,
        "explanation": "بررسی نسخه هنگام update. Optimistic locking با @Version تعارض را هنگام write تشخیص می‌دهد؛ pessimistic locking دسترسی رقیب را منتظر می‌گذارد. انتخاب به میزان contention، زمان تراکنش و سیاست retry وابسته است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای optimistic locking چه چیزی تعارض را آشکار می‌کند؟",
        "answer": "بررسی نسخه هنگام update. retry یک save روی entity کهنه کافی نیست؛ داده و تصمیم دامنه دوباره خوانده شوند."
      }
    ],
    "summary": "Optimistic locking با @Version تعارض را هنگام write تشخیص می‌دهد؛ pessimistic locking دسترسی رقیب را منتظر می‌گذارد. انتخاب به میزان contention، زمان تراکنش و سیاست retry وابسته است.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-064",
    "slug": "implementing-atomic-order-operations",
    "week": 11,
    "day": 4,
    "title": "پیاده‌سازی تراکنش اتمیک ثبت سفارش و کسر انبار (پروژه محوری)",
    "titleEn": "Implementing Atomic Order Operations",
    "description": "توسعه فرآیند چندمرحله‌ای رزرو کالا و تایید سفارش درون تراکنش اتمیک مطمئن با کنترل همروندی دقیق.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Atomic Transactions",
      "Order Flow",
      "Inventory"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 10",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "از کجا موفقیت update شرطی را می‌فهمیم",
      "با موجودی یک، دو رزرو همزمان اجرا کن؛ تنها یک update موفق باشد و هیچ عدد منفی تولید نشود."
    ],
    "whyItMatters": "اگر entity قبلاً managed است، bulk update نیاز به هماهنگ‌کردن context دارد.",
    "introduction": "توسعه فرآیند چندمرحله‌ای رزرو کالا و تایید سفارش درون تراکنش اتمیک مطمئن با کنترل همروندی دقیق.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Update شرطی، check و decrement را در DB اتمیک می‌کند. تعداد ردیف تغییرکرده نتیجه رزرو است. سفارش و تغییر موجودی باید در یک تراکنش باشند تا شکست مرحله بعد موجودی را برگرداند."
      }
    ],
    "realWorldScenario": {
      "scenario": "با موجودی یک، دو رزرو همزمان اجرا کن؛ تنها یک update موفق باشد و هیچ عدد منفی تولید نشود.",
      "solution": "اگر entity قبلاً managed است، bulk update نیاز به هماهنگ‌کردن context دارد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "UPDATE inventory SET available_quantity = available_quantity - :qty\nWHERE product_id = :id AND :qty > 0 AND available_quantity >= :qty;\n-- affected rows = 1 means reserved; 0 means not reserved.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Implementing Atomic Order Operations",
      "explanation": "قفل Node در یک process هم مشکل چند instance را حل نمی‌کند. در Spring مرز transaction معمولاً با proxy و thread فعلی مرتبط است، نه کل زنجیره Promise دلخواه."
    },
    "commonMistakes": [
      {
        "mistake": "اگر entity قبلاً managed است، bulk update نیاز به هماهنگ‌کردن context دارد.",
        "whyBad": "Update شرطی، check و decrement را در DB اتمیک می‌کند. تعداد ردیف تغییرکرده نتیجه رزرو است. سفارش و تغییر موجودی باید در یک تراکنش باشند تا شکست مرحله بعد موجودی را برگرداند.",
        "solution": "تعداد ردیف‌های تغییرکرده"
      }
    ],
    "bestPractices": [
      "اگر entity قبلاً managed است، bulk update نیاز به هماهنگ‌کردن context دارد.",
      "با موجودی یک، دو رزرو همزمان اجرا کن؛ تنها یک update موفق باشد و هیچ عدد منفی تولید نشود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با موجودی یک، دو رزرو همزمان اجرا کن؛ تنها یک update موفق باشد و هیچ عدد منفی تولید نشود.",
      "acceptanceCriteria": [
        "با موجودی یک، دو رزرو همزمان اجرا کن؛ تنها یک update موفق باشد و هیچ عدد منفی تولید نشود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "اگر entity قبلاً managed است، bulk update نیاز به هماهنگ‌کردن context دارد."
      ],
      "solution": {
        "code": "UPDATE inventory SET available_quantity = available_quantity - :qty\nWHERE product_id = :id AND :qty > 0 AND available_quantity >= :qty;\n-- affected rows = 1 means reserved; 0 means not reserved.",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تعداد ردیف‌های تغییرکرده. اگر entity قبلاً managed است، bulk update نیاز به هماهنگ‌کردن context دارد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-064",
        "question": "از کجا موفقیت update شرطی را می‌فهمیم؟",
        "options": [
          "صرفاً HTTP 200 از controller",
          "تعداد ردیف‌های تغییرکرده",
          "تعداد threadهای JVM"
        ],
        "correctIndex": 1,
        "explanation": "تعداد ردیف‌های تغییرکرده. Update شرطی، check و decrement را در DB اتمیک می‌کند. تعداد ردیف تغییرکرده نتیجه رزرو است. سفارش و تغییر موجودی باید در یک تراکنش باشند تا شکست مرحله بعد موجودی را برگرداند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: از کجا موفقیت update شرطی را می‌فهمیم؟",
        "answer": "تعداد ردیف‌های تغییرکرده. اگر entity قبلاً managed است، bulk update نیاز به هماهنگ‌کردن context دارد."
      }
    ],
    "summary": "Update شرطی، check و decrement را در DB اتمیک می‌کند. تعداد ردیف تغییرکرده نتیجه رزرو است. سفارش و تغییر موجودی باید در یک تراکنش باشند تا شکست مرحله بعد موجودی را برگرداند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-065",
    "slug": "deadlocks-and-retry-strategies",
    "week": 11,
    "day": 5,
    "title": "مدیریت بن‌بست‌ها (Deadlocks) و استراتژی‌های تلاش مجدد خودکار",
    "titleEn": "Deadlocks and Retry Strategies",
    "description": "شناسایی علل وقوع بن‌بست در دیتابیس، مرتب‌سازی ترتیبی قفل‌ها و استفاده از قابلیت‌های @Retryable در اسپرینگ.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Deadlocks",
      "Spring Retry",
      "Concurrency",
      "Database Contention"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 10",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "محل مناسب retry شکست deadlock چیست",
      "دو سفارش با ترتیب معکوس دو محصول را آزمایش کن؛ با ترتیب ثابت و retry محدود رفتار را بررسی کن."
    ],
    "whyItMatters": "هر exception را transient فرض نکن؛ validation و خطای دسترسی retry نمی‌خواهند.",
    "introduction": "شناسایی علل وقوع بن‌بست در دیتابیس، مرتب‌سازی ترتیبی قفل‌ها و استفاده از قابلیت‌های @Retryable در اسپرینگ.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Deadlock یعنی چرخه انتظار lock؛ DB معمولاً یکی از تراکنش‌ها را قربانی می‌کند. ترتیب ثابت گرفتن lock احتمال آن را کم می‌کند، اما حذف کامل همه deadlockها را تضمین نمی‌کند. retry باید محدود و برای کل تراکنش تازه باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو سفارش با ترتیب معکوس دو محصول را آزمایش کن؛ با ترتیب ثابت و retry محدود رفتار را بررسی کن.",
      "solution": "هر exception را transient فرض نکن؛ validation و خطای دسترسی retry نمی‌خواهند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "var ids = request.items().stream()\n    .map(Line::productId).distinct().sorted().toList();\nfor (UUID id : ids) inventory.lockById(id);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Deadlocks and Retry Strategies",
      "explanation": "قفل Node در یک process هم مشکل چند instance را حل نمی‌کند. در Spring مرز transaction معمولاً با proxy و thread فعلی مرتبط است، نه کل زنجیره Promise دلخواه."
    },
    "commonMistakes": [
      {
        "mistake": "هر exception را transient فرض نکن؛ validation و خطای دسترسی retry نمی‌خواهند.",
        "whyBad": "Deadlock یعنی چرخه انتظار lock؛ DB معمولاً یکی از تراکنش‌ها را قربانی می‌کند. ترتیب ثابت گرفتن lock احتمال آن را کم می‌کند، اما حذف کامل همه deadlockها را تضمین نمی‌کند. retry باید محدود و برای کل تراکنش تازه باشد.",
        "solution": "بیرون مرز تراکنش، با تراکنش جدید و backoff"
      }
    ],
    "bestPractices": [
      "هر exception را transient فرض نکن؛ validation و خطای دسترسی retry نمی‌خواهند.",
      "دو سفارش با ترتیب معکوس دو محصول را آزمایش کن؛ با ترتیب ثابت و retry محدود رفتار را بررسی کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو سفارش با ترتیب معکوس دو محصول را آزمایش کن؛ با ترتیب ثابت و retry محدود رفتار را بررسی کن.",
      "acceptanceCriteria": [
        "دو سفارش با ترتیب معکوس دو محصول را آزمایش کن؛ با ترتیب ثابت و retry محدود رفتار را بررسی کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "هر exception را transient فرض نکن؛ validation و خطای دسترسی retry نمی‌خواهند."
      ],
      "solution": {
        "code": "var ids = request.items().stream()\n    .map(Line::productId).distinct().sorted().toList();\nfor (UUID id : ids) inventory.lockById(id);",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. بیرون مرز تراکنش، با تراکنش جدید و backoff. هر exception را transient فرض نکن؛ validation و خطای دسترسی retry نمی‌خواهند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-065",
        "question": "محل مناسب retry شکست deadlock چیست؟",
        "options": [
          "داخل همان transaction شکست‌خورده",
          "حلقه بی‌نهایت بدون فاصله",
          "بیرون مرز تراکنش، با تراکنش جدید و backoff"
        ],
        "correctIndex": 2,
        "explanation": "بیرون مرز تراکنش، با تراکنش جدید و backoff. Deadlock یعنی چرخه انتظار lock؛ DB معمولاً یکی از تراکنش‌ها را قربانی می‌کند. ترتیب ثابت گرفتن lock احتمال آن را کم می‌کند، اما حذف کامل همه deadlockها را تضمین نمی‌کند. retry باید محدود و برای کل تراکنش تازه باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: محل مناسب retry شکست deadlock چیست؟",
        "answer": "بیرون مرز تراکنش، با تراکنش جدید و backoff. هر exception را transient فرض نکن؛ validation و خطای دسترسی retry نمی‌خواهند."
      }
    ],
    "summary": "Deadlock یعنی چرخه انتظار lock؛ DB معمولاً یکی از تراکنش‌ها را قربانی می‌کند. ترتیب ثابت گرفتن lock احتمال آن را کم می‌کند، اما حذف کامل همه deadlockها را تضمین نمی‌کند. retry باید محدود و برای کل تراکنش تازه باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-066",
    "slug": "flyway-database-migrations",
    "week": 11,
    "day": 6,
    "title": "مدیریت تکاملی ساختار پایگاه داده با Flyway Migrations",
    "titleEn": "Flyway Database Migrations",
    "description": "حذف گزینه خطرناک ddl-auto=update، ایجاد فایل‌های نسخه تغییرات V1__ و یکپارچه‌سازی با فرآیند بیلد پروداکشن.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Flyway",
      "Database Migrations",
      "Schema Versioning",
      "DevOps"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 10",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای اصلاح migration اجراشده چه کار کنیم",
      "روی DB خالی و DB دارای داده migration را اجرا کن؛ حذف ستون قدیمی را به deploy بعد موکول کن."
    ],
    "whyItMatters": "backfill بزرگ می‌تواند lock و بار سنگین بسازد؛ اندازه batch و انتشار تدریجی را بسنج.",
    "introduction": "حذف گزینه خطرناک ddl-auto=update، ایجاد فایل‌های نسخه تغییرات V1__ و یکپارچه‌سازی با فرآیند بیلد پروداکشن.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Migration اجراشده immutable است؛ تغییر فایل قبلی checksum را می‌شکند. تغییر schema باید با اپ قبلی و بعدی در دوره rollout سازگار باشد. ابتدا ستون جدید را اضافه و backfill کن، بعد مصرف‌کننده‌ها را منتقل کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "روی DB خالی و DB دارای داده migration را اجرا کن؛ حذف ستون قدیمی را به deploy بعد موکول کن.",
      "solution": "backfill بزرگ می‌تواند lock و بار سنگین بسازد؛ اندازه batch و انتشار تدریجی را بسنج."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "-- V3__add_order_currency.sql\nALTER TABLE orders ADD COLUMN currency varchar(3);\nUPDATE orders SET currency = 'USD' WHERE currency IS NULL;",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Flyway Database Migrations",
      "explanation": "قفل Node در یک process هم مشکل چند instance را حل نمی‌کند. در Spring مرز transaction معمولاً با proxy و thread فعلی مرتبط است، نه کل زنجیره Promise دلخواه."
    },
    "commonMistakes": [
      {
        "mistake": "backfill بزرگ می‌تواند lock و بار سنگین بسازد؛ اندازه batch و انتشار تدریجی را بسنج.",
        "whyBad": "Migration اجراشده immutable است؛ تغییر فایل قبلی checksum را می‌شکند. تغییر schema باید با اپ قبلی و بعدی در دوره rollout سازگار باشد. ابتدا ستون جدید را اضافه و backfill کن، بعد مصرف‌کننده‌ها را منتقل کن.",
        "solution": "migration جدید بسازیم"
      }
    ],
    "bestPractices": [
      "backfill بزرگ می‌تواند lock و بار سنگین بسازد؛ اندازه batch و انتشار تدریجی را بسنج.",
      "روی DB خالی و DB دارای داده migration را اجرا کن؛ حذف ستون قدیمی را به deploy بعد موکول کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "روی DB خالی و DB دارای داده migration را اجرا کن؛ حذف ستون قدیمی را به deploy بعد موکول کن.",
      "acceptanceCriteria": [
        "روی DB خالی و DB دارای داده migration را اجرا کن؛ حذف ستون قدیمی را به deploy بعد موکول کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "backfill بزرگ می‌تواند lock و بار سنگین بسازد؛ اندازه batch و انتشار تدریجی را بسنج."
      ],
      "solution": {
        "code": "-- V3__add_order_currency.sql\nALTER TABLE orders ADD COLUMN currency varchar(3);\nUPDATE orders SET currency = 'USD' WHERE currency IS NULL;",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. migration جدید بسازیم. backfill بزرگ می‌تواند lock و بار سنگین بسازد؛ اندازه batch و انتشار تدریجی را بسنج."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-066",
        "question": "برای اصلاح migration اجراشده چه کار کنیم؟",
        "options": [
          "migration جدید بسازیم",
          "فایل قدیمی production را بی‌صدا عوض کنیم",
          "جدول history را پاک کنیم تا همه دوباره اجرا شوند"
        ],
        "correctIndex": 0,
        "explanation": "migration جدید بسازیم. Migration اجراشده immutable است؛ تغییر فایل قبلی checksum را می‌شکند. تغییر schema باید با اپ قبلی و بعدی در دوره rollout سازگار باشد. ابتدا ستون جدید را اضافه و backfill کن، بعد مصرف‌کننده‌ها را منتقل کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای اصلاح migration اجراشده چه کار کنیم؟",
        "answer": "migration جدید بسازیم. backfill بزرگ می‌تواند lock و بار سنگین بسازد؛ اندازه batch و انتشار تدریجی را بسنج."
      }
    ],
    "summary": "Migration اجراشده immutable است؛ تغییر فایل قبلی checksum را می‌شکند. تغییر schema باید با اپ قبلی و بعدی در دوره rollout سازگار باشد. ابتدا ستون جدید را اضافه و backfill کن، بعد مصرف‌کننده‌ها را منتقل کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
