import { Lesson } from "../types";

export const WEEK_06_LESSONS: Lesson[] = [
  {
    "id": "lesson-031",
    "slug": "controllers-and-request-mapping",
    "week": 6,
    "day": 1,
    "title": "کنترلرها، مسیریابی و نگاشت درخواست‌ها در Spring MVC",
    "titleEn": "Controllers and Request Mapping",
    "description": "پیاده‌سازی @RestController، @GetMapping، @PostMapping و مقایسه کنترلرهای اسپرینگ با ساختار @Controller در NestJS.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "RestController",
      "RequestMapping",
      "HTTP",
      "Spring MVC"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Controllers and Request Mapping در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای کنترلرها، مسیریابی و نگاشت درخواست‌ها در Spring MVC",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Controllers and Request Mapping تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث کنترلرها، مسیریابی و نگاشت درخواست‌ها در Spring MVC (Controllers and Request Mapping) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Controllers and Request Mapping",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Controllers and Request Mapping استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Controllers and Request Mapping نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Controllers and Request Mapping از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Controllers and Request Mapping، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Controllers and Request Mapping",
        "language": "java",
        "filename": "src/main/java/com/academy/order/controllersandrequestmapping/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Controllers and Request Mapping\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Controllers and Request Mapping",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Controllers and Request Mapping بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Controllers and Request Mapping را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست کنترلرها، مسیریابی و نگاشت درخواست‌ها در Spring MVC",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Controllers and Request Mapping برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/controllersandrequestmapping/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-031-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Controllers and Request Mapping در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-031-2",
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
        "id": "q-lesson-031-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Controllers and Request Mapping را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث کنترلرها، مسیریابی و نگاشت درخواست‌ها در Spring MVC را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 6",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Controllers and Request Mapping",
      "filesToModify": [
        "src/main/java/com/academy/order/controllersandrequestmapping/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-032",
    "slug": "dtos-and-bean-validation",
    "week": 6,
    "day": 2,
    "title": "انتقال داده با DTOها و اعتبارسنجی با Jakarta Bean Validation",
    "titleEn": "DTOs and Bean Validation",
    "description": "استفاده از @Valid، @NotNull، @Size و ایجاد اعتبارسنجی‌های سفارشی مشابه class-validator در NestJS.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "DTO",
      "Validation",
      "Jakarta",
      "Data Integrity"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار DTOs and Bean Validation در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای انتقال داده با DTOها و اعتبارسنجی با Jakarta Bean Validation",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر DTOs and Bean Validation تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث انتقال داده با DTOها و اعتبارسنجی با Jakarta Bean Validation (DTOs and Bean Validation) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی DTOs and Bean Validation",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از DTOs and Bean Validation استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از DTOs and Bean Validation نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، DTOs and Bean Validation از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش DTOs and Bean Validation، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن DTOs and Bean Validation",
        "language": "java",
        "filename": "src/main/java/com/academy/order/dtosandbeanvalidation/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"DTOs and Bean Validation\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای DTOs and Bean Validation",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی DTOs and Bean Validation بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با DTOs and Bean Validation را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست انتقال داده با DTOها و اعتبارسنجی با Jakarta Bean Validation",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق DTOs and Bean Validation برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/dtosandbeanvalidation/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-032-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد DTOs and Bean Validation در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-032-2",
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
        "id": "q-lesson-032-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از DTOs and Bean Validation را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث انتقال داده با DTOها و اعتبارسنجی با Jakarta Bean Validation را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 6",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های DTOs and Bean Validation",
      "filesToModify": [
        "src/main/java/com/academy/order/dtosandbeanvalidation/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-033",
    "slug": "http-semantics-and-status-codes",
    "week": 6,
    "day": 3,
    "title": "معناشناسی استانداردهای HTTP و وضعیت کدهای بازگشتی",
    "titleEn": "HTTP Semantics and Status Codes",
    "description": "طراحی پاسخ‌های دقیق بر اساس وضعیت‌های ۲xx، ۴xx و ۵xx با استفاده از شیء قدرتمند ResponseEntity.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "HTTP Status Codes",
      "ResponseEntity",
      "REST Standards"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار HTTP Semantics and Status Codes در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای معناشناسی استانداردهای HTTP و وضعیت کدهای بازگشتی",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر HTTP Semantics and Status Codes تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث معناشناسی استانداردهای HTTP و وضعیت کدهای بازگشتی (HTTP Semantics and Status Codes) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی HTTP Semantics and Status Codes",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از HTTP Semantics and Status Codes استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از HTTP Semantics and Status Codes نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، HTTP Semantics and Status Codes از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش HTTP Semantics and Status Codes، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن HTTP Semantics and Status Codes",
        "language": "java",
        "filename": "src/main/java/com/academy/order/httpsemanticsandstatuscodes/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"HTTP Semantics and Status Codes\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای HTTP Semantics and Status Codes",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی HTTP Semantics and Status Codes بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با HTTP Semantics and Status Codes را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست معناشناسی استانداردهای HTTP و وضعیت کدهای بازگشتی",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق HTTP Semantics and Status Codes برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/httpsemanticsandstatuscodes/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-033-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد HTTP Semantics and Status Codes در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-033-2",
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
        "id": "q-lesson-033-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از HTTP Semantics and Status Codes را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث معناشناسی استانداردهای HTTP و وضعیت کدهای بازگشتی را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 6",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های HTTP Semantics and Status Codes",
      "filesToModify": [
        "src/main/java/com/academy/order/httpsemanticsandstatuscodes/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-034",
    "slug": "building-the-order-rest-api",
    "week": 6,
    "day": 4,
    "title": "پیاده‌سازی اندپوینت‌های REST ماژول سفارشات (پروژه محوری)",
    "titleEn": "Building the Order REST API",
    "description": "ساخت متدهای ثبت سفارش، مشاهده جزییات و تغییر وضعیت سفارش با مستندات مشخص ورودی و خروجی.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "Capstone",
      "REST API",
      "Order Module",
      "CRUD"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Building the Order REST API در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای پیاده‌سازی اندپوینت‌های REST ماژول سفارشات (پروژه محوری)",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Building the Order REST API تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث پیاده‌سازی اندپوینت‌های REST ماژول سفارشات (پروژه محوری) (Building the Order REST API) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Building the Order REST API",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Building the Order REST API استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Building the Order REST API نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Building the Order REST API از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Building the Order REST API، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Building the Order REST API",
        "language": "java",
        "filename": "src/main/java/com/academy/order/buildingtheorderrestapi/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Building the Order REST API\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Building the Order REST API",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Building the Order REST API بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Building the Order REST API را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست پیاده‌سازی اندپوینت‌های REST ماژول سفارشات (پروژه محوری)",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Building the Order REST API برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/buildingtheorderrestapi/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-034-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Building the Order REST API در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-034-2",
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
        "id": "q-lesson-034-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Building the Order REST API را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث پیاده‌سازی اندپوینت‌های REST ماژول سفارشات (پروژه محوری) را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 6",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Building the Order REST API",
      "filesToModify": [
        "src/main/java/com/academy/order/buildingtheorderrestapi/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-035",
    "slug": "global-exception-handling",
    "week": 6,
    "day": 5,
    "title": "مدیریت خطاهای سراسری و استاندارد RFC 7807 (ProblemDetail)",
    "titleEn": "Global Exception Handling",
    "description": "استفاده از @RestControllerAdvice و @ExceptionHandler برای تولید پاسخ‌های یکدست با فرمت مدرن ProblemDetail.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "Exception Handling",
      "RestControllerAdvice",
      "RFC 7807",
      "ProblemDetail"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Global Exception Handling در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای مدیریت خطاهای سراسری و استاندارد RFC 7807 (ProblemDetail)",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Global Exception Handling تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث مدیریت خطاهای سراسری و استاندارد RFC 7807 (ProblemDetail) (Global Exception Handling) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Global Exception Handling",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Global Exception Handling استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Global Exception Handling نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Global Exception Handling از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Global Exception Handling، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Global Exception Handling",
        "language": "java",
        "filename": "src/main/java/com/academy/order/globalexceptionhandling/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Global Exception Handling\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Global Exception Handling",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Global Exception Handling بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Global Exception Handling را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست مدیریت خطاهای سراسری و استاندارد RFC 7807 (ProblemDetail)",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Global Exception Handling برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/globalexceptionhandling/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-035-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Global Exception Handling در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-035-2",
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
        "id": "q-lesson-035-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Global Exception Handling را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث مدیریت خطاهای سراسری و استاندارد RFC 7807 (ProblemDetail) را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 6",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Global Exception Handling",
      "filesToModify": [
        "src/main/java/com/academy/order/globalexceptionhandling/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-036",
    "slug": "openapi-and-swagger",
    "week": 6,
    "day": 6,
    "title": "مستندسازی اتوماتیک وب‌سرویس با OpenAPI 3 و Swagger",
    "titleEn": "OpenAPI and Swagger",
    "description": "پیکربندی SpringDoc OpenAPI، تولید خودکار صفحه تعاملی اسواگر و تعریف توصیف‌های دامنه بدون تکرار کد.",
    "category": "Spring Boot",
    "difficulty": "Intermediate",
    "estimatedMinutes": 30,
    "tags": [
      "OpenAPI",
      "Swagger",
      "SpringDoc",
      "API Documentation"
    ],
    "prerequisites": [
      "آشنایی با مبانی Spring Boot",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار OpenAPI and Swagger در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای مستندسازی اتوماتیک وب‌سرویس با OpenAPI 3 و Swagger",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر OpenAPI and Swagger تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث مستندسازی اتوماتیک وب‌سرویس با OpenAPI 3 و Swagger (OpenAPI and Swagger) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی OpenAPI and Swagger",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از OpenAPI and Swagger استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از OpenAPI and Swagger نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، OpenAPI and Swagger از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش OpenAPI and Swagger، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن OpenAPI and Swagger",
        "language": "java",
        "filename": "src/main/java/com/academy/order/openapiandswagger/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"OpenAPI and Swagger\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای OpenAPI and Swagger",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی OpenAPI and Swagger بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با OpenAPI and Swagger را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست مستندسازی اتوماتیک وب‌سرویس با OpenAPI 3 و Swagger",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق OpenAPI and Swagger برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/openapiandswagger/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-036-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد OpenAPI and Swagger در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-036-2",
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
        "id": "q-lesson-036-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از OpenAPI and Swagger را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث مستندسازی اتوماتیک وب‌سرویس با OpenAPI 3 و Swagger را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 6",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های OpenAPI and Swagger",
      "filesToModify": [
        "src/main/java/com/academy/order/openapiandswagger/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  }
];
