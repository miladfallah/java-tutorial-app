export interface GlossaryTerm {
  id: string;
  termEn: string;
  termFa: string;
  category: string;
  definition: string;
  nestComparison: string;
  example: string;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: "g-001",
    termEn: "Bytecode",
    termFa: "بایت‌کد",
    category: "Java Core",
    definition: "فرمت باینری و مستقل از پلتفرم کدهای کامپایل‌شده جاوا که توسط ماشین مجازی (JVM) اجرا می‌شود.",
    nestComparison: "مشابه کدهای خروجی جاوااسکریپت پس از کامپایل TypeScript (dist/)، اما به جای متن، باینری فشرده است.",
    example: "javac MyClass.java -> MyClass.class",
  },
  {
    id: "g-002",
    termEn: "IoC Container",
    termFa: "ظرف وارونگی کنترل",
    category: "Spring Boot",
    definition: "هسته مرکزی اسپرینگ که مسئولیت ساخت اشیا (Beans)، اتصال آنها به یکدیگر و مدیریت چرخه حیاتشان را بر عهده دارد.",
    nestComparison: "دقیقاً معادل IoC Container داخلی فریم‌ورک NestJS که وابستگی‌های تزریق‌شده با @Injectable() را مدیریت می‌کند.",
    example: "ApplicationContext context = SpringApplication.run(...);",
  },
  {
    id: "g-003",
    termEn: "First-Level Cache",
    termFa: "کش سطح اول هایبرنیت",
    category: "JPA & Hibernate",
    definition: "کش درون‌حافظه‌ای مرتبط با یک تراکنش (Session/EntityManager) که از اجرای کوئری‌های تکراری برای یک ID در طول همان تراکنش جلوگیری می‌کند.",
    nestComparison: "در TypeORM یا Prisma چنین کش سراسری فعالی در سطح تراکنش به صورت پیش‌فرض وجود ندارد.",
    example: "em.find(Order.class, 1L); // بار دوم مستقیماً از رم بازمی‌گردد",
  },
  {
    id: "g-004",
    termEn: "Dirty Checking",
    termFa: "بررسی خودکار تغییرات شیء",
    category: "JPA & Hibernate",
    definition: "مکانیزمی در هایبرنیت که در پایان تراکنش وضعیت فعلی موجودیت را با اسنپ‌شات اولیه مقایسه کرده و در صورت تغییر، دستور UPDATE خودکار می‌زند.",
    nestComparison: "در نودجی‌اس شما باید صریحاً repository.save(entity) را صدا بزنید، اما در هایبرنیت تغییر روی موجودیت Managed بدون نیاز به save ذخیره می‌شود.",
    example: "order.setStatus(PAID); // هایبرنیت در commit خودکار UPDATE ارسال می‌کند",
  },
  {
    id: "g-005",
    termEn: "Optimistic Locking",
    termFa: "قفل‌گذاری خوش‌بینانه",
    category: "Database & Concurrency",
    definition: "تکنیک کنترل همزمانی با استفاده از یک فیلد نسخه (@Version). اگر دو کلاینت همزمان سطر را بخوانند، اولین کلاینت ثبت شده و دومی با خطای OptimisticLockException متوقف می‌شود.",
    nestComparison: "معادل ستون @VersionColumn() در TypeORM.",
    example: "@Version private Long version;",
  },
  {
    id: "g-006",
    termEn: "Pessimistic Locking",
    termFa: "قفل‌گذاری بدبینانه",
    category: "Database & Concurrency",
    definition: "قفل کردن فیزیکی سطر در سطح دیتابیس با SELECT FOR UPDATE به طوری که هیچ تراکنش دیگری تا اتمام تراکنش فعلی اجازه خواندن یا نوشتن نداشته باشد.",
    nestComparison: "معادل queryRunner.query('SELECT ... FOR UPDATE') در نودجی‌اس.",
    example: "@Lock(LockModeType.PESSIMISTIC_WRITE)",
  },
  {
    id: "g-007",
    termEn: "Transactional Outbox Pattern",
    termFa: "الگوی جعبه خروجی تراکنشی",
    category: "Event-Driven",
    definition: "الگوی تضمین تحویل پیام با درج رویداد در جدول دیتابیس درون همان تراکنش بیزینس و سپس ارسال پس‌زمینه به RabbitMQ یا Kafka.",
    nestComparison: "در نودجی‌اس نیز برای حل معضل Dual-Write در میکروسرویس‌ها از این الگو استفاده می‌شود.",
    example: "INSERT INTO orders ...; INSERT INTO outbox_messages ...; (اتمیک)",
  },
  {
    id: "g-008",
    termEn: "Virtual Threads",
    termFa: "رشته‌های مجازی (Project Loom)",
    category: "Concurrency",
    definition: "تردهای بسیار سبک که توسط رانتایم جاوا ۲۱ مدیریت می‌شوند و در زمان عملیات بلاک‌کننده ورودی/خروجی (I/O)، رشته واقعی سیستم‌عامل را آزاد می‌کنند.",
    nestComparison: "رویکردی انقلابی که سرعت مدل async/await جاوااسکریپت را بدون تغییر ساختار کدهای ترتیبی جاوا فراهم می‌کند.",
    example: "Thread.ofVirtual().start(() -> processOrder());",
  },
  {
    id: "g-009",
    termEn: "SecurityFilterChain",
    termFa: "زنجیره فیلترهای امنیتی",
    category: "Security",
    definition: "زنجیره‌ای از فیلترهای Servlet که به ترتیب درخواست ورودی را برای احراز هویت، اعتبارسنجی توکن JWT و بررسی نقش‌ها ارزیابی می‌کنند.",
    nestComparison: "معادل ترکیبی از NestJS Guards, Interceptors و Passport Strategies.",
    example: "http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)",
  },
  {
    id: "g-010",
    termEn: "Testcontainers",
    termFa: "کانتینرهای تست خودکار",
    category: "Testing",
    definition: "کتابخانه‌ای که در زمان اجرای تست‌های JUnit، کانتینرهای واقعی Docker از پایگاه داده PostgreSQL یا RabbitMQ را اجرا و پس از تست نابود می‌کند.",
    nestComparison: "در اکوسیستم نودجی‌اس نیز با پکیج testcontainers استفاده می‌شود ولی در جاوا به صورت بومی با اسپرینگ یکپارچه است.",
    example: "@Container static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(...);",
  },
];
