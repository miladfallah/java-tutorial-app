import { Lesson } from "../types";

export const WEEK_14_LESSONS: Lesson[] = [
  {
    "id": "lesson-079",
    "slug": "junit-5-and-assertions",
    "week": 14,
    "day": 1,
    "title": "مبانی تست‌نویسی مدرن با JUnit 5 و Assertionهای قدرتمند",
    "titleEn": "JUnit 5 and Assertions",
    "description": "آشنایی با انوتیشن‌های چرخه تست (@BeforeEach, @ParameterizedTest)، کار با AssertJ جهت نگارش تست‌های خوانا.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "JUnit 5",
      "AssertJ",
      "Unit Testing",
      "TDD"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 13",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "یک assertion مفید چه چیزی را نشان می‌دهد",
      "برای quantity منفی، صفر و مثبت تست پارامتری بنویس؛ عمداً یک باگ وارد کن و شکست تست را ببین."
    ],
    "whyItMatters": "assert زبان Java ممکن است غیرفعال باشد؛ از assertion کتابخانه تست استفاده کن.",
    "introduction": "آشنایی با انوتیشن‌های چرخه تست (@BeforeEach, @ParameterizedTest)، کار با AssertJ جهت نگارش تست‌های خوانا.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "تست باید رفتار قابل مشاهده را با Arrange/Act/Assert توضیح دهد. assertion دقیق اختلاف را آشکار می‌کند؛ تستی که هیچ assertion ندارد ممکن است بدون سنجش هدف سبز شود. exception و مرزها را با داده مشخص امتحان کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای quantity منفی، صفر و مثبت تست پارامتری بنویس؛ عمداً یک باگ وارد کن و شکست تست را ببین.",
      "solution": "assert زبان Java ممکن است غیرفعال باشد؛ از assertion کتابخانه تست استفاده کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Test\nvoid rejectsZeroQuantity() {\n    assertThrows(IllegalArgumentException.class, () -> new OrderLine(\"sku\", 0));\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "JUnit 5 and Assertions",
      "explanation": "تجربه Jest را به طراحی تست منتقل کن، اما تفاوت JUnit lifecycle، Mockito و context Spring را بشناس. mock هیچ‌کدام رفتار DB را اثبات نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "assert زبان Java ممکن است غیرفعال باشد؛ از assertion کتابخانه تست استفاده کن.",
        "whyBad": "تست باید رفتار قابل مشاهده را با Arrange/Act/Assert توضیح دهد. assertion دقیق اختلاف را آشکار می‌کند؛ تستی که هیچ assertion ندارد ممکن است بدون سنجش هدف سبز شود. exception و مرزها را با داده مشخص امتحان کن.",
        "solution": "رفتار مورد انتظار و اختلاف واقعی"
      }
    ],
    "bestPractices": [
      "assert زبان Java ممکن است غیرفعال باشد؛ از assertion کتابخانه تست استفاده کن.",
      "برای quantity منفی، صفر و مثبت تست پارامتری بنویس؛ عمداً یک باگ وارد کن و شکست تست را ببین."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای quantity منفی، صفر و مثبت تست پارامتری بنویس؛ عمداً یک باگ وارد کن و شکست تست را ببین.",
      "acceptanceCriteria": [
        "برای quantity منفی، صفر و مثبت تست پارامتری بنویس؛ عمداً یک باگ وارد کن و شکست تست را ببین.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "assert زبان Java ممکن است غیرفعال باشد؛ از assertion کتابخانه تست استفاده کن."
      ],
      "solution": {
        "code": "@Test\nvoid rejectsZeroQuantity() {\n    assertThrows(IllegalArgumentException.class, () -> new OrderLine(\"sku\", 0));\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. رفتار مورد انتظار و اختلاف واقعی. assert زبان Java ممکن است غیرفعال باشد؛ از assertion کتابخانه تست استفاده کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-079",
        "question": "یک assertion مفید چه چیزی را نشان می‌دهد؟",
        "options": [
          "فقط اینکه متد اجرا شد",
          "رفتار مورد انتظار و اختلاف واقعی",
          "همیشه خطا را catch و تست را سبز می‌کند"
        ],
        "correctIndex": 1,
        "explanation": "رفتار مورد انتظار و اختلاف واقعی. تست باید رفتار قابل مشاهده را با Arrange/Act/Assert توضیح دهد. assertion دقیق اختلاف را آشکار می‌کند؛ تستی که هیچ assertion ندارد ممکن است بدون سنجش هدف سبز شود. exception و مرزها را با داده مشخص امتحان کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: یک assertion مفید چه چیزی را نشان می‌دهد؟",
        "answer": "رفتار مورد انتظار و اختلاف واقعی. assert زبان Java ممکن است غیرفعال باشد؛ از assertion کتابخانه تست استفاده کن."
      }
    ],
    "summary": "تست باید رفتار قابل مشاهده را با Arrange/Act/Assert توضیح دهد. assertion دقیق اختلاف را آشکار می‌کند؛ تستی که هیچ assertion ندارد ممکن است بدون سنجش هدف سبز شود. exception و مرزها را با داده مشخص امتحان کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.junit.org/5.11.4/user-guide/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-080",
    "slug": "mockito-and-unit-testing",
    "week": 14,
    "day": 2,
    "title": "شبیه‌سازی وابستگی‌ها با Mockito و اصول تست واحد تمیز",
    "titleEn": "Mockito and Unit Testing",
    "description": "استفاده از @Mock و @InjectMocks، تعریف رفتارها با when/thenReturn و تایید فراخوانی‌ها با verify بدون شبیه‌سازی افراطی.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Mockito",
      "Mocking",
      "Clean Tests",
      "Test Doubles"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 13",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چه چیزی معمولاً نباید mock شود",
      "شکست رزرو را تست کن؛ در این مسیر پرداخت نباید صدا زده شود."
    ],
    "whyItMatters": "verify همه getterها به جای assertion خروجی، تست شکننده می‌سازد.",
    "introduction": "استفاده از @Mock و @InjectMocks، تعریف رفتارها با when/thenReturn و تایید فراخوانی‌ها با verify بدون شبیه‌سازی افراطی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Mockito برای کنترل مرز وابستگی است؛ منطق تحت آزمون را mock نکن. stub پاسخ لازم را تعیین می‌کند و verify فقط تعامل مهم قرارداد را می‌سنجد. over-mocking تست را به جزئیات پیاده‌سازی قفل می‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "شکست رزرو را تست کن؛ در این مسیر پرداخت نباید صدا زده شود.",
      "solution": "verify همه getterها به جای assertion خروجی، تست شکننده می‌سازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "when(stock.reserve(\"sku\", 2)).thenReturn(false);\nassertThrows(InsufficientStockException.class, () -> checkout.place(\"sku\", 2));\nverify(payments, never()).charge(any());",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Mockito and Unit Testing",
      "explanation": "تجربه Jest را به طراحی تست منتقل کن، اما تفاوت JUnit lifecycle، Mockito و context Spring را بشناس. mock هیچ‌کدام رفتار DB را اثبات نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "verify همه getterها به جای assertion خروجی، تست شکننده می‌سازد.",
        "whyBad": "Mockito برای کنترل مرز وابستگی است؛ منطق تحت آزمون را mock نکن. stub پاسخ لازم را تعیین می‌کند و verify فقط تعامل مهم قرارداد را می‌سنجد. over-mocking تست را به جزئیات پیاده‌سازی قفل می‌کند.",
        "solution": "خود واحد دارای منطق مورد آزمون"
      }
    ],
    "bestPractices": [
      "verify همه getterها به جای assertion خروجی، تست شکننده می‌سازد.",
      "شکست رزرو را تست کن؛ در این مسیر پرداخت نباید صدا زده شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "شکست رزرو را تست کن؛ در این مسیر پرداخت نباید صدا زده شود.",
      "acceptanceCriteria": [
        "شکست رزرو را تست کن؛ در این مسیر پرداخت نباید صدا زده شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "verify همه getterها به جای assertion خروجی، تست شکننده می‌سازد."
      ],
      "solution": {
        "code": "when(stock.reserve(\"sku\", 2)).thenReturn(false);\nassertThrows(InsufficientStockException.class, () -> checkout.place(\"sku\", 2));\nverify(payments, never()).charge(any());",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خود واحد دارای منطق مورد آزمون. verify همه getterها به جای assertion خروجی، تست شکننده می‌سازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-080",
        "question": "چه چیزی معمولاً نباید mock شود؟",
        "options": [
          "یک gateway بیرونی کند",
          "یک وابستگی با خطای قابل کنترل",
          "خود واحد دارای منطق مورد آزمون"
        ],
        "correctIndex": 2,
        "explanation": "خود واحد دارای منطق مورد آزمون. Mockito برای کنترل مرز وابستگی است؛ منطق تحت آزمون را mock نکن. stub پاسخ لازم را تعیین می‌کند و verify فقط تعامل مهم قرارداد را می‌سنجد. over-mocking تست را به جزئیات پیاده‌سازی قفل می‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چه چیزی معمولاً نباید mock شود؟",
        "answer": "خود واحد دارای منطق مورد آزمون. verify همه getterها به جای assertion خروجی، تست شکننده می‌سازد."
      }
    ],
    "summary": "Mockito برای کنترل مرز وابستگی است؛ منطق تحت آزمون را mock نکن. stub پاسخ لازم را تعیین می‌کند و verify فقط تعامل مهم قرارداد را می‌سنجد. over-mocking تست را به جزئیات پیاده‌سازی قفل می‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.junit.org/5.11.4/user-guide/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-081",
    "slug": "test-pyramid-and-test-design",
    "week": 14,
    "day": 3,
    "title": "هرم آزمون (Test Pyramid) و استراتژی طراحی تست‌های نرم‌افزار",
    "titleEn": "Test Pyramid and Test Design",
    "description": "تعادل میان تست‌های واحد، یکپارچگی و انتها‌به‌انتها، هزینه اجرا و جلوگیری از تولید تست‌های فلیکی و ناپایدار.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Test Pyramid",
      "QA Strategy",
      "Integration vs Unit"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 13",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "تست mapping JPA را کجا بهتر می‌توان سنجید",
      "برای یک باگ mapper، یک race و یک permission، کم‌هزینه‌ترین سطح تست مؤثر را انتخاب کن."
    ],
    "whyItMatters": "تعداد تست به تنهایی کیفیت را نشان نمی‌دهد؛ خطاهای مهم قابل تشخیص معیارند.",
    "introduction": "تعادل میان تست‌های واحد، یکپارچگی و انتها‌به‌انتها، هزینه اجرا و جلوگیری از تولید تست‌های فلیکی و ناپایدار.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Unit test سریع قواعد محلی را می‌سنجد؛ integration test مرز واقعی مثل mapping SQL را. تست end-to-end برای مسیرهای حیاتی است و به علت هزینه جای همه unitها را نمی‌گیرد."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای یک باگ mapper، یک race و یک permission، کم‌هزینه‌ترین سطح تست مؤثر را انتخاب کن.",
      "solution": "تعداد تست به تنهایی کیفیت را نشان نمی‌دهد؛ خطاهای مهم قابل تشخیص معیارند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Domain rules -> unit tests\nRepository + PostgreSQL -> integration tests\nPOST order + GET order -> a few end-to-end journeys",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Test Pyramid and Test Design",
      "explanation": "تجربه Jest را به طراحی تست منتقل کن، اما تفاوت JUnit lifecycle، Mockito و context Spring را بشناس. mock هیچ‌کدام رفتار DB را اثبات نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "تعداد تست به تنهایی کیفیت را نشان نمی‌دهد؛ خطاهای مهم قابل تشخیص معیارند.",
        "whyBad": "Unit test سریع قواعد محلی را می‌سنجد؛ integration test مرز واقعی مثل mapping SQL را. تست end-to-end برای مسیرهای حیاتی است و به علت هزینه جای همه unitها را نمی‌گیرد.",
        "solution": "integration با DB واقعی هدف"
      }
    ],
    "bestPractices": [
      "تعداد تست به تنهایی کیفیت را نشان نمی‌دهد؛ خطاهای مهم قابل تشخیص معیارند.",
      "برای یک باگ mapper، یک race و یک permission، کم‌هزینه‌ترین سطح تست مؤثر را انتخاب کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای یک باگ mapper، یک race و یک permission، کم‌هزینه‌ترین سطح تست مؤثر را انتخاب کن.",
      "acceptanceCriteria": [
        "برای یک باگ mapper، یک race و یک permission، کم‌هزینه‌ترین سطح تست مؤثر را انتخاب کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "تعداد تست به تنهایی کیفیت را نشان نمی‌دهد؛ خطاهای مهم قابل تشخیص معیارند."
      ],
      "solution": {
        "code": "Domain rules -> unit tests\nRepository + PostgreSQL -> integration tests\nPOST order + GET order -> a few end-to-end journeys",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. integration با DB واقعی هدف. تعداد تست به تنهایی کیفیت را نشان نمی‌دهد؛ خطاهای مهم قابل تشخیص معیارند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-081",
        "question": "تست mapping JPA را کجا بهتر می‌توان سنجید؟",
        "options": [
          "integration با DB واقعی هدف",
          "فقط mock کردن repository",
          "صرفاً snapshot رنگ صفحه"
        ],
        "correctIndex": 0,
        "explanation": "integration با DB واقعی هدف. Unit test سریع قواعد محلی را می‌سنجد؛ integration test مرز واقعی مثل mapping SQL را. تست end-to-end برای مسیرهای حیاتی است و به علت هزینه جای همه unitها را نمی‌گیرد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: تست mapping JPA را کجا بهتر می‌توان سنجید؟",
        "answer": "integration با DB واقعی هدف. تعداد تست به تنهایی کیفیت را نشان نمی‌دهد؛ خطاهای مهم قابل تشخیص معیارند."
      }
    ],
    "summary": "Unit test سریع قواعد محلی را می‌سنجد؛ integration test مرز واقعی مثل mapping SQL را. تست end-to-end برای مسیرهای حیاتی است و به علت هزینه جای همه unitها را نمی‌گیرد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.junit.org/5.11.4/user-guide/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-082",
    "slug": "testing-orderservice",
    "week": 14,
    "day": 4,
    "title": "نگارش آزمون‌های واحد جامع برای OrderService (پروژه محوری)",
    "titleEn": "Testing OrderService",
    "description": "پوشش سناریوهای موفقیت، عدم موجودی کالا و خطاهای تراکنشی در سرویس سفارش با Mockito و JUnit 5.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Service Testing",
      "Unit Tests",
      "Order Logic"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 13",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "Mock repository چه چیزی را ثابت نمی‌کند",
      "عدم ذخیره سفارش پس از شکست موجودی را unit-test کن و برگشت موجودی را integration-test کن."
    ],
    "whyItMatters": "unit test سبز با mock، اثبات ACID یا صحت annotationهای Spring نیست.",
    "introduction": "پوشش سناریوهای موفقیت، عدم موجودی کالا و خطاهای تراکنشی در سرویس سفارش با Mockito و JUnit 5.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "OrderService باید هم نتیجه و هم invariant شکست را حفظ کند. در unit test تصمیم رزرو/پرداخت را با fake یا mock کنترل کن؛ rollback واقعی را فقط با transaction manager و DB تست کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "عدم ذخیره سفارش پس از شکست موجودی را unit-test کن و برگشت موجودی را integration-test کن.",
      "solution": "unit test سبز با mock، اثبات ACID یا صحت annotationهای Spring نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "when(inventory.reserve(sku, 2)).thenReturn(false);\nassertThrows(InsufficientStockException.class, () -> orders.place(request));\nverify(orderRepository, never()).save(any());",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Testing OrderService",
      "explanation": "تجربه Jest را به طراحی تست منتقل کن، اما تفاوت JUnit lifecycle، Mockito و context Spring را بشناس. mock هیچ‌کدام رفتار DB را اثبات نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "unit test سبز با mock، اثبات ACID یا صحت annotationهای Spring نیست.",
        "whyBad": "OrderService باید هم نتیجه و هم invariant شکست را حفظ کند. در unit test تصمیم رزرو/پرداخت را با fake یا mock کنترل کن؛ rollback واقعی را فقط با transaction manager و DB تست کن.",
        "solution": "rollback واقعی PostgreSQL"
      }
    ],
    "bestPractices": [
      "unit test سبز با mock، اثبات ACID یا صحت annotationهای Spring نیست.",
      "عدم ذخیره سفارش پس از شکست موجودی را unit-test کن و برگشت موجودی را integration-test کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "عدم ذخیره سفارش پس از شکست موجودی را unit-test کن و برگشت موجودی را integration-test کن.",
      "acceptanceCriteria": [
        "عدم ذخیره سفارش پس از شکست موجودی را unit-test کن و برگشت موجودی را integration-test کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "unit test سبز با mock، اثبات ACID یا صحت annotationهای Spring نیست."
      ],
      "solution": {
        "code": "when(inventory.reserve(sku, 2)).thenReturn(false);\nassertThrows(InsufficientStockException.class, () -> orders.place(request));\nverify(orderRepository, never()).save(any());",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. rollback واقعی PostgreSQL. unit test سبز با mock، اثبات ACID یا صحت annotationهای Spring نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-082",
        "question": "Mock repository چه چیزی را ثابت نمی‌کند؟",
        "options": [
          "تعداد فراخوانی متد mock",
          "rollback واقعی PostgreSQL",
          "انتخاب شاخه خطای منطق service"
        ],
        "correctIndex": 1,
        "explanation": "rollback واقعی PostgreSQL. OrderService باید هم نتیجه و هم invariant شکست را حفظ کند. در unit test تصمیم رزرو/پرداخت را با fake یا mock کنترل کن؛ rollback واقعی را فقط با transaction manager و DB تست کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: Mock repository چه چیزی را ثابت نمی‌کند؟",
        "answer": "rollback واقعی PostgreSQL. unit test سبز با mock، اثبات ACID یا صحت annotationهای Spring نیست."
      }
    ],
    "summary": "OrderService باید هم نتیجه و هم invariant شکست را حفظ کند. در unit test تصمیم رزرو/پرداخت را با fake یا mock کنترل کن؛ rollback واقعی را فقط با transaction manager و DB تست کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.junit.org/5.11.4/user-guide/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-083",
    "slug": "spring-boot-integration-testing",
    "week": 14,
    "day": 5,
    "title": "تست یکپارچگی کنترلرها با MockMvc و @WebMvcTest",
    "titleEn": "Spring Boot Integration Testing",
    "description": "بررسی لایه وب، اعتبارسنجی DTOها و کدهای وضعیت HTTP بدون بارگذاری کامل کانتینر اسپرینگ.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "MockMvc",
      "WebMvcTest",
      "API Testing"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 13",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "MockMvc الزاماً سرور TCP واقعی اجرا می‌کند",
      "یک درخواست نامعتبر را با MockMvc و یک مسیر واقعی را با پورت تصادفی تست کن؛ تفاوت مرزها را بنویس."
    ],
    "whyItMatters": "package annotationهای test را با نسخه Boot انتخاب کن؛ مهاجرت Boot می‌تواند importها را تغییر دهد.",
    "introduction": "بررسی لایه وب، اعتبارسنجی DTOها و کدهای وضعیت HTTP بدون بارگذاری کامل کانتینر اسپرینگ.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "SpringBootTest context گسترده را می‌سازد؛ برای هر تست کوچک لازم نیست. web test با MockMvc قرارداد servlet را بدون پورت واقعی می‌سنجد؛ RANDOM_PORT یک سرور واقعی محلی می‌خواهد. سطح تست را با هدف هماهنگ کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک درخواست نامعتبر را با MockMvc و یک مسیر واقعی را با پورت تصادفی تست کن؛ تفاوت مرزها را بنویس.",
      "solution": "package annotationهای test را با نسخه Boot انتخاب کن؛ مهاجرت Boot می‌تواند importها را تغییر دهد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@SpringBootTest\n@AutoConfigureMockMvc\nclass OrderHttpTest {\n    @Autowired MockMvc mvc;\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Spring Boot Integration Testing",
      "explanation": "تجربه Jest را به طراحی تست منتقل کن، اما تفاوت JUnit lifecycle، Mockito و context Spring را بشناس. mock هیچ‌کدام رفتار DB را اثبات نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "package annotationهای test را با نسخه Boot انتخاب کن؛ مهاجرت Boot می‌تواند importها را تغییر دهد.",
        "whyBad": "SpringBootTest context گسترده را می‌سازد؛ برای هر تست کوچک لازم نیست. web test با MockMvc قرارداد servlet را بدون پورت واقعی می‌سنجد؛ RANDOM_PORT یک سرور واقعی محلی می‌خواهد. سطح تست را با هدف هماهنگ کن.",
        "solution": "خیر؛ زنجیره MVC را در process تست می‌کند"
      }
    ],
    "bestPractices": [
      "package annotationهای test را با نسخه Boot انتخاب کن؛ مهاجرت Boot می‌تواند importها را تغییر دهد.",
      "یک درخواست نامعتبر را با MockMvc و یک مسیر واقعی را با پورت تصادفی تست کن؛ تفاوت مرزها را بنویس."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک درخواست نامعتبر را با MockMvc و یک مسیر واقعی را با پورت تصادفی تست کن؛ تفاوت مرزها را بنویس.",
      "acceptanceCriteria": [
        "یک درخواست نامعتبر را با MockMvc و یک مسیر واقعی را با پورت تصادفی تست کن؛ تفاوت مرزها را بنویس.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "package annotationهای test را با نسخه Boot انتخاب کن؛ مهاجرت Boot می‌تواند importها را تغییر دهد."
      ],
      "solution": {
        "code": "@SpringBootTest\n@AutoConfigureMockMvc\nclass OrderHttpTest {\n    @Autowired MockMvc mvc;\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ زنجیره MVC را در process تست می‌کند. package annotationهای test را با نسخه Boot انتخاب کن؛ مهاجرت Boot می‌تواند importها را تغییر دهد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-083",
        "question": "MockMvc الزاماً سرور TCP واقعی اجرا می‌کند؟",
        "options": [
          "بله؛ همیشه پورت 8080 را اشغال می‌کند",
          "خیر؛ حتی filterها نیز هرگز اجرا نمی‌شوند",
          "خیر؛ زنجیره MVC را در process تست می‌کند"
        ],
        "correctIndex": 2,
        "explanation": "خیر؛ زنجیره MVC را در process تست می‌کند. SpringBootTest context گسترده را می‌سازد؛ برای هر تست کوچک لازم نیست. web test با MockMvc قرارداد servlet را بدون پورت واقعی می‌سنجد؛ RANDOM_PORT یک سرور واقعی محلی می‌خواهد. سطح تست را با هدف هماهنگ کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: MockMvc الزاماً سرور TCP واقعی اجرا می‌کند؟",
        "answer": "خیر؛ زنجیره MVC را در process تست می‌کند. package annotationهای test را با نسخه Boot انتخاب کن؛ مهاجرت Boot می‌تواند importها را تغییر دهد."
      }
    ],
    "summary": "SpringBootTest context گسترده را می‌سازد؛ برای هر تست کوچک لازم نیست. web test با MockMvc قرارداد servlet را بدون پورت واقعی می‌سنجد؛ RANDOM_PORT یک سرور واقعی محلی می‌خواهد. سطح تست را با هدف هماهنگ کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.junit.org/5.11.4/user-guide/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-084",
    "slug": "code-coverage-and-test-quality",
    "week": 14,
    "day": 6,
    "title": "سنجش پوشش کد (Code Coverage) و معیارهای کیفیت با JaCoCo",
    "titleEn": "Code Coverage and Test Quality",
    "description": "پیکربندی پلاگین JaCoCo در Maven، تحلیل گزارش پوشش شاخه‌ها (Branch Coverage) و تعیین شروط رد شدن بیلد در صورت افت کیفیت.",
    "category": "Testing",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "JaCoCo",
      "Code Coverage",
      "Quality Gates",
      "Maven"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 13",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا ۱۰۰٪ line coverage اثبات صحت است",
      "تست مرز برابر موجودی را بنویس و یک تغییر عمدی > را وارد کن؛ تست باید آن را بگیرد."
    ],
    "whyItMatters": "mock کردن بیش‌ازحد می‌تواند coverage زیاد با اطمینان کم بسازد.",
    "introduction": "پیکربندی پلاگین JaCoCo در Maven، تحلیل گزارش پوشش شاخه‌ها (Branch Coverage) و تعیین شروط رد شدن بیلد در صورت افت کیفیت.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Coverage می‌گوید خط اجرا شده، نه اینکه نتیجه درست سنجیده شده است. branch coverage، assertionهای معنادار و mutation testing تصویر کامل‌تری می‌دهند. تست با ورودی نامعتبر و رقابت را فقط برای درصد حذف نکن."
      }
    ],
    "realWorldScenario": {
      "scenario": "تست مرز برابر موجودی را بنویس و یک تغییر عمدی > را وارد کن؛ تست باید آن را بگیرد.",
      "solution": "mock کردن بیش‌ازحد می‌تواند coverage زیاد با اطمینان کم بسازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Mutation: change available >= requested to available > requested\nExpected: test with available == requested must fail.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Code Coverage and Test Quality",
      "explanation": "تجربه Jest را به طراحی تست منتقل کن، اما تفاوت JUnit lifecycle، Mockito و context Spring را بشناس. mock هیچ‌کدام رفتار DB را اثبات نمی‌کند."
    },
    "commonMistakes": [
      {
        "mistake": "mock کردن بیش‌ازحد می‌تواند coverage زیاد با اطمینان کم بسازد.",
        "whyBad": "Coverage می‌گوید خط اجرا شده، نه اینکه نتیجه درست سنجیده شده است. branch coverage، assertionهای معنادار و mutation testing تصویر کامل‌تری می‌دهند. تست با ورودی نامعتبر و رقابت را فقط برای درصد حذف نکن.",
        "solution": "خیر؛ assertion و سناریوهای حساس مهم‌اند"
      }
    ],
    "bestPractices": [
      "mock کردن بیش‌ازحد می‌تواند coverage زیاد با اطمینان کم بسازد.",
      "تست مرز برابر موجودی را بنویس و یک تغییر عمدی > را وارد کن؛ تست باید آن را بگیرد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "تست مرز برابر موجودی را بنویس و یک تغییر عمدی > را وارد کن؛ تست باید آن را بگیرد.",
      "acceptanceCriteria": [
        "تست مرز برابر موجودی را بنویس و یک تغییر عمدی > را وارد کن؛ تست باید آن را بگیرد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "mock کردن بیش‌ازحد می‌تواند coverage زیاد با اطمینان کم بسازد."
      ],
      "solution": {
        "code": "Mutation: change available >= requested to available > requested\nExpected: test with available == requested must fail.",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ assertion و سناریوهای حساس مهم‌اند. mock کردن بیش‌ازحد می‌تواند coverage زیاد با اطمینان کم بسازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-084",
        "question": "آیا ۱۰۰٪ line coverage اثبات صحت است؟",
        "options": [
          "خیر؛ assertion و سناریوهای حساس مهم‌اند",
          "بله؛ همه خطاهای منطقی حذف شده‌اند",
          "بله؛ دیگر integration test لازم نیست"
        ],
        "correctIndex": 0,
        "explanation": "خیر؛ assertion و سناریوهای حساس مهم‌اند. Coverage می‌گوید خط اجرا شده، نه اینکه نتیجه درست سنجیده شده است. branch coverage، assertionهای معنادار و mutation testing تصویر کامل‌تری می‌دهند. تست با ورودی نامعتبر و رقابت را فقط برای درصد حذف نکن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا ۱۰۰٪ line coverage اثبات صحت است؟",
        "answer": "خیر؛ assertion و سناریوهای حساس مهم‌اند. mock کردن بیش‌ازحد می‌تواند coverage زیاد با اطمینان کم بسازد."
      }
    ],
    "summary": "Coverage می‌گوید خط اجرا شده، نه اینکه نتیجه درست سنجیده شده است. branch coverage، assertionهای معنادار و mutation testing تصویر کامل‌تری می‌دهند. تست با ورودی نامعتبر و رقابت را فقط برای درصد حذف نکن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.junit.org/5.11.4/user-guide/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
