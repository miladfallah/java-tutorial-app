export interface Flashcard { id: string; category: string; question: string; answer: string; explanation: string; keyPoints: string[]; }

export const FLASHCARDS: Flashcard[] = [
  {
    "id": "fc-lesson-001",
    "category": "Java Core",
    "question": "کدام بخش از معماری جاوا وظیفه ترجمه بایت‌کد به دستورالعمل‌های بومی پردازنده (Machine Code) در زمان اجرا را بر عهده دارد؟",
    "answer": "موتور JIT Compiler درون JVM",
    "explanation": "کامپایلر javac فقط سورس‌کد را به بایت‌کد تبدیل می‌کند. این کامپایلر لحظه‌ای (JIT Compiler) داخل JVM است که بایت‌کد را به کد ماشین بومی پردازنده ترجمه و بهینه‌سازی می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-002",
    "category": "Java Core",
    "question": "اگر وابستگی درایور دیتابیس را با اسکوپ <scope>runtime</scope> تعریف کنیم، چه رفتاری رخ خواهد داد؟",
    "answer": "کتابخانه در زمان کامپایل سورس‌کد در دسترس نیست، اما در زمان اجرا درون Classpath قرار می‌گیرد.",
    "explanation": "اسکوپ runtime مانع از کامپایل کدهای وابسته به پکیج می‌شود و صرفاً آن را برای زمان اجرای برنامه بارگذاری می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-003",
    "category": "Java Core",
    "question": "در صورتی که قبل از نام یک متغیر یا کلاس هیچ کلمه سطح دسترسی (public, private, protected) نوشته نشود، سطح دسترسی آن در جاوا چیست؟",
    "answer": "Package-Private (فقط در سطح همان پکیج)",
    "explanation": "در جاوا سطح دسترسی پیش‌فرض Package-Private است؛ یعنی اعضای همان پکیج به آن دسترسی دارند اما از بیرون پکیج قابل رویت نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-004",
    "category": "Java Core",
    "question": "مزیت اصلی بازگرداندن Collections.unmodifiableList(items) به جای لیست مستقیم items چیست؟",
    "answer": "مانع از تغییر و دستکاری مستقیم عناصر لیست توسط کدهای بیرونی بدون اطلاع کلاس اصلی می‌شود.",
    "explanation": "اگر لیست خام را برگردانید، کلاینت می‌تواند با متد add مستقیماً قلم جدید اضافه کند و انکپسولیشن کلاس Order نقض می‌شود. لیست تغییرناپذیر از این عمل جلوگیری می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-005",
    "category": "Java Core",
    "question": "اگر در کلاسی متد equals بازنویسی شود اما متد hashCode بازنویسی نشود، چه مشکلی در زمان استفاده در HashMap رخ می‌دهد؟",
    "answer": "اشیایی که از نظر منطقی با هم برابرند ممکن است هش‌کدهای متفاوتی تولید کرده و در باکت‌های جداگانه قرار گیرند؛ در نتیجه متد get مقدار را پیدا نخواهد کرد.",
    "explanation": "بدون بازنویسی hashCode، از پیاده‌سازی پیش‌فرض Object بر اساس آدرس حافظه استفاده می‌شود و دو شیء با داده‌های یکسان، هش‌های متفاوتی خواهند داشت.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-006",
    "category": "Java Core",
    "question": "اگر هنگام اجرای فایل JAR با خطای 'no main manifest attribute, in app.jar' مواجه شوید، علت چیست؟",
    "answer": "در فایل META-INF/MANIFEST.MF مشخصه Main-Class که به متد main اشاره دارد تعریف نشده است.",
    "explanation": "ماشین مجازی جاوا برای شروع اجرا نیاز دارد بداند کدام کلاس متد ورود را دارد و این آدرس از طریق فیلد Main-Class درون فایل مانیفست خوانده می‌شود.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-007",
    "category": "Java Core",
    "question": "برای مقصدی که Integer می‌پذیرد کدام مناسب است؟",
    "answer": "List<? super Integer>",
    "explanation": "List<? super Integer>. ژنریک جاوا در زمان کامپایل قرارداد نوع را بررسی می‌کند؛ List<Integer> زیرنوع List<Number> نیست. از ? extends برای خواندن و ? super برای افزودن استفاده کن. برخلاف تایپ TypeScript، پارامتر نوع جاوا نیز غالباً در runtime پاک می‌شود؛ new T() مجاز نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-008",
    "category": "Java Core",
    "question": "هنگام ترجمه IOException چه چیزی حفظ شود؟",
    "answer": "علت اصلی در cause",
    "explanation": "علت اصلی در cause. Checked exception در امضای متد اعلام یا مدیریت می‌شود؛ RuntimeException چنین اجباری ندارد. خطای دامنه را از خطای زیرساخت جدا کن و هنگام ترجمه exception علت اصلی را حفظ کن. try-with-resources منابع AutoCloseable را حتی در شکست می‌بندد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-009",
    "category": "Java Core",
    "question": "interface پرداخت کجا تعریف شود؟",
    "answer": "نزدیک نیاز لایه مصرف‌کننده و مستقل از SDK",
    "explanation": "نزدیک نیاز لایه مصرف‌کننده و مستقل از SDK. SOLID ابزار کنترل تغییر است، نه دستور ساخت interface برای هر کلاس. سرویس سفارش باید به قرارداد پرداخت وابسته باشد، نه SDK یک درگاه. جایگزینی پیاده‌سازی نباید شرط‌های قرارداد ورودی و خروجی را بشکند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-010",
    "category": "Java Core",
    "question": "کنترل موجودی کافی در کدام دسته است؟",
    "answer": "قاعده دامنه وابسته به داده و تراکنش",
    "explanation": "قاعده دامنه وابسته به داده و تراکنش. اعتبارسنجی شکل درخواست با اعتبار دامنه فرق دارد: quantity مثبت است اما موجودی کافی نیازمند داده فعلی انبار است. invariant باید داخل دامنه نیز حفظ شود تا مسیرهای غیر HTTP نتوانند آن را دور بزنند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-011",
    "category": "Java Core",
    "question": "بدون terminal operation چه اتفاقی می‌افتد؟",
    "answer": "پردازش pipeline معمولاً آغاز نمی‌شود",
    "explanation": "پردازش pipeline معمولاً آغاز نمی‌شود. Stream یک pipeline تنبل است؛ terminal operation اجرای آن را آغاز می‌کند. map تبدیل، filter انتخاب و reduce تجمیع است. side effect در map، مخصوصاً با parallel، ترتیب و ایمنی را مبهم می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-012",
    "category": "Java Core",
    "question": "برای رخداد ثبت سفارش چه داده‌ای مناسب‌تر است؟",
    "answer": "شناسه سفارش و نتیجه عملیات",
    "explanation": "شناسه سفارش و نتیجه عملیات. SLF4J قرارداد logging است؛ backend تعیین می‌کند رخداد کجا و چگونه ذخیره شود. لاگ پارامتری ساخت رشته بیهوده را کم می‌کند. رخداد عملیاتی را با شناسه سفارش ثبت کن، نه داده حساس کاربر.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-013",
    "category": "Modern Java",
    "question": "آیا record دارای List خودبه‌خود عمیقاً immutable است؟",
    "answer": "خیر؛ باید کپی دفاعی یا ساختار immutable انتخاب شود",
    "explanation": "خیر؛ باید کپی دفاعی یا ساختار immutable انتخاب شود. Record برای حامل داده با equality بر اساس componentها مناسب است؛ immutability آن سطحی است. اگر component یک List قابل تغییر باشد، final بودن reference محتوا را ثابت نمی‌کند. برای ورودی mutable نسخه دفاعی بساز.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-014",
    "category": "Modern Java",
    "question": "برای ساخت تنبل مقدار جایگزین چه انتخابی درست است؟",
    "answer": "orElseGet(() -> expensive())",
    "explanation": "orElseGet(() -> expensive()). Optional برای بیان نبود نتیجه، مخصوصاً در خروجی query، مفید است. orElse آرگومان خود را پیش از فراخوانی ارزیابی می‌کند؛ orElseGet ساخت مقدار جایگزین را به زمان نیاز عقب می‌اندازد. get بدون بررسی همان خطای کنترل‌نشده را بازمی‌گرداند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-015",
    "category": "Modern Java",
    "question": "کدام نام ابهام واحد را کمتر می‌کند؟",
    "answer": "Duration reservationTimeout",
    "explanation": "Duration reservationTimeout. نام خوب هدف و واحد اندازه را آشکار می‌کند. به جای متد عمومی process، مرز کسب‌وکار مانند reserveStock را نام ببر. متد کوچک باید یک سطح abstraction داشته باشد؛ کوتاهی به تنهایی معیار کیفیت نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-016",
    "category": "Modern Java",
    "question": "برای مقدار ده‌دهی دقیق پول چه ورودی مناسب است؟",
    "answer": "new BigDecimal(\"0.10\")",
    "explanation": "new BigDecimal(\"0.10\"). Refactor یعنی تغییر ساختار با حفظ رفتار مشاهده‌شدنی. مبلغ را با BigDecimal و currency مدل کن؛ double برای جمع پول مناسب نیست. scale و rounding تصمیم دامنه‌اند و باید صریح باشند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-017",
    "category": "Modern Java",
    "question": "برای ثبت لحظه ایجاد سفارش چه نوعی مناسب‌تر است؟",
    "answer": "Instant",
    "explanation": "Instant. Instant یک نقطه روی خط زمان است؛ LocalDate تاریخ بدون timezone و ZonedDateTime زمان همراه منطقه است. برای آزمون از Clock تزریق‌شده استفاده کن. مهلت سفارش را با Instant بسنج، نه رشته تاریخ محلی.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-018",
    "category": "Modern Java",
    "question": "برای review مؤثر کدام تغییر مناسب‌تر است؟",
    "answer": "یک رفتار مشخص با تست مرتبط و diff محدود",
    "explanation": "یک رفتار مشخص با تست مرتبط و diff محدود. Commit کوچک باید یک تغییر قابل توضیح و قابل برگشت باشد. در review ابتدا صحت، تست و قرارداد عمومی را ببین؛ اختلاف سبک را formatter حل کند. تغییر schema را همراه سازگاری نسخه قبلی سرویس بررسی کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-019",
    "category": "JVM & Concurrency",
    "question": "آیا GC شیء قابل دسترس ولی بی‌مصرف را الزاماً حذف می‌کند؟",
    "answer": "خیر؛ reachable بودن مانع جمع‌آوری است",
    "explanation": "خیر؛ reachable بودن مانع جمع‌آوری است. هر thread stack اجرای خود را دارد و اشیای معمول در heap مشترک قرار می‌گیرند. GC اشیای غیرقابل‌دسترسی را جمع می‌کند، نه اشیایی که صرفاً دیگر لازمشان نداری. cache یا listener دارای reference می‌تواند نشت منطقی بسازد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-020",
    "category": "JVM & Concurrency",
    "question": "submit شکست task را کجا در اختیار مصرف‌کننده می‌گذارد؟",
    "answer": "در Future و فراخوانی get",
    "explanation": "در Future و فراخوانی get. ExecutorService اجرای task را از ساخت thread جدا می‌کند. Future.get نتیجه یا خطا را آشکار می‌کند؛ اگر نتیجه را رها کنی ممکن است شکست task را نبینی. در Java 25 executor را با try-with-resources ببند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-021",
    "category": "JVM & Concurrency",
    "question": "آیا volatile int برای count++ کافی است؟",
    "answer": "خیر؛ افزایش چندمرحله‌ای است",
    "explanation": "خیر؛ افزایش چندمرحله‌ای است. count++ یک عملیات اتمیک نیست. volatile visibility می‌دهد اما read-modify-write را اتمیک نمی‌کند. synchronized علاوه بر mutual exclusion رابطه happens-before می‌سازد؛ برای invariant چندفیلدی قفل مشترک یا طراحی immutable لازم است.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-022",
    "category": "JVM & Concurrency",
    "question": "قفل synchronized از موجودی در دو JVM محافظت می‌کند؟",
    "answer": "خیر؛ قفل حافظه محلی process است",
    "explanation": "خیر؛ قفل حافظه محلی process است. در یک process می‌توان check و decrement را زیر یک قفل واحد انجام داد؛ این قفل میان چند instance مشترک نیست. برای سفارش واقعی، invariant موجودی باید در دیتابیس و تراکنش محافظت شود.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-023",
    "category": "JVM & Concurrency",
    "question": "برای تصمیم تیونینگ اولین گام چیست؟",
    "answer": "اندازه‌گیری زیر بار نماینده",
    "explanation": "اندازه‌گیری زیر بار نماینده. پیش از تغییر GC یا thread pool، داده جمع کن. JFR نمونه‌های CPU، allocation، قفل و I/O را کنار هم نشان می‌دهد. thread dump برای دیدن محل انتظار است؛ تعداد زیاد WAITING الزاماً مشکل نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-024",
    "category": "JVM & Concurrency",
    "question": "حد ۵۱۲MB کانتینر یعنی می‌توان Xmx=512m گذاشت؟",
    "answer": "معمولاً خیر؛ حافظه غیر heap هم نیاز است",
    "explanation": "معمولاً خیر؛ حافظه غیر heap هم نیاز است. حد حافظه کانتینر فقط heap نیست؛ metaspace، stack، direct buffer و native memory هم مصرف دارند. MaxRAMPercentage سهم heap را تعیین می‌کند، نه سقف کل process. فاصله امن تا حد container را با اندازه‌گیری انتخاب کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-025",
    "category": "Spring Boot",
    "question": "مزیت constructor injection چیست؟",
    "answer": "وابستگی اجباری آشکار و تست ساده‌تر",
    "explanation": "وابستگی اجباری آشکار و تست ساده‌تر. در DI، ساخت و اتصال وابستگی‌ها از منطق سرویس جدا می‌شود. Constructor injection وابستگی اجباری را آشکار می‌کند و تست بدون container را ساده می‌سازد. Spring singleton در هر ApplicationContext است، نه singleton سراسری شبکه.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-026",
    "category": "Spring Boot",
    "question": "کدام مورد گزینه مناسب @Bean است؟",
    "answer": "ساخت وابستگی third-party با تنظیمات مشخص",
    "explanation": "ساخت وابستگی third-party با تنظیمات مشخص. Spring پس از ساخت bean، وابستگی‌ها را متصل و callbackهای lifecycle را اجرا می‌کند. @Bean برای اشیای کتابخانه بیرونی مناسب است. کاری مثل migration یا تماس شبکه نامحدود در constructor شروع سرویس را شکننده می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-027",
    "category": "Spring Boot",
    "question": "آیا port دامنه باید JpaRepository را extend کند؟",
    "answer": "نه؛ قرارداد دامنه از ORM مستقل بماند",
    "explanation": "نه؛ قرارداد دامنه از ORM مستقل بماند. Dependency inversion می‌گوید سیاست دامنه نباید به جزئیات persistence وابسته باشد. port را با زبان نیاز دامنه تعریف کن؛ adapter آن را با JPA پیاده کند. لازم نیست تمام CRUD یک ORM به هسته نشت کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-028",
    "category": "Spring Boot",
    "question": "محل مناسب کلاس اصلی کجاست؟",
    "answer": "package ریشه مشترک componentها",
    "explanation": "package ریشه مشترک componentها. Boot تنظیمات متداول را براساس classpath و شرایط فعال می‌کند؛ magic بدون قاعده نیست. کلاس اصلی در package ریشه component scan باشد. وقتی auto-configuration چیزی را نساخت، گزارش conditions را بررسی کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-029",
    "category": "Spring Boot",
    "question": "برای گروه تنظیمات مرتبط چه انتخابی مناسب‌تر است؟",
    "answer": "ConfigurationProperties با validation",
    "explanation": "ConfigurationProperties با validation. ConfigurationProperties تنظیمات مرتبط را به یک مدل تایپ‌دار متصل می‌کند؛ validation خطای پیکربندی را هنگام شروع آشکار می‌سازد. Duration از عدد timeout بدون واحد روشن‌تر است.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-030",
    "category": "Spring Boot",
    "question": "رمز production کجا نگه‌داری شود؟",
    "answer": "secret store یا ورودی محیط با دسترسی کنترل‌شده",
    "explanation": "secret store یا ورودی محیط با دسترسی کنترل‌شده. Profile برای تفاوت‌های رفتاری محیط است؛ secret نباید در application-prod.yml commit شود. ترتیب منابع configuration تعیین می‌کند کدام مقدار برنده است. تنظیمات عملیاتی باید از خارج artifact قابل تزریق باشند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-031",
    "category": "Spring Boot",
    "question": "Controller بهتر است چه چیزی برگرداند؟",
    "answer": "DTO قرارداد API",
    "explanation": "DTO قرارداد API. Controller قرارداد HTTP را به use case تبدیل می‌کند؛ نباید تراکنش، SQL و قواعد تجاری در آن انباشته شود. binding مسیر، query و body را صریح انتخاب کن و DTO خروجی را از Entity جدا نگه دار.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-032",
    "category": "Spring Boot",
    "question": "برای validation آیتم‌های داخل لیست چه چیزی لازم است؟",
    "answer": "فعال‌سازی validation تو‌در‌تو با @Valid",
    "explanation": "فعال‌سازی validation تو‌در‌تو با @Valid. Bean Validation شکل ورودی را بررسی می‌کند؛ روی body از @Valid استفاده کن و برای collection، validation تو‌در‌تو لازم است. DTO ورودی با entity یکسان نیست؛ جلوگیری از mass assignment مهم است.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-033",
    "category": "Spring Boot",
    "question": "در ایجاد موفق یک منبع جدید کدام مناسب است؟",
    "answer": "201 همراه Location منبع",
    "explanation": "201 همراه Location منبع. Status code بخشی از قرارداد است: 201 برای ایجاد، 404 برای نبود منبع، 409 برای تعارض با وضعیت فعلی. 204 بدنه ندارد. idempotent بودن به معنای یکسان‌بودن تمام responseها نیست؛ اثر تکرار درخواست مهم است.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-034",
    "category": "Spring Boot",
    "question": "قیمت نهایی سفارش از کجا تعیین شود؟",
    "answer": "داده معتبر سمت سرور و قواعد قیمت‌گذاری",
    "explanation": "داده معتبر سمت سرور و قواعد قیمت‌گذاری. مسیر ایجاد سفارش باید request validation، use case تراکنشی و DTO پاسخ را به هم وصل کند. شناسه و قیمت نهایی باید تحت اختیار سرور باشند؛ قیمت ارسالی کلاینت منبع حقیقت نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-035",
    "category": "Spring Boot",
    "question": "در پاسخ عمومی خطای داخلی چه چیزی مناسب است؟",
    "answer": "پیام امن و شناسه رهگیری",
    "explanation": "پیام امن و شناسه رهگیری. Exception handler خطاهای دامنه را به قرارداد HTTP تبدیل می‌کند. ProblemDetail مدل استاندارد خطاست؛ stack trace و SQL نباید به client نشت کنند. کد پایدار خطا و traceId برای پشتیبانی مفیدند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-036",
    "category": "Spring Boot",
    "question": "OpenAPI بدون تست چه چیزی را تضمین نمی‌کند؟",
    "answer": "تطابق رفتار واقعی پیاده‌سازی با قرارداد",
    "explanation": "تطابق رفتار واقعی پیاده‌سازی با قرارداد. OpenAPI قرارداد قابل مصرف API است، نه فقط صفحه Swagger. schema، error response، pagination و security scheme باید رفتار واقعی را منعکس کنند. تولید مستندات به تنهایی تغییر ناسازگار را پیدا نمی‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-037",
    "category": "Architecture",
    "question": "مرز مناسب تراکنش ثبت سفارش معمولاً چیست؟",
    "answer": "کل use case شامل تغییرات مرتبط دیتابیس",
    "explanation": "کل use case شامل تغییرات مرتبط دیتابیس. Service مرز اجرای use case و تراکنش است. اعتبار دامنه را در مدل و هماهنگی repositoryها را در service نگه دار. تماس شبکه کند را داخل تراکنش DB بی‌دلیل طولانی نکن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-038",
    "category": "Architecture",
    "question": "برای سفارش‌های یک مشتری چه رویکردی مناسب‌تر است؟",
    "answer": "filter و sort در query دیتابیس",
    "explanation": "filter و sort در query دیتابیس. Repository دسترسی داده را پشت قرارداد مشخص پنهان می‌کند. query باید نیاز use case را بیان کند؛ برگرداندن همه جدول برای filter در حافظه مقیاس نمی‌گیرد. قرارداد empty، not-found و خطای DB را واضح نگه دار.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-039",
    "category": "Architecture",
    "question": "معیار اصلی hexagonal چیست؟",
    "answer": "جهت dependency و مرزهای قابل آزمون",
    "explanation": "جهت dependency و مرزهای قابل آزمون. Layered ساده و برای بسیاری سرویس‌ها کافی است؛ hexagonal مرز وابستگی دامنه به بیرون را پررنگ می‌کند. هزینه port و adapter وقتی توجیه دارد که تغییرپذیری یا تست مستقل ارزش واقعی بسازد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-040",
    "category": "Architecture",
    "question": "اولین گام کم‌ریسک refactor چیست؟",
    "answer": "ثبت رفتار و تغییر یک مسیر کوچک",
    "explanation": "ثبت رفتار و تغییر یک مسیر کوچک. Refactor معماری را با یک مسیر عمودی کوچک شروع کن. قرارداد use case را استخراج و adapter فعلی را نگه دار تا API نشکند. تست characterization رفتار قبلی را ثبت می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-041",
    "category": "Architecture",
    "question": "چرا id در sort اضافه می‌شود؟",
    "answer": "برای شکستن تساوی و ترتیب پایدار",
    "explanation": "برای شکستن تساوی و ترتیب پایدار. Pagination به ترتیب پایدار نیاز دارد؛ sort روی createdAt تنها در زمان‌های برابر مبهم است، id را tie-breaker کن. offset برای صفحه‌های عمیق هزینه دارد؛ keyset pagination برای پیمایش ترتیبی گزینه دیگر است.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-042",
    "category": "Architecture",
    "question": "قطع دیتابیس مشترک باید لزوماً liveness را fail کند؟",
    "answer": "خیر؛ می‌تواند موج restart بی‌فایده بسازد",
    "explanation": "خیر؛ می‌تواند موج restart بی‌فایده بسازد. Liveness می‌پرسد process قابل ادامه است؛ readiness می‌پرسد ترافیک بگیرد یا نه. قطع DB مشترک نباید بی‌دلیل همه instanceها را restart کند. Actuator مدیریتی را کم‌دسترسی و کم‌افشا نگه دار.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-043",
    "category": "Spring Boot",
    "question": "چرا MDC در finally پاک می‌شود؟",
    "answer": "جلوگیری از نشت context در threadهای بازاستفاده‌شده",
    "explanation": "جلوگیری از نشت context در threadهای بازاستفاده‌شده. Servlet Filter در زنجیره HTTP و بیرون MVC کار می‌کند؛ HandlerInterceptor به handlerهای MVC نزدیک‌تر است. برای correlation id یک Filter مناسب است؛ context را در finally پاک کن تا thread reuse داده درخواست قبلی را نشت ندهد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-044",
    "category": "Spring Boot",
    "question": "آیا this.transactionalMethod() الزاماً proxy را عبور می‌کند؟",
    "answer": "خیر؛ فراخوانی داخلی معمولاً advice را دور می‌زند",
    "explanation": "خیر؛ فراخوانی داخلی معمولاً advice را دور می‌زند. Spring AOP معمولاً با proxy کار می‌کند. فراخوانی از بیرون proxy advice را اجرا می‌کند؛ this.method آن را دور می‌زند. Transaction، Async و Cache هم از همین محدودیت اثر می‌گیرند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-045",
    "category": "Spring Boot",
    "question": "همان کلید با payload متفاوت چه رفتاری می‌خواهد؟",
    "answer": "تشخیص تعارض و عدم اجرای درخواست جدید",
    "explanation": "تشخیص تعارض و عدم اجرای درخواست جدید. Idempotency اثر درخواست تکراری را کنترل می‌کند. برای POST کلید، محدوده مالک، fingerprint درخواست و پاسخ ذخیره شود. همان کلید با payload متفاوت باید تعارض بدهد؛ cache حافظه‌ای در چند instance کافی نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-046",
    "category": "Spring Boot",
    "question": "پس از unique violation در تراکنش JPA چه چیزی خطرناک است؟",
    "answer": "ادامه کار و فرض سالم‌بودن همان تراکنش",
    "explanation": "ادامه کار و فرض سالم‌بودن همان تراکنش. برای claim کلید تکرار از uniqueness دیتابیس استفاده کن و تغییر سفارش را در تراکنش هماهنگ بساز. خطای unique می‌تواند تراکنش JPA را rollback-only کند؛ ادامه query در همان تراکنش راه replay مطمئنی نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-047",
    "category": "Spring Boot",
    "question": "تغییر کدام مورد معمولاً breaking است؟",
    "answer": "تغییر نوع total از عدد به object بدون نسخه یا سازگاری",
    "explanation": "تغییر نوع total از عدد به object بدون نسخه یا سازگاری. نسخه API برای تغییر قرارداد ناسازگار است، نه هر deploy. افزودن فیلد اختیاری معمولاً آسان‌تر از حذف یا تغییر معنای فیلد موجود است. سیاست deprecation و پنجره سازگاری را مستند کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-048",
    "category": "Spring Boot",
    "question": "فرم مناسب ENTRYPOINT برای دریافت signal چیست؟",
    "answer": "فرم exec آرایه‌ای",
    "explanation": "فرم exec آرایه‌ای. ایمیج runtime نباید Maven و سورس لازم‌نبودنی را حمل کند. JAR ساخته‌شده را با کاربر غیر root اجرا کن و signal را به JVM برسان. در Apple Silicon، build بومی از emulation غیرضروری جلوگیری می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-049",
    "category": "JPA & Hibernate",
    "question": "آیا flush یعنی تراکنش commit شده است؟",
    "answer": "خیر؛ SQL ارسال شده ولی rollback ممکن است",
    "explanation": "خیر؛ SQL ارسال شده ولی rollback ممکن است. Entity با هویت پایدار و lifecycle در persistence context مدیریت می‌شود. persist شیء جدید را managed می‌کند؛ تغییر شیء managed با dirty checking ذخیره می‌شود. EntityManager برای اشتراک همزمان مستقیم میان threadها نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-050",
    "category": "JPA & Hibernate",
    "question": "پس از merge کدام نمونه را باید مبنا گرفت؟",
    "answer": "نمونه managed بازگشتی",
    "explanation": "نمونه managed بازگشتی. Spring Data پیاده‌سازی repository را تولید می‌کند؛ query derivation از نام متد قرارداد مشخص می‌سازد. save بسته به وضعیت entity ممکن است persist یا merge کند؛ merge نمونه managed برمی‌گرداند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-051",
    "category": "JPA & Hibernate",
    "question": "چرا CHECK علاوه بر validation اپ مفید است؟",
    "answer": "تمام نویسنده‌های دیتابیس را زیر یک invariant می‌آورد",
    "explanation": "تمام نویسنده‌های دیتابیس را زیر یک invariant می‌آورد. مدل رابطه‌ای باید invariant را با constraint هم محافظت کند. مقدار پول numeric، تعداد integer مثبت و رابطه با foreign key مشخص شود. soft delete یا cascade باید با سیاست حذف دامنه هماهنگ باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-052",
    "category": "JPA & Hibernate",
    "question": "mappedBy به چه چیزی اشاره می‌کند؟",
    "answer": "نام فیلد رابطه در سمت مالک",
    "explanation": "نام فیلد رابطه در سمت مالک. مالک رابطه JPA سمتی است که foreign key را کنترل می‌کند؛ mappedBy سمت معکوس است. متد دامنه باید دو سمت ارتباط حافظه‌ای را هماهنگ نگه دارد. cascade چرخه persistence را کنترل می‌کند، نه fetch.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-053",
    "category": "JPA & Hibernate",
    "question": "LAZY به تنهایی N+1 را حل می‌کند؟",
    "answer": "خیر؛ دسترسی در حلقه همچنان query اضافی می‌سازد",
    "explanation": "خیر؛ دسترسی در حلقه همچنان query اضافی می‌سازد. LAZY هدف را تا زمان نیاز بارگذاری می‌کند، اما تضمین حذف query اضافی نیست. در ManyToOne پیش‌فرض JPA برابر EAGER است؛ fetch plan هر use case را صریح طراحی کن. بیرون تراکنش DTO بساز، نه رابطه lazy فعال کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-054",
    "category": "JPA & Hibernate",
    "question": "hostname دیتابیس از container اپ در Compose چیست؟",
    "answer": "نام سرویس مانند db",
    "explanation": "نام سرویس مانند db. برای توسعه DB را با volume پایدار و healthcheck اجرا کن. داخل شبکه Compose نام سرویس hostname است؛ localhost در container به خودش اشاره دارد. version دیتابیس را مشخص و تغییر major را با migration مدیریت کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-055",
    "category": "JPA & Hibernate",
    "question": "پس از bulk update چه ریسکی وجود دارد؟",
    "answer": "ماندن entity قدیمی در persistence context",
    "explanation": "ماندن entity قدیمی در persistence context. Persistence context یک identity map در مرز session/transaction است؛ دو find برای یک id معمولاً همان نمونه managed را می‌دهند. bulk update آن را خودکار همگام نمی‌کند و می‌تواند state قدیمی باقی بگذارد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-056",
    "category": "JPA & Hibernate",
    "question": "آیا EAGER تضمین یک query دارد؟",
    "answer": "خیر؛ ممکن است secondary select بسازد",
    "explanation": "خیر؛ ممکن است secondary select بسازد. N+1 یعنی یک query پایه و queryهای اضافه هنگام پیمایش روابط. EAGER الزاماً join نیست. fetch join، EntityGraph یا projection را متناسب با اندازه داده انتخاب کن؛ collection join همراه pagination خطرناک است.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-057",
    "category": "JPA & Hibernate",
    "question": "چرا ممکن است sequential scan انتخاب شود؟",
    "answer": "وقتی سهم بزرگی از جدول خوانده می‌شود ارزان‌تر است",
    "explanation": "وقتی سهم بزرگی از جدول خوانده می‌شود ارزان‌تر است. Index باید الگوی WHERE و ORDER BY را پشتیبانی کند؛ هزینه نوشتن و فضا نیز دارد. ترتیب ستون‌های index مرکب مهم است. optimizer با آمار و selectivity تصمیم می‌گیرد و مجبور نیست از هر index استفاده کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-058",
    "category": "JPA & Hibernate",
    "question": "برای pagination collection fetch چه رویکردی قابل کنترل‌تر است؟",
    "answer": "صفحه شناسه‌ها و سپس fetch محدود همان صفحه",
    "explanation": "صفحه شناسه‌ها و سپس fetch محدود همان صفحه. اصلاح N+1 را با شمارش query و اندازه داده ثابت اثبات کن. برای فهرست، اول صفحه شناسه‌ها را بخوان و سپس داده مورد نیاز همان صفحه را fetch کن. ترتیب نهایی را دوباره مطابق صفحه بساز.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-059",
    "category": "JPA & Hibernate",
    "question": "برای value ورودی client چه رویکردی امن‌تر است؟",
    "answer": "bind parameter",
    "explanation": "bind parameter. JPQL بر entity و field کار می‌کند؛ SQL native بر جدول و ستون. parameter binding از injection مقدار جلوگیری می‌کند؛ نام ستون sort یا identifier را نمی‌توان مثل مقدار bind کرد، باید allowlist شود.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-060",
    "category": "JPA & Hibernate",
    "question": "EXPLAIN ANALYZE برای UPDATE چه خطری دارد؟",
    "answer": "UPDATE واقعاً اجرا می‌شود",
    "explanation": "UPDATE واقعاً اجرا می‌شود. EXPLAIN طرح تخمینی را نشان می‌دهد؛ ANALYZE query را واقعاً اجرا می‌کند. اختلاف rows تخمینی و واقعی می‌تواند نشانه آمار نامناسب باشد. BUFFERS به تشخیص خواندن داده کمک می‌کند؛ فقط زمان نهایی را نبین.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-061",
    "category": "Transactions",
    "question": "SELECT عادی در READ COMMITTED برای رزرو امن کافی است؟",
    "answer": "خیر؛ قفل یا update شرطی و تراکنش لازم است",
    "explanation": "خیر؛ قفل یا update شرطی و تراکنش لازم است. ACID با invariant کسب‌وکار یکی نیست؛ isolation تعیین می‌کند تراکنش‌ها چه چیزی از یکدیگر ببینند. READ COMMITTED در PostgreSQL برای هر statement snapshot تازه دارد؛ یک SELECT عادی موجودی را قفل نمی‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-062",
    "category": "Transactions",
    "question": "REQUIRES_NEW چه خصوصیتی دارد؟",
    "answer": "تراکنش مستقل با commit/rollback جدا",
    "explanation": "تراکنش مستقل با commit/rollback جدا. REQUIRED به تراکنش موجود می‌پیوندد؛ REQUIRES_NEW تراکنش مستقلی می‌سازد و اتصال دیگری می‌تواند بخواهد. به طور پیش‌فرض RuntimeException rollback می‌کند؛ checked exception الزاماً چنین نیست. proxy و self-invocation را لحاظ کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-063",
    "category": "Transactions",
    "question": "برای optimistic locking چه چیزی تعارض را آشکار می‌کند؟",
    "answer": "بررسی نسخه هنگام update",
    "explanation": "بررسی نسخه هنگام update. Optimistic locking با @Version تعارض را هنگام write تشخیص می‌دهد؛ pessimistic locking دسترسی رقیب را منتظر می‌گذارد. انتخاب به میزان contention، زمان تراکنش و سیاست retry وابسته است.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-064",
    "category": "Transactions",
    "question": "از کجا موفقیت update شرطی را می‌فهمیم؟",
    "answer": "تعداد ردیف‌های تغییرکرده",
    "explanation": "تعداد ردیف‌های تغییرکرده. Update شرطی، check و decrement را در DB اتمیک می‌کند. تعداد ردیف تغییرکرده نتیجه رزرو است. سفارش و تغییر موجودی باید در یک تراکنش باشند تا شکست مرحله بعد موجودی را برگرداند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-065",
    "category": "Transactions",
    "question": "محل مناسب retry شکست deadlock چیست؟",
    "answer": "بیرون مرز تراکنش، با تراکنش جدید و backoff",
    "explanation": "بیرون مرز تراکنش، با تراکنش جدید و backoff. Deadlock یعنی چرخه انتظار lock؛ DB معمولاً یکی از تراکنش‌ها را قربانی می‌کند. ترتیب ثابت گرفتن lock احتمال آن را کم می‌کند، اما حذف کامل همه deadlockها را تضمین نمی‌کند. retry باید محدود و برای کل تراکنش تازه باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-066",
    "category": "Transactions",
    "question": "برای اصلاح migration اجراشده چه کار کنیم؟",
    "answer": "migration جدید بسازیم",
    "explanation": "migration جدید بسازیم. Migration اجراشده immutable است؛ تغییر فایل قبلی checksum را می‌شکند. تغییر schema باید با اپ قبلی و بعدی در دوره rollout سازگار باشد. ابتدا ستون جدید را اضافه و backfill کن، بعد مصرف‌کننده‌ها را منتقل کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-067",
    "category": "Database",
    "question": "connectionTimeout Hikari چه چیزی را محدود می‌کند؟",
    "answer": "انتظار برای گرفتن connection از pool",
    "explanation": "انتظار برای گرفتن connection از pool. Pool اتصال یک حد ظرفیت برای DB است؛ بزرگ‌ترشدن آن همیشه throughput بهتر نمی‌دهد. connectionTimeout زمان انتظار اتصال است، نه timeout اجرای query. تعداد instanceها ضرب در pool size باید با ظرفیت DB سازگار باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-068",
    "category": "Database",
    "question": "چرا در import بزرگ clear می‌کنیم؟",
    "answer": "کاهش اشیای managed نگه‌داری‌شده در context",
    "explanation": "کاهش اشیای managed نگه‌داری‌شده در context. Batching تعداد round-trip نوشتن را کم می‌کند اما با transaction بسیار بزرگ، حافظه context رشد می‌کند. flush/clear دوره‌ای و batch size را با driver و شیوه تولید شناسه بررسی کن؛ تضمین batch را از log ببین.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-069",
    "category": "Database",
    "question": "کدام لایه از تمام نویسنده‌های مستقیم DB محافظت می‌کند؟",
    "answer": "constraint دیتابیس",
    "explanation": "constraint دیتابیس. Data integrity را با NOT NULL، UNIQUE، FK و CHECK محافظت کن. constraint جلوی چند نویسنده را می‌گیرد؛ validation اپ فقط یک مسیر نوشتن را پوشش می‌دهد. consistency در چند سرویس نیازمند قرارداد و جبران خطاست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-070",
    "category": "Database",
    "question": "چه داده‌ای برای list summary لازم است؟",
    "answer": "فقط فیلدهای مورد نیاز قرارداد",
    "explanation": "فقط فیلدهای مورد نیاز قرارداد. بهینه‌سازی query باید از use case و اندازه خروجی آغاز شود. برای فهرست به تمام ستون‌ها و روابط entity نیاز نیست؛ projection کوچک هزینه I/O و hydration را کم می‌کند. نتیجه را با benchmark نماینده بسنج.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-071",
    "category": "Database",
    "question": "وجود یک SELECT پیش از INSERT جلوی duplicate را تضمین می‌کند؟",
    "answer": "خیر؛ unique constraint هنوز لازم است",
    "explanation": "خیر؛ unique constraint هنوز لازم است. Unique constraint تصمیم رقابت را در DB انجام می‌دهد. Upsert سیاست تعارض را صریح می‌کند؛ DO UPDATE ممکن است داده قبلی را بازنویسی کند و برای idempotency همیشه مطلوب نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-072",
    "category": "Database",
    "question": "مهم‌ترین شاهد قابل استفاده‌بودن backup چیست؟",
    "answer": "restore موفق و بررسی داده و رفتار",
    "explanation": "restore موفق و بررسی داده و رفتار. Backup بدون آزمایش restore تضمین بازیابی نیست. RPO میزان داده قابل ازدست‌رفتن و RTO زمان بازیابی قابل قبول است. rollback کد با rollback schema یکی نیست؛ بسیاری تغییرها migration رو به جلو می‌خواهند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-073",
    "category": "Security",
    "question": "آیا authenticated بودن برای خواندن هر order کافی است؟",
    "answer": "خیر؛ ownership یا policy دسترسی هم لازم است",
    "explanation": "خیر؛ ownership یا policy دسترسی هم لازم است. Authentication هویت را مشخص می‌کند؛ authorization مجازبودن عمل روی منبع را. کاربر لاگین‌شده نباید سفارش مشتری دیگر را فقط با حدس id بخواند. ownership را در query یا service enforce کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-074",
    "category": "Security",
    "question": "SecurityFilterChain معمولاً چه زمانی اجرا می‌شود؟",
    "answer": "پیش از رسیدن درخواست به controller",
    "explanation": "پیش از رسیدن درخواست به controller. SecurityFilterChain پیش از MVC درخواست را احراز و مجوزدهی می‌کند. چند chain با matcher و order انتخاب می‌شوند؛ نخستین chain منطبق مهم است. permitAll برای /api/** محافظت واقعی API را حذف می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-075",
    "category": "Security",
    "question": "خواندن payload JWT بدون verification چه تضمینی دارد؟",
    "answer": "هیچ تضمین اصالت یا مجوزی نمی‌دهد",
    "explanation": "هیچ تضمین اصالت یا مجوزی نمی‌دهد. OAuth2 مجوز دسترسی و OIDC هویت را استاندارد می‌کنند؛ JWT فقط یک قالب token است. decode کردن Base64 احراز هویت نیست. signature، issuer، زمان اعتبار و audience مورد انتظار را بررسی کن؛ refresh token کار resource server نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-076",
    "category": "Security",
    "question": "کاربر معتبر فاقد permission معمولاً چه پاسخی می‌گیرد؟",
    "answer": "403",
    "explanation": "403. امن‌سازی API باید policy قابل آزمون داشته باشد. روش credential را صریح انتخاب کن؛ HTTP Basic محلی برای آموزش ساده است و در انتقال واقعی TLS لازم دارد. JWT مسیر دیگری است، نه نام جدید Basic.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-077",
    "category": "Security",
    "question": "hasRole(\"ADMIN\") پیش‌فرض دنبال چه authority است؟",
    "answer": "ROLE_ADMIN",
    "explanation": "ROLE_ADMIN. RBAC role را به مجموعه permissionها وصل می‌کند؛ method security برای محافظت مرز use case مفید است. hasRole پیشوند ROLE_ دارد، hasAuthority تطبیق مستقیم می‌خواهد. @EnableMethodSecurity را فعال کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-078",
    "category": "Security",
    "question": "حذف رمز از آخرین commit برای رفع افشا کافی است؟",
    "answer": "خیر؛ باید رمز rotate و تاریخچه و دسترسی بررسی شود",
    "explanation": "خیر؛ باید رمز rotate و تاریخچه و دسترسی بررسی شود. Secret نباید وارد git، image layer یا log شود. environment و secret file روش تزریق‌اند، نه به‌خودی‌خود سیاست دسترسی یا rotation. دسترسی محدود، عمر کوتاه و قابلیت تعویض را طراحی کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-079",
    "category": "Testing",
    "question": "یک assertion مفید چه چیزی را نشان می‌دهد؟",
    "answer": "رفتار مورد انتظار و اختلاف واقعی",
    "explanation": "رفتار مورد انتظار و اختلاف واقعی. تست باید رفتار قابل مشاهده را با Arrange/Act/Assert توضیح دهد. assertion دقیق اختلاف را آشکار می‌کند؛ تستی که هیچ assertion ندارد ممکن است بدون سنجش هدف سبز شود. exception و مرزها را با داده مشخص امتحان کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-080",
    "category": "Testing",
    "question": "چه چیزی معمولاً نباید mock شود؟",
    "answer": "خود واحد دارای منطق مورد آزمون",
    "explanation": "خود واحد دارای منطق مورد آزمون. Mockito برای کنترل مرز وابستگی است؛ منطق تحت آزمون را mock نکن. stub پاسخ لازم را تعیین می‌کند و verify فقط تعامل مهم قرارداد را می‌سنجد. over-mocking تست را به جزئیات پیاده‌سازی قفل می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-081",
    "category": "Testing",
    "question": "تست mapping JPA را کجا بهتر می‌توان سنجید؟",
    "answer": "integration با DB واقعی هدف",
    "explanation": "integration با DB واقعی هدف. Unit test سریع قواعد محلی را می‌سنجد؛ integration test مرز واقعی مثل mapping SQL را. تست end-to-end برای مسیرهای حیاتی است و به علت هزینه جای همه unitها را نمی‌گیرد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-082",
    "category": "Testing",
    "question": "Mock repository چه چیزی را ثابت نمی‌کند؟",
    "answer": "rollback واقعی PostgreSQL",
    "explanation": "rollback واقعی PostgreSQL. OrderService باید هم نتیجه و هم invariant شکست را حفظ کند. در unit test تصمیم رزرو/پرداخت را با fake یا mock کنترل کن؛ rollback واقعی را فقط با transaction manager و DB تست کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-083",
    "category": "Testing",
    "question": "MockMvc الزاماً سرور TCP واقعی اجرا می‌کند؟",
    "answer": "خیر؛ زنجیره MVC را در process تست می‌کند",
    "explanation": "خیر؛ زنجیره MVC را در process تست می‌کند. SpringBootTest context گسترده را می‌سازد؛ برای هر تست کوچک لازم نیست. web test با MockMvc قرارداد servlet را بدون پورت واقعی می‌سنجد؛ RANDOM_PORT یک سرور واقعی محلی می‌خواهد. سطح تست را با هدف هماهنگ کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-084",
    "category": "Testing",
    "question": "آیا ۱۰۰٪ line coverage اثبات صحت است؟",
    "answer": "خیر؛ assertion و سناریوهای حساس مهم‌اند",
    "explanation": "خیر؛ assertion و سناریوهای حساس مهم‌اند. Coverage می‌گوید خط اجرا شده، نه اینکه نتیجه درست سنجیده شده است. branch coverage، assertionهای معنادار و mutation testing تصویر کامل‌تری می‌دهند. تست با ورودی نامعتبر و رقابت را فقط برای درصد حذف نکن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-085",
    "category": "Testing",
    "question": "برای سنجش lockهای PostgreSQL کدام بهتر است؟",
    "answer": "PostgreSQL واقعی در Testcontainers",
    "explanation": "PostgreSQL واقعی در Testcontainers. Testcontainers دیتابیس واقعی و disposable می‌دهد؛ تست به Docker نیاز دارد. نسخه image را مشخص کن و URL/credential را پویا بگیر. H2 جایگزین معادل SQL و lockهای PostgreSQL نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-086",
    "category": "Testing",
    "question": "چرا پیش از بازخوانی clear مفید است؟",
    "answer": "وادارکردن تست به خواندن مجدد از DB",
    "explanation": "وادارکردن تست به خواندن مجدد از DB. Repository test باید mapping، query، constraint و fetch plan را بسنجد. flush و clear کمک می‌کند موفقیت از identity map نیاید. دیتابیس خالی و روابط چندتایی هر دو لازم‌اند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-087",
    "category": "Testing",
    "question": "تست قرارداد بیشتر کدام ریسک را کم می‌کند؟",
    "answer": "شکستن ارتباط consumer و provider پس از تغییر API",
    "explanation": "شکستن ارتباط consumer و provider پس از تغییر API. Contract test انتظار مصرف‌کننده از درخواست و پاسخ را در برابر provider می‌سنجد. schema لازم است اما معنای status، nullable بودن و سازگاری نام فیلدها هم اهمیت دارند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-088",
    "category": "Testing",
    "question": "برای request نامعتبر چه چیزی علاوه بر 400 مهم است؟",
    "answer": "هیچ تغییر پایدار ناخواسته‌ای رخ ندهد",
    "explanation": "هیچ تغییر پایدار ناخواسته‌ای رخ ندهد. تست HTTP فقط happy path نیست: status، header، body و authorization را با داده کنترل‌شده بسنج. validation نباید order بسازد و client دیگر نباید پاسخ آن را ببیند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-089",
    "category": "Testing",
    "question": "آیا @Transactional تست، write سرور HTTP جدا را حتماً rollback می‌کند؟",
    "answer": "خیر؛ مرز thread/transaction جداست",
    "explanation": "خیر؛ مرز thread/transaction جداست. تراکنش تست روی thread اجرای تست اعمال می‌شود؛ درخواست سرور واقعی یا task async لزوماً داخل آن نیست. rollback تست نمی‌تواند commit یک process دیگر را برگرداند. cleanup و ایزولاسیون را صریح طراحی کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-090",
    "category": "Testing",
    "question": "یک pipeline مطمئن با شکست تست چه می‌کند؟",
    "answer": "fail می‌شود و گزارش خطا نگه می‌دارد",
    "explanation": "fail می‌شود و گزارش خطا نگه می‌دارد. CI باید build قابل تکرار، تست و گزارش شکست داشته باشد. dependency cache زمان را کم می‌کند اما source of truth نیست. secret و token فقط به job موردنیاز و با دسترسی حداقلی داده شوند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-091",
    "category": "Resilience",
    "question": "برای retry ثبت سفارش چه چیزی حیاتی است؟",
    "answer": "سیاست idempotency و بودجه محدود تلاش",
    "explanation": "سیاست idempotency و بودجه محدود تلاش. Timeout بودجه انتظار است؛ connect timeout و response timeout متفاوت‌اند. retry فقط برای شکست موقت و عملیات امن با سقف تلاش، backoff و jitter مناسب است. مجموع تلاش‌ها باید داخل deadline درخواست بماند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-092",
    "category": "Resilience",
    "question": "Bulkhead چه چیزی را جدا می‌کند؟",
    "answer": "ظرفیت همزمانی یا منابع مسیرها",
    "explanation": "ظرفیت همزمانی یا منابع مسیرها. Circuit breaker جلوی فشار تکراری به وابستگی خراب را می‌گیرد؛ bulkhead ظرفیت جدا می‌کند تا خرابی یک مسیر همه سرویس را نخواباند. حالت half-open با تعداد محدود درخواست بازیابی را می‌سنجد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-093",
    "category": "Resilience",
    "question": "UUID تصادفی چه چیزی را جایگزین نمی‌کند؟",
    "answer": "کنترل مالکیت و authorization",
    "explanation": "کنترل مالکیت و authorization. در API، کنترل مالکیت منبع از چک role مهم‌تر هم می‌تواند باشد. شناسه غیرقابل حدس جای authorization نیست. page size، body size و مصرف منابع را محدود کن؛ URL ورودی کاربر می‌تواند ریسک SSRF بسازد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-094",
    "category": "Resilience",
    "question": "کدام failure برای breaker وابستگی پرداخت مرتبط‌تر است؟",
    "answer": "timeout و 503 همان وابستگی",
    "explanation": "timeout و 503 همان وابستگی. در Resilience4j، name باید به configuration همان instance اشاره کند و AOP dependency فعال باشد. exceptionهای تجاری را بی‌دلیل failure زیرساخت حساب نکن. decorator باید مرز درست فراخوانی بیرونی را احاطه کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-095",
    "category": "Resilience",
    "question": "Limiter محلی با دو instance چه تغییری می‌کند؟",
    "answer": "ممکن است ظرفیت مؤثر چندبرابر شود",
    "explanation": "ممکن است ظرفیت مؤثر چندبرابر شود. Rate limit نرخ درخواست را محدود می‌کند؛ concurrency limit تعداد کارهای درحال‌اجرا را. کلید محدودیت باید مناسب کاربر/tenant و مدل تهدید باشد. در چند instance، limiter حافظه‌ای سقف سراسری نمی‌دهد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-096",
    "category": "Resilience",
    "question": "پس از اسکن بدون هشدار چه نتیجه‌ای مجاز است؟",
    "answer": "در آن پایگاه و زمان هشدار شناخته‌شده‌ای پیدا نشد",
    "explanation": "در آن پایگاه و زمان هشدار شناخته‌شده‌ای پیدا نشد. اسکن dependency نشانه‌های advisory را پیدا می‌کند، نه اثبات exploitability یا نبود همه ریسک‌ها. dependency مستقیم و transitive، نسخه قفل‌شده و image پایه را بررسی کن. اصلاح را با تست رفتار و build همراه کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-097",
    "category": "Event-Driven",
    "question": "Consumer معمولاً از کجا پیام می‌خواند؟",
    "answer": "Queue",
    "explanation": "Queue. Exchange پیام را براساس نوع و binding به queue هدایت می‌کند؛ consumer از queue می‌خواند. direct تطبیق دقیق routing key و topic الگوی قطعه‌بندی‌شده دارد. durable بودن تعریف با پایداری هر پیام یکی نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-098",
    "category": "Event-Driven",
    "question": "Publisher confirm موفق چه چیزی را اثبات نمی‌کند؟",
    "answer": "اجرای موفق منطق consumer",
    "explanation": "اجرای موفق منطق consumer. تأیید publisher یعنی broker پیام را پذیرفته؛ به معنی پردازش consumer نیست. consumer باید پس از موفقیت اثر محلی ack کند. برای پیام unroutable، mandatory و return handling را متناسب پیکربندی کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-099",
    "category": "Event-Driven",
    "question": "چرا پیام بعد از commit ممکن است تکرار شود؟",
    "answer": "ack هنوز به broker نرسیده است",
    "explanation": "ack هنوز به broker نرسیده است. At-least-once یعنی duplicate ممکن است. اگر consumer پس از commit و پیش از ack قطع شود، پیام دوباره تحویل می‌شود. اثر تجاری باید با eventId و constraint یکتا idempotent شود.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-100",
    "category": "Event-Driven",
    "question": "چرا OrderCreated را از entity JPA کامل نسازیم؟",
    "answer": "قرارداد event باید مستقل و حداقلی باشد",
    "explanation": "قرارداد event باید مستقل و حداقلی باشد. Event تجاری باید شناسه، نوع، زمان و نسخه schema داشته باشد. انتشار مستقیم بعد از commit پنجره گم‌شدن پیام دارد و انتشار قبل از commit می‌تواند رویداد سفارش rollback‌شده بسازد؛ outbox این مرز را هماهنگ می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-101",
    "category": "Event-Driven",
    "question": "پیام با schema نامعتبر معمولاً چه می‌خواهد؟",
    "answer": "قرنطینه و بررسی، نه retry بی‌پایان",
    "explanation": "قرنطینه و بررسی، نه retry بی‌پایان. Retry بی‌نهایت یک poison message می‌تواند صف را قفل یا overload کند. تعداد تلاش، backoff و DLQ مشخص کن؛ پیام‌های validation دائمی معمولاً retry یکسان نمی‌خواهند. replay باید با کنترل و idempotency باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-102",
    "category": "Event-Driven",
    "question": "durable queue به تنهایی تضمین پایداری همه پیام‌هاست؟",
    "answer": "خیر؛ persistence پیام و confirm هم مهم‌اند",
    "explanation": "خیر؛ persistence پیام و confirm هم مهم‌اند. RabbitMQ محلی با volume و healthcheck تکرارپذیرتر است. credential نمونه فقط برای توسعه است و پورت management نباید بی‌دلیل عمومی باشد. readiness اپ را با رفتار واقعی اتصال و retry راه‌اندازی بسنج.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-103",
    "category": "Event-Driven",
    "question": "Outbox کدام تضمین را به تنهایی نمی‌دهد؟",
    "answer": "پردازش exactly-once در consumer",
    "explanation": "پردازش exactly-once در consumer. Outbox رکورد event را در همان تراکنش تغییر دامنه ذخیره می‌کند. relay بعداً آن را به broker می‌فرستد. فاصله publish موفق و علامت‌گذاری sent هنوز duplicate می‌سازد؛ consumer باید idempotent باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-104",
    "category": "Event-Driven",
    "question": "کلید dedup مناسب‌تر چیست؟",
    "answer": "ترکیب consumer و eventId",
    "explanation": "ترکیب consumer و eventId. Dedup باید همراه اثر تجاری در یک transaction commit شود. SELECT exists به تنهایی در رقابت کافی نیست؛ unique key روی consumer و eventId claim را اتمیک می‌کند. مدت نگه‌داری dedup با پنجره replay سازگار باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-105",
    "category": "Event-Driven",
    "question": "Read model عقب‌افتاده چه نیاز UX دارد؟",
    "answer": "نمایش وضعیت موقت و راه پیگیری معنادار",
    "explanation": "نمایش وضعیت موقت و راه پیگیری معنادار. Eventual consistency یعنی replica یا read model می‌تواند موقتاً عقب باشد. زمان همگرایی، وضعیت pending و راه reconciliation را مشخص کن. به کاربر قبل از تأیید نهایی پرداخت، success قطعی نده.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-106",
    "category": "Event-Driven",
    "question": "SKIP LOCKED چه کاری می‌کند؟",
    "answer": "ردشدن از ردیف‌های قفل‌شده برای تقسیم کار",
    "explanation": "ردشدن از ردیف‌های قفل‌شده برای تقسیم کار. Relay چند worker باید رکوردها را بدون انتشار همزمان غیرضروری claim کند. SKIP LOCKED ابزار تقسیم کار است، نه تضمین exactly-once. failure و retry هر رکورد را قابل مشاهده نگه دار.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-107",
    "category": "Event-Driven",
    "question": "کدام تغییر ریسک breaking بیشتری دارد؟",
    "answer": "تغییر معنای amount از واحد اصلی به واحد خرد بدون اعلام",
    "explanation": "تغییر معنای amount از واحد اصلی به واحد خرد بدون اعلام. Schema event قرارداد بلندعمر است. فیلد جدید اختیاری با default معقول معمولاً سازگارتر است؛ تغییر نوع یا معنای فیلد قدیمی breaking است. producer و consumer مستقل deploy می‌شوند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-108",
    "category": "Event-Driven",
    "question": "کدام شاخص برای تأخیر پردازش صف مفیدتر است؟",
    "answer": "سن قدیمی‌ترین پیام همراه نرخ‌ها",
    "explanation": "سن قدیمی‌ترین پیام همراه نرخ‌ها. Queue depth به تنهایی کافی نیست؛ سن قدیمی‌ترین پیام، نرخ publish/ack، unacked و redelivery را کنار هم ببین. backlog رو به رشد با consumer ظاهراً روشن هم رخ می‌دهد. هشدار باید به اثر کاربر وصل باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-109",
    "category": "Caching",
    "question": "دو فرمان GET و SET جدا چه تضمینی ندارند؟",
    "answer": "اتمیک‌بودن تصمیم read-modify-write",
    "explanation": "اتمیک‌بودن تصمیم read-modify-write. Redis فقط map رشته‌ای نیست: hash برای fieldها، set برای یکتایی و sorted set برای رتبه‌بندی مناسب‌اند. عملیات یک فرمان اتمیک است؛ چند فرمان جدا لزوماً یک تصمیم اتمیک نیستند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-110",
    "category": "Caching",
    "question": "چه ورودی‌ای باید در cache key باشد؟",
    "answer": "تمام ورودی‌های مؤثر بر نتیجه از جمله tenant",
    "explanation": "تمام ورودی‌های مؤثر بر نتیجه از جمله tenant. Spring Cache abstraction سیاست ذخیره را پشت annotation می‌برد؛ backend و cache manager هنوز باید درست پیکربندی شوند. key باید تمام ورودی‌های مؤثر مثل tenant را شامل شود. self-invocation می‌تواند cache advice را دور بزند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-111",
    "category": "Caching",
    "question": "TTL چه چیزی را تضمین نمی‌کند؟",
    "answer": "fresh بودن لحظه‌ای داده پس از هر write",
    "explanation": "fresh بودن لحظه‌ای داده پس از هر write. در cache-aside ابتدا cache خوانده و در miss، DB بارگذاری می‌شود. پس از write سیاست invalidation لازم است؛ race میان خواننده و نویسنده می‌تواند مقدار قدیمی برگرداند. TTL فقط عمر خطا را محدود می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-112",
    "category": "Caching",
    "question": "چه چیزی برای cache مناسب‌تر است؟",
    "answer": "DTO محصول با سیاست انقضا و invalidation مشخص",
    "explanation": "DTO محصول با سیاست انقضا و invalidation مشخص. محصول خواندنی و کم‌تغییر گزینه مناسب cache است؛ قیمت نهایی سفارش باید هنگام تصمیم تجاری از منبع معتبر تعیین شود. DTO cache‌شده را از entity و session JPA جدا نگه دار.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-113",
    "category": "Caching",
    "question": "هدف jitter در TTL چیست؟",
    "answer": "پخش‌کردن زمان انقضا و کاهش موج همزمان",
    "explanation": "پخش‌کردن زمان انقضا و کاهش موج همزمان. انقضای همزمان key محبوب می‌تواند stampede بسازد. jitter در TTL، single-flight محدود و stale-while-revalidate در صورت پذیرش دامنه بار را کم می‌کنند. lock cache باید lease و timeout داشته باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-114",
    "category": "Caching",
    "question": "آیا PING موفق سلامت کل کاربرد Redis را اثبات می‌کند؟",
    "answer": "خیر؛ حافظه، eviction و persistence هم مهم‌اند",
    "explanation": "خیر؛ حافظه، eviction و persistence هم مهم‌اند. RDB snapshot و AOF سیاست‌های متفاوت persistence دارند و trade-off هزینه/بازیابی می‌سازند. cache بودن با datastore بودن فرق دارد؛ اگر Redis منبع حقیقت است، loss budget و backup ضروری‌تر می‌شود.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-115",
    "category": "Concurrency",
    "question": "برای متدی که خودش Future می‌دهد کدام مناسب‌تر است؟",
    "answer": "thenCompose",
    "explanation": "thenCompose. CompletableFuture ترکیب نتیجه async را بیان می‌کند؛ thenApply تبدیل همگام و thenCompose تخت‌کردن async تو‌در‌تو است. executor پیش‌فرض برای blocking I/O الزاماً مناسب نیست. خطا و timeout باید مسیر مشخص داشته باشند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-116",
    "category": "Concurrency",
    "question": "Virtual Thread چه چیزی را بیشتر هدف می‌گیرد؟",
    "answer": "همزمانی زیاد در کارهای منتظر I/O",
    "explanation": "همزمانی زیاد در کارهای منتظر I/O. Virtual Thread برای همزمانی زیادِ کار منتظر I/O است، نه سریع‌ترکردن محاسبه CPU. تعداد connection و ظرفیت سرویس پایین‌دست همچنان محدود است. در Java 25، محدودیت pinning با synchronized نسبت به JDK 21 تغییر کرده؛ native blocking هنوز نیازمند بررسی است.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-117",
    "category": "Concurrency",
    "question": "صف نامحدود هنگام overload چه ریسکی دارد؟",
    "answer": "رشد حافظه و latency بدون حد",
    "explanation": "رشد حافظه و latency بدون حد. صف نامحدود overload را به تاخیر و مصرف حافظه تبدیل می‌کند. backpressure یعنی سرعت ورودی با ظرفیت هماهنگ شود؛ صف محدود، timeout و رد کنترل‌شده ابزارهای آن‌اند. از ظرفیت‌سازی بدون سنجش latency پرهیز کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-118",
    "category": "Concurrency",
    "question": "202 چه چیزی را اعلام می‌کند؟",
    "answer": "پذیرش برای پردازش، نه تضمین تکمیل",
    "explanation": "پذیرش برای پردازش، نه تضمین تکمیل. پذیرش کار async با تکمیل موفق آن فرق دارد. API می‌تواند 202 و شناسه job بدهد؛ وضعیت پردازش باید پایدار و قابل پیگیری باشد. @Async خودبه‌خود transaction caller یا context امنیتی را منتقل نمی‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-119",
    "category": "Concurrency",
    "question": "افزایش pool چه زمانی می‌تواند بدتر کند؟",
    "answer": "وقتی رقابت CPU یا فشار downstream بیشتر شود",
    "explanation": "وقتی رقابت CPU یا فشار downstream بیشتر شود. اندازه pool از CPU، زمان انتظار، latency هدف و ظرفیت وابستگی‌ها اثر می‌گیرد. فرمول‌های ساده نقطه شروع‌اند، نه نسخه قطعی. برای CPU-bound نزدیک تعداد هسته و برای I/O با محدودیت downstream اندازه‌گیری کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-120",
    "category": "Concurrency",
    "question": "چرا فقط میانگین latency کافی نیست؟",
    "answer": "تاخیرهای دنباله و تجربه کاربران کند را پنهان می‌کند",
    "explanation": "تاخیرهای دنباله و تجربه کاربران کند را پنهان می‌کند. Load test باید هدف، داده، نرخ ورودی و معیار شکست داشته باشد. warmup و steady state را جدا کن؛ p95/p99 و error rate مهم‌تر از فقط میانگین‌اند. request موفق با کار درست تجاری یکسان نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-121",
    "category": "Distributed Systems",
    "question": "CAP چه زمانی trade-off مشخصی تحمیل می‌کند؟",
    "answer": "هنگام partition شبکه",
    "explanation": "هنگام partition شبکه. CAP درباره رفتار هنگام partition شبکه است: نمی‌توان هم پاسخ‌گویی همه گره‌های سالم و هم linearizability را همواره حفظ کرد. consistency در CAP با حرف C در ACID یکی نیست. برای هر operation سیاست read/write و داده stale را جدا انتخاب کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-122",
    "category": "Distributed Systems",
    "question": "نشانه مرز سرویس ناسالم چیست؟",
    "answer": "نیاز به deploy همزمان همه سرویس‌ها برای هر تغییر کوچک",
    "explanation": "نیاز به deploy همزمان همه سرویس‌ها برای هر تغییر کوچک. مرز سرویس بهتر است حول مسئولیت دامنه و مالکیت داده باشد. جداکردن deployment بدون جداکردن coupling می‌تواند distributed monolith بسازد. ابتدا مرز ماژول را در یک process آزمایش کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-123",
    "category": "Distributed Systems",
    "question": "Compensation چه چیزی نیست؟",
    "answer": "rollback اتمیک و فوری تمام سیستم‌های بیرونی",
    "explanation": "rollback اتمیک و فوری تمام سیستم‌های بیرونی. Saga چند تراکنش محلی را با فرمان و جبران هماهنگ می‌کند. compensation rollback فیزیکی زمان نیست؛ یک عمل تجاری جدید است و ممکن است شکست بخورد. هر مرحله باید idempotent و قابل پیگیری باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-124",
    "category": "Distributed Systems",
    "question": "برای event دیررس پس از لغو سفارش چه نیاز داریم؟",
    "answer": "کنترل state و سیاست جبران/بررسی",
    "explanation": "کنترل state و سیاست جبران/بررسی. Workflow سفارش باید stateهای مجاز و transitionها را روشن کند. رخداد دیررس و تکراری نباید سفارش لغوشده را دوباره تأیید کند. timeout، expiry رزرو و reconciliation بخشی از طراحی‌اند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-125",
    "category": "Distributed Systems",
    "question": "کلید سراسری بدون tenant چه ریسکی دارد؟",
    "answer": "تعارض یا افشای نتیجه بین مشتری‌ها",
    "explanation": "تعارض یا افشای نتیجه بین مشتری‌ها. Idempotency توزیع‌شده به ذخیره پایدار و scope روشن نیاز دارد. retry از gateway، queue و client می‌تواند همزمان برسد. کلید عملیات با payload fingerprint و نتیجه ثبت شود و lease منقضی قابل بازیابی باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-126",
    "category": "Distributed Systems",
    "question": "پس از timeout پاسخ POST چه چیزی را می‌دانیم؟",
    "answer": "نتیجه ممکن است نامعلوم باشد",
    "explanation": "نتیجه ممکن است نامعلوم باشد. Timeout یعنی نتیجه نامعلوم است، نه لزوماً شکست عملیات. server ممکن است commit کرده ولی پاسخ گم شده باشد. طراحی recovery باید با شناسه عملیات امکان پرس‌وجو و replay امن بدهد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-127",
    "category": "System Design",
    "question": "وقتی DB اشباع است افزودن instance اپ چه ریسکی دارد؟",
    "answer": "اتصال و فشار بیشتر روی همان گلوگاه",
    "explanation": "اتصال و فشار بیشتر روی همان گلوگاه. گلوگاه با افزایش بار جابه‌جا می‌شود؛ بهینه‌سازی بخش غیرغالب سود محدودی دارد. throughput، utilization و زمان انتظار را کنار هم ببین. scaling اپ وقتی DB اشباع است ممکن است وضعیت را بدتر کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-128",
    "category": "System Design",
    "question": "stateless service یعنی چه؟",
    "answer": "عدم وابستگی correctness درخواست به حافظه همان instance",
    "explanation": "عدم وابستگی correctness درخواست به حافظه همان instance. سرویس stateless داده حیاتی session را در حافظه یک instance نگه نمی‌دارد؛ این به معنی بدون state بودن کل سیستم نیست. load balancer با health/readiness ترافیک را هدایت می‌کند و drain انتشار را امن‌تر می‌سازد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-129",
    "category": "System Design",
    "question": "دلیل معتبر انتخاب ابزار معماری چیست؟",
    "answer": "پاسخ به constraint و trade-off مستند",
    "explanation": "پاسخ به constraint و trade-off مستند. Trade-off باید با requirement قابل سنجش شروع شود: latency، consistency، هزینه یا سادگی عملیات. معماری «بهترین مطلق» ندارد. گزینه ساده‌تر را تا وقتی constraint واقعی نقض نشده جدی بگیر.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-130",
    "category": "System Design",
    "question": "آیا search index منبع نهایی موجودی رزروشدنی است؟",
    "answer": "معمولاً نه؛ رزرو به منبع authoritative نیاز دارد",
    "explanation": "معمولاً نه؛ رزرو به منبع authoritative نیاز دارد. Marketplace چند مسئله مستقل دارد: catalog خواندنی، سفارش با invariant مالی و جستجوی eventual. مسیر critical خرید را ساده نگه دار و read model را با منبع حقیقت اشتباه نگیر.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-131",
    "category": "System Design",
    "question": "خواندن فوری از replica async چه ریسکی دارد؟",
    "answer": "ندیدن آخرین write به علت lag",
    "explanation": "ندیدن آخرین write به علت lag. Replication برای دسترس‌پذیری و خواندن مفید است اما replica lag دارد. Partitioning داده را به بخش‌ها تقسیم می‌کند؛ sharding میان گره‌ها هزینه join و transaction را بالا می‌برد. key انتخابی باید با queryها و توزیع بار سازگار باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-132",
    "category": "System Design",
    "question": "ADR خوب چه چیزی را حفظ می‌کند؟",
    "answer": "چرایی تصمیم و پیامدهای آن",
    "explanation": "چرایی تصمیم و پیامدهای آن. ADR تصمیم، زمینه، گزینه‌های کنارگذاشته‌شده و پیامدها را ثبت می‌کند. هدف مستندات حجیم نیست؛ همکار آینده باید بداند چرا راهکار فعلی انتخاب شده و چه زمانی بازنگری شود.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-133",
    "category": "Observability",
    "question": "چه چیزی نباید در log عملیاتی باشد؟",
    "answer": "Bearer token کامل",
    "explanation": "Bearer token کامل. Structured logging رخداد را به فیلدهای قابل جستجو تبدیل می‌کند. requestId، traceId و orderId نقش‌های متفاوت دارند. داده شخصی و token را حذف یا mask کن؛ MDC در async خودبه‌خود همیشه منتقل نمی‌شود.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-134",
    "category": "Observability",
    "question": "کدام label برای metric خطرناک‌تر است؟",
    "answer": "orderId یکتا برای هر درخواست",
    "explanation": "orderId یکتا برای هر درخواست. Counter رخداد تجمعی، gauge وضعیت لحظه‌ای و timer توزیع مدت را نشان می‌دهد. label پرکاردینال مانند userId یا orderId هزینه ذخیره را منفجر می‌کند؛ آن‌ها برای log/trace مناسب‌ترند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-135",
    "category": "Observability",
    "question": "برای اتصال spanهای دو سرویس چه چیزی لازم است؟",
    "answer": "propagation استاندارد trace context",
    "explanation": "propagation استاندارد trace context. Trace مسیر درخواست را با spanهای مرتبط نشان می‌دهد. context باید از HTTP و message header منتقل شود؛ ساخت trace تازه در هر سرویس زنجیره را می‌شکند. sampling و حذف داده حساس بخشی از طراحی است.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-136",
    "category": "Observability",
    "question": "span دامنه مفید چه ویژگی دارد؟",
    "answer": "مرز عملیاتی معنادار با هزینه و داده محدود",
    "explanation": "مرز عملیاتی معنادار با هزینه و داده محدود. Instrumentation باید سؤال عملیاتی را پاسخ دهد: کدام مرحله سفارش کند یا ناموفق است؟ از instrument خودکار موجود استفاده کن و فقط span دامنه معنادار اضافه کن. error و exception را با semantics صحیح ثبت کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-137",
    "category": "Observability",
    "question": "چرا rate روی counter استفاده می‌شود؟",
    "answer": "محاسبه نرخ با درنظرگرفتن reset شمارنده",
    "explanation": "محاسبه نرخ با درنظرگرفتن reset شمارنده. Prometheus سری زمانی metric را scrape می‌کند؛ Grafana آن را نمایش می‌دهد. dashboard باید نرخ، خطا، مدت و اشباع را کنار هم نشان دهد. histogram quantile با میانگین متفاوت است و bucket مناسب می‌خواهد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-138",
    "category": "Observability",
    "question": "تفاوت SLI و SLO چیست؟",
    "answer": "SLI اندازه‌گیری و SLO هدف آن است",
    "explanation": "SLI اندازه‌گیری و SLO هدف آن است. SLI رفتار اندازه‌گیری‌شده کاربر و SLO هدف آن است. error budget حد مجاز شکست در بازه مشخص است؛ alert روی burn rate می‌تواند زودتر از پایان budget هشدار دهد. هر alert باید action مشخص داشته باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-139",
    "category": "DevOps",
    "question": "مزیت اصلی stage runtime چیست؟",
    "answer": "نبود ابزار build و سطح حمله/حجم کمتر",
    "explanation": "نبود ابزار build و سطح حمله/حجم کمتر. Multi-stage build ابزار ساخت را از runtime جدا می‌کند. lock نسخه dependency و wrapper تکرارپذیری را بهتر می‌کنند؛ cache فقط بهینه‌سازی است. build بومی ARM64 برای مک نیاز به اجبار amd64 ندارد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-140",
    "category": "DevOps",
    "question": "از داخل app، localhost به کجا اشاره می‌کند؟",
    "answer": "خود container اپ",
    "explanation": "خود container اپ. Compose شبکه سرویس‌ها را با DNS نام سرویس می‌سازد. ports برای دسترسی host است؛ سرویس داخل شبکه از پورت داخلی استفاده می‌کند. volume داده را از چرخه container جدا می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-141",
    "category": "DevOps",
    "question": "چرا promote همان artifact بهتر است؟",
    "answer": "تفاوت پنهان build میان محیط‌ها کم می‌شود",
    "explanation": "تفاوت پنهان build میان محیط‌ها کم می‌شود. Pipeline باید artifact را یک بار بسازد و همان artifact را در محیط‌ها ارتقا دهد. test، scan و migration gateها باید شکست را متوقف کنند. deploy با tag شناور قابلیت بازتولید را کم می‌کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-142",
    "category": "DevOps",
    "question": "هدف اجرای verify پیش از publish چیست؟",
    "answer": "جلوگیری از انتشار artifact با تست شکست‌خورده",
    "explanation": "جلوگیری از انتشار artifact با تست شکست‌خورده. Pipeline پروژه باید با یک command قابل اجرای محلی هم باشد. تست DB واقعی به Docker runner نیاز دارد؛ reportها را در شکست هم ذخیره کن. انتشار image نباید پیش از عبور gateهای لازم رخ دهد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-143",
    "category": "DevOps",
    "question": "readiness ناموفق چه اثری باید داشته باشد؟",
    "answer": "حذف از مسیر ترافیک، نه الزاماً restart",
    "explanation": "حذف از مسیر ترافیک، نه الزاماً restart. Startup probe برای شروع کند، readiness برای دریافت ترافیک و liveness برای گیرکردن process است. endpointها باید سبک و کم‌وابستگی باشند. resource request/limit بر scheduling و رفتار runtime اثر دارد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-144",
    "category": "DevOps",
    "question": "چرا expand/contract مفید است؟",
    "answer": "حفظ سازگاری طی rollout و rollback کد",
    "explanation": "حفظ سازگاری طی rollout و rollback کد. Rollback image وقتی schema سازگار مانده ساده‌تر است. انتشار expand/contract اجازه می‌دهد نسخه قدیم و جدید مدتی همزیستی کنند. smoke test پس از deploy باید مسیر واقعی و محدود را بسنجد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-145",
    "category": "Production",
    "question": "چرا stop timeout باید با graceful shutdown هماهنگ باشد؟",
    "answer": "تا SIGKILL زودهنگام کارهای درحال‌اجرا را قطع نکند",
    "explanation": "تا SIGKILL زودهنگام کارهای درحال‌اجرا را قطع نکند. SIGTERM باید فرصت پایان درخواست‌های درحال‌اجرا را بدهد. ابتدا از routing خارج شو و سپس با deadline منطقی shutdown کن. زمان توقف container باید از بودجه drain کوتاه‌تر نباشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-146",
    "category": "Production",
    "question": "برای query کند اولین درمان منطقی چیست؟",
    "answer": "تحلیل query و زمان انتظار، نه تغییر تصادفی GC",
    "explanation": "تحلیل query و زمان انتظار، نه تغییر تصادفی GC. تیونینگ با baseline و یک فرضیه آغاز می‌شود؛ همزمان چند flag عوض نکن. pause، throughput، allocation و RSS را با نیاز کاربر بسنج. GC متفاوت درمان query کند یا صف pool اشباع نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-147",
    "category": "Production",
    "question": "آزمایش failure امن چه ویژگی دارد؟",
    "answer": "دامنه محدود، rollback/stop plan و مشاهده‌پذیری",
    "explanation": "دامنه محدود، rollback/stop plan و مشاهده‌پذیری. Threat model دارایی، مرز اعتماد، مهاجم و مسیر سوءاستفاده را مشخص می‌کند. failure test می‌سنجد سیستم زیر قطع شبکه، DB کند یا پیام تکراری چه می‌کند. آزمایش باید محدود، قابل توقف و ترجیحاً محیط جدا باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-148",
    "category": "Production",
    "question": "بهبود قابل دفاع چه شواهدی دارد؟",
    "answer": "مقایسه کنترل‌شده با خطا و latency و throughput",
    "explanation": "مقایسه کنترل‌شده با خطا و latency و throughput. Bottleneck را از trace و profiling پیدا و با یک تغییر کوچک درمان کن. اگر pool DB اشباع است، اول مدت query و transaction را ببین؛ زیادکردن pool ممکن است رقابت را بیشتر کند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-149",
    "category": "Production",
    "question": "اولویت پاسخ حادثه چیست؟",
    "answer": "کاهش اثر کاربر با اقدام قابل کنترل و شواهد",
    "explanation": "کاهش اثر کاربر با اقدام قابل کنترل و شواهد. Runbook برای حادثه باید علائم، بررسی‌های کم‌خطر، اقدام و escalation داشته باشد. ابتدا اثر کاربر و scope را مشخص کن؛ تغییرات را ثبت کن تا علت و recovery قابل پیگیری بماند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-150",
    "category": "Production",
    "question": "چه چیزی شاهد آمادگی واقعی است؟",
    "answer": "تست و rehearsal ثبت‌شده برای ریسک‌های مهم",
    "explanation": "تست و rehearsal ثبت‌شده برای ریسک‌های مهم. آمادگی انتشار از build سبز فراتر است: rollback، backup restore، کنترل دسترسی، observability و محدودیت منابع لازم‌اند. هر مورد checklist باید شاهد داشته باشد؛ برچسب production-ready بدون اجرا معتبر نیست.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-151",
    "category": "Interviews",
    "question": "خروجی دو مقایسه نمونه چیست؟",
    "answer": "false سپس true",
    "explanation": "false سپس true. مرور Core باید با تحلیل کد انجام شود: equality، generic variance، exception، immutability و JMM. پاسخ حفظی بدون مثال مرزی کافی نیست. برای هر موضوع یک bug کوچک را توضیح و اصلاح کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-152",
    "category": "Interviews",
    "question": "وجود @Transactional روی inner در نمونه چه تضمینی می‌دهد؟",
    "answer": "به تنهایی عبور از proxy و فعال‌شدن transaction را تضمین نمی‌کند",
    "explanation": "به تنهایی عبور از proxy و فعال‌شدن transaction را تضمین نمی‌کند. مرور Spring/JPA روی مرزهای runtime متمرکز است: proxy، transaction، persistence context و query count. برای هر annotation بگو چه زیرساختی لازم است و چه فراخوانی آن را دور می‌زند.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-153",
    "category": "Interviews",
    "question": "پیش از انتخاب Kafka یا Redis چه لازم است؟",
    "answer": "شناخت مسئله، ظرفیت و ضمانت‌های موردنیاز",
    "explanation": "شناخت مسئله، ظرفیت و ضمانت‌های موردنیاز. در مصاحبه system design ابتدا requirement و عددهای ظرفیت را روشن کن. جریان حیاتی، مدل داده و failureها را پیش از افزودن ابزار بکش. از فرض‌ها دفاع کن و راه ساده‌تر را هم مقایسه کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-154",
    "category": "Interviews",
    "question": "README قابل اعتماد چه ویژگی دارد؟",
    "answer": "فرمان‌های اجراشده و محدودیت‌های صریح",
    "explanation": "فرمان‌های اجراشده و محدودیت‌های صریح. README پروژه باید مسیر اجرای قابل تکرار، داده آزمایشی، API، تست و محدودیت‌های واقعی داشته باشد. ادعای JWT، relay outbox یا CI فقط وقتی مجاز است که همان قابلیت پیاده و بررسی شده باشد.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-155",
    "category": "Interviews",
    "question": "چرا synchronized کافی نیست؟",
    "answer": "بین JVMهای مختلف مشترک نیست",
    "explanation": "بین JVMهای مختلف مشترک نیست. مسئله موجودی آخرین کالا آزمون خوبی برای DB و concurrency است. راهکار باید در چند instance هم کار کند؛ lock حافظه JVM کافی نیست. rollback، deadlock و duplicate request را در پاسخ لحاظ کن.",
    "keyPoints": []
  },
  {
    "id": "fc-lesson-156",
    "category": "Interviews",
    "question": "معیار پایان مسیر چیست؟",
    "answer": "توانایی ساخت، تست، توضیح و عیب‌یابی رفتار واقعی",
    "explanation": "توانایی ساخت، تست، توضیح و عیب‌یابی رفتار واقعی. ارزیابی نهایی را بر اجرای کار بسنج: از checkout تا deploy محلی، تست API و عیب‌یابی یک failure. «خوانده‌شده» با «مهارت اثبات‌شده» یکی نیست. شکاف‌های باقی‌مانده را به تمرین بعدی تبدیل کن.",
    "keyPoints": []
  }
];
