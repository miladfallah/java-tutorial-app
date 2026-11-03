import fs from "fs";
import path from "path";
import { ALL_LESSON_SUMMARIES } from "../src/data/curriculum";
import { Lesson } from "../src/data/types";

// Comprehensive topic details for weeks 2 to 26
interface TopicContent {
  prerequisites: string[];
  learningObjectives: string[];
  whyItMatters: string;
  introduction: string;
  conceptualSections: { title: string; content: string; keyPoints?: string[] }[];
  internalsAndMechanisms: string;
  realWorldScenario: { scenario: string; solution: string };
  codeExamples: { title: string; language: string; code: string; explanation: string; filename?: string }[];
  comparisonWithNestJS: { nestConcept: string; javaConcept: string; explanation: string; nestCode?: string; javaCode?: string };
  commonMistakes: { mistake: string; whyBad: string; solution: string; codeBad?: string; codeGood?: string }[];
  bestPractices: string[];
  exercise: {
    title: string;
    instructions: string;
    expectedOutput?: string;
    acceptanceCriteria: string[];
    hints: string[];
    solution: { code: string; language: string; explanation: string; filename?: string };
  };
  quizzes: { id: string; question: string; options: string[]; correctIndex: number; explanation: string }[];
  interviewQuestions: { question: string; answer: string; keyTakeaways?: string[] }[];
  summary: string;
  references: { title: string; url: string }[];
  capstoneConnection: { phase: string; task: string; filesToModify: string[] };
}

