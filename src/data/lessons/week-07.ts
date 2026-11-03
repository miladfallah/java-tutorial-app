import { Lesson } from "../types";

export const WEEK_07_LESSONS: Lesson[] = [
  {
    "id": "lesson-037",
    "slug": "service-layer-and-business-logic",
    "week": 7,
    "day": 1,
    "title": "لایه سرویس و کپسوله‌سازی منطق بیزینس",
    "titleEn": "Service Layer and Business Logic",
    "description": "جداسازی شفاف کنترلر از منطق دامنه با انوتیشن @Service، نگاشت مدل‌ها به DTO و تست‌پذیری حداکثری.",
    "category": "Architecture",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Service Layer",
      "Business Logic",
      "Clean Architecture"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 6",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "مرز مناسب تراکنش ثبت سفارش معمولاً چیست",
      "اگر رزرو دوم شکست خورد، ثابت کن ذخیره سفارش و رزرو اول rollback می‌شوند."
    ],
    "whyItMatters": "private یا self-invoked بودن متد می‌تواند اعمال proxy تراکنشی را تغییر دهد.",
    "introduction": "جداسازی شفاف کنترلر از منطق دامنه با انوتیشن @Service، نگاشت مدل‌ها به DTO و تست‌پذیری حداکثری.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Service مرز اجرای use case و تراکنش است. اعتبار دامنه را در مدل و هماهنگی repositoryها را در service نگه دار. تماس شبکه کند را داخل تراکنش DB بی‌دلیل طولانی نکن."
      }
    ],
    "realWorldScenario": {
      "scenario": "اگر رزرو دوم شکست خورد، ثابت کن ذخیره سفارش و رزرو اول rollback می‌شوند.",
      "solution": "private یا self-invoked بودن متد می‌تواند اعمال proxy تراکنشی را تغییر دهد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Transactional\npublic OrderResponse place(CreateOrder request) {\n    var order = Order.create(request.customerId());\n    reserveInventory(request.items());\n    return OrderResponse.fromEntity(repository.save(order));\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Service Layer and Business Logic",
      "explanation": "مانند providerها و repositoryهای Nest، dependency direction مهم‌تر از نام پوشه است. service جاوا می‌تواند همزمان توسط چند درخواست استفاده شود."
    },
    "commonMistakes": [
      {
        "mistake": "private یا self-invoked بودن متد می‌تواند اعمال proxy تراکنشی را تغییر دهد.",
        "whyBad": "Service مرز اجرای use case و تراکنش است. اعتبار دامنه را در مدل و هماهنگی repositoryها را در service نگه دار. تماس شبکه کند را داخل تراکنش DB بی‌دلیل طولانی نکن.",
        "solution": "کل use case شامل تغییرات مرتبط دیتابیس"
      }
    ],
    "bestPractices": [
      "private یا self-invoked بودن متد می‌تواند اعمال proxy تراکنشی را تغییر دهد.",
      "اگر رزرو دوم شکست خورد، ثابت کن ذخیره سفارش و رزرو اول rollback می‌شوند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "اگر رزرو دوم شکست خورد، ثابت کن ذخیره سفارش و رزرو اول rollback می‌شوند.",
      "acceptanceCriteria": [
        "اگر رزرو دوم شکست خورد، ثابت کن ذخیره سفارش و رزرو اول rollback می‌شوند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "private یا self-invoked بودن متد می‌تواند اعمال proxy تراکنشی را تغییر دهد."
      ],
      "solution": {
        "code": "@Transactional\npublic OrderResponse place(CreateOrder request) {\n    var order = Order.create(request.customerId());\n    reserveInventory(request.items());\n    return OrderResponse.fromEntity(repository.save(order));\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. کل use case شامل تغییرات مرتبط دیتابیس. private یا self-invoked بودن متد می‌تواند اعمال proxy تراکنشی را تغییر دهد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-037",
        "question": "مرز مناسب تراکنش ثبت سفارش معمولاً چیست؟",
        "options": [
          "هر setter در entity به صورت مستقل",
          "کل use case شامل تغییرات مرتبط دیتابیس",
          "کل عمر HTTP connection و همه تماس‌های بیرونی"
        ],
        "correctIndex": 1,
        "explanation": "کل use case شامل تغییرات مرتبط دیتابیس. Service مرز اجرای use case و تراکنش است. اعتبار دامنه را در مدل و هماهنگی repositoryها را در service نگه دار. تماس شبکه کند را داخل تراکنش DB بی‌دلیل طولانی نکن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: مرز مناسب تراکنش ثبت سفارش معمولاً چیست؟",
        "answer": "کل use case شامل تغییرات مرتبط دیتابیس. private یا self-invoked بودن متد می‌تواند اعمال proxy تراکنشی را تغییر دهد."
      }
    ],
    "summary": "Service مرز اجرای use case و تراکنش است. اعتبار دامنه را در مدل و هماهنگی repositoryها را در service نگه دار. تماس شبکه کند را داخل تراکنش DB بی‌دلیل طولانی نکن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/repositories.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-038",
    "slug": "repository-pattern",
    "week": 7,
    "day": 2,
    "title": "الگوی مخزن (Repository Pattern) و مرزهای ذخیره‌سازی",
    "titleEn": "Repository Pattern",
    "description": "تفکیک دغدغه‌های ذخیره‌سازی از لایه سرویس با استفاده از اینترفیس‌های Repository و انتزاع دیتابیس.",
    "category": "Architecture",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Repository Pattern",
      "Data Access",
      "Abstraction"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 6",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای سفارش‌های یک مشتری چه رویکردی مناسب‌تر است",
      "برای customer بدون سفارش و چند سفارش query بنویس؛ ترتیب نتیجه در تست مشخص باشد."
    ],
    "whyItMatters": "JpaRepository یک abstraction زیرساختی است؛ در معماری hexagonal آن را به همه لایه‌ها نشت نده.",
    "introduction": "تفکیک دغدغه‌های ذخیره‌سازی از لایه سرویس با استفاده از اینترفیس‌های Repository و انتزاع دیتابیس.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Repository دسترسی داده را پشت قرارداد مشخص پنهان می‌کند. query باید نیاز use case را بیان کند؛ برگرداندن همه جدول برای filter در حافظه مقیاس نمی‌گیرد. قرارداد empty، not-found و خطای DB را واضح نگه دار."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای customer بدون سفارش و چند سفارش query بنویس؛ ترتیب نتیجه در تست مشخص باشد.",
      "solution": "JpaRepository یک abstraction زیرساختی است؛ در معماری hexagonal آن را به همه لایه‌ها نشت نده."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "interface OrderRepository extends JpaRepository<Order, UUID> {\n    List<Order> findByCustomerIdOrderByCreatedAtDesc(String customerId);\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Repository Pattern",
      "explanation": "مانند providerها و repositoryهای Nest، dependency direction مهم‌تر از نام پوشه است. service جاوا می‌تواند همزمان توسط چند درخواست استفاده شود."
    },
    "commonMistakes": [
      {
        "mistake": "JpaRepository یک abstraction زیرساختی است؛ در معماری hexagonal آن را به همه لایه‌ها نشت نده.",
        "whyBad": "Repository دسترسی داده را پشت قرارداد مشخص پنهان می‌کند. query باید نیاز use case را بیان کند؛ برگرداندن همه جدول برای filter در حافظه مقیاس نمی‌گیرد. قرارداد empty، not-found و خطای DB را واضح نگه دار.",
        "solution": "filter و sort در query دیتابیس"
      }
    ],
    "bestPractices": [
      "JpaRepository یک abstraction زیرساختی است؛ در معماری hexagonal آن را به همه لایه‌ها نشت نده.",
      "برای customer بدون سفارش و چند سفارش query بنویس؛ ترتیب نتیجه در تست مشخص باشد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای customer بدون سفارش و چند سفارش query بنویس؛ ترتیب نتیجه در تست مشخص باشد.",
      "acceptanceCriteria": [
        "برای customer بدون سفارش و چند سفارش query بنویس؛ ترتیب نتیجه در تست مشخص باشد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "JpaRepository یک abstraction زیرساختی است؛ در معماری hexagonal آن را به همه لایه‌ها نشت نده."
      ],
      "solution": {
        "code": "interface OrderRepository extends JpaRepository<Order, UUID> {\n    List<Order> findByCustomerIdOrderByCreatedAtDesc(String customerId);\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. filter و sort در query دیتابیس. JpaRepository یک abstraction زیرساختی است؛ در معماری hexagonal آن را به همه لایه‌ها نشت نده."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-038",
        "question": "برای سفارش‌های یک مشتری چه رویکردی مناسب‌تر است؟",
        "options": [
          "findAll و فیلتر تمام جدول در JVM",
          "نگه‌داشتن EntityManager مشترک static میان threadها",
          "filter و sort در query دیتابیس"
        ],
        "correctIndex": 2,
        "explanation": "filter و sort در query دیتابیس. Repository دسترسی داده را پشت قرارداد مشخص پنهان می‌کند. query باید نیاز use case را بیان کند؛ برگرداندن همه جدول برای filter در حافظه مقیاس نمی‌گیرد. قرارداد empty، not-found و خطای DB را واضح نگه دار."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای سفارش‌های یک مشتری چه رویکردی مناسب‌تر است؟",
        "answer": "filter و sort در query دیتابیس. JpaRepository یک abstraction زیرساختی است؛ در معماری hexagonal آن را به همه لایه‌ها نشت نده."
      }
    ],
    "summary": "Repository دسترسی داده را پشت قرارداد مشخص پنهان می‌کند. query باید نیاز use case را بیان کند؛ برگرداندن همه جدول برای filter در حافظه مقیاس نمی‌گیرد. قرارداد empty، not-found و خطای DB را واضح نگه دار.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/repositories.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-039",
    "slug": "layered-vs-hexagonal-architecture",
    "week": 7,
    "day": 3,
    "title": "معماری لایه‌ای سنتی در مقایسه با معماری هگزاگونال (Ports & Adapters)",
    "titleEn": "Layered vs Hexagonal Architecture",
    "description": "بررسی نقاط ضعف لایه‌بندی کلاسیک، چگونگی نگهداری هسته بیزینس بدون وابستگی به فریم‌ورک و پیاده‌سازی عملی پورت‌ها.",
    "category": "Architecture",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Hexagonal Architecture",
      "Clean Architecture",
      "Ports and Adapters"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 6",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "معیار اصلی hexagonal چیست",
      "وابستگی‌های سه package پروژه را رسم کن؛ یک import زیرساخت از domain را حذف کن."
    ],
    "whyItMatters": "جابه‌جایی فایل‌ها بدون تغییر coupling، اصلاح معماری محسوب نمی‌شود.",
    "introduction": "بررسی نقاط ضعف لایه‌بندی کلاسیک، چگونگی نگهداری هسته بیزینس بدون وابستگی به فریم‌ورک و پیاده‌سازی عملی پورت‌ها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Layered ساده و برای بسیاری سرویس‌ها کافی است؛ hexagonal مرز وابستگی دامنه به بیرون را پررنگ می‌کند. هزینه port و adapter وقتی توجیه دارد که تغییرپذیری یا تست مستقل ارزش واقعی بسازد."
      }
    ],
    "realWorldScenario": {
      "scenario": "وابستگی‌های سه package پروژه را رسم کن؛ یک import زیرساخت از domain را حذف کن.",
      "solution": "جابه‌جایی فایل‌ها بدون تغییر coupling، اصلاح معماری محسوب نمی‌شود."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "web adapter -> application use case -> domain\npersistence adapter -> domain port\ndomain -X-> Spring MVC / JPA",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Layered vs Hexagonal Architecture",
      "explanation": "مانند providerها و repositoryهای Nest، dependency direction مهم‌تر از نام پوشه است. service جاوا می‌تواند همزمان توسط چند درخواست استفاده شود."
    },
    "commonMistakes": [
      {
        "mistake": "جابه‌جایی فایل‌ها بدون تغییر coupling، اصلاح معماری محسوب نمی‌شود.",
        "whyBad": "Layered ساده و برای بسیاری سرویس‌ها کافی است؛ hexagonal مرز وابستگی دامنه به بیرون را پررنگ می‌کند. هزینه port و adapter وقتی توجیه دارد که تغییرپذیری یا تست مستقل ارزش واقعی بسازد.",
        "solution": "جهت dependency و مرزهای قابل آزمون"
      }
    ],
    "bestPractices": [
      "جابه‌جایی فایل‌ها بدون تغییر coupling، اصلاح معماری محسوب نمی‌شود.",
      "وابستگی‌های سه package پروژه را رسم کن؛ یک import زیرساخت از domain را حذف کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "وابستگی‌های سه package پروژه را رسم کن؛ یک import زیرساخت از domain را حذف کن.",
      "acceptanceCriteria": [
        "وابستگی‌های سه package پروژه را رسم کن؛ یک import زیرساخت از domain را حذف کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "جابه‌جایی فایل‌ها بدون تغییر coupling، اصلاح معماری محسوب نمی‌شود."
      ],
      "solution": {
        "code": "web adapter -> application use case -> domain\npersistence adapter -> domain port\ndomain -X-> Spring MVC / JPA",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. جهت dependency و مرزهای قابل آزمون. جابه‌جایی فایل‌ها بدون تغییر coupling، اصلاح معماری محسوب نمی‌شود."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-039",
        "question": "معیار اصلی hexagonal چیست؟",
        "options": [
          "جهت dependency و مرزهای قابل آزمون",
          "داشتن دقیقاً شش package",
          "ایجاد interface برای تمام کلاس‌ها"
        ],
        "correctIndex": 0,
        "explanation": "جهت dependency و مرزهای قابل آزمون. Layered ساده و برای بسیاری سرویس‌ها کافی است؛ hexagonal مرز وابستگی دامنه به بیرون را پررنگ می‌کند. هزینه port و adapter وقتی توجیه دارد که تغییرپذیری یا تست مستقل ارزش واقعی بسازد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: معیار اصلی hexagonal چیست؟",
        "answer": "جهت dependency و مرزهای قابل آزمون. جابه‌جایی فایل‌ها بدون تغییر coupling، اصلاح معماری محسوب نمی‌شود."
      }
    ],
    "summary": "Layered ساده و برای بسیاری سرویس‌ها کافی است؛ hexagonal مرز وابستگی دامنه به بیرون را پررنگ می‌کند. هزینه port و adapter وقتی توجیه دارد که تغییرپذیری یا تست مستقل ارزش واقعی بسازد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/repositories.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-040",
    "slug": "refactoring-the-application-architecture",
    "week": 7,
    "day": 4,
    "title": "بازطراحی معماری پروژه سفارشات بر اساس مرزهای تمیز (پروژه محوری)",
    "titleEn": "Refactoring the Application Architecture",
    "description": "سازمان‌دهی کدهای ماژول سفارش و انبار بر اساس دامنه و پورت‌های شفاف بدون تداخل وظایف.",
    "category": "Architecture",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Refactoring",
      "Clean Architecture",
      "Order System"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 6",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "اولین گام کم‌ریسک refactor چیست",
      "یک endpoint را به use case متصل کن؛ integration test قبل و بعد باید قرارداد یکسانی ببیند."
    ],
    "whyItMatters": "تغییر interface عمومی را با refactor داخلی اشتباه نگیر؛ compatibility را ارزیابی کن.",
    "introduction": "سازمان‌دهی کدهای ماژول سفارش و انبار بر اساس دامنه و پورت‌های شفاف بدون تداخل وظایف.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Refactor معماری را با یک مسیر عمودی کوچک شروع کن. قرارداد use case را استخراج و adapter فعلی را نگه دار تا API نشکند. تست characterization رفتار قبلی را ثبت می‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک endpoint را به use case متصل کن؛ integration test قبل و بعد باید قرارداد یکسانی ببیند.",
      "solution": "تغییر interface عمومی را با refactor داخلی اشتباه نگیر؛ compatibility را ارزیابی کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "record PlaceOrderCommand(String customerId, List<Line> lines) {}\ninterface PlaceOrderUseCase { UUID place(PlaceOrderCommand command); }",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Refactoring the Application Architecture",
      "explanation": "مانند providerها و repositoryهای Nest، dependency direction مهم‌تر از نام پوشه است. service جاوا می‌تواند همزمان توسط چند درخواست استفاده شود."
    },
    "commonMistakes": [
      {
        "mistake": "تغییر interface عمومی را با refactor داخلی اشتباه نگیر؛ compatibility را ارزیابی کن.",
        "whyBad": "Refactor معماری را با یک مسیر عمودی کوچک شروع کن. قرارداد use case را استخراج و adapter فعلی را نگه دار تا API نشکند. تست characterization رفتار قبلی را ثبت می‌کند.",
        "solution": "ثبت رفتار و تغییر یک مسیر کوچک"
      }
    ],
    "bestPractices": [
      "تغییر interface عمومی را با refactor داخلی اشتباه نگیر؛ compatibility را ارزیابی کن.",
      "یک endpoint را به use case متصل کن؛ integration test قبل و بعد باید قرارداد یکسانی ببیند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک endpoint را به use case متصل کن؛ integration test قبل و بعد باید قرارداد یکسانی ببیند.",
      "acceptanceCriteria": [
        "یک endpoint را به use case متصل کن؛ integration test قبل و بعد باید قرارداد یکسانی ببیند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "تغییر interface عمومی را با refactor داخلی اشتباه نگیر؛ compatibility را ارزیابی کن."
      ],
      "solution": {
        "code": "record PlaceOrderCommand(String customerId, List<Line> lines) {}\ninterface PlaceOrderUseCase { UUID place(PlaceOrderCommand command); }",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ثبت رفتار و تغییر یک مسیر کوچک. تغییر interface عمومی را با refactor داخلی اشتباه نگیر؛ compatibility را ارزیابی کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-040",
        "question": "اولین گام کم‌ریسک refactor چیست؟",
        "options": [
          "بازنویسی کل repo بدون تست",
          "ثبت رفتار و تغییر یک مسیر کوچک",
          "تغییر همزمان همه endpointها و schema"
        ],
        "correctIndex": 1,
        "explanation": "ثبت رفتار و تغییر یک مسیر کوچک. Refactor معماری را با یک مسیر عمودی کوچک شروع کن. قرارداد use case را استخراج و adapter فعلی را نگه دار تا API نشکند. تست characterization رفتار قبلی را ثبت می‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: اولین گام کم‌ریسک refactor چیست؟",
        "answer": "ثبت رفتار و تغییر یک مسیر کوچک. تغییر interface عمومی را با refactor داخلی اشتباه نگیر؛ compatibility را ارزیابی کن."
      }
    ],
    "summary": "Refactor معماری را با یک مسیر عمودی کوچک شروع کن. قرارداد use case را استخراج و adapter فعلی را نگه دار تا API نشکند. تست characterization رفتار قبلی را ثبت می‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/repositories.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-041",
    "slug": "pagination-and-filtering",
    "week": 7,
    "day": 5,
    "title": "صفحه‌بندی اصولی و فیلترسازی درخواست‌ها در REST API",
    "titleEn": "Pagination and Filtering",
    "description": "پیاده‌سازی Pageable و Page در اسپرینگ، جلوگیری از سرریز حافظه با بارگذاری داده‌های حجیم به شکل کنترل‌شده.",
    "category": "Architecture",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Pagination",
      "Filtering",
      "Pageable",
      "Performance"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 6",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا id در sort اضافه می‌شود",
      "دو سفارش با زمان یکسان بساز؛ پیمایش صفحه‌ها نباید مورد تکراری یا جاافتاده تولید کند."
    ],
    "whyItMatters": "page size و فیلدهای sort قابل قبول را محدود کن؛ ورودی کاربر را SQL خام نکن.",
    "introduction": "پیاده‌سازی Pageable و Page در اسپرینگ، جلوگیری از سرریز حافظه با بارگذاری داده‌های حجیم به شکل کنترل‌شده.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Pagination به ترتیب پایدار نیاز دارد؛ sort روی createdAt تنها در زمان‌های برابر مبهم است، id را tie-breaker کن. offset برای صفحه‌های عمیق هزینه دارد؛ keyset pagination برای پیمایش ترتیبی گزینه دیگر است."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو سفارش با زمان یکسان بساز؛ پیمایش صفحه‌ها نباید مورد تکراری یا جاافتاده تولید کند.",
      "solution": "page size و فیلدهای sort قابل قبول را محدود کن؛ ورودی کاربر را SQL خام نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "SELECT id, created_at FROM orders\nWHERE (created_at, id) < (:last_time, :last_id)\nORDER BY created_at DESC, id DESC\nLIMIT 20;",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Pagination and Filtering",
      "explanation": "مانند providerها و repositoryهای Nest، dependency direction مهم‌تر از نام پوشه است. service جاوا می‌تواند همزمان توسط چند درخواست استفاده شود."
    },
    "commonMistakes": [
      {
        "mistake": "page size و فیلدهای sort قابل قبول را محدود کن؛ ورودی کاربر را SQL خام نکن.",
        "whyBad": "Pagination به ترتیب پایدار نیاز دارد؛ sort روی createdAt تنها در زمان‌های برابر مبهم است، id را tie-breaker کن. offset برای صفحه‌های عمیق هزینه دارد؛ keyset pagination برای پیمایش ترتیبی گزینه دیگر است.",
        "solution": "برای شکستن تساوی و ترتیب پایدار"
      }
    ],
    "bestPractices": [
      "page size و فیلدهای sort قابل قبول را محدود کن؛ ورودی کاربر را SQL خام نکن.",
      "دو سفارش با زمان یکسان بساز؛ پیمایش صفحه‌ها نباید مورد تکراری یا جاافتاده تولید کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو سفارش با زمان یکسان بساز؛ پیمایش صفحه‌ها نباید مورد تکراری یا جاافتاده تولید کند.",
      "acceptanceCriteria": [
        "دو سفارش با زمان یکسان بساز؛ پیمایش صفحه‌ها نباید مورد تکراری یا جاافتاده تولید کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "page size و فیلدهای sort قابل قبول را محدود کن؛ ورودی کاربر را SQL خام نکن."
      ],
      "solution": {
        "code": "SELECT id, created_at FROM orders\nWHERE (created_at, id) < (:last_time, :last_id)\nORDER BY created_at DESC, id DESC\nLIMIT 20;",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. برای شکستن تساوی و ترتیب پایدار. page size و فیلدهای sort قابل قبول را محدود کن؛ ورودی کاربر را SQL خام نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-041",
        "question": "چرا id در sort اضافه می‌شود؟",
        "options": [
          "برای رمزگذاری cursor به صورت خودکار",
          "برای حذف نیاز به index",
          "برای شکستن تساوی و ترتیب پایدار"
        ],
        "correctIndex": 2,
        "explanation": "برای شکستن تساوی و ترتیب پایدار. Pagination به ترتیب پایدار نیاز دارد؛ sort روی createdAt تنها در زمان‌های برابر مبهم است، id را tie-breaker کن. offset برای صفحه‌های عمیق هزینه دارد؛ keyset pagination برای پیمایش ترتیبی گزینه دیگر است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا id در sort اضافه می‌شود؟",
        "answer": "برای شکستن تساوی و ترتیب پایدار. page size و فیلدهای sort قابل قبول را محدود کن؛ ورودی کاربر را SQL خام نکن."
      }
    ],
    "summary": "Pagination به ترتیب پایدار نیاز دارد؛ sort روی createdAt تنها در زمان‌های برابر مبهم است، id را tie-breaker کن. offset برای صفحه‌های عمیق هزینه دارد؛ keyset pagination برای پیمایش ترتیبی گزینه دیگر است.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/repositories.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-042",
    "slug": "spring-boot-actuator-and-health-checks",
    "week": 7,
    "day": 6,
    "title": "مانیتورینگ سلامت و وضعیت داخلی با Spring Boot Actuator",
    "titleEn": "Spring Boot Actuator and Health Checks",
    "description": "بررسی اندپوینت‌های /actuator/health و /metrics، تعریف چک‌های سلامت سفارشی برای دیتابیس و سرویس‌های خارجی.",
    "category": "Architecture",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Actuator",
      "Health Checks",
      "Metrics",
      "Observability"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 6",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "قطع دیتابیس مشترک باید لزوماً liveness را fail کند",
      "با قطع DB، liveness و readiness را جدا مشاهده کن و سیاست routing را توضیح بده."
    ],
    "whyItMatters": "افشای env، heapdump یا تمام actuatorها روی پورت عمومی خطرناک است.",
    "introduction": "بررسی اندپوینت‌های /actuator/health و /metrics، تعریف چک‌های سلامت سفارشی برای دیتابیس و سرویس‌های خارجی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Liveness می‌پرسد process قابل ادامه است؛ readiness می‌پرسد ترافیک بگیرد یا نه. قطع DB مشترک نباید بی‌دلیل همه instanceها را restart کند. Actuator مدیریتی را کم‌دسترسی و کم‌افشا نگه دار."
      }
    ],
    "realWorldScenario": {
      "scenario": "با قطع DB، liveness و readiness را جدا مشاهده کن و سیاست routing را توضیح بده.",
      "solution": "افشای env، heapdump یا تمام actuatorها روی پورت عمومی خطرناک است."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "management:\n  endpoints:\n    web:\n      exposure:\n        include: health,prometheus\n  endpoint:\n    health:\n      probes:\n        enabled: true",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Spring Boot Actuator and Health Checks",
      "explanation": "مانند providerها و repositoryهای Nest، dependency direction مهم‌تر از نام پوشه است. service جاوا می‌تواند همزمان توسط چند درخواست استفاده شود."
    },
    "commonMistakes": [
      {
        "mistake": "افشای env، heapdump یا تمام actuatorها روی پورت عمومی خطرناک است.",
        "whyBad": "Liveness می‌پرسد process قابل ادامه است؛ readiness می‌پرسد ترافیک بگیرد یا نه. قطع DB مشترک نباید بی‌دلیل همه instanceها را restart کند. Actuator مدیریتی را کم‌دسترسی و کم‌افشا نگه دار.",
        "solution": "خیر؛ می‌تواند موج restart بی‌فایده بسازد"
      }
    ],
    "bestPractices": [
      "افشای env، heapdump یا تمام actuatorها روی پورت عمومی خطرناک است.",
      "با قطع DB، liveness و readiness را جدا مشاهده کن و سیاست routing را توضیح بده."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با قطع DB، liveness و readiness را جدا مشاهده کن و سیاست routing را توضیح بده.",
      "acceptanceCriteria": [
        "با قطع DB، liveness و readiness را جدا مشاهده کن و سیاست routing را توضیح بده.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "افشای env، heapdump یا تمام actuatorها روی پورت عمومی خطرناک است."
      ],
      "solution": {
        "code": "management:\n  endpoints:\n    web:\n      exposure:\n        include: health,prometheus\n  endpoint:\n    health:\n      probes:\n        enabled: true",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ می‌تواند موج restart بی‌فایده بسازد. افشای env، heapdump یا تمام actuatorها روی پورت عمومی خطرناک است."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-042",
        "question": "قطع دیتابیس مشترک باید لزوماً liveness را fail کند؟",
        "options": [
          "خیر؛ می‌تواند موج restart بی‌فایده بسازد",
          "بله؛ restart همیشه DB را تعمیر می‌کند",
          "بله؛ readiness و liveness یک مفهوم‌اند"
        ],
        "correctIndex": 0,
        "explanation": "خیر؛ می‌تواند موج restart بی‌فایده بسازد. Liveness می‌پرسد process قابل ادامه است؛ readiness می‌پرسد ترافیک بگیرد یا نه. قطع DB مشترک نباید بی‌دلیل همه instanceها را restart کند. Actuator مدیریتی را کم‌دسترسی و کم‌افشا نگه دار."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: قطع دیتابیس مشترک باید لزوماً liveness را fail کند؟",
        "answer": "خیر؛ می‌تواند موج restart بی‌فایده بسازد. افشای env، heapdump یا تمام actuatorها روی پورت عمومی خطرناک است."
      }
    ],
    "summary": "Liveness می‌پرسد process قابل ادامه است؛ readiness می‌پرسد ترافیک بگیرد یا نه. قطع DB مشترک نباید بی‌دلیل همه instanceها را restart کند. Actuator مدیریتی را کم‌دسترسی و کم‌افشا نگه دار.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-data/jpa/reference/repositories.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
