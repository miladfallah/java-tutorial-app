import { Lesson } from "../types";

export const WEEK_26_LESSONS: Lesson[] = [
  {
    "id": "lesson-151",
    "slug": "java-core-interview-review",
    "week": 26,
    "day": 1,
    "title": "مرور تخصصی سوالات فنی مصاحبه در هسته جاوا و ماشین مجازی (JVM)",
    "titleEn": "Java Core Interview Review",
    "description": "بررسی سوالات عمیق مصاحبه‌های مهندسی ارشد جاوا درباره برابری اشیا، حافظه، همروندی، مجموعه‌ها و ژنریک‌ها با پاسخ‌های موشکافانه.",
    "category": "Interviews",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Java Interview",
      "JVM Questions",
      "Senior Engineer Prep"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 25",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "خروجی دو مقایسه نمونه چیست",
      "پیش از اجرا دو خروجی را پیش‌بینی کن؛ سپس کاربرد هر مقایسه در دامنه پول را توضیح بده."
    ],
    "whyItMatters": "قرارداد equals/hashCode باید با keyهای HashMap و مفهوم equality دامنه سازگار باشد.",
    "introduction": "بررسی سوالات عمیق مصاحبه‌های مهندسی ارشد جاوا درباره برابری اشیا، حافظه، همروندی، مجموعه‌ها و ژنریک‌ها با پاسخ‌های موشکافانه.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "مرور Core باید با تحلیل کد انجام شود: equality، generic variance، exception، immutability و JMM. پاسخ حفظی بدون مثال مرزی کافی نیست. برای هر موضوع یک bug کوچک را توضیح و اصلاح کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "پیش از اجرا دو خروجی را پیش‌بینی کن؛ سپس کاربرد هر مقایسه در دامنه پول را توضیح بده.",
      "solution": "قرارداد equals/hashCode باید با keyهای HashMap و مفهوم equality دامنه سازگار باشد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "var a = new BigDecimal(\"1.0\");\nvar b = new BigDecimal(\"1.00\");\nSystem.out.println(a.equals(b));\nSystem.out.println(a.compareTo(b) == 0);",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Java Core Interview Review",
      "explanation": "در پاسخ‌ها تجربه واقعی Node را نقطه شروع قرار بده و تفاوت Java را با مثال توضیح بده؛ برتری مطلق یک پشته را ادعا نکن."
    },
    "commonMistakes": [
      {
        "mistake": "قرارداد equals/hashCode باید با keyهای HashMap و مفهوم equality دامنه سازگار باشد.",
        "whyBad": "مرور Core باید با تحلیل کد انجام شود: equality، generic variance، exception، immutability و JMM. پاسخ حفظی بدون مثال مرزی کافی نیست. برای هر موضوع یک bug کوچک را توضیح و اصلاح کن.",
        "solution": "false سپس true"
      }
    ],
    "bestPractices": [
      "قرارداد equals/hashCode باید با keyهای HashMap و مفهوم equality دامنه سازگار باشد.",
      "پیش از اجرا دو خروجی را پیش‌بینی کن؛ سپس کاربرد هر مقایسه در دامنه پول را توضیح بده."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "پیش از اجرا دو خروجی را پیش‌بینی کن؛ سپس کاربرد هر مقایسه در دامنه پول را توضیح بده.",
      "acceptanceCriteria": [
        "پیش از اجرا دو خروجی را پیش‌بینی کن؛ سپس کاربرد هر مقایسه در دامنه پول را توضیح بده.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "قرارداد equals/hashCode باید با keyهای HashMap و مفهوم equality دامنه سازگار باشد."
      ],
      "solution": {
        "code": "var a = new BigDecimal(\"1.0\");\nvar b = new BigDecimal(\"1.00\");\nSystem.out.println(a.equals(b));\nSystem.out.println(a.compareTo(b) == 0);",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. false سپس true. قرارداد equals/hashCode باید با keyهای HashMap و مفهوم equality دامنه سازگار باشد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-151",
        "question": "خروجی دو مقایسه نمونه چیست؟",
        "options": [
          "true سپس false",
          "false سپس true",
          "هر دو true چون مقدار عددی یکسان است"
        ],
        "correctIndex": 1,
        "explanation": "false سپس true. مرور Core باید با تحلیل کد انجام شود: equality، generic variance، exception، immutability و JMM. پاسخ حفظی بدون مثال مرزی کافی نیست. برای هر موضوع یک bug کوچک را توضیح و اصلاح کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: خروجی دو مقایسه نمونه چیست؟",
        "answer": "false سپس true. قرارداد equals/hashCode باید با keyهای HashMap و مفهوم equality دامنه سازگار باشد."
      }
    ],
    "summary": "مرور Core باید با تحلیل کد انجام شود: equality، generic variance، exception، immutability و JMM. پاسخ حفظی بدون مثال مرزی کافی نیست. برای هر موضوع یک bug کوچک را توضیح و اصلاح کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-152",
    "slug": "spring-and-jpa-interview-review",
    "week": 26,
    "day": 2,
    "title": "مرور سوالات چالشی مصاحبه در حوزه‌های Spring Boot و Hibernate",
    "titleEn": "Spring and JPA Interview Review",
    "description": "پاسخگویی تحلیلی به سوالات پروکسی‌های اسپرینگ، مکانیزم‌های تراکنش، خطای N+1 و تفاوت‌های معماری لایه‌های فریم‌ورک.",
    "category": "Interviews",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Spring Interview",
      "JPA Interview",
      "Hibernate Questions"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 25",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "وجود @Transactional روی inner در نمونه چه تضمینی می‌دهد",
      "self-invocation، N+1 و rollback checked exception را با یک تست برای هرکدام توضیح بده."
    ],
    "whyItMatters": "نام annotation را به جای توضیح مرز و رفتار واقعی پاسخ نده.",
    "introduction": "پاسخگویی تحلیلی به سوالات پروکسی‌های اسپرینگ، مکانیزم‌های تراکنش، خطای N+1 و تفاوت‌های معماری لایه‌های فریم‌ورک.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "مرور Spring/JPA روی مرزهای runtime متمرکز است: proxy، transaction، persistence context و query count. برای هر annotation بگو چه زیرساختی لازم است و چه فراخوانی آن را دور می‌زند."
      }
    ],
    "realWorldScenario": {
      "scenario": "self-invocation، N+1 و rollback checked exception را با یک تست برای هرکدام توضیح بده.",
      "solution": "نام annotation را به جای توضیح مرز و رفتار واقعی پاسخ نده."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "class Example {\n    void outer() { this.inner(); }\n    @Transactional void inner() { /* work */ }\n}\n// Discuss proxy-based invocation before claiming a transaction exists.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Spring and JPA Interview Review",
      "explanation": "در پاسخ‌ها تجربه واقعی Node را نقطه شروع قرار بده و تفاوت Java را با مثال توضیح بده؛ برتری مطلق یک پشته را ادعا نکن."
    },
    "commonMistakes": [
      {
        "mistake": "نام annotation را به جای توضیح مرز و رفتار واقعی پاسخ نده.",
        "whyBad": "مرور Spring/JPA روی مرزهای runtime متمرکز است: proxy، transaction، persistence context و query count. برای هر annotation بگو چه زیرساختی لازم است و چه فراخوانی آن را دور می‌زند.",
        "solution": "به تنهایی عبور از proxy و فعال‌شدن transaction را تضمین نمی‌کند"
      }
    ],
    "bestPractices": [
      "نام annotation را به جای توضیح مرز و رفتار واقعی پاسخ نده.",
      "self-invocation، N+1 و rollback checked exception را با یک تست برای هرکدام توضیح بده."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "self-invocation، N+1 و rollback checked exception را با یک تست برای هرکدام توضیح بده.",
      "acceptanceCriteria": [
        "self-invocation، N+1 و rollback checked exception را با یک تست برای هرکدام توضیح بده.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "نام annotation را به جای توضیح مرز و رفتار واقعی پاسخ نده."
      ],
      "solution": {
        "code": "class Example {\n    void outer() { this.inner(); }\n    @Transactional void inner() { /* work */ }\n}\n// Discuss proxy-based invocation before claiming a transaction exists.",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. به تنهایی عبور از proxy و فعال‌شدن transaction را تضمین نمی‌کند. نام annotation را به جای توضیح مرز و رفتار واقعی پاسخ نده."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-152",
        "question": "وجود @Transactional روی inner در نمونه چه تضمینی می‌دهد؟",
        "options": [
          "همیشه تمام outer را تراکنشی می‌کند",
          "هیچ متدی در Spring نمی‌تواند تراکنشی باشد",
          "به تنهایی عبور از proxy و فعال‌شدن transaction را تضمین نمی‌کند"
        ],
        "correctIndex": 2,
        "explanation": "به تنهایی عبور از proxy و فعال‌شدن transaction را تضمین نمی‌کند. مرور Spring/JPA روی مرزهای runtime متمرکز است: proxy، transaction، persistence context و query count. برای هر annotation بگو چه زیرساختی لازم است و چه فراخوانی آن را دور می‌زند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: وجود @Transactional روی inner در نمونه چه تضمینی می‌دهد؟",
        "answer": "به تنهایی عبور از proxy و فعال‌شدن transaction را تضمین نمی‌کند. نام annotation را به جای توضیح مرز و رفتار واقعی پاسخ نده."
      }
    ],
    "summary": "مرور Spring/JPA روی مرزهای runtime متمرکز است: proxy، transaction، persistence context و query count. برای هر annotation بگو چه زیرساختی لازم است و چه فراخوانی آن را دور می‌زند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-153",
    "slug": "system-design-interview",
    "week": 26,
    "day": 3,
    "title": "شبیه‌سازی مصاحبه طراحی سیستم‌های توزیع‌شده در سطح شرکت‌های بزرگ",
    "titleEn": "System Design Interview",
    "description": "روش‌شناسی گام‌به‌گام ارائه طراحی سیستم در مصاحبه: جمع‌آوری الزامات، تخمین منابع، طراحی سطح بالا و ورود به جزئیات کلیدی.",
    "category": "Interviews",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "System Design Interview",
      "FAANG Style",
      "Architecture Interview"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 25",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "پیش از انتخاب Kafka یا Redis چه لازم است",
      "در ۲۰ دقیقه طراحی رزرو موجودی ارائه بده؛ دو failure و دلیل انتخاب lock یا conditional update را پوشش بده."
    ],
    "whyItMatters": "اعداد تخمینی را فرض بنام و اثر حساسیت آن‌ها را بررسی کن.",
    "introduction": "روش‌شناسی گام‌به‌گام ارائه طراحی سیستم در مصاحبه: جمع‌آوری الزامات، تخمین منابع، طراحی سطح بالا و ورود به جزئیات کلیدی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "در مصاحبه system design ابتدا requirement و عددهای ظرفیت را روشن کن. جریان حیاتی، مدل داده و failureها را پیش از افزودن ابزار بکش. از فرض‌ها دفاع کن و راه ساده‌تر را هم مقایسه کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "در ۲۰ دقیقه طراحی رزرو موجودی ارائه بده؛ دو failure و دلیل انتخاب lock یا conditional update را پوشش بده.",
      "solution": "اعداد تخمینی را فرض بنام و اثر حساسیت آن‌ها را بررسی کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Clarify -> estimate -> API/data model -> critical flow\n-> consistency/failures -> bottlenecks -> observability -> trade-offs",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "System Design Interview",
      "explanation": "در پاسخ‌ها تجربه واقعی Node را نقطه شروع قرار بده و تفاوت Java را با مثال توضیح بده؛ برتری مطلق یک پشته را ادعا نکن."
    },
    "commonMistakes": [
      {
        "mistake": "اعداد تخمینی را فرض بنام و اثر حساسیت آن‌ها را بررسی کن.",
        "whyBad": "در مصاحبه system design ابتدا requirement و عددهای ظرفیت را روشن کن. جریان حیاتی، مدل داده و failureها را پیش از افزودن ابزار بکش. از فرض‌ها دفاع کن و راه ساده‌تر را هم مقایسه کن.",
        "solution": "شناخت مسئله، ظرفیت و ضمانت‌های موردنیاز"
      }
    ],
    "bestPractices": [
      "اعداد تخمینی را فرض بنام و اثر حساسیت آن‌ها را بررسی کن.",
      "در ۲۰ دقیقه طراحی رزرو موجودی ارائه بده؛ دو failure و دلیل انتخاب lock یا conditional update را پوشش بده."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "در ۲۰ دقیقه طراحی رزرو موجودی ارائه بده؛ دو failure و دلیل انتخاب lock یا conditional update را پوشش بده.",
      "acceptanceCriteria": [
        "در ۲۰ دقیقه طراحی رزرو موجودی ارائه بده؛ دو failure و دلیل انتخاب lock یا conditional update را پوشش بده.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "اعداد تخمینی را فرض بنام و اثر حساسیت آن‌ها را بررسی کن."
      ],
      "solution": {
        "code": "Clarify -> estimate -> API/data model -> critical flow\n-> consistency/failures -> bottlenecks -> observability -> trade-offs",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. شناخت مسئله، ظرفیت و ضمانت‌های موردنیاز. اعداد تخمینی را فرض بنام و اثر حساسیت آن‌ها را بررسی کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-153",
        "question": "پیش از انتخاب Kafka یا Redis چه لازم است؟",
        "options": [
          "شناخت مسئله، ظرفیت و ضمانت‌های موردنیاز",
          "فقط شمارش اسم ابزارها",
          "ساختن ده microservice مستقل از نیاز"
        ],
        "correctIndex": 0,
        "explanation": "شناخت مسئله، ظرفیت و ضمانت‌های موردنیاز. در مصاحبه system design ابتدا requirement و عددهای ظرفیت را روشن کن. جریان حیاتی، مدل داده و failureها را پیش از افزودن ابزار بکش. از فرض‌ها دفاع کن و راه ساده‌تر را هم مقایسه کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: پیش از انتخاب Kafka یا Redis چه لازم است؟",
        "answer": "شناخت مسئله، ظرفیت و ضمانت‌های موردنیاز. اعداد تخمینی را فرض بنام و اثر حساسیت آن‌ها را بررسی کن."
      }
    ],
    "summary": "در مصاحبه system design ابتدا requirement و عددهای ظرفیت را روشن کن. جریان حیاتی، مدل داده و failureها را پیش از افزودن ابزار بکش. از فرض‌ها دفاع کن و راه ساده‌تر را هم مقایسه کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-154",
    "slug": "completing-the-capstone-readme-and-project",
    "week": 26,
    "day": 4,
    "title": "نهایی‌سازی سند README و بسته‌بندی پروژه محوری مدیریت سفارشات (پروژه محوری)",
    "titleEn": "Completing the Capstone README and Project",
    "description": "نگارش گزارش جامع فنی معماری، مستندات اجرای لوکال با داکر، نمودارهای جریان داده و ارائه به عنوان نمونه‌کار حرفه‌ای در رزومه.",
    "category": "Interviews",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Portfolio",
      "Technical Documentation",
      "Architecture Portfolio"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 25",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "README قابل اعتماد چه ویژگی دارد",
      "از checkout تازه، README را قدم‌به‌قدم اجرا کن؛ هر فرمان یا مسیر خراب را اصلاح کن."
    ],
    "whyItMatters": "کد نمونه آموزشی را بدون threat model و تست production معرفی نکن.",
    "introduction": "نگارش گزارش جامع فنی معماری، مستندات اجرای لوکال با داکر، نمودارهای جریان داده و ارائه به عنوان نمونه‌کار حرفه‌ای در رزومه.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "README پروژه باید مسیر اجرای قابل تکرار، داده آزمایشی، API، تست و محدودیت‌های واقعی داشته باشد. ادعای JWT، relay outbox یا CI فقط وقتی مجاز است که همان قابلیت پیاده و بررسی شده باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "از checkout تازه، README را قدم‌به‌قدم اجرا کن؛ هر فرمان یا مسیر خراب را اصلاح کن.",
      "solution": "کد نمونه آموزشی را بدون threat model و تست production معرفی نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "markdown",
        "code": "# Local run\nPrerequisites: Docker; JDK 25 for local Java commands\nCommands: build, test, start, stop\nDocument: sample requests, credentials, migrations, known limitations",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Completing the Capstone README and Project",
      "explanation": "در پاسخ‌ها تجربه واقعی Node را نقطه شروع قرار بده و تفاوت Java را با مثال توضیح بده؛ برتری مطلق یک پشته را ادعا نکن."
    },
    "commonMistakes": [
      {
        "mistake": "کد نمونه آموزشی را بدون threat model و تست production معرفی نکن.",
        "whyBad": "README پروژه باید مسیر اجرای قابل تکرار، داده آزمایشی، API، تست و محدودیت‌های واقعی داشته باشد. ادعای JWT، relay outbox یا CI فقط وقتی مجاز است که همان قابلیت پیاده و بررسی شده باشد.",
        "solution": "فرمان‌های اجراشده و محدودیت‌های صریح"
      }
    ],
    "bestPractices": [
      "کد نمونه آموزشی را بدون threat model و تست production معرفی نکن.",
      "از checkout تازه، README را قدم‌به‌قدم اجرا کن؛ هر فرمان یا مسیر خراب را اصلاح کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "از checkout تازه، README را قدم‌به‌قدم اجرا کن؛ هر فرمان یا مسیر خراب را اصلاح کن.",
      "acceptanceCriteria": [
        "از checkout تازه، README را قدم‌به‌قدم اجرا کن؛ هر فرمان یا مسیر خراب را اصلاح کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "کد نمونه آموزشی را بدون threat model و تست production معرفی نکن."
      ],
      "solution": {
        "code": "# Local run\nPrerequisites: Docker; JDK 25 for local Java commands\nCommands: build, test, start, stop\nDocument: sample requests, credentials, migrations, known limitations",
        "language": "markdown",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. فرمان‌های اجراشده و محدودیت‌های صریح. کد نمونه آموزشی را بدون threat model و تست production معرفی نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-154",
        "question": "README قابل اعتماد چه ویژگی دارد؟",
        "options": [
          "فقط فهرست تکنولوژی‌های برنامه‌ریزی‌شده",
          "فرمان‌های اجراشده و محدودیت‌های صریح",
          "پنهان‌کردن تست‌های شکست‌خورده"
        ],
        "correctIndex": 1,
        "explanation": "فرمان‌های اجراشده و محدودیت‌های صریح. README پروژه باید مسیر اجرای قابل تکرار، داده آزمایشی، API، تست و محدودیت‌های واقعی داشته باشد. ادعای JWT، relay outbox یا CI فقط وقتی مجاز است که همان قابلیت پیاده و بررسی شده باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: README قابل اعتماد چه ویژگی دارد؟",
        "answer": "فرمان‌های اجراشده و محدودیت‌های صریح. کد نمونه آموزشی را بدون threat model و تست production معرفی نکن."
      }
    ],
    "summary": "README پروژه باید مسیر اجرای قابل تکرار، داده آزمایشی، API، تست و محدودیت‌های واقعی داشته باشد. ادعای JWT، relay outbox یا CI فقط وقتی مجاز است که همان قابلیت پیاده و بررسی شده باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-155",
    "slug": "database-and-concurrency-interview",
    "week": 26,
    "day": 5,
    "title": "مرور مصاحبه فنی پایگاه داده، تراکنش‌ها، ایندکس‌ها و همروندی سیستم",
    "titleEn": "Database and Concurrency Interview",
    "description": "تسلط بر پاسخ به سناریوهای تضاد همروندی، سطوح ایزولاسیون، بهینه‌سازی کوئری‌های سنگین و حل بن‌بست‌های بانکی.",
    "category": "Interviews",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Database Interview",
      "Concurrency Interview",
      "SQL Tuning"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 25",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا synchronized کافی نیست",
      "دو connection روی موجودی یک بساز؛ affected rowها، rollback و retry کل تراکنش را توضیح بده."
    ],
    "whyItMatters": "تست thread همزمان در یک process، سناریوی چند instance با اتصال مستقل را جایگزین نمی‌کند.",
    "introduction": "تسلط بر پاسخ به سناریوهای تضاد همروندی، سطوح ایزولاسیون، بهینه‌سازی کوئری‌های سنگین و حل بن‌بست‌های بانکی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "مسئله موجودی آخرین کالا آزمون خوبی برای DB و concurrency است. راهکار باید در چند instance هم کار کند؛ lock حافظه JVM کافی نیست. rollback، deadlock و duplicate request را در پاسخ لحاظ کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو connection روی موجودی یک بساز؛ affected rowها، rollback و retry کل تراکنش را توضیح بده.",
      "solution": "تست thread همزمان در یک process، سناریوی چند instance با اتصال مستقل را جایگزین نمی‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "sql",
        "code": "UPDATE inventory SET available_quantity=available_quantity-1\nWHERE product_id=:id AND available_quantity>=1;",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Database and Concurrency Interview",
      "explanation": "در پاسخ‌ها تجربه واقعی Node را نقطه شروع قرار بده و تفاوت Java را با مثال توضیح بده؛ برتری مطلق یک پشته را ادعا نکن."
    },
    "commonMistakes": [
      {
        "mistake": "تست thread همزمان در یک process، سناریوی چند instance با اتصال مستقل را جایگزین نمی‌کند.",
        "whyBad": "مسئله موجودی آخرین کالا آزمون خوبی برای DB و concurrency است. راهکار باید در چند instance هم کار کند؛ lock حافظه JVM کافی نیست. rollback، deadlock و duplicate request را در پاسخ لحاظ کن.",
        "solution": "بین JVMهای مختلف مشترک نیست"
      }
    ],
    "bestPractices": [
      "تست thread همزمان در یک process، سناریوی چند instance با اتصال مستقل را جایگزین نمی‌کند.",
      "دو connection روی موجودی یک بساز؛ affected rowها، rollback و retry کل تراکنش را توضیح بده."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو connection روی موجودی یک بساز؛ affected rowها، rollback و retry کل تراکنش را توضیح بده.",
      "acceptanceCriteria": [
        "دو connection روی موجودی یک بساز؛ affected rowها، rollback و retry کل تراکنش را توضیح بده.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "تست thread همزمان در یک process، سناریوی چند instance با اتصال مستقل را جایگزین نمی‌کند."
      ],
      "solution": {
        "code": "UPDATE inventory SET available_quantity=available_quantity-1\nWHERE product_id=:id AND available_quantity>=1;",
        "language": "sql",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. بین JVMهای مختلف مشترک نیست. تست thread همزمان در یک process، سناریوی چند instance با اتصال مستقل را جایگزین نمی‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-155",
        "question": "چرا synchronized کافی نیست؟",
        "options": [
          "هیچ عملیات حافظه‌ای را محافظت نمی‌کند",
          "چون PostgreSQL از integer پشتیبانی نمی‌کند",
          "بین JVMهای مختلف مشترک نیست"
        ],
        "correctIndex": 2,
        "explanation": "بین JVMهای مختلف مشترک نیست. مسئله موجودی آخرین کالا آزمون خوبی برای DB و concurrency است. راهکار باید در چند instance هم کار کند؛ lock حافظه JVM کافی نیست. rollback، deadlock و duplicate request را در پاسخ لحاظ کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا synchronized کافی نیست؟",
        "answer": "بین JVMهای مختلف مشترک نیست. تست thread همزمان در یک process، سناریوی چند instance با اتصال مستقل را جایگزین نمی‌کند."
      }
    ],
    "summary": "مسئله موجودی آخرین کالا آزمون خوبی برای DB و concurrency است. راهکار باید در چند instance هم کار کند؛ lock حافظه JVM کافی نیست. rollback، deadlock و duplicate request را در پاسخ لحاظ کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-156",
    "slug": "devops-review-and-final-assessment",
    "week": 26,
    "day": 6,
    "title": "ارزیابی نهایی جامع مهندسی دواپس و جشن فارغ‌التحصیلی آکادمی",
    "titleEn": "DevOps Review and Final Assessment",
    "description": "سنجش پایانی دانش ۲۶ هفته‌ای، مرور مسیر رشد از مهندس NestJS به مهندس ارشد Java-first و نقشه راه پیشرفت شغلی بین‌المللی.",
    "category": "Interviews",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Final Assessment",
      "Graduation",
      "Career Growth",
      "Senior Backend Engineer"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 25",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "معیار پایان مسیر چیست",
      "یک گزارش اجرای نهایی با نتیجه هر مرحله و محدودیت‌ها بساز؛ مرحله اجرا‌نشده را پاس‌شده اعلام نکن."
    ],
    "whyItMatters": "پس از دوره، ضعف مشخص را با تمرین هدفمند ادامه بده؛ تعداد درس معادل سطح شغلی تضمینی نیست.",
    "introduction": "سنجش پایانی دانش ۲۶ هفته‌ای، مرور مسیر رشد از مهندس NestJS به مهندس ارشد Java-first و نقشه راه پیشرفت شغلی بین‌المللی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "ارزیابی نهایی را بر اجرای کار بسنج: از checkout تا deploy محلی، تست API و عیب‌یابی یک failure. «خوانده‌شده» با «مهارت اثبات‌شده» یکی نیست. شکاف‌های باقی‌مانده را به تمرین بعدی تبدیل کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک گزارش اجرای نهایی با نتیجه هر مرحله و محدودیت‌ها بساز؛ مرحله اجرا‌نشده را پاس‌شده اعلام نکن.",
      "solution": "پس از دوره، ضعف مشخص را با تمرین هدفمند ادامه بده؛ تعداد درس معادل سطح شغلی تضمینی نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Final exercise:\n1. Build and run from a fresh checkout.\n2. Create/read an order and reject invalid/unauthorized requests.\n3. Demonstrate rollback and concurrent reservation.\n4. Explain one failure using logs/metrics.\n5. Restore a backup into a separate DB.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "DevOps Review and Final Assessment",
      "explanation": "در پاسخ‌ها تجربه واقعی Node را نقطه شروع قرار بده و تفاوت Java را با مثال توضیح بده؛ برتری مطلق یک پشته را ادعا نکن."
    },
    "commonMistakes": [
      {
        "mistake": "پس از دوره، ضعف مشخص را با تمرین هدفمند ادامه بده؛ تعداد درس معادل سطح شغلی تضمینی نیست.",
        "whyBad": "ارزیابی نهایی را بر اجرای کار بسنج: از checkout تا deploy محلی، تست API و عیب‌یابی یک failure. «خوانده‌شده» با «مهارت اثبات‌شده» یکی نیست. شکاف‌های باقی‌مانده را به تمرین بعدی تبدیل کن.",
        "solution": "توانایی ساخت، تست، توضیح و عیب‌یابی رفتار واقعی"
      }
    ],
    "bestPractices": [
      "پس از دوره، ضعف مشخص را با تمرین هدفمند ادامه بده؛ تعداد درس معادل سطح شغلی تضمینی نیست.",
      "یک گزارش اجرای نهایی با نتیجه هر مرحله و محدودیت‌ها بساز؛ مرحله اجرا‌نشده را پاس‌شده اعلام نکن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک گزارش اجرای نهایی با نتیجه هر مرحله و محدودیت‌ها بساز؛ مرحله اجرا‌نشده را پاس‌شده اعلام نکن.",
      "acceptanceCriteria": [
        "یک گزارش اجرای نهایی با نتیجه هر مرحله و محدودیت‌ها بساز؛ مرحله اجرا‌نشده را پاس‌شده اعلام نکن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "پس از دوره، ضعف مشخص را با تمرین هدفمند ادامه بده؛ تعداد درس معادل سطح شغلی تضمینی نیست."
      ],
      "solution": {
        "code": "Final exercise:\n1. Build and run from a fresh checkout.\n2. Create/read an order and reject invalid/unauthorized requests.\n3. Demonstrate rollback and concurrent reservation.\n4. Explain one failure using logs/metrics.\n5. Restore a backup into a separate DB.",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. توانایی ساخت، تست، توضیح و عیب‌یابی رفتار واقعی. پس از دوره، ضعف مشخص را با تمرین هدفمند ادامه بده؛ تعداد درس معادل سطح شغلی تضمینی نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-156",
        "question": "معیار پایان مسیر چیست؟",
        "options": [
          "توانایی ساخت، تست، توضیح و عیب‌یابی رفتار واقعی",
          "صرفاً تکمیل ۱۵۶ checkbox",
          "حفظ نام همه annotationها"
        ],
        "correctIndex": 0,
        "explanation": "توانایی ساخت، تست، توضیح و عیب‌یابی رفتار واقعی. ارزیابی نهایی را بر اجرای کار بسنج: از checkout تا deploy محلی، تست API و عیب‌یابی یک failure. «خوانده‌شده» با «مهارت اثبات‌شده» یکی نیست. شکاف‌های باقی‌مانده را به تمرین بعدی تبدیل کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: معیار پایان مسیر چیست؟",
        "answer": "توانایی ساخت، تست، توضیح و عیب‌یابی رفتار واقعی. پس از دوره، ضعف مشخص را با تمرین هدفمند ادامه بده؛ تعداد درس معادل سطح شغلی تضمینی نیست."
      }
    ],
    "summary": "ارزیابی نهایی را بر اجرای کار بسنج: از checkout تا deploy محلی، تست API و عیب‌یابی یک failure. «خوانده‌شده» با «مهارت اثبات‌شده» یکی نیست. شکاف‌های باقی‌مانده را به تمرین بعدی تبدیل کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://dev.java/learn/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
