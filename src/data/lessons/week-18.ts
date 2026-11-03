import { Lesson } from "../types";

export const WEEK_18_LESSONS: Lesson[] = [
  {
    "id": "lesson-103",
    "slug": "outbox-pattern",
    "week": 18,
    "day": 1,
    "title": "الگوی جعبه خروجی تراکنشی (Transactional Outbox Pattern)",
    "titleEn": "Outbox Pattern",
    "description": "حل تضاد ذخیره دیتابیس و انتشار ایونت (Dual-write Problem) با ثبت رویدادها در جدول دیتابیس درون همان تراکنش بیزینس.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Transactional Outbox",
      "Dual-write Problem",
      "Reliable Messaging",
      "EDA"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 17",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "Outbox کدام تضمین را به تنهایی نمی‌دهد",
      "بین ذخیره order و outbox خطا ایجاد کن؛ هر دو rollback شوند. سپس relay را بعد از publish قطع کن."
    ],
    "whyItMatters": "حذف رکورد outbox قبل از تأیید publish می‌تواند event را گم کند.",
    "introduction": "حل تضاد ذخیره دیتابیس و انتشار ایونت (Dual-write Problem) با ثبت رویدادها در جدول دیتابیس درون همان تراکنش بیزینس.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Outbox رکورد event را در همان تراکنش تغییر دامنه ذخیره می‌کند. relay بعداً آن را به broker می‌فرستد. فاصله publish موفق و علامت‌گذاری sent هنوز duplicate می‌سازد؛ consumer باید idempotent باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "بین ذخیره order و outbox خطا ایجاد کن؛ هر دو rollback شوند. سپس relay را بعد از publish قطع کن.",
      "solution": "حذف رکورد outbox قبل از تأیید publish می‌تواند event را گم کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Transactional\npublic void confirm(Order order) {\n    order.confirm();\n    orders.save(order);\n    outbox.save(OrderCreated.from(order));\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Outbox Pattern",
      "explanation": "Outbox و dedup در Nest و Spring همان مرز DB/broker را حل می‌کنند؛ annotation تراکنش Spring، broker مستقل را خودبه‌خود عضو commit نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "حذف رکورد outbox قبل از تأیید publish می‌تواند event را گم کند.",
        "whyBad": "Outbox رکورد event را در همان تراکنش تغییر دامنه ذخیره می‌کند. relay بعداً آن را به broker می‌فرستد. فاصله publish موفق و علامت‌گذاری sent هنوز duplicate می‌سازد؛ consumer باید idempotent باشد.",
        "solution": "پردازش exactly-once در consumer"
      }
    ],
    "bestPractices": [
      "حذف رکورد outbox قبل از تأیید publish می‌تواند event را گم کند.",
      "بین ذخیره order و outbox خطا ایجاد کن؛ هر دو rollback شوند. سپس relay را بعد از publish قطع کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "بین ذخیره order و outbox خطا ایجاد کن؛ هر دو rollback شوند. سپس relay را بعد از publish قطع کن.",
      "acceptanceCriteria": [
        "بین ذخیره order و outbox خطا ایجاد کن؛ هر دو rollback شوند. سپس relay را بعد از publish قطع کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "حذف رکورد outbox قبل از تأیید publish می‌تواند event را گم کند."
      ],
      "solution": {
        "code": "@Transactional\npublic void confirm(Order order) {\n    order.confirm();\n    orders.save(order);\n    outbox.save(OrderCreated.from(order));\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. پردازش exactly-once در consumer. حذف رکورد outbox قبل از تأیید publish می‌تواند event را گم کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-103",
        "question": "Outbox کدام تضمین را به تنهایی نمی‌دهد؟",
        "options": [
          "ثبت اتمیک تغییر دامنه و رکورد event در یک DB",
          "پردازش exactly-once در consumer",
          "قابلیت ارسال مجدد رکوردهای ارسال‌نشده"
        ],
        "correctIndex": 1,
        "explanation": "پردازش exactly-once در consumer. Outbox رکورد event را در همان تراکنش تغییر دامنه ذخیره می‌کند. relay بعداً آن را به broker می‌فرستد. فاصله publish موفق و علامت‌گذاری sent هنوز duplicate می‌سازد؛ consumer باید idempotent باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: Outbox کدام تضمین را به تنهایی نمی‌دهد؟",
        "answer": "پردازش exactly-once در consumer. حذف رکورد outbox قبل از تأیید publish می‌تواند event را گم کند."
      }
    ],
    "summary": "Outbox رکورد event را در همان تراکنش تغییر دامنه ذخیره می‌کند. relay بعداً آن را به broker می‌فرستد. فاصله publish موفق و علامت‌گذاری sent هنوز duplicate می‌سازد؛ consumer باید idempotent باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/reliability"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-104",
    "slug": "idempotent-consumers",
    "week": 18,
    "day": 2,
    "title": "طراحی مصرف‌کنندگان بی‌اثر در تکرار (Idempotent Consumers)",
    "titleEn": "Idempotent Consumers",
    "description": "استراتژی‌های مواجهه با پیام‌های تکراری با ثبت کلید ایونت در جدول پیام‌های پردازش‌شده و تضمین یکتایی بیزینس.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Idempotent Consumer",
      "Deduplication",
      "Message Processing"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 17",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کلید dedup مناسب‌تر چیست",
      "دو consumer همزمان یک eventId را بگیرند؛ دقیقاً یک اثر DB ثبت شود."
    ],
    "whyItMatters": "ذخیره dedup در Redis و اثر در DB بدون هماهنگی می‌تواند crash gap بسازد.",
    "introduction": "استراتژی‌های مواجهه با پیام‌های تکراری با ثبت کلید ایونت در جدول پیام‌های پردازش‌شده و تضمین یکتایی بیزینس.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Dedup باید همراه اثر تجاری در یک transaction commit شود. SELECT exists به تنهایی در رقابت کافی نیست؛ unique key روی consumer و eventId claim را اتمیک می‌کند. مدت نگه‌داری dedup با پنجره replay سازگار باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو consumer همزمان یک eventId را بگیرند؛ دقیقاً یک اثر DB ثبت شود.",
      "solution": "ذخیره dedup در Redis و اثر در DB بدون هماهنگی می‌تواند crash gap بسازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "INSERT INTO processed_events(consumer_name,event_id)\nVALUES (:consumer,:event) ON CONFLICT DO NOTHING\nRETURNING event_id;\n-- Apply business effect only when a row was inserted, in the same transaction.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Idempotent Consumers",
      "explanation": "Outbox و dedup در Nest و Spring همان مرز DB/broker را حل می‌کنند؛ annotation تراکنش Spring، broker مستقل را خودبه‌خود عضو commit نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "ذخیره dedup در Redis و اثر در DB بدون هماهنگی می‌تواند crash gap بسازد.",
        "whyBad": "Dedup باید همراه اثر تجاری در یک transaction commit شود. SELECT exists به تنهایی در رقابت کافی نیست؛ unique key روی consumer و eventId claim را اتمیک می‌کند. مدت نگه‌داری dedup با پنجره replay سازگار باشد.",
        "solution": "ترکیب consumer و eventId"
      }
    ],
    "bestPractices": [
      "ذخیره dedup در Redis و اثر در DB بدون هماهنگی می‌تواند crash gap بسازد.",
      "دو consumer همزمان یک eventId را بگیرند؛ دقیقاً یک اثر DB ثبت شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو consumer همزمان یک eventId را بگیرند؛ دقیقاً یک اثر DB ثبت شود.",
      "acceptanceCriteria": [
        "دو consumer همزمان یک eventId را بگیرند؛ دقیقاً یک اثر DB ثبت شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "ذخیره dedup در Redis و اثر در DB بدون هماهنگی می‌تواند crash gap بسازد."
      ],
      "solution": {
        "code": "INSERT INTO processed_events(consumer_name,event_id)\nVALUES (:consumer,:event) ON CONFLICT DO NOTHING\nRETURNING event_id;\n-- Apply business effect only when a row was inserted, in the same transaction.",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ترکیب consumer و eventId. ذخیره dedup در Redis و اثر در DB بدون هماهنگی می‌تواند crash gap بسازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-104",
        "question": "کلید dedup مناسب‌تر چیست؟",
        "options": [
          "زمان دریافت پیام با دقت ثانیه",
          "نام thread مصرف‌کننده",
          "ترکیب consumer و eventId"
        ],
        "correctIndex": 2,
        "explanation": "ترکیب consumer و eventId. Dedup باید همراه اثر تجاری در یک transaction commit شود. SELECT exists به تنهایی در رقابت کافی نیست؛ unique key روی consumer و eventId claim را اتمیک می‌کند. مدت نگه‌داری dedup با پنجره replay سازگار باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کلید dedup مناسب‌تر چیست؟",
        "answer": "ترکیب consumer و eventId. ذخیره dedup در Redis و اثر در DB بدون هماهنگی می‌تواند crash gap بسازد."
      }
    ],
    "summary": "Dedup باید همراه اثر تجاری در یک transaction commit شود. SELECT exists به تنهایی در رقابت کافی نیست؛ unique key روی consumer و eventId claim را اتمیک می‌کند. مدت نگه‌داری dedup با پنجره replay سازگار باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/reliability"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-105",
    "slug": "eventual-consistency",
    "week": 18,
    "day": 3,
    "title": "سازگاری نهایی (Eventual Consistency) و پذیرش تاخیر شبکه",
    "titleEn": "Eventual Consistency",
    "description": "گذار از تراکنش‌های دیتابیسی سنتی به مدل‌های سازگاری نهایی و چگونگی مدیریت وضعیت‌های میانی سفارشات در UI.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Eventual Consistency",
      "Distributed Architecture",
      "User Experience"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 17",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "Read model عقب‌افتاده چه نیاز UX دارد",
      "تاخیر event پرداخت را شبیه‌سازی کن؛ UI/API باید pending درست نشان دهد و بعد همگرا شود."
    ],
    "whyItMatters": "تاخیر نامحدود را صرفاً eventual ننام؛ backlog و زمان همگرایی باید پایش شوند.",
    "introduction": "گذار از تراکنش‌های دیتابیسی سنتی به مدل‌های سازگاری نهایی و چگونگی مدیریت وضعیت‌های میانی سفارشات در UI.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Eventual consistency یعنی replica یا read model می‌تواند موقتاً عقب باشد. زمان همگرایی، وضعیت pending و راه reconciliation را مشخص کن. به کاربر قبل از تأیید نهایی پرداخت، success قطعی نده."
      }
    ],
    "realWorldScenario": {
      "scenario": "تاخیر event پرداخت را شبیه‌سازی کن؛ UI/API باید pending درست نشان دهد و بعد همگرا شود.",
      "solution": "تاخیر نامحدود را صرفاً eventual ننام؛ backlog و زمان همگرایی باید پایش شوند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "json",
        "code": "{\"orderId\":\"id\",\"status\":\"PENDING_PAYMENT\",\"paymentStatus\":\"PENDING\"}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Eventual Consistency",
      "explanation": "Outbox و dedup در Nest و Spring همان مرز DB/broker را حل می‌کنند؛ annotation تراکنش Spring، broker مستقل را خودبه‌خود عضو commit نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "تاخیر نامحدود را صرفاً eventual ننام؛ backlog و زمان همگرایی باید پایش شوند.",
        "whyBad": "Eventual consistency یعنی replica یا read model می‌تواند موقتاً عقب باشد. زمان همگرایی، وضعیت pending و راه reconciliation را مشخص کن. به کاربر قبل از تأیید نهایی پرداخت، success قطعی نده.",
        "solution": "نمایش وضعیت موقت و راه پیگیری معنادار"
      }
    ],
    "bestPractices": [
      "تاخیر نامحدود را صرفاً eventual ننام؛ backlog و زمان همگرایی باید پایش شوند.",
      "تاخیر event پرداخت را شبیه‌سازی کن؛ UI/API باید pending درست نشان دهد و بعد همگرا شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "تاخیر event پرداخت را شبیه‌سازی کن؛ UI/API باید pending درست نشان دهد و بعد همگرا شود.",
      "acceptanceCriteria": [
        "تاخیر event پرداخت را شبیه‌سازی کن؛ UI/API باید pending درست نشان دهد و بعد همگرا شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "تاخیر نامحدود را صرفاً eventual ننام؛ backlog و زمان همگرایی باید پایش شوند."
      ],
      "solution": {
        "code": "{\"orderId\":\"id\",\"status\":\"PENDING_PAYMENT\",\"paymentStatus\":\"PENDING\"}",
        "language": "json",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. نمایش وضعیت موقت و راه پیگیری معنادار. تاخیر نامحدود را صرفاً eventual ننام؛ backlog و زمان همگرایی باید پایش شوند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-105",
        "question": "Read model عقب‌افتاده چه نیاز UX دارد؟",
        "options": [
          "نمایش وضعیت موقت و راه پیگیری معنادار",
          "نمایش قطعی موفقیت قبل از نتیجه",
          "فرض اینکه همه replicaها همزمان‌اند"
        ],
        "correctIndex": 0,
        "explanation": "نمایش وضعیت موقت و راه پیگیری معنادار. Eventual consistency یعنی replica یا read model می‌تواند موقتاً عقب باشد. زمان همگرایی، وضعیت pending و راه reconciliation را مشخص کن. به کاربر قبل از تأیید نهایی پرداخت، success قطعی نده."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: Read model عقب‌افتاده چه نیاز UX دارد؟",
        "answer": "نمایش وضعیت موقت و راه پیگیری معنادار. تاخیر نامحدود را صرفاً eventual ننام؛ backlog و زمان همگرایی باید پایش شوند."
      }
    ],
    "summary": "Eventual consistency یعنی replica یا read model می‌تواند موقتاً عقب باشد. زمان همگرایی، وضعیت pending و راه reconciliation را مشخص کن. به کاربر قبل از تأیید نهایی پرداخت، success قطعی نده.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/reliability"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-106",
    "slug": "implementing-transactional-outbox",
    "week": 18,
    "day": 4,
    "title": "پیاده‌سازی عملی الگوی Transactional Outbox در سفارشات (پروژه محوری)",
    "titleEn": "Implementing Transactional Outbox",
    "description": "ساخت جدول outbox_messages، ثبت اتمیک رویداد در زمان ایجاد سفارش و ارسال به ربیت با فرآیند زمان‌بندی‌شده.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Outbox Implementation",
      "Spring Scheduler",
      "Reliable Orders"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 17",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "SKIP LOCKED چه کاری می‌کند",
      "دو relay اجرا کن؛ رکوردها پیش بروند و crash یک worker باعث گم‌شدن event نشود."
    ],
    "whyItMatters": "قفل DB را در تماس شبکه طولانی نگه ندار؛ claim/lease و چرخه retry را آگاهانه طراحی کن.",
    "introduction": "ساخت جدول outbox_messages، ثبت اتمیک رویداد در زمان ایجاد سفارش و ارسال به ربیت با فرآیند زمان‌بندی‌شده.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Relay چند worker باید رکوردها را بدون انتشار همزمان غیرضروری claim کند. SKIP LOCKED ابزار تقسیم کار است، نه تضمین exactly-once. failure و retry هر رکورد را قابل مشاهده نگه دار."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو relay اجرا کن؛ رکوردها پیش بروند و crash یک worker باعث گم‌شدن event نشود.",
      "solution": "قفل DB را در تماس شبکه طولانی نگه ندار؛ claim/lease و چرخه retry را آگاهانه طراحی کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "SELECT id, payload FROM outbox_events\nWHERE published_at IS NULL ORDER BY created_at\nFOR UPDATE SKIP LOCKED LIMIT 50;",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Implementing Transactional Outbox",
      "explanation": "Outbox و dedup در Nest و Spring همان مرز DB/broker را حل می‌کنند؛ annotation تراکنش Spring، broker مستقل را خودبه‌خود عضو commit نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "قفل DB را در تماس شبکه طولانی نگه ندار؛ claim/lease و چرخه retry را آگاهانه طراحی کن.",
        "whyBad": "Relay چند worker باید رکوردها را بدون انتشار همزمان غیرضروری claim کند. SKIP LOCKED ابزار تقسیم کار است، نه تضمین exactly-once. failure و retry هر رکورد را قابل مشاهده نگه دار.",
        "solution": "ردشدن از ردیف‌های قفل‌شده برای تقسیم کار"
      }
    ],
    "bestPractices": [
      "قفل DB را در تماس شبکه طولانی نگه ندار؛ claim/lease و چرخه retry را آگاهانه طراحی کن.",
      "دو relay اجرا کن؛ رکوردها پیش بروند و crash یک worker باعث گم‌شدن event نشود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو relay اجرا کن؛ رکوردها پیش بروند و crash یک worker باعث گم‌شدن event نشود.",
      "acceptanceCriteria": [
        "دو relay اجرا کن؛ رکوردها پیش بروند و crash یک worker باعث گم‌شدن event نشود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "قفل DB را در تماس شبکه طولانی نگه ندار؛ claim/lease و چرخه retry را آگاهانه طراحی کن."
      ],
      "solution": {
        "code": "SELECT id, payload FROM outbox_events\nWHERE published_at IS NULL ORDER BY created_at\nFOR UPDATE SKIP LOCKED LIMIT 50;",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ردشدن از ردیف‌های قفل‌شده برای تقسیم کار. قفل DB را در تماس شبکه طولانی نگه ندار؛ claim/lease و چرخه retry را آگاهانه طراحی کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-106",
        "question": "SKIP LOCKED چه کاری می‌کند؟",
        "options": [
          "تأیید پردازش consumer",
          "ردشدن از ردیف‌های قفل‌شده برای تقسیم کار",
          "commit خودکار broker و DB با هم"
        ],
        "correctIndex": 1,
        "explanation": "ردشدن از ردیف‌های قفل‌شده برای تقسیم کار. Relay چند worker باید رکوردها را بدون انتشار همزمان غیرضروری claim کند. SKIP LOCKED ابزار تقسیم کار است، نه تضمین exactly-once. failure و retry هر رکورد را قابل مشاهده نگه دار."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: SKIP LOCKED چه کاری می‌کند؟",
        "answer": "ردشدن از ردیف‌های قفل‌شده برای تقسیم کار. قفل DB را در تماس شبکه طولانی نگه ندار؛ claim/lease و چرخه retry را آگاهانه طراحی کن."
      }
    ],
    "summary": "Relay چند worker باید رکوردها را بدون انتشار همزمان غیرضروری claim کند. SKIP LOCKED ابزار تقسیم کار است، نه تضمین exactly-once. failure و retry هر رکورد را قابل مشاهده نگه دار.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/reliability"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-107",
    "slug": "event-versioning",
    "week": 18,
    "day": 5,
    "title": "استراتژی‌های تکامل و نسخه‌بندی پیام‌ها (Event Versioning)",
    "titleEn": "Event Versioning",
    "description": "مدیریت فیلدهای جدید در رویدادها بدون برهم‌زدن مصرف‌کنندگان قدیمی، قراردادهای سازگاری پیشرو و عقبرو.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Event Versioning",
      "Schema Evolution",
      "Compatibility"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 17",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کدام تغییر ریسک breaking بیشتری دارد",
      "consumer قدیمی را با event دارای فیلد اضافی تست کن؛ برای تغییر معنای amount نسخه و migration تعریف کن."
    ],
    "whyItMatters": "افزودن version بدون handler و سیاست سازگاری مشکل را حل نمی‌کند.",
    "introduction": "مدیریت فیلدهای جدید در رویدادها بدون برهم‌زدن مصرف‌کنندگان قدیمی، قراردادهای سازگاری پیشرو و عقبرو.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Schema event قرارداد بلندعمر است. فیلد جدید اختیاری با default معقول معمولاً سازگارتر است؛ تغییر نوع یا معنای فیلد قدیمی breaking است. producer و consumer مستقل deploy می‌شوند."
      }
    ],
    "realWorldScenario": {
      "scenario": "consumer قدیمی را با event دارای فیلد اضافی تست کن؛ برای تغییر معنای amount نسخه و migration تعریف کن.",
      "solution": "افزودن version بدون handler و سیاست سازگاری مشکل را حل نمی‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "json",
        "code": "{\"eventId\":\"e1\",\"type\":\"OrderCreated\",\"version\":2,\"data\":{\"orderId\":\"o1\",\"currency\":\"USD\",\"total\":\"12.50\"}}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Event Versioning",
      "explanation": "Outbox و dedup در Nest و Spring همان مرز DB/broker را حل می‌کنند؛ annotation تراکنش Spring، broker مستقل را خودبه‌خود عضو commit نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "افزودن version بدون handler و سیاست سازگاری مشکل را حل نمی‌کند.",
        "whyBad": "Schema event قرارداد بلندعمر است. فیلد جدید اختیاری با default معقول معمولاً سازگارتر است؛ تغییر نوع یا معنای فیلد قدیمی breaking است. producer و consumer مستقل deploy می‌شوند.",
        "solution": "تغییر معنای amount از واحد اصلی به واحد خرد بدون اعلام"
      }
    ],
    "bestPractices": [
      "افزودن version بدون handler و سیاست سازگاری مشکل را حل نمی‌کند.",
      "consumer قدیمی را با event دارای فیلد اضافی تست کن؛ برای تغییر معنای amount نسخه و migration تعریف کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "consumer قدیمی را با event دارای فیلد اضافی تست کن؛ برای تغییر معنای amount نسخه و migration تعریف کن.",
      "acceptanceCriteria": [
        "consumer قدیمی را با event دارای فیلد اضافی تست کن؛ برای تغییر معنای amount نسخه و migration تعریف کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "افزودن version بدون handler و سیاست سازگاری مشکل را حل نمی‌کند."
      ],
      "solution": {
        "code": "{\"eventId\":\"e1\",\"type\":\"OrderCreated\",\"version\":2,\"data\":{\"orderId\":\"o1\",\"currency\":\"USD\",\"total\":\"12.50\"}}",
        "language": "json",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تغییر معنای amount از واحد اصلی به واحد خرد بدون اعلام. افزودن version بدون handler و سیاست سازگاری مشکل را حل نمی‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-107",
        "question": "کدام تغییر ریسک breaking بیشتری دارد؟",
        "options": [
          "افزودن فیلد اختیاری که consumer می‌تواند نادیده بگیرد",
          "افزودن مستندات بدون تغییر payload",
          "تغییر معنای amount از واحد اصلی به واحد خرد بدون اعلام"
        ],
        "correctIndex": 2,
        "explanation": "تغییر معنای amount از واحد اصلی به واحد خرد بدون اعلام. Schema event قرارداد بلندعمر است. فیلد جدید اختیاری با default معقول معمولاً سازگارتر است؛ تغییر نوع یا معنای فیلد قدیمی breaking است. producer و consumer مستقل deploy می‌شوند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کدام تغییر ریسک breaking بیشتری دارد؟",
        "answer": "تغییر معنای amount از واحد اصلی به واحد خرد بدون اعلام. افزودن version بدون handler و سیاست سازگاری مشکل را حل نمی‌کند."
      }
    ],
    "summary": "Schema event قرارداد بلندعمر است. فیلد جدید اختیاری با default معقول معمولاً سازگارتر است؛ تغییر نوع یا معنای فیلد قدیمی breaking است. producer و consumer مستقل deploy می‌شوند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/reliability"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-108",
    "slug": "message-broker-monitoring",
    "week": 18,
    "day": 6,
    "title": "پایش سلامت صف‌ها، تاخیر مصرف و مانیتورینگ RabbitMQ",
    "titleEn": "Message Broker Monitoring",
    "description": "استخراج متریک‌های طول صف (Queue Depth)، مصرف‌کنندگان متصل و ایجاد هشدار هنگام مسدود شدن مصرف‌کننده‌ها.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "RabbitMQ Monitoring",
      "Queue Depth",
      "Operational Alerts"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 17",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کدام شاخص برای تأخیر پردازش صف مفیدتر است",
      "consumer را کند کن؛ قبل از رشد شدید خطای کاربر، backlog age و نرخ ack را ثبت کن."
    ],
    "whyItMatters": "purge صف راه درمان backlog بدون بررسی اثر تجاری نیست.",
    "introduction": "استخراج متریک‌های طول صف (Queue Depth)، مصرف‌کنندگان متصل و ایجاد هشدار هنگام مسدود شدن مصرف‌کننده‌ها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Queue depth به تنهایی کافی نیست؛ سن قدیمی‌ترین پیام، نرخ publish/ack، unacked و redelivery را کنار هم ببین. backlog رو به رشد با consumer ظاهراً روشن هم رخ می‌دهد. هشدار باید به اثر کاربر وصل باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "consumer را کند کن؛ قبل از رشد شدید خطای کاربر، backlog age و نرخ ack را ثبت کن.",
      "solution": "purge صف راه درمان backlog بدون بررسی اثر تجاری نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Monitor: oldest_message_age, ready, unacked, publish_rate, ack_rate\nInvestigate: rising age + ack_rate below publish_rate\nCheck: consumer failures, DB latency, poison messages",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Message Broker Monitoring",
      "explanation": "Outbox و dedup در Nest و Spring همان مرز DB/broker را حل می‌کنند؛ annotation تراکنش Spring، broker مستقل را خودبه‌خود عضو commit نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "purge صف راه درمان backlog بدون بررسی اثر تجاری نیست.",
        "whyBad": "Queue depth به تنهایی کافی نیست؛ سن قدیمی‌ترین پیام، نرخ publish/ack، unacked و redelivery را کنار هم ببین. backlog رو به رشد با consumer ظاهراً روشن هم رخ می‌دهد. هشدار باید به اثر کاربر وصل باشد.",
        "solution": "سن قدیمی‌ترین پیام همراه نرخ‌ها"
      }
    ],
    "bestPractices": [
      "purge صف راه درمان backlog بدون بررسی اثر تجاری نیست.",
      "consumer را کند کن؛ قبل از رشد شدید خطای کاربر، backlog age و نرخ ack را ثبت کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "consumer را کند کن؛ قبل از رشد شدید خطای کاربر، backlog age و نرخ ack را ثبت کن.",
      "acceptanceCriteria": [
        "consumer را کند کن؛ قبل از رشد شدید خطای کاربر، backlog age و نرخ ack را ثبت کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "purge صف راه درمان backlog بدون بررسی اثر تجاری نیست."
      ],
      "solution": {
        "code": "Monitor: oldest_message_age, ready, unacked, publish_rate, ack_rate\nInvestigate: rising age + ack_rate below publish_rate\nCheck: consumer failures, DB latency, poison messages",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. سن قدیمی‌ترین پیام همراه نرخ‌ها. purge صف راه درمان backlog بدون بررسی اثر تجاری نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-108",
        "question": "کدام شاخص برای تأخیر پردازش صف مفیدتر است؟",
        "options": [
          "سن قدیمی‌ترین پیام همراه نرخ‌ها",
          "فقط تعداد processهای Java",
          "صرفاً روشن‌بودن management UI"
        ],
        "correctIndex": 0,
        "explanation": "سن قدیمی‌ترین پیام همراه نرخ‌ها. Queue depth به تنهایی کافی نیست؛ سن قدیمی‌ترین پیام، نرخ publish/ack، unacked و redelivery را کنار هم ببین. backlog رو به رشد با consumer ظاهراً روشن هم رخ می‌دهد. هشدار باید به اثر کاربر وصل باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کدام شاخص برای تأخیر پردازش صف مفیدتر است؟",
        "answer": "سن قدیمی‌ترین پیام همراه نرخ‌ها. purge صف راه درمان backlog بدون بررسی اثر تجاری نیست."
      }
    ],
    "summary": "Queue depth به تنهایی کافی نیست؛ سن قدیمی‌ترین پیام، نرخ publish/ack، unacked و redelivery را کنار هم ببین. backlog رو به رشد با consumer ظاهراً روشن هم رخ می‌دهد. هشدار باید به اثر کاربر وصل باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/reliability"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
