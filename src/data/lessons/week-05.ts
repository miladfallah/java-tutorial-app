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
    "estimatedMinutes": 30,
    "tags": [
      "IoC",
      "Dependency Injection",
      "Spring vs NestJS",
      "ApplicationContext",
      "Beans"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Inversion of Control and Dependency Injection در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای وارونگی کنترل (IoC) و تزریق وابستگی (DI) در فریم‌ورک Spring",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Inversion of Control and Dependency Injection تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث وارونگی کنترل (IoC) و تزریق وابستگی (DI) در فریم‌ورک Spring (Inversion of Control and Dependency Injection) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Inversion of Control and Dependency Injection",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Inversion of Control and Dependency Injection استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Inversion of Control and Dependency Injection نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Inversion of Control and Dependency Injection از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Inversion of Control and Dependency Injection، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Inversion of Control and Dependency Injection",
        "language": "java",
        "filename": "src/main/java/com/academy/order/inversionofcontrolanddependencyinjection/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Inversion of Control and Dependency Injection\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Inversion of Control and Dependency Injection",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Inversion of Control and Dependency Injection بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Inversion of Control and Dependency Injection را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست وارونگی کنترل (IoC) و تزریق وابستگی (DI) در فریم‌ورک Spring",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Inversion of Control and Dependency Injection برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
      "expectedOutput": "تست واحد با موفقیت اجرا شده و گزارش قبولی ۱۰۰ درصدی ارزیابی صادر شود.",
      "acceptanceCriteria": [
        "کد با جاوا ۲۱ سازگار بوده و بدون خطای کامپایل اجرا شود.",
        "مدیریت خطاهای غیاب داده یا شرایط نامعتبر با پرتاب استثنای معنادار صورت گیرد.",
        "تست‌های واحد تمامی مسیرهای انشعاب شرطی را پوشش دهند."
      ],
      "hints": [
        "از قابلیت‌های تایپ‌سیف جاوا و پکیج java.util استفاده کنید.",
        "برای تست از فریم‌ورک JUnit 5 بهره ببرید."
      ],
      "solution": {
        "language": "java",
        "filename": "src/main/java/com/academy/order/exercise/inversionofcontrolanddependencyinjection/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-025-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Inversion of Control and Dependency Injection در پروژه‌های جاوا چیست؟",
        "options": [
          "کاهش سورس‌کد به کمتر از ۵ خط.",
          "تضمین پایداری معماری، تست‌پذیری حداکثری و پیشگیری از رفتارهای پیش‌بینی‌نشده در مقیاس بالا.",
          "حذف نیاز به نصب پایگاه داده.",
          "تبدیل خودکار کدهای جاوا به نودجی‌اس."
        ],
        "correctIndex": 1,
        "explanation": "الگوهای استاندارد جاوا به گونه‌ای طراحی شده‌اند که قابلیت اطمینان، نگهداری آسان و مقیاس‌پذیری سیستم را در محیط‌های سازمانی تضمین کنند."
      },
      {
        "id": "q-lesson-025-2",
        "question": "در مقایسه با رویکردهای متداول در Node.js/NestJS، تفاوت کلیدی این مفهوم در جاوا چیست؟",
        "options": [
          "جاوا از Event Loop تک‌رشته‌ای استفاده می‌کند ولی نود چندرشته‌ای است.",
          "در جاوا با سیستم نوع‌دهی اسمی، مدیریت نخ‌های واقعی سیستم‌عامل و انتزاع‌های فریم‌ورکی قوی‌تر روبرو هستیم.",
          "هیچ تفاوتی از لحاظ معماری وجود ندارد.",
          "جاوا کدهای جاوااسکریپت را درون داکر اجرا می‌کند."
        ],
        "correctIndex": 1,
        "explanation": "جاوا با تکیه بر چندرشته‌ای بودن واقعی، بایت‌کد JVM و قراردادهای محکم فریم‌ورکی از مدل مبتنی بر Event Loop تک‌رشته‌ای نودجی‌اس متمایز می‌شود."
      },
      {
        "id": "q-lesson-025-3",
        "question": "کدام گزینه از مصادیق نقض Best Practice در این موضوع به شمار می‌رود؟",
        "options": [
          "پوشش کدهای حیاتی با تست‌های خودکار.",
          "نادیده گرفتن شرایط مرزی، عدم اعتبارسنجی ورودی‌ها و دستکاری مستقیم وضعیت‌های داخلی بدون انکپسولیشن.",
          "استفاده از لاگ‌های ساختاریافته به همراه شناسه رهگیری.",
          "تعریف متغیرهای تغییرناپذیر با کلمه کلیدی final."
        ],
        "correctIndex": 1,
        "explanation": "تخریب انکپسولیشن و رها کردن متغیرهای مشترک بدون محافظت در برابر تغییر، شایع‌ترین منشا باگ‌های پروداکشن در سیستم‌های جاوا است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Inversion of Control and Dependency Injection را برای مصاحبه‌کننده تشریح می‌کنید؟",
        "answer": "در پاسخ باید ابتدا به مشکل پایه‌ای که این مفهوم حل می‌کند اشاره کرد (مانند حل گلوگاه‌های مقیاس، پایداری یا تفکیک دغدغه‌ها). سپس معماری زیرین و نحوه رفتار آن در زمان اجرای JVM را شرح داده و در نهایت مصالحه‌های آن با راهکارهای جایگزین را با تکیه بر تجربه عملی پروداکشن تحلیل نمود.",
        "keyTakeaways": [
          "تمرکز بر چرایی مهندسی و ارزش تجاری به جای حفظ کردن دستورات",
          "اشاره به رفتار سیستم در زمان بار سنگین و سناریوهای شکست"
        ]
      },
      {
        "question": "چه مصالحه‌هایی (Trade-offs) در به‌کارگیری این الگو وجود دارد و چه زمان نباید از آن استفاده کرد؟",
        "answer": "هیچ الگویی گلوله نقره‌ای نیست. این الگو سادگی اولیه کد را فدای انعطاف‌پذیری و مقیاس‌پذیری در آینده می‌کند. برای پروژه‌های بسیار کوچک یا اسکریپت‌های موقت، اضافه کردن این سطح از انتزاع ممکن است پیچیدگی بی‌مورد ایجاد نماید؛ اما در سیستم‌های سازمانی بزرگ، کاملاً توجیه‌پذیر است.",
        "keyTakeaways": [
          "آگاهی از مفهوم Over-engineering",
          "سنجش تناسب الگو با نیازمندی‌های واقعی سیستم"
        ]
      }
    ],
    "summary": "در این جلسه مبحث وارونگی کنترل (IoC) و تزریق وابستگی (DI) در فریم‌ورک Spring را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
    "references": [
      {
        "title": "Java Platform Standard Documentation",
        "url": "https://dev.java/"
      },
      {
        "title": "Spring Framework Reference Documentation",
        "url": "https://docs.spring.io/spring-framework/reference/"
      }
    ],
    "capstoneConnection": {
      "phase": "فاز مربوط به هفته 5",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Inversion of Control and Dependency Injection",
      "filesToModify": [
        "src/main/java/com/academy/order/inversionofcontrolanddependencyinjection/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
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
    "estimatedMinutes": 30,
    "tags": [
      "Bean Lifecycle",
      "Configuration",
      "Singleton Scope",
      "PostConstruct",
      "PreDestroy"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Bean Lifecycle and Configuration در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای چرخه حیات Beanها، Scopes و کلاس‌های پیکربندی @Configuration",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Bean Lifecycle and Configuration تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث چرخه حیات Beanها، Scopes و کلاس‌های پیکربندی @Configuration (Bean Lifecycle and Configuration) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Bean Lifecycle and Configuration",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Bean Lifecycle and Configuration استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Bean Lifecycle and Configuration نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Bean Lifecycle and Configuration از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Bean Lifecycle and Configuration، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Bean Lifecycle and Configuration",
        "language": "java",
        "filename": "src/main/java/com/academy/order/beanlifecycleandconfiguration/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Bean Lifecycle and Configuration\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Bean Lifecycle and Configuration",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Bean Lifecycle and Configuration بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Bean Lifecycle and Configuration را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست چرخه حیات Beanها، Scopes و کلاس‌های پیکربندی @Configuration",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Bean Lifecycle and Configuration برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
      "expectedOutput": "تست واحد با موفقیت اجرا شده و گزارش قبولی ۱۰۰ درصدی ارزیابی صادر شود.",
      "acceptanceCriteria": [
        "کد با جاوا ۲۱ سازگار بوده و بدون خطای کامپایل اجرا شود.",
        "مدیریت خطاهای غیاب داده یا شرایط نامعتبر با پرتاب استثنای معنادار صورت گیرد.",
        "تست‌های واحد تمامی مسیرهای انشعاب شرطی را پوشش دهند."
      ],
      "hints": [
        "از قابلیت‌های تایپ‌سیف جاوا و پکیج java.util استفاده کنید.",
        "برای تست از فریم‌ورک JUnit 5 بهره ببرید."
      ],
      "solution": {
        "language": "java",
        "filename": "src/main/java/com/academy/order/exercise/beanlifecycleandconfiguration/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-026-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Bean Lifecycle and Configuration در پروژه‌های جاوا چیست؟",
        "options": [
          "کاهش سورس‌کد به کمتر از ۵ خط.",
          "تضمین پایداری معماری، تست‌پذیری حداکثری و پیشگیری از رفتارهای پیش‌بینی‌نشده در مقیاس بالا.",
          "حذف نیاز به نصب پایگاه داده.",
          "تبدیل خودکار کدهای جاوا به نودجی‌اس."
        ],
        "correctIndex": 1,
        "explanation": "الگوهای استاندارد جاوا به گونه‌ای طراحی شده‌اند که قابلیت اطمینان، نگهداری آسان و مقیاس‌پذیری سیستم را در محیط‌های سازمانی تضمین کنند."
      },
      {
        "id": "q-lesson-026-2",
        "question": "در مقایسه با رویکردهای متداول در Node.js/NestJS، تفاوت کلیدی این مفهوم در جاوا چیست؟",
        "options": [
          "جاوا از Event Loop تک‌رشته‌ای استفاده می‌کند ولی نود چندرشته‌ای است.",
          "در جاوا با سیستم نوع‌دهی اسمی، مدیریت نخ‌های واقعی سیستم‌عامل و انتزاع‌های فریم‌ورکی قوی‌تر روبرو هستیم.",
          "هیچ تفاوتی از لحاظ معماری وجود ندارد.",
          "جاوا کدهای جاوااسکریپت را درون داکر اجرا می‌کند."
        ],
        "correctIndex": 1,
        "explanation": "جاوا با تکیه بر چندرشته‌ای بودن واقعی، بایت‌کد JVM و قراردادهای محکم فریم‌ورکی از مدل مبتنی بر Event Loop تک‌رشته‌ای نودجی‌اس متمایز می‌شود."
      },
      {
        "id": "q-lesson-026-3",
        "question": "کدام گزینه از مصادیق نقض Best Practice در این موضوع به شمار می‌رود؟",
        "options": [
          "پوشش کدهای حیاتی با تست‌های خودکار.",
          "نادیده گرفتن شرایط مرزی، عدم اعتبارسنجی ورودی‌ها و دستکاری مستقیم وضعیت‌های داخلی بدون انکپسولیشن.",
          "استفاده از لاگ‌های ساختاریافته به همراه شناسه رهگیری.",
          "تعریف متغیرهای تغییرناپذیر با کلمه کلیدی final."
        ],
        "correctIndex": 1,
        "explanation": "تخریب انکپسولیشن و رها کردن متغیرهای مشترک بدون محافظت در برابر تغییر، شایع‌ترین منشا باگ‌های پروداکشن در سیستم‌های جاوا است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Bean Lifecycle and Configuration را برای مصاحبه‌کننده تشریح می‌کنید؟",
        "answer": "در پاسخ باید ابتدا به مشکل پایه‌ای که این مفهوم حل می‌کند اشاره کرد (مانند حل گلوگاه‌های مقیاس، پایداری یا تفکیک دغدغه‌ها). سپس معماری زیرین و نحوه رفتار آن در زمان اجرای JVM را شرح داده و در نهایت مصالحه‌های آن با راهکارهای جایگزین را با تکیه بر تجربه عملی پروداکشن تحلیل نمود.",
        "keyTakeaways": [
          "تمرکز بر چرایی مهندسی و ارزش تجاری به جای حفظ کردن دستورات",
          "اشاره به رفتار سیستم در زمان بار سنگین و سناریوهای شکست"
        ]
      },
      {
        "question": "چه مصالحه‌هایی (Trade-offs) در به‌کارگیری این الگو وجود دارد و چه زمان نباید از آن استفاده کرد؟",
        "answer": "هیچ الگویی گلوله نقره‌ای نیست. این الگو سادگی اولیه کد را فدای انعطاف‌پذیری و مقیاس‌پذیری در آینده می‌کند. برای پروژه‌های بسیار کوچک یا اسکریپت‌های موقت، اضافه کردن این سطح از انتزاع ممکن است پیچیدگی بی‌مورد ایجاد نماید؛ اما در سیستم‌های سازمانی بزرگ، کاملاً توجیه‌پذیر است.",
        "keyTakeaways": [
          "آگاهی از مفهوم Over-engineering",
          "سنجش تناسب الگو با نیازمندی‌های واقعی سیستم"
        ]
      }
    ],
    "summary": "در این جلسه مبحث چرخه حیات Beanها، Scopes و کلاس‌های پیکربندی @Configuration را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
    "references": [
      {
        "title": "Java Platform Standard Documentation",
        "url": "https://dev.java/"
      },
      {
        "title": "Spring Framework Reference Documentation",
        "url": "https://docs.spring.io/spring-framework/reference/"
      }
    ],
    "capstoneConnection": {
      "phase": "فاز مربوط به هفته 5",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Bean Lifecycle and Configuration",
      "filesToModify": [
        "src/main/java/com/academy/order/beanlifecycleandconfiguration/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
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
    "estimatedMinutes": 30,
    "tags": [
      "DIP",
      "Interfaces",
      "Qualifier",
      "Loose Coupling",
      "Design Patterns"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Dependency Inversion Principle در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای اصل وارونگی وابستگی (DIP) و ایجاد مرزهای سست میان کامپوننت‌ها",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Dependency Inversion Principle تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث اصل وارونگی وابستگی (DIP) و ایجاد مرزهای سست میان کامپوننت‌ها (Dependency Inversion Principle) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Dependency Inversion Principle",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Dependency Inversion Principle استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Dependency Inversion Principle نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Dependency Inversion Principle از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Dependency Inversion Principle، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Dependency Inversion Principle",
        "language": "java",
        "filename": "src/main/java/com/academy/order/dependencyinversionprinciplespring/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Dependency Inversion Principle\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Dependency Inversion Principle",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Dependency Inversion Principle بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Dependency Inversion Principle را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست اصل وارونگی وابستگی (DIP) و ایجاد مرزهای سست میان کامپوننت‌ها",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Dependency Inversion Principle برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
      "expectedOutput": "تست واحد با موفقیت اجرا شده و گزارش قبولی ۱۰۰ درصدی ارزیابی صادر شود.",
      "acceptanceCriteria": [
        "کد با جاوا ۲۱ سازگار بوده و بدون خطای کامپایل اجرا شود.",
        "مدیریت خطاهای غیاب داده یا شرایط نامعتبر با پرتاب استثنای معنادار صورت گیرد.",
        "تست‌های واحد تمامی مسیرهای انشعاب شرطی را پوشش دهند."
      ],
      "hints": [
        "از قابلیت‌های تایپ‌سیف جاوا و پکیج java.util استفاده کنید.",
        "برای تست از فریم‌ورک JUnit 5 بهره ببرید."
      ],
      "solution": {
        "language": "java",
        "filename": "src/main/java/com/academy/order/exercise/dependencyinversionprinciplespring/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-027-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Dependency Inversion Principle در پروژه‌های جاوا چیست؟",
        "options": [
          "کاهش سورس‌کد به کمتر از ۵ خط.",
          "تضمین پایداری معماری، تست‌پذیری حداکثری و پیشگیری از رفتارهای پیش‌بینی‌نشده در مقیاس بالا.",
          "حذف نیاز به نصب پایگاه داده.",
          "تبدیل خودکار کدهای جاوا به نودجی‌اس."
        ],
        "correctIndex": 1,
        "explanation": "الگوهای استاندارد جاوا به گونه‌ای طراحی شده‌اند که قابلیت اطمینان، نگهداری آسان و مقیاس‌پذیری سیستم را در محیط‌های سازمانی تضمین کنند."
      },
      {
        "id": "q-lesson-027-2",
        "question": "در مقایسه با رویکردهای متداول در Node.js/NestJS، تفاوت کلیدی این مفهوم در جاوا چیست؟",
        "options": [
          "جاوا از Event Loop تک‌رشته‌ای استفاده می‌کند ولی نود چندرشته‌ای است.",
          "در جاوا با سیستم نوع‌دهی اسمی، مدیریت نخ‌های واقعی سیستم‌عامل و انتزاع‌های فریم‌ورکی قوی‌تر روبرو هستیم.",
          "هیچ تفاوتی از لحاظ معماری وجود ندارد.",
          "جاوا کدهای جاوااسکریپت را درون داکر اجرا می‌کند."
        ],
        "correctIndex": 1,
        "explanation": "جاوا با تکیه بر چندرشته‌ای بودن واقعی، بایت‌کد JVM و قراردادهای محکم فریم‌ورکی از مدل مبتنی بر Event Loop تک‌رشته‌ای نودجی‌اس متمایز می‌شود."
      },
      {
        "id": "q-lesson-027-3",
        "question": "کدام گزینه از مصادیق نقض Best Practice در این موضوع به شمار می‌رود؟",
        "options": [
          "پوشش کدهای حیاتی با تست‌های خودکار.",
          "نادیده گرفتن شرایط مرزی، عدم اعتبارسنجی ورودی‌ها و دستکاری مستقیم وضعیت‌های داخلی بدون انکپسولیشن.",
          "استفاده از لاگ‌های ساختاریافته به همراه شناسه رهگیری.",
          "تعریف متغیرهای تغییرناپذیر با کلمه کلیدی final."
        ],
        "correctIndex": 1,
        "explanation": "تخریب انکپسولیشن و رها کردن متغیرهای مشترک بدون محافظت در برابر تغییر، شایع‌ترین منشا باگ‌های پروداکشن در سیستم‌های جاوا است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Dependency Inversion Principle را برای مصاحبه‌کننده تشریح می‌کنید؟",
        "answer": "در پاسخ باید ابتدا به مشکل پایه‌ای که این مفهوم حل می‌کند اشاره کرد (مانند حل گلوگاه‌های مقیاس، پایداری یا تفکیک دغدغه‌ها). سپس معماری زیرین و نحوه رفتار آن در زمان اجرای JVM را شرح داده و در نهایت مصالحه‌های آن با راهکارهای جایگزین را با تکیه بر تجربه عملی پروداکشن تحلیل نمود.",
        "keyTakeaways": [
          "تمرکز بر چرایی مهندسی و ارزش تجاری به جای حفظ کردن دستورات",
          "اشاره به رفتار سیستم در زمان بار سنگین و سناریوهای شکست"
        ]
      },
      {
        "question": "چه مصالحه‌هایی (Trade-offs) در به‌کارگیری این الگو وجود دارد و چه زمان نباید از آن استفاده کرد؟",
        "answer": "هیچ الگویی گلوله نقره‌ای نیست. این الگو سادگی اولیه کد را فدای انعطاف‌پذیری و مقیاس‌پذیری در آینده می‌کند. برای پروژه‌های بسیار کوچک یا اسکریپت‌های موقت، اضافه کردن این سطح از انتزاع ممکن است پیچیدگی بی‌مورد ایجاد نماید؛ اما در سیستم‌های سازمانی بزرگ، کاملاً توجیه‌پذیر است.",
        "keyTakeaways": [
          "آگاهی از مفهوم Over-engineering",
          "سنجش تناسب الگو با نیازمندی‌های واقعی سیستم"
        ]
      }
    ],
    "summary": "در این جلسه مبحث اصل وارونگی وابستگی (DIP) و ایجاد مرزهای سست میان کامپوننت‌ها را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
    "references": [
      {
        "title": "Java Platform Standard Documentation",
        "url": "https://dev.java/"
      },
      {
        "title": "Spring Framework Reference Documentation",
        "url": "https://docs.spring.io/spring-framework/reference/"
      }
    ],
    "capstoneConnection": {
      "phase": "فاز مربوط به هفته 5",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Dependency Inversion Principle",
      "filesToModify": [
        "src/main/java/com/academy/order/dependencyinversionprinciplespring/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
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
    "estimatedMinutes": 30,
    "tags": [
      "Capstone",
      "Spring Boot",
      "Auto-configuration",
      "SpringBootApplication",
      "Embedded Tomcat"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Creating a Spring Boot Application در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای ایجاد سرویس میکروسرویس با Spring Boot و کاوش درون Auto-configuration",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Creating a Spring Boot Application تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث ایجاد سرویس میکروسرویس با Spring Boot و کاوش درون Auto-configuration (Creating a Spring Boot Application) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Creating a Spring Boot Application",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Creating a Spring Boot Application استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Creating a Spring Boot Application نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Creating a Spring Boot Application از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Creating a Spring Boot Application، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Creating a Spring Boot Application",
        "language": "java",
        "filename": "src/main/java/com/academy/order/creatingspringbootapplication/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Creating a Spring Boot Application\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Creating a Spring Boot Application",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Creating a Spring Boot Application بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Creating a Spring Boot Application را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست ایجاد سرویس میکروسرویس با Spring Boot و کاوش درون Auto-configuration",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Creating a Spring Boot Application برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
      "expectedOutput": "تست واحد با موفقیت اجرا شده و گزارش قبولی ۱۰۰ درصدی ارزیابی صادر شود.",
      "acceptanceCriteria": [
        "کد با جاوا ۲۱ سازگار بوده و بدون خطای کامپایل اجرا شود.",
        "مدیریت خطاهای غیاب داده یا شرایط نامعتبر با پرتاب استثنای معنادار صورت گیرد.",
        "تست‌های واحد تمامی مسیرهای انشعاب شرطی را پوشش دهند."
      ],
      "hints": [
        "از قابلیت‌های تایپ‌سیف جاوا و پکیج java.util استفاده کنید.",
        "برای تست از فریم‌ورک JUnit 5 بهره ببرید."
      ],
      "solution": {
        "language": "java",
        "filename": "src/main/java/com/academy/order/exercise/creatingspringbootapplication/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-028-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Creating a Spring Boot Application در پروژه‌های جاوا چیست؟",
        "options": [
          "کاهش سورس‌کد به کمتر از ۵ خط.",
          "تضمین پایداری معماری، تست‌پذیری حداکثری و پیشگیری از رفتارهای پیش‌بینی‌نشده در مقیاس بالا.",
          "حذف نیاز به نصب پایگاه داده.",
          "تبدیل خودکار کدهای جاوا به نودجی‌اس."
        ],
        "correctIndex": 1,
        "explanation": "الگوهای استاندارد جاوا به گونه‌ای طراحی شده‌اند که قابلیت اطمینان، نگهداری آسان و مقیاس‌پذیری سیستم را در محیط‌های سازمانی تضمین کنند."
      },
      {
        "id": "q-lesson-028-2",
        "question": "در مقایسه با رویکردهای متداول در Node.js/NestJS، تفاوت کلیدی این مفهوم در جاوا چیست؟",
        "options": [
          "جاوا از Event Loop تک‌رشته‌ای استفاده می‌کند ولی نود چندرشته‌ای است.",
          "در جاوا با سیستم نوع‌دهی اسمی، مدیریت نخ‌های واقعی سیستم‌عامل و انتزاع‌های فریم‌ورکی قوی‌تر روبرو هستیم.",
          "هیچ تفاوتی از لحاظ معماری وجود ندارد.",
          "جاوا کدهای جاوااسکریپت را درون داکر اجرا می‌کند."
        ],
        "correctIndex": 1,
        "explanation": "جاوا با تکیه بر چندرشته‌ای بودن واقعی، بایت‌کد JVM و قراردادهای محکم فریم‌ورکی از مدل مبتنی بر Event Loop تک‌رشته‌ای نودجی‌اس متمایز می‌شود."
      },
      {
        "id": "q-lesson-028-3",
        "question": "کدام گزینه از مصادیق نقض Best Practice در این موضوع به شمار می‌رود؟",
        "options": [
          "پوشش کدهای حیاتی با تست‌های خودکار.",
          "نادیده گرفتن شرایط مرزی، عدم اعتبارسنجی ورودی‌ها و دستکاری مستقیم وضعیت‌های داخلی بدون انکپسولیشن.",
          "استفاده از لاگ‌های ساختاریافته به همراه شناسه رهگیری.",
          "تعریف متغیرهای تغییرناپذیر با کلمه کلیدی final."
        ],
        "correctIndex": 1,
        "explanation": "تخریب انکپسولیشن و رها کردن متغیرهای مشترک بدون محافظت در برابر تغییر، شایع‌ترین منشا باگ‌های پروداکشن در سیستم‌های جاوا است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Creating a Spring Boot Application را برای مصاحبه‌کننده تشریح می‌کنید؟",
        "answer": "در پاسخ باید ابتدا به مشکل پایه‌ای که این مفهوم حل می‌کند اشاره کرد (مانند حل گلوگاه‌های مقیاس، پایداری یا تفکیک دغدغه‌ها). سپس معماری زیرین و نحوه رفتار آن در زمان اجرای JVM را شرح داده و در نهایت مصالحه‌های آن با راهکارهای جایگزین را با تکیه بر تجربه عملی پروداکشن تحلیل نمود.",
        "keyTakeaways": [
          "تمرکز بر چرایی مهندسی و ارزش تجاری به جای حفظ کردن دستورات",
          "اشاره به رفتار سیستم در زمان بار سنگین و سناریوهای شکست"
        ]
      },
      {
        "question": "چه مصالحه‌هایی (Trade-offs) در به‌کارگیری این الگو وجود دارد و چه زمان نباید از آن استفاده کرد؟",
        "answer": "هیچ الگویی گلوله نقره‌ای نیست. این الگو سادگی اولیه کد را فدای انعطاف‌پذیری و مقیاس‌پذیری در آینده می‌کند. برای پروژه‌های بسیار کوچک یا اسکریپت‌های موقت، اضافه کردن این سطح از انتزاع ممکن است پیچیدگی بی‌مورد ایجاد نماید؛ اما در سیستم‌های سازمانی بزرگ، کاملاً توجیه‌پذیر است.",
        "keyTakeaways": [
          "آگاهی از مفهوم Over-engineering",
          "سنجش تناسب الگو با نیازمندی‌های واقعی سیستم"
        ]
      }
    ],
    "summary": "در این جلسه مبحث ایجاد سرویس میکروسرویس با Spring Boot و کاوش درون Auto-configuration را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
    "references": [
      {
        "title": "Java Platform Standard Documentation",
        "url": "https://dev.java/"
      },
      {
        "title": "Spring Framework Reference Documentation",
        "url": "https://docs.spring.io/spring-framework/reference/"
      }
    ],
    "capstoneConnection": {
      "phase": "فاز مربوط به هفته 5",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Creating a Spring Boot Application",
      "filesToModify": [
        "src/main/java/com/academy/order/creatingspringbootapplication/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
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
    "estimatedMinutes": 30,
    "tags": [
      "ConfigurationProperties",
      "Environment Variables",
      "Type-safe Config",
      "Nest ConfigService"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Configuration Properties در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای مدیریت تنظیمات امن و تایپ‌سیف با @ConfigurationProperties",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Configuration Properties تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث مدیریت تنظیمات امن و تایپ‌سیف با @ConfigurationProperties (Configuration Properties) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Configuration Properties",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Configuration Properties استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Configuration Properties نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Configuration Properties از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Configuration Properties، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Configuration Properties",
        "language": "java",
        "filename": "src/main/java/com/academy/order/configurationpropertiestypesafe/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Configuration Properties\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Configuration Properties",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Configuration Properties بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Configuration Properties را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست مدیریت تنظیمات امن و تایپ‌سیف با @ConfigurationProperties",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Configuration Properties برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
      "expectedOutput": "تست واحد با موفقیت اجرا شده و گزارش قبولی ۱۰۰ درصدی ارزیابی صادر شود.",
      "acceptanceCriteria": [
        "کد با جاوا ۲۱ سازگار بوده و بدون خطای کامپایل اجرا شود.",
        "مدیریت خطاهای غیاب داده یا شرایط نامعتبر با پرتاب استثنای معنادار صورت گیرد.",
        "تست‌های واحد تمامی مسیرهای انشعاب شرطی را پوشش دهند."
      ],
      "hints": [
        "از قابلیت‌های تایپ‌سیف جاوا و پکیج java.util استفاده کنید.",
        "برای تست از فریم‌ورک JUnit 5 بهره ببرید."
      ],
      "solution": {
        "language": "java",
        "filename": "src/main/java/com/academy/order/exercise/configurationpropertiestypesafe/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-029-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Configuration Properties در پروژه‌های جاوا چیست؟",
        "options": [
          "کاهش سورس‌کد به کمتر از ۵ خط.",
          "تضمین پایداری معماری، تست‌پذیری حداکثری و پیشگیری از رفتارهای پیش‌بینی‌نشده در مقیاس بالا.",
          "حذف نیاز به نصب پایگاه داده.",
          "تبدیل خودکار کدهای جاوا به نودجی‌اس."
        ],
        "correctIndex": 1,
        "explanation": "الگوهای استاندارد جاوا به گونه‌ای طراحی شده‌اند که قابلیت اطمینان، نگهداری آسان و مقیاس‌پذیری سیستم را در محیط‌های سازمانی تضمین کنند."
      },
      {
        "id": "q-lesson-029-2",
        "question": "در مقایسه با رویکردهای متداول در Node.js/NestJS، تفاوت کلیدی این مفهوم در جاوا چیست؟",
        "options": [
          "جاوا از Event Loop تک‌رشته‌ای استفاده می‌کند ولی نود چندرشته‌ای است.",
          "در جاوا با سیستم نوع‌دهی اسمی، مدیریت نخ‌های واقعی سیستم‌عامل و انتزاع‌های فریم‌ورکی قوی‌تر روبرو هستیم.",
          "هیچ تفاوتی از لحاظ معماری وجود ندارد.",
          "جاوا کدهای جاوااسکریپت را درون داکر اجرا می‌کند."
        ],
        "correctIndex": 1,
        "explanation": "جاوا با تکیه بر چندرشته‌ای بودن واقعی، بایت‌کد JVM و قراردادهای محکم فریم‌ورکی از مدل مبتنی بر Event Loop تک‌رشته‌ای نودجی‌اس متمایز می‌شود."
      },
      {
        "id": "q-lesson-029-3",
        "question": "کدام گزینه از مصادیق نقض Best Practice در این موضوع به شمار می‌رود؟",
        "options": [
          "پوشش کدهای حیاتی با تست‌های خودکار.",
          "نادیده گرفتن شرایط مرزی، عدم اعتبارسنجی ورودی‌ها و دستکاری مستقیم وضعیت‌های داخلی بدون انکپسولیشن.",
          "استفاده از لاگ‌های ساختاریافته به همراه شناسه رهگیری.",
          "تعریف متغیرهای تغییرناپذیر با کلمه کلیدی final."
        ],
        "correctIndex": 1,
        "explanation": "تخریب انکپسولیشن و رها کردن متغیرهای مشترک بدون محافظت در برابر تغییر، شایع‌ترین منشا باگ‌های پروداکشن در سیستم‌های جاوا است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Configuration Properties را برای مصاحبه‌کننده تشریح می‌کنید؟",
        "answer": "در پاسخ باید ابتدا به مشکل پایه‌ای که این مفهوم حل می‌کند اشاره کرد (مانند حل گلوگاه‌های مقیاس، پایداری یا تفکیک دغدغه‌ها). سپس معماری زیرین و نحوه رفتار آن در زمان اجرای JVM را شرح داده و در نهایت مصالحه‌های آن با راهکارهای جایگزین را با تکیه بر تجربه عملی پروداکشن تحلیل نمود.",
        "keyTakeaways": [
          "تمرکز بر چرایی مهندسی و ارزش تجاری به جای حفظ کردن دستورات",
          "اشاره به رفتار سیستم در زمان بار سنگین و سناریوهای شکست"
        ]
      },
      {
        "question": "چه مصالحه‌هایی (Trade-offs) در به‌کارگیری این الگو وجود دارد و چه زمان نباید از آن استفاده کرد؟",
        "answer": "هیچ الگویی گلوله نقره‌ای نیست. این الگو سادگی اولیه کد را فدای انعطاف‌پذیری و مقیاس‌پذیری در آینده می‌کند. برای پروژه‌های بسیار کوچک یا اسکریپت‌های موقت، اضافه کردن این سطح از انتزاع ممکن است پیچیدگی بی‌مورد ایجاد نماید؛ اما در سیستم‌های سازمانی بزرگ، کاملاً توجیه‌پذیر است.",
        "keyTakeaways": [
          "آگاهی از مفهوم Over-engineering",
          "سنجش تناسب الگو با نیازمندی‌های واقعی سیستم"
        ]
      }
    ],
    "summary": "در این جلسه مبحث مدیریت تنظیمات امن و تایپ‌سیف با @ConfigurationProperties را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
    "references": [
      {
        "title": "Java Platform Standard Documentation",
        "url": "https://dev.java/"
      },
      {
        "title": "Spring Framework Reference Documentation",
        "url": "https://docs.spring.io/spring-framework/reference/"
      }
    ],
    "capstoneConnection": {
      "phase": "فاز مربوط به هفته 5",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Configuration Properties",
      "filesToModify": [
        "src/main/java/com/academy/order/configurationpropertiestypesafe/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
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
    "estimatedMinutes": 30,
    "tags": [
      "Spring Profiles",
      "YAML Configuration",
      "Environments",
      "DevOps"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Profiles and Environment Management در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای تفکیک محیط‌ها با Spring Profiles و مدیریت تنظیمات Dev/Test/Prod",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Profiles and Environment Management تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث تفکیک محیط‌ها با Spring Profiles و مدیریت تنظیمات Dev/Test/Prod (Profiles and Environment Management) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Profiles and Environment Management",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Profiles and Environment Management استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Profiles and Environment Management نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Profiles and Environment Management از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Profiles and Environment Management، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Profiles and Environment Management",
        "language": "java",
        "filename": "src/main/java/com/academy/order/profilesandenvironmentmanagement/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Profiles and Environment Management\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Profiles and Environment Management",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Profiles and Environment Management بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Profiles and Environment Management را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست تفکیک محیط‌ها با Spring Profiles و مدیریت تنظیمات Dev/Test/Prod",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Profiles and Environment Management برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
      "expectedOutput": "تست واحد با موفقیت اجرا شده و گزارش قبولی ۱۰۰ درصدی ارزیابی صادر شود.",
      "acceptanceCriteria": [
        "کد با جاوا ۲۱ سازگار بوده و بدون خطای کامپایل اجرا شود.",
        "مدیریت خطاهای غیاب داده یا شرایط نامعتبر با پرتاب استثنای معنادار صورت گیرد.",
        "تست‌های واحد تمامی مسیرهای انشعاب شرطی را پوشش دهند."
      ],
      "hints": [
        "از قابلیت‌های تایپ‌سیف جاوا و پکیج java.util استفاده کنید.",
        "برای تست از فریم‌ورک JUnit 5 بهره ببرید."
      ],
      "solution": {
        "language": "java",
        "filename": "src/main/java/com/academy/order/exercise/profilesandenvironmentmanagement/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-030-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Profiles and Environment Management در پروژه‌های جاوا چیست؟",
        "options": [
          "کاهش سورس‌کد به کمتر از ۵ خط.",
          "تضمین پایداری معماری، تست‌پذیری حداکثری و پیشگیری از رفتارهای پیش‌بینی‌نشده در مقیاس بالا.",
          "حذف نیاز به نصب پایگاه داده.",
          "تبدیل خودکار کدهای جاوا به نودجی‌اس."
        ],
        "correctIndex": 1,
        "explanation": "الگوهای استاندارد جاوا به گونه‌ای طراحی شده‌اند که قابلیت اطمینان، نگهداری آسان و مقیاس‌پذیری سیستم را در محیط‌های سازمانی تضمین کنند."
      },
      {
        "id": "q-lesson-030-2",
        "question": "در مقایسه با رویکردهای متداول در Node.js/NestJS، تفاوت کلیدی این مفهوم در جاوا چیست؟",
        "options": [
          "جاوا از Event Loop تک‌رشته‌ای استفاده می‌کند ولی نود چندرشته‌ای است.",
          "در جاوا با سیستم نوع‌دهی اسمی، مدیریت نخ‌های واقعی سیستم‌عامل و انتزاع‌های فریم‌ورکی قوی‌تر روبرو هستیم.",
          "هیچ تفاوتی از لحاظ معماری وجود ندارد.",
          "جاوا کدهای جاوااسکریپت را درون داکر اجرا می‌کند."
        ],
        "correctIndex": 1,
        "explanation": "جاوا با تکیه بر چندرشته‌ای بودن واقعی، بایت‌کد JVM و قراردادهای محکم فریم‌ورکی از مدل مبتنی بر Event Loop تک‌رشته‌ای نودجی‌اس متمایز می‌شود."
      },
      {
        "id": "q-lesson-030-3",
        "question": "کدام گزینه از مصادیق نقض Best Practice در این موضوع به شمار می‌رود؟",
        "options": [
          "پوشش کدهای حیاتی با تست‌های خودکار.",
          "نادیده گرفتن شرایط مرزی، عدم اعتبارسنجی ورودی‌ها و دستکاری مستقیم وضعیت‌های داخلی بدون انکپسولیشن.",
          "استفاده از لاگ‌های ساختاریافته به همراه شناسه رهگیری.",
          "تعریف متغیرهای تغییرناپذیر با کلمه کلیدی final."
        ],
        "correctIndex": 1,
        "explanation": "تخریب انکپسولیشن و رها کردن متغیرهای مشترک بدون محافظت در برابر تغییر، شایع‌ترین منشا باگ‌های پروداکشن در سیستم‌های جاوا است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Profiles and Environment Management را برای مصاحبه‌کننده تشریح می‌کنید؟",
        "answer": "در پاسخ باید ابتدا به مشکل پایه‌ای که این مفهوم حل می‌کند اشاره کرد (مانند حل گلوگاه‌های مقیاس، پایداری یا تفکیک دغدغه‌ها). سپس معماری زیرین و نحوه رفتار آن در زمان اجرای JVM را شرح داده و در نهایت مصالحه‌های آن با راهکارهای جایگزین را با تکیه بر تجربه عملی پروداکشن تحلیل نمود.",
        "keyTakeaways": [
          "تمرکز بر چرایی مهندسی و ارزش تجاری به جای حفظ کردن دستورات",
          "اشاره به رفتار سیستم در زمان بار سنگین و سناریوهای شکست"
        ]
      },
      {
        "question": "چه مصالحه‌هایی (Trade-offs) در به‌کارگیری این الگو وجود دارد و چه زمان نباید از آن استفاده کرد؟",
        "answer": "هیچ الگویی گلوله نقره‌ای نیست. این الگو سادگی اولیه کد را فدای انعطاف‌پذیری و مقیاس‌پذیری در آینده می‌کند. برای پروژه‌های بسیار کوچک یا اسکریپت‌های موقت، اضافه کردن این سطح از انتزاع ممکن است پیچیدگی بی‌مورد ایجاد نماید؛ اما در سیستم‌های سازمانی بزرگ، کاملاً توجیه‌پذیر است.",
        "keyTakeaways": [
          "آگاهی از مفهوم Over-engineering",
          "سنجش تناسب الگو با نیازمندی‌های واقعی سیستم"
        ]
      }
    ],
    "summary": "در این جلسه مبحث تفکیک محیط‌ها با Spring Profiles و مدیریت تنظیمات Dev/Test/Prod را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
    "references": [
      {
        "title": "Java Platform Standard Documentation",
        "url": "https://dev.java/"
      },
      {
        "title": "Spring Framework Reference Documentation",
        "url": "https://docs.spring.io/spring-framework/reference/"
      }
    ],
    "capstoneConnection": {
      "phase": "فاز مربوط به هفته 5",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Profiles and Environment Management",
      "filesToModify": [
        "src/main/java/com/academy/order/profilesandenvironmentmanagement/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  }
];
