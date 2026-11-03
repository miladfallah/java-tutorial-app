import { Lesson } from "../types";

export const WEEK_21_LESSONS: Lesson[] = [
  {
    "id": "lesson-121",
    "slug": "cap-theorem-and-consistency-models",
    "week": 21,
    "day": 1,
    "title": "قضیه CAP و مدل‌های سازگاری در سیستم‌های توزیع‌شده",
    "titleEn": "CAP Theorem and Consistency Models",
    "description": "تحلیل مرزهای دسترسی‌پذیری و سازگاری داده در زمان گسستگی شبکه، بررسی تئوری PACELC و سیستم‌های پیشرو.",
    "category": "Distributed Systems",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "CAP Theorem",
      "PACELC",
      "Distributed Systems",
      "Consistency Models"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 20",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "CAP چه زمانی trade-off مشخصی تحمیل می‌کند",
      "برای رزرو موجودی و مشاهده کاتالوگ دو تصمیم متفاوت هنگام partition بنویس و دلیل تجاری بده."
    ],
    "whyItMatters": "برچسب AP یا CP را بدون مدل operation و failure به کل محصول نچسبان.",
    "introduction": "تحلیل مرزهای دسترسی‌پذیری و سازگاری داده در زمان گسستگی شبکه، بررسی تئوری PACELC و سیستم‌های پیشرو.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "CAP درباره رفتار هنگام partition شبکه است: نمی‌توان هم پاسخ‌گویی همه گره‌های سالم و هم linearizability را همواره حفظ کرد. consistency در CAP با حرف C در ACID یکی نیست. برای هر operation سیاست read/write و داده stale را جدا انتخاب کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای رزرو موجودی و مشاهده کاتالوگ دو تصمیم متفاوت هنگام partition بنویس و دلیل تجاری بده.",
      "solution": "برچسب AP یا CP را بدون مدل operation و failure به کل محصول نچسبان."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Inventory reservation during partition:\nOption A: reject/queue writes without authoritative quorum\nOption B: accept risk with an explicit reconciliation policy",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "CAP Theorem and Consistency Models",
      "explanation": "Timeout، duplicate و partition مستقل از زبان‌اند. هیچ frameworkی بدون طراحی state و قرارداد شکست، consistency توزیع‌شده نمی‌دهد."
    },
    "commonMistakes": [
      {
        "mistake": "برچسب AP یا CP را بدون مدل operation و failure به کل محصول نچسبان.",
        "whyBad": "CAP درباره رفتار هنگام partition شبکه است: نمی‌توان هم پاسخ‌گویی همه گره‌های سالم و هم linearizability را همواره حفظ کرد. consistency در CAP با حرف C در ACID یکی نیست. برای هر operation سیاست read/write و داده stale را جدا انتخاب کن.",
        "solution": "هنگام partition شبکه"
      }
    ],
    "bestPractices": [
      "برچسب AP یا CP را بدون مدل operation و failure به کل محصول نچسبان.",
      "برای رزرو موجودی و مشاهده کاتالوگ دو تصمیم متفاوت هنگام partition بنویس و دلیل تجاری بده."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای رزرو موجودی و مشاهده کاتالوگ دو تصمیم متفاوت هنگام partition بنویس و دلیل تجاری بده.",
      "acceptanceCriteria": [
        "برای رزرو موجودی و مشاهده کاتالوگ دو تصمیم متفاوت هنگام partition بنویس و دلیل تجاری بده.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "برچسب AP یا CP را بدون مدل operation و failure به کل محصول نچسبان."
      ],
      "solution": {
        "code": "Inventory reservation during partition:\nOption A: reject/queue writes without authoritative quorum\nOption B: accept risk with an explicit reconciliation policy",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. هنگام partition شبکه. برچسب AP یا CP را بدون مدل operation و failure به کل محصول نچسبان."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-121",
        "question": "CAP چه زمانی trade-off مشخصی تحمیل می‌کند؟",
        "options": [
          "در هر حلقه for داخل JVM",
          "هنگام partition شبکه",
          "فقط زمانی که جدول هیچ index ندارد"
        ],
        "correctIndex": 1,
        "explanation": "هنگام partition شبکه. CAP درباره رفتار هنگام partition شبکه است: نمی‌توان هم پاسخ‌گویی همه گره‌های سالم و هم linearizability را همواره حفظ کرد. consistency در CAP با حرف C در ACID یکی نیست. برای هر operation سیاست read/write و داده stale را جدا انتخاب کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: CAP چه زمانی trade-off مشخصی تحمیل می‌کند؟",
        "answer": "هنگام partition شبکه. برچسب AP یا CP را بدون مدل operation و failure به کل محصول نچسبان."
      }
    ],
    "summary": "CAP درباره رفتار هنگام partition شبکه است: نمی‌توان هم پاسخ‌گویی همه گره‌های سالم و هم linearizability را همواره حفظ کرد. consistency در CAP با حرف C در ACID یکی نیست. برای هر operation سیاست read/write و داده stale را جدا انتخاب کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/transaction-iso.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-122",
    "slug": "service-boundaries",
    "week": 21,
    "day": 2,
    "title": "تعیین مرزهای سرویس و دامنه بر اساس مفاهیم Domain-Driven Design (DDD)",
    "titleEn": "Service Boundaries",
    "description": "شناسایی Bounded Contextها، تفکیک مرز سرویس سفارشات از موجودی و پرداخت و جلوگیری از معماری وحشتناک Distributed Monolith.",
    "category": "Distributed Systems",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "DDD",
      "Bounded Context",
      "Microservices Boundaries"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 20",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "نشانه مرز سرویس ناسالم چیست",
      "وابستگی Orders و Inventory را رسم کن؛ یک write مستقیم به جدول مالک دیگر را به قرارداد تبدیل کن."
    ],
    "whyItMatters": "تعداد تیم، مهارت عملیات و نیاز consistency در انتخاب microservice مهم‌اند.",
    "introduction": "شناسایی Bounded Contextها، تفکیک مرز سرویس سفارشات از موجودی و پرداخت و جلوگیری از معماری وحشتناک Distributed Monolith.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "مرز سرویس بهتر است حول مسئولیت دامنه و مالکیت داده باشد. جداکردن deployment بدون جداکردن coupling می‌تواند distributed monolith بسازد. ابتدا مرز ماژول را در یک process آزمایش کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "وابستگی Orders و Inventory را رسم کن؛ یک write مستقیم به جدول مالک دیگر را به قرارداد تبدیل کن.",
      "solution": "تعداد تیم، مهارت عملیات و نیاز consistency در انتخاب microservice مهم‌اند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Orders owns: order state and order history\nInventory owns: stock and reservations\nCommunication: explicit commands/events; no cross-service table writes",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Service Boundaries",
      "explanation": "Timeout، duplicate و partition مستقل از زبان‌اند. هیچ frameworkی بدون طراحی state و قرارداد شکست، consistency توزیع‌شده نمی‌دهد."
    },
    "commonMistakes": [
      {
        "mistake": "تعداد تیم، مهارت عملیات و نیاز consistency در انتخاب microservice مهم‌اند.",
        "whyBad": "مرز سرویس بهتر است حول مسئولیت دامنه و مالکیت داده باشد. جداکردن deployment بدون جداکردن coupling می‌تواند distributed monolith بسازد. ابتدا مرز ماژول را در یک process آزمایش کن.",
        "solution": "نیاز به deploy همزمان همه سرویس‌ها برای هر تغییر کوچک"
      }
    ],
    "bestPractices": [
      "تعداد تیم، مهارت عملیات و نیاز consistency در انتخاب microservice مهم‌اند.",
      "وابستگی Orders و Inventory را رسم کن؛ یک write مستقیم به جدول مالک دیگر را به قرارداد تبدیل کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "وابستگی Orders و Inventory را رسم کن؛ یک write مستقیم به جدول مالک دیگر را به قرارداد تبدیل کن.",
      "acceptanceCriteria": [
        "وابستگی Orders و Inventory را رسم کن؛ یک write مستقیم به جدول مالک دیگر را به قرارداد تبدیل کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "تعداد تیم، مهارت عملیات و نیاز consistency در انتخاب microservice مهم‌اند."
      ],
      "solution": {
        "code": "Orders owns: order state and order history\nInventory owns: stock and reservations\nCommunication: explicit commands/events; no cross-service table writes",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. نیاز به deploy همزمان همه سرویس‌ها برای هر تغییر کوچک. تعداد تیم، مهارت عملیات و نیاز consistency در انتخاب microservice مهم‌اند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-122",
        "question": "نشانه مرز سرویس ناسالم چیست؟",
        "options": [
          "قرارداد روشن و مالکیت داده مستقل",
          "تست مستقل هر use case",
          "نیاز به deploy همزمان همه سرویس‌ها برای هر تغییر کوچک"
        ],
        "correctIndex": 2,
        "explanation": "نیاز به deploy همزمان همه سرویس‌ها برای هر تغییر کوچک. مرز سرویس بهتر است حول مسئولیت دامنه و مالکیت داده باشد. جداکردن deployment بدون جداکردن coupling می‌تواند distributed monolith بسازد. ابتدا مرز ماژول را در یک process آزمایش کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: نشانه مرز سرویس ناسالم چیست؟",
        "answer": "نیاز به deploy همزمان همه سرویس‌ها برای هر تغییر کوچک. تعداد تیم، مهارت عملیات و نیاز consistency در انتخاب microservice مهم‌اند."
      }
    ],
    "summary": "مرز سرویس بهتر است حول مسئولیت دامنه و مالکیت داده باشد. جداکردن deployment بدون جداکردن coupling می‌تواند distributed monolith بسازد. ابتدا مرز ماژول را در یک process آزمایش کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/transaction-iso.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-123",
    "slug": "saga-and-compensation",
    "week": 21,
    "day": 3,
    "title": "الگوی ساگا (Saga Pattern) و تراکنش‌های جبرانی (Compensating Actions)",
    "titleEn": "Saga and Compensation",
    "description": "مدیریت تراکنش‌های توزیع‌شده چندسرویسی بدون 2PC، مقایسه روش ره‌رهوی (Choreography) با روش رهبری مرکزی (Orchestration).",
    "category": "Distributed Systems",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Saga Pattern",
      "Distributed Transactions",
      "Compensation"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 20",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "Compensation چه چیزی نیست",
      "شکست پرداخت و شکست جبران را شبیه‌سازی کن؛ state machine و اقدام عملیاتی را مشخص کن."
    ],
    "whyItMatters": "بدون ثبت پایدار state، restart coordinator می‌تواند workflow را گم کند.",
    "introduction": "مدیریت تراکنش‌های توزیع‌شده چندسرویسی بدون 2PC، مقایسه روش ره‌رهوی (Choreography) با روش رهبری مرکزی (Orchestration).",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Saga چند تراکنش محلی را با فرمان و جبران هماهنگ می‌کند. compensation rollback فیزیکی زمان نیست؛ یک عمل تجاری جدید است و ممکن است شکست بخورد. هر مرحله باید idempotent و قابل پیگیری باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "شکست پرداخت و شکست جبران را شبیه‌سازی کن؛ state machine و اقدام عملیاتی را مشخص کن.",
      "solution": "بدون ثبت پایدار state، restart coordinator می‌تواند workflow را گم کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Reserve stock -> Authorize payment -> Confirm order\nOn payment failure -> Release reservation\nOn release failure -> Retry compensation + alert",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Saga and Compensation",
      "explanation": "Timeout، duplicate و partition مستقل از زبان‌اند. هیچ frameworkی بدون طراحی state و قرارداد شکست، consistency توزیع‌شده نمی‌دهد."
    },
    "commonMistakes": [
      {
        "mistake": "بدون ثبت پایدار state، restart coordinator می‌تواند workflow را گم کند.",
        "whyBad": "Saga چند تراکنش محلی را با فرمان و جبران هماهنگ می‌کند. compensation rollback فیزیکی زمان نیست؛ یک عمل تجاری جدید است و ممکن است شکست بخورد. هر مرحله باید idempotent و قابل پیگیری باشد.",
        "solution": "rollback اتمیک و فوری تمام سیستم‌های بیرونی"
      }
    ],
    "bestPractices": [
      "بدون ثبت پایدار state، restart coordinator می‌تواند workflow را گم کند.",
      "شکست پرداخت و شکست جبران را شبیه‌سازی کن؛ state machine و اقدام عملیاتی را مشخص کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "شکست پرداخت و شکست جبران را شبیه‌سازی کن؛ state machine و اقدام عملیاتی را مشخص کن.",
      "acceptanceCriteria": [
        "شکست پرداخت و شکست جبران را شبیه‌سازی کن؛ state machine و اقدام عملیاتی را مشخص کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "بدون ثبت پایدار state، restart coordinator می‌تواند workflow را گم کند."
      ],
      "solution": {
        "code": "Reserve stock -> Authorize payment -> Confirm order\nOn payment failure -> Release reservation\nOn release failure -> Retry compensation + alert",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. rollback اتمیک و فوری تمام سیستم‌های بیرونی. بدون ثبت پایدار state، restart coordinator می‌تواند workflow را گم کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-123",
        "question": "Compensation چه چیزی نیست؟",
        "options": [
          "rollback اتمیک و فوری تمام سیستم‌های بیرونی",
          "عمل تجاری برای خنثی‌کردن اثر مرحله قبلی",
          "مرحله‌ای که خودش هم ممکن است retry بخواهد"
        ],
        "correctIndex": 0,
        "explanation": "rollback اتمیک و فوری تمام سیستم‌های بیرونی. Saga چند تراکنش محلی را با فرمان و جبران هماهنگ می‌کند. compensation rollback فیزیکی زمان نیست؛ یک عمل تجاری جدید است و ممکن است شکست بخورد. هر مرحله باید idempotent و قابل پیگیری باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: Compensation چه چیزی نیست؟",
        "answer": "rollback اتمیک و فوری تمام سیستم‌های بیرونی. بدون ثبت پایدار state، restart coordinator می‌تواند workflow را گم کند."
      }
    ],
    "summary": "Saga چند تراکنش محلی را با فرمان و جبران هماهنگ می‌کند. compensation rollback فیزیکی زمان نیست؛ یک عمل تجاری جدید است و ممکن است شکست بخورد. هر مرحله باید idempotent و قابل پیگیری باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/transaction-iso.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-124",
    "slug": "designing-order-and-inventory-workflows",
    "week": 21,
    "day": 4,
    "title": "طراحی جریان خرید و کسر موجودی به صورت Saga (پروژه محوری)",
    "titleEn": "Designing Order and Inventory Workflows",
    "description": "پیاده‌سازی گام‌های رزرو کالا، پرداخت و در صورت شکست پرداخت، ارسال تراکنش جبرانی بازگشت موجودی به انبار.",
    "category": "Distributed Systems",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Saga Implementation",
      "Order Workflow",
      "Compensating Transactions"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 20",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای event دیررس پس از لغو سفارش چه نیاز داریم",
      "event پرداخت دیررس را پس از cancellation اعمال کن؛ transition نامجاز رد و برای بررسی ثبت شود."
    ],
    "whyItMatters": "ترتیب دریافت پیام را همان ترتیب واقعی رخدادها فرض نکن.",
    "introduction": "پیاده‌سازی گام‌های رزرو کالا، پرداخت و در صورت شکست پرداخت، ارسال تراکنش جبرانی بازگشت موجودی به انبار.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Workflow سفارش باید stateهای مجاز و transitionها را روشن کند. رخداد دیررس و تکراری نباید سفارش لغوشده را دوباره تأیید کند. timeout، expiry رزرو و reconciliation بخشی از طراحی‌اند."
      }
    ],
    "realWorldScenario": {
      "scenario": "event پرداخت دیررس را پس از cancellation اعمال کن؛ transition نامجاز رد و برای بررسی ثبت شود.",
      "solution": "ترتیب دریافت پیام را همان ترتیب واقعی رخدادها فرض نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "NEW -> RESERVED -> PAYMENT_AUTHORIZED -> CONFIRMED\nRESERVED -> CANCELLED (timeout/payment failure)\nCONFIRMED -X-> RESERVED",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Designing Order and Inventory Workflows",
      "explanation": "Timeout، duplicate و partition مستقل از زبان‌اند. هیچ frameworkی بدون طراحی state و قرارداد شکست، consistency توزیع‌شده نمی‌دهد."
    },
    "commonMistakes": [
      {
        "mistake": "ترتیب دریافت پیام را همان ترتیب واقعی رخدادها فرض نکن.",
        "whyBad": "Workflow سفارش باید stateهای مجاز و transitionها را روشن کند. رخداد دیررس و تکراری نباید سفارش لغوشده را دوباره تأیید کند. timeout، expiry رزرو و reconciliation بخشی از طراحی‌اند.",
        "solution": "کنترل state و سیاست جبران/بررسی"
      }
    ],
    "bestPractices": [
      "ترتیب دریافت پیام را همان ترتیب واقعی رخدادها فرض نکن.",
      "event پرداخت دیررس را پس از cancellation اعمال کن؛ transition نامجاز رد و برای بررسی ثبت شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "event پرداخت دیررس را پس از cancellation اعمال کن؛ transition نامجاز رد و برای بررسی ثبت شود.",
      "acceptanceCriteria": [
        "event پرداخت دیررس را پس از cancellation اعمال کن؛ transition نامجاز رد و برای بررسی ثبت شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "ترتیب دریافت پیام را همان ترتیب واقعی رخدادها فرض نکن."
      ],
      "solution": {
        "code": "NEW -> RESERVED -> PAYMENT_AUTHORIZED -> CONFIRMED\nRESERVED -> CANCELLED (timeout/payment failure)\nCONFIRMED -X-> RESERVED",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. کنترل state و سیاست جبران/بررسی. ترتیب دریافت پیام را همان ترتیب واقعی رخدادها فرض نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-124",
        "question": "برای event دیررس پس از لغو سفارش چه نیاز داریم؟",
        "options": [
          "تأیید بی‌قید سفارش چون event معتبر است",
          "کنترل state و سیاست جبران/بررسی",
          "حذف تمام تاریخچه workflow"
        ],
        "correctIndex": 1,
        "explanation": "کنترل state و سیاست جبران/بررسی. Workflow سفارش باید stateهای مجاز و transitionها را روشن کند. رخداد دیررس و تکراری نباید سفارش لغوشده را دوباره تأیید کند. timeout، expiry رزرو و reconciliation بخشی از طراحی‌اند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای event دیررس پس از لغو سفارش چه نیاز داریم؟",
        "answer": "کنترل state و سیاست جبران/بررسی. ترتیب دریافت پیام را همان ترتیب واقعی رخدادها فرض نکن."
      }
    ],
    "summary": "Workflow سفارش باید stateهای مجاز و transitionها را روشن کند. رخداد دیررس و تکراری نباید سفارش لغوشده را دوباره تأیید کند. timeout، expiry رزرو و reconciliation بخشی از طراحی‌اند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/transaction-iso.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-125",
    "slug": "distributed-idempotency",
    "week": 21,
    "day": 5,
    "title": "طراحی Idempotency سراسری در شبکه‌های توزیع‌شده نامطمئن",
    "titleEn": "Distributed Idempotency",
    "description": "الگوی Lock-and-Key با استفاده از Redis Redlock و جداول یکتا برای محافظت در برابر چندین بار ارسال رویدادهای مالی.",
    "category": "Distributed Systems",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Distributed Idempotency",
      "Redlock",
      "Financial Safety"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 20",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کلید سراسری بدون tenant چه ریسکی دارد",
      "دو instance و سه منبع retry را شبیه‌سازی کن؛ یک اثر تجاری و پاسخ قابل replay داشته باش."
    ],
    "whyItMatters": "distributed lock به تنهایی رکورد نتیجه و اتمیک‌بودن side effect را تضمین نمی‌کند.",
    "introduction": "الگوی Lock-and-Key با استفاده از Redis Redlock و جداول یکتا برای محافظت در برابر چندین بار ارسال رویدادهای مالی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Idempotency توزیع‌شده به ذخیره پایدار و scope روشن نیاز دارد. retry از gateway، queue و client می‌تواند همزمان برسد. کلید عملیات با payload fingerprint و نتیجه ثبت شود و lease منقضی قابل بازیابی باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو instance و سه منبع retry را شبیه‌سازی کن؛ یک اثر تجاری و پاسخ قابل replay داشته باش.",
      "solution": "distributed lock به تنهایی رکورد نتیجه و اتمیک‌بودن side effect را تضمین نمی‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "CREATE UNIQUE INDEX operation_key ON operations(tenant_id, operation_type, idempotency_key);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Distributed Idempotency",
      "explanation": "Timeout، duplicate و partition مستقل از زبان‌اند. هیچ frameworkی بدون طراحی state و قرارداد شکست، consistency توزیع‌شده نمی‌دهد."
    },
    "commonMistakes": [
      {
        "mistake": "distributed lock به تنهایی رکورد نتیجه و اتمیک‌بودن side effect را تضمین نمی‌کند.",
        "whyBad": "Idempotency توزیع‌شده به ذخیره پایدار و scope روشن نیاز دارد. retry از gateway، queue و client می‌تواند همزمان برسد. کلید عملیات با payload fingerprint و نتیجه ثبت شود و lease منقضی قابل بازیابی باشد.",
        "solution": "تعارض یا افشای نتیجه بین مشتری‌ها"
      }
    ],
    "bestPractices": [
      "distributed lock به تنهایی رکورد نتیجه و اتمیک‌بودن side effect را تضمین نمی‌کند.",
      "دو instance و سه منبع retry را شبیه‌سازی کن؛ یک اثر تجاری و پاسخ قابل replay داشته باش."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو instance و سه منبع retry را شبیه‌سازی کن؛ یک اثر تجاری و پاسخ قابل replay داشته باش.",
      "acceptanceCriteria": [
        "دو instance و سه منبع retry را شبیه‌سازی کن؛ یک اثر تجاری و پاسخ قابل replay داشته باش.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "distributed lock به تنهایی رکورد نتیجه و اتمیک‌بودن side effect را تضمین نمی‌کند."
      ],
      "solution": {
        "code": "CREATE UNIQUE INDEX operation_key ON operations(tenant_id, operation_type, idempotency_key);",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تعارض یا افشای نتیجه بین مشتری‌ها. distributed lock به تنهایی رکورد نتیجه و اتمیک‌بودن side effect را تضمین نمی‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-125",
        "question": "کلید سراسری بدون tenant چه ریسکی دارد؟",
        "options": [
          "تضمین بهتر authorization",
          "حذف نیاز به ذخیره نتیجه",
          "تعارض یا افشای نتیجه بین مشتری‌ها"
        ],
        "correctIndex": 2,
        "explanation": "تعارض یا افشای نتیجه بین مشتری‌ها. Idempotency توزیع‌شده به ذخیره پایدار و scope روشن نیاز دارد. retry از gateway، queue و client می‌تواند همزمان برسد. کلید عملیات با payload fingerprint و نتیجه ثبت شود و lease منقضی قابل بازیابی باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کلید سراسری بدون tenant چه ریسکی دارد؟",
        "answer": "تعارض یا افشای نتیجه بین مشتری‌ها. distributed lock به تنهایی رکورد نتیجه و اتمیک‌بودن side effect را تضمین نمی‌کند."
      }
    ],
    "summary": "Idempotency توزیع‌شده به ذخیره پایدار و scope روشن نیاز دارد. retry از gateway، queue و client می‌تواند همزمان برسد. کلید عملیات با payload fingerprint و نتیجه ثبت شود و lease منقضی قابل بازیابی باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/transaction-iso.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-126",
    "slug": "distributed-failure-scenarios",
    "week": 21,
    "day": 6,
    "title": "کالبدشکافی سناریوهای شکست در شبکه‌های توزیع‌شده و دفاع در عمق",
    "titleEn": "Distributed Failure Scenarios",
    "description": "رفتار سرویس‌ها هنگام قطعی‌های مقطعی، تاخیرهای نامنظم، حملات طوفانی و بررسی تئوری Fallacies of Distributed Computing.",
    "category": "Distributed Systems",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Distributed Failures",
      "Network Latency",
      "Resilience"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 20",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "پس از timeout پاسخ POST چه چیزی را می‌دانیم",
      "اتصال را بعد از commit قطع کن؛ client باید با همان کلید نتیجه قبلی را بازیابی کند."
    ],
    "whyItMatters": "آشفتگی شبکه را با سناریوی کنترل‌شده تست کن؛ دوباره‌کاری مالی پیامد واقعی دارد.",
    "introduction": "رفتار سرویس‌ها هنگام قطعی‌های مقطعی، تاخیرهای نامنظم، حملات طوفانی و بررسی تئوری Fallacies of Distributed Computing.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Timeout یعنی نتیجه نامعلوم است، نه لزوماً شکست عملیات. server ممکن است commit کرده ولی پاسخ گم شده باشد. طراحی recovery باید با شناسه عملیات امکان پرس‌وجو و replay امن بدهد."
      }
    ],
    "realWorldScenario": {
      "scenario": "اتصال را بعد از commit قطع کن؛ client باید با همان کلید نتیجه قبلی را بازیابی کند.",
      "solution": "آشفتگی شبکه را با سناریوی کنترل‌شده تست کن؛ دوباره‌کاری مالی پیامد واقعی دارد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Client sends POST with key k1\nServer commits -> response connection breaks\nClient retries k1 -> returns recorded result, no second order",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Distributed Failure Scenarios",
      "explanation": "Timeout، duplicate و partition مستقل از زبان‌اند. هیچ frameworkی بدون طراحی state و قرارداد شکست، consistency توزیع‌شده نمی‌دهد."
    },
    "commonMistakes": [
      {
        "mistake": "آشفتگی شبکه را با سناریوی کنترل‌شده تست کن؛ دوباره‌کاری مالی پیامد واقعی دارد.",
        "whyBad": "Timeout یعنی نتیجه نامعلوم است، نه لزوماً شکست عملیات. server ممکن است commit کرده ولی پاسخ گم شده باشد. طراحی recovery باید با شناسه عملیات امکان پرس‌وجو و replay امن بدهد.",
        "solution": "نتیجه ممکن است نامعلوم باشد"
      }
    ],
    "bestPractices": [
      "آشفتگی شبکه را با سناریوی کنترل‌شده تست کن؛ دوباره‌کاری مالی پیامد واقعی دارد.",
      "اتصال را بعد از commit قطع کن؛ client باید با همان کلید نتیجه قبلی را بازیابی کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "اتصال را بعد از commit قطع کن؛ client باید با همان کلید نتیجه قبلی را بازیابی کند.",
      "acceptanceCriteria": [
        "اتصال را بعد از commit قطع کن؛ client باید با همان کلید نتیجه قبلی را بازیابی کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "آشفتگی شبکه را با سناریوی کنترل‌شده تست کن؛ دوباره‌کاری مالی پیامد واقعی دارد."
      ],
      "solution": {
        "code": "Client sends POST with key k1\nServer commits -> response connection breaks\nClient retries k1 -> returns recorded result, no second order",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. نتیجه ممکن است نامعلوم باشد. آشفتگی شبکه را با سناریوی کنترل‌شده تست کن؛ دوباره‌کاری مالی پیامد واقعی دارد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-126",
        "question": "پس از timeout پاسخ POST چه چیزی را می‌دانیم؟",
        "options": [
          "نتیجه ممکن است نامعلوم باشد",
          "قطعاً هیچ write رخ نداده",
          "قطعاً باید با کلید تازه retry کنیم"
        ],
        "correctIndex": 0,
        "explanation": "نتیجه ممکن است نامعلوم باشد. Timeout یعنی نتیجه نامعلوم است، نه لزوماً شکست عملیات. server ممکن است commit کرده ولی پاسخ گم شده باشد. طراحی recovery باید با شناسه عملیات امکان پرس‌وجو و replay امن بدهد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: پس از timeout پاسخ POST چه چیزی را می‌دانیم؟",
        "answer": "نتیجه ممکن است نامعلوم باشد. آشفتگی شبکه را با سناریوی کنترل‌شده تست کن؛ دوباره‌کاری مالی پیامد واقعی دارد."
      }
    ],
    "summary": "Timeout یعنی نتیجه نامعلوم است، نه لزوماً شکست عملیات. server ممکن است commit کرده ولی پاسخ گم شده باشد. طراحی recovery باید با شناسه عملیات امکان پرس‌وجو و replay امن بدهد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.postgresql.org/docs/17/transaction-iso.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