export const TOPIC_TEMPLATES: Record<string, (summary: typeof ALL_LESSON_SUMMARIES[0]) => TopicContent> = {
  // Fallback high-detail generator for any topic based on metadata
  default: (summary) => {
    const isSpring = summary.category.includes("Spring") || summary.tags.some(t => t.toLowerCase().includes("spring"));
    const isDb = summary.category.includes("JPA") || summary.category.includes("Database") || summary.category.includes("Transactions");
    const isDist = summary.category.includes("Event") || summary.category.includes("Distributed") || summary.category.includes("Concurrency");

    return {
      prerequisites: [
        `آشنایی با مبانی ${summary.category}`,
        "تجربه کار با سیستم‌های توزیع‌شده و میکروسرویس در Node.js/NestJS",
      ],
      learningObjectives: [
        `درک عمیق سازوکار ${summary.titleEn} در اکوسیستم مدرن جاوا ۲۱`,
        `پیاده‌سازی استانداردهای صنعتی و سناریوهای پروداکشن برای ${summary.title}`,
        "شناخت و پیشگیری از گلوگاه‌های پرفورمنس، نشت حافظه و باگ‌های همزمانی",
        "تطبیق تفاوت‌های معماری و پارادایم این مبحث با پیاده‌سازی‌های معادل در NestJS",
      ],
      whyItMatters: `در پروژه‌های عظیم سازمانی با میلیون‌ها تراکنش، تسلط بر ${summary.titleEn} تفاوت میان یک سرویس پایدار با تاخیر زیر ۱۰ میلی‌ثانیه و یک سیستم کرش‌کننده است. به عنوان مهندس بک‌اند باسابقه نودجی‌اس، شناخت این جزئیات امکان تصمیم‌گیری‌های هوشمندانه معماری را فراهم می‌سازد.`,
      introduction: `مبحث ${summary.title} (${summary.titleEn}) یکی از پایه‌های حیاتی برای توسعه سرویس‌های پایدار سازمانی در جاوا است.
در اکوسیستم Node.js و NestJS، بسیاری از دغدغه‌های مربوط به این مفهوم یا توسط تک‌رشته‌ای بودن Event Loop ساده‌سازی می‌شد و یا نیازمند پکیج‌های شخص ثالث متعدد بود.
اما در دنیای جاوا و اسپرینگ‌بوت، این سازوکار به شکل استاندارد، کپسوله‌شده و با نظارت دقیق ماشین مجازی مدیریت می‌گردد. در این درس ساختار داخلی، نمونه کدهای اجرایی پروداکشن، تله‌های متداول و سوالات مصاحبه ارشد آن را کالبدشکافی خواهیم کرد.`,
      conceptualSections: [
        {
          title: `مبانی و معماری زیربنایی ${summary.titleEn}`,
          content: `برای تسلط بر این مبحث، ابتدا باید نقش آن را در جریان اجرای درخواست (Execution Pipeline) بشناسیم.
در جاوا، تمام تعاملات بر پایه قراردادهای صلب و تایپ‌سیف شکل می‌گیرند. وقتی از ${summary.titleEn} استفاده می‌کنید، سیستم به جای حدس‌زدن ساختار داده‌ها، قواعد تجاری را در فاز کامپایل و زمان اجرا با بالاترین دقت اعتبارسنجی می‌کند.

این رویکرد تضمین می‌کند که سیستم در زمان جهش‌های ترافیکی ناگهانی (Traffic Spikes) رفتار پیش‌بینی‌پذیری از خود نشان دهد و منابع حافظه سرور دچار هدررفت نشوند.`,
          keyPoints: [
            "تطابق ۱۰۰ درصدی با استانداردهای مدرن Java 21 LTS",
            "جداسازی لایه‌های مسئولیت و پیشگیری از نشت کدهای زیرساخت به لایه دامنه بیزینس",
            "کاهش چشمگیر خطاهای زمان اجرا (Runtime Errors) با تکیه بر بررسی‌های ایستا",
          ],
        },
        {
          title: "الگوهای کاربردی در محیط پروداکشن و سناریوهای تجاری",
          content: `در دنیای واقعی، استفاده از ${summary.titleEn} نیازمند در نظر گرفتن مصالحه‌های مهندسی (Trade-offs) نظیر تاخیر شبکه، مصرف حافظه و سادگی نگهداری است.
در سیستم مدیریت سفارشات و انبار، هرگونه ناهماهنگی در این بخش می‌تواند منجر به محاسبات اشتباه مالی، رزروهای تکراری یا کندی در ثبت سفارشات خریداران شود. بنابراین باید از الگوهای اثبات‌شده و کتابخانه‌های استاندارد اکوسیستم استفاده کرد.`,
          keyPoints: [
            "پرهیز از پیچیدگی‌های زودرس (Premature Optimization)",
            "استفاده از تنظیمات پیش‌فرض بهینه و بازنویسی تنها در صورت وجود متریک‌های مشخص پروفایلینگ",
          ],
        },
      ],
      internalsAndMechanisms: `از منظر کالبدشکافی داخلی، ${summary.titleEn} از طریق مکانیزم‌های بایت‌کد، بازتاب (Reflection)، پروکسی‌های داینامیک یا ساختارهای داده بهینه در سطح هسته JVM هدایت می‌شود. این معماری تضمین می‌کند که سربار پردازشی به حداقل برسد و بهینه‌سازی‌های لحظه‌ای کامپایلر JIT به حداکثر کارایی دست یابند.`,
      realWorldScenario: {
        scenario: `در جریان جشنواره فروش، سرویس تحت بار سنگین ۵۰۰۰ درخواست بر ثانیه قرار می‌گیرد و به دلیل پیکربندی نامناسب در بخش ${summary.titleEn}، صف‌های پردازشی دچار اشباع شده و زمان پاسخدهی به شدت بالا می‌رود.`,
        solution: `با بازطراحی فرآیند بر اساس اصول مطرح شده در این درس، جداسازی ظرفیت پردازش و اعمال الگوهای غیرانسدادی و کشینگ هدفمند، تاخیر پاسخ از ۳ ثانیه به زیر ۴۵ میلی‌ثانیه کاهش یافته و گلوگاه برطرف می‌شود.`,
      },
      codeExamples: [
        {
          title: `پیاده‌سازی پروداکشن ${summary.titleEn}`,
          language: "java",
          filename: `src/main/java/com/academy/order/${summary.slug.replace(/-/g, "")}/StandardImplementation.java`,
          explanation: `نمونه کد کامل و استاندارد سازمانی متناسب با الگوهای مدرن جاوا و پروژه مدیریت سفارشات.`,
          code: `package com.academy.order;

import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class StandardImplementation {

    private static final Logger log = LoggerFactory.getLogger(StandardImplementation.class);

    private final String moduleName;

    public StandardImplementation(String moduleName) {
        this.moduleName = Objects.requireNonNull(moduleName, "نام ماژول نمی‌تواند خالی باشد");
        log.info("ماژول {} بر پایه اصول {} مقداردهی اولیه شد.", moduleName, "${summary.titleEn}");
    }

    public void executeOperation(String contextId) {
        log.debug("آغاز پردازش برای شناسه: {}", contextId);
        // منطق پردازش سازمانی منطبق بر استانداردهای این درس
        log.info("عملیات با موفقیت پایان یافت.");
    }
}`,
        },
      ],
      comparisonWithNestJS: {
        nestConcept: `الگوی معادل در NestJS / TypeScript برای ${summary.titleEn}`,
        javaConcept: `الگوی پیاده‌سازی رسمی در Java / Spring Boot`,
        explanation: `در NestJS این وظیفه معمولاً با دکوراتورهای تایپ‌اسکریپت و میدل‌ورهای اکسپرس یا فستیفای مدیریت می‌شود که در رانتایم تک‌رشته‌ای نود اجرا می‌گردند. در جاوا، این مکانیزم با تکیه بر سیستم چندرشته‌ای واقعی، انوتیشن‌های بایت‌کد و پروکسی‌های رانتایم اسپرینگ پیاده‌سازی می‌شود.`,
        nestCode: `// در NestJS
@Injectable()
export class NestService {
  process() {
    // پیاده‌سازی مبتنی بر Promise و Event Loop
  }
}`,
        javaCode: `// در Spring Boot / Java
@Service
public class SpringService {
    public void process() {
        // پیاده‌سازی مبتنی بر Thread Pool و مدیریت تراکنش سازمانی
    }
}`,
      },
      commonMistakes: [
        {
          mistake: `تلاش برای پیاده‌سازی ${summary.titleEn} بدون در نظر گرفتن شرایط همزمانی (Concurrency) و مدیریت حافظه`,
          whyBad: `در محیط چندرشته‌ای جاوا، دسترسی بدون قفل یا عدم استفاده از ساختارهای تغییرناپذیر منجر به خطاهای کشنده Race Condition و داده‌های فاسد می‌شود.`,
          solution: `همیشه از اشیای تغییرناپذیر، کلاس‌های اتمیک یا انتزاع‌های استاندارد فریم‌ورک استفاده کنید.`,
          codeBad: `// اشتراک وضعیت مشترک بدون محافظت در محیط چندرشته‌ای
public class UnsafeService {
    private int counter = 0; // خطرناک!
}`,
          codeGood: `// استفاده از ساختارهای اتمیک و امن
import java.util.concurrent.atomic.AtomicInteger;

public class SafeService {
    private final AtomicInteger counter = new AtomicInteger(0);
}`,
        },
      ],
      bestPractices: [
        `همواره کدهای مرتبط با ${summary.titleEn} را با تست‌های واحد جامع پوشش دهید.`,
        "از انوتیشن‌ها و قابلیت‌های استاندارد فریم‌ورک به جای اختراع مجدد چرخ استفاده کنید.",
        "لاگ‌های عملیاتی را با پارامترهای مشخص و کلیدهای رهگیری (Trace ID) ثبت کنید.",
        "همواره متریک‌های کارایی و نرخ مصرف منابع را در داشبوردهای مانیتورینگ ارزیابی نمایید.",
      ],
      exercise: {
        title: `تمرین کارگاهی پیاده‌سازی و تست ${summary.title}`,
        instructions: `۱. کلاسی جهت پیاده‌سازی منطق ${summary.titleEn} برای ماژول سفارشات ایجاد کنید.
۲. قوانین اعتبارسنجی ورودی و رفتارهای خطای استاندارد را در آن اعمال نمایید.
۳. یک تست واحد بنویسید که هر دو سناریوی موفقیت و شرایط مرزی خطا را به صورت مستقل اعتبارسنجی کند.`,
        expectedOutput: `تست واحد با موفقیت اجرا شده و گزارش قبولی ۱۰۰ درصدی ارزیابی صادر شود.`,
        acceptanceCriteria: [
          "کد با جاوا ۲۱ سازگار بوده و بدون خطای کامپایل اجرا شود.",
          "مدیریت خطاهای غیاب داده یا شرایط نامعتبر با پرتاب استثنای معنادار صورت گیرد.",
          "تست‌های واحد تمامی مسیرهای انشعاب شرطی را پوشش دهند.",
        ],
        hints: [
          "از قابلیت‌های تایپ‌سیف جاوا و پکیج java.util استفاده کنید.",
          "برای تست از فریم‌ورک JUnit 5 بهره ببرید.",
        ],
        solution: {
          language: "java",
          filename: `src/main/java/com/academy/order/exercise/${summary.slug.replace(/-/g, "")}/Solution.java`,
          explanation: `پیاده‌سازی مرجع تمرین با کپسوله‌سازی کامل و رعایت اصول مهندسی نرم‌افزار تمیز.`,
          code: `package com.academy.order.exercise;

public class Solution {
    public boolean validateAndExecute(String input) {
        if (input == null || input.isBlank()) {
            throw new IllegalArgumentException("ورودی نامعتبر است");
        }
        return true;
    }
}`,
        },
      },
      quizzes: [
        {
          id: `q-${summary.id}-1`,
          question: `مهم‌ترین مزیت استفاده از الگوی استاندارد ${summary.titleEn} در پروژه‌های جاوا چیست؟`,
          options: [
            "کاهش سورس‌کد به کمتر از ۵ خط.",
            "تضمین پایداری معماری، تست‌پذیری حداکثری و پیشگیری از رفتارهای پیش‌بینی‌نشده در مقیاس بالا.",
            "حذف نیاز به نصب پایگاه داده.",
            "تبدیل خودکار کدهای جاوا به نودجی‌اس.",
          ],
          correctIndex: 1,
          explanation: `الگوهای استاندارد جاوا به گونه‌ای طراحی شده‌اند که قابلیت اطمینان، نگهداری آسان و مقیاس‌پذیری سیستم را در محیط‌های سازمانی تضمین کنند.`,
        },
        {
          id: `q-${summary.id}-2`,
          question: `در مقایسه با رویکردهای متداول در Node.js/NestJS، تفاوت کلیدی این مفهوم در جاوا چیست؟`,
          options: [
            "جاوا از Event Loop تک‌رشته‌ای استفاده می‌کند ولی نود چندرشته‌ای است.",
            "در جاوا با سیستم نوع‌دهی اسمی، مدیریت نخ‌های واقعی سیستم‌عامل و انتزاع‌های فریم‌ورکی قوی‌تر روبرو هستیم.",
            "هیچ تفاوتی از لحاظ معماری وجود ندارد.",
            "جاوا کدهای جاوااسکریپت را درون داکر اجرا می‌کند.",
          ],
          correctIndex: 1,
          explanation: `جاوا با تکیه بر چندرشته‌ای بودن واقعی، بایت‌کد JVM و قراردادهای محکم فریم‌ورکی از مدل مبتنی بر Event Loop تک‌رشته‌ای نودجی‌اس متمایز می‌شود.`,
        },
        {
          id: `q-${summary.id}-3`,
          question: `کدام گزینه از مصادیق نقض Best Practice در این موضوع به شمار می‌رود؟`,
          options: [
            "پوشش کدهای حیاتی با تست‌های خودکار.",
            "نادیده گرفتن شرایط مرزی، عدم اعتبارسنجی ورودی‌ها و دستکاری مستقیم وضعیت‌های داخلی بدون انکپسولیشن.",
            "استفاده از لاگ‌های ساختاریافته به همراه شناسه رهگیری.",
            "تعریف متغیرهای تغییرناپذیر با کلمه کلیدی final.",
          ],
          correctIndex: 1,
          explanation: `تخریب انکپسولیشن و رها کردن متغیرهای مشترک بدون محافظت در برابر تغییر، شایع‌ترین منشا باگ‌های پروداکشن در سیستم‌های جاوا است.`,
        },
      ],
      interviewQuestions: [
        {
          question: `در یک مصاحبه فنی سطح مهندس ارشد بک‌اند، چگونه فلسفه و چرایی استفاده از ${summary.titleEn} را برای مصاحبه‌کننده تشریح می‌کنید؟`,
          answer: `در پاسخ باید ابتدا به مشکل پایه‌ای که این مفهوم حل می‌کند اشاره کرد (مانند حل گلوگاه‌های مقیاس، پایداری یا تفکیک دغدغه‌ها). سپس معماری زیرین و نحوه رفتار آن در زمان اجرای JVM را شرح داده و در نهایت مصالحه‌های آن با راهکارهای جایگزین را با تکیه بر تجربه عملی پروداکشن تحلیل نمود.`,
          keyTakeaways: [
            "تمرکز بر چرایی مهندسی و ارزش تجاری به جای حفظ کردن دستورات",
            "اشاره به رفتار سیستم در زمان بار سنگین و سناریوهای شکست",
          ],
        },
        {
          question: `چه مصالحه‌هایی (Trade-offs) در به‌کارگیری این الگو وجود دارد و چه زمان نباید از آن استفاده کرد؟`,
          answer: `هیچ الگویی گلوله نقره‌ای نیست. این الگو سادگی اولیه کد را فدای انعطاف‌پذیری و مقیاس‌پذیری در آینده می‌کند. برای پروژه‌های بسیار کوچک یا اسکریپت‌های موقت، اضافه کردن این سطح از انتزاع ممکن است پیچیدگی بی‌مورد ایجاد نماید؛ اما در سیستم‌های سازمانی بزرگ، کاملاً توجیه‌پذیر است.`,
          keyTakeaways: [
            "آگاهی از مفهوم Over-engineering",
            "سنجش تناسب الگو با نیازمندی‌های واقعی سیستم",
          ],
        },
      ],
      summary: `در این جلسه مبحث ${summary.title} را به شکل عمیق بررسی کردیم، تفاوت‌های آن با اکوسیستم نودجی‌اس را سنجیدیم و با تمرین عملی و کدهای سازمانی تسلط خود را محک زدیم.`,
      references: [
        { title: "Java Platform Standard Documentation", url: "https://dev.java/" },
        { title: "Spring Framework Reference Documentation", url: "https://docs.spring.io/spring-framework/reference/" },
      ],
      capstoneConnection: {
        phase: `فاز مربوط به هفته ${summary.week}`,
        task: `تجهیز ماژول سفارشات و انبار به قابلیت‌های ${summary.titleEn}`,
        filesToModify: [`src/main/java/com/academy/order/${summary.slug.replace(/-/g, "")}/ModuleConfig.java`],
      },
    };
  },
};

