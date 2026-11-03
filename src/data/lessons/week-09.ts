import { Lesson } from "../types";

export const WEEK_09_LESSONS: Lesson[] = [
  {
    "id": "lesson-049",
    "slug": "jpa-entity-and-entitymanager",
    "week": 9,
    "day": 1,
    "title": "آشنایی عمیق با موجودیت‌های JPA و عملکرد EntityManager",
    "titleEn": "JPA Entity and EntityManager",
    "description": "نقش EntityManager در هماهنگی بین اشیای جاوا و جداول پایگاه داده و بررسی پشت‌صحنه عملیات persist و find.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "JPA",
      "EntityManager",
      "ORM",
      "Persistence"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 8",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا flush یعنی تراکنش commit شده است",
      "تفاوت persist، flush و commit را با rollback پس از flush مشاهده کن."
    ],
    "whyItMatters": "شناسه تولیدشده در حافظه اثبات ذخیره پایدار پس از commit نیست.",
    "introduction": "نقش EntityManager در هماهنگی بین اشیای جاوا و جداول پایگاه داده و بررسی پشت‌صحنه عملیات persist و find.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Entity با هویت پایدار و lifecycle در persistence context مدیریت می‌شود. persist شیء جدید را managed می‌کند؛ تغییر شیء managed با dirty checking ذخیره می‌شود. EntityManager برای اشتراک همزمان مستقیم میان threadها نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "تفاوت persist، flush و commit را با rollback پس از flush مشاهده کن.",
      "solution": "شناسه تولیدشده در حافظه اثبات ذخیره پایدار پس از commit نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "Order order = new Order(customerId, key);\nentityManager.persist(order);\nentityManager.flush();\n// flush sends SQL; commit still determines transaction success.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "JPA Entity and EntityManager",
      "explanation": "Entityهای JPA مانند objectهای معمول یا DTOهای TypeScript نیستند؛ managed/detached بودن و session روی رفتار query و write اثر دارد."
    },
    "commonMistakes": [
      {
        "mistake": "شناسه تولیدشده در حافظه اثبات ذخیره پایدار پس از commit نیست.",
        "whyBad": "Entity با هویت پایدار و lifecycle در persistence context مدیریت می‌شود. persist شیء جدید را managed می‌کند؛ تغییر شیء managed با dirty checking ذخیره می‌شود. EntityManager برای اشتراک همزمان مستقیم میان threadها نیست.",
        "solution": "خیر؛ SQL ارسال شده ولی rollback ممکن است"
      }
    ],
    "bestPractices": [
      "شناسه تولیدشده در حافظه اثبات ذخیره پایدار پس از commit نیست.",
      "تفاوت persist، flush و commit را با rollback پس از flush مشاهده کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "تفاوت persist، flush و commit را با rollback پس از flush مشاهده کن.",
      "acceptanceCriteria": [
        "تفاوت persist، flush و commit را با rollback پس از flush مشاهده کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "شناسه تولیدشده در حافظه اثبات ذخیره پایدار پس از commit نیست."
      ],
      "solution": {
        "code": "Order order = new Order(customerId, key);\nentityManager.persist(order);\nentityManager.flush();\n// flush sends SQL; commit still determines transaction success.",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ SQL ارسال شده ولی rollback ممکن است. شناسه تولیدشده در حافظه اثبات ذخیره پایدار پس از commit نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-049",
        "question": "آیا flush یعنی تراکنش commit شده است؟",
        "options": [
          "بله؛ تمام lockها آزاد شده‌اند",
          "خیر؛ SQL ارسال شده ولی rollback ممکن است",
          "بله؛ flush همان commit با نام دیگر است"
        ],
        "correctIndex": 1,
        "explanation": "خیر؛ SQL ارسال شده ولی rollback ممکن است. Entity با هویت پایدار و lifecycle در persistence context مدیریت می‌شود. persist شیء جدید را managed می‌کند؛ تغییر شیء managed با dirty checking ذخیره می‌شود. EntityManager برای اشتراک همزمان مستقیم میان threadها نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا flush یعنی تراکنش commit شده است؟",
        "answer": "خیر؛ SQL ارسال شده ولی rollback ممکن است. شناسه تولیدشده در حافظه اثبات ذخیره پایدار پس از commit نیست."
      }
    ],
    "summary": "Entity با هویت پایدار و lifecycle در persistence context مدیریت می‌شود. persist شیء جدید را managed می‌کند؛ تغییر شیء managed با dirty checking ذخیره می‌شود. EntityManager برای اشتراک همزمان مستقیم میان threadها نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/jpa/entity-persistence.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-050",
    "slug": "spring-data-jpa",
    "week": 9,
    "day": 2,
    "title": "ساده‌سازی دسترسی به داده‌ها با Spring Data JPA",
    "titleEn": "Spring Data JPA",
    "description": "نحوه کار JpaRepository، ایجاد خودکار کوئری‌ها بر اساس متدهای نام‌گذاری‌شده و مقایسه با TypeORM و Prisma.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Spring Data JPA",
      "Repositories",
      "Query Derivation",
      "Nest Comparison"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 8",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "پس از merge کدام نمونه را باید مبنا گرفت",
      "برای صفحه خالی و پر query را با دیتابیس واقعی تست کن؛ حد page size اعمال کن."
    ],
    "whyItMatters": "save را برای هر تغییر ساده entity managed بی‌دلیل فراخوانی نکن.",
    "introduction": "نحوه کار JpaRepository، ایجاد خودکار کوئری‌ها بر اساس متدهای نام‌گذاری‌شده و مقایسه با TypeORM و Prisma.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Spring Data پیاده‌سازی repository را تولید می‌کند؛ query derivation از نام متد قرارداد مشخص می‌سازد. save بسته به وضعیت entity ممکن است persist یا merge کند؛ merge نمونه managed برمی‌گرداند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای صفحه خالی و پر query را با دیتابیس واقعی تست کن؛ حد page size اعمال کن.",
      "solution": "save را برای هر تغییر ساده entity managed بی‌دلیل فراخوانی نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "interface OrderRepository extends JpaRepository<Order, UUID> {\n    Page<Order> findByCustomerId(String customerId, Pageable page);\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Spring Data JPA",
      "explanation": "Entityهای JPA مانند objectهای معمول یا DTOهای TypeScript نیستند؛ managed/detached بودن و session روی رفتار query و write اثر دارد."
    },
    "commonMistakes": [
      {
        "mistake": "save را برای هر تغییر ساده entity managed بی‌دلیل فراخوانی نکن.",
        "whyBad": "Spring Data پیاده‌سازی repository را تولید می‌کند؛ query derivation از نام متد قرارداد مشخص می‌سازد. save بسته به وضعیت entity ممکن است persist یا merge کند؛ merge نمونه managed برمی‌گرداند.",
        "solution": "نمونه managed بازگشتی"
      }
    ],
    "bestPractices": [
      "save را برای هر تغییر ساده entity managed بی‌دلیل فراخوانی نکن.",
      "برای صفحه خالی و پر query را با دیتابیس واقعی تست کن؛ حد page size اعمال کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای صفحه خالی و پر query را با دیتابیس واقعی تست کن؛ حد page size اعمال کن.",
      "acceptanceCriteria": [
        "برای صفحه خالی و پر query را با دیتابیس واقعی تست کن؛ حد page size اعمال کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "save را برای هر تغییر ساده entity managed بی‌دلیل فراخوانی نکن."
      ],
      "solution": {
        "code": "interface OrderRepository extends JpaRepository<Order, UUID> {\n    Page<Order> findByCustomerId(String customerId, Pageable page);\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. نمونه managed بازگشتی. save را برای هر تغییر ساده entity managed بی‌دلیل فراخوانی نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-050",
        "question": "پس از merge کدام نمونه را باید مبنا گرفت؟",
        "options": [
          "همیشه شیء detached ورودی",
          "هر دو بدون توجه به context یکسان‌اند",
          "نمونه managed بازگشتی"
        ],
        "correctIndex": 2,
        "explanation": "نمونه managed بازگشتی. Spring Data پیاده‌سازی repository را تولید می‌کند؛ query derivation از نام متد قرارداد مشخص می‌سازد. save بسته به وضعیت entity ممکن است persist یا merge کند؛ merge نمونه managed برمی‌گرداند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: پس از merge کدام نمونه را باید مبنا گرفت؟",
        "answer": "نمونه managed بازگشتی. save را برای هر تغییر ساده entity managed بی‌دلیل فراخوانی نکن."
      }
    ],
    "summary": "Spring Data پیاده‌سازی repository را تولید می‌کند؛ query derivation از نام متد قرارداد مشخص می‌سازد. save بسته به وضعیت entity ممکن است persist یا merge کند؛ merge نمونه managed برمی‌گرداند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/jpa/entity-persistence.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-051",
    "slug": "relational-data-modeling",
    "week": 9,
    "day": 3,
    "title": "مدل‌سازی اصولی داده‌های رابطه‌ای برای سرویس‌های مالی و فروشگاهی",
    "titleEn": "Relational Data Modeling",
    "description": "طراحی کلیدهای اصلی (UUID در برابر Sequence)، جداول نرمال‌شده و قیود یکپارچگی ارجاعی (Foreign Keys).",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Data Modeling",
      "UUID vs Sequence",
      "Database Design"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 8",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا CHECK علاوه بر validation اپ مفید است",
      "درج quantity صفر و order_id ناموجود را مستقیم در SQL امتحان کن؛ DB باید رد کند."
    ],
    "whyItMatters": "قواعد cross-row مانند کل موجودی با CHECK ساده یک ردیف حل نمی‌شوند.",
    "introduction": "طراحی کلیدهای اصلی (UUID در برابر Sequence)، جداول نرمال‌شده و قیود یکپارچگی ارجاعی (Foreign Keys).",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "مدل رابطه‌ای باید invariant را با constraint هم محافظت کند. مقدار پول numeric، تعداد integer مثبت و رابطه با foreign key مشخص شود. soft delete یا cascade باید با سیاست حذف دامنه هماهنگ باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "درج quantity صفر و order_id ناموجود را مستقیم در SQL امتحان کن؛ DB باید رد کند.",
      "solution": "قواعد cross-row مانند کل موجودی با CHECK ساده یک ردیف حل نمی‌شوند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "CREATE TABLE order_items (\n id uuid PRIMARY KEY, order_id uuid NOT NULL REFERENCES orders(id),\n quantity integer NOT NULL CHECK (quantity > 0),\n unit_price numeric(19,2) NOT NULL CHECK (unit_price >= 0)\n);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Relational Data Modeling",
      "explanation": "Entityهای JPA مانند objectهای معمول یا DTOهای TypeScript نیستند؛ managed/detached بودن و session روی رفتار query و write اثر دارد."
    },
    "commonMistakes": [
      {
        "mistake": "قواعد cross-row مانند کل موجودی با CHECK ساده یک ردیف حل نمی‌شوند.",
        "whyBad": "مدل رابطه‌ای باید invariant را با constraint هم محافظت کند. مقدار پول numeric، تعداد integer مثبت و رابطه با foreign key مشخص شود. soft delete یا cascade باید با سیاست حذف دامنه هماهنگ باشد.",
        "solution": "تمام نویسنده‌های دیتابیس را زیر یک invariant می‌آورد"
      }
    ],
    "bestPractices": [
      "قواعد cross-row مانند کل موجودی با CHECK ساده یک ردیف حل نمی‌شوند.",
      "درج quantity صفر و order_id ناموجود را مستقیم در SQL امتحان کن؛ DB باید رد کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "درج quantity صفر و order_id ناموجود را مستقیم در SQL امتحان کن؛ DB باید رد کند.",
      "acceptanceCriteria": [
        "درج quantity صفر و order_id ناموجود را مستقیم در SQL امتحان کن؛ DB باید رد کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "قواعد cross-row مانند کل موجودی با CHECK ساده یک ردیف حل نمی‌شوند."
      ],
      "solution": {
        "code": "CREATE TABLE order_items (\n id uuid PRIMARY KEY, order_id uuid NOT NULL REFERENCES orders(id),\n quantity integer NOT NULL CHECK (quantity > 0),\n unit_price numeric(19,2) NOT NULL CHECK (unit_price >= 0)\n);",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تمام نویسنده‌های دیتابیس را زیر یک invariant می‌آورد. قواعد cross-row مانند کل موجودی با CHECK ساده یک ردیف حل نمی‌شوند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-051",
        "question": "چرا CHECK علاوه بر validation اپ مفید است؟",
        "options": [
          "تمام نویسنده‌های دیتابیس را زیر یک invariant می‌آورد",
          "جایگزین کامل authorization است",
          "نیاز به تراکنش را حذف می‌کند"
        ],
        "correctIndex": 0,
        "explanation": "تمام نویسنده‌های دیتابیس را زیر یک invariant می‌آورد. مدل رابطه‌ای باید invariant را با constraint هم محافظت کند. مقدار پول numeric، تعداد integer مثبت و رابطه با foreign key مشخص شود. soft delete یا cascade باید با سیاست حذف دامنه هماهنگ باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا CHECK علاوه بر validation اپ مفید است؟",
        "answer": "تمام نویسنده‌های دیتابیس را زیر یک invariant می‌آورد. قواعد cross-row مانند کل موجودی با CHECK ساده یک ردیف حل نمی‌شوند."
      }
    ],
    "summary": "مدل رابطه‌ای باید invariant را با constraint هم محافظت کند. مقدار پول numeric، تعداد integer مثبت و رابطه با foreign key مشخص شود. soft delete یا cascade باید با سیاست حذف دامنه هماهنگ باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/jpa/entity-persistence.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-052",
    "slug": "implementing-order-and-orderitem-entities",
    "week": 9,
    "day": 4,
    "title": "پیاده‌سازی موجودیت‌های Order و OrderItem با JPA (پروژه محوری)",
    "titleEn": "Implementing Order and OrderItem Entities",
    "description": "نگاشت جداول سفارشات و اقلام با رعایت انکپسولیشن دامنه و متدهای کمکی جهت اتصال پایدار داده‌ها.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "JPA Entities",
      "Order",
      "OrderItem"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 8",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "mappedBy به چه چیزی اشاره می‌کند",
      "یک Order با دو item ذخیره و در context تازه بخوان؛ foreign key و حذف item را بررسی کن."
    ],
    "whyItMatters": "CascadeType.ALL را بی‌فکر روی رابطه به موجودیت مستقل مثل Product نگذار.",
    "introduction": "نگاشت جداول سفارشات و اقلام با رعایت انکپسولیشن دامنه و متدهای کمکی جهت اتصال پایدار داده‌ها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "مالک رابطه JPA سمتی است که foreign key را کنترل می‌کند؛ mappedBy سمت معکوس است. متد دامنه باید دو سمت ارتباط حافظه‌ای را هماهنگ نگه دارد. cascade چرخه persistence را کنترل می‌کند، نه fetch."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک Order با دو item ذخیره و در context تازه بخوان؛ foreign key و حذف item را بررسی کن.",
      "solution": "CascadeType.ALL را بی‌فکر روی رابطه به موجودیت مستقل مثل Product نگذار."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "void addItem(OrderItem item) {\n    items.add(item);\n    item.setOrder(this);\n}\n// @OneToMany(mappedBy=\"order\", cascade=CascadeType.ALL)",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Implementing Order and OrderItem Entities",
      "explanation": "Entityهای JPA مانند objectهای معمول یا DTOهای TypeScript نیستند؛ managed/detached بودن و session روی رفتار query و write اثر دارد."
    },
    "commonMistakes": [
      {
        "mistake": "CascadeType.ALL را بی‌فکر روی رابطه به موجودیت مستقل مثل Product نگذار.",
        "whyBad": "مالک رابطه JPA سمتی است که foreign key را کنترل می‌کند؛ mappedBy سمت معکوس است. متد دامنه باید دو سمت ارتباط حافظه‌ای را هماهنگ نگه دارد. cascade چرخه persistence را کنترل می‌کند، نه fetch.",
        "solution": "نام فیلد رابطه در سمت مالک"
      }
    ],
    "bestPractices": [
      "CascadeType.ALL را بی‌فکر روی رابطه به موجودیت مستقل مثل Product نگذار.",
      "یک Order با دو item ذخیره و در context تازه بخوان؛ foreign key و حذف item را بررسی کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک Order با دو item ذخیره و در context تازه بخوان؛ foreign key و حذف item را بررسی کن.",
      "acceptanceCriteria": [
        "یک Order با دو item ذخیره و در context تازه بخوان؛ foreign key و حذف item را بررسی کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "CascadeType.ALL را بی‌فکر روی رابطه به موجودیت مستقل مثل Product نگذار."
      ],
      "solution": {
        "code": "void addItem(OrderItem item) {\n    items.add(item);\n    item.setOrder(this);\n}\n// @OneToMany(mappedBy=\"order\", cascade=CascadeType.ALL)",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. نام فیلد رابطه در سمت مالک. CascadeType.ALL را بی‌فکر روی رابطه به موجودیت مستقل مثل Product نگذار."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-052",
        "question": "mappedBy به چه چیزی اشاره می‌کند؟",
        "options": [
          "نام جدول دیتابیس",
          "نام فیلد رابطه در سمت مالک",
          "نام schema پیش‌فرض PostgreSQL"
        ],
        "correctIndex": 1,
        "explanation": "نام فیلد رابطه در سمت مالک. مالک رابطه JPA سمتی است که foreign key را کنترل می‌کند؛ mappedBy سمت معکوس است. متد دامنه باید دو سمت ارتباط حافظه‌ای را هماهنگ نگه دارد. cascade چرخه persistence را کنترل می‌کند، نه fetch."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: mappedBy به چه چیزی اشاره می‌کند؟",
        "answer": "نام فیلد رابطه در سمت مالک. CascadeType.ALL را بی‌فکر روی رابطه به موجودیت مستقل مثل Product نگذار."
      }
    ],
    "summary": "مالک رابطه JPA سمتی است که foreign key را کنترل می‌کند؛ mappedBy سمت معکوس است. متد دامنه باید دو سمت ارتباط حافظه‌ای را هماهنگ نگه دارد. cascade چرخه persistence را کنترل می‌کند، نه fetch.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/jpa/entity-persistence.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-053",
    "slug": "entity-relationships-and-fetch-types",
    "week": 9,
    "day": 5,
    "title": "روابط میان موجودیت‌ها (@OneToMany و @ManyToOne) و Fetch Types",
    "titleEn": "Entity Relationships and Fetch Types",
    "description": "تفاوت بنیادی LAZY و EAGER، قوانین پیشگیری از بارگذاری‌های ناخواسته و تنظیمات بازگشت دوطرفه روابط.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Relationships",
      "OneToMany",
      "ManyToOne",
      "Lazy Loading"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 8",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "LAZY به تنهایی N+1 را حل می‌کند",
      "خروجی endpoint را به DTO تبدیل کن و تعداد queryها را بشمار؛ JSON نباید چرخه روابط بسازد."
    ],
    "whyItMatters": "فعال‌کردن OSIV برای پنهان‌کردن LazyInitializationException می‌تواند query را تا لایه نمایش نشت دهد.",
    "introduction": "تفاوت بنیادی LAZY و EAGER، قوانین پیشگیری از بارگذاری‌های ناخواسته و تنظیمات بازگشت دوطرفه روابط.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "LAZY هدف را تا زمان نیاز بارگذاری می‌کند، اما تضمین حذف query اضافی نیست. در ManyToOne پیش‌فرض JPA برابر EAGER است؛ fetch plan هر use case را صریح طراحی کن. بیرون تراکنش DTO بساز، نه رابطه lazy فعال کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "خروجی endpoint را به DTO تبدیل کن و تعداد queryها را بشمار؛ JSON نباید چرخه روابط بسازد.",
      "solution": "فعال‌کردن OSIV برای پنهان‌کردن LazyInitializationException می‌تواند query را تا لایه نمایش نشت دهد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@ManyToOne(fetch = FetchType.LAZY, optional = false)\n@JoinColumn(name = \"order_id\", nullable = false)\nprivate Order order;",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Entity Relationships and Fetch Types",
      "explanation": "Entityهای JPA مانند objectهای معمول یا DTOهای TypeScript نیستند؛ managed/detached بودن و session روی رفتار query و write اثر دارد."
    },
    "commonMistakes": [
      {
        "mistake": "فعال‌کردن OSIV برای پنهان‌کردن LazyInitializationException می‌تواند query را تا لایه نمایش نشت دهد.",
        "whyBad": "LAZY هدف را تا زمان نیاز بارگذاری می‌کند، اما تضمین حذف query اضافی نیست. در ManyToOne پیش‌فرض JPA برابر EAGER است؛ fetch plan هر use case را صریح طراحی کن. بیرون تراکنش DTO بساز، نه رابطه lazy فعال کن.",
        "solution": "خیر؛ دسترسی در حلقه همچنان query اضافی می‌سازد"
      }
    ],
    "bestPractices": [
      "فعال‌کردن OSIV برای پنهان‌کردن LazyInitializationException می‌تواند query را تا لایه نمایش نشت دهد.",
      "خروجی endpoint را به DTO تبدیل کن و تعداد queryها را بشمار؛ JSON نباید چرخه روابط بسازد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "خروجی endpoint را به DTO تبدیل کن و تعداد queryها را بشمار؛ JSON نباید چرخه روابط بسازد.",
      "acceptanceCriteria": [
        "خروجی endpoint را به DTO تبدیل کن و تعداد queryها را بشمار؛ JSON نباید چرخه روابط بسازد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "فعال‌کردن OSIV برای پنهان‌کردن LazyInitializationException می‌تواند query را تا لایه نمایش نشت دهد."
      ],
      "solution": {
        "code": "@ManyToOne(fetch = FetchType.LAZY, optional = false)\n@JoinColumn(name = \"order_id\", nullable = false)\nprivate Order order;",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ دسترسی در حلقه همچنان query اضافی می‌سازد. فعال‌کردن OSIV برای پنهان‌کردن LazyInitializationException می‌تواند query را تا لایه نمایش نشت دهد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-053",
        "question": "LAZY به تنهایی N+1 را حل می‌کند؟",
        "options": [
          "بله؛ همه رابطه‌ها در یک query می‌آیند",
          "بله؛ entity دیگر نیاز به transaction ندارد",
          "خیر؛ دسترسی در حلقه همچنان query اضافی می‌سازد"
        ],
        "correctIndex": 2,
        "explanation": "خیر؛ دسترسی در حلقه همچنان query اضافی می‌سازد. LAZY هدف را تا زمان نیاز بارگذاری می‌کند، اما تضمین حذف query اضافی نیست. در ManyToOne پیش‌فرض JPA برابر EAGER است؛ fetch plan هر use case را صریح طراحی کن. بیرون تراکنش DTO بساز، نه رابطه lazy فعال کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: LAZY به تنهایی N+1 را حل می‌کند؟",
        "answer": "خیر؛ دسترسی در حلقه همچنان query اضافی می‌سازد. فعال‌کردن OSIV برای پنهان‌کردن LazyInitializationException می‌تواند query را تا لایه نمایش نشت دهد."
      }
    ],
    "summary": "LAZY هدف را تا زمان نیاز بارگذاری می‌کند، اما تضمین حذف query اضافی نیست. در ManyToOne پیش‌فرض JPA برابر EAGER است؛ fetch plan هر use case را صریح طراحی کن. بیرون تراکنش DTO بساز، نه رابطه lazy فعال کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/jpa/entity-persistence.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-054",
    "slug": "postgresql-with-docker",
    "week": 9,
    "day": 6,
    "title": "اجرا و پیکربندی پروداکشن PostgreSQL با Docker Compose",
    "titleEn": "PostgreSQL with Docker",
    "description": "راه‌اندازی سرور پایگاه داده PostgreSQL، پیکربندی والیوم‌های دائمی و ارتباط پایدار با اپلیکیشن اسپرینگ.",
    "category": "JPA & Hibernate",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "PostgreSQL",
      "Docker Compose",
      "Database Setup"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 8",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "hostname دیتابیس از container اپ در Compose چیست",
      "از container اپ به db:5432 وصل شو؛ پس از restart داده بماند و رمز نمونه وارد production نشود."
    ],
    "whyItMatters": "حذف volume داده را حذف می‌کند؛ قبل از عملیات پاک‌سازی backup را جدی بگیر.",
    "introduction": "راه‌اندازی سرور پایگاه داده PostgreSQL، پیکربندی والیوم‌های دائمی و ارتباط پایدار با اپلیکیشن اسپرینگ.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "برای توسعه DB را با volume پایدار و healthcheck اجرا کن. داخل شبکه Compose نام سرویس hostname است؛ localhost در container به خودش اشاره دارد. version دیتابیس را مشخص و تغییر major را با migration مدیریت کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "از container اپ به db:5432 وصل شو؛ پس از restart داده بماند و رمز نمونه وارد production نشود.",
      "solution": "حذف volume داده را حذف می‌کند؛ قبل از عملیات پاک‌سازی backup را جدی بگیر."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "services:\n  db:\n    image: postgres:17\n    environment:\n      POSTGRES_DB: orders\n      POSTGRES_PASSWORD: local-only\n    volumes:\n      - db_data:/var/lib/postgresql/data\nvolumes:\n  db_data:",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "PostgreSQL with Docker",
      "explanation": "Entityهای JPA مانند objectهای معمول یا DTOهای TypeScript نیستند؛ managed/detached بودن و session روی رفتار query و write اثر دارد."
    },
    "commonMistakes": [
      {
        "mistake": "حذف volume داده را حذف می‌کند؛ قبل از عملیات پاک‌سازی backup را جدی بگیر.",
        "whyBad": "برای توسعه DB را با volume پایدار و healthcheck اجرا کن. داخل شبکه Compose نام سرویس hostname است؛ localhost در container به خودش اشاره دارد. version دیتابیس را مشخص و تغییر major را با migration مدیریت کن.",
        "solution": "نام سرویس مانند db"
      }
    ],
    "bestPractices": [
      "حذف volume داده را حذف می‌کند؛ قبل از عملیات پاک‌سازی backup را جدی بگیر.",
      "از container اپ به db:5432 وصل شو؛ پس از restart داده بماند و رمز نمونه وارد production نشود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "از container اپ به db:5432 وصل شو؛ پس از restart داده بماند و رمز نمونه وارد production نشود.",
      "acceptanceCriteria": [
        "از container اپ به db:5432 وصل شو؛ پس از restart داده بماند و رمز نمونه وارد production نشود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "حذف volume داده را حذف می‌کند؛ قبل از عملیات پاک‌سازی backup را جدی بگیر."
      ],
      "solution": {
        "code": "services:\n  db:\n    image: postgres:17\n    environment:\n      POSTGRES_DB: orders\n      POSTGRES_PASSWORD: local-only\n    volumes:\n      - db_data:/var/lib/postgresql/data\nvolumes:\n  db_data:",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. نام سرویس مانند db. حذف volume داده را حذف می‌کند؛ قبل از عملیات پاک‌سازی backup را جدی بگیر."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-054",
        "question": "hostname دیتابیس از container اپ در Compose چیست؟",
        "options": [
          "نام سرویس مانند db",
          "همیشه localhost",
          "نام پوشه سورس Java"
        ],
        "correctIndex": 0,
        "explanation": "نام سرویس مانند db. برای توسعه DB را با volume پایدار و healthcheck اجرا کن. داخل شبکه Compose نام سرویس hostname است؛ localhost در container به خودش اشاره دارد. version دیتابیس را مشخص و تغییر major را با migration مدیریت کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: hostname دیتابیس از container اپ در Compose چیست؟",
        "answer": "نام سرویس مانند db. حذف volume داده را حذف می‌کند؛ قبل از عملیات پاک‌سازی backup را جدی بگیر."
      }
    ],
    "summary": "برای توسعه DB را با volume پایدار و healthcheck اجرا کن. داخل شبکه Compose نام سرویس hostname است؛ localhost در container به خودش اشاره دارد. version دیتابیس را مشخص و تغییر major را با migration مدیریت کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/jpa/entity-persistence.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
