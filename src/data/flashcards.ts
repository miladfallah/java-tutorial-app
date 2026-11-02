export interface Flashcard {
  id: string;
  category: string;
  question: string;
  answer: string;
  explanation: string;
  keyPoints: string[];
}

export const FLASHCARDS: Flashcard[] = [
  {
    id: "fc-001",
    category: "Java Core",
    question: "تفاوت اساسی بین String, StringBuilder و StringBuffer در جاوا چیست؟",
    answer: "String تغییرناپذیر (Immutable) است. StringBuilder تغییرپذیر و سریع اما غیر همگام (Not Thread-Safe) است. StringBuffer تغییرپذیر و همگام‌شده (Thread-Safe) با متدهای synchronized است.",
    explanation: "در حلقه‌ها برای چسباندن رشته‌ها همیشه از StringBuilder استفاده کنید تا از ساخت اشیای موقت بیهوده در Heap جلوگیری شود.",
    keyPoints: [
      "String به دلیل تغییرناپذیری در String Pool به اشتراک گذاشته می‌شود.",
      "StringBuilder در متدهای محلی (Single-threaded) بالاترین پرفورمنس را دارد.",
    ],
  },
  {
    id: "fc-002",
    category: "JVM Internals",
    question: "حافظه Metaspace در JVM چیست و چه تفاوتی با PermGen قدیمی دارد؟",
    answer: "از جاوا ۸ به بعد، Metaspace جایگزین PermGen شد و متادیتای کلاس‌ها و لودرها را در حافظه Native سیستم‌عامل (خارج از Heap) ذخیره می‌کند.",
    explanation: "برخلاف PermGen که سایز ثابتی در Heap داشت و زود OOM می‌داد، Metaspace به صورت خودکار تا سقف رم سیستم یا مقدار فلگ -XX:MaxMetaspaceSize رشد می‌کند.",
    keyPoints: [
      "ذخیره در Native Memory بدون اشغال فضای Heap",
      "تنظیم -XX:MaxMetaspaceSize برای جلوگیری از بلعیدن تمام رم سرور در کانتینرها ضروری است.",
    ],
  },
  {
    id: "fc-003",
    category: "Spring Boot",
    question: "اسکوپ پیش‌فرض Spring Beanها چیست و چرا باید در نوشتن آنها به Thread-Safety توجه کرد؟",
    answer: "اسکوپ پیش‌فرض Singleton است؛ یعنی تنها یک نمونه از شیء در کل ApplicationContext ساخته شده و میان تمام درخواست‌های همزمان به اشتراک گذاشته می‌شود.",
    explanation: "چون چندین رشته (Thread) همزمان متدهای یک Bean را صدا می‌زنند، نباید فیلد وضعیت متغیر (Mutable State) در کلاس سرویس‌ها یا کنترلرها تعریف کرد.",
    keyPoints: [
      "Singleton Scope پیش‌فرض اسپرینگ است.",
      "کلاس‌های سرویس و کنترلر باید بی‌وضعیت (Stateless) باشند.",
    ],
  },
  {
    id: "fc-004",
    category: "JPA & Hibernate",
    question: "مشکل N+1 Query چیست و چطور در Spring Data JPA حل می‌شود؟",
    answer: "وقتی ۱ کوئری برای واکشی N رکورد اصلی اجرا می‌شود و سپس به ازای هر رکورد، ۱ کوئری مجزا برای بارگذاری فرزندان رابطه LAZY زده می‌شود (مجموعاً ۱ + N کوئری).",
    explanation: "این مشکل با استفاده از JOIN FETCH در JPQL، انوتیشن @EntityGraph یا گزینه‌های Batch Fetching حل شده و تمام داده‌ها در ۱ کوئری دریافت می‌شوند.",
    keyPoints: [
      "بارگذاری EAGER راهکار درستی نیست و اغلب مشکل را بدتر می‌کند.",
      "@EntityGraph شیک‌ترین روش حل در Spring Data JPA است.",
    ],
  },
  {
    id: "fc-005",
    category: "Transactions",
    question: "تله Self-Invocation در انوتیشن @Transactional چیست؟",
    answer: "اگر متد A درون یک کلاس، متد B با انوتیشن @Transactional در همان کلاس را صدا بزند، تراکنش فعال نمی‌شود!",
    explanation: "چون اسپرینگ از پروکسی‌های داینامیک استفاده می‌کند و فراخوانی‌های داخلی (با this) پروکسی را دور زده و متد واقعی را مستقیماً صدا می‌زنند.",
    keyPoints: [
      "پروکسی‌های Spring AOP فقط تماس‌های بیرونی را شنود می‌کنند.",
      "راهکار: انتقال متد تراکنشی به کلاسی دیگر یا تزریق خود شیء به عنوان فیلد.",
    ],
  },
  {
    id: "fc-006",
    category: "Event-Driven",
    question: "الگوی Transactional Outbox چه مشکلی را در میکروسرویس‌ها حل می‌کند؟",
    answer: "مشکل Dual-Write: تضمین اینکه ذخیره‌سازی داده در پایگاه داده و ارسال پیام به بروکر (مانند RabbitMQ) به صورت اتمیک و بدون از دست رفتن رویداد رخ دهد.",
    explanation: "ایونت‌ها ابتدا در یک جدول محلی دیتابیس درون همان تراکنش ذخیره می‌شوند، سپس یک پردازشگر پس‌زمینه آنها را به بروکر ارسال می‌کند.",
    keyPoints: [
      "جلوگیری از ناسازگاری زمانی که دیتابیس ثبت شود اما پیام‌رسان قطع باشد.",
      "تحویل با تضمین At-least-once.",
    ],
  },
  {
    id: "fc-007",
    category: "Java 21",
    question: "تردهای مجازی (Virtual Threads) در جاوا ۲۱ چه تفاوتی با تردهای سیستم‌عامل (Platform Threads) دارند؟",
    answer: "تردهای پلتفرم مستقیماً نگاشت ۱ به ۱ به نخ‌های سیستم‌عامل دارند و حافظه پشته زیادی (حدود ۱ مگابایت) مصرف می‌کنند. تردهای مجازی توسط JVM مدیریت می‌شوند و در سطح کیلوبایت هستند.",
    explanation: "تردهای مجازی در زمان عملیات بلاک‌کننده (مانند کوئری دیتابیس یا ریکوئست شبکه)، رشته زیرین سیستم‌عامل (Carrier Thread) را آزاد می‌کنند تا کارهای دیگر را پردازش کند.",
    keyPoints: [
      "امکان اجرای میلیون‌ها رشته همزمان بدون OOM",
      "حفظ سادگی کدنویسی همگام (Blocking) با راندمان سیستم‌های غیراسلایسینگ واکنشی",
    ],
  },
  {
    id: "fc-008",
    category: "Security",
    question: "تفاوت Authentication با Authorization چیست و کدام فیلترها در Spring Security اولویت دارند؟",
    answer: "Authentication احراز هویت است (شما چه کسی هستید؟). Authorization بررسی سطح دسترسی و نقش است (آیا اجازه دارید این عملیات را انجام دهید؟).",
    explanation: "در SecurityFilterChain ابتدا فیلترهای احراز هویت (مانند اعتبارسنجی JWT) اجرا شده و سپس فیلترهای ارزیابی نقش و مجوز (AuthorizationFilter) اجرا می‌شوند.",
    keyPoints: [
      "بدون Authentication موفق، مرحله Authorization هرگز اجرا نمی‌شود.",
      "در Spring Security 6 همه چیز بر پایه کامپوننت SecurityFilterChain پیکربندی می‌شود.",
    ],
  },
];
