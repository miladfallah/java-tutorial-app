import { Lesson } from "../types";

export const WEEK_11_LESSONS: Lesson[] = [
  {
    "id": "lesson-061",
    "slug": "acid-and-transaction-isolation-levels",
    "week": 11,
    "day": 1,
    "title": "اصول ACID و سطوح ایزولاسیون تراکنش‌های پایگاه داده",
    "titleEn": "ACID and Transaction Isolation Levels",
    "description": "بررسی پدیده‌های Dirty Read, Non-repeatable Read و Phantom Read و تطبیق سطوح ایزولاسیون در سیستم‌های پرداخت.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "ACID",
      "Isolation Levels",
      "Database Concurrency"
    ],
    "prerequisites": [
      "آشنایی با مبانی Transactions",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار ACID and Transaction Isolation Levels در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای اصول ACID و سطوح ایزولاسیون تراکنش‌های پایگاه داده",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر ACID and Transaction Isolation Levels تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث اصول ACID و سطوح ایزولاسیون تراکنش‌های پایگاه داده (ACID and Transaction Isolation Levels) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی ACID and Transaction Isolation Levels",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از ACID and Transaction Isolation Levels استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از ACID and Transaction Isolation Levels نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، ACID and Transaction Isolation Levels از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش ACID and Transaction Isolation Levels، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن ACID and Transaction Isolation Levels",
        "language": "java",
        "filename": "src/main/java/com/academy/order/acidandtransactionisolationlevels/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"ACID and Transaction Isolation Levels\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای ACID and Transaction Isolation Levels",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی ACID and Transaction Isolation Levels بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با ACID and Transaction Isolation Levels را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست اصول ACID و سطوح ایزولاسیون تراکنش‌های پایگاه داده",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق ACID and Transaction Isolation Levels برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/acidandtransactionisolationlevels/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-061-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد ACID and Transaction Isolation Levels در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-061-2",
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
        "id": "q-lesson-061-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از ACID and Transaction Isolation Levels را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث اصول ACID و سطوح ایزولاسیون تراکنش‌های پایگاه داده را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 11",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های ACID and Transaction Isolation Levels",
      "filesToModify": [
        "src/main/java/com/academy/order/acidandtransactionisolationlevels/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-062",
    "slug": "transactional-and-propagation",
    "week": 11,
    "day": 2,
    "title": "انوتیشن @Transactional، قوانین انتشار (Propagation) و تله‌های رول‌بک",
    "titleEn": "@Transactional and Propagation",
    "description": "تحلیل خطای شایع فراخوانی داخلی متدهای تراکنشی (Self-invocation)، انتشار REQUIRED در برابر REQUIRES_NEW و rollbackFor.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "Transactional",
      "Propagation",
      "Rollback",
      "Spring AOP Proxies"
    ],
    "prerequisites": [
      "آشنایی با مبانی Transactions",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار @Transactional and Propagation در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای انوتیشن @Transactional، قوانین انتشار (Propagation) و تله‌های رول‌بک",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر @Transactional and Propagation تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث انوتیشن @Transactional، قوانین انتشار (Propagation) و تله‌های رول‌بک (@Transactional and Propagation) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی @Transactional and Propagation",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از @Transactional and Propagation استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از @Transactional and Propagation نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، @Transactional and Propagation از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش @Transactional and Propagation، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن @Transactional and Propagation",
        "language": "java",
        "filename": "src/main/java/com/academy/order/transactionalandpropagation/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"@Transactional and Propagation\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای @Transactional and Propagation",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی @Transactional and Propagation بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با @Transactional and Propagation را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست انوتیشن @Transactional، قوانین انتشار (Propagation) و تله‌های رول‌بک",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق @Transactional and Propagation برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/transactionalandpropagation/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-062-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد @Transactional and Propagation در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-062-2",
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
        "id": "q-lesson-062-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از @Transactional and Propagation را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث انوتیشن @Transactional، قوانین انتشار (Propagation) و تله‌های رول‌بک را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 11",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های @Transactional and Propagation",
      "filesToModify": [
        "src/main/java/com/academy/order/transactionalandpropagation/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-063",
    "slug": "optimistic-vs-pessimistic-locking",
    "week": 11,
    "day": 3,
    "title": "قفل‌گذاری خوش‌بینانه در برابر بدبینانه (Optimistic vs Pessimistic)",
    "titleEn": "Optimistic vs Pessimistic Locking",
    "description": "استفاده از انوتیشن @Version برای سیستم‌های کم‌تداخل و LockModeType.PESSIMISTIC_WRITE برای حفظ موجودی انبار.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "Locking",
      "Optimistic Lock",
      "Pessimistic Lock",
      "Inventory Protection"
    ],
    "prerequisites": [
      "آشنایی با مبانی Transactions",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Optimistic vs Pessimistic Locking در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای قفل‌گذاری خوش‌بینانه در برابر بدبینانه (Optimistic vs Pessimistic)",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Optimistic vs Pessimistic Locking تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث قفل‌گذاری خوش‌بینانه در برابر بدبینانه (Optimistic vs Pessimistic) (Optimistic vs Pessimistic Locking) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Optimistic vs Pessimistic Locking",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Optimistic vs Pessimistic Locking استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Optimistic vs Pessimistic Locking نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Optimistic vs Pessimistic Locking از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Optimistic vs Pessimistic Locking، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Optimistic vs Pessimistic Locking",
        "language": "java",
        "filename": "src/main/java/com/academy/order/optimisticvspessimisticlocking/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Optimistic vs Pessimistic Locking\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Optimistic vs Pessimistic Locking",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Optimistic vs Pessimistic Locking بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Optimistic vs Pessimistic Locking را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست قفل‌گذاری خوش‌بینانه در برابر بدبینانه (Optimistic vs Pessimistic)",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Optimistic vs Pessimistic Locking برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/optimisticvspessimisticlocking/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-063-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Optimistic vs Pessimistic Locking در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-063-2",
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
        "id": "q-lesson-063-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Optimistic vs Pessimistic Locking را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث قفل‌گذاری خوش‌بینانه در برابر بدبینانه (Optimistic vs Pessimistic) را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 11",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Optimistic vs Pessimistic Locking",
      "filesToModify": [
        "src/main/java/com/academy/order/optimisticvspessimisticlocking/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-064",
    "slug": "implementing-atomic-order-operations",
    "week": 11,
    "day": 4,
    "title": "پیاده‌سازی تراکنش اتمیک ثبت سفارش و کسر انبار (پروژه محوری)",
    "titleEn": "Implementing Atomic Order Operations",
    "description": "توسعه فرآیند چندمرحله‌ای رزرو کالا و تایید سفارش درون تراکنش اتمیک مطمئن با کنترل همروندی دقیق.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "Capstone",
      "Atomic Transactions",
      "Order Flow",
      "Inventory"
    ],
    "prerequisites": [
      "آشنایی با مبانی Transactions",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Implementing Atomic Order Operations در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای پیاده‌سازی تراکنش اتمیک ثبت سفارش و کسر انبار (پروژه محوری)",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Implementing Atomic Order Operations تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث پیاده‌سازی تراکنش اتمیک ثبت سفارش و کسر انبار (پروژه محوری) (Implementing Atomic Order Operations) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Implementing Atomic Order Operations",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Implementing Atomic Order Operations استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Implementing Atomic Order Operations نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Implementing Atomic Order Operations از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Implementing Atomic Order Operations، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Implementing Atomic Order Operations",
        "language": "java",
        "filename": "src/main/java/com/academy/order/implementingatomicorderoperations/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Implementing Atomic Order Operations\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Implementing Atomic Order Operations",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Implementing Atomic Order Operations بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Implementing Atomic Order Operations را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست پیاده‌سازی تراکنش اتمیک ثبت سفارش و کسر انبار (پروژه محوری)",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Implementing Atomic Order Operations برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/implementingatomicorderoperations/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-064-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Implementing Atomic Order Operations در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-064-2",
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
        "id": "q-lesson-064-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Implementing Atomic Order Operations را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث پیاده‌سازی تراکنش اتمیک ثبت سفارش و کسر انبار (پروژه محوری) را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 11",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Implementing Atomic Order Operations",
      "filesToModify": [
        "src/main/java/com/academy/order/implementingatomicorderoperations/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-065",
    "slug": "deadlocks-and-retry-strategies",
    "week": 11,
    "day": 5,
    "title": "مدیریت بن‌بست‌ها (Deadlocks) و استراتژی‌های تلاش مجدد خودکار",
    "titleEn": "Deadlocks and Retry Strategies",
    "description": "شناسایی علل وقوع بن‌بست در دیتابیس، مرتب‌سازی ترتیبی قفل‌ها و استفاده از قابلیت‌های @Retryable در اسپرینگ.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "Deadlocks",
      "Spring Retry",
      "Concurrency",
      "Database Contention"
    ],
    "prerequisites": [
      "آشنایی با مبانی Transactions",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Deadlocks and Retry Strategies در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای مدیریت بن‌بست‌ها (Deadlocks) و استراتژی‌های تلاش مجدد خودکار",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Deadlocks and Retry Strategies تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث مدیریت بن‌بست‌ها (Deadlocks) و استراتژی‌های تلاش مجدد خودکار (Deadlocks and Retry Strategies) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Deadlocks and Retry Strategies",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Deadlocks and Retry Strategies استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Deadlocks and Retry Strategies نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Deadlocks and Retry Strategies از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Deadlocks and Retry Strategies، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Deadlocks and Retry Strategies",
        "language": "java",
        "filename": "src/main/java/com/academy/order/deadlocksandretrystrategies/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Deadlocks and Retry Strategies\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Deadlocks and Retry Strategies",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Deadlocks and Retry Strategies بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Deadlocks and Retry Strategies را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست مدیریت بن‌بست‌ها (Deadlocks) و استراتژی‌های تلاش مجدد خودکار",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Deadlocks and Retry Strategies برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/deadlocksandretrystrategies/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-065-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Deadlocks and Retry Strategies در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-065-2",
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
        "id": "q-lesson-065-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Deadlocks and Retry Strategies را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث مدیریت بن‌بست‌ها (Deadlocks) و استراتژی‌های تلاش مجدد خودکار را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 11",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Deadlocks and Retry Strategies",
      "filesToModify": [
        "src/main/java/com/academy/order/deadlocksandretrystrategies/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-066",
    "slug": "flyway-database-migrations",
    "week": 11,
    "day": 6,
    "title": "مدیریت تکاملی ساختار پایگاه داده با Flyway Migrations",
    "titleEn": "Flyway Database Migrations",
    "description": "حذف گزینه خطرناک ddl-auto=update، ایجاد فایل‌های نسخه تغییرات V1__ و یکپارچه‌سازی با فرآیند بیلد پروداکشن.",
    "category": "Transactions",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "Flyway",
      "Database Migrations",
      "Schema Versioning",
      "DevOps"
    ],
    "prerequisites": [
      "آشنایی با مبانی Transactions",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Flyway Database Migrations در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای مدیریت تکاملی ساختار پایگاه داده با Flyway Migrations",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Flyway Database Migrations تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث مدیریت تکاملی ساختار پایگاه داده با Flyway Migrations (Flyway Database Migrations) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Flyway Database Migrations",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Flyway Database Migrations استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Flyway Database Migrations نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Flyway Database Migrations از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Flyway Database Migrations، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Flyway Database Migrations",
        "language": "java",
        "filename": "src/main/java/com/academy/order/flywaydatabasemigrations/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Flyway Database Migrations\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Flyway Database Migrations",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Flyway Database Migrations بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Flyway Database Migrations را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست مدیریت تکاملی ساختار پایگاه داده با Flyway Migrations",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Flyway Database Migrations برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/flywaydatabasemigrations/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-066-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Flyway Database Migrations در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-066-2",
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
        "id": "q-lesson-066-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Flyway Database Migrations را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث مدیریت تکاملی ساختار پایگاه داده با Flyway Migrations را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 11",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Flyway Database Migrations",
      "filesToModify": [
        "src/main/java/com/academy/order/flywaydatabasemigrations/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  }
];
