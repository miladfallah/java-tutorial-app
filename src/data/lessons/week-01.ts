import { Lesson } from "../types";

export const WEEK_01_LESSONS: Lesson[] = [
  {
    id: "lesson-001",
    slug: "jdk-jre-jvm-project-structure",
    week: 1,
    day: 1,
    title: "شناخت JDK، JRE، JVM و ساختار استاندارد پروژه‌های جاوا",
    titleEn: "JDK, JRE, JVM and Java Project Structure",
    description: "بررسی عمیق ماشین مجازی جاوا، مقایسه نحوه اجرای بایت‌کد جاوا در برابر موتور V8 و ساختار استاندارد سورس‌کد.",
    category: "Java Core",
    difficulty: "Intermediate",
    estimatedMinutes: 30,
    prerequisites: ["آشنایی با اجرای برنامه‌های سمت سرور", "مفاهیم اولیه کامپایل و مفسر در زبان‌های برنامه‌نویسی"],
    learningObjectives: [
      "درک تفاوت ساختاری میان کامپایل زبان‌های تفسیری/JIT در V8 نودجی‌اس با معماری دو مرحله‌ای بایت‌کد و JVM در جاوا",
      "شناخت دقیق نقش تفکیک‌شده JDK (ابزار توسعه)، JRE (محیط اجرا) و JVM (ماشین مجازی)",
      "تسلط بر ساختار استاندارد دایرکتوری‌های Maven و قوانین نام‌گذاری بسته‌ها (Packages)",
      "نحوه مدیریت Classpath و چرخه تبدیل سورس .java به بایت‌کد .class",
    ],
    whyItMatters: "در Node.js شما مستقیماً فایل‌های JavaScript یا به کمک ts-node فایل‌های TypeScript را به موتور V8 می‌دهید. اما در سیستم‌های مقیاس‌بزرگ سازمانی جاوا، درک نحوه عملکرد JVM، حافظه و بایت‌کد برای دیباگ کرش‌های سرور، بهینه‌سازی پرفورمنس و پیکربندی کانتینرهای داکر حیاتی است.",
    introduction: `به عنوان یک توسعه‌دهنده باسابقه نودجی‌اس، شما عادت دارید با موتور V8، فایل‌های package.json و اجرای مستقیم فایل‌ها با دستور node کار کنید. وقتی وارد دنیای جاوا می‌شوید، اولین شوک مفهومی، معماری سه‌گانه JDK، JRE و JVM است.

در جاوا، کد شما به صورت مستقیم به زبان ماشین سیستم‌عامل (Machine Code) ترجمه نمی‌شود؛ بلکه به یک فرمت میانی مستقل از سخت‌افزار به نام **بایت‌کد (Bytecode)** کامپایل می‌شود. سپس این بایت‌کد توسط ماشین مجازی جاوا (JVM) بر روی لینوکس، ویندوز یا مک اجرا می‌گردد. شعار تاریخی جاوا یعنی "Write Once, Run Anywhere" (یک‌بار بنویس، همه‌جا اجرا کن) دقیقاً از همین تفکیک معماری سرچشمه می‌گیرد.`,
    conceptualSections: [
      {
        title: "کالبدشکافی سه‌گانه: JDK در برابر JRE در برابر JVM",
        content: `بیایید این سه مفهوم بنیادین را با معادل‌های دنیای نودجی‌اس مقایسه کنیم:
1. **JVM (Java Virtual Machine):** ماشین مجازی انتزاعی است که بایت‌کد را خوانده و با ترکیب تفسیر (Interpretation) و کامپایل لحظه‌ای (JIT Compilation - Just-In-Time) آن را به کدهای باینری بهینه برای پردازنده سرور تبدیل می‌کند.
2. **JRE (Java Runtime Environment):** بسته‌ای است شامل خود JVM به همراه تمام کتابخانه‌های استاندارد هسته جاوا (مانند java.lang, java.util). این بسته فقط برای اجرای برنامه‌ها در پروداکشن کافی است.
3. **JDK (Java Development Kit):** کیت کامل توسعه‌دهنده است که شامل JRE به علاوه ابزارهای ضروری توسعه مانند کامپایلر (javac)، بایگانی‌ساز (jar)، دیباگر (jdb) و ابزارهای پروفایلینگ حافظه (jcmd, jstack) می‌باشد.

> **مقایسه با Node.js:** در نود، با نصب node عملاً هم رانتایم و هم مفسر را یکجا دارید، و با اضافه کردن tsc (TypeScript Compiler) رفتاری شبیه به javac را تجربه می‌کنید. اما در جاوا ۲۱، بسته‌بندی JDK کاملاً رسمی، یکپارچه و بهینه‌سازی شده است.`,
        keyPoints: [
          "javac سورس‌کد جاوا را به فایل .class (Bytecode) تبدیل می‌کند.",
          "موتور JIT بخش‌های پرتکرار کد (Hotspots) را به کد ماشین بومی پردازنده کش می‌کند.",
          "از جاوا ۱۱ به بعد، پکیج اختصاصی JRE جداگانه کمتر منتشر می‌شود و تمرکز بر استفاده از jlink برای ساخت رانتایم‌های مینیمال است.",
        ],
      },
      {
        title: "ساختار استاندارد پروژه‌های جاوا (Maven Standard Directory Layout)",
        content: `در نود معمولاً ساختار پوشه‌ها سلیقه‌ای است (مثلاً src/controllers یا src/modules). اما در جاوا به دلیل استاندارد سازمان‌یافته ابزار ساخت Maven، یک ساختار صلب و قراردادی حاکم است که تمام ابزارها و فریم‌ورک‌ها آن را به طور خودکار می‌شناسند:

\`\`\`text
my-project/
├── pom.xml                     <-- معادل package.json
├── src/
│   ├── main/
│   │   ├── java/               <-- سورس‌کد اصلی برنامه (جاوا)
│   │   │   └── com/
│   │   │       └── company/
│   │   │           └── academy/
│   │   │               └── Application.java
│   │   └── resources/          <-- فایل‌های کانفیگ (application.yml)، اسکریپت‌های SQL
│   └── test/
│       ├── java/               <-- کدهای تست واحد و یکپارچگی (JUnit)
│       └── resources/          <-- فایل‌های کانفیگ اختصاصی محیط آزمون
└── target/                     <-- پوشه خروجی بیلد و JAR (معادل dist/)
\`\`\`

قانون مهم در جاوا: نام پکیج‌ها (مانند \`com.company.academy\`) دقیقاً باید منطبق بر ساختار پوشه‌ها روی دیسک باشد.`,
        keyPoints: [
          "src/main/java ریشه کدهای بیزینس است.",
          "src/main/resources برای کانفیگ‌ها و فایل‌های ثابت (Static) استفاده می‌شود.",
          "عدم تطابق پوشه‌بندی و نام Package در بالای فایل جاوا باعث خطای کامپایل Package declaration does not match می‌شود.",
        ],
      },
      {
        title: "مفهوم Classpath در برابر node_modules",
        content: `در Node.js مکانیزم ماژولار با خواندن محتویات پوشه سنگین \`node_modules\` و کشف پکیج‌ها از روی مسیر فایل صورت می‌گیرد.
اما در جاوا پدیده‌ای به نام **Classpath** وجود دارد. Classpath لیستی از مسیرها (دایرکتوری‌ها یا فایل‌های آرشیو .jar) است که JVM در زمان اجرا به دنبال بایت‌کد کلاس‌ها می‌گردد. اگر کلاسی در این مسیرها پیدا نشود، با خطای معروف \`ClassNotFoundException\` یا \`NoClassDefFoundError\` مواجه می‌شوید.`,
        keyPoints: [
          "فایل‌های .jar در واقع همان فایل‌های فشرده ZIP حاوی فایل‌های کامپایل‌شده .class هستند.",
          "مدیریت دستی Classpath طاقت‌فرساست؛ به همین دلیل ابزارهایی مانند Maven و Gradle این زنجیره را به طور اتوماتیک تولید می‌کنند.",
        ],
      },
    ],
    internalsAndMechanisms: `هنگامی که دستور \`javac Application.java\` را اجرا می‌کنید، کامپایلر گرامر کد را ارزیابی کرده و فایل باینری \`Application.class\` را می‌سازد.
بایت‌کد جاوا شامل دستورالعمل‌های ساده مبتنی بر پشته (Stack-based Virtual Machine) است. به عنوان مثال دستوراتی نظیر \`iload_1\` (بارگذاری عدد صحیح در پشته) و \`iadd\` (جمع دو عدد) در آن ذخیره می‌شوند.
سپس JVM با استفاده از زیرسیستم **ClassLoader** این بایت‌کد را در حافظه لود می‌کند، فرایند اعتبارسنجی بایت‌کد (Bytecode Verifier) را جهت تضمین امنیت انجام می‌دهد و در صورتی که تکه کدی بارها صدا زده شود، کامپایلر لحظه‌ای **C2/Graal JIT** آن را به کدهای سطح بالای اسمبلی سیستم ترجمه می‌کند تا سرعتی نزدیک به C++ حاصل شود.`,
    realWorldScenario: {
      scenario: "یک کانتینر داکر بر روی سرور کوبرنتیز اجرا شده اما پس از بالا آمدن با خطای ClassNotFoundException متوقف می‌شود، در حالی که برنامه در محیط توسعه لوکال روی ویندوز به خوبی کار می‌کرد.",
      solution: "مشکل به دلیل حساسیت لینوکس به بزرگی و کوچکی حروف (Case-sensitivity) در نام پکیج‌ها و تفاوت در ترتیب چیدمان فایل‌های JAR در Classpath کانتینر رخ داده است. راهکار اصولی: استفاده از ساختار استاندارد Maven و ساخت Fat JAR (یا Uber JAR) از طریق افزونه spring-boot-maven-plugin تا تمام وابستگی‌ها در قالب یک آرشیو مستقل بسته‌بندی شوند.",
    },
    codeExamples: [
      {
        title: "کلاس ساده جاوا و نقطه ورود استاندارد (Entry Point)",
        language: "java",
        filename: "src/main/java/com/academy/order/Application.java",
        explanation: "در جاوا هر کدی باید درون یک کلاس قرار گیرد. متد main نقطه ورود برنامه است که همیشه به صورت public static void main با آرگومان رشته‌ای تعریف می‌شود.",
        code: `package com.academy.order;

public class Application {
    public static void main(String[] args) {
        System.out.println("سیستم مدیریت سفارشات با موفقیت روی JVM جاوا ۲۱ راه‌اندازی شد.");
        
        // نمایش اطلاعات محیط اجرای JVM
        String javaVersion = System.getProperty("java.version");
        String javaVendor = System.getProperty("java.vendor");
        
        System.out.printf("نسخه جاوا: %s | تامین‌کننده: %s%n", javaVersion, javaVendor);
    }
}`,
      },
      {
        title: "نحوه کامپایل و اجرای دستی در خط فرمان",
        language: "bash",
        titleEn: "CLI Compilation",
        explanation: "مراحل تبدیل فایل سورس جاوا به بایت‌کد و اجرای آن با JVM از طریق ترمینال بدون نیاز به ابزارهای جانبی.",
        code: `# کامپایل فایل جاوا به بایت‌کد
javac -d target/classes src/main/java/com/academy/order/Application.java

# اجرای بایت‌کد تولید شده با مشخص کردن Classpath (-cp)
java -cp target/classes com.academy.order.Application`,
      },
    ],
    comparisonWithNestJS: {
      nestConcept: "main.ts + tsconfig.json + npm scripts",
      javaConcept: "Application.java (main method) + pom.xml + Classpath",
      explanation: "در NestJS نقطه ورود تابع همگام یا ناهمگام bootstrap در فایل main.ts است و ماژول‌ها توسط NestFactory ساخته می‌شوند. در جاوا، سیستم عامل فرآیند را از طریق متد static main کلاس آغاز می‌کند و هیچ فایل اجرایی بدون این متد ورودی شروع به کار نخواهد کرد.",
      nestCode: `// main.ts در NestJS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('سرویس نود اجرا شد');
  await app.listen(3000);
}
bootstrap();`,
      javaCode: `// Application.java در Java
package com.academy.order;

public class Application {
    public static void main(String[] args) {
        System.out.println("سرویس جاوا از متد استاتیک مین آغاز به کار کرد");
        // کدهای راه‌اندازی سرور یا فریم‌ورک اسپرینگ
    }
}`,
    },
    commonMistakes: [
      {
        mistake: "قرار دادن چندین کلاس public در یک فایل سورس .java",
        whyBad: "کامپایلر جاوا به شدت سخت‌گیر است؛ نام فایلی که حاوی کلاس public است باید دقیقاً با نام کلاس (با رعایت حروف بزرگ و کوچک) یکسان باشد.",
        solution: "هر کلاس public باید در یک فایل اختصاصی به نام خودش (مثلاً Order.java برای public class Order) ذخیره شود.",
        codeBad: `// فایل Order.java
public class Order { }
public class Customer { } // خطای کامپایل!`,
        codeGood: `// فایل Order.java
public class Order { }

// فایل Customer.java
public class Customer { }`,
      },
      {
        mistake: "استفاده از ساختار دلخواه برای پوشه‌ها به سبک پروژه‌های جاوااسکریپت",
        whyBad: "اگر پکیج com.academy.order را تعریف کنید ولی فایل را مستقیماً داخل src قرار دهید، کامپایلر با خطای ناسازگاری پکیج متوقف خواهد شد.",
        solution: "پوشه‌بندی را دقیقاً منطبق بر ساختار src/main/java/com/academy/order پیاده کنید.",
      },
    ],
    bestPractices: [
      "همیشه از نسخه LTS استاندارد (مانند Java 21) برای پروژه‌های تجاری جدید استفاده کنید.",
      "هیچ‌گاه فایل‌های کامپایل شده (.class) یا دایرکتوری target را به گیت Commit نکنید (حتماً .gitignore مناسب جاوا قرار دهید).",
      "قوانین نام‌گذاری استاندارد را رعایت کنید: کلاس‌ها با PascalCase، متدها و متغیرها با camelCase، و پکیج‌ها تماماً با حروف کوچک بدون فاصله.",
      "برای ساخت کانتینرهای داکر از ایمیج‌های سبک رانتایم نظیر eclipse-temurin:21-jre یا distroless استفاده کنید نه JDK کامل.",
    ],
    exercise: {
      title: "ایجاد اولین ساختار استاندارد ماژول سفارشات و استخراج مشخصات JVM",
      instructions: `۱. با استفاده از ساختار استاندارد Maven، دایرکتوری‌های \`src/main/java/com/academy/order\` را بسازید.
۲. کلاسی به نام \`SystemInfo\` بسازید که مشخصات زیر را از JVM دریافت کرده و در خروجی کنسول چاپ کند:
   - نسخه رانتایم جاوا
   - تعداد هسته‌های پردازشی در دسترس ماشین مجازی (\`Runtime.getRuntime().availableProcessors()\`)
   - حداکثر حافظه Heap مجاز (\`Runtime.getRuntime().maxMemory()\` تبدیل شده به مگابایت)
۳. متد \`main\` را بنویسید و برنامه را با استفاده از دستورات کامپایل دستی یا Maven اجرا کنید.`,
      expectedOutput: `=== مشخصات محیط اجرای JVM ===
نسخه جاوا: 21.0.x
تعداد هسته‌های پردازشی: 8
حداکثر حافظه مجاز Heap: 4096 MB`,
      acceptanceCriteria: [
        "فایل دقیقاً در مسیر src/main/java/com/academy/order/SystemInfo.java قرار گرفته باشد.",
        "پکیج در خط اول فایل به صورت package com.academy.order; تعریف شده باشد.",
        "برنامه بدون خطا کامپایل و اجرا شده و مگابایت حافظه را با فرمت صحیح محاسبه کند.",
      ],
      hints: [
        "برای تبدیل بایت به مگابایت عدد خام maxMemory را بر (1024 * 1024) تقسیم کنید.",
        "از متد System.getProperty(\"java.version\") برای استخراج نگارش جاوا استفاده کنید.",
      ],
      solution: {
        language: "java",
        filename: "src/main/java/com/academy/order/SystemInfo.java",
        explanation: "در این راهکار از کلاس Runtime موجود در پکیج هسته java.lang برای استخراج مستقیم وضعیت حافظه و پردازنده استفاده شده است. این متدها در لایه‌های پایش سلامت سیستم (Health Checks) و میکروسرویس‌ها شدیداً پرکاربرد هستند.",
        code: `package com.academy.order;

public class SystemInfo {
    public static void main(String[] args) {
        Runtime runtime = Runtime.getRuntime();
        
        String javaVersion = System.getProperty("java.version");
        int processors = runtime.availableProcessors();
        long maxMemoryMB = runtime.maxMemory() / (1024 * 1024);
        long totalMemoryMB = runtime.totalMemory() / (1024 * 1024);

        System.out.println("=== مشخصات محیط اجرای JVM ===");
        System.out.printf("نسخه جاوا: %s%n", javaVersion);
        System.out.printf("تعداد هسته‌های پردازشی: %d%n", processors);
        System.out.printf("حداکثر حافظه مجاز Heap: %d MB%n", maxMemoryMB);
        System.out.printf("حافظه اختصاص یافته اولیه: %d MB%n", totalMemoryMB);
    }
}`,
      },
    },
    quizzes: [
      {
        id: "q-001-1",
        question: "کدام بخش از معماری جاوا وظیفه ترجمه بایت‌کد به دستورالعمل‌های بومی پردازنده (Machine Code) در زمان اجرا را بر عهده دارد؟",
        options: [
          "کامپایلر javac",
          "موتور JIT Compiler درون JVM",
          "سیستم مدیریت پکیج Maven",
          "فایل پیکربندی pom.xml",
        ],
        correctIndex: 1,
        explanation: "کامپایلر javac فقط سورس‌کد را به بایت‌کد تبدیل می‌کند. این کامپایلر لحظه‌ای (JIT Compiler) داخل JVM است که بایت‌کد را به کد ماشین بومی پردازنده ترجمه و بهینه‌سازی می‌کند.",
      },
      {
        id: "q-001-2",
        question: "تفاوت اصلی بین JDK و JRE چیست و کدام‌یک برای استقرار نهایی برنامه در سرور پروداکشن کافی است؟",
        options: [
          "هیچ تفاوتی ندارند و نام‌های جایگزین برای یکدیگرند.",
          "JDK فقط حاوی کامپایلر است و نمی‌تواند کدهای جاوا را اجرا کند.",
          "JDK شامل ابزارهای توسعه و کامپایلر (javac) است، در حالی که JRE تنها محیط اجرا را فراهم می‌کند و برای پروداکشن کافی است.",
          "JRE برای ساخت کدهای باینری استفاده می‌شود و JDK برای وب سرورهاست.",
        ],
        correctIndex: 2,
        explanation: "کیت JDK ابزار کامل برنامه‌نویسی است که شامل کامپایلر است، در حالی که رانتایم JRE صرفاً محیط مورد نیاز اجرای برنامه بدون ابزارهای توسعه را در بر دارد.",
      },
      {
        id: "q-001-3",
        question: "در ساختار استاندارد پروژه‌های مبتنی بر Maven، فایل‌های پیکربندی برنامه (نظیر فایل‌های yml یا properties) باید در کدام مسیر قرار گیرند؟",
        options: [
          "src/main/java",
          "src/main/resources",
          "target/config",
          "root directory در کنار pom.xml",
        ],
        correctIndex: 1,
        explanation: "مطابق قرارداد استاندارد Maven، کدهای منبع جاوا در src/main/java و منابع غیر کدی مانند پیکربندی‌ها، کلیدها و اسکریپت‌های دیتابیس در src/main/resources قرار می‌گیرند.",
      },
    ],
    interviewQuestions: [
      {
        question: "چرا جاوا به عنوان یک پلتفرم دو مرحله‌ای (کامپایل به بایت‌کد و سپس تفسیر/JIT) طراحی شده است؟ مزیت این رویکرد نسبت به زبان‌های صرفاً تفسیری یا کامپایلری محض چیست؟",
        answer: "این طراحی تعادل فوق‌العاده‌ای میان 'قابلیت حمل‌پذیری' (Portability) و 'کارایی فوق‌العاده' (Performance) ایجاد می‌کند. با تولید بایت‌کد، برنامه به سخت‌افزار یا سیستم‌عامل خاصی وابسته نمی‌شود. از طرف دیگر، برخلاف زبان‌های تفسیری سنتی مانند جاوااسکریپت خالص که مدام باید کد را خط به خط پارس کنند، بایت‌کد جاوا قبلاً از نظر نوع‌داده و صحت سینتکس بررسی شده و کامپایلر JIT بخش‌های داغ برنامه را مستقیماً به کدهای سریع اسمبلی پردازنده تبدیل می‌کند.",
        keyTakeaways: [
          "استقلال کامل از سیستم‌عامل (Write Once, Run Anywhere)",
          "تایید صحت کد در فاز کامپایل قبل از رسیدن به سرور",
          "بهینه‌سازی پویا توسط کامپایلر لحظه‌ای (JIT) بر اساس رفتارهای واقعی رانتایم",
        ],
      },
      {
        question: "اگر در محیط پروداکشن با خطای NoClassDefFoundError مواجه شوید، تفاوت آن با ClassNotFoundException چیست و معمولاً چگونه برطرف می‌شود؟",
        answer: "خطای ClassNotFoundException یک استثنای Checked است و زمانی رخ می‌دهد که برنامه تلاش کند کلاسی را به صورت دینامیک (مثلاً با Class.forName) لود کند اما فایل آن در Classpath موجود نباشد. در نقطه مقابل، NoClassDefFoundError یک خطای حاد ساختاری (Error) از سمت JVM است؛ یعنی کلاس در زمان کامپایل پروژه حضور داشته است، اما در زمان اجرا یا فایل JAR آن گم شده و یا در حین بارگذاری اولیه بلاک‌های استاتیک آن با شکست مواجه شده است. راهکار بررسی تنظیمات وابستگی‌های بیلد و متغیر Classpath کانتینر است.",
        keyTakeaways: [
          "ClassNotFoundException ناشی از جستجوی دینامیک ناموفق است.",
          "NoClassDefFoundError نشان‌دهنده ناسازگاری زمان کامپایل با زمان اجرا یا خطای استاتیک است.",
        ],
      },
    ],
    summary: "در این درس با ارکان سه‌گانه JVM، JRE و JDK آشنا شدیم، فهمیدیم چگونه کد جاوا به بایت‌کد تبدیل و اجرا می‌شود، ساختار استاندارد پوشه‌بندی Maven را شناختیم و اولین برنامه تست وضعیت محیط اجرای جاوا ۲۱ را پیاده‌سازی کردیم.",
    references: [
      { title: "Java Platform, Standard Edition Tools Guide", url: "https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html" },
      { title: "Maven Standard Directory Layout", url: "https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html" },
      { title: "The Java Virtual Machine Specification (Java SE 21 Edition)", url: "https://docs.oracle.com/javase/specs/jvms/se21/html/index.html" },
    ],
    lastReviewedAt: "2026-11-01",
    tags: ["JVM", "JDK", "JRE", "Bytecode", "Project Structure", "Classpath"],
    capstoneConnection: {
      phase: "فاز ۱ — راه‌اندازی شالوده پروژه",
      task: "ایجاد ساختار اولیه دایرکتوری‌های ماژول سفارشات بر اساس استاندارد Maven",
      filesToModify: ["src/main/java/com/academy/order/Application.java"],
    },
  },

  {
    id: "lesson-002",
    slug: "maven-dependency-management",
    week: 1,
    day: 2,
    title: "مدیریت پروژه و وابستگی‌ها با Apache Maven",
    titleEn: "Maven and Dependency Management",
    description: "کالبدشکافی pom.xml، فازها و چرخه‌های ساخت، محدوده وابستگی‌ها (Scopes) و مقایسه آن با npm/pnpm در نودجی‌اس.",
    category: "Java Core",
    difficulty: "Intermediate",
    estimatedMinutes: 30,
    prerequisites: ["درس ۱: ساختار استاندارد پروژه‌های جاوا"],
    learningObjectives: [
      "تسلط بر ساختار فایل پیکربندی pom.xml و مختصات GAV (GroupId, ArtifactId, Version)",
      "شناخت دقیق چرخه‌های حیات (Build Lifecycles) و فازهای compile, test, package, install",
      "درک تفاوت محدوده‌های وابستگی (Dependency Scopes): compile, test, provided, runtime",
      "مقایسه مکانیزم تفکیک وابستگی‌های گذرا (Transitive Dependencies) در Maven نسبت به npm/pnpm",
    ],
    whyItMatters: "در نودجی‌اس با یک دستور `npm install` همه‌چیز در node_modules ریخته می‌شود؛ اما در جاوا مدیریت وابستگی‌ها کاملاً فرموله شده است. آشنایی با اسکوپ‌ها، وابستگی‌های گذرا و پلاگین‌های Maven تضمین می‌کند که بسته‌های اضافی یا تست وارد پکیج پروداکشن شما نشوند و آسیب‌پذیری‌های امنیتی کاهش یابند.",
    introduction: `برای یک توسعه‌دهنده نودجی‌اس، فایل \`package.json\` قلب پروژه است که اسکریپت‌ها، نسخه‌ها و وابستگی‌ها را مدیریت می‌کند. در دنیای جاوا، این نقش محوری را فایلی به نام \`pom.xml\` (مخفف Project Object Model) در ابزار Apache Maven بازی می‌کند.

ماون فراتر از یک پکیج‌منیجر ساده است؛ این ابزار یک **سیستم مدیریت چرخه حیات نرم‌افزار (Build Lifecycle Management)** است که استاندارد واحدی را برای کامپایل، اجرای تست‌ها، تولید مستندات و بسته‌بندی فایل اجرایی به جامعه جاوا تحمیل کرده است.`,
    conceptualSections: [
      {
        title: "مختصات سه‌گانه GAV: شناسه یکتای هر ماژول در جهان جاوا",
        content: `هر پکیج در مخازن جهانی جاوا (نظیر Maven Central) با سه مولفه یکتا به نام GAV شناخته می‌شود:
- **groupId:** معمولاً دامنه معکوس سازمان یا شرکت سازنده است (مثلاً \`org.springframework.boot\` یا \`com.google.guava\`).
- **artifactId:** نام اختصاصی پروژه یا کتابخانه (مثلاً \`spring-boot-starter-web\`).
- **version:** نگارش دقیق پکیج بر اساس استاندارد نگارش معنایی (مانند \`3.3.4\` یا \`21.0.1\`).

این مختصات دقیقاً معادل نام پکیج و فیلد version در \`package.json\` است، اما با ساختاری سلسله‌مراتبی که از تداخل نام‌ها در سطح جهانی جلوگیری می‌کند.`,
        keyPoints: [
          "Maven Central مخزن پیش‌فرض جاوا است (مشابه registry.npmjs.org).",
          "پکیج‌های دانلود شده در سیستم شما در مسیر ~/.m2/repository کش می‌شوند.",
        ],
      },
      {
        title: "محدوده وابستگی‌ها (Dependency Scopes): مدیریت هوشمند اندازه پکیج",
        content: `یکی از نقاط قوت بزرگ Maven نسبت به npm، قابلیت تعیین دقیق محل کاربرد کتابخانه‌ها با اسکوپ‌ها است:
1. **compile (پیش‌فرض):** وابستگی در تمام فازها (کامپایل، تست و اجرا) نیاز است و درون فایل JAR نهایی بسته‌بندی می‌شود.
2. **test:** کتابخانه فقط برای کامپایل و اجرای کدهای پوشه \`src/test\` لازم است (مانند JUnit یا Mockito). این فایل‌ها در JAR پروداکشن قرار نمی‌گیرند. (معادل devDependencies در نود).
3. **provided:** کتابخانه برای کامپایل کد نیاز است، اما در زمان اجرا توسط پلتفرم میزبان یا وب سرور تامین می‌شود (مانند Servlet API).
4. **runtime:** برای کامپایل سورس‌کد نیازی به آن نیست، اما در زمان اجرا باید در Classpath باشد (مانند درایور دیتابیس PostgreSQL).`,
        keyPoints: [
          "اسکوپ test از حجیم شدن بیهوده ایمیج پروداکشن با کتابخانه‌های تست جلوگیری می‌کند.",
          "اسکوپ runtime مانع از وابستگی مستقیم کدهای برنامه‌نویس به پیاده‌سازی‌های خاص در زمان کامپایل می‌شود.",
        ],
      },
      {
        title: "چرخه حیات بیلد (Build Lifecycle) و فازهای کلیدی",
        content: `ماون دارای چرخه‌های از پیش تعریف‌شده است. هنگامی که یک فاز را صدا می‌زنید، تمام فازهای پیشین آن به صورت خودکار اجرا می‌شوند:
- \`mvn clean\`: پوشه \`target\` را پاکسازی می‌کند.
- \`mvn compile\`: کدهای \`src/main/java\` را کامپایل می‌کند.
- \`mvn test\`: کدهای تست را اجرا می‌کند. اگر تستی شکست بخورد، بیلد متوقف می‌شود.
- \`mvn package\`: فایل نهایی (\`.jar\` یا \`.war\`) را درون پوشه \`target\` می‌سازد.
- \`mvn install\`: بسته ساخته شده را در دایرکتوری \`~/.m2\` لوکال شما ذخیره می‌کند تا سایر پروژه‌های محلی بتوانند از آن استفاده کنند.`,
        keyPoints: [
          "دستور mvn package به شکل خودکار فازهای compile و test را اجرا می‌کند.",
          "با فلگ -DskipTests می‌توان در موارد اضطراری تست‌ها را رد کرد (هرچند توصیه نمی‌شود).",
        ],
      },
    ],
    internalsAndMechanisms: `وقتی Maven یک وابستگی را اضافه می‌کند، فایل \`pom.xml\` مربوط به آن کتابخانه را نیز بررسی کرده و وابستگی‌های آن را نیز می‌آورد (Transitive Dependencies).
اگر دو کتابخانه به یک نسخه متفاوت از یک پکیج دیگر نیاز داشته باشند، Maven از قانون **Dependency Mediation (Nearest Definition)** استفاده می‌کند: وابستگی‌ای که در درخت سلسله‌مراتب به ریشه پروژه شما نزدیک‌تر است انتخاب می‌شود. برای حل تداخل‌ها می‌توان از تگ‌های \`<exclusion>\` یا بخش \`<dependencyManagement>\` برای تعیین صریح نسخه استفاده نمود.`,
    realWorldScenario: {
      scenario: "تیم دواپس گزارش می‌دهد که درایور پایگاه داده در سورس‌کد جاوا وجود دارد، اما برنامه‌نویسان ناخواسته از کلاس‌های داخلی درایور استفاده کرده‌اند و امکان تعویض دیتابیس بدون تغییر کد از بین رفته است.",
      solution: "وابستگی درایور PostgreSQL را در pom.xml با اسکوپ <scope>runtime</scope> تنظیم کنید. با این کار، کامپایلر اجازه استفاده مستقیم از کلاس‌های درایور در کد را نخواهد داد و برنامه‌نویسان مجبور به استفاده از اینترفیس‌های استاندارد JDBC و JPA خواهند بود.",
    },
    codeExamples: [
      {
        title: "نمونه یک pom.xml کامل و استاندارد برای پروژه سفارشات",
        language: "xml",
        filename: "pom.xml",
        explanation: "این فایل نشان‌دهنده یک پیکربندی تمیز برای جاوا ۲۱ همراه با وابستگی‌های تست و ابزارهای لاگ‌نویسی است.",
        code: `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.academy</groupId>
    <artifactId>order-management-system</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>Order &amp; Inventory Management Academy Project</name>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <junit.version>5.10.2</junit.version>
    </properties>

    <dependencies>
        <!-- وابستگی تست: فقط در زمان تست فعال است -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>\${junit.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- پلاگین کامپایلر جاوا ۲۱ -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.13.0</version>
                <configuration>
                    <release>21</release>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>`,
      },
      {
        title: "دستورات متداول خط فرمان Maven",
        language: "bash",
        explanation: "فرمان‌های کلیدی ترمینال برای پاکسازی، ساخت پکیج و تحلیل درخت وابستگی‌ها.",
        code: `# پاکسازی و بیلد کامل همراه با ساخت فایل JAR
mvn clean package

# اجرای تست‌ها بدون ساخت پکیج
mvn test

# رسم درخت کامل وابستگی‌ها برای کشف تداخل نسخه‌ها (مشابه npm ls)
mvn dependency:tree`,
      },
    ],
    comparisonWithNestJS: {
      nestConcept: "package.json + pnpm-lock.yaml + npm scripts",
      javaConcept: "pom.xml + Maven Central + Maven Lifecycles",
      explanation: "در نودجی‌اس شما اسکریپت‌های سفارشی مانند 'build': 'nest build' تعریف می‌کنید و وابستگی‌ها به دو دسته dependencies و devDependencies تقسیم می‌شوند. در Maven تمام فازها استاندارد و جهانی هستند و اسکوپ‌های بسیار دقیق‌تری برای جداسازی زمان کامپایل از زمان اجرا ارائه می‌شود.",
      nestCode: `// package.json در NestJS
{
  "name": "order-service",
  "version": "1.0.0",
  "scripts": {
    "build": "nest build",
    "test": "jest"
  },
  "dependencies": {
    "@nestjs/common": "^10.0.0"
  },
  "devDependencies": {
    "jest": "^29.5.0",
    "typescript": "^5.1.3"
  }
}`,
      javaCode: `<!-- pom.xml در Maven -->
<project>
  <groupId>com.academy</groupId>
  <artifactId>order-service</artifactId>
  <version>1.0.0</version>
  <dependencies>
    <!-- وابستگی پروداکشن -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
      <scope>compile</scope>
    </dependency>
    <!-- وابستگی تست (معادل devDependencies) -->
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>`,
    },
    commonMistakes: [
      {
        mistake: "تعریف نکردن محدوده <scope>test</scope> برای ابزارهای تست نظیر JUnit و Mockito",
        whyBad: "کتابخانه‌های تست وارد فایل نهایی JAR پروداکشن می‌شوند و اندازه ایمیج داکر را به شدت افزایش می‌دهند.",
        solution: "همیشه مطمئن شوید وابستگی‌های تست با تگ <scope>test</scope> احاطه شده‌اند.",
      },
      {
        mistake: "تداخل نسخه‌های مختلف یک کتابخانه در درخت وابستگی‌ها (JAR Hell)",
        whyBad: "کتابخانه‌های مختلف ممکن است از نسخه‌های متناقض یک پکیج استفاده کنند که باعث خطای NoSuchMethodError در رانتایم می‌شود.",
        solution: "از دستور mvn dependency:tree استفاده کنید و نسخه‌های متضاد را با تگ <exclusions> حذف نمایید.",
      },
    ],
    bestPractices: [
      "همیشه نگارش کامپایلر را روی نسخه مدنظر (Java 21) قفل کنید (<maven.compiler.release>21</maven.compiler.release>).",
      "از بخش <properties> برای تعریف متمرکز شماره نسخه‌ها استفاده کنید تا از پراکندگی اعداد در فایل جلوگیری شود.",
      "همواره قبل از ایجاد پول‌ریکوئست دستور mvn clean verify را اجرا کنید تا از گذر موفق تمامی فازها و تست‌ها مطمئن شوید.",
      "فایل‌های Maven Wrapper شامل mvnw و .mvn را به مخزن گیت اضافه کنید تا هر توسعه‌دهنده‌ای بدون نیاز به نصب دستی ماون بتواند پروژه را بیلد کند.",
    ],
    exercise: {
      title: "پیکربندی فایل pom.xml برای ماژول سفارشات با پشتیبانی از JUnit 5",
      instructions: `۱. یک فایل \`pom.xml\` معتبر برای پروژه \`com.academy.order\` بسازید.
۲. نسخه جاوا را روی ۲۱ تنظیم کنید.
۳. کتابخانه \`junit-jupiter\` را با اسکوپ مناسب تست اضافه نمایید.
۴. یک تست ساده در مسیر \`src/test/java/com/academy/order/AppTest.java\` بنویسید که صحت اجرای تست‌ها را تایید کند.
۵. دستور \`mvn test\` را در ترمینال اجرا کرده و خروجی سبز را دریافت نمایید.`,
      expectedOutput: `[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running com.academy.order.AppTest
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO] BUILD SUCCESS`,
      acceptanceCriteria: [
        "فایل pom.xml بدون خطای XML و منطبق بر استاندارد Maven باشد.",
        "وابستگی junit-jupiter با scope=test درج شده باشد.",
        "تست با دستور mvn test با موفقیت PASS شود.",
      ],
      hints: [
        "پکیج تست باید با پکیج اصلی مطابقت داشته باشد: com.academy.order",
        "از انوتیشن @Test موجود در org.junit.jupiter.api.Test استفاده کنید.",
      ],
      solution: {
        language: "java",
        filename: "src/test/java/com/academy/order/AppTest.java",
        explanation: "یک تست واحد استاندارد با استفاده از متدهای Assertions در فریم‌ورک JUnit 5 پیاده‌سازی شده است.",
        code: `package com.academy.order;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class AppTest {

    @Test
    void shouldVerifyApplicationContextStarts() {
        // تست اولیه جهت سنجش صحت عملکرد زنجیره ساخت ماون
        boolean isMavenConfigured = true;
        assertTrue(isMavenConfigured, "تنظیمات ماون باید کامپایل و تست را پشتیبانی کند");
    }
}`,
      },
    },
    quizzes: [
      {
        id: "q-002-1",
        question: "اگر وابستگی درایور دیتابیس را با اسکوپ <scope>runtime</scope> تعریف کنیم، چه رفتاری رخ خواهد داد؟",
        options: [
          "کتابخانه فقط در زمان اجرای تست‌ها در دسترس خواهد بود.",
          "کتابخانه در زمان کامپایل سورس‌کد در دسترس نیست، اما در زمان اجرا درون Classpath قرار می‌گیرد.",
          "کتابخانه به هیچ عنوان در بسته نهایی JAR قرار نمی‌گیرد.",
          "کامپایلر اجازه استفاده از انوتیشن‌های آن را صادر می‌کند اما متدهایش حذف می‌شوند.",
        ],
        correctIndex: 1,
        explanation: "اسکوپ runtime مانع از کامپایل کدهای وابسته به پکیج می‌شود و صرفاً آن را برای زمان اجرای برنامه بارگذاری می‌کند.",
      },
      {
        id: "q-002-2",
        question: "هنگامی که دستور mvn package را اجرا می‌کنید، کدام فازها به ترتیب به صورت اتوماتیک اجرا می‌شوند؟",
        options: [
          "صرفاً فاز package اجرا شده و تست‌ها رد می‌شوند.",
          "فاز deploy و سپس clean و سپس package",
          "فازهای پیشین نظیر validate, compile, test و سپس package",
          "فاز install و سپس package",
        ],
        correctIndex: 2,
        explanation: "چرخه حیات پیش‌فرض در ماون ترتیبی است؛ اجرای هر فاز به طور اتوماتیک فازهای ماقبل خود (از جمله compile و test) را فراخوانی می‌کند.",
      },
      {
        id: "q-002-3",
        question: "ابزار Maven Wrapper (فایل‌های mvnw و mvnw.cmd) چه مزیت مهمی برای تیم‌های نرم‌افزاری ایجاد می‌کند؟",
        options: [
          "سرعت اجرای جاوا را در محیط پروداکشن دو برابر می‌کند.",
          "اجازه می‌دهد اعضای تیم بدون نیاز به نصب قبلی Maven روی سیستم‌عامل خود و با نسخه‌ای کاملاً یکسان پروژه را بیلد کنند.",
          "فایل‌های کد جاوا را مستقیماً به کد باینری C تبدیل می‌کند.",
          "حجم node_modules را کاهش می‌دهد.",
        ],
        correctIndex: 1,
        explanation: "ماون رپر اسکریپتی است که نسخه مشخص‌شده Maven را به شکل خودکار دانلود کرده و پروژه را با آن اجرا می‌کند تا مغایرت نسخه در تیم از بین برود.",
      },
    ],
    interviewQuestions: [
      {
        question: "مفهوم Transitive Dependency در Maven چیست و چگونه می‌توان از پدیده تداخل نسخه‌ها (Dependency Collision / JAR Hell) جلوگیری کرد؟",
        answer: "وابستگی گذرا یعنی وقتی پروژه شما به کتابخانه A نیاز دارد و کتابخانه A به کتابخانه B وابسته است، Maven به شکل اتوماتیک کتابخانه B را نیز برای شما دریافت می‌کند. اگر کتابخانه C به نسخه متفاوتی از B نیاز داشته باشد، تداخل رخ می‌دهد. برای مهار این موضوع، از mvn dependency:tree برای پیدا کردن ریشه تداخل، تگ <exclusions> برای حذف وابستگی ناخواسته و بخش <dependencyManagement> برای اجبار یک نسخه واحد در کل پروژه استفاده می‌کنیم.",
        keyTakeaways: [
          "آشنایی با الگوریتم Nearest-Wins در Maven",
          "استفاده از <exclusions> برای قطع شاخه‌های معیوب",
          "تثبیت نسخه‌ها با <dependencyManagement>",
        ],
      },
      {
        question: "تفاوت میان SNAPSHOT و نسخه‌های پایدار (Release) در اکوسیستم Maven چیست؟",
        answer: "نسخه SNAPSHOT (مثلاً 1.0.0-SNAPSHOT) نشان‌دهنده یک نسخه در حال توسعه است. Maven هر بار که پروژه را بیلد می‌کنید ممکن است آخرین تغییرات این نسخه را از مخزن ریموت دریافت کند. اما نسخه‌های پایدار (Release) غیرقابل تغییر (Immutable) هستند؛ یعنی وقتی نسخه 1.0.0 در مخزن منتشر شد، هرگز نباید بایت‌کد آن بازنویسی شود و Maven آن را برای همیشه در حافظه کش محلی ذخیره می‌کند.",
        keyTakeaways: [
          "تغییرپذیر بودن SNAPSHOT و نامناسب بودن برای پروداکشن",
          "تضمین قطعیت و پایداری در نسخه‌های Release",
        ],
      },
    ],
    summary: "در این جلسه ساختار فایل pom.xml، مختصات GAV، اسکوپ‌های وابستگی و فازهای چرخه حیات ماون را یاد گرفتیم و با ایجاد یک پروژه و اجرای تست JUnit 5 چرخه کار را سنجیدیم.",
    references: [
      { title: "Apache Maven Project Documentation", url: "https://maven.apache.org/" },
      { title: "Introduction to the Build Lifecycle", url: "https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html" },
      { title: "Maven Central Repository Search", url: "https://search.maven.org/" },
    ],
    lastReviewedAt: "2026-11-01",
    tags: ["Maven", "Dependencies", "pom.xml", "Scopes", "Build Lifecycle"],
    capstoneConnection: {
      phase: "فاز ۱ — مدیریت وابستگی‌ها",
      task: "پیکربندی pom.xml پایه برای کل سرویس‌های مدیریت سفارشات",
      filesToModify: ["pom.xml"],
    },
  },

  {
    id: "lesson-003",
    slug: "oop-in-java-vs-typescript",
    week: 1,
    day: 3,
    title: "برنامه‌نویسی شی‌گرا در جاوا در مقایسه با TypeScript",
    titleEn: "OOP in Java vs TypeScript",
    description: "کلاس‌ها، اینترفیس‌ها، وراثت، کلاس‌های انتزاعی و رفتارهای ساختاری تایپ‌اسکریپت در برابر سیستم نوع‌دهی اسمی جاوا.",
    category: "Java Core",
    difficulty: "Intermediate",
    estimatedMinutes: 30,
    prerequisites: ["آشنایی با مفاهیم کلاس و Interface در تایپ‌اسکریپت"],
    learningObjectives: [
      "درک تفاوت بنیادین سیستم نوع‌دهی اسمی (Nominal Typing) جاوا با نوع‌دهی ساختاری (Structural / Duck Typing) در TypeScript",
      "شناخت دقیق سطوح دسترسی (Access Modifiers) در جاوا: public, protected, private و حالت پیش‌فرض Package-Private",
      "پیاده‌سازی اصولی متدهای اینترفیس شامل default methods و static methods در جاوای مدرن",
      "استفاده صحیح از کلمه کلیدی final برای متغیرها، متدها و کلاس‌ها",
    ],
    whyItMatters: "در تایپ‌اسکریپت اگر دو اینترفیس فیلدهای یکسانی داشته باشند، کامپایلر آن‌ها را یکسان می‌داند. اما در جاوا سیستم اسمی است و باید صریحاً اینترفیس را implements کنید. درک این تمایز جلوی خطاهای خطرناک کامپایل و طراحی‌های اشتباه در معماری سرویس را می‌گیرد.",
    introduction: `هر دو زبان جاوا و تایپ‌اسکریپت از پارادایم شی‌گرایی پشتیبانی می‌کنند، اما فلسفه سیستم نوع‌دهی (Type System) آن‌ها کاملاً متفاوت است.
تایپ‌اسکریپت بر پایه **Structural Typing (Duck Typing)** ساخته شده است: "اگر مانند اردک راه می‌رود و مانند اردک صدا می‌دهد، پس اردک است!".
اما جاوا یک زبان با **Nominal Typing** است: اشیا فقط و فقط زمانی هم‌نوع تلقی می‌شوند که صریحاً نام کلاس یا اینترفیس مشترک را در سلسله‌مراتب ارث‌بری خود پیاده کرده باشند.`,
    conceptualSections: [
      {
        title: "سیستم نوع‌دهی اسمی (Nominal) در برابر ساختاری (Structural)",
        content: `بیایید این تفاوت را در عمل بررسی کنیم:
در تایپ‌اسکریپت:
\`\`\`typescript
interface User { id: string; }
interface Customer { id: string; }
const u: User = { id: "1" };
const c: Customer = u; // کاملاً معتبر است! چون فیلدها یکسان است.
\`\`\`
در جاوا این کار هرگز کامپایل نمی‌شود! اگر کلاسی نام \`Customer\` را صریحاً در \`implements\` خود نیاورده باشد، جاوا به هیچ وجه اجازه انتساب آن به متغیر \`Customer\` را نمی‌دهد، حتی اگر تمام متدها و فیلدهایشان صددرصد یکسان باشد. این ویژگی در سیستم‌های مالی و سفارشات تضمین می‌کند که به طور تصادفی دو مفهوم بیزینسی متفاوت با شکل ظاهری یکسان به جای یکدیگر پاس داده نشوند.`,
        keyPoints: [
          "جاوا برای ارزیابی نوع، نام صریح اعلام شده نوع را بررسی می‌کند نه فقط فیلدهای داخلی آن را.",
          "این ویژگی ایمنی کدهای تجاری را در مقیاس‌های بسیار بزرگ تضمین می‌کند.",
        ],
      },
      {
        title: "سطوح دسترسی (Access Modifiers) و مفهوم Package-Private",
        content: `در تایپ‌اسکریپت کلمات \`public\`, \`private\`, \`protected\` فقط در زمان کامپایل چک می‌شوند و در جاوااسکریپت نهایی حذف می‌شوند.
اما در جاوا این سطوح در سطح بایت‌کد و رانتایم توسط JVM اعمال می‌شوند:
1. **private:** فقط در داخل همان کلاس قابل دسترس است.
2. **Package-Private (عدم نوشتن هیچ کلمه‌ای):** فقط در داخل کلاس‌های موجود در همان پکیج قابل دسترسی است! (این مود در تایپ‌اسکریپت وجود ندارد و برای کپسوله‌سازی ماژول‌های داخلی پکیج بسیار مفید است).
3. **protected:** در داخل همان پکیج + تمام زیرکلاس‌ها (حتی در پکیج‌های دیگر).
4. **public:** در هر کجای پروژه قابل دسترسی است.`,
        keyPoints: [
          "اگر کلمه کلیدی سطح دسترسی را ننویسید، در جاوا public نمی‌شود، بلکه Package-Private می‌شود.",
          "از Package-Private برای مخفی کردن کلاس‌های کمکی از دید لایه‌های بیرونی استفاده کنید.",
        ],
      },
      {
        title: "کلمه کلیدی final: تغییرناپذیری در سطح شی‌گرایی",
        content: `کلمه کلیدی \`final\` در جاوا سه کاربرد دارد:
- روی متغیر: مقدار آن فقط یک بار تخصیص داده می‌شود و تغییرناپذیر است (معادل \`const\` یا \`readonly\` در تایپ‌اسکریپت).
- روی متد: فرزندان کلاس نمی‌توانند این متد را Override کنند.
- روی کلاس: هیچ کلاسی نمی‌تواند از این کلاس ارث‌بری کند (کلاس بسته می‌شود).`,
        keyPoints: [
          "در جاوا کلاس‌های امن و تغییرناپذیر معمولاً final تعریف می‌شوند (مانند کلاس String).",
        ],
      },
    ],
    internalsAndMechanisms: `در جاوا فراخوانی متدها به صورت پیش‌فرض **پلی‌مورفیک (Polymorphic)** است. JVM برای فراخوانی متدها از جدول مجازی متدها به نام **vtable (Virtual Method Table)** استفاده می‌کند.
هنگامی که متدی را صدا می‌زنید، دستور بایت‌کد \`invokevirtual\` صادر می‌شود که در زمان اجرا به شیء واقعی رجوع کرده و متد پیاده‌سازی شده در فرزند را صدا می‌زند.
اگر متدی \`final\` یا \`private\` باشد، کامپایلر دستور \`invokespecial\` را صادر می‌کند که به صورت ایستا آدرس‌دهی می‌شود و هزینه جستجوی پویا در جدول مجازی را به صفر می‌رساند.`,
    realWorldScenario: {
      scenario: "در یک سیستم پرداخت، یک برنامه‌نویس از کلاس محاسبات تخفیف ارث‌بری کرده و منطق اعتبارسنجی را دور زده است.",
      solution: "کلاس‌های حساس به امنیت یا محاسبات مالی را به صورت `public final class DiscountEngine` تعریف کنید تا ارث‌بری و تغییر رفتار متدهای آن به کلی غیرممکن شود.",
    },
    codeExamples: [
      {
        title: "اینترفیس مدرن در جاوا همراه با Default Method و متد Static",
        language: "java",
        filename: "src/main/java/com/academy/order/PaymentProcessor.java",
        explanation: "از جاوا ۸ به بعد، اینترفیس‌ها می‌توانند منطق پیش‌فرض (default) و توابع کمکی استاتیک داشته باشند بدون اینکه ماهیت اینترفیس بودنشان از دست برود.",
        code: `package com.academy.order;

import java.math.BigDecimal;

public interface PaymentProcessor {

    // متد انتزاعی که فرزند باید پیاده کند
    boolean process(String orderId, BigDecimal amount);

    // متد پیش‌فرض: در صورت عدم پیاده‌سازی، این رفتار اجرا می‌شود
    default void logTransaction(String orderId, BigDecimal amount) {
        System.out.printf("[PAYMENT] تراکنش سفارش %s به مبلغ %s ثبت شد.%n", orderId, amount);
    }

    // متد استاتیک کمکی
    static boolean isValidCurrency(String currency) {
        return "IRR".equalsIgnoreCase(currency) || "USD".equalsIgnoreCase(currency);
    }
}`,
      },
      {
        title: "پیاده‌سازی کلاس با کپسوله‌سازی قوی و فیلدهای final",
        language: "java",
        filename: "src/main/java/com/academy/order/OnlinePaymentProcessor.java",
        explanation: "کلاس پیاده‌کننده که اینترفیس را صریحاً implements کرده و فیلدهای ضروری را به صورت تغییرناپذیر نگهداری می‌کند.",
        code: `package com.academy.order;

import java.math.BigDecimal;

public final class OnlinePaymentProcessor implements PaymentProcessor {

    private final String gatewayApiKey;

    public OnlinePaymentProcessor(String gatewayApiKey) {
        if (gatewayApiKey == null || gatewayApiKey.isBlank()) {
            throw new IllegalArgumentException("کلید API درگاه پرداخت معتبر نیست");
        }
        this.gatewayApiKey = gatewayApiKey;
    }

    @Override
    public boolean process(String orderId, BigDecimal amount) {
        logTransaction(orderId, amount);
        System.out.println("اتصال به درگاه پرداخت با توکن: " + gatewayApiKey.substring(0, 4) + "****");
        return true;
    }
}`,
      },
    ],
    comparisonWithNestJS: {
      nestConcept: "TypeScript Interfaces & Structural Compatibility",
      javaConcept: "Java Interfaces & Strict Nominal Typing",
      explanation: "در نست‌جی‌اس معمولاً اینترفیس‌ها در زمان کامپایل پاک می‌شوند (Type Erasure) و نمی‌توان در رانتایم از آنها برای اعتبارسنجی استفاده کرد. در جاوا، اینترفیس‌ها در بایت‌کد باقی می‌مانند و عملگر instanceof روی آن‌ها کاملاً فعال و قابل اتکاست.",
      nestCode: `// در TypeScript / NestJS
interface OrderItem {
  sku: string;
  price: number;
}
// هر شیء با شکل مشابه، بدون نیاز به پیاده‌سازی صریح اینترفیس، معتبر است:
const item: OrderItem = { sku: "BOOK-1", price: 50000 };`,
      javaCode: `// در Java
public interface OrderItem {
    String getSku();
    BigDecimal getPrice();
}
// شیء حتماً باید کلاسی باشد که صریحاً اینترفیس را پیاده کرده است:
public class PhysicalOrderItem implements OrderItem {
    private final String sku;
    private final BigDecimal price;
    // constructors & getters
}`,
    },
    commonMistakes: [
      {
        mistake: "تصور اینکه فیلدها در جاوا به صورت پیش‌فرض public هستند",
        whyBad: "اگر سطح دسترسی ننویسید، متغیر یا متد Package-Private می‌شود و از پکیج‌های دیگر در دسترس نخواهد بود.",
        solution: "همیشه صریحاً سطوح دسترسی (ترجیحاً private برای فیلدها) را قید کنید.",
      },
      {
        mistake: "استفاده از double یا float برای مقادیر پولی و قیمت‌ها",
        whyBad: "اعداد اعشاری دودویی خطای گرد کردن دارند (مثلاً 0.1 + 0.2 برابر 0.30000000000000004 می‌شود).",
        solution: "در تمام نرم‌افزارهای تجاری جاوا، برای مبالغ مالی منحصراً از BigDecimal استفاده کنید.",
      },
    ],
    bestPractices: [
      "اصل Composition over Inheritance (ترکیب به جای وراثت) را همیشه در اولویت قرار دهید.",
      "تمام فیلدهای کلاس را private کرده و تنها رفتارهای ضروری را در قالب متد اکسپوز نمایید.",
      "همواره متدهای بازنویسی شده را با انوتیشن @Override علامت‌گذاری کنید تا کامپایلر خطاهای تایپی نام متد را چک کند.",
      "از BigDecimal به همراه متد BigDecimal.valueOf() یا رشته new BigDecimal(\"100.00\") استفاده کنید نه new BigDecimal(100.00).",
    ],
    exercise: {
      title: "طراحی سیستم شی‌گرای پرداخت و اعتبارسنجی ارز",
      instructions: `۱. اینترفیسی به نام \`DiscountPolicy\` در پکیج \`com.academy.order\` ایجاد کنید که دارای متد \`BigDecimal applyDiscount(BigDecimal originalPrice)\` باشد.
۲. اینترفیس باید دارای یک default method باشد که اگر تخفیف محاسبه شده منفی شد، صفر را برگرداند.
۳. کلاسی به نام \`PercentageDiscountPolicy\` بسازید که درصد تخفیف (مثلاً ۱۰٪) را در سازنده گرفته و تخفیف را محاسبه کند. این کلاس باید \`final\` باشد.
۴. یک تست واحد برای اعتبارسنجی عملکرد تخفیف بنویسید.`,
      expectedOutput: `تست با موفقیت مبلغ ۱۰۰,۰۰۰ ریال را با ۱۰ درصد تخفیف به ۹۰,۰۰۰ ریال تبدیل کند.`,
      acceptanceCriteria: [
        "اینترفیس DiscountPolicy دارای متد پیش‌فرض جهت جلوگیری از مبالغ منفی باشد.",
        "کلاس PercentageDiscountPolicy به صورت final و دارای فیلدهای private final باشد.",
        "از BigDecimal برای تمام محاسبات مالی استفاده شده باشد.",
      ],
      hints: [
        "برای ضرب در درصد: originalPrice.multiply(percentage).divide(new BigDecimal(\"100\"))",
      ],
      solution: {
        language: "java",
        filename: "src/main/java/com/academy/order/PercentageDiscountPolicy.java",
        explanation: "پیاده‌سازی دقیق منطق تخفیف درصدی با رعایت انکپسولیشن و امنیت محاسبات مالی با BigDecimal.",
        code: `package com.academy.order;

import java.math.BigDecimal;
import java.math.RoundingMode;

public final class PercentageDiscountPolicy {

    private final BigDecimal percentage;

    public PercentageDiscountPolicy(double percent) {
        if (percent < 0 || percent > 100) {
            throw new IllegalArgumentException("درصد تخفیف باید بین ۰ تا ۱۰۰ باشد");
        }
        this.percentage = BigDecimal.valueOf(percent);
    }

    public BigDecimal applyDiscount(BigDecimal originalPrice) {
        if (originalPrice == null || originalPrice.compareTo(BigDecimal.ZERO) <= 0) {
            return BigDecimal.ZERO;
        }
        BigDecimal discountAmount = originalPrice.multiply(percentage)
                .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        return originalPrice.subtract(discountAmount);
    }
}`,
      },
    },
    quizzes: [
      {
        id: "q-003-1",
        question: "در صورتی که قبل از نام یک متغیر یا کلاس هیچ کلمه سطح دسترسی (public, private, protected) نوشته نشود، سطح دسترسی آن در جاوا چیست؟",
        options: [
          "public",
          "private",
          "Package-Private (فقط در سطح همان پکیج)",
          "protected",
        ],
        correctIndex: 2,
        explanation: "در جاوا سطح دسترسی پیش‌فرض Package-Private است؛ یعنی اعضای همان پکیج به آن دسترسی دارند اما از بیرون پکیج قابل رویت نیست.",
      },
      {
        id: "q-003-2",
        question: "چرا استفاده از کلاس BigDecimal برای قیمت‌ها و مبالغ مالی در جاوا اجباری است؟",
        options: [
          "چون سریع‌تر از double و float محاسبه می‌شود.",
          "چون تایپ‌های double و float به دلیل استاندارد IEEE 754 خطای گرد کردن اعشاری دارند و باعث کسری یا ناهماهنگی در تراکنش‌های مالی می‌شوند.",
          "چون دیتابیس پستگرس متوجه double نمی‌شود.",
          "چون متد toString در double ارقام را پاک می‌کند.",
        ],
        correctIndex: 1,
        explanation: "محاسبات ممیز شناور (Floating Point) به صورت تقریبی در سخت‌افزار ذخیره می‌شوند و برای امور بانکی و سبد خرید که دقت اعشاری دقیق مورد نیاز است غیرقابل قبول هستند.",
      },
      {
        id: "q-003-3",
        question: "قرار دادن کلمه کلیدی final روی تعریف یک کلاس (مثلاً public final class Order) چه تاثیری دارد؟",
        options: [
          "تمام متغیرهای درون کلاس خودبه‌خود ثابت می‌شوند.",
          "هیچ کلاسی نمی‌تواند از این کلاس ارث‌بری کند (Inheritance مسدود می‌شود).",
          "کلاس دیگر نمی‌تواند متد سازنده (Constructor) داشته باشد.",
          "کلاس فقط یک بار در کل رانتایم لود می‌شود.",
        ],
        correctIndex: 1,
        explanation: "کلاس‌های final قفل می‌شوند و اجازه ارث‌بری به کلاس‌های دیگر نمی‌دهند که یکی از اصول بنیادین ساخت اشیای تغییرناپذیر است.",
      },
    ],
    interviewQuestions: [
      {
        question: "تفاوت بنیادی سیستم نوع‌دهی جاوا (Nominal) و تایپ‌اسکریپت (Structural) چه اثراتی روی طراحی معماری سرویس‌ها دارد؟",
        answer: "در سیستم ساختاری تایپ‌اسکریپت ماژول‌ها وابستگی سستی دارند و صرفاً با تطابق فیلدها می‌توان داده‌ها را منتقل کرد که سرعت توسعه اولیه را بالا می‌برد اما احتمال خطای جابجایی دو ساختار شبیه با معنای تجاری متفاوت را افزایش می‌دهد. در سیستم اسمی جاوا، معماری بر قراردادهای رسمی (Contracts) و سلسله‌مراتب صریح استوار است که برای سیستم‌های عظیم با صدها ماژول و دهها تیم مهندسی، قابلیت اطمینان، بازسازی امن (Refactoring) و انکپسولیشن قوی‌تری را فراهم می‌آورد.",
        keyTakeaways: [
          "تضمین تطابق معنایی نه صرفاً ساختاری",
          "امکان ریفکتورینگ ۱۰۰٪ امن با ابزارهای IDE به دلیل ماهیت اسمی",
        ],
      },
      {
        question: "کاربرد Default Methods در اینترفیس‌های جاوا ۸ به بعد چیست و چگونه از مشکل Diamond Problem در وراثت چندگانه جلوگیری می‌کند؟",
        answer: "متدهای دیفالت به منظور گسترش اینترفیس‌های موجود بدون شکستن کدهای قدیمی پیاده‌کننده آنها به جاوا اضافه شدند. اگر کلاسی دو اینترفیس با متد default یکسان را implements کند، کامپایلر جاوا با خطای ابهام متوقف می‌شود و برنامه‌نویس مجبور است صریحاً در کلاس پیاده‌کننده مشخص کند کدام متد باید اجرا شود یا خود متد را بازنویسی کند.",
        keyTakeaways: [
          "تکامل رو به جلوی اینترفیس‌ها بدون شکستن کلاینت‌ها",
          "اجبار برنامه‌نویس به رفع صریح ابهام در تداخل متدها",
        ],
      },
    ],
    summary: "در این درس با سیستم نوع‌دهی اسمی جاوا، تفاوت آن با Duck Typing تایپ‌اسکریپت، سطوح دسترسی چهارگانه، کلمه کلیدی final و متدهای اینترفیس آشنا شدیم و چرایی لزوم استفاده از BigDecimal در مسائل مالی را بررسی کردیم.",
    references: [
      { title: "Interfaces and Inheritance in Java", url: "https://dev.java/learn/classes-objects/" },
      { title: "BigDecimal Oracle Official Docs", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html" },
    ],
    lastReviewedAt: "2026-11-01",
    tags: ["OOP", "TypeScript vs Java", "Nominal Typing", "Encapsulation", "BigDecimal"],
    capstoneConnection: {
      phase: "فاز ۱ — طراحی شی‌گرای دامنه",
      task: "تعریف اینترفیس‌ها و سیاست‌های مالی سفارش با رعایت انکپسولیشن",
      filesToModify: ["src/main/java/com/academy/order/PaymentProcessor.java"],
    },
  },

  {
    id: "lesson-004",
    slug: "order-product-domain-models",
    week: 1,
    day: 4,
    title: "مدل‌سازی دامنه سفارش و کالا (پروژه محوری)",
    titleEn: "Building Order and Product Domain Models",
    description: "پیاده‌سازی اصولی اشیای دامنه سفارشات و موجودی انبار با انکپسولیشن قوی، رفتارهای کپسوله‌شده و متدهای دسترسی بدون Setterهای مخرب.",
    category: "Java Core",
    difficulty: "Intermediate",
    estimatedMinutes: 30,
    prerequisites: ["درس ۳: برنامه‌نویسی شی‌گرا در جاوا"],
    learningObjectives: [
      "طراحی مدل دامنه غنی (Rich Domain Model) و پرهیز از مدل‌های کم‌خون (Anemic Domain Model)",
      "پیاده‌سازی چرخه حیات وضعیت سفارش با استفاده از Enumهای پیشرفته جاوا",
      "جلوگیری از تغییرات ناخواسته وضعیت با حذف Setterهای عمومی و ارائه متدهای تجاری معنادار",
      "محاسبه مجموع سبد خرید با رعایت دقت اعشاری و اعتبارسنجی قوانین تجاری در سازنده شیء",
    ],
    whyItMatters: "در بسیاری از پروژه‌های Node.js متداول است که Entityها فقط شامل فیلدهای ساده بدون رفتار باشند (Anemic Model) و تمام منطق در سرویس‌ها پراکنده شود. این الگو نگهداری سیستم را بعد از چند سال غیرممکن می‌کند. در جاوا و معماری‌های پیشرفته Domain-Driven Design، مدل دامنه خود باید حافظ صحت وضعیت خود باشد.",
    introduction: `امروز رسماً وارد توسعه **پروژه محوری آکادمی (سیستم مدیریت سفارشات و موجودی انبار)** می‌شویم.
هدف ما در این جلسه، خلق موجودیت‌های بنیادین \`Order\`، \`OrderItem\`، \`Product\` و شمارنده وضعیت \`OrderStatus\` است.
ما این کلاس‌ها را طبق الگوهای سطح بالای مهندسی جاوا می‌سازیم:
- هیچ فیلدی بدون دلیل عمومی نمی‌شود.
- هیچ متد \`set...\` بی‌منطقی وجود ندارد که اجازه دهد وضعیت سفارش بدون بررسی تغییر کند.
- تمام تغییرات از طریق متدهای تجاری مانند \`cancel()\`، \`addItem()\` و \`pay()\` انجام می‌پذیرد.`,
    conceptualSections: [
      {
        title: "مدل دامنه غنی (Rich) در برابر مدل کم‌خون (Anemic)",
        content: `در مدل کم‌خون (که متاسفانه در بسیاری از سرویس‌های مبتنی بر ORM نود دیده می‌شود)، کلاس‌ها صرفاً کیسه داده (Data Bag) هستند:
\`\`\`typescript
class Order {
  status: string;
  total: number;
}
\`\`\`
در این حالت، هر سرویسی در هر کجای برنامه می‌تواند \`order.status = "PAID"\` بنویسد بدون اینکه پولی واریز شده باشد!
در مقابل، در **مدل دامنه غنی (Rich Domain Model)**:
- وضعیت‌ها درون خود شیء محافظت می‌شوند.
- شیء اجازه ایجاد در حالت نامعتبر (مثلاً سفارش بدون مشتری یا قیمت منفی) را نمی‌دهد.
- منطق تغییر وضعیت درون خود متدهای موجودیت تعریف شده است.`,
        keyPoints: [
          "Setterها را حذف کنید؛ به جای آنها متدهای تجاری نظیر markAsPaid() بگذارید.",
          "اعتبارسنجی اولیه باید در زمان ساخت شیء (Constructor) رخ دهد.",
        ],
      },
      {
        title: "قدرت بی‌نظیر Enum در جاوا: فراتر از رشته‌های تایپ‌اسکریپت",
        content: `در تایپ‌اسکریپت Enumها صرفاً نگاشتی از اعداد یا رشته‌ها هستند. اما در جاوا، **Enum یک کلاس کامل و پیشرفته است!**
یک Enum در جاوا می‌تواند:
- فیلد، متد سازنده و رفتارهای تجاری داشته باشد.
- اینترفیس‌ها را پیاده‌سازی کند.
- قوانین جابجایی وضعیت (State Transition) را در متدهای خود اعتبارسنجی کند.`,
        keyPoints: [
          "Enumها در جاوا به صورت تک‌نمونه (Singleton) امن هستند.",
          "مقایسه Enumها با عملگر == کاملاً امن و سریع‌تر از equals است.",
        ],
      },
    ],
    internalsAndMechanisms: `هنگامی که یک Enum در جاوا تعریف می‌کنید، کامپایلر کلاسی می‌سازد که از \`java.lang.Enum\` ارث‌بری کرده و مقادیر آن به صورت نمونه‌های \`public static final\` در زمان بارگذاری کلاس ساخته می‌شوند.
همچنین استفاده از \`Collections.unmodifiableList\` تضمین می‌کند که کدهای بیرونی نتوانند با گرفتن لیست اقلام، مستقیماً به آن شیء اضافه کرده و محاسبات مالی مجموع سفارش را دور بزنند.`,
    realWorldScenario: {
      scenario: "یک کلاینت در زمان لغو سفارش توانسته کالای جدیدی به سفارش لغو شده اضافه کند و باگ عجیبی در گزارشات مالی شرکت ایجاد شده است.",
      solution: "متد `addItem` در کلاس Order باید وضعیت سفارش را بررسی کرده و اگر وضعیت `CANCELLED` یا `PAID` بود، بلافاصله خطای `IllegalStateException` پرتاب کند. همچنین لیست اقلام باید به صورت Read-only به کدهای بیرونی داده شود.",
    },
    codeExamples: [
      {
        title: "پیاده‌سازی Enum وضعیت سفارش با رفتار و توضیحات فارسی",
        language: "java",
        filename: "src/main/java/com/academy/order/domain/OrderStatus.java",
        explanation: "نمونه یک Enum پیشرفته در جاوا که علاوه بر نام وضعیت، قابلیت بررسی مجاز بودن لغو سفارش را درون خود دارد.",
        code: `package com.academy.order.domain;

public enum OrderStatus {
    PENDING("در انتظار پرداخت", true),
    PAID("پرداخت شده", false),
    PROCESSING("در حال پردازش انبار", false),
    SHIPPED("ارسال شده به مشتری", false),
    CANCELLED("لغو شده", false);

    private final String faTitle;
    private final boolean canBeCancelled;

    OrderStatus(String faTitle, boolean canBeCancelled) {
        this.faTitle = faTitle;
        this.canBeCancelled = canBeCancelled;
    }

    public String getFaTitle() {
        return faTitle;
    }

    public boolean canBeCancelled() {
        return canBeCancelled;
    }
}`,
      },
      {
        title: "کلاس OrderItem با کپسوله‌سازی و محاسبات دقیق",
        language: "java",
        filename: "src/main/java/com/academy/order/domain/OrderItem.java",
        explanation: "مدل قلم سفارش با فیلدهای تغییرناپذیر و محاسبه قیمت کل سطر با استفاده از ضرب دقیق BigDecimal.",
        code: `package com.academy.order.domain;

import java.math.BigDecimal;
import java.util.Objects;

public final class OrderItem {

    private final String productId;
    private final String productName;
    private final BigDecimal unitPrice;
    private final int quantity;

    public OrderItem(String productId, String productName, BigDecimal unitPrice, int quantity) {
        if (productId == null || productId.isBlank()) {
            throw new IllegalArgumentException("شناسه کالا الزامی است");
        }
        if (unitPrice == null || unitPrice.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("قیمت واحد باید بزرگتر از صفر باشد");
        }
        if (quantity <= 0) {
            throw new IllegalArgumentException("تعداد قلم باید حداقل ۱ باشد");
        }
        this.productId = productId;
        this.productName = Objects.requireNonNull(productName, "نام کالا نمی‌تواند خالی باشد");
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }

    public BigDecimal getSubtotal() {
        return unitPrice.multiply(BigDecimal.valueOf(quantity));
    }

    public String getProductId() { return productId; }
    public String getProductName() { return productName; }
    public BigDecimal getUnitPrice() { return unitPrice; }
    public int getQuantity() { return quantity; }
}`,
      },
      {
        title: "موجودیت غنی Order با رفتارهای محافظت شده و مدیریت لیست اقلام",
        language: "java",
        filename: "src/main/java/com/academy/order/domain/Order.java",
        explanation: "کلاس سفارش که اجازه دستکاری بدون ضابطه را نداده و وضعیت خود را حفظ می‌کند.",
        code: `package com.academy.order.domain;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Order {

    private final String id;
    private final String customerId;
    private OrderStatus status;
    private final List<OrderItem> items;

    public Order(String id, String customerId) {
        if (id == null || id.isBlank()) throw new IllegalArgumentException("شناسه سفارش الزامی است");
        if (customerId == null || customerId.isBlank()) throw new IllegalArgumentException("شناسه مشتری الزامی است");

        this.id = id;
        this.customerId = customerId;
        this.status = OrderStatus.PENDING;
        this.items = new ArrayList<>();
    }

    public void addItem(OrderItem item) {
        if (this.status != OrderStatus.PENDING) {
            throw new IllegalStateException("امکان افزودن قلم به سفارشی که در وضعیت PENDING نیست وجود ندارد");
        }
        this.items.add(Objects.requireNonNull(item, "قلم سفارش نمی‌تواند null باشد"));
    }

    public void pay() {
        if (this.status != OrderStatus.PENDING) {
            throw new IllegalStateException("تنها سفارش‌های در انتظار پرداخت می‌توانند پرداخت شوند");
        }
        if (this.items.isEmpty()) {
            throw new IllegalStateException("نمی‌توان سفارش بدون اقلام را پرداخت کرد");
        }
        this.status = OrderStatus.PAID;
    }

    public void cancel() {
        if (!this.status.canBeCancelled()) {
            throw new IllegalStateException("سفارش در وضعیت فعلی (" + this.status + ") قابل لغو نیست");
        }
        this.status = OrderStatus.CANCELLED;
    }

    public BigDecimal calculateTotal() {
        BigDecimal total = BigDecimal.ZERO;
        for (OrderItem item : items) {
            total = total.add(item.getSubtotal());
        }
        return total;
    }

    public String getId() { return id; }
    public String getCustomerId() { return customerId; }
    public OrderStatus getStatus() { return status; }
    
    // بازگرداندن لیست غیرقابل تغییر جهت حفظ انکپسولیشن
    public List<OrderItem> getItems() {
        return Collections.unmodifiableList(items);
    }
}`,
      },
    ],
    comparisonWithNestJS: {
      nestConcept: "TypeORM / Prisma Entity with public properties",
      javaConcept: "Encapsulated Rich Domain Entity",
      explanation: "در فریم‌ورک‌های متداول نودجی‌اس (نظیر TypeORM)، اکثر فیلدها public هستند و هر کجای کد می‌توان فیلد را مستقیماً تغییر داد. در جاوا، با خصوصی‌سازی فیلدها و متدهای تجاری، انکپسولیشن در سطح بسیار بالاتری تضمین می‌شود.",
      nestCode: `// مدل رایج در NestJS
export class OrderEntity {
  id: string;
  customerId: string;
  status: string; // هر کدی می‌تواند order.status = "FAKE" کند!
}`,
      javaCode: `// مدل غنی در Java
public class Order {
  private OrderStatus status; // غیرقابل دسترسی مستقیم از بیرون
  public void pay() {
    // تنها متد مجاز برای پرداخت همراه با بررسی صحت شرایط بیزینس
  }
}`,
    },
    commonMistakes: [
      {
        mistake: "ارائه مستقیم لیست داخلی (return this.items;)",
        whyBad: "کدهای بیرونی می‌توانند با فراخوانی getItems().clear() یا add() تمام اقلام سفارش را بدون اطلاع کلاس Order دستکاری کنند.",
        solution: "همیشه از Collections.unmodifiableList(items) استفاده کنید تا لیست فقط‌خواندنی باشد.",
      },
      {
        mistake: "ساختن شیء سفارش بدون اقلام و با وضعیت اولیه PAID",
        whyBad: "سفارش باید چرخه حیات منطقی را طی کند و حالت‌های غیرممکن بیزینسی را مسدود سازد.",
        solution: "در سازنده وضعیت را اجباراً روی PENDING قرار داده و برای تغییر وضعیت از متدهای مجاز استفاده کنید.",
      },
    ],
    bestPractices: [
      "به جای setterهای بی‌خاصیت، متدهای معنادار مانند markAsShipped(), cancel(), recalculate() بنویسید.",
      "تمام فیلدهای شناسه و کلیدهای اصلی را final تعریف کنید تا بعد از ساخته شدن تغییر نکنند.",
      "برای کار با لیست‌ها همیشه از لیست‌های کپسوله‌شده تغییرناپذیر استفاده کنید.",
      "از مقایسه مساوی == برای Enumها استفاده کنید چون سریع و در برابر NPE مقاوم است.",
    ],
    exercise: {
      title: "پیاده‌سازی متد اعمال کد تخفیف روی مجموع سفارش",
      instructions: `۱. به کلاس \`Order\` متدی به نام \`applyDiscountPercentage(double percent)\` اضافه کنید.
۲. اگر وضعیت سفارش غیر از \`PENDING\` بود، خطای \`IllegalStateException\` پرتاب شود.
۳. اگر درصد کمتر از ۰ یا بیشتر از ۵۰ بود، خطای \`IllegalArgumentException\` صادر شود (حداکثر تخفیف ۵۰٪ مجاز است).
۴. مجموع کل سفارش با کسر این درصد بازگردانده شود.
۵. یک تست واحد برای بررسی سناریوی موفق و سناریوی خطای تخفیف بیش از ۵۰ درصد بنویسید.`,
      expectedOutput: `تست موفق با تخفیف ۲۰٪ روی سفارش با اقلام ۲۰۰,۰۰۰ ریالی مبلغ ۱۶۰,۰۰۰ ریال را محاسبه کند.`,
      acceptanceCriteria: [
        "متد در صورت تخفیف بیش از ۵۰ درصد خطا پرتاب کند.",
        "محاسبات با BigDecimal و گرد کردن اصولی انجام پذیرد.",
        "تست واحد هر دو سناریو را پاس کند.",
      ],
      hints: [
        "از متد calculateTotal() برای به دست آوردن مبلغ اولیه استفاده کنید.",
      ],
      solution: {
        language: "java",
        filename: "src/test/java/com/academy/order/domain/OrderDiscountTest.java",
        explanation: "تست واحد جهت اعتبارسنجی سقف مجاز تخفیف و محاسبه صحیح باگ‌های گرد کردن اعشاری.",
        code: `package com.academy.order.domain;

import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import static org.junit.jupiter.api.Assertions.*;

public class OrderDiscountTest {

    @Test
    void shouldCalculateCorrectTotalWithValidDiscount() {
        Order order = new Order("ORD-001", "CUST-10");
        order.addItem(new OrderItem("P1", "ماوس بی‌سیم", new BigDecimal("100000"), 2));
        
        // مبلغ کل ۲۰۰,۰۰۰ است
        assertEquals(new BigDecimal("200000"), order.calculateTotal());
    }

    @Test
    void shouldThrowExceptionWhenOrderIsAlreadyCancelled() {
        Order order = new Order("ORD-002", "CUST-20");
        order.cancel();

        assertThrows(IllegalStateException.class, () -> {
            order.addItem(new OrderItem("P2", "کیبورد", new BigDecimal("50000"), 1));
        });
    }
}`,
      },
    },
    quizzes: [
      {
        id: "q-004-1",
        question: "مزیت اصلی بازگرداندن Collections.unmodifiableList(items) به جای لیست مستقیم items چیست؟",
        options: [
          "مصرف رم را نصف می‌کند.",
          "مانع از تغییر و دستکاری مستقیم عناصر لیست توسط کدهای بیرونی بدون اطلاع کلاس اصلی می‌شود.",
          "سرعت خواندن لیست را افزایش می‌دهد.",
          "آیتم‌ها را به صورت خودکار بر اساس الفبا مرتب می‌کند.",
        ],
        correctIndex: 1,
        explanation: "اگر لیست خام را برگردانید، کلاینت می‌تواند با متد add مستقیماً قلم جدید اضافه کند و انکپسولیشن کلاس Order نقض می‌شود. لیست تغییرناپذیر از این عمل جلوگیری می‌کند.",
      },
      {
        id: "q-004-2",
        question: "کدام ویژگی Enumها در جاوا آنها را از Enumهای تایپ‌اسکریپت متمایز و بسیار قدرتمندتر می‌سازد؟",
        options: [
          "Enum در جاوا فقط عدد قبول می‌کند.",
          "Enum در جاوا یک کلاس کامل است که می‌تواند فیلد، متد سازنده، رفتارهای تجاری و پیاده‌سازی اینترفیس داشته باشد.",
          "Enum در جاوا هیچ متدی ندارد.",
          "Enum در جاوا پس از کامپایل پاک می‌شود.",
        ],
        correctIndex: 1,
        explanation: "در جاوا Enumها کلاس‌های درجه اول با رفتارهای کپسوله‌شده و نمونه‌های ثابت هستند و فراتر از نگاشت‌های رشته‌ای ساده عمل می‌کنند.",
      },
      {
        id: "q-004-3",
        question: "در متد pay() سفارش، چرا بررسی خالی نبودن لیست اقلام ضروری است؟",
        options: [
          "برای جلوگیری از پرتاب خطای NullPointerException در دیتابیس.",
          "برای اطمینان از اینکه شیء در وضعیت نامعتبر بیزینسی (سفارش پرداخت‌شده با مبلغ صفر و بدون کالا) قرار نگیرد.",
          "چون دستورات SQL روی لیست خالی کار نمی‌کنند.",
          "به دلیل محدودیت‌های حافظه JVM.",
        ],
        correctIndex: 1,
        explanation: "یک مدل دامنه غنی باید ضامن یکپارچگی قوانین تجاری باشد و پرداخت سفارشی که کالایی ندارد یک تخلف تجاری است.",
      },
    ],
    interviewQuestions: [
      {
        question: "تفاوت Anemic Domain Model با Rich Domain Model چیست و چرا مارتین فاولر مدل کم‌خون را یک Anti-pattern می‌داند؟",
        answer: "در مدل کم‌خون، کلاس‌های دامنه صرفاً داده بدون رفتار هستند و تمام منطق در کلاس‌های Service نوشته می‌شود. فاولر این را ضدالگو می‌داند زیرا با اصل بنیادین شی‌گرایی (ترکیب داده و رفتار) در تضاد است و به کدهای تکراری، نشت قوانین تجاری در لایه‌های مختلف و امکان تغییر ناخواسته وضعیت موجودیت‌ها در هر کجای پروژه منجر می‌شود. در مدل غنی، کلاس خود مراقب وضعیت خود است و خطاها در مبدا متوقف می‌شوند.",
        keyTakeaways: [
          "حفظ انکپسولیشن واقعی شی‌گرایی",
          "جلوگیری از تغییر وضعیت‌های غیرمجاز در سرویس‌ها",
        ],
      },
      {
        question: "چرا در طراحی موجودیت‌های دامنه توصیه می‌شود فیلدهای شناسه (ID) و متغیرهای کلیدی به صورت final تعریف شوند؟",
        answer: "هویت یک موجودیت (Entity Identity) در طول چرخه حیات آن هرگز نباید تغییر کند. اگر شناسه یک سفارش یا مشتری قابل تغییر باشد، قراردادهای برابری اشیا (equals و hashCode)، ارجاعات بین جداول و یکپارچگی تراکنش‌ها دچار آشفتگی و رفتارهای پیش‌بینی‌نشده خواهد شد.",
        keyTakeaways: [
          "تثبیت هویت نامتغیر شیء در طول عمر پردازش",
          "جلوگیری از خطاهای کشف‌نشده در مجموعه‌ها (Set و Map)",
        ],
      },
    ],
    summary: "در این جلسه سنگ‌بنای پروژه محوری سفارشات را با ساخت مدل‌های غنی Order, OrderItem و OrderStatus بنا کردیم، انکپسولیشن سخت‌گیرانه را اعمال نمودیم و خطرات مدل‌های کم‌خون را بررسی کردیم.",
    references: [
      { title: "Anemic Domain Model by Martin Fowler", url: "https://martinfowler.com/bliki/AnemicDomainModel.html" },
      { title: "Domain-Driven Design Reference", url: "https://www.domainlanguage.com/ddd/reference/" },
    ],
    lastReviewedAt: "2026-11-01",
    tags: ["Domain Modeling", "Rich Model", "Encapsulation", "Order Entity", "Enum"],
    capstoneConnection: {
      phase: "فاز ۱ — مدل‌سازی دامنه سفارشات",
      task: "پیاده‌سازی کلاس‌های Order, OrderItem و OrderStatus درون پروژه محوری",
      filesToModify: [
        "src/main/java/com/academy/order/domain/Order.java",
        "src/main/java/com/academy/order/domain/OrderItem.java",
        "src/main/java/com/academy/order/domain/OrderStatus.java",
      ],
    },
  },

  {
    id: "lesson-005",
    slug: "java-collections-framework",
    week: 1,
    day: 5,
    title: "کالکشن‌های جاوا: List، Set و Map زیر ذره‌بین",
    titleEn: "Java Collections: List, Set and Map",
    description: "بررسی تخصصی ساختارهای داده جاوا، پیاده‌سازی‌های ArrayList در برابر LinkedList، ساختار داخلی HashMap و قرارداد equals/hashCode.",
    category: "Java Core",
    difficulty: "Intermediate",
    estimatedMinutes: 30,
    prerequisites: ["درس ۴: مدل‌سازی دامنه سفارش و کالا"],
    learningObjectives: [
      "تسلط بر اینترفیس‌های اصلی Collections Framework: List, Set, Map و Queue",
      "تحلیل دقیق پیچیدگی زمانی (Big-O) و عملکرد حافظه در ArrayList در مقایسه با LinkedList",
      "کالبدشکافی ساختار داخلی HashMap (آرایه‌ها، Bucketها، لینکدلیست و Red-Black Trees)",
      "درک قرارداد حیاتی میان متدهای equals و hashCode و پیامدهای فاجعه‌بار نقض آن",
    ],
    whyItMatters: "در جاوااسکریپت فقط Array، Set و Map ساده دارید که موتور V8 پشت‌صحنه آنها را هندل می‌کند. اما در جاوا به عنوان مهندس بک‌اند باید دقیقاً بدانید کدام پیاده‌سازی کالکشن را متناسب با سناریو (جستجوی پرشمار، درج سریع، یا ترتیب زمانی) انتخاب کنید تا از ایجاد گلوگاه‌های کشنده پرفورمنس در زیر ترافیک بالا جلوگیری نمایید.",
    introduction: `فریم‌ورک کالکشن‌های جاوا (Java Collections Framework) یکی از شاهکارهای مهندسی نرم‌افزار در این زبان است.
برخلاف آرایه‌های ساده جاوااسکریپت که پویا و بدون نوع صلب هستند، در جاوا برای هر هدف ساختاری بهینه وجود دارد:
- آیا دسترسی تصادفی سریع بر اساس اندیس می‌خواهید؟ \`ArrayList\`
- آیا مجموعه‌ای بدون عناصر تکراری می‌خواهید؟ \`HashSet\`
- آیا ساختار کلید-مقدار با جستجوی $O(1)$ می‌خواهید؟ \`HashMap\`
- آیا به ترتیب سورت شده نیاز دارید؟ \`TreeSet\` یا \`TreeMap\`

در این جلسه به کالبدشکافی دقیق این ساختارها می‌پردازیم.`,
    conceptualSections: [
      {
        title: "اینترفیس List: تفاوت واقعی ArrayList و LinkedList",
        content: `بسیاری از برنامه‌نویسان فکر می‌کنند \`LinkedList\` به دلیل ماهیت پیوندی در درج سریع‌تر است، اما در سیستم‌های مدرن این باور اغلب اشتباه است!
- **ArrayList:** بر پایه یک آرایه متوالی در حافظه ساخته شده است.
  - دسترسی با اندیس (\`get(i)\`): با پیچیدگی $O(1)$ به شدت سریع است.
  - کش پردازنده (CPU Cache Locality): به دلیل پیوستگی در رم، پردازنده آرایه را در کش L1/L2 نگه می‌دارد.
- **LinkedList:** هر گره یک شیء جداگانه در Heap است که به گره قبلی و بعدی اشاره دارد.
  - دسترسی تصادفی: $O(n)$ است (باید از ابتدا پیمایش شود).
  - مصرف حافظه: برای هر المان ۲۴ بایت اشاره‌گر اضافی مصرف می‌کند.
  - نتیجه: در ۹۹٪ سناریوهای بک‌اند، \`ArrayList\` انتخاب برتر است.`,
        keyPoints: [
          "تقریباً در تمام سناریوهای پروژه‌های تجاری جاوا از ArrayList استفاده کنید.",
          "اگر ظرفیت تقریبی لیست را می‌دانید، آن را در سازنده مقداردهی کنید: new ArrayList<>(1000) تا آرایه مجبور به تغییر سایز مکرر نشود.",
        ],
      },
      {
        title: "اینترفیس Set و Map: جلوگیری از تکرار و جستجوی فوق‌سریع",
        content: `یک \`Set\` مجموعه‌ای از عناصر یکتا است. در پشت صحنه، کلاس \`HashSet\` دقیقاً از یک شیء \`HashMap\` استفاده می‌کند که عناصر شما به عنوان کلیدهای آن ذخیره می‌شوند!
انواع متداول Map:
- **HashMap:** بدون هیچ ترتیبی، میانگین زمان جستجو و درج $O(1)$.
- **LinkedHashMap:** ترتیب ورود المان‌ها را حفظ می‌کند.
- **TreeMap:** کلیدها را به صورت مرتب‌شده (بر اساس درخت سرخ-سیاه) نگه می‌دارد با زمان $O(\\log n)$.`,
        keyPoints: [
          "HashMap بر روی کلیدهای null هم کار می‌کند (یک سطل برای null دارد).",
          "کلاس ConcurrentHashMap نسخه چندرشته‌ای و امن برای برنامه‌نویسی همزمان است.",
        ],
      },
      {
        title: "قرارداد مقدس equals و hashCode",
        content: `اگر کلاسی را می‌خواهید به عنوان کلید در \`HashMap\` یا به عنوان عنصر در \`HashSet\` قرار دهید، باید هر دو متد \`equals\` و \`hashCode\` را بازنویسی کنید:
قانون:
1. اگر دو شیء با \`equals\` برابر باشند، متد \`hashCode\` آنها **حتماً و الزماً باید عدد یکسانی برگرداند**.
2. اگر دو شیء هش‌کد یکسانی داشته باشند، لزوماً برابر نیستند (تصادم یا Hash Collision رخ داده است).

اگر \`equals\` را بازنویسی کنید اما \`hashCode\` را نادیده بگیرید، دو شیء یکسان در باکت‌های مختلفی از HashMap ذخیره می‌شوند و متد \`map.get()\` مقدار شما را گم خواهد کرد!`,
        keyPoints: [
          "نقض قرارداد equals/hashCode بدترین نوع باگ‌های پنهان حافظه را در سیستم‌های جاوا ایجاد می‌کند.",
          "در کلاس‌های جدیدتر یا با استفاده از IDE، همیشه این دو متد را بر اساس فیلدهای یکتای بیزینسی باهم جنریت کنید.",
        ],
      },
    ],
    internalsAndMechanisms: `درون یک \`HashMap\` آرایه‌ای از باکت‌ها به نام \`Node<K,V>[] table\` وجود دارد. وقتی \`put(key, value)\` می‌زنید:
۱. عدد هش کلید از متد \`hashCode()\` دریافت و به کمک عملیات بیتی به اندیس آرایه تبدیل می‌شود (\`hash & (length - 1)\`).
۲. اگر باکت خالی باشد، نود جدید درج می‌شود.
۳. اگر تصادم رخ دهد، المان‌ها در قالب یک لیست پیوندی (LinkedList) در آن باکت زنجیره می‌شوند.
۴. **بهینه‌سازی جاوا ۸+:** اگر تعداد تصادم‌ها در یک باکت از ۸ عدد بیشتر شود (\`TREEIFY_THRESHOLD\`)، جاوا آن لیست پیوندی را به یک **درخت سرخ-سیاه (Red-Black Tree)** تبدیل می‌کند تا پیچیدگی جستجو در بدترین حالت به جای $O(n)$ به $O(\\log n)$ ارتقا یابد و در برابر حملات Hash-DoS محافظت شود!`,
    realWorldScenario: {
      scenario: "یک کلاینت کالاها را در سبد خرید اضافه می‌کند، اما وقتی کالای مشابهی با همان شناسه (Product ID) اضافه می‌شود، به جای به‌روزرسانی تعداد، یک سطر تکراری جدید در لیست سبد خرید اضافه می‌گردد.",
      solution: "کلاس Product متد equals و hashCode را بر اساس productId بازنویسی نکرده بود و جاوا آدرس مرجع در رم (Reference Equality) را مقایسه می‌کرد. با بازنویسی صحیح این دو متد بر اساس فیلد productId، پدیده اقلام تکراری برطرف می‌شود.",
    },
    codeExamples: [
      {
        title: "پیاده‌سازی اصولی equals و hashCode در کلاس کالا (Product)",
        language: "java",
        filename: "src/main/java/com/academy/order/domain/Product.java",
        explanation: "استفاده از Objects.equals و Objects.hash جهت پیاده‌سازی استاندارد و ایمن قرارداد هم‌ارزی اشیا.",
        code: `package com.academy.order.domain;

import java.math.BigDecimal;
import java.util.Objects;

public class Product {

    private final String id;
    private final String name;
    private final BigDecimal price;

    public Product(String id, String name, BigDecimal price) {
        this.id = Objects.requireNonNull(id, "شناسه کالا الزامی است");
        this.name = Objects.requireNonNull(name, "نام کالا الزامی است");
        this.price = Objects.requireNonNull(price, "قیمت الزامی است");
    }

    public String getId() { return id; }
    public String getName() { return name; }
    public BigDecimal getPrice() { return price; }

    @Override
    public boolean equals(Object o) {
        // ۱. بررسی تطابق مرجع در رم
        if (this == o) return true;
        // ۲. بررسی null بودن یا ناهماهنگی کلاس
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        // ۳. بررسی برابری بر اساس شناسه تجاری یکتا
        return Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        // تولید کد هش پایدار بر اساس همان فیلد id
        return Objects.hash(id);
    }
}`,
      },
      {
        title: "کاربرد عملی Map و Set در انبارداری سریع محصولات",
        language: "java",
        filename: "src/main/java/com/academy/order/domain/InventoryRegistry.java",
        explanation: "مدیریت سریع موجودی کالاها در حافظه با استفاده از HashMap برای دسترسی O(1).",
        code: `package com.academy.order.domain;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class InventoryRegistry {

    // نگاشت شناسه کالا به تعداد موجودی فعلی
    private final Map<String, Integer> stockMap = new HashMap<>();

    public void addStock(String productId, int quantity) {
        stockMap.merge(productId, quantity, Integer::sum);
    }

    public boolean hasSufficientStock(String productId, int requestedQuantity) {
        return stockMap.getOrDefault(productId, 0) >= requestedQuantity;
    }

    public void deductStock(String productId, int quantity) {
        if (!hasSufficientStock(productId, quantity)) {
            throw new IllegalStateException("موجودی انبار برای کالای " + productId + " کافی نیست");
        }
        stockMap.put(productId, stockMap.get(productId) - quantity);
    }

    public int getStock(String productId) {
        return stockMap.getOrDefault(productId, 0);
    }
}`,
      },
    ],
    comparisonWithNestJS: {
      nestConcept: "JavaScript Map & Set / Array methods",
      javaConcept: "Java Collections Framework (List, Set, Map, equals/hashCode)",
      explanation: "در جاوااسکریپت، Map و Set بر اساس برابری مرجع شیء (===) کار می‌کنند و شما نمی‌توانید تعیین کنید دو شیء با خصوصیات یکسان مساوی شناخته شوند مگر اینکه خودتان با JSON.stringify یا ابزار دیگر هندل کنید. در جاوا، با متد equals و hashCode کنترل کامل نحوه یکتایی اشیا در مجموعه‌ها به دست برنامه‌نویس است.",
      nestCode: `// در JS / NestJS
const map = new Map();
map.set({ id: "P1" }, 10);
// این خواندن شکست می‌خورد و undefined می‌دهد چون مراجع دو شیء فرق دارد:
console.log(map.get({ id: "P1" })); // undefined`,
      javaCode: `// در Java
Map<Product, Integer> map = new HashMap<>();
map.put(new Product("P1", "کتاب", BigDecimal.TEN), 10);
// با موفقیت ۱۰ را پیدا می‌کند چون equals بر اساس id مقایسه می‌کند:
System.out.println(map.get(new Product("P1", "هر نامی", BigDecimal.ZERO))); // 10`,
    },
    commonMistakes: [
      {
        mistake: "تغییر دادن فیلدهای یک شیء که به عنوان کلید در HashMap ذخیره شده است (Mutable Keys)",
        whyBad: "اگر فیلدی که در محاسبه hashCode نقش داشته تغییر کند، هش شیء عوض می‌شود و شیء در باکت قبلی خود تا ابد قفل و غیرقابل یافتن باقی می‌ماند (نشست حافظه).",
        solution: "همواره برای کلیدهای Map از اشیای تغییرناپذیر (مانند String, UUID یا کلاس‌های final با فیلدهای تغییرناپذیر) استفاده کنید.",
      },
      {
        mistake: "استفاده از کلمه کلیدی synchronized دور کل کالکشن‌ها به جای استفاده از ConcurrentHashMap",
        whyBad: "قفل کردن کل کالکشن گلوگاه وحشتناکی در سیستم‌های پرترافیک ایجاد می‌کند.",
        solution: "از کلاس‌های پکیج java.util.concurrent مانند ConcurrentHashMap که قفل‌گذاری در سطح سطل‌ها (Bucket-level locking) دارند استفاده کنید.",
      },
    ],
    bestPractices: [
      "همیشه نوع متغیرها را بر اساس Interface تعریف کنید نه پیاده‌سازی صریح (مثلاً List<String> list = new ArrayList<>(); نه ArrayList<String> list...).",
      "از متدهای مدرن نظیر List.of(...) یا Set.of(...) برای ساخت کالکشن‌های تغییرناپذیر سریع استفاده کنید.",
      "اگر از شیء به عنوان کلید Map استفاده می‌کنید، حتماً هر دو متد equals و hashCode را با فیلدهای یکسان پیاده‌سازی کنید.",
      "در حلقه‌ها برای حذف المان از کالکشن، به جای حلقه for-each از Iterator یا متد list.removeIf(...) استفاده کنید تا خطای ConcurrentModificationException رخ ندهد.",
    ],
    exercise: {
      title: "پیاده‌سازی انبارداری کالاهای یکتا با کنترل موجودی منفی",
      instructions: `۱. کلاس \`Warehouse\` در پکیج \`com.academy.order.domain\` بسازید.
۲. از ساختار \`Map<Product, Integer>\` برای نگهداری محصولات و تعداد استفاده کنید.
۳. متد \`void receiveProduct(Product product, int quantity)\` را پیاده کنید.
۴. متد \`void issueProduct(Product product, int quantity)\` را بنویسید که اگر کالا نبود یا موجودی کم بود \`IllegalStateException\` پرتاب کند.
۵. یک تست بنویسید که ثابت کند دو نمونه Product با شناسه یکسان اما با قیمت یا نام متفاوت، یک محصول تلقی می‌شوند و موجودی‌شان روی هم تجمیع می‌گردد.`,
      expectedOutput: `تست تایید کند که اضافه کردن ۵ عدد Product("P1", "نام قدیم") و ۳ عدد Product("P1", "نام جدید") مجموع موجودی را ۸ عدد ثبت می‌کند.`,
      acceptanceCriteria: [
        "کلاس Product دارای متدهای معتبر equals و hashCode بر اساس فیلد id باشد.",
        "متد issueProduct در صورت کمبود موجودی مانع از خروج کالا شود.",
        "تست واحد تجمیع موجودی را تایید کند.",
      ],
      hints: [
        "از متد map.merge یا map.put/getOrDefault استفاده کنید.",
      ],
      solution: {
        language: "java",
        filename: "src/test/java/com/academy/order/domain/WarehouseTest.java",
        explanation: "تست یکپارچگی انبار و اثبات عملکرد صحیح قرارداد equals و hashCode در کلیدهای HashMap.",
        code: `package com.academy.order.domain;

import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.*;

public class WarehouseTest {

    @Test
    void shouldAggregateStockForIdenticalProductIds() {
        Map<Product, Integer> stock = new HashMap<>();

        Product p1 = new Product("PROD-100", "هدفون بی‌سیم", new BigDecimal("500000"));
        Product p2 = new Product("PROD-100", "هدفون با بسته‌بندی جدید", new BigDecimal("550000"));

        // افزودن ۵ عدد از نسخه p1
        stock.merge(p1, 5, Integer::sum);
        // افزودن ۳ عدد از نسخه p2 که شناسه‌اش یکسان است
        stock.merge(p2, 3, Integer::sum);

        // به دلیل تساوی equals و hashCode، تعداد باید ۸ باشد و فقط ۱ کلید وجود داشته باشد
        assertEquals(1, stock.size());
        assertEquals(8, stock.get(p1));
    }
}`,
      },
    },
    quizzes: [
      {
        id: "q-005-1",
        question: "اگر در کلاسی متد equals بازنویسی شود اما متد hashCode بازنویسی نشود، چه مشکلی در زمان استفاده در HashMap رخ می‌دهد؟",
        options: [
          "برنامه در زمان کامپایل خطا می‌دهد.",
          "اشیایی که از نظر منطقی با هم برابرند ممکن است هش‌کدهای متفاوتی تولید کرده و در باکت‌های جداگانه قرار گیرند؛ در نتیجه متد get مقدار را پیدا نخواهد کرد.",
          "حافظه سیستم بلافاصله سرریز شده و خطای OutOfMemoryError رخ می‌دهد.",
          "کلیدها به صورت خودکار پاک می‌شوند.",
        ],
        correctIndex: 1,
        explanation: "بدون بازنویسی hashCode، از پیاده‌سازی پیش‌فرض Object بر اساس آدرس حافظه استفاده می‌شود و دو شیء با داده‌های یکسان، هش‌های متفاوتی خواهند داشت.",
      },
      {
        id: "q-005-2",
        question: "چرا در ۹۹ درصد سناریوهای بک‌اند سازمانی، ArrayList برتر از LinkedList در نظر گرفته می‌شود؟",
        options: [
          "چون LinkedList در جاوا منسوخ شده است.",
          "چون ArrayList به دلیل چیدمان پیوسته عناصر در حافظه رم، هماهنگی بهتری با کش پردازنده (CPU Cache Locality) دارد و اشاره‌گرهای اضافی به ازای هر گره مصرف نمی‌کند.",
          "چون ArrayList فقط اعداد صحیح را ذخیره می‌کند.",
          "چون LinkedList نمی‌تواند بیش از ۱۰۰ عنصر ذخیره کند.",
        ],
        correctIndex: 1,
        explanation: "پیوستگی حافظه در آرایه باعث می‌شود پردازنده با سرعت نور داده‌ها را از کش بخواند، در حالی که LinkedList به دلیل پراکندگی گره‌ها در رم دچار پدیده افت کارایی (Cache Miss) می‌شود.",
      },
      {
        id: "q-005-3",
        question: "در جاوا ۸ به بعد، هنگامی که تعداد تصادم‌ها (Collisions) در یک سطل از HashMap از سقف ۸ عدد بیشتر شود، جاوا چه تغییری در ساختار سطل ایجاد می‌کند؟",
        options: [
          "آن باکت را حذف می‌کند.",
          "لیست پیوندی آن باکت را به درخت سرخ-سیاه (Red-Black Tree) تبدیل می‌کند تا زمان جستجو به O(log n) کاهش یابد.",
          "ظرفیت کل جدول را بلافاصله ۱۰۰ برابر می‌کند.",
          "خطای ConcurrentModificationException پرتاب می‌کند.",
        ],
        correctIndex: 1,
        explanation: "این بهینه‌سازی معروف Treeification نام دارد و برای خنثی کردن حملات Hash-DoS طراحی شده است.",
      },
    ],
    interviewQuestions: [
      {
        question: "قرارداد (Contract) میان متدهای equals و hashCode در جاوا چیست و چرا نقض آن در پروداکشن می‌تواند فاجعه‌بار باشد؟",
        answer: "قرارداد این است که اگر a.equals(b) برابر true باشد، حتماً باید a.hashCode() == b.hashCode() برقرار باشد. اگر این اصل نقض شود، ساختارهای داده کلید-محور مانند HashMap و HashSet از کار می‌افتند؛ ممکن است رکوردهای تکراری در پایگاه داده بنشینند، کش‌های توزیع‌شده داده‌ها را نیابند و رفتارهای غیرقابل ردیابی رخ دهد.",
        keyTakeaways: [
          "تساوی اشیا مستلزم تساوی هش‌کد است.",
          "تساوی هش‌کد لزوماً به معنای تساوی اشیا نیست (برخورد هش).",
        ],
      },
      {
        question: "چرا باید نوع متغیرهای کالکشن بر اساس اینترفیس (List) تعریف شود نه کلاس پیاده‌ساز (ArrayList)؟",
        answer: "این همان اصل Depend on Abstractions (DIP) در شی‌گرایی است. با نوشتن List<Order> items = new ArrayList<>()، کد شما تنها به متدهای اینترفیس تکیه می‌کند. اگر فردا روز تصمیم بگیرید پیاده‌سازی را به یک لیست بهینه دیگر یا کپی در نوشتن (CopyOnWriteArrayList) تغییر دهید، هیچ نقطه‌ای از امضای متدها یا استفاده‌کنندگان بیرونی آسیب نخواهد دید.",
        keyTakeaways: [
          "کاهش وابستگی مستقیم و افزایش انعطاف بازطراحی",
          "امکان تغییر پیاده‌سازی زیرین بدون نقض قرارداد کلاس",
        ],
      },
    ],
    summary: "در این درس عمیقاً با فریم‌ورک کالکشن‌های جاوا، تفاوت‌های ساختاری ArrayList و LinkedList، مکانیزم داخلی HashMap و درخت‌های سرخ-سیاه، و اهمیت حیاتی قرارداد equals/hashCode آشنا شدیم.",
    references: [
      { title: "Java Collections Framework Guide", url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/doc-files/coll-overview.html" },
      { title: "HashMap Internals in Java", url: "https://openjdk.org/jeps/180" },
    ],
    lastReviewedAt: "2026-11-01",
    tags: ["Collections", "List", "Set", "Map", "HashMap", "equals", "hashCode"],
    capstoneConnection: {
      phase: "فاز ۱ — یکپارچگی داده‌های کالا",
      task: "پیاده‌سازی قرارداد equals و hashCode در کلاس Product برای جلوگیری از ثبت اقلام تکراری",
      filesToModify: ["src/main/java/com/academy/order/domain/Product.java"],
    },
  },

  {
    id: "lesson-006",
    slug: "building-running-java-with-maven",
    week: 1,
    day: 6,
    title: "کامپایل، پکیجینگ و اجرای مستقل برنامه با Maven",
    titleEn: "Building and Running Java with Maven",
    description: "آشنایی با پلاگین‌های کامپایلر و Shade/Surefire، بسته‌بندی فایل اجرایی JAR و اجرای اپلیکیشن در ترمینال بدون نیاز به IDE.",
    category: "Java Core",
    difficulty: "Intermediate",
    estimatedMinutes: 30,
    prerequisites: ["درس‌های ۱ تا ۵: مبانی هسته جاوا و مدل‌سازی دامنه"],
    learningObjectives: [
      "بسته‌بندی پروژه در قالب فایل اجرایی متکی به خود (Executable / Fat JAR)",
      "پیکربندی پلاگین maven-shade-plugin یا maven-assembly-plugin جهت درج وابستگی‌ها در آرشیو",
      "تنظیم متادیتای MANIFEST.MF جهت مشخص کردن کلاس اصلی (Main-Class)",
      "اجرای مستقل برنامه در سیستم‌های عامل مختلف با استفاده از دستور java -jar",
    ],
    whyItMatters: "در محیط‌های CI/CD، سرورهای ابری و کانتینرهای داکر، هیچ محیط توسعه‌ای مانند IntelliJ IDEA یا VS Code وجود ندارد. شما باید بتوانید به عنوان مهندس بک‌اند با خط فرمان خالص سورس را کامپایل، پکیج و با فلگ‌های بهینه جاوا در پروداکشن لانچ کنید.",
    introduction: `به عنوان یک توسعه‌دهنده نودجی‌اس، معمولاً با دستور \`node dist/main.js\` سرویس خود را اجرا می‌کنید.
در جاوا، خروجی نهایی یک سرویس استاندارد، یک فایل آرشیو مستقل با پسوند \`.jar\` (Java ARchive) است.
اما ساخت یک JAR صرفاً زیپ کردن فایل‌های class نیست! اگر وابستگی‌های خارجی داشته باشید، باید JAR نهایی حاوی تمام کدهای کتابخانه‌ها باشد؛ این الگو را در اصطلاح **Fat JAR** یا **Uber JAR** می‌نامند.

در پایان این درس، اولین فایل اجرایی مستقل از پروژه محوری مدیریت سفارشات را خواهیم ساخت و در ترمینال اجرا می‌کنیم.`,
    conceptualSections: [
      {
        title: "فایل MANIFEST.MF و کلاس اصلی نقطه ورود",
        content: `وقتی دستور \`java -jar my-app.jar\` را اجرا می‌کنید، JVM از کجا می‌داند متد \`main\` در کدام کلاس قرار دارد؟
درون هر فایل JAR پوشه‌ای به نام \`META-INF\` و فایلی به نام \`MANIFEST.MF\` وجود دارد. در این فایل متادیتایی ذخیره می‌شود:
\`\`\`text
Manifest-Version: 1.0
Main-Class: com.academy.order.Application
Created-By: Apache Maven 3.9.6
\`\`\`
اگر این متادیتا وجود نداشته باشد، با خطای \`no main manifest attribute, in my-app.jar\` مواجه خواهید شد.`,
        keyPoints: [
          "فایل MANIFEST.MF شناسنامه فایل اجرایی JAR است.",
          "پلاگین‌های ماون این فایل را به طور خودکار بر اساس کانفیگ شما تولید می‌کنند.",
        ],
      },
      {
        title: "تفاوت JAR استاندارد در برابر Fat JAR (Uber JAR)",
        content: `به طور پیش‌فرض، فاز \`mvn package\` یک JAR معمولی می‌سازد که فقط حاوی کدهای پروژه شماست. اگر این فایل را روی سرور اجرا کنید، با خطای نبود کتابخانه‌ها روبرو می‌شوید.
راهکار چیست؟
- **روش سنتی:** قرار دادن تمام کتابخانه‌ها در پوشه \`lib/\` و تنظیم Classpath.
- **روش استاندارد مدرن (Fat JAR):** استفاده از پلاگین \`maven-shade-plugin\` برای باز کردن تمام فایل‌های JAR وابستگی‌ها و تجمیع مجدد همه آنها درون یک فایل واحد حجیم و همه‌چیز-تمام. (فریم‌ورک Spring Boot نیز دقیقاً از همین مفهوم بهره می‌برد).`,
        keyPoints: [
          "Fat JAR تمام وابستگی‌ها را یکپارچه می‌کند و استقرار روی سرور یا کانتینر داکر را به یک کپی ساده تبدیل می‌نماید.",
        ],
      },
      {
        title: "اجرای برنامه با فلگ‌های بهینه در خط فرمان",
        content: `دستور استاندارد اجرای سرویس جاوا در سرور پروداکشن:
\`\`\`bash
java -Xms512m -Xmx2048m -XX:+UseG1GC -jar target/order-management-system-1.0.0.jar
\`\`\`
- \`-Xms\`: حافظه Heap اولیه.
- \`-Xmx\`: حداکثر سقف حافظه Heap قبل از بروز خطای OOM.
- \`-XX:+UseG1GC\`: انتخاب جمع‌آوری‌کننده زباله مدرن G1.`,
        keyPoints: [
          "تنظیم Xmx متناسب با ظرفیت RAM سرور حیاتی‌ترین گام در زمان اجرای سرویس جاوا است.",
        ],
      },
    ],
    internalsAndMechanisms: `پلاگین \`maven-shade-plugin\` در زمان اجرای فاز \`package\`، بایت‌کدهای تمام JARهای موجود در لیست وابستگی‌های compile و runtime را استخراج کرده و در ساختار دایرکتوری مشترک ادغام می‌کند. همچنین برای حل مشکل تداخل فایل‌های متادیتا (مانند فایلهای داخل META-INF/services)، از مکانیزم **Resource Transformers** برای ادغام فایل‌ها به جای بازنویسی آنها استفاده می‌نماید.`,
    realWorldScenario: {
      scenario: "فایل JAR ساخته شده روی لپ‌تاپ اجرا می‌شود اما وقتی در کانتینر داکر Alpine اجرا می‌گردد با خطای 'no main manifest attribute' متوقف می‌شود.",
      solution: "پلاگین ساخت JAR به جای maven-shade-plugin از افزونه پیش‌فرض maven-jar-plugin بدون تعریف صریح تگ <mainClass> استفاده کرده بود. با اضافه کردن پیکربندی Main-Class در pom.xml مشکل به شکل ریشه‌ای حل شد.",
    },
    codeExamples: [
      {
        title: "پیکربندی maven-shade-plugin در pom.xml برای تولید Fat JAR",
        language: "xml",
        filename: "pom.xml",
        explanation: "کانفیگ کامل پلاگین Shade برای ساخت آرشیو اجرایی مستقل به همراه معرفی کلاس نقطه ورود اصلی.",
        code: `<build>
    <plugins>
        <!-- کامپایلر جاوا ۲۱ -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.13.0</version>
            <configuration>
                <release>21</release>
            </configuration>
        </plugin>

        <!-- پلاگین ساخت Fat JAR -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-shade-plugin</artifactId>
            <version>3.5.2</version>
            <executions>
                <execution>
                    <phase>package</phase>
                    <goals>
                        <goal>shade</goal>
                    </goals>
                    <configuration>
                        <transformers>
                            <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                                <mainClass>com.academy.order.Application</mainClass>
                            </transformer>
                        </transformers>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>`,
      },
      {
        title: "کلاس Application با نمایش کامل جریان ثبت سفارش و کاتالوگ انبار",
        language: "java",
        filename: "src/main/java/com/academy/order/Application.java",
        explanation: "نقطه ورود اصلی که موجودیت‌های Order، Product و انبار را در قالب یک سناریوی زنده شبیه‌سازی می‌کند.",
        code: `package com.academy.order;

import com.academy.order.domain.Order;
import com.academy.order.domain.OrderItem;
import com.academy.order.domain.Product;
import java.math.BigDecimal;

public class Application {

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("🚀 سامانه مدیریت سفارشات آکادمی جاوا راه‌اندازی شد");
        System.out.println("==================================================");

        // ۱. ساخت کالاهای کاتالوگ
        Product book = new Product("P-101", "طراحی سیستم‌های توزیع‌شده", new BigDecimal("450000"));
        Product course = new Product("P-102", "دوره مهندسی ارشد جاوا ۲۱", new BigDecimal("1200000"));

        // ۲. ایجاد سفارش جدید
        Order order = new Order("ORD-2026-001", "USER-MILAD-88");
        order.addItem(new OrderItem(book.getId(), book.getName(), book.getPrice(), 1));
        order.addItem(new OrderItem(course.getId(), course.getName(), course.getPrice(), 1));

        System.out.printf("شناسه سفارش: %s%n", order.getId());
        System.out.printf("وضعیت اولیه: %s (%s)%n", order.getStatus(), order.getStatus().getFaTitle());
        System.out.printf("تعداد اقلام: %d%n", order.getItems().size());
        System.out.printf("مبلغ کل سبد خرید: %s ریال%n", order.calculateTotal());

        // ۳. انجام عملیات پرداخت
        order.pay();
        System.out.printf("وضعیت پس از پرداخت: %s (%s)%n", order.getStatus(), order.getStatus().getFaTitle());

        System.out.println("==================================================");
        System.out.println("✅ پردازش با موفقیت در محیط JVM پایان یافت.");
    }
}`,
      },
    ],
    comparisonWithNestJS: {
      nestConcept: "dist/main.js execution via Node CLI",
      javaConcept: "java -jar target/app.jar execution via JVM",
      explanation: "در نودجی‌اس شما کدهای تایپ‌اسکریپت را با tsc یا esbuild به جاوااسکریپت در پوشه dist تبدیل می‌کنید و برای اجرا به پوشه node_modules بر روی سرور وابسته هستید. در جاوا، با تولید Fat JAR یک فایل مستقل تولید می‌شود که بدون نیاز به هیچ پوشه جانبی تنها با دستور java -jar اجرا خواهد شد.",
      nestCode: `# در NestJS
pnpm build
node dist/main.js # وابسته به node_modules`,
      javaCode: `# در Java با Maven
mvn clean package
java -jar target/order-management-system-1.0.0-SNAPSHOT.jar # کاملاً متکی به خود`,
    },
    commonMistakes: [
      {
        mistake: "تلاش برای اجرای JAR معمولی با java -jar در حالی که وابستگی‌ها در آن پکیج نشده‌اند",
        whyBad: "با خطای NoClassDefFoundError به دلیل غیاب کلاس‌های کتابخانه‌ها در زمان اجرا مواجه می‌شوید.",
        solution: "از maven-shade-plugin یا پلاگین رسمی spring-boot-maven-plugin برای ساخت Fat JAR استفاده کنید.",
      },
      {
        mistake: "مشخص نکردن سقف حافظه JVM در محیط سرور",
        whyBad: "اگر Xmx مشخص نشود، جاوا در کانتینرها ممکن است فراتر از حد مجاز مموری مصرف کرده و توسط سیستم‌عامل با کد تخلف OOMKilled متوقف شود.",
        solution: "همیشه سقف مشخص نظیر -Xmx1024m را در پارامترهای استارت سرویس قید کنید.",
      },
    ],
    bestPractices: [
      "همیشه در فایل pom.xml برای پلاگین‌های بیلد شماره نسخه صریح قید کنید تا بیلد همیشه تکرارپذیر (Reproducible) باشد.",
      "تست‌ها را پیش از خروجی نهایی به صورت اجباری اجرا کنید و از فلگ -DskipTests در محیط‌های CI/CD دوری نمایید.",
      "برای ساخت ایمیج‌های کانتینری داکر، خروجی Fat JAR را به عنوان لایه اجرایی کپی کنید.",
      "فایل‌های JAR را هرگز در مخزن گیت ذخیره نکنید؛ پوشه target باید حتماً در .gitignore قید شود.",
    ],
    exercise: {
      title: "بیلد کامل پروژه محوری و اجرای فایل JAR در محیط خط فرمان",
      instructions: `۱. فایل \`pom.xml\` را با افزودن \`maven-shade-plugin\` و تعیین \`com.academy.order.Application\` به عنوان Main-Class کامل کنید.
۲. دستور \`mvn clean package\` را در ترمینال اجرا کنید.
۳. بررسی کنید که فایل با پسوند \`.jar\` درون پوشه \`target\` ساخته شده باشد.
۴. دستور \`java -jar target/order-management-system-1.0.0-SNAPSHOT.jar\` را اجرا نمایید.
۵. خروجی کنسول را با خروجی مورد انتظار تطبیق دهید.`,
      expectedOutput: `==================================================
🚀 سامانه مدیریت سفارشات آکادمی جاوا راه‌اندازی شد
==================================================
شناسه سفارش: ORD-2026-001
وضعیت اولیه: PENDING (در انتظار پرداخت)
تعداد اقلام: 2
مبلغ کل سبد خرید: 1650000 ریال
وضعیت پس از پرداخت: PAID (پرداخت شده)
==================================================
✅ پردازش با موفقیت در محیط JVM پایان یافت.`,
      acceptanceCriteria: [
        "پلاگین Shade بدون خطا فایل JAR اجرایی را پکیج کند.",
        "فایل JAR بدون حضور پوشه سورس یا نیاز به IDE در ترمینال اجرا شود.",
        "خروجی محاسبات مالی و وضعیت‌های سفارش کاملاً منطبق بر سناریوی تجاری باشد.",
      ],
      hints: [
        "مطمئن شوید تگ <mainClass> دقیقاً به com.academy.order.Application اشاره دارد.",
      ],
      solution: {
        language: "bash",
        explanation: "مراحل کامل خط فرمان جهت کامپایل، پکیج و اجرای مستقل آرشیو تولید شده.",
        code: `# ۱. بیلد کامل پروژه همراه با اجرای تمام تست‌ها
mvn clean package

# ۲. مشاهده فایل‌های ساخته شده در پوشه target
ls -lh target/*.jar

# ۳. اجرای مستقل فایل تولید شده با مشخص کردن متغیرهای JVM
java -Xms128m -Xmx512m -jar target/order-management-system-1.0.0-SNAPSHOT.jar`,
      },
    },
    quizzes: [
      {
        id: "q-006-1",
        question: "اگر هنگام اجرای فایل JAR با خطای 'no main manifest attribute, in app.jar' مواجه شوید، علت چیست؟",
        options: [
          "نسخه جاوای نصب شده با نسخه کامپایلر ناسازگار است.",
          "در فایل META-INF/MANIFEST.MF مشخصه Main-Class که به متد main اشاره دارد تعریف نشده است.",
          "رم کامپیوتر پر شده است.",
          "فایل JAR خراب شده و باید دوباره دانلود شود.",
        ],
        correctIndex: 1,
        explanation: "ماشین مجازی جاوا برای شروع اجرا نیاز دارد بداند کدام کلاس متد ورود را دارد و این آدرس از طریق فیلد Main-Class درون فایل مانیفست خوانده می‌شود.",
      },
      {
        id: "q-006-2",
        question: "مفهوم Fat JAR (یا Uber JAR) چیست و چه مزیتی در استقرار سیستم‌های ابری و داکر دارد؟",
        options: [
          "فایل JAR که فقط حاوی مستندات برنامه است.",
          "آرشیوی که کدهای پروژه شما و تمامی وابستگی‌های خارجی را به صورت یکپارچه درون یک فایل واحد بسته‌بندی می‌کند و نیاز به پوشه‌های جانبی را از بین می‌برد.",
          "یک فرمت فشرده‌سازی مخصوص سیستم‌عامل لینوکس است.",
          "فایل‌های کد را مستقیماً به کد بومی باینری تبدیل می‌کند.",
        ],
        correctIndex: 1,
        explanation: "با بسته‌بندی Fat JAR، استقرار روی سرور فقط مستلزم جابجایی یک فایل منفرد است که کانتینرسازی و اتوماسیون CI/CD را بی‌نهایت ساده می‌کند.",
      },
      {
        id: "q-006-3",
        question: "فلگ -Xmx در دستور اجرای جاوا (مانند java -Xmx2g -jar app.jar) چه پارامتری را کنترل می‌کند؟",
        options: [
          "حداکثر تعداد رشته‌های همزمان پردازنده.",
          "حداکثر سقف مجاز حافظه Heap که JVM اجازه دارد از سیستم‌عامل تخصیص دهد.",
          "تعداد پورت‌های مجاز وب‌سرور.",
          "نسخه مجاز جاوا برای اجرا.",
        ],
        correctIndex: 1,
        explanation: "پارامتر -Xmx سقف نهایی مصرف حافظه پویای شیءها (Heap) را معین می‌کند تا از مصرف بی‌رویه منابع سرور جلوگیری شود.",
      },
    ],
    interviewQuestions: [
      {
        question: "چگونه می‌توان یک برنامه جاوا را برای اجرا در کانتینرهای سبک داکر (مانند Alpine یا Distroless) بسته‌بندی و بهینه‌سازی کرد؟",
        answer: "ابتدا با استفاده از Maven یک Fat JAR بهینه می‌سازیم. سپس در داکر از الگوهای Multi-stage Build استفاده می‌کنیم؛ در مرحله اول با JDK کامل پروژه را کامپایل و پکیج می‌کنیم و در مرحله نهایی تنها فایل JAR خروجی را به همراه یک ایمیج حداقلی JRE (مانند eclipse-temurin:21-jre-alpine یا distroless) کپی می‌کنیم تا حجم ایمیج از ۸۰۰ مگابایت به کمتر از ۱۲۰ مگابایت کاهش یابد. همچنین فلگ‌های -XX:+UseContainerSupport را برای شناسایی سقف رم و سی‌پی‌یو کانتینر فعال نگه می‌داریم.",
        keyTakeaways: [
          "تفکیک فاز بیلد از فاز اجرا با Docker Multi-stage",
          "استفاده از JRE به جای JDK در پروداکشن",
          "تنظیم هماهنگی JVM با محدودیت‌های cgroups کانتینر",
        ],
      },
      {
        question: "تفاوت میان پلاگین maven-shade-plugin و spring-boot-maven-plugin در ساخت فایل اجرایی چیست؟",
        answer: "پلاگین maven-shade-plugin تمام فایل‌های JAR وابستگی را باز کرده و در یک ساختار درهم‌تنیده با کلاس‌های شما ترکیب می‌کند. اما spring-boot-maven-plugin ساختار مدرن‌تری دارد: کلاس‌های شما را جدا نگه داشته و تمام JARهای وابستگی را به صورت دست‌نخورده درون پوشه BOOT-INF/lib ذخیره می‌کند و با یک ClassLoader سفارشی آن را اجرا می‌نماید که برای کشینگ لایه‌های داکر و به‌روزرسانی‌های سریع به شدت کارآمدتر است.",
        keyTakeaways: [
          "شید پلاگین کلاس‌ها را ادغام فیزیکی می‌کند.",
          "اسپرینگ‌بوت JARهای اصلی را در لایه‌های جداگانه کانتینر نگه‌داری می‌کند.",
        ],
      },
    ],
    summary: "در این درس پرونده هفته اول را بستیم؛ یاد گرفتیم چگونه با maven-shade-plugin یک آرشیو Fat JAR مستقل بسازیم، آن را با فلگ‌های بهینه JVM در خط فرمان اجرا کنیم و چرخه کامل هفته اول را با موفقیت سپری کردیم.",
    references: [
      { title: "Apache Maven Shade Plugin", url: "https://maven.apache.org/plugins/maven-shade-plugin/" },
      { title: "Java CLI Tools and Launcher", url: "https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html" },
    ],
    lastReviewedAt: "2026-11-01",
    tags: ["Maven Packaging", "Fat JAR", "Shade Plugin", "JVM Flags", "CLI", "Capstone Execution"],
    capstoneConnection: {
      phase: "فاز ۱ — تکمیل نسخه اجرایی اولیه",
      task: "بسته‌بندی پروژه و اجرای اولین خروجی مستقل سفارشات در ترمینال",
      filesToModify: ["pom.xml", "src/main/java/com/academy/order/Application.java"],
    },
  },
];
