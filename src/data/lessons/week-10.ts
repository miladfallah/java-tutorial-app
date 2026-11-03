import { Lesson } from "../types";

export const WEEK_10_LESSONS: Lesson[] = [
  {
    "id": "lesson-055",
    "slug": "hibernate-persistence-context",
    "week": 10,
    "day": 1,
    "title": "زمینه پایداری هایبرنیت (Hibernate Persistence Context)",
    "titleEn": "Hibernate Persistence Context",
    "description": "بررسی کش سطح اول (First-Level Cache)، مکانیزم Dirty Checking و زمان‌بندی دقیق اجرای دستورات SQL در فلاشینگ.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Hibernate",
      "Persistence Context",
      "Dirty Checking",
      "Flush"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 9",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "پس از bulk update چه ریسکی وجود دارد",
      "پس از clear دوباره query کن؛ تفاوت هویت object و هویت ردیف را توضیح بده."
    ],
    "whyItMatters": "clear تمام تغییرات flush‌نشده را می‌تواند از پیگیری خارج کند؛ ترتیب flush و clear مهم است.",
    "introduction": "بررسی کش سطح اول (First-Level Cache)، مکانیزم Dirty Checking و زمان‌بندی دقیق اجرای دستورات SQL در فلاشینگ.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Persistence context یک identity map در مرز session/transaction است؛ دو find برای یک id معمولاً همان نمونه managed را می‌دهند. bulk update آن را خودکار همگام نمی‌کند و می‌تواند state قدیمی باقی بگذارد."
      }
    ],
    "realWorldScenario": {
      "scenario": "پس از clear دوباره query کن؛ تفاوت هویت object و هویت ردیف را توضیح بده.",
      "solution": "clear تمام تغییرات flush‌نشده را می‌تواند از پیگیری خارج کند؛ ترتیب flush و clear مهم است."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "Order first = entityManager.find(Order.class, id);\nOrder second = entityManager.find(Order.class, id);\nassert first == second;\nentityManager.clear(); // objects become detached",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Hibernate Persistence Context",
      "explanation": "مانند ORMهای Node، SQL واقعی را ببین. تفاوت JPA این است که persistence context و lazy proxy می‌توانند query را در زمان دسترسی بعدی اجرا کنند."
    },
    "commonMistakes": [
      {
        "mistake": "clear تمام تغییرات flush‌نشده را می‌تواند از پیگیری خارج کند؛ ترتیب flush و clear مهم است.",
        "whyBad": "Persistence context یک identity map در مرز session/transaction است؛ دو find برای یک id معمولاً همان نمونه managed را می‌دهند. bulk update آن را خودکار همگام نمی‌کند و می‌تواند state قدیمی باقی بگذارد.",
        "solution": "ماندن entity قدیمی در persistence context"
      }
    ],
    "bestPractices": [
      "clear تمام تغییرات flush‌نشده را می‌تواند از پیگیری خارج کند؛ ترتیب flush و clear مهم است.",
      "پس از clear دوباره query کن؛ تفاوت هویت object و هویت ردیف را توضیح بده."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "پس از clear دوباره query کن؛ تفاوت هویت object و هویت ردیف را توضیح بده.",
      "acceptanceCriteria": [
        "پس از clear دوباره query کن؛ تفاوت هویت object و هویت ردیف را توضیح بده.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "clear تمام تغییرات flush‌نشده را می‌تواند از پیگیری خارج کند؛ ترتیب flush و clear مهم است."
      ],
      "solution": {
        "code": "Order first = entityManager.find(Order.class, id);\nOrder second = entityManager.find(Order.class, id);\nassert first == second;\nentityManager.clear(); // objects become detached",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ماندن entity قدیمی در persistence context. clear تمام تغییرات flush‌نشده را می‌تواند از پیگیری خارج کند؛ ترتیب flush و clear مهم است."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-055",
        "question": "پس از bulk update چه ریسکی وجود دارد؟",
        "options": [
          "commit خودکار تمام contextهای جهان",
          "ماندن entity قدیمی در persistence context",
          "تبدیل entityها به record immutable"
        ],
        "correctIndex": 1,
        "explanation": "ماندن entity قدیمی در persistence context. Persistence context یک identity map در مرز session/transaction است؛ دو find برای یک id معمولاً همان نمونه managed را می‌دهند. bulk update آن را خودکار همگام نمی‌کند و می‌تواند state قدیمی باقی بگذارد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: پس از bulk update چه ریسکی وجود دارد؟",
        "answer": "ماندن entity قدیمی در persistence context. clear تمام تغییرات flush‌نشده را می‌تواند از پیگیری خارج کند؛ ترتیب flush و clear مهم است."
      }
    ],
    "summary": "Persistence context یک identity map در مرز session/transaction است؛ دو find برای یک id معمولاً همان نمونه managed را می‌دهند. bulk update آن را خودکار همگام نمی‌کند و می‌تواند state قدیمی باقی بگذارد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-056",
    "slug": "lazy-loading-eager-loading-and-n-1",
    "week": 10,
    "day": 2,
    "title": "تحلیل بارگذاری تنبل و مشکلسازترین خطای ORM: باگ N+1",
    "titleEn": "Lazy Loading, Eager Loading and N+1",
    "description": "کالبدشکافی چگونگی وقوع صدها کوئری ناخواسته در بارگذاری اقلام سفارش و بررسی ضربه مرگبار آن به کارایی سرور.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "N+1 Problem",
      "Lazy Loading",
      "ORM Pitfalls",
      "Performance"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 9",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا EAGER تضمین یک query دارد",
      "برای ۱ و ۲۰ سفارش تعداد SQLها را مقایسه کن؛ list API را با projection یا دو query محدود اصلاح کن."
    ],
    "whyItMatters": "join چند collection می‌تواند حاصل‌ضرب ردیف‌ها بسازد؛ کم‌شدن query همیشه کم‌شدن هزینه نیست.",
    "introduction": "کالبدشکافی چگونگی وقوع صدها کوئری ناخواسته در بارگذاری اقلام سفارش و بررسی ضربه مرگبار آن به کارایی سرور.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "N+1 یعنی یک query پایه و queryهای اضافه هنگام پیمایش روابط. EAGER الزاماً join نیست. fetch join، EntityGraph یا projection را متناسب با اندازه داده انتخاب کن؛ collection join همراه pagination خطرناک است."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای ۱ و ۲۰ سفارش تعداد SQLها را مقایسه کن؛ list API را با projection یا دو query محدود اصلاح کن.",
      "solution": "join چند collection می‌تواند حاصل‌ضرب ردیف‌ها بسازد؛ کم‌شدن query همیشه کم‌شدن هزینه نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@EntityGraph(attributePaths = \"items\")\n@Query(\"select o from Order o where o.id = :id\")\nOptional<Order> findWithItems(@Param(\"id\") UUID id);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Lazy Loading, Eager Loading and N+1",
      "explanation": "مانند ORMهای Node، SQL واقعی را ببین. تفاوت JPA این است که persistence context و lazy proxy می‌توانند query را در زمان دسترسی بعدی اجرا کنند."
    },
    "commonMistakes": [
      {
        "mistake": "join چند collection می‌تواند حاصل‌ضرب ردیف‌ها بسازد؛ کم‌شدن query همیشه کم‌شدن هزینه نیست.",
        "whyBad": "N+1 یعنی یک query پایه و queryهای اضافه هنگام پیمایش روابط. EAGER الزاماً join نیست. fetch join، EntityGraph یا projection را متناسب با اندازه داده انتخاب کن؛ collection join همراه pagination خطرناک است.",
        "solution": "خیر؛ ممکن است secondary select بسازد"
      }
    ],
    "bestPractices": [
      "join چند collection می‌تواند حاصل‌ضرب ردیف‌ها بسازد؛ کم‌شدن query همیشه کم‌شدن هزینه نیست.",
      "برای ۱ و ۲۰ سفارش تعداد SQLها را مقایسه کن؛ list API را با projection یا دو query محدود اصلاح کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای ۱ و ۲۰ سفارش تعداد SQLها را مقایسه کن؛ list API را با projection یا دو query محدود اصلاح کن.",
      "acceptanceCriteria": [
        "برای ۱ و ۲۰ سفارش تعداد SQLها را مقایسه کن؛ list API را با projection یا دو query محدود اصلاح کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "join چند collection می‌تواند حاصل‌ضرب ردیف‌ها بسازد؛ کم‌شدن query همیشه کم‌شدن هزینه نیست."
      ],
      "solution": {
        "code": "@EntityGraph(attributePaths = \"items\")\n@Query(\"select o from Order o where o.id = :id\")\nOptional<Order> findWithItems(@Param(\"id\") UUID id);",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ ممکن است secondary select بسازد. join چند collection می‌تواند حاصل‌ضرب ردیف‌ها بسازد؛ کم‌شدن query همیشه کم‌شدن هزینه نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-056",
        "question": "آیا EAGER تضمین یک query دارد؟",
        "options": [
          "بله؛ JPA تمام روابط را همیشه join می‌کند",
          "بله؛ فقط برای جدول دارای index",
          "خیر؛ ممکن است secondary select بسازد"
        ],
        "correctIndex": 2,
        "explanation": "خیر؛ ممکن است secondary select بسازد. N+1 یعنی یک query پایه و queryهای اضافه هنگام پیمایش روابط. EAGER الزاماً join نیست. fetch join، EntityGraph یا projection را متناسب با اندازه داده انتخاب کن؛ collection join همراه pagination خطرناک است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا EAGER تضمین یک query دارد؟",
        "answer": "خیر؛ ممکن است secondary select بسازد. join چند collection می‌تواند حاصل‌ضرب ردیف‌ها بسازد؛ کم‌شدن query همیشه کم‌شدن هزینه نیست."
      }
    ],
    "summary": "N+1 یعنی یک query پایه و queryهای اضافه هنگام پیمایش روابط. EAGER الزاماً join نیست. fetch join، EntityGraph یا projection را متناسب با اندازه داده انتخاب کن؛ collection join همراه pagination خطرناک است.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-057",
    "slug": "indexes-and-query-planning",
    "week": 10,
    "day": 3,
    "title": "مهندسی ایندکس‌ها و استراتژی‌های آنالیز پلن اجرای کوئری در PostgreSQL",
    "titleEn": "Indexes and Query Planning",
    "description": "انواع ایندکس‌های B-Tree، شاخص‌های کامپوزیت و تاثیر مستقیم آنها در اسکن ترتیبی در مقابل اسکن ایندکس.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "PostgreSQL Indexes",
      "Query Planner",
      "Database Performance"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 9",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا ممکن است sequential scan انتخاب شود",
      "query سفارش‌های یک مشتری را قبل و بعد index با داده کافی توضیح و مقایسه کن."
    ],
    "whyItMatters": "ساخت index روی هر ستون به طور مستقل جای تحلیل workload نیست.",
    "introduction": "انواع ایندکس‌های B-Tree، شاخص‌های کامپوزیت و تاثیر مستقیم آنها در اسکن ترتیبی در مقابل اسکن ایندکس.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Index باید الگوی WHERE و ORDER BY را پشتیبانی کند؛ هزینه نوشتن و فضا نیز دارد. ترتیب ستون‌های index مرکب مهم است. optimizer با آمار و selectivity تصمیم می‌گیرد و مجبور نیست از هر index استفاده کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "query سفارش‌های یک مشتری را قبل و بعد index با داده کافی توضیح و مقایسه کن.",
      "solution": "ساخت index روی هر ستون به طور مستقل جای تحلیل workload نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "CREATE INDEX orders_customer_created_idx\nON orders(customer_id, created_at DESC, id DESC);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Indexes and Query Planning",
      "explanation": "مانند ORMهای Node، SQL واقعی را ببین. تفاوت JPA این است که persistence context و lazy proxy می‌توانند query را در زمان دسترسی بعدی اجرا کنند."
    },
    "commonMistakes": [
      {
        "mistake": "ساخت index روی هر ستون به طور مستقل جای تحلیل workload نیست.",
        "whyBad": "Index باید الگوی WHERE و ORDER BY را پشتیبانی کند؛ هزینه نوشتن و فضا نیز دارد. ترتیب ستون‌های index مرکب مهم است. optimizer با آمار و selectivity تصمیم می‌گیرد و مجبور نیست از هر index استفاده کند.",
        "solution": "وقتی سهم بزرگی از جدول خوانده می‌شود ارزان‌تر است"
      }
    ],
    "bestPractices": [
      "ساخت index روی هر ستون به طور مستقل جای تحلیل workload نیست.",
      "query سفارش‌های یک مشتری را قبل و بعد index با داده کافی توضیح و مقایسه کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "query سفارش‌های یک مشتری را قبل و بعد index با داده کافی توضیح و مقایسه کن.",
      "acceptanceCriteria": [
        "query سفارش‌های یک مشتری را قبل و بعد index با داده کافی توضیح و مقایسه کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "ساخت index روی هر ستون به طور مستقل جای تحلیل workload نیست."
      ],
      "solution": {
        "code": "CREATE INDEX orders_customer_created_idx\nON orders(customer_id, created_at DESC, id DESC);",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. وقتی سهم بزرگی از جدول خوانده می‌شود ارزان‌تر است. ساخت index روی هر ستون به طور مستقل جای تحلیل workload نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-057",
        "question": "چرا ممکن است sequential scan انتخاب شود؟",
        "options": [
          "وقتی سهم بزرگی از جدول خوانده می‌شود ارزان‌تر است",
          "وجود primary key تمام indexها را غیرفعال می‌کند",
          "PostgreSQL index مرکب ندارد"
        ],
        "correctIndex": 0,
        "explanation": "وقتی سهم بزرگی از جدول خوانده می‌شود ارزان‌تر است. Index باید الگوی WHERE و ORDER BY را پشتیبانی کند؛ هزینه نوشتن و فضا نیز دارد. ترتیب ستون‌های index مرکب مهم است. optimizer با آمار و selectivity تصمیم می‌گیرد و مجبور نیست از هر index استفاده کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا ممکن است sequential scan انتخاب شود؟",
        "answer": "وقتی سهم بزرگی از جدول خوانده می‌شود ارزان‌تر است. ساخت index روی هر ستون به طور مستقل جای تحلیل workload نیست."
      }
    ],
    "summary": "Index باید الگوی WHERE و ORDER BY را پشتیبانی کند؛ هزینه نوشتن و فضا نیز دارد. ترتیب ستون‌های index مرکب مهم است. optimizer با آمار و selectivity تصمیم می‌گیرد و مجبور نیست از هر index استفاده کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-058",
    "slug": "fixing-n-1-queries",
    "week": 10,
    "day": 4,
    "title": "راهکارهای قطعی حل باگ N+1 با JOIN FETCH و EntityGraph (پروژه محوری)",
    "titleEn": "Fixing N+1 Queries",
    "description": "به‌کارگیری @EntityGraph و کوئری‌های صریح در ماژول سفارشات جهت بارگذاری تمامی داده‌ها در یک کوئری سریع.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "N+1 Fix",
      "EntityGraph",
      "Join Fetch"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 9",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای pagination collection fetch چه رویکردی قابل کنترل‌تر است",
      "با ۱۰۰ سفارش و چند item، صفحه ۲۰تایی را بخوان؛ تعداد query با تعداد item خطی رشد نکند."
    ],
    "whyItMatters": "تست کوچک با یک سفارش، N+1 و pagination حافظه‌ای را پنهان می‌کند.",
    "introduction": "به‌کارگیری @EntityGraph و کوئری‌های صریح در ماژول سفارشات جهت بارگذاری تمامی داده‌ها در یک کوئری سریع.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "اصلاح N+1 را با شمارش query و اندازه داده ثابت اثبات کن. برای فهرست، اول صفحه شناسه‌ها را بخوان و سپس داده مورد نیاز همان صفحه را fetch کن. ترتیب نهایی را دوباره مطابق صفحه بساز."
      }
    ],
    "realWorldScenario": {
      "scenario": "با ۱۰۰ سفارش و چند item، صفحه ۲۰تایی را بخوان؛ تعداد query با تعداد item خطی رشد نکند.",
      "solution": "تست کوچک با یک سفارش، N+1 و pagination حافظه‌ای را پنهان می‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "SELECT id FROM orders ORDER BY created_at DESC, id DESC LIMIT 20;\n-- Fetch only those IDs and map into the page order.\nSELECT * FROM order_items WHERE order_id IN (:page_ids);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Fixing N+1 Queries",
      "explanation": "مانند ORMهای Node، SQL واقعی را ببین. تفاوت JPA این است که persistence context و lazy proxy می‌توانند query را در زمان دسترسی بعدی اجرا کنند."
    },
    "commonMistakes": [
      {
        "mistake": "تست کوچک با یک سفارش، N+1 و pagination حافظه‌ای را پنهان می‌کند.",
        "whyBad": "اصلاح N+1 را با شمارش query و اندازه داده ثابت اثبات کن. برای فهرست، اول صفحه شناسه‌ها را بخوان و سپس داده مورد نیاز همان صفحه را fetch کن. ترتیب نهایی را دوباره مطابق صفحه بساز.",
        "solution": "صفحه شناسه‌ها و سپس fetch محدود همان صفحه"
      }
    ],
    "bestPractices": [
      "تست کوچک با یک سفارش، N+1 و pagination حافظه‌ای را پنهان می‌کند.",
      "با ۱۰۰ سفارش و چند item، صفحه ۲۰تایی را بخوان؛ تعداد query با تعداد item خطی رشد نکند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با ۱۰۰ سفارش و چند item، صفحه ۲۰تایی را بخوان؛ تعداد query با تعداد item خطی رشد نکند.",
      "acceptanceCriteria": [
        "با ۱۰۰ سفارش و چند item، صفحه ۲۰تایی را بخوان؛ تعداد query با تعداد item خطی رشد نکند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "تست کوچک با یک سفارش، N+1 و pagination حافظه‌ای را پنهان می‌کند."
      ],
      "solution": {
        "code": "SELECT id FROM orders ORDER BY created_at DESC, id DESC LIMIT 20;\n-- Fetch only those IDs and map into the page order.\nSELECT * FROM order_items WHERE order_id IN (:page_ids);",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. صفحه شناسه‌ها و سپس fetch محدود همان صفحه. تست کوچک با یک سفارش، N+1 و pagination حافظه‌ای را پنهان می‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-058",
        "question": "برای pagination collection fetch چه رویکردی قابل کنترل‌تر است؟",
        "options": [
          "fetch تمام جدول و page در JVM",
          "صفحه شناسه‌ها و سپس fetch محدود همان صفحه",
          "افزایش heap بدون بررسی SQL"
        ],
        "correctIndex": 1,
        "explanation": "صفحه شناسه‌ها و سپس fetch محدود همان صفحه. اصلاح N+1 را با شمارش query و اندازه داده ثابت اثبات کن. برای فهرست، اول صفحه شناسه‌ها را بخوان و سپس داده مورد نیاز همان صفحه را fetch کن. ترتیب نهایی را دوباره مطابق صفحه بساز."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای pagination collection fetch چه رویکردی قابل کنترل‌تر است؟",
        "answer": "صفحه شناسه‌ها و سپس fetch محدود همان صفحه. تست کوچک با یک سفارش، N+1 و pagination حافظه‌ای را پنهان می‌کند."
      }
    ],
    "summary": "اصلاح N+1 را با شمارش query و اندازه داده ثابت اثبات کن. برای فهرست، اول صفحه شناسه‌ها را بخوان و سپس داده مورد نیاز همان صفحه را fetch کن. ترتیب نهایی را دوباره مطابق صفحه بساز.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-059",
    "slug": "jpql-and-native-queries",
    "week": 10,
    "day": 5,
    "title": "کوئری‌نویسی پیشرفته با JPQL و Native Queries",
    "titleEn": "JPQL and Native Queries",
    "description": "تفاوت کوئری‌های شی‌گرا با کوئری‌های وابسته به موتور دیتابیس، استفاده از فرافکنی‌ها (Projections) و DTO Mapping.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "JPQL",
      "Native Queries",
      "Projections",
      "Spring Data"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 9",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای value ورودی client چه رویکردی امن‌تر است",
      "ورودی شامل کوتیشن را به query بده؛ query باید همان مقدار را جستجو کند و ساختار SQL عوض نشود."
    ],
    "whyItMatters": "native query همیشه سریع‌تر نیست؛ portability و mapping نتیجه را هم بسنج.",
    "introduction": "تفاوت کوئری‌های شی‌گرا با کوئری‌های وابسته به موتور دیتابیس، استفاده از فرافکنی‌ها (Projections) و DTO Mapping.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "JPQL بر entity و field کار می‌کند؛ SQL native بر جدول و ستون. parameter binding از injection مقدار جلوگیری می‌کند؛ نام ستون sort یا identifier را نمی‌توان مثل مقدار bind کرد، باید allowlist شود."
      }
    ],
    "realWorldScenario": {
      "scenario": "ورودی شامل کوتیشن را به query بده؛ query باید همان مقدار را جستجو کند و ساختار SQL عوض نشود.",
      "solution": "native query همیشه سریع‌تر نیست؛ portability و mapping نتیجه را هم بسنج."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Query(\"select o from Order o where o.customerId = :customer\")\nList<Order> findOrders(@Param(\"customer\") String customer);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "JPQL and Native Queries",
      "explanation": "مانند ORMهای Node، SQL واقعی را ببین. تفاوت JPA این است که persistence context و lazy proxy می‌توانند query را در زمان دسترسی بعدی اجرا کنند."
    },
    "commonMistakes": [
      {
        "mistake": "native query همیشه سریع‌تر نیست؛ portability و mapping نتیجه را هم بسنج.",
        "whyBad": "JPQL بر entity و field کار می‌کند؛ SQL native بر جدول و ستون. parameter binding از injection مقدار جلوگیری می‌کند؛ نام ستون sort یا identifier را نمی‌توان مثل مقدار bind کرد، باید allowlist شود.",
        "solution": "bind parameter"
      }
    ],
    "bestPractices": [
      "native query همیشه سریع‌تر نیست؛ portability و mapping نتیجه را هم بسنج.",
      "ورودی شامل کوتیشن را به query بده؛ query باید همان مقدار را جستجو کند و ساختار SQL عوض نشود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "ورودی شامل کوتیشن را به query بده؛ query باید همان مقدار را جستجو کند و ساختار SQL عوض نشود.",
      "acceptanceCriteria": [
        "ورودی شامل کوتیشن را به query بده؛ query باید همان مقدار را جستجو کند و ساختار SQL عوض نشود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "native query همیشه سریع‌تر نیست؛ portability و mapping نتیجه را هم بسنج."
      ],
      "solution": {
        "code": "@Query(\"select o from Order o where o.customerId = :customer\")\nList<Order> findOrders(@Param(\"customer\") String customer);",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. bind parameter. native query همیشه سریع‌تر نیست؛ portability و mapping نتیجه را هم بسنج."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-059",
        "question": "برای value ورودی client چه رویکردی امن‌تر است؟",
        "options": [
          "چسباندن رشته با +",
          "حذف تمام فاصله‌ها از ورودی",
          "bind parameter"
        ],
        "correctIndex": 2,
        "explanation": "bind parameter. JPQL بر entity و field کار می‌کند؛ SQL native بر جدول و ستون. parameter binding از injection مقدار جلوگیری می‌کند؛ نام ستون sort یا identifier را نمی‌توان مثل مقدار bind کرد، باید allowlist شود."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای value ورودی client چه رویکردی امن‌تر است؟",
        "answer": "bind parameter. native query همیشه سریع‌تر نیست؛ portability و mapping نتیجه را هم بسنج."
      }
    ],
    "summary": "JPQL بر entity و field کار می‌کند؛ SQL native بر جدول و ستون. parameter binding از injection مقدار جلوگیری می‌کند؛ نام ستون sort یا identifier را نمی‌توان مثل مقدار bind کرد، باید allowlist شود.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-060",
    "slug": "explain-analyze",
    "week": 10,
    "day": 6,
    "title": "کالبدشکافی کوئری‌ها با EXPLAIN ANALYZE در پایگاه داده",
    "titleEn": "EXPLAIN ANALYZE",
    "description": "تفسیر خروجی EXPLAIN در محیط عملیاتی، زمان‌های تخمینی در برابر زمان واقعی و شناسایی کوئری‌های مسدودکننده.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "EXPLAIN ANALYZE",
      "Query Tuning",
      "Database Optimization"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 9",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "EXPLAIN ANALYZE برای UPDATE چه خطری دارد",
      "estimated rows، actual rows و bufferها را ثبت کن؛ قبل و بعد index روی dataset یکسان مقایسه کن."
    ],
    "whyItMatters": "عملیات تغییردهنده را بی‌فکر در production با ANALYZE اجرا نکن.",
    "introduction": "تفسیر خروجی EXPLAIN در محیط عملیاتی، زمان‌های تخمینی در برابر زمان واقعی و شناسایی کوئری‌های مسدودکننده.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "EXPLAIN طرح تخمینی را نشان می‌دهد؛ ANALYZE query را واقعاً اجرا می‌کند. اختلاف rows تخمینی و واقعی می‌تواند نشانه آمار نامناسب باشد. BUFFERS به تشخیص خواندن داده کمک می‌کند؛ فقط زمان نهایی را نبین."
      }
    ],
    "realWorldScenario": {
      "scenario": "estimated rows، actual rows و bufferها را ثبت کن؛ قبل و بعد index روی dataset یکسان مقایسه کن.",
      "solution": "عملیات تغییردهنده را بی‌فکر در production با ANALYZE اجرا نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "EXPLAIN (ANALYZE, BUFFERS)\nSELECT id FROM orders WHERE customer_id = 'c1'\nORDER BY created_at DESC LIMIT 20;",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "EXPLAIN ANALYZE",
      "explanation": "مانند ORMهای Node، SQL واقعی را ببین. تفاوت JPA این است که persistence context و lazy proxy می‌توانند query را در زمان دسترسی بعدی اجرا کنند."
    },
    "commonMistakes": [
      {
        "mistake": "عملیات تغییردهنده را بی‌فکر در production با ANALYZE اجرا نکن.",
        "whyBad": "EXPLAIN طرح تخمینی را نشان می‌دهد؛ ANALYZE query را واقعاً اجرا می‌کند. اختلاف rows تخمینی و واقعی می‌تواند نشانه آمار نامناسب باشد. BUFFERS به تشخیص خواندن داده کمک می‌کند؛ فقط زمان نهایی را نبین.",
        "solution": "UPDATE واقعاً اجرا می‌شود"
      }
    ],
    "bestPractices": [
      "عملیات تغییردهنده را بی‌فکر در production با ANALYZE اجرا نکن.",
      "estimated rows، actual rows و bufferها را ثبت کن؛ قبل و بعد index روی dataset یکسان مقایسه کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "estimated rows، actual rows و bufferها را ثبت کن؛ قبل و بعد index روی dataset یکسان مقایسه کن.",
      "acceptanceCriteria": [
        "estimated rows، actual rows و bufferها را ثبت کن؛ قبل و بعد index روی dataset یکسان مقایسه کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "عملیات تغییردهنده را بی‌فکر در production با ANALYZE اجرا نکن."
      ],
      "solution": {
        "code": "EXPLAIN (ANALYZE, BUFFERS)\nSELECT id FROM orders WHERE customer_id = 'c1'\nORDER BY created_at DESC LIMIT 20;",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. UPDATE واقعاً اجرا می‌شود. عملیات تغییردهنده را بی‌فکر در production با ANALYZE اجرا نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-060",
        "question": "EXPLAIN ANALYZE برای UPDATE چه خطری دارد؟",
        "options": [
          "UPDATE واقعاً اجرا می‌شود",
          "فقط query را parse می‌کند و هیچ اثری ندارد",
          "تمام tableها را خودکار vacuum می‌کند"
        ],
        "correctIndex": 0,
        "explanation": "UPDATE واقعاً اجرا می‌شود. EXPLAIN طرح تخمینی را نشان می‌دهد؛ ANALYZE query را واقعاً اجرا می‌کند. اختلاف rows تخمینی و واقعی می‌تواند نشانه آمار نامناسب باشد. BUFFERS به تشخیص خواندن داده کمک می‌کند؛ فقط زمان نهایی را نبین."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: EXPLAIN ANALYZE برای UPDATE چه خطری دارد؟",
        "answer": "UPDATE واقعاً اجرا می‌شود. عملیات تغییردهنده را بی‌فکر در production با ANALYZE اجرا نکن."
      }
    ],
    "summary": "EXPLAIN طرح تخمینی را نشان می‌دهد؛ ANALYZE query را واقعاً اجرا می‌کند. اختلاف rows تخمینی و واقعی می‌تواند نشانه آمار نامناسب باشد. BUFFERS به تشخیص خواندن داده کمک می‌کند؛ فقط زمان نهایی را نبین.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
