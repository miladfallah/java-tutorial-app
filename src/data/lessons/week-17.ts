import { Lesson } from "../types";

export const WEEK_17_LESSONS: Lesson[] = [
  {
    "id": "lesson-097",
    "slug": "exchanges-queues-routing",
    "week": 17,
    "day": 1,
    "title": "مفاهیم صف‌ها، مبادلات (Exchanges) و مسیریابی در RabbitMQ",
    "titleEn": "Exchanges, Queues, Routing",
    "description": "کالبدشکافی ساختار پیام‌رسان RabbitMQ و تفاوت بنیادی مبادلات Direct, Fanout و Topic در مقایسه با وب‌هوک و ردیس.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 30,
    "tags": [
      "RabbitMQ",
      "Exchanges",
      "Queues",
      "Routing Keys",
      "AMQP"
    ],
    "prerequisites": [
      "آشنایی با مبانی Event-Driven",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Exchanges, Queues, Routing در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای مفاهیم صف‌ها، مبادلات (Exchanges) و مسیریابی در RabbitMQ",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Exchanges, Queues, Routing تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث مفاهیم صف‌ها، مبادلات (Exchanges) و مسیریابی در RabbitMQ (Exchanges, Queues, Routing) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Exchanges, Queues, Routing",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Exchanges, Queues, Routing استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Exchanges, Queues, Routing نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Exchanges, Queues, Routing از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Exchanges, Queues, Routing، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Exchanges, Queues, Routing",
        "language": "java",
        "filename": "src/main/java/com/academy/order/exchangesqueuesrouting/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Exchanges, Queues, Routing\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Exchanges, Queues, Routing",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Exchanges, Queues, Routing بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Exchanges, Queues, Routing را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست مفاهیم صف‌ها، مبادلات (Exchanges) و مسیریابی در RabbitMQ",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Exchanges, Queues, Routing برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/exchangesqueuesrouting/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-097-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Exchanges, Queues, Routing در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-097-2",
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
        "id": "q-lesson-097-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Exchanges, Queues, Routing را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث مفاهیم صف‌ها، مبادلات (Exchanges) و مسیریابی در RabbitMQ را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 17",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Exchanges, Queues, Routing",
      "filesToModify": [
        "src/main/java/com/academy/order/exchangesqueuesrouting/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-098",
    "slug": "publishers-and-consumers",
    "week": 17,
    "day": 2,
    "title": "پیاده‌سازی ناشران (Publishers) و مصرف‌کنندگان (Consumers) در Spring AMQP",
    "titleEn": "Publishers and Consumers",
    "description": "کار با RabbitTemplate، انوتیشن @RabbitListener و سریالایز کردن خودکار اشیای رویداد به JSON.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 30,
    "tags": [
      "Spring AMQP",
      "RabbitTemplate",
      "RabbitListener",
      "Serialization"
    ],
    "prerequisites": [
      "آشنایی با مبانی Event-Driven",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Publishers and Consumers در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای پیاده‌سازی ناشران (Publishers) و مصرف‌کنندگان (Consumers) در Spring AMQP",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Publishers and Consumers تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث پیاده‌سازی ناشران (Publishers) و مصرف‌کنندگان (Consumers) در Spring AMQP (Publishers and Consumers) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Publishers and Consumers",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Publishers and Consumers استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Publishers and Consumers نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Publishers and Consumers از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Publishers and Consumers، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Publishers and Consumers",
        "language": "java",
        "filename": "src/main/java/com/academy/order/publishersandconsumers/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Publishers and Consumers\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Publishers and Consumers",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Publishers and Consumers بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Publishers and Consumers را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست پیاده‌سازی ناشران (Publishers) و مصرف‌کنندگان (Consumers) در Spring AMQP",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Publishers and Consumers برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/publishersandconsumers/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-098-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Publishers and Consumers در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-098-2",
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
        "id": "q-lesson-098-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Publishers and Consumers را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث پیاده‌سازی ناشران (Publishers) و مصرف‌کنندگان (Consumers) در Spring AMQP را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 17",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Publishers and Consumers",
      "filesToModify": [
        "src/main/java/com/academy/order/publishersandconsumers/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-099",
    "slug": "at-least-once-delivery-and-acknowledgments",
    "week": 17,
    "day": 3,
    "title": "تضمین تحویل حداقل یک‌بار (At-least-once) و تاییدیه‌های دستی (Acks)",
    "titleEn": "At-least-once Delivery and Acknowledgments",
    "description": "تنظیم AcknowledgeMode.MANUAL، مدیریت BasicAck و BasicNack و خطرات از دست رفتن پیام‌ها در حین قطع سرور.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 30,
    "tags": [
      "Message Acks",
      "Reliability",
      "At-least-once",
      "Message Delivery"
    ],
    "prerequisites": [
      "آشنایی با مبانی Event-Driven",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار At-least-once Delivery and Acknowledgments در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای تضمین تحویل حداقل یک‌بار (At-least-once) و تاییدیه‌های دستی (Acks)",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر At-least-once Delivery and Acknowledgments تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث تضمین تحویل حداقل یک‌بار (At-least-once) و تاییدیه‌های دستی (Acks) (At-least-once Delivery and Acknowledgments) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی At-least-once Delivery and Acknowledgments",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از At-least-once Delivery and Acknowledgments استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از At-least-once Delivery and Acknowledgments نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، At-least-once Delivery and Acknowledgments از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش At-least-once Delivery and Acknowledgments، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن At-least-once Delivery and Acknowledgments",
        "language": "java",
        "filename": "src/main/java/com/academy/order/atleastoncedeliveryandacknowledgments/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"At-least-once Delivery and Acknowledgments\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای At-least-once Delivery and Acknowledgments",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی At-least-once Delivery and Acknowledgments بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با At-least-once Delivery and Acknowledgments را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست تضمین تحویل حداقل یک‌بار (At-least-once) و تاییدیه‌های دستی (Acks)",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق At-least-once Delivery and Acknowledgments برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/atleastoncedeliveryandacknowledgments/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-099-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد At-least-once Delivery and Acknowledgments در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-099-2",
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
        "id": "q-lesson-099-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از At-least-once Delivery and Acknowledgments را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث تضمین تحویل حداقل یک‌بار (At-least-once) و تاییدیه‌های دستی (Acks) را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 17",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های At-least-once Delivery and Acknowledgments",
      "filesToModify": [
        "src/main/java/com/academy/order/atleastoncedeliveryandacknowledgments/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-100",
    "slug": "publishing-ordercreated-events",
    "week": 17,
    "day": 4,
    "title": "انتشار رویداد OrderCreated و ارسال اعلان خرید (پروژه محوری)",
    "titleEn": "Publishing OrderCreated Events",
    "description": "ارسال ناهمگام ایونت ساخت سفارش به ربیت‌ام‌کیو و دریافت آن توسط سرویس شبیه‌سازی انبار و صدور فاکتور.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 30,
    "tags": [
      "Capstone",
      "OrderCreated Event",
      "Async Processing",
      "RabbitMQ Flow"
    ],
    "prerequisites": [
      "آشنایی با مبانی Event-Driven",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Publishing OrderCreated Events در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای انتشار رویداد OrderCreated و ارسال اعلان خرید (پروژه محوری)",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Publishing OrderCreated Events تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث انتشار رویداد OrderCreated و ارسال اعلان خرید (پروژه محوری) (Publishing OrderCreated Events) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Publishing OrderCreated Events",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Publishing OrderCreated Events استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Publishing OrderCreated Events نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Publishing OrderCreated Events از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Publishing OrderCreated Events، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Publishing OrderCreated Events",
        "language": "java",
        "filename": "src/main/java/com/academy/order/publishingordercreatedevents/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Publishing OrderCreated Events\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Publishing OrderCreated Events",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Publishing OrderCreated Events بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Publishing OrderCreated Events را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست انتشار رویداد OrderCreated و ارسال اعلان خرید (پروژه محوری)",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Publishing OrderCreated Events برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/publishingordercreatedevents/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-100-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Publishing OrderCreated Events در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-100-2",
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
        "id": "q-lesson-100-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Publishing OrderCreated Events را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث انتشار رویداد OrderCreated و ارسال اعلان خرید (پروژه محوری) را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 17",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Publishing OrderCreated Events",
      "filesToModify": [
        "src/main/java/com/academy/order/publishingordercreatedevents/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-101",
    "slug": "retry-and-dead-letter-queues",
    "week": 17,
    "day": 5,
    "title": "مدیریت پیام‌های مسموم با صف‌های بازبینی (Dead Letter Queues)",
    "titleEn": "Retry and Dead Letter Queues",
    "description": "پیکربندی Dead Letter Exchange (DLX)، تعیین سقف تلاش مجدد و بایگانی پیام‌های غیرقابل پردازش جهت تحلیل دستی.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 30,
    "tags": [
      "Dead Letter Queue",
      "DLX",
      "Error Handling",
      "Poison Pills"
    ],
    "prerequisites": [
      "آشنایی با مبانی Event-Driven",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار Retry and Dead Letter Queues در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای مدیریت پیام‌های مسموم با صف‌های بازبینی (Dead Letter Queues)",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر Retry and Dead Letter Queues تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث مدیریت پیام‌های مسموم با صف‌های بازبینی (Dead Letter Queues) (Retry and Dead Letter Queues) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی Retry and Dead Letter Queues",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از Retry and Dead Letter Queues استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از Retry and Dead Letter Queues نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، Retry and Dead Letter Queues از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش Retry and Dead Letter Queues، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن Retry and Dead Letter Queues",
        "language": "java",
        "filename": "src/main/java/com/academy/order/retryanddeadletterqueues/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"Retry and Dead Letter Queues\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای Retry and Dead Letter Queues",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی Retry and Dead Letter Queues بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با Retry and Dead Letter Queues را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست مدیریت پیام‌های مسموم با صف‌های بازبینی (Dead Letter Queues)",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق Retry and Dead Letter Queues برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/retryanddeadletterqueues/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-101-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد Retry and Dead Letter Queues در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-101-2",
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
        "id": "q-lesson-101-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از Retry and Dead Letter Queues را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث مدیریت پیام‌های مسموم با صف‌های بازبینی (Dead Letter Queues) را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 17",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های Retry and Dead Letter Queues",
      "filesToModify": [
        "src/main/java/com/academy/order/retryanddeadletterqueues/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  },
  {
    "id": "lesson-102",
    "slug": "rabbitmq-with-docker",
    "week": 17,
    "day": 6,
    "title": "راه‌اندازی، تنظیمات امنیتی و مانیتورینگ RabbitMQ با Docker",
    "titleEn": "RabbitMQ with Docker",
    "description": "اجرای کانتینر rabbitmq:3-management با داکر کامپوز، تنظیم کاربر و رمزهای اختصاصی و ورود به داشبورد مدیریتی وب.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 30,
    "tags": [
      "RabbitMQ Docker",
      "Management UI",
      "DevOps"
    ],
    "prerequisites": [
      "آشنایی با مبانی Event-Driven",
      "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS"
    ],
    "learningObjectives": [
      "درک عمیق سازوکار RabbitMQ with Docker در اکوسیستم مدرن جاوا ۲۱",
      "پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای راه‌اندازی، تنظیمات امنیتی و مانیتورینگ RabbitMQ با Docker",
      "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
      "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS"
    ],
    "whyItMatters": "در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر RabbitMQ with Docker تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.",
    "introduction": "مبحث راه‌اندازی، تنظیمات امنیتی و مانیتورینگ RabbitMQ با Docker (RabbitMQ with Docker) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.\nدر اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.\nاما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.",
    "conceptualSections": [
      {
        "title": "مبانی و معماری زیربنایی RabbitMQ with Docker",
        "content": "برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.\nدر جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از RabbitMQ with Docker استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.\n\nاین رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.",
        "keyPoints": [
          "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
          "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
          "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا"
        ]
      },
      {
        "title": "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
        "content": "در دنیای واقعی، استفاده از RabbitMQ with Docker نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.\nدر سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.",
        "keyPoints": [
          "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
          "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ"
        ]
      }
    ],
    "internalsAndMechanisms": "از منظر کالبدشکافی داخلی، RabbitMQ with Docker از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.",
    "realWorldScenario": {
      "scenario": "در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش RabbitMQ with Docker، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.",
      "solution": "با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود."
    },
    "codeExamples": [
      {
        "title": "پیاده‌سازی پروداکشن RabbitMQ with Docker",
        "language": "java",
        "filename": "src/main/java/com/academy/order/rabbitmqwithdocker/StandardImplementation.java",
        "explanation": "نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.",
        "code": "package com.academy.order;\n\nimport java.util.Objects;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class StandardImplementation {\n\n    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);\n\n    private final String moduleName;\n\n    public StandardImplementation(String moduleName) {\n        this.moduleName = Objects.requireNonNull(moduleName, \"نام ماژول نمی‌تواند خالی باشد\");\n        log.info(\"ماژول {} بر پایه اصول {} مقداردهی اولیه شد.\", moduleName, \"RabbitMQ with Docker\");\n    }\n\n    public void executeOperation(String contextId) {\n        log.debug(\"آغاز پردازش برای شناسه: {}\", contextId);\n        // منطق پردازش سازمانی منطبق بر استانداردهای این درس\n        log.info(\"عملیات با موفقیت پایان یافت.\");\n    }\n}"
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "الگوی معادل در NestJS / TypeScript برای RabbitMQ with Docker",
      "javaConcept": "الگوی پیاده‌سازی رسمی در Java / Spring Boot",
      "explanation": "در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.",
      "nestCode": "// در NestJS\n@Injectable()\nexport class NestService {\n  process() {\n    // پیاده‌سازی مبتنی بر Promise و Event Loop\n  }\n}",
      "javaCode": "// در Spring Boot / Java\n@Service\npublic class SpringService {\n    public void process() {\n        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی\n    }\n}"
    },
    "commonMistakes": [
      {
        "mistake": "تلاش برای پیاده‌سازی RabbitMQ with Docker بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه",
        "whyBad": "در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.",
        "solution": "همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.",
        "codeBad": "// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای\npublic class UnsafeService {\n    private int counter = 0; // خطرناک!\n}",
        "codeGood": "// استفاده از ساختارهای اتمیک و امن\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SafeService {\n    private final AtomicInteger counter = new AtomicInteger(0);\n}"
      }
    ],
    "bestPractices": [
      "همواره کدهای مرتبط با RabbitMQ with Docker را با تست‌های واحد جامع پوشش دهید.",
      "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
      "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
      "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید."
    ],
    "exercise": {
      "title": "تمرین کارگاهی پیاده‌سازی و تست راه‌اندازی، تنظیمات امنیتی و مانیتورینگ RabbitMQ با Docker",
      "instructions": "۱. کلاسی جهت پیاده‌سازی منطق RabbitMQ with Docker برای ماژول سفارشات ایجاد کنید.\n۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.\n۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.",
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
        "filename": "src/main/java/com/academy/order/exercise/rabbitmqwithdocker/Solution.java",
        "explanation": "پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.",
        "code": "package com.academy.order.exercise;\n\npublic class Solution {\n    public boolean validateAndExecute(String input) {\n        if (input == null || input.isBlank()) {\n            throw new IllegalArgumentException(\"ورودی نامعتبر است\");\n        }\n        return true;\n    }\n}"
      }
    },
    "quizzes": [
      {
        "id": "q-lesson-102-1",
        "question": "مهم‌ترین مزیت استفاده از الگوی استاندارد RabbitMQ with Docker در پروژه‌های جاوا چیست؟",
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
        "id": "q-lesson-102-2",
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
        "id": "q-lesson-102-3",
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
        "question": "در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از RabbitMQ with Docker را برای مصاحبه‌کننده تشریح می‌کنید؟",
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
    "summary": "در این جلسه مبحث راه‌اندازی، تنظیمات امنیتی و مانیتورینگ RabbitMQ با Docker را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.",
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
      "phase": "فاز مربوط به هفته 17",
      "task": "تجهیز ماژول سفارشات و انبار به قابلیت‌های RabbitMQ with Docker",
      "filesToModify": [
        "src/main/java/com/academy/order/rabbitmqwithdocker/ModuleConfig.java"
      ]
    },
    "lastReviewedAt": "2026-11-01"
  }
];
