import { Lesson } from "../types";

export const WEEK_04_LESSONS: Lesson[] = [
  {
    "id": "lesson-019",
    "slug": "jvm-heap-stack-garbage-collection",
    "week": 4,
    "day": 1,
    "title": "کالبدشکافی حافظه JVM: تفاوت Heap و Stack و الگوریتم‌های GC",
    "titleEn": "JVM Heap, Stack and Garbage Collection",
    "description": "نحوه تخصیص حافظه اشیا و فریم متدها، بررسی رفتار نسل‌های حافظه (Young/Old Generation) و نحوه کار جمع‌آورنده‌های زباله مدرن مانند G1 و ZGC.",
    "category": "JVM & Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "JVM Internals",
      "Heap & Stack",
      "Garbage Collection",
      "G1GC",
      "ZGC",
      "Memory Leak"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 3",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا GC شیء قابل دسترس ولی بی‌مصرف را الزاماً حذف می‌کند",
      "با یک cache بدون سقف مصرف heap را مشاهده کن؛ سپس eviction اضافه کن و روند مصرف را مقایسه کن."
    ],
    "whyItMatters": "افزایش Xmx علت نگه‌داشتن referenceها را درمان نمی‌کند.",
    "introduction": "نحوه تخصیص حافظه اشیا و فریم متدها، بررسی رفتار نسل‌های حافظه (Young/Old Generation) و نحوه کار جمع‌آورنده‌های زباله مدرن مانند G1 و ZGC.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "هر thread stack اجرای خود را دارد و اشیای معمول در heap مشترک قرار می‌گیرند. GC اشیای غیرقابل‌دسترسی را جمع می‌کند، نه اشیایی که صرفاً دیگر لازمشان نداری. cache یا listener دارای reference می‌تواند نشت منطقی بسازد."
      }
    ],
    "realWorldScenario": {
      "scenario": "با یک cache بدون سقف مصرف heap را مشاهده کن؛ سپس eviction اضافه کن و روند مصرف را مقایسه کن.",
      "solution": "افزایش Xmx علت نگه‌داشتن referenceها را درمان نمی‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "bash",
        "code": "java -Xms128m -Xmx512m -Xlog:gc* -jar app.jar\njcmd <PID> GC.heap_info",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "JVM Heap, Stack and Garbage Collection",
      "explanation": "Event Loop اجرای callbackهای JavaScript را زمان‌بندی می‌کند؛ libuv و Worker Threads نیز وجود دارند. در Java state یک singleton می‌تواند همزمان از چند thread لمس شود."
    },
    "commonMistakes": [
      {
        "mistake": "افزایش Xmx علت نگه‌داشتن referenceها را درمان نمی‌کند.",
        "whyBad": "هر thread stack اجرای خود را دارد و اشیای معمول در heap مشترک قرار می‌گیرند. GC اشیای غیرقابل‌دسترسی را جمع می‌کند، نه اشیایی که صرفاً دیگر لازمشان نداری. cache یا listener دارای reference می‌تواند نشت منطقی بسازد.",
        "solution": "خیر؛ reachable بودن مانع جمع‌آوری است"
      }
    ],
    "bestPractices": [
      "افزایش Xmx علت نگه‌داشتن referenceها را درمان نمی‌کند.",
      "با یک cache بدون سقف مصرف heap را مشاهده کن؛ سپس eviction اضافه کن و روند مصرف را مقایسه کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با یک cache بدون سقف مصرف heap را مشاهده کن؛ سپس eviction اضافه کن و روند مصرف را مقایسه کن.",
      "acceptanceCriteria": [
        "با یک cache بدون سقف مصرف heap را مشاهده کن؛ سپس eviction اضافه کن و روند مصرف را مقایسه کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "افزایش Xmx علت نگه‌داشتن referenceها را درمان نمی‌کند."
      ],
      "solution": {
        "code": "java -Xms128m -Xmx512m -Xlog:gc* -jar app.jar\njcmd <PID> GC.heap_info",
        "language": "bash",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ reachable بودن مانع جمع‌آوری است. افزایش Xmx علت نگه‌داشتن referenceها را درمان نمی‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-019",
        "question": "آیا GC شیء قابل دسترس ولی بی‌مصرف را الزاماً حذف می‌کند؟",
        "options": [
          "بله؛ JVM نیاز تجاری را تشخیص می‌دهد",
          "خیر؛ reachable بودن مانع جمع‌آوری است",
          "بله؛ به محض پایان هر HTTP request"
        ],
        "correctIndex": 1,
        "explanation": "خیر؛ reachable بودن مانع جمع‌آوری است. هر thread stack اجرای خود را دارد و اشیای معمول در heap مشترک قرار می‌گیرند. GC اشیای غیرقابل‌دسترسی را جمع می‌کند، نه اشیایی که صرفاً دیگر لازمشان نداری. cache یا listener دارای reference می‌تواند نشت منطقی بسازد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا GC شیء قابل دسترس ولی بی‌مصرف را الزاماً حذف می‌کند؟",
        "answer": "خیر؛ reachable بودن مانع جمع‌آوری است. افزایش Xmx علت نگه‌داشتن referenceها را درمان نمی‌کند."
      }
    ],
    "summary": "هر thread stack اجرای خود را دارد و اشیای معمول در heap مشترک قرار می‌گیرند. GC اشیای غیرقابل‌دسترسی را جمع می‌کند، نه اشیایی که صرفاً دیگر لازمشان نداری. cache یا listener دارای reference می‌تواند نشت منطقی بسازد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/concurrency.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-020",
    "slug": "threads-and-executorservice",
    "week": 4,
    "day": 2,
    "title": "مدیریت ریسمان‌ها در جاوا با ExecutorService و Thread Pools",
    "titleEn": "Threads and ExecutorService",
    "description": "تفاوت مدل تک‌رشته‌ای Node.js Event Loop با رشته‌های سیستم‌عامل در جاوا، چرخه حیات رشته‌ها، استخر رشته‌ها و متدهای submit/invokeAll.",
    "category": "JVM & Concurrency",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Threads",
      "ExecutorService",
      "ThreadPoolExecutor",
      "Async",
      "Node vs Java Concurrency"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 3",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "submit شکست task را کجا در اختیار مصرف‌کننده می‌گذارد",
      "سه task با یک شکست اجرا کن؛ خطای ExecutionException را با حفظ cause بررسی کن و executor را ببند."
    ],
    "whyItMatters": "صف newFixedThreadPool بدون سقف است؛ برای بار کنترل‌نشده executor با صف محدود لازم است.",
    "introduction": "تفاوت مدل تک‌رشته‌ای Node.js Event Loop با رشته‌های سیستم‌عامل در جاوا، چرخه حیات رشته‌ها، استخر رشته‌ها و متدهای submit/invokeAll.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "ExecutorService اجرای task را از ساخت thread جدا می‌کند. Future.get نتیجه یا خطا را آشکار می‌کند؛ اگر نتیجه را رها کنی ممکن است شکست task را نبینی. در Java 25 executor را با try-with-resources ببند."
      }
    ],
    "realWorldScenario": {
      "scenario": "سه task با یک شکست اجرا کن؛ خطای ExecutionException را با حفظ cause بررسی کن و executor را ببند.",
      "solution": "صف newFixedThreadPool بدون سقف است؛ برای بار کنترل‌نشده executor با صف محدود لازم است."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "try (var pool = Executors.newFixedThreadPool(2)) {\n    Future<Integer> result = pool.submit(() -> 21 * 2);\n    System.out.println(result.get());\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Threads and ExecutorService",
      "explanation": "Event Loop اجرای callbackهای JavaScript را زمان‌بندی می‌کند؛ libuv و Worker Threads نیز وجود دارند. در Java state یک singleton می‌تواند همزمان از چند thread لمس شود."
    },
    "commonMistakes": [
      {
        "mistake": "صف newFixedThreadPool بدون سقف است؛ برای بار کنترل‌نشده executor با صف محدود لازم است.",
        "whyBad": "ExecutorService اجرای task را از ساخت thread جدا می‌کند. Future.get نتیجه یا خطا را آشکار می‌کند؛ اگر نتیجه را رها کنی ممکن است شکست task را نبینی. در Java 25 executor را با try-with-resources ببند.",
        "solution": "در Future و فراخوانی get"
      }
    ],
    "bestPractices": [
      "صف newFixedThreadPool بدون سقف است؛ برای بار کنترل‌نشده executor با صف محدود لازم است.",
      "سه task با یک شکست اجرا کن؛ خطای ExecutionException را با حفظ cause بررسی کن و executor را ببند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "سه task با یک شکست اجرا کن؛ خطای ExecutionException را با حفظ cause بررسی کن و executor را ببند.",
      "acceptanceCriteria": [
        "سه task با یک شکست اجرا کن؛ خطای ExecutionException را با حفظ cause بررسی کن و executor را ببند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "صف newFixedThreadPool بدون سقف است؛ برای بار کنترل‌نشده executor با صف محدود لازم است."
      ],
      "solution": {
        "code": "try (var pool = Executors.newFixedThreadPool(2)) {\n    Future<Integer> result = pool.submit(() -> 21 * 2);\n    System.out.println(result.get());\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. در Future و فراخوانی get. صف newFixedThreadPool بدون سقف است؛ برای بار کنترل‌نشده executor با صف محدود لازم است."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-020",
        "question": "submit شکست task را کجا در اختیار مصرف‌کننده می‌گذارد؟",
        "options": [
          "همیشه مستقیماً در thread فراخواننده submit",
          "آن را خودکار retry می‌کند",
          "در Future و فراخوانی get"
        ],
        "correctIndex": 2,
        "explanation": "در Future و فراخوانی get. ExecutorService اجرای task را از ساخت thread جدا می‌کند. Future.get نتیجه یا خطا را آشکار می‌کند؛ اگر نتیجه را رها کنی ممکن است شکست task را نبینی. در Java 25 executor را با try-with-resources ببند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: submit شکست task را کجا در اختیار مصرف‌کننده می‌گذارد؟",
        "answer": "در Future و فراخوانی get. صف newFixedThreadPool بدون سقف است؛ برای بار کنترل‌نشده executor با صف محدود لازم است."
      }
    ],
    "summary": "ExecutorService اجرای task را از ساخت thread جدا می‌کند. Future.get نتیجه یا خطا را آشکار می‌کند؛ اگر نتیجه را رها کنی ممکن است شکست task را نبینی. در Java 25 executor را با try-with-resources ببند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/concurrency.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-021",
    "slug": "race-conditions-and-thread-safety",
    "week": 4,
    "day": 3,
    "title": "شرایط رقابتی (Race Conditions) و مکانیزم‌های Thread Safety",
    "titleEn": "Race Conditions and Thread Safety",
    "description": "تحلیل باگ‌های پنهان دسترسی موازی، کلمات کلیدی synchronized و volatile، و استفاده از متغیرهای اتمیک پکیج java.util.concurrent.atomic.",
    "category": "JVM & Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Race Conditions",
      "Thread Safety",
      "Volatile",
      "AtomicInteger",
      "Locks"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 3",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا volatile int برای count++ کافی است",
      "با چند thread شمارنده را افزایش بده؛ سپس volatile تنها را جایگزین کن و تفاوت تضمین را توضیح بده."
    ],
    "whyItMatters": "عبور تصادفی یک تست همزمانی اثبات thread safety نیست.",
    "introduction": "تحلیل باگ‌های پنهان دسترسی موازی، کلمات کلیدی synchronized و volatile، و استفاده از متغیرهای اتمیک پکیج java.util.concurrent.atomic.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "count++ یک عملیات اتمیک نیست. volatile visibility می‌دهد اما read-modify-write را اتمیک نمی‌کند. synchronized علاوه بر mutual exclusion رابطه happens-before می‌سازد؛ برای invariant چندفیلدی قفل مشترک یا طراحی immutable لازم است."
      }
    ],
    "realWorldScenario": {
      "scenario": "با چند thread شمارنده را افزایش بده؛ سپس volatile تنها را جایگزین کن و تفاوت تضمین را توضیح بده.",
      "solution": "عبور تصادفی یک تست همزمانی اثبات thread safety نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "final class Counter {\n    private int value;\n    synchronized void increment() { value++; }\n    synchronized int value() { return value; }\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Race Conditions and Thread Safety",
      "explanation": "Event Loop اجرای callbackهای JavaScript را زمان‌بندی می‌کند؛ libuv و Worker Threads نیز وجود دارند. در Java state یک singleton می‌تواند همزمان از چند thread لمس شود."
    },
    "commonMistakes": [
      {
        "mistake": "عبور تصادفی یک تست همزمانی اثبات thread safety نیست.",
        "whyBad": "count++ یک عملیات اتمیک نیست. volatile visibility می‌دهد اما read-modify-write را اتمیک نمی‌کند. synchronized علاوه بر mutual exclusion رابطه happens-before می‌سازد؛ برای invariant چندفیلدی قفل مشترک یا طراحی immutable لازم است.",
        "solution": "خیر؛ افزایش چندمرحله‌ای است"
      }
    ],
    "bestPractices": [
      "عبور تصادفی یک تست همزمانی اثبات thread safety نیست.",
      "با چند thread شمارنده را افزایش بده؛ سپس volatile تنها را جایگزین کن و تفاوت تضمین را توضیح بده."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با چند thread شمارنده را افزایش بده؛ سپس volatile تنها را جایگزین کن و تفاوت تضمین را توضیح بده.",
      "acceptanceCriteria": [
        "با چند thread شمارنده را افزایش بده؛ سپس volatile تنها را جایگزین کن و تفاوت تضمین را توضیح بده.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "عبور تصادفی یک تست همزمانی اثبات thread safety نیست."
      ],
      "solution": {
        "code": "final class Counter {\n    private int value;\n    synchronized void increment() { value++; }\n    synchronized int value() { return value; }\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ افزایش چندمرحله‌ای است. عبور تصادفی یک تست همزمانی اثبات thread safety نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-021",
        "question": "آیا volatile int برای count++ کافی است؟",
        "options": [
          "خیر؛ افزایش چندمرحله‌ای است",
          "بله؛ تمام عملیات روی آن قفل می‌شوند",
          "فقط وقتی CPU بیشتر از یک هسته دارد"
        ],
        "correctIndex": 0,
        "explanation": "خیر؛ افزایش چندمرحله‌ای است. count++ یک عملیات اتمیک نیست. volatile visibility می‌دهد اما read-modify-write را اتمیک نمی‌کند. synchronized علاوه بر mutual exclusion رابطه happens-before می‌سازد؛ برای invariant چندفیلدی قفل مشترک یا طراحی immutable لازم است."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا volatile int برای count++ کافی است؟",
        "answer": "خیر؛ افزایش چندمرحله‌ای است. عبور تصادفی یک تست همزمانی اثبات thread safety نیست."
      }
    ],
    "summary": "count++ یک عملیات اتمیک نیست. volatile visibility می‌دهد اما read-modify-write را اتمیک نمی‌کند. synchronized علاوه بر mutual exclusion رابطه happens-before می‌سازد؛ برای invariant چندفیلدی قفل مشترک یا طراحی immutable لازم است.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/concurrency.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-022",
    "slug": "concurrent-order-processing",
    "week": 4,
    "day": 4,
    "title": "پیاده‌سازی پردازش همزمان سفارشات و مدیریت انبار (پروژه محوری)",
    "titleEn": "Concurrent Order Processing",
    "description": "ساخت سرویس پردازش همزمان سبدهای خرید با مدیریت موجودی انبار بدون ایجاد ناهماهنگی در تعداد کالا، شبیه‌سازی ترافیک سنگین و تست استرس.",
    "category": "JVM & Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "Concurrency",
      "Inventory Lock",
      "Stress Testing",
      "Order Processing"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 3",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "قفل synchronized از موجودی در دو JVM محافظت می‌کند",
      "موجودی یک را با دو درخواست همزمان امتحان کن؛ دقیقاً یک رزرو موفق باشد. محدودیت چند instance را بنویس."
    ],
    "whyItMatters": "check خارج از قفل و decrement داخل قفل هنوز race condition دارد.",
    "introduction": "ساخت سرویس پردازش همزمان سبدهای خرید با مدیریت موجودی انبار بدون ایجاد ناهماهنگی در تعداد کالا، شبیه‌سازی ترافیک سنگین و تست استرس.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "در یک process می‌توان check و decrement را زیر یک قفل واحد انجام داد؛ این قفل میان چند instance مشترک نیست. برای سفارش واقعی، invariant موجودی باید در دیتابیس و تراکنش محافظت شود."
      }
    ],
    "realWorldScenario": {
      "scenario": "موجودی یک را با دو درخواست همزمان امتحان کن؛ دقیقاً یک رزرو موفق باشد. محدودیت چند instance را بنویس.",
      "solution": "check خارج از قفل و decrement داخل قفل هنوز race condition دارد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "synchronized boolean reserve(int quantity) {\n    if (quantity < 1 || stock < quantity) return false;\n    stock -= quantity;\n    return true;\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Concurrent Order Processing",
      "explanation": "Event Loop اجرای callbackهای JavaScript را زمان‌بندی می‌کند؛ libuv و Worker Threads نیز وجود دارند. در Java state یک singleton می‌تواند همزمان از چند thread لمس شود."
    },
    "commonMistakes": [
      {
        "mistake": "check خارج از قفل و decrement داخل قفل هنوز race condition دارد.",
        "whyBad": "در یک process می‌توان check و decrement را زیر یک قفل واحد انجام داد؛ این قفل میان چند instance مشترک نیست. برای سفارش واقعی، invariant موجودی باید در دیتابیس و تراکنش محافظت شود.",
        "solution": "خیر؛ قفل حافظه محلی process است"
      }
    ],
    "bestPractices": [
      "check خارج از قفل و decrement داخل قفل هنوز race condition دارد.",
      "موجودی یک را با دو درخواست همزمان امتحان کن؛ دقیقاً یک رزرو موفق باشد. محدودیت چند instance را بنویس."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "موجودی یک را با دو درخواست همزمان امتحان کن؛ دقیقاً یک رزرو موفق باشد. محدودیت چند instance را بنویس.",
      "acceptanceCriteria": [
        "موجودی یک را با دو درخواست همزمان امتحان کن؛ دقیقاً یک رزرو موفق باشد. محدودیت چند instance را بنویس.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "check خارج از قفل و decrement داخل قفل هنوز race condition دارد."
      ],
      "solution": {
        "code": "synchronized boolean reserve(int quantity) {\n    if (quantity < 1 || stock < quantity) return false;\n    stock -= quantity;\n    return true;\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ قفل حافظه محلی process است. check خارج از قفل و decrement داخل قفل هنوز race condition دارد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-022",
        "question": "قفل synchronized از موجودی در دو JVM محافظت می‌کند؟",
        "options": [
          "بله؛ اگر کلاس‌ها نام یکسان داشته باشند",
          "خیر؛ قفل حافظه محلی process است",
          "بله؛ با static شدن هر فیلد"
        ],
        "correctIndex": 1,
        "explanation": "خیر؛ قفل حافظه محلی process است. در یک process می‌توان check و decrement را زیر یک قفل واحد انجام داد؛ این قفل میان چند instance مشترک نیست. برای سفارش واقعی، invariant موجودی باید در دیتابیس و تراکنش محافظت شود."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: قفل synchronized از موجودی در دو JVM محافظت می‌کند؟",
        "answer": "خیر؛ قفل حافظه محلی process است. check خارج از قفل و decrement داخل قفل هنوز race condition دارد."
      }
    ],
    "summary": "در یک process می‌توان check و decrement را زیر یک قفل واحد انجام داد؛ این قفل میان چند instance مشترک نیست. برای سفارش واقعی، invariant موجودی باید در دیتابیس و تراکنش محافظت شود.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/concurrency.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-023",
    "slug": "jvm-profiling-fundamentals",
    "week": 4,
    "day": 5,
    "title": "مبانی پروفایلینگ و پایش رفتار JVM در محیط زنده",
    "titleEn": "JVM Profiling Fundamentals",
    "description": "کار با ابزارهای JDK مانند jcmd, jstack, jmap و ابزارهای مانیتورینگ تصویری (JConsole, VisualVM) برای استخراج گلوگاه‌های پرفورمنس و Thread Dump.",
    "category": "JVM & Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Profiling",
      "Thread Dump",
      "Heap Dump",
      "jstack",
      "VisualVM",
      "Performance"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 3",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "برای تصمیم تیونینگ اولین گام چیست",
      "یک endpoint کند را زیر بار محدود اجرا کن؛ با JFR مشخص کن وقت روی CPU صرف می‌شود یا انتظار اتصال DB."
    ],
    "whyItMatters": "یک snapshot بدون workload و baseline قابل تفسیر مطمئن نیست.",
    "introduction": "کار با ابزارهای JDK مانند jcmd, jstack, jmap و ابزارهای مانیتورینگ تصویری (JConsole, VisualVM) برای استخراج گلوگاه‌های پرفورمنس و Thread Dump.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "پیش از تغییر GC یا thread pool، داده جمع کن. JFR نمونه‌های CPU، allocation، قفل و I/O را کنار هم نشان می‌دهد. thread dump برای دیدن محل انتظار است؛ تعداد زیاد WAITING الزاماً مشکل نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک endpoint کند را زیر بار محدود اجرا کن؛ با JFR مشخص کن وقت روی CPU صرف می‌شود یا انتظار اتصال DB.",
      "solution": "یک snapshot بدون workload و baseline قابل تفسیر مطمئن نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "bash",
        "code": "jcmd <PID> JFR.start name=orders settings=profile duration=60s filename=/tmp/orders.jfr\njcmd <PID> Thread.print",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "JVM Profiling Fundamentals",
      "explanation": "Event Loop اجرای callbackهای JavaScript را زمان‌بندی می‌کند؛ libuv و Worker Threads نیز وجود دارند. در Java state یک singleton می‌تواند همزمان از چند thread لمس شود."
    },
    "commonMistakes": [
      {
        "mistake": "یک snapshot بدون workload و baseline قابل تفسیر مطمئن نیست.",
        "whyBad": "پیش از تغییر GC یا thread pool، داده جمع کن. JFR نمونه‌های CPU، allocation، قفل و I/O را کنار هم نشان می‌دهد. thread dump برای دیدن محل انتظار است؛ تعداد زیاد WAITING الزاماً مشکل نیست.",
        "solution": "اندازه‌گیری زیر بار نماینده"
      }
    ],
    "bestPractices": [
      "یک snapshot بدون workload و baseline قابل تفسیر مطمئن نیست.",
      "یک endpoint کند را زیر بار محدود اجرا کن؛ با JFR مشخص کن وقت روی CPU صرف می‌شود یا انتظار اتصال DB."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک endpoint کند را زیر بار محدود اجرا کن؛ با JFR مشخص کن وقت روی CPU صرف می‌شود یا انتظار اتصال DB.",
      "acceptanceCriteria": [
        "یک endpoint کند را زیر بار محدود اجرا کن؛ با JFR مشخص کن وقت روی CPU صرف می‌شود یا انتظار اتصال DB.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "یک snapshot بدون workload و baseline قابل تفسیر مطمئن نیست."
      ],
      "solution": {
        "code": "jcmd <PID> JFR.start name=orders settings=profile duration=60s filename=/tmp/orders.jfr\njcmd <PID> Thread.print",
        "language": "bash",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. اندازه‌گیری زیر بار نماینده. یک snapshot بدون workload و baseline قابل تفسیر مطمئن نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-023",
        "question": "برای تصمیم تیونینگ اولین گام چیست؟",
        "options": [
          "افزایش همه poolها به ۱۰۰۰",
          "خاموش‌کردن log و فرض حل مشکل",
          "اندازه‌گیری زیر بار نماینده"
        ],
        "correctIndex": 2,
        "explanation": "اندازه‌گیری زیر بار نماینده. پیش از تغییر GC یا thread pool، داده جمع کن. JFR نمونه‌های CPU، allocation، قفل و I/O را کنار هم نشان می‌دهد. thread dump برای دیدن محل انتظار است؛ تعداد زیاد WAITING الزاماً مشکل نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: برای تصمیم تیونینگ اولین گام چیست؟",
        "answer": "اندازه‌گیری زیر بار نماینده. یک snapshot بدون workload و baseline قابل تفسیر مطمئن نیست."
      }
    ],
    "summary": "پیش از تغییر GC یا thread pool، داده جمع کن. JFR نمونه‌های CPU، allocation، قفل و I/O را کنار هم نشان می‌دهد. thread dump برای دیدن محل انتظار است؛ تعداد زیاد WAITING الزاماً مشکل نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/concurrency.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-024",
    "slug": "jvm-flags-and-memory-limits",
    "week": 4,
    "day": 6,
    "title": "تنظیم پروداکشن JVM Flags و مدیریت محدودیت حافظه در کانتینرها",
    "titleEn": "JVM Flags and Memory Limits",
    "description": "تنظیم فلگ‌های حیاتی -Xms, -Xmx، شناسایی محدودیت‌های حافظه در محیط داکر و cgroups با استفاده از -XX:+UseContainerSupport و جلوگیری از OOMKilled.",
    "category": "JVM & Concurrency",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "JVM Flags",
      "Container Memory",
      "OOMKilled",
      "Xmx",
      "Production Tuning"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 3",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "حد ۵۱۲MB کانتینر یعنی می‌توان Xmx=512m گذاشت",
      "با limit مشخص Docker، heap و RSS را مقایسه کن؛ توضیح بده چرا Xmx برابر کل limit خطرناک است."
    ],
    "whyItMatters": "OOMKilled ممکن است بدون Java OutOfMemoryError رخ دهد؛ exit code و رخداد container را نیز ببین.",
    "introduction": "تنظیم فلگ‌های حیاتی -Xms, -Xmx، شناسایی محدودیت‌های حافظه در محیط داکر و cgroups با استفاده از -XX:+UseContainerSupport و جلوگیری از OOMKilled.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "حد حافظه کانتینر فقط heap نیست؛ metaspace، stack، direct buffer و native memory هم مصرف دارند. MaxRAMPercentage سهم heap را تعیین می‌کند، نه سقف کل process. فاصله امن تا حد container را با اندازه‌گیری انتخاب کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "با limit مشخص Docker، heap و RSS را مقایسه کن؛ توضیح بده چرا Xmx برابر کل limit خطرناک است.",
      "solution": "OOMKilled ممکن است بدون Java OutOfMemoryError رخ دهد؛ exit code و رخداد container را نیز ببین."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "bash",
        "code": "java -XX:MaxRAMPercentage=60 -XX:+ExitOnOutOfMemoryError -jar app.jar\ndocker stats",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "JVM Flags and Memory Limits",
      "explanation": "Event Loop اجرای callbackهای JavaScript را زمان‌بندی می‌کند؛ libuv و Worker Threads نیز وجود دارند. در Java state یک singleton می‌تواند همزمان از چند thread لمس شود."
    },
    "commonMistakes": [
      {
        "mistake": "OOMKilled ممکن است بدون Java OutOfMemoryError رخ دهد؛ exit code و رخداد container را نیز ببین.",
        "whyBad": "حد حافظه کانتینر فقط heap نیست؛ metaspace، stack، direct buffer و native memory هم مصرف دارند. MaxRAMPercentage سهم heap را تعیین می‌کند، نه سقف کل process. فاصله امن تا حد container را با اندازه‌گیری انتخاب کن.",
        "solution": "معمولاً خیر؛ حافظه غیر heap هم نیاز است"
      }
    ],
    "bestPractices": [
      "OOMKilled ممکن است بدون Java OutOfMemoryError رخ دهد؛ exit code و رخداد container را نیز ببین.",
      "با limit مشخص Docker، heap و RSS را مقایسه کن؛ توضیح بده چرا Xmx برابر کل limit خطرناک است."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "با limit مشخص Docker، heap و RSS را مقایسه کن؛ توضیح بده چرا Xmx برابر کل limit خطرناک است.",
      "acceptanceCriteria": [
        "با limit مشخص Docker، heap و RSS را مقایسه کن؛ توضیح بده چرا Xmx برابر کل limit خطرناک است.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "OOMKilled ممکن است بدون Java OutOfMemoryError رخ دهد؛ exit code و رخداد container را نیز ببین."
      ],
      "solution": {
        "code": "java -XX:MaxRAMPercentage=60 -XX:+ExitOnOutOfMemoryError -jar app.jar\ndocker stats",
        "language": "bash",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. معمولاً خیر؛ حافظه غیر heap هم نیاز است. OOMKilled ممکن است بدون Java OutOfMemoryError رخ دهد؛ exit code و رخداد container را نیز ببین."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-024",
        "question": "حد ۵۱۲MB کانتینر یعنی می‌توان Xmx=512m گذاشت؟",
        "options": [
          "معمولاً خیر؛ حافظه غیر heap هم نیاز است",
          "بله؛ stack داخل همان heap است",
          "بله؛ Docker متاسپیس را حساب نمی‌کند"
        ],
        "correctIndex": 0,
        "explanation": "معمولاً خیر؛ حافظه غیر heap هم نیاز است. حد حافظه کانتینر فقط heap نیست؛ metaspace، stack، direct buffer و native memory هم مصرف دارند. MaxRAMPercentage سهم heap را تعیین می‌کند، نه سقف کل process. فاصله امن تا حد container را با اندازه‌گیری انتخاب کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: حد ۵۱۲MB کانتینر یعنی می‌توان Xmx=512m گذاشت؟",
        "answer": "معمولاً خیر؛ حافظه غیر heap هم نیاز است. OOMKilled ممکن است بدون Java OutOfMemoryError رخ دهد؛ exit code و رخداد container را نیز ببین."
      }
    ],
    "summary": "حد حافظه کانتینر فقط heap نیست؛ metaspace، stack، direct buffer و native memory هم مصرف دارند. MaxRAMPercentage سهم heap را تعیین می‌کند، نه سقف کل process. فاصله امن تا حد container را با اندازه‌گیری انتخاب کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.oracle.com/en/java/javase/25/core/concurrency.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