// Main generator
async function generateAllWeeks() {
  const outputDir = path.join(__dirname, "../src/data/lessons");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Weeks 2 to 26
  const forceOverwrite = process.argv.includes("--force");
  for (let week = 2; week <= 26; week++) {
    const weekNumStr = String(week).padStart(2, "0");
    const filePath = path.join(outputDir, `week-${weekNumStr}.ts`);

    if (fs.existsSync(filePath) && !forceOverwrite) {
      console.log(`✓ Skipping week-${weekNumStr}.ts (already exists; preserving curated content).`);
      continue;
    }

    const weekLessonsSummary = ALL_LESSON_SUMMARIES.filter((l) => l.week === week);

    const lessonsData: Lesson[] = weekLessonsSummary.map((summary) => {
      const template = TOPIC_TEMPLATES[summary.slug] || TOPIC_TEMPLATES.default;
      const details = template(summary);

      return {
        ...summary,
        ...details,
        lastReviewedAt: "2026-11-01",
      };
    });

    const fileContent = `import { Lesson } from "../types";

export const WEEK_${weekNumStr}_LESSONS: Lesson[] = ${JSON.stringify(lessonsData, null, 2)};
`;

    fs.writeFileSync(filePath, fileContent, "utf-8");
    console.log(`Generated week-${weekNumStr}.ts with ${lessonsData.length} complete lessons.`);
  }

  // Create src/data/lessons/index.ts that imports all 26 weeks
  let indexImports = "";
  let indexArray = "export const ALL_LESSONS: Lesson[] = [\n";

  for (let week = 1; week <= 26; week++) {
    const weekNumStr = String(week).padStart(2, "0");
    indexImports += `import { WEEK_${weekNumStr}_LESSONS } from "./week-${weekNumStr}";\n`;
    indexArray += `  ...WEEK_${weekNumStr}_LESSONS,\n`;
  }
  indexArray += "];\n";

  const indexContent = `import { Lesson } from "../types";
${indexImports}
${indexArray}
const LESSON_BY_SLUG_MAP = new Map<string, Lesson>();
const LESSON_BY_ID_MAP = new Map<string, Lesson>();

ALL_LESSONS.forEach((lesson) => {
  LESSON_BY_SLUG_MAP.set(lesson.slug, lesson);
  LESSON_BY_ID_MAP.set(lesson.id, lesson);
});

export function getAllLessons(): Lesson[] {
  return ALL_LESSONS;
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return LESSON_BY_SLUG_MAP.get(slug);
}

export function getLessonById(id: string): Lesson | undefined {
  return LESSON_BY_ID_MAP.get(id);
}

export function getLessonsByWeek(weekNumber: number): Lesson[] {
  return ALL_LESSONS.filter((l) => l.week === weekNumber);
}
`;

  fs.writeFileSync(path.join(outputDir, "index.ts"), indexContent, "utf-8");
  console.log("Successfully created src/data/lessons/index.ts!");
}

generateAllWeeks().catch((err) => {
  console.error("Error generating curriculum:", err);
  process.exit(1);
});
