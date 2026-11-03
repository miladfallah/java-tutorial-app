import { Lesson } from "../types";

export const WEEK_15_LESSONS: Lesson[] = [
  {
    "id": "lesson-085",
    "slug": "testcontainers-with-postgresql",
    "week": 15,
    "day": 1,
    "title": "تست واقعی پایگاه داده با Testcontainers و PostgreSQL",
    "titleEn": "Testcontainers with PostgreSQL",
    "description": "حذف شبیه‌سازهای غیرواقعی مانند H2، بالا آوردن کانتینرهای واقعی پستگرس در طول تست و اتصال خودکار با @ServiceConnection.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Testcontainers",
      "PostgreSQL",
      "Real Integration Tests",
      "Docker"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 14",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای سنجش lockهای PostgreSQL کدام بهتر است",
      "migration واقعی را روی container اجرا کن؛ query و constraint را بدون تنظیم دستی پورت تست کن."
    ],
    "whyItMatters": "اولین دریافت image اینترنت می‌خواهد؛ اجرای آفلاین نیازمند imageهای از قبل دریافت‌شده است.",
    "introduction": "حذف شبیه‌سازهای غیرواقعی مانند H2، بالا آوردن کانتینرهای واقعی پستگرس در طول تست و اتصال خودکار با @ServiceConnection.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Testcontainers دیتابیس واقعی و disposable می‌دهد؛ تست به Docker نیاز دارد. نسخه image را مشخص کن و URL/credential را پویا بگیر. H2 جایگزین معادل SQL و lockهای PostgreSQL نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "migration واقعی را روی container اجرا کن؛ query و constraint را بدون تنظیم دستی پورت تست کن.",
      "solution": "اولین دریافت image اینترنت می‌خواهد؛ اجرای آفلاین نیازمند imageهای از قبل دریافت‌شده است."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Container\nstatic PostgreSQLContainer<?> db = new PostgreSQLContainer<>(\"postgres:17-alpine\");\n@DynamicPropertySource\nstatic void dbProperties(DynamicPropertyRegistry r) {\n    r.add(\"spring.datasource.url\", db::getJdbcUrl);\n    r.add(\"spring.datasource.username\", db::getUsername);\n    r.add(\"spring.datasource.password\", db::getPassword);\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Testcontainers with PostgreSQL",
      "explanation": "همان اصل integration test در Node برقرار است: dependency واقعی برای قرارداد واقعی. تراکنش Spring معمولاً به thread محدود است؛ rollback تست را سراسری فرض نکن."
    },
    "commonMistakes": [
      {
        "mistake": "اولین دریافت image اینترنت می‌خواهد؛ اجرای آفلاین نیازمند imageهای از قبل دریافت‌شده است.",
        "whyBad": "Testcontainers دیتابیس واقعی و disposable می‌دهد؛ تست به Docker نیاز دارد. نسخه image را مشخص کن و URL/credential را پویا بگیر. H2 جایگزین معادل SQL و lockهای PostgreSQL نیست.",
        "solution": "PostgreSQL واقعی در Testcontainers"
      }
    ],
    "bestPractices": [
      "اولین دریافت image اینترنت می‌خواهد؛ اجرای آفلاین نیازمند imageهای از قبل دریافت‌شده است.",
      "migration واقعی را روی container اجرا کن؛ query و constraint را بدون تنظیم دستی پورت تست کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "migration واقعی را روی container اجرا کن؛ query و constraint را بدون تنظیم دستی پورت تست کن.",
      "acceptanceCriteria": [
        "migration واقعی را روی container اجرا کن؛ query و constraint را بدون تنظیم دستی پورت تست کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "اولین دریافت image اینترنت می‌خواهد؛ اجرای آفلاین نیازمند imageهای از قبل دریافت‌شده است."
      ],
      "solution": {
        "code": "@Container\nstatic PostgreSQLContainer<?> db = new PostgreSQLContainer<>(\"postgres:17-alpine\");\n@DynamicPropertySource\nstatic void dbProperties(DynamicPropertyRegistry r) {\n    r.add(\"spring.datasource.url\", db::getJdbcUrl);\n    r.add(\"spring.datasource.username\", db::getUsername);\n    r.add(\"spring.datasource.password\", db::getPassword);\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. PostgreSQL واقعی در Testcontainers. اولین دریافت image اینترنت می‌خواهد؛ اجرای آفلاین نیازمند imageهای از قبل دریافت‌شده است."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-085",
        "question": "برای سنجش lockهای PostgreSQL کدام بهتر است؟",
        "options": [
          "فقط H2 بدون مقایسه رفتار",
          "PostgreSQL واقعی در Testcontainers",
          "Mockito برای Connection"
        ],
        "correctIndex": 1,
        "explanation": "PostgreSQL واقعی در Testcontainers. Testcontainers دیتابیس واقعی و disposable می‌دهد؛ تست به Docker نیاز دارد. نسخه image را مشخص کن و URL/credential را پویا بگیر. H2 جایگزین معادل SQL و lockهای PostgreSQL نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای سنجش lockهای PostgreSQL کدام بهتر است؟",
        "answer": "PostgreSQL واقعی در Testcontainers. اولین دریافت image اینترنت می‌خواهد؛ اجرای آفلاین نیازمند imageهای از قبل دریافت‌شده است."
      }
    ],
    "summary": "Testcontainers دیتابیس واقعی و disposable می‌دهد؛ تست به Docker نیاز دارد. نسخه image را مشخص کن و URL/credential را پویا بگیر. H2 جایگزین معادل SQL و lockهای PostgreSQL نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://java.testcontainers.org/modules/databases/postgres/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-086",
    "slug": "repository-integration-tests",
    "week": 15,
    "day": 2,
    "title": "آزمون یکپارچگی لایه دسترسی به داده با @DataJpaTest",
    "titleEn": "Repository Integration Tests",
    "description": "اجرای تست‌های دقیق کوئری‌های پیچیده، ارزیابی ایندکس‌ها و رفتار قفل‌ها روی دیتابیس واقعی تست‌کانتینرز.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "DataJpaTest",
      "Repository Tests",
      "SQL Testing"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 14",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا پیش از بازخوانی clear مفید است",
      "یک سفارش با دو item ذخیره و با context تازه بخوان؛ foreign key و مبلغ دقیق حفظ شوند."
    ],
    "whyItMatters": "تست خواندن همان object حافظه‌ای ممکن است mapping خراب را پنهان کند.",
    "introduction": "اجرای تست‌های دقیق کوئری‌های پیچیده، ارزیابی ایندکس‌ها و رفتار قفل‌ها روی دیتابیس واقعی تست‌کانتینرز.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Repository test باید mapping، query، constraint و fetch plan را بسنجد. flush و clear کمک می‌کند موفقیت از identity map نیاید. دیتابیس خالی و روابط چندتایی هر دو لازم‌اند."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک سفارش با دو item ذخیره و با context تازه بخوان؛ foreign key و مبلغ دقیق حفظ شوند.",
      "solution": "تست خواندن همان object حافظه‌ای ممکن است mapping خراب را پنهان کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "repository.save(order);\nentityManager.flush();\nentityManager.clear();\nvar reloaded = repository.findWithItems(order.getId()).orElseThrow();\nassertEquals(2, reloaded.getItems().size());",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Repository Integration Tests",
      "explanation": "همان اصل integration test در Node برقرار است: dependency واقعی برای قرارداد واقعی. تراکنش Spring معمولاً به thread محدود است؛ rollback تست را سراسری فرض نکن."
    },
    "commonMistakes": [
      {
        "mistake": "تست خواندن همان object حافظه‌ای ممکن است mapping خراب را پنهان کند.",
        "whyBad": "Repository test باید mapping، query، constraint و fetch plan را بسنجد. flush و clear کمک می‌کند موفقیت از identity map نیاید. دیتابیس خالی و روابط چندتایی هر دو لازم‌اند.",
        "solution": "وادارکردن تست به خواندن مجدد از DB"
      }
    ],
    "bestPractices": [
      "تست خواندن همان object حافظه‌ای ممکن است mapping خراب را پنهان کند.",
      "یک سفارش با دو item ذخیره و با context تازه بخوان؛ foreign key و مبلغ دقیق حفظ شوند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک سفارش با دو item ذخیره و با context تازه بخوان؛ foreign key و مبلغ دقیق حفظ شوند.",
      "acceptanceCriteria": [
        "یک سفارش با دو item ذخیره و با context تازه بخوان؛ foreign key و مبلغ دقیق حفظ شوند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "تست خواندن همان object حافظه‌ای ممکن است mapping خراب را پنهان کند."
      ],
      "solution": {
        "code": "repository.save(order);\nentityManager.flush();\nentityManager.clear();\nvar reloaded = repository.findWithItems(order.getId()).orElseThrow();\nassertEquals(2, reloaded.getItems().size());",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. وادارکردن تست به خواندن مجدد از DB. تست خواندن همان object حافظه‌ای ممکن است mapping خراب را پنهان کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-086",
        "question": "چرا پیش از بازخوانی clear مفید است؟",
        "options": [
          "commit کردن خودکار تراکنش",
          "حذف همه جدول‌ها",
          "وادارکردن تست به خواندن مجدد از DB"
        ],
        "correctIndex": 2,
        "explanation": "وادارکردن تست به خواندن مجدد از DB. Repository test باید mapping، query، constraint و fetch plan را بسنجد. flush و clear کمک می‌کند موفقیت از identity map نیاید. دیتابیس خالی و روابط چندتایی هر دو لازم‌اند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا پیش از بازخوانی clear مفید است؟",
        "answer": "وادارکردن تست به خواندن مجدد از DB. تست خواندن همان object حافظه‌ای ممکن است mapping خراب را پنهان کند."
      }
    ],
    "summary": "Repository test باید mapping، query، constraint و fetch plan را بسنجد. flush و clear کمک می‌کند موفقیت از identity map نیاید. دیتابیس خالی و روابط چندتایی هر دو لازم‌اند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://java.testcontainers.org/modules/databases/postgres/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-087",
    "slug": "contract-testing-concepts",
    "week": 15,
    "day": 3,
    "title": "مفاهیم تست قرارداد (Contract Testing) در معماری‌های توزیع‌شده",
    "titleEn": "Contract Testing Concepts",
    "description": "جلوگیری از ناسازگاری میان کلاینت و سرور بدون اجرای همزمان تمام سرویس‌ها با استفاده از الگوهای Consumer-Driven Contracts.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Contract Testing",
      "Pact",
      "Microservices Testing"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 14",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "تست قرارداد بیشتر کدام ریسک را کم می‌کند",
      "برای consumer فیلدهای ضروری و وضعیت 404 را قرارداد کن؛ حذف currency باید تست را بشکند."
    ],
    "whyItMatters": "قرارداد را با implementation مشترک تولید نکن که هر دو همزمان یک باگ را بپذیرند.",
    "introduction": "جلوگیری از ناسازگاری میان کلاینت و سرور بدون اجرای همزمان تمام سرویس‌ها با استفاده از الگوهای Consumer-Driven Contracts.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Contract test انتظار مصرف‌کننده از درخواست و پاسخ را در برابر provider می‌سنجد. schema لازم است اما معنای status، nullable بودن و سازگاری نام فیلدها هم اهمیت دارند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای consumer فیلدهای ضروری و وضعیت 404 را قرارداد کن؛ حذف currency باید تست را بشکند.",
      "solution": "قرارداد را با implementation مشترک تولید نکن که هر دو همزمان یک باگ را بپذیرند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "json",
        "code": "{\"id\":\"uuid\",\"status\":\"CONFIRMED\",\"totalAmount\":12.50,\"currency\":\"USD\"}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Contract Testing Concepts",
      "explanation": "همان اصل integration test در Node برقرار است: dependency واقعی برای قرارداد واقعی. تراکنش Spring معمولاً به thread محدود است؛ rollback تست را سراسری فرض نکن."
    },
    "commonMistakes": [
      {
        "mistake": "قرارداد را با implementation مشترک تولید نکن که هر دو همزمان یک باگ را بپذیرند.",
        "whyBad": "Contract test انتظار مصرف‌کننده از درخواست و پاسخ را در برابر provider می‌سنجد. schema لازم است اما معنای status، nullable بودن و سازگاری نام فیلدها هم اهمیت دارند.",
        "solution": "شکستن ارتباط consumer و provider پس از تغییر API"
      }
    ],
    "bestPractices": [
      "قرارداد را با implementation مشترک تولید نکن که هر دو همزمان یک باگ را بپذیرند.",
      "برای consumer فیلدهای ضروری و وضعیت 404 را قرارداد کن؛ حذف currency باید تست را بشکند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای consumer فیلدهای ضروری و وضعیت 404 را قرارداد کن؛ حذف currency باید تست را بشکند.",
      "acceptanceCriteria": [
        "برای consumer فیلدهای ضروری و وضعیت 404 را قرارداد کن؛ حذف currency باید تست را بشکند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "قرارداد را با implementation مشترک تولید نکن که هر دو همزمان یک باگ را بپذیرند."
      ],
      "solution": {
        "code": "{\"id\":\"uuid\",\"status\":\"CONFIRMED\",\"totalAmount\":12.50,\"currency\":\"USD\"}",
        "language": "json",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. شکستن ارتباط consumer و provider پس از تغییر API. قرارداد را با implementation مشترک تولید نکن که هر دو همزمان یک باگ را بپذیرند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-087",
        "question": "تست قرارداد بیشتر کدام ریسک را کم می‌کند؟",
        "options": [
          "شکستن ارتباط consumer و provider پس از تغییر API",
          "تمام raceهای دیتابیس",
          "هر مشکل CPU و GC"
        ],
        "correctIndex": 0,
        "explanation": "شکستن ارتباط consumer و provider پس از تغییر API. Contract test انتظار مصرف‌کننده از درخواست و پاسخ را در برابر provider می‌سنجد. schema لازم است اما معنای status، nullable بودن و سازگاری نام فیلدها هم اهمیت دارند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: تست قرارداد بیشتر کدام ریسک را کم می‌کند؟",
        "answer": "شکستن ارتباط consumer و provider پس از تغییر API. قرارداد را با implementation مشترک تولید نکن که هر دو همزمان یک باگ را بپذیرند."
      }
    ],
    "summary": "Contract test انتظار مصرف‌کننده از درخواست و پاسخ را در برابر provider می‌سنجد. schema لازم است اما معنای status، nullable بودن و سازگاری نام فیلدها هم اهمیت دارند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://java.testcontainers.org/modules/databases/postgres/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-088",
    "slug": "testing-order-apis",
    "week": 15,
    "day": 4,
    "title": "تست انتها‌به‌انتها برای جریان کامل سفارش با Testcontainers (پروژه محوری)",
    "titleEn": "Testing Order APIs",
    "description": "پیاده‌سازی تست جامع ثبت سفارش، رزرو موجودی در دیتابیس واقعی و تایید صحت بازگشت پاسخ توسط @SpringBootTest.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "E2E Testing",
      "SpringBootTest",
      "Order Flow"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 14",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای request نامعتبر چه چیزی علاوه بر 400 مهم است",
      "مسیر ایجاد، خواندن، body نامعتبر و دسترسی کاربر دیگر را در تست‌های مستقل بساز."
    ],
    "whyItMatters": "تست با disable کردن تمام filterها، امنیت API را نمی‌سنجد.",
    "introduction": "پیاده‌سازی تست جامع ثبت سفارش، رزرو موجودی در دیتابیس واقعی و تایید صحت بازگشت پاسخ توسط @SpringBootTest.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "تست HTTP فقط happy path نیست: status، header، body و authorization را با داده کنترل‌شده بسنج. validation نباید order بسازد و client دیگر نباید پاسخ آن را ببیند."
      }
    ],
    "realWorldScenario": {
      "scenario": "مسیر ایجاد، خواندن، body نامعتبر و دسترسی کاربر دیگر را در تست‌های مستقل بساز.",
      "solution": "تست با disable کردن تمام filterها، امنیت API را نمی‌سنجد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "mvc.perform(post(\"/api/orders\")\n    .contentType(MediaType.APPLICATION_JSON)\n    .content(\"{\"customerId\":\"c1\",\"items\":[]}\"))\n    .andExpect(status().isBadRequest());",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Testing Order APIs",
      "explanation": "همان اصل integration test در Node برقرار است: dependency واقعی برای قرارداد واقعی. تراکنش Spring معمولاً به thread محدود است؛ rollback تست را سراسری فرض نکن."
    },
    "commonMistakes": [
      {
        "mistake": "تست با disable کردن تمام filterها، امنیت API را نمی‌سنجد.",
        "whyBad": "تست HTTP فقط happy path نیست: status، header، body و authorization را با داده کنترل‌شده بسنج. validation نباید order بسازد و client دیگر نباید پاسخ آن را ببیند.",
        "solution": "هیچ تغییر پایدار ناخواسته‌ای رخ ندهد"
      }
    ],
    "bestPractices": [
      "تست با disable کردن تمام filterها، امنیت API را نمی‌سنجد.",
      "مسیر ایجاد، خواندن، body نامعتبر و دسترسی کاربر دیگر را در تست‌های مستقل بساز."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "مسیر ایجاد، خواندن، body نامعتبر و دسترسی کاربر دیگر را در تست‌های مستقل بساز.",
      "acceptanceCriteria": [
        "مسیر ایجاد، خواندن، body نامعتبر و دسترسی کاربر دیگر را در تست‌های مستقل بساز.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "تست با disable کردن تمام filterها، امنیت API را نمی‌سنجد."
      ],
      "solution": {
        "code": "mvc.perform(post(\"/api/orders\")\n    .contentType(MediaType.APPLICATION_JSON)\n    .content(\"{\"customerId\":\"c1\",\"items\":[]}\"))\n    .andExpect(status().isBadRequest());",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. هیچ تغییر پایدار ناخواسته‌ای رخ ندهد. تست با disable کردن تمام filterها، امنیت API را نمی‌سنجد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-088",
        "question": "برای request نامعتبر چه چیزی علاوه بر 400 مهم است؟",
        "options": [
          "فقط متن دکمه مرورگر عوض شود",
          "هیچ تغییر پایدار ناخواسته‌ای رخ ندهد",
          "server آن را بی‌قید retry کند"
        ],
        "correctIndex": 1,
        "explanation": "هیچ تغییر پایدار ناخواسته‌ای رخ ندهد. تست HTTP فقط happy path نیست: status، header، body و authorization را با داده کنترل‌شده بسنج. validation نباید order بسازد و client دیگر نباید پاسخ آن را ببیند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای request نامعتبر چه چیزی علاوه بر 400 مهم است؟",
        "answer": "هیچ تغییر پایدار ناخواسته‌ای رخ ندهد. تست با disable کردن تمام filterها، امنیت API را نمی‌سنجد."
      }
    ],
    "summary": "تست HTTP فقط happy path نیست: status، header، body و authorization را با داده کنترل‌شده بسنج. validation نباید order بسازد و client دیگر نباید پاسخ آن را ببیند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://java.testcontainers.org/modules/databases/postgres/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-089",
    "slug": "transaction-test-isolation",
    "week": 15,
    "day": 5,
    "title": "ایزولاسیون تراکنش‌های آزمون و پاکسازی پایگاه داده",
    "titleEn": "Transaction Test Isolation",
    "description": "مقایسه رفتار رول‌بک خودکار در تست‌ها و زمان‌هایی که به کدهای پاکسازی صریح دیتابیس نیاز داریم.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Test Isolation",
      "Rollback Strategy",
      "Database Cleanup"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 14",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا @Transactional تست، write سرور HTTP جدا را حتماً rollback می‌کند",
      "با RANDOM_PORT یک سفارش ایجاد کن؛ پس از پایان تست بررسی کن آیا داده مانده است و cleanup اضافه کن."
    ],
    "whyItMatters": "تست موازی با پاک‌کردن سراسری جدول‌ها می‌تواند نتایج یکدیگر را خراب کند.",
    "introduction": "مقایسه رفتار رول‌بک خودکار در تست‌ها و زمان‌هایی که به کدهای پاکسازی صریح دیتابیس نیاز داریم.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "تراکنش تست روی thread اجرای تست اعمال می‌شود؛ درخواست سرور واقعی یا task async لزوماً داخل آن نیست. rollback تست نمی‌تواند commit یک process دیگر را برگرداند. cleanup و ایزولاسیون را صریح طراحی کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "با RANDOM_PORT یک سفارش ایجاد کن؛ پس از پایان تست بررسی کن آیا داده مانده است و cleanup اضافه کن.",
      "solution": "تست موازی با پاک‌کردن سراسری جدول‌ها می‌تواند نتایج یکدیگر را خراب کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Test thread transaction -> MockMvc may share thread\nHTTP server / executor thread -> separate transaction boundary\nUse unique fixture IDs and explicit cleanup for committed work.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Transaction Test Isolation",
      "explanation": "همان اصل integration test در Node برقرار است: dependency واقعی برای قرارداد واقعی. تراکنش Spring معمولاً به thread محدود است؛ rollback تست را سراسری فرض نکن."
    },
    "commonMistakes": [
      {
        "mistake": "تست موازی با پاک‌کردن سراسری جدول‌ها می‌تواند نتایج یکدیگر را خراب کند.",
        "whyBad": "تراکنش تست روی thread اجرای تست اعمال می‌شود؛ درخواست سرور واقعی یا task async لزوماً داخل آن نیست. rollback تست نمی‌تواند commit یک process دیگر را برگرداند. cleanup و ایزولاسیون را صریح طراحی کن.",
        "solution": "خیر؛ مرز thread/transaction جداست"
      }
    ],
    "bestPractices": [
      "تست موازی با پاک‌کردن سراسری جدول‌ها می‌تواند نتایج یکدیگر را خراب کند.",
      "با RANDOM_PORT یک سفارش ایجاد کن؛ پس از پایان تست بررسی کن آیا داده مانده است و cleanup اضافه کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با RANDOM_PORT یک سفارش ایجاد کن؛ پس از پایان تست بررسی کن آیا داده مانده است و cleanup اضافه کن.",
      "acceptanceCriteria": [
        "با RANDOM_PORT یک سفارش ایجاد کن؛ پس از پایان تست بررسی کن آیا داده مانده است و cleanup اضافه کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "تست موازی با پاک‌کردن سراسری جدول‌ها می‌تواند نتایج یکدیگر را خراب کند."
      ],
      "solution": {
        "code": "Test thread transaction -> MockMvc may share thread\nHTTP server / executor thread -> separate transaction boundary\nUse unique fixture IDs and explicit cleanup for committed work.",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ مرز thread/transaction جداست. تست موازی با پاک‌کردن سراسری جدول‌ها می‌تواند نتایج یکدیگر را خراب کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-089",
        "question": "آیا @Transactional تست، write سرور HTTP جدا را حتماً rollback می‌کند؟",
        "options": [
          "بله؛ نام متد test تمام DB را احاطه می‌کند",
          "بله؛ اگر پورت تصادفی باشد",
          "خیر؛ مرز thread/transaction جداست"
        ],
        "correctIndex": 2,
        "explanation": "خیر؛ مرز thread/transaction جداست. تراکنش تست روی thread اجرای تست اعمال می‌شود؛ درخواست سرور واقعی یا task async لزوماً داخل آن نیست. rollback تست نمی‌تواند commit یک process دیگر را برگرداند. cleanup و ایزولاسیون را صریح طراحی کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا @Transactional تست، write سرور HTTP جدا را حتماً rollback می‌کند؟",
        "answer": "خیر؛ مرز thread/transaction جداست. تست موازی با پاک‌کردن سراسری جدول‌ها می‌تواند نتایج یکدیگر را خراب کند."
      }
    ],
    "summary": "تراکنش تست روی thread اجرای تست اعمال می‌شود؛ درخواست سرور واقعی یا task async لزوماً داخل آن نیست. rollback تست نمی‌تواند commit یک process دیگر را برگرداند. cleanup و ایزولاسیون را صریح طراحی کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://java.testcontainers.org/modules/databases/postgres/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-090",
    "slug": "running-tests-in-ci",
    "week": 15,
    "day": 6,
    "title": "اتوماسیون اجرای تست‌ها در پایپ‌لاین CI گیت‌هاب اکشنز",
    "titleEn": "Running Tests in CI",
    "description": "پیکربندی گیت‌هاب اکشنز جهت اجرای تست‌های Maven و Testcontainers با کشینگ هوشمند وابستگی‌ها.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "CI/CD",
      "GitHub Actions",
      "Test Automation",
      "DevOps"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 14",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "یک pipeline مطمئن با شکست تست چه می‌کند",
      "یک تست را عمداً خراب کن؛ job باید fail و گزارش قابل خواندن تولید کند."
    ],
    "whyItMatters": "skipTests برای سبزکردن pipeline، آماده‌بودن انتشار را اثبات نمی‌کند.",
    "introduction": "پیکربندی گیت‌هاب اکشنز جهت اجرای تست‌های Maven و Testcontainers با کشینگ هوشمند وابستگی‌ها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "CI باید build قابل تکرار، تست و گزارش شکست داشته باشد. dependency cache زمان را کم می‌کند اما source of truth نیست. secret و token فقط به job موردنیاز و با دسترسی حداقلی داده شوند."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک تست را عمداً خراب کن؛ job باید fail و گزارش قابل خواندن تولید کند.",
      "solution": "skipTests برای سبزکردن pipeline، آماده‌بودن انتشار را اثبات نمی‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "bash",
        "code": "./mvnw -B verify\n# Run in a job with a Docker daemon when Testcontainers tests are enabled.\n# Publish surefire reports even when the test job fails.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Running Tests in CI",
      "explanation": "همان اصل integration test در Node برقرار است: dependency واقعی برای قرارداد واقعی. تراکنش Spring معمولاً به thread محدود است؛ rollback تست را سراسری فرض نکن."
    },
    "commonMistakes": [
      {
        "mistake": "skipTests برای سبزکردن pipeline، آماده‌بودن انتشار را اثبات نمی‌کند.",
        "whyBad": "CI باید build قابل تکرار، تست و گزارش شکست داشته باشد. dependency cache زمان را کم می‌کند اما source of truth نیست. secret و token فقط به job موردنیاز و با دسترسی حداقلی داده شوند.",
        "solution": "fail می‌شود و گزارش خطا نگه می‌دارد"
      }
    ],
    "bestPractices": [
      "skipTests برای سبزکردن pipeline، آماده‌بودن انتشار را اثبات نمی‌کند.",
      "یک تست را عمداً خراب کن؛ job باید fail و گزارش قابل خواندن تولید کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک تست را عمداً خراب کن؛ job باید fail و گزارش قابل خواندن تولید کند.",
      "acceptanceCriteria": [
        "یک تست را عمداً خراب کن؛ job باید fail و گزارش قابل خواندن تولید کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "skipTests برای سبزکردن pipeline، آماده‌بودن انتشار را اثبات نمی‌کند."
      ],
      "solution": {
        "code": "./mvnw -B verify\n# Run in a job with a Docker daemon when Testcontainers tests are enabled.\n# Publish surefire reports even when the test job fails.",
        "language": "bash",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. fail می‌شود و گزارش خطا نگه می‌دارد. skipTests برای سبزکردن pipeline، آماده‌بودن انتشار را اثبات نمی‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-090",
        "question": "یک pipeline مطمئن با شکست تست چه می‌کند؟",
        "options": [
          "fail می‌شود و گزارش خطا نگه می‌دارد",
          "همیشه deploy می‌کند و warning چاپ می‌کند",
          "تست را خودکار حذف می‌کند"
        ],
        "correctIndex": 0,
        "explanation": "fail می‌شود و گزارش خطا نگه می‌دارد. CI باید build قابل تکرار، تست و گزارش شکست داشته باشد. dependency cache زمان را کم می‌کند اما source of truth نیست. secret و token فقط به job موردنیاز و با دسترسی حداقلی داده شوند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: یک pipeline مطمئن با شکست تست چه می‌کند؟",
        "answer": "fail می‌شود و گزارش خطا نگه می‌دارد. skipTests برای سبزکردن pipeline، آماده‌بودن انتشار را اثبات نمی‌کند."
      }
    ],
    "summary": "CI باید build قابل تکرار، تست و گزارش شکست داشته باشد. dependency cache زمان را کم می‌کند اما source of truth نیست. secret و token فقط به job موردنیاز و با دسترسی حداقلی داده شوند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://java.testcontainers.org/modules/databases/postgres/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
