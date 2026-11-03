import { Lesson } from "../types";

export const WEEK_05_LESSONS: Lesson[] = [
  {
    "id": "lesson-025",
    "slug": "inversion-of-control-and-dependency-injection",
    "week": 5,
    "day": 1,
    "title": "وارونگی کنترل (IoC) و تزریق وابستگی (DI) در فریم‌ورک Spring",
    "titleEn": "Inversion of Control and Dependency Injection",
    "description": "مقایسه مفهومی IoC Container اسپرینگ با سیستم تزریق وابستگی NestJS، مکانیزم Component Scanning و بهترین شیوه تزریق با Constructor Injection.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "IoC",
      "Dependency Injection",
      "Spring vs NestJS",
      "ApplicationContext",
      "Beans"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 4",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "مزیت constructor injection چیست",
      "CheckoutService را با یک fake از PaymentPort بدون Spring بساز؛ سپس همان قرارداد را به bean متصل کن."
    ],
    "whyItMatters": "field injection وابستگی پنهان و ساخت مستقل برای تست را دشوار می‌کند.",
    "introduction": "مقایسه مفهومی IoC Container اسپرینگ با سیستم تزریق وابستگی NestJS، مکانیزم Component Scanning و بهترین شیوه تزریق با Constructor Injection.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "در DI، ساخت و اتصال وابستگی‌ها از منطق سرویس جدا می‌شود. Constructor injection وابستگی اجباری را آشکار می‌کند و تست بدون container را ساده می‌سازد. Spring singleton در هر ApplicationContext است، نه singleton سراسری شبکه."
      }
    ],
    "realWorldScenario": {
      "scenario": "CheckoutService را با یک fake از PaymentPort بدون Spring بساز؛ سپس همان قرارداد را به bean متصل کن.",
      "solution": "field injection وابستگی پنهان و ساخت مستقل برای تست را دشوار می‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Service\nclass CheckoutService {\n    private final PaymentPort payments;\n    CheckoutService(PaymentPort payments) { this.payments = payments; }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Inversion of Control and Dependency Injection",
      "explanation": "Constructor injection در Nest آشناست؛ تفاوت مهم اینجا scope هر ApplicationContext و عبور از proxyهای Spring است. annotation فقط با زیرساخت فعال معنا دارد."
    },
    "commonMistakes": [
      {
        "mistake": "field injection وابستگی پنهان و ساخت مستقل برای تست را دشوار می‌کند.",
        "whyBad": "در DI، ساخت و اتصال وابستگی‌ها از منطق سرویس جدا می‌شود. Constructor injection وابستگی اجباری را آشکار می‌کند و تست بدون container را ساده می‌سازد. Spring singleton در هر ApplicationContext است، نه singleton سراسری شبکه.",
        "solution": "وابستگی اجباری آشکار و تست ساده‌تر"
      }
    ],
    "bestPractices": [
      "field injection وابستگی پنهان و ساخت مستقل برای تست را دشوار می‌کند.",
      "CheckoutService را با یک fake از PaymentPort بدون Spring بساز؛ سپس همان قرارداد را به bean متصل کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "CheckoutService را با یک fake از PaymentPort بدون Spring بساز؛ سپس همان قرارداد را به bean متصل کن.",
      "acceptanceCriteria": [
        "CheckoutService را با یک fake از PaymentPort بدون Spring بساز؛ سپس همان قرارداد را به bean متصل کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "field injection وابستگی پنهان و ساخت مستقل برای تست را دشوار می‌کند."
      ],
      "solution": {
        "code": "@Service\nclass CheckoutService {\n    private final PaymentPort payments;\n    CheckoutService(PaymentPort payments) { this.payments = payments; }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. وابستگی اجباری آشکار و تست ساده‌تر. field injection وابستگی پنهان و ساخت مستقل برای تست را دشوار می‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-025",
        "question": "مزیت constructor injection چیست؟",
        "options": [
          "تضمین thread safety تمام فیلدها",
          "وابستگی اجباری آشکار و تست ساده‌تر",
          "ساخت یک instance در کل cluster"
        ],
        "correctIndex": 1,
        "explanation": "وابستگی اجباری آشکار و تست ساده‌تر. در DI، ساخت و اتصال وابستگی‌ها از منطق سرویس جدا می‌شود. Constructor injection وابستگی اجباری را آشکار می‌کند و تست بدون container را ساده می‌سازد. Spring singleton در هر ApplicationContext است، نه singleton سراسری شبکه."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: مزیت constructor injection چیست؟",
        "answer": "وابستگی اجباری آشکار و تست ساده‌تر. field injection وابستگی پنهان و ساخت مستقل برای تست را دشوار می‌کند."
      }
    ],
    "summary": "در DI، ساخت و اتصال وابستگی‌ها از منطق سرویس جدا می‌شود. Constructor injection وابستگی اجباری را آشکار می‌کند و تست بدون container را ساده می‌سازد. Spring singleton در هر ApplicationContext است، نه singleton سراسری شبکه.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/features/external-config.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-026",
    "slug": "bean-lifecycle-and-configuration",
    "week": 5,
    "day": 2,
    "title": "چرخه حیات Beanها، Scopes و کلاس‌های پیکربندی @Configuration",
    "titleEn": "Bean Lifecycle and Configuration",
    "description": "بررسی فازهای ساخت، مقداردهی (@PostConstruct)، اسکوپ‌های Singleton و Prototype و تعریف صریح اشیا با متدهای @Bean.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Bean Lifecycle",
      "Configuration",
      "Singleton Scope",
      "PostConstruct",
      "PreDestroy"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 4",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کدام مورد گزینه مناسب @Bean است",
      "Clock را bean کن و در تست Clock.fixed جایگزین کن؛ constructor نباید شبکه را صدا بزند."
    ],
    "whyItMatters": "prototype داخل singleton با تزریق معمول، در هر فراخوانی خودکار دوباره ساخته نمی‌شود.",
    "introduction": "بررسی فازهای ساخت، مقداردهی (@PostConstruct)، اسکوپ‌های Singleton و Prototype و تعریف صریح اشیا با متدهای @Bean.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Spring پس از ساخت bean، وابستگی‌ها را متصل و callbackهای lifecycle را اجرا می‌کند. @Bean برای اشیای کتابخانه بیرونی مناسب است. کاری مثل migration یا تماس شبکه نامحدود در constructor شروع سرویس را شکننده می‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "Clock را bean کن و در تست Clock.fixed جایگزین کن؛ constructor نباید شبکه را صدا بزند.",
      "solution": "prototype داخل singleton با تزریق معمول، در هر فراخوانی خودکار دوباره ساخته نمی‌شود."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Configuration\nclass TimeConfig {\n    @Bean Clock clock() { return Clock.systemUTC(); }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Bean Lifecycle and Configuration",
      "explanation": "Constructor injection در Nest آشناست؛ تفاوت مهم اینجا scope هر ApplicationContext و عبور از proxyهای Spring است. annotation فقط با زیرساخت فعال معنا دارد."
    },
    "commonMistakes": [
      {
        "mistake": "prototype داخل singleton با تزریق معمول، در هر فراخوانی خودکار دوباره ساخته نمی‌شود.",
        "whyBad": "Spring پس از ساخت bean، وابستگی‌ها را متصل و callbackهای lifecycle را اجرا می‌کند. @Bean برای اشیای کتابخانه بیرونی مناسب است. کاری مثل migration یا تماس شبکه نامحدود در constructor شروع سرویس را شکننده می‌کند.",
        "solution": "ساخت وابستگی third-party با تنظیمات مشخص"
      }
    ],
    "bestPractices": [
      "prototype داخل singleton با تزریق معمول، در هر فراخوانی خودکار دوباره ساخته نمی‌شود.",
      "Clock را bean کن و در تست Clock.fixed جایگزین کن؛ constructor نباید شبکه را صدا بزند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "Clock را bean کن و در تست Clock.fixed جایگزین کن؛ constructor نباید شبکه را صدا بزند.",
      "acceptanceCriteria": [
        "Clock را bean کن و در تست Clock.fixed جایگزین کن؛ constructor نباید شبکه را صدا بزند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "prototype داخل singleton با تزریق معمول، در هر فراخوانی خودکار دوباره ساخته نمی‌شود."
      ],
      "solution": {
        "code": "@Configuration\nclass TimeConfig {\n    @Bean Clock clock() { return Clock.systemUTC(); }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ساخت وابستگی third-party با تنظیمات مشخص. prototype داخل singleton با تزریق معمول، در هر فراخوانی خودکار دوباره ساخته نمی‌شود."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-026",
        "question": "کدام مورد گزینه مناسب @Bean است؟",
        "options": [
          "اجرای تمام queryها در constructor هر request",
          "ذخیره state مشترک کاربر در singleton",
          "ساخت وابستگی third-party با تنظیمات مشخص"
        ],
        "correctIndex": 2,
        "explanation": "ساخت وابستگی third-party با تنظیمات مشخص. Spring پس از ساخت bean، وابستگی‌ها را متصل و callbackهای lifecycle را اجرا می‌کند. @Bean برای اشیای کتابخانه بیرونی مناسب است. کاری مثل migration یا تماس شبکه نامحدود در constructor شروع سرویس را شکننده می‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کدام مورد گزینه مناسب @Bean است؟",
        "answer": "ساخت وابستگی third-party با تنظیمات مشخص. prototype داخل singleton با تزریق معمول، در هر فراخوانی خودکار دوباره ساخته نمی‌شود."
      }
    ],
    "summary": "Spring پس از ساخت bean، وابستگی‌ها را متصل و callbackهای lifecycle را اجرا می‌کند. @Bean برای اشیای کتابخانه بیرونی مناسب است. کاری مثل migration یا تماس شبکه نامحدود در constructor شروع سرویس را شکننده می‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/features/external-config.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-027",
    "slug": "dependency-inversion-principle-spring",
    "week": 5,
    "day": 3,
    "title": "اصل وارونگی وابستگی (DIP) و ایجاد مرزهای سست میان کامپوننت‌ها",
    "titleEn": "Dependency Inversion Principle",
    "description": "جداسازی تعاریف رفتار (Interface) از نحوه اجرای آن در ماژول‌های اسپرینگ، بهره‌گیری از @Qualifier و پروفایل‌ها جهت پیاده‌سازی چندگانه سرویس‌ها.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "DIP",
      "Interfaces",
      "Qualifier",
      "Loose Coupling",
      "Design Patterns"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 4",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا port دامنه باید JpaRepository را extend کند",
      "یک adapter حافظه‌ای برای StockPort و تست use case بدون Spring بنویس."
    ],
    "whyItMatters": "مرز معماری را با تعداد packageها نسنج؛ جهت dependency مهم است.",
    "introduction": "جداسازی تعاریف رفتار (Interface) از نحوه اجرای آن در ماژول‌های اسپرینگ، بهره‌گیری از @Qualifier و پروفایل‌ها جهت پیاده‌سازی چندگانه سرویس‌ها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Dependency inversion می‌گوید سیاست دامنه نباید به جزئیات persistence وابسته باشد. port را با زبان نیاز دامنه تعریف کن؛ adapter آن را با JPA پیاده کند. لازم نیست تمام CRUD یک ORM به هسته نشت کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک adapter حافظه‌ای برای StockPort و تست use case بدون Spring بنویس.",
      "solution": "مرز معماری را با تعداد packageها نسنج؛ جهت dependency مهم است."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "interface StockPort { boolean reserve(String sku, int quantity); }\nfinal class PlaceOrder {\n    private final StockPort stock;\n    PlaceOrder(StockPort stock) { this.stock = stock; }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Dependency Inversion Principle",
      "explanation": "Constructor injection در Nest آشناست؛ تفاوت مهم اینجا scope هر ApplicationContext و عبور از proxyهای Spring است. annotation فقط با زیرساخت فعال معنا دارد."
    },
    "commonMistakes": [
      {
        "mistake": "مرز معماری را با تعداد packageها نسنج؛ جهت dependency مهم است.",
        "whyBad": "Dependency inversion می‌گوید سیاست دامنه نباید به جزئیات persistence وابسته باشد. port را با زبان نیاز دامنه تعریف کن؛ adapter آن را با JPA پیاده کند. لازم نیست تمام CRUD یک ORM به هسته نشت کند.",
        "solution": "نه؛ قرارداد دامنه از ORM مستقل بماند"
      }
    ],
    "bestPractices": [
      "مرز معماری را با تعداد packageها نسنج؛ جهت dependency مهم است.",
      "یک adapter حافظه‌ای برای StockPort و تست use case بدون Spring بنویس."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک adapter حافظه‌ای برای StockPort و تست use case بدون Spring بنویس.",
      "acceptanceCriteria": [
        "یک adapter حافظه‌ای برای StockPort و تست use case بدون Spring بنویس.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "مرز معماری را با تعداد packageها نسنج؛ جهت dependency مهم است."
      ],
      "solution": {
        "code": "interface StockPort { boolean reserve(String sku, int quantity); }\nfinal class PlaceOrder {\n    private final StockPort stock;\n    PlaceOrder(StockPort stock) { this.stock = stock; }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. نه؛ قرارداد دامنه از ORM مستقل بماند. مرز معماری را با تعداد packageها نسنج؛ جهت dependency مهم است."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-027",
        "question": "آیا port دامنه باید JpaRepository را extend کند؟",
        "options": [
          "نه؛ قرارداد دامنه از ORM مستقل بماند",
          "بله؛ وگرنه Spring هیچ bean نمی‌سازد",
          "فقط اگر controller مستقیماً DB را صدا بزند"
        ],
        "correctIndex": 0,
        "explanation": "نه؛ قرارداد دامنه از ORM مستقل بماند. Dependency inversion می‌گوید سیاست دامنه نباید به جزئیات persistence وابسته باشد. port را با زبان نیاز دامنه تعریف کن؛ adapter آن را با JPA پیاده کند. لازم نیست تمام CRUD یک ORM به هسته نشت کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا port دامنه باید JpaRepository را extend کند؟",
        "answer": "نه؛ قرارداد دامنه از ORM مستقل بماند. مرز معماری را با تعداد packageها نسنج؛ جهت dependency مهم است."
      }
    ],
    "summary": "Dependency inversion می‌گوید سیاست دامنه نباید به جزئیات persistence وابسته باشد. port را با زبان نیاز دامنه تعریف کن؛ adapter آن را با JPA پیاده کند. لازم نیست تمام CRUD یک ORM به هسته نشت کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/features/external-config.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-028",
    "slug": "creating-spring-boot-application",
    "week": 5,
    "day": 4,
    "title": "ایجاد سرویس میکروسرویس با Spring Boot و کاوش درون Auto-configuration",
    "titleEn": "Creating a Spring Boot Application",
    "description": "تحلیل انوتیشن جادویی @SpringBootApplication، نحوه کار فایلهای Auto-configuration و راه‌اندازی سورس پروژه محوری مدیریت سفارشات.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Spring Boot",
      "Auto-configuration",
      "SpringBootApplication",
      "Embedded Tomcat"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 4",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "محل مناسب کلاس اصلی کجاست",
      "یک endpoint سلامت ساده بساز؛ با --debug دلیل فعال‌شدن auto-configuration وب را پیدا کن."
    ],
    "whyItMatters": "ساخت پروژه از initializer به معنی درست‌بودن نسخه‌های دستی و dependencyهای ناسازگار نیست.",
    "introduction": "تحلیل انوتیشن جادویی @SpringBootApplication، نحوه کار فایلهای Auto-configuration و راه‌اندازی سورس پروژه محوری مدیریت سفارشات.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Boot تنظیمات متداول را براساس classpath و شرایط فعال می‌کند؛ magic بدون قاعده نیست. کلاس اصلی در package ریشه component scan باشد. وقتی auto-configuration چیزی را نساخت، گزارش conditions را بررسی کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک endpoint سلامت ساده بساز؛ با --debug دلیل فعال‌شدن auto-configuration وب را پیدا کن.",
      "solution": "ساخت پروژه از initializer به معنی درست‌بودن نسخه‌های دستی و dependencyهای ناسازگار نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@SpringBootApplication\npublic class OrderApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderApplication.class, args);\n    }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Creating a Spring Boot Application",
      "explanation": "Constructor injection در Nest آشناست؛ تفاوت مهم اینجا scope هر ApplicationContext و عبور از proxyهای Spring است. annotation فقط با زیرساخت فعال معنا دارد."
    },
    "commonMistakes": [
      {
        "mistake": "ساخت پروژه از initializer به معنی درست‌بودن نسخه‌های دستی و dependencyهای ناسازگار نیست.",
        "whyBad": "Boot تنظیمات متداول را براساس classpath و شرایط فعال می‌کند؛ magic بدون قاعده نیست. کلاس اصلی در package ریشه component scan باشد. وقتی auto-configuration چیزی را نساخت، گزارش conditions را بررسی کن.",
        "solution": "package ریشه مشترک componentها"
      }
    ],
    "bestPractices": [
      "ساخت پروژه از initializer به معنی درست‌بودن نسخه‌های دستی و dependencyهای ناسازگار نیست.",
      "یک endpoint سلامت ساده بساز؛ با --debug دلیل فعال‌شدن auto-configuration وب را پیدا کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک endpoint سلامت ساده بساز؛ با --debug دلیل فعال‌شدن auto-configuration وب را پیدا کن.",
      "acceptanceCriteria": [
        "یک endpoint سلامت ساده بساز؛ با --debug دلیل فعال‌شدن auto-configuration وب را پیدا کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "ساخت پروژه از initializer به معنی درست‌بودن نسخه‌های دستی و dependencyهای ناسازگار نیست."
      ],
      "solution": {
        "code": "@SpringBootApplication\npublic class OrderApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderApplication.class, args);\n    }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. package ریشه مشترک componentها. ساخت پروژه از initializer به معنی درست‌بودن نسخه‌های دستی و dependencyهای ناسازگار نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-028",
        "question": "محل مناسب کلاس اصلی کجاست؟",
        "options": [
          "داخل package تصادفی خارج از سرویس‌ها",
          "package ریشه مشترک componentها",
          "فقط کنار pom.xml بدون package"
        ],
        "correctIndex": 1,
        "explanation": "package ریشه مشترک componentها. Boot تنظیمات متداول را براساس classpath و شرایط فعال می‌کند؛ magic بدون قاعده نیست. کلاس اصلی در package ریشه component scan باشد. وقتی auto-configuration چیزی را نساخت، گزارش conditions را بررسی کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: محل مناسب کلاس اصلی کجاست؟",
        "answer": "package ریشه مشترک componentها. ساخت پروژه از initializer به معنی درست‌بودن نسخه‌های دستی و dependencyهای ناسازگار نیست."
      }
    ],
    "summary": "Boot تنظیمات متداول را براساس classpath و شرایط فعال می‌کند؛ magic بدون قاعده نیست. کلاس اصلی در package ریشه component scan باشد. وقتی auto-configuration چیزی را نساخت، گزارش conditions را بررسی کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/features/external-config.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-029",
    "slug": "configuration-properties-type-safe",
    "week": 5,
    "day": 5,
    "title": "مدیریت تنظیمات امن و تایپ‌سیف با @ConfigurationProperties",
    "titleEn": "Configuration Properties",
    "description": "جایگزینی انوتیشن شکننده @Value با رکوردهای تایپ‌سیف @ConfigurationProperties، اعتبارسنجی تنظیمات در لحظه بالا آمدن سرور و مقایسه با ConfigService در نست.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "ConfigurationProperties",
      "Environment Variables",
      "Type-safe Config",
      "Nest ConfigService"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 4",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای گروه تنظیمات مرتبط چه انتخابی مناسب‌تر است",
      "orders.timeout را با 5s تنظیم کن؛ نبود مقدار و یک مقدار نامعتبر باید خطای شروع قابل فهم ایجاد کند."
    ],
    "whyItMatters": "صرف تعریف record آن را bean نمی‌کند؛ scan یا EnableConfigurationProperties لازم است.",
    "introduction": "جایگزینی انوتیشن شکننده @Value با رکوردهای تایپ‌سیف @ConfigurationProperties، اعتبارسنجی تنظیمات در لحظه بالا آمدن سرور و مقایسه با ConfigService در نست.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "ConfigurationProperties تنظیمات مرتبط را به یک مدل تایپ‌دار متصل می‌کند؛ validation خطای پیکربندی را هنگام شروع آشکار می‌سازد. Duration از عدد timeout بدون واحد روشن‌تر است."
      }
    ],
    "realWorldScenario": {
      "scenario": "orders.timeout را با 5s تنظیم کن؛ نبود مقدار و یک مقدار نامعتبر باید خطای شروع قابل فهم ایجاد کند.",
      "solution": "صرف تعریف record آن را bean نمی‌کند؛ scan یا EnableConfigurationProperties لازم است."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Validated\n@ConfigurationProperties(\"orders\")\npublic record OrderProperties(@NotNull Duration timeout) {}\n// Register via @ConfigurationPropertiesScan on the application.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Configuration Properties",
      "explanation": "Constructor injection در Nest آشناست؛ تفاوت مهم اینجا scope هر ApplicationContext و عبور از proxyهای Spring است. annotation فقط با زیرساخت فعال معنا دارد."
    },
    "commonMistakes": [
      {
        "mistake": "صرف تعریف record آن را bean نمی‌کند؛ scan یا EnableConfigurationProperties لازم است.",
        "whyBad": "ConfigurationProperties تنظیمات مرتبط را به یک مدل تایپ‌دار متصل می‌کند؛ validation خطای پیکربندی را هنگام شروع آشکار می‌سازد. Duration از عدد timeout بدون واحد روشن‌تر است.",
        "solution": "ConfigurationProperties با validation"
      }
    ],
    "bestPractices": [
      "صرف تعریف record آن را bean نمی‌کند؛ scan یا EnableConfigurationProperties لازم است.",
      "orders.timeout را با 5s تنظیم کن؛ نبود مقدار و یک مقدار نامعتبر باید خطای شروع قابل فهم ایجاد کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "orders.timeout را با 5s تنظیم کن؛ نبود مقدار و یک مقدار نامعتبر باید خطای شروع قابل فهم ایجاد کند.",
      "acceptanceCriteria": [
        "orders.timeout را با 5s تنظیم کن؛ نبود مقدار و یک مقدار نامعتبر باید خطای شروع قابل فهم ایجاد کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "صرف تعریف record آن را bean نمی‌کند؛ scan یا EnableConfigurationProperties لازم است."
      ],
      "solution": {
        "code": "@Validated\n@ConfigurationProperties(\"orders\")\npublic record OrderProperties(@NotNull Duration timeout) {}\n// Register via @ConfigurationPropertiesScan on the application.",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ConfigurationProperties با validation. صرف تعریف record آن را bean نمی‌کند؛ scan یا EnableConfigurationProperties لازم است."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-029",
        "question": "برای گروه تنظیمات مرتبط چه انتخابی مناسب‌تر است؟",
        "options": [
          "خواندن پراکنده getenv داخل متدهای دامنه",
          "hardcode کردن URL محیط production",
          "ConfigurationProperties با validation"
        ],
        "correctIndex": 2,
        "explanation": "ConfigurationProperties با validation. ConfigurationProperties تنظیمات مرتبط را به یک مدل تایپ‌دار متصل می‌کند؛ validation خطای پیکربندی را هنگام شروع آشکار می‌سازد. Duration از عدد timeout بدون واحد روشن‌تر است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای گروه تنظیمات مرتبط چه انتخابی مناسب‌تر است؟",
        "answer": "ConfigurationProperties با validation. صرف تعریف record آن را bean نمی‌کند؛ scan یا EnableConfigurationProperties لازم است."
      }
    ],
    "summary": "ConfigurationProperties تنظیمات مرتبط را به یک مدل تایپ‌دار متصل می‌کند؛ validation خطای پیکربندی را هنگام شروع آشکار می‌سازد. Duration از عدد timeout بدون واحد روشن‌تر است.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/features/external-config.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-030",
    "slug": "profiles-and-environment-management",
    "week": 5,
    "day": 6,
    "title": "تفکیک محیط‌ها با Spring Profiles و مدیریت تنظیمات Dev/Test/Prod",
    "titleEn": "Profiles and Environment Management",
    "description": "استفاده از پروفایل‌ها برای تعیین دیتابیس‌ها و کلیدهای دسترسی در محیط‌های مختلف کاری، و سازمان‌دهی فایلهای application-{profile}.yml.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Spring Profiles",
      "YAML Configuration",
      "Environments",
      "DevOps"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 4",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "رمز production کجا نگه‌داری شود",
      "یک مقدار را در فایل و environment متفاوت بده؛ مقدار موثر را بدون log کردن secrets بررسی کن."
    ],
    "whyItMatters": "Profile مرز امنیت نیست؛ endpointهای مدیریتی و config exposure جدا کنترل شوند.",
    "introduction": "استفاده از پروفایل‌ها برای تعیین دیتابیس‌ها و کلیدهای دسترسی در محیط‌های مختلف کاری، و سازمان‌دهی فایلهای application-{profile}.yml.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Profile برای تفاوت‌های رفتاری محیط است؛ secret نباید در application-prod.yml commit شود. ترتیب منابع configuration تعیین می‌کند کدام مقدار برنده است. تنظیمات عملیاتی باید از خارج artifact قابل تزریق باشند."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک مقدار را در فایل و environment متفاوت بده؛ مقدار موثر را بدون log کردن secrets بررسی کن.",
      "solution": "Profile مرز امنیت نیست؛ endpointهای مدیریتی و config exposure جدا کنترل شوند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "spring:\n  config:\n    activate:\n      on-profile: prod\norders:\n  timeout: ${ORDER_TIMEOUT:5s}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Profiles and Environment Management",
      "explanation": "Constructor injection در Nest آشناست؛ تفاوت مهم اینجا scope هر ApplicationContext و عبور از proxyهای Spring است. annotation فقط با زیرساخت فعال معنا دارد."
    },
    "commonMistakes": [
      {
        "mistake": "Profile مرز امنیت نیست؛ endpointهای مدیریتی و config exposure جدا کنترل شوند.",
        "whyBad": "Profile برای تفاوت‌های رفتاری محیط است؛ secret نباید در application-prod.yml commit شود. ترتیب منابع configuration تعیین می‌کند کدام مقدار برنده است. تنظیمات عملیاتی باید از خارج artifact قابل تزریق باشند.",
        "solution": "secret store یا ورودی محیط با دسترسی کنترل‌شده"
      }
    ],
    "bestPractices": [
      "Profile مرز امنیت نیست؛ endpointهای مدیریتی و config exposure جدا کنترل شوند.",
      "یک مقدار را در فایل و environment متفاوت بده؛ مقدار موثر را بدون log کردن secrets بررسی کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک مقدار را در فایل و environment متفاوت بده؛ مقدار موثر را بدون log کردن secrets بررسی کن.",
      "acceptanceCriteria": [
        "یک مقدار را در فایل و environment متفاوت بده؛ مقدار موثر را بدون log کردن secrets بررسی کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "Profile مرز امنیت نیست؛ endpointهای مدیریتی و config exposure جدا کنترل شوند."
      ],
      "solution": {
        "code": "spring:\n  config:\n    activate:\n      on-profile: prod\norders:\n  timeout: ${ORDER_TIMEOUT:5s}",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. secret store یا ورودی محیط با دسترسی کنترل‌شده. Profile مرز امنیت نیست؛ endpointهای مدیریتی و config exposure جدا کنترل شوند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-030",
        "question": "رمز production کجا نگه‌داری شود؟",
        "options": [
          "secret store یا ورودی محیط با دسترسی کنترل‌شده",
          "در git با نام application-prod.yml",
          "در پاسخ عمومی actuator/env"
        ],
        "correctIndex": 0,
        "explanation": "secret store یا ورودی محیط با دسترسی کنترل‌شده. Profile برای تفاوت‌های رفتاری محیط است؛ secret نباید در application-prod.yml commit شود. ترتیب منابع configuration تعیین می‌کند کدام مقدار برنده است. تنظیمات عملیاتی باید از خارج artifact قابل تزریق باشند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: رمز production کجا نگه‌داری شود؟",
        "answer": "secret store یا ورودی محیط با دسترسی کنترل‌شده. Profile مرز امنیت نیست؛ endpointهای مدیریتی و config exposure جدا کنترل شوند."
      }
    ],
    "summary": "Profile برای تفاوت‌های رفتاری محیط است؛ secret نباید در application-prod.yml commit شود. ترتیب منابع configuration تعیین می‌کند کدام مقدار برنده است. تنظیمات عملیاتی باید از خارج artifact قابل تزریق باشند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-boot/3.5/reference/features/external-config.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
