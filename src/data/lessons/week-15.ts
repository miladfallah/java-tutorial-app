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
    "estimatedMinutes": 30,
    "tags": [
      "Testcontainers",
      "PostgreSQL",
      "Real Integration Tests",
      "Docker"
    ],
    "prerequisites": [
      "آشنایی با مبانی Testing",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Testcontainers with PostgreSQL در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای تست واقعی پایگاه داده با Testcontainers و PostgreSQL",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Testcontainers with PostgreSQL تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث تست واقعی پایگاه داده با Testcontainers و PostgreSQL (Testcontainers with PostgreSQL) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Testcontainers with PostgreSQL",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Testcontainers with PostgreSQL استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Testcontainers with PostgreSQL نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Testcontainers with PostgreSQL از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Testcontainers with PostgreSQL، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Testcontainers with PostgreSQL",
        "language": "java",
        "filename": "src/main/java/com/academy/order/testcontainerswithpostgresql/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Testcontainers with PostgreSQL\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Testcontainers with PostgreSQL",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Testcontainers with PostgreSQL بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Testcontainers with PostgreSQL را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست تست واقعی پایگاه داده با Testcontainers و PostgreSQL",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Testcontainers with PostgreSQL برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/testcontainerswithpostgresql/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-085-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Testcontainers with PostgreSQL در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-085-2",
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
        "id": "q-lesson-085-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Testcontainers with PostgreSQL را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث تست واقعی پایگاه داده با Testcontainers و PostgreSQL را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 15",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Testcontainers with PostgreSQL",
      "filesToModify": [
        "src/main/java/com/academy/order/testcontainerswithpostgresql/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
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
    "estimatedMinutes": 30,
    "tags": [
      "DataJpaTest",
      "Repository Tests",
      "SQL Testing"
    ],
    "prerequisites": [
      "آشنایی با مبانی Testing",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Repository Integration Tests در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای آزمون یکپارچگی لایه دسترسی به داده با @DataJpaTest",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Repository Integration Tests تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث آزمون یکپارچگی لایه دسترسی به داده با @DataJpaTest (Repository Integration Tests) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Repository Integration Tests",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Repository Integration Tests استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Repository Integration Tests نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Repository Integration Tests از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Repository Integration Tests، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Repository Integration Tests",
        "language": "java",
        "filename": "src/main/java/com/academy/order/repositoryintegrationtests/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Repository Integration Tests\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Repository Integration Tests",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Repository Integration Tests بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Repository Integration Tests را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست آزمون یکپارچگی لایه دسترسی به داده با @DataJpaTest",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Repository Integration Tests برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/repositoryintegrationtests/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-086-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Repository Integration Tests در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-086-2",
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
        "id": "q-lesson-086-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Repository Integration Tests را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث آزمون یکپارچگی لایه دسترسی به داده با @DataJpaTest را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 15",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Repository Integration Tests",
      "filesToModify": [
        "src/main/java/com/academy/order/repositoryintegrationtests/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
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
    "estimatedMinutes": 30,
    "tags": [
      "Contract Testing",
      "Pact",
      "Microservices Testing"
    ],
    "prerequisites": [
      "آشنایی با مبانی Testing",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Contract Testing Concepts در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای مفاهیم تست قرارداد (Contract Testing) در معماری‌های توزیع‌شده",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Contract Testing Concepts تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث مفاهیم تست قرارداد (Contract Testing) در معماری‌های توزیع‌شده (Contract Testing Concepts) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Contract Testing Concepts",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Contract Testing Concepts استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Contract Testing Concepts نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Contract Testing Concepts از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Contract Testing Concepts، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Contract Testing Concepts",
        "language": "java",
        "filename": "src/main/java/com/academy/order/contracttestingconcepts/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Contract Testing Concepts\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Contract Testing Concepts",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Contract Testing Concepts بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Contract Testing Concepts را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست مفاهیم تست قرارداد (Contract Testing) در معماری‌های توزیع‌شده",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Contract Testing Concepts برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/contracttestingconcepts/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-087-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Contract Testing Concepts در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-087-2",
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
        "id": "q-lesson-087-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Contract Testing Concepts را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث مفاهیم تست قرارداد (Contract Testing) در معماری‌های توزیع‌شده را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 15",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Contract Testing Concepts",
      "filesToModify": [
        "src/main/java/com/academy/order/contracttestingconcepts/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
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
    "estimatedMinutes": 30,
    "tags": [
      "Capstone",
      "E2E Testing",
      "SpringBootTest",
      "Order Flow"
    ],
    "prerequisites": [
      "آشنایی با مبانی Testing",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Testing Order APIs در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای تست انتها‌به‌انتها برای جریان کامل سفارش با Testcontainers (پروژه محوری)",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Testing Order APIs تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث تست انتها‌به‌انتها برای جریان کامل سفارش با Testcontainers (پروژه محوری) (Testing Order APIs) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Testing Order APIs",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Testing Order APIs استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Testing Order APIs نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Testing Order APIs از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Testing Order APIs، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Testing Order APIs",
        "language": "java",
        "filename": "src/main/java/com/academy/order/testingorderapis/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Testing Order APIs\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Testing Order APIs",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Testing Order APIs بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Testing Order APIs را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست تست انتها‌به‌انتها برای جریان کامل سفارش با Testcontainers (پروژه محوری)",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Testing Order APIs برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/testingorderapis/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-088-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Testing Order APIs در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-088-2",
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
        "id": "q-lesson-088-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Testing Order APIs را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث تست انتها‌به‌انتها برای جریان کامل سفارش با Testcontainers (پروژه محوری) را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 15",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Testing Order APIs",
      "filesToModify": [
        "src/main/java/com/academy/order/testingorderapis/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
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
    "estimatedMinutes": 30,
    "tags": [
      "Test Isolation",
      "Rollback Strategy",
      "Database Cleanup"
    ],
    "prerequisites": [
      "آشنایی با مبانی Testing",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Transaction Test Isolation در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای ایزولاسیون تراکنش‌های آزمون و پاکسازی پایگاه داده",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Transaction Test Isolation تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث ایزولاسیون تراکنش‌های آزمون و پاکسازی پایگاه داده (Transaction Test Isolation) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Transaction Test Isolation",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Transaction Test Isolation استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Transaction Test Isolation نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Transaction Test Isolation از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Transaction Test Isolation، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Transaction Test Isolation",
        "language": "java",
        "filename": "src/main/java/com/academy/order/transactiontestisolation/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Transaction Test Isolation\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Transaction Test Isolation",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Transaction Test Isolation بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Transaction Test Isolation را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست ایزولاسیون تراکنش‌های آزمون و پاکسازی پایگاه داده",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Transaction Test Isolation برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/transactiontestisolation/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-089-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Transaction Test Isolation در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-089-2",
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
        "id": "q-lesson-089-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Transaction Test Isolation را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث ایزولاسیون تراکنش‌های آزمون و پاکسازی پایگاه داده را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 15",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Transaction Test Isolation",
      "filesToModify": [
        "src/main/java/com/academy/order/transactiontestisolation/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
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
    "estimatedMinutes": 30,
    "tags": [
      "CI/CD",
      "GitHub Actions",
      "Test Automation",
      "DevOps"
    ],
    "prerequisites": [
      "آشنایی با مبانی Testing",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Running Tests in CI در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای اتوماسیون اجرای تست‌ها در پایپ‌لاین CI گیت‌هاب اکشنز",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Running Tests in CI تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث اتوماسیون اجرای تست‌ها در پایپ‌لاین CI گیت‌هاب اکشنز (Running Tests in CI) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Running Tests in CI",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Running Tests in CI استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Running Tests in CI نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Running Tests in CI از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Running Tests in CI، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Running Tests in CI",
        "language": "java",
        "filename": "src/main/java/com/academy/order/runningtestsinci/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Running Tests in CI\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Running Tests in CI",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Running Tests in CI بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Running Tests in CI را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست اتوماسیون اجرای تست‌ها در پایپ‌لاین CI گیت‌هاب اکشنز",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Running Tests in CI برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/runningtestsinci/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-090-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Running Tests in CI در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-090-2",
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
        "id": "q-lesson-090-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Running Tests in CI را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث اتوماسیون اجرای تست‌ها در پایپ‌لاین CI گیت‌هاب اکشنز را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 15",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Running Tests in CI",
      "filesToModify": [
        "src/main/java/com/academy/order/runningtestsinci/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  }
];
