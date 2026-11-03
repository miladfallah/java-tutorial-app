export interface LessonQualityAudit {
  lessonId: string;
  slug: string;
  week: number;
  day: number;
  title: string;
  titleEn: string;
  targetObjective: string;
  prerequisites: string[];
  explanationQuality: "High" | "Medium" | "TemplateFallback";
  codeRelevance: "High" | "Medium" | "GenericTemplate";
  runnability: "Java 25 LTS" | "Java 21 LTS" | "PendingRefactor";
  exerciseQuality: "Realistic" | "Generic";
  quizQuality: "Balanced" | "UniformIndexOne";
  concurrencyModel: "RowLocking" | "ThreadSafe" | "GenericAtomic";
  benchmarkClaim: "Accurate" | "Unverified45ms";
  officialReference: string;
  rewriteStatus: "Handcrafted" | "Verified" | "InRewriteQueue";
}

export const CURRICULUM_QUALITY_AUDIT: LessonQualityAudit[] = [
  // Week 1: Java Core & Tooling (Handcrafted & Production Verified)
  {
    lessonId: "lesson-001",
    slug: "jdk-jre-jvm-project-structure",
    week: 1,
    day: 1,
    title: "شناخت JDK، JRE، JVM و ساختار استاندارد پروژه‌های جاوا",
    titleEn: "JDK, JRE, JVM and Java Project Structure",
    targetObjective: "درک معماری دو مرحله‌ای بایت‌کد و JVM در برابر موتور V8، ساختار استاندارد Maven و Classpath",
    prerequisites: ["آشنایی با اجرای برنامه‌های سرور", "مفاهیم اولیه کامپایل و مفسر"],
    explanationQuality: "High",
    codeRelevance: "High",
    runnability: "Java 25 LTS",
    exerciseQuality: "Realistic",
    quizQuality: "Balanced",
    concurrencyModel: "ThreadSafe",
    benchmarkClaim: "Accurate",
    officialReference: "https://dev.java/",
    rewriteStatus: "Handcrafted",
  },
  {
    lessonId: "lesson-002",
    slug: "java-type-system-vs-typescript",
    week: 1,
    day: 2,
    title: "سیستم انواع جاوا در برابر تایپ‌اسکریپت: Primitives و Wrappers",
    titleEn: "Java Type System vs TypeScript: Primitives and Wrappers",
    targetObjective: "تفاوت Nominal Typing و ساختارهای حافظه Primitives در برابر Type Erasure تایپ‌اسکریپت",
    prerequisites: ["آشنایی با تایپ‌های تایپ‌اسکریپت"],
    explanationQuality: "High",
    codeRelevance: "High",
    runnability: "Java 25 LTS",
    exerciseQuality: "Realistic",
    quizQuality: "Balanced",
    concurrencyModel: "ThreadSafe",
    benchmarkClaim: "Accurate",
    officialReference: "https://docs.oracle.com/en/java/",
    rewriteStatus: "Handcrafted",
  },
  {
    lessonId: "lesson-003",
    slug: "maven-lifecycle-dependencies-pom",
    week: 1,
    day: 3,
    title: "مدیریت وابستگی‌ها و چرخه حیات با Maven در برابر npm/pnpm",
    titleEn: "Maven Dependency Management and Build Lifecycle vs npm",
    targetObjective: "مدیریت ساختار pom.xml، فازهای چرخه بیلد Maven و حل تداخل وابستگی‌ها",
    prerequisites: ["تجربه کار با package.json و npm"],
    explanationQuality: "High",
    codeRelevance: "High",
    runnability: "Java 25 LTS",
    exerciseQuality: "Realistic",
    quizQuality: "Balanced",
    concurrencyModel: "ThreadSafe",
    benchmarkClaim: "Accurate",
    officialReference: "https://maven.apache.org/guides/",
    rewriteStatus: "Handcrafted",
  },
  {
    lessonId: "lesson-004",
    slug: "oop-in-java-vs-typescript",
    week: 1,
    day: 4,
    title: "شی‌گرایی در جاوا: انکپسولیشن صلب، وراثت و اینترفیس‌ها",
    titleEn: "OOP in Java vs TypeScript: Encapsulation, Inheritance, Interfaces",
    targetObjective: "تفاوت اینترفیس‌های زمان اجرای JVM با ساختارهای صوری تایپ‌اسکریپت و انکپسولیشن واقعی",
    prerequisites: ["کلاس‌ها در جاوااسکریپت و تایپ‌اسکریپت"],
    explanationQuality: "High",
    codeRelevance: "High",
    runnability: "Java 25 LTS",
    exerciseQuality: "Realistic",
    quizQuality: "Balanced",
    concurrencyModel: "ThreadSafe",
    benchmarkClaim: "Accurate",
    officialReference: "https://dev.java/learn/oop/",
    rewriteStatus: "Handcrafted",
  },
  {
    lessonId: "lesson-005",
    slug: "order-product-domain-models",
    week: 1,
    day: 5,
    title: "مدل‌سازی دامنه سفارش و کالا: ساختار اشیا و کپسوله‌سازی قوانین تجاری",
    titleEn: "Order and Product Domain Models: Encapsulation and Business Rules",
    targetObjective: "طراحی اشیای دامنه غنی (Rich Domain Objects) به جای مدل‌های کم‌خون (Anemic Models)",
    prerequisites: ["آشنایی با اصول DDD و طراحی دامنه"],
    explanationQuality: "High",
    codeRelevance: "High",
    runnability: "Java 25 LTS",
    exerciseQuality: "Realistic",
    quizQuality: "Balanced",
    concurrencyModel: "ThreadSafe",
    benchmarkClaim: "Accurate",
    officialReference: "https://martinfowler.com/bliki/AnemicDomainModel.html",
    rewriteStatus: "Handcrafted",
  },
  {
    lessonId: "lesson-006",
    slug: "java-collections-framework-in-depth",
    week: 1,
    day: 6,
    title: "کالبدشکافی فریم‌ورک کالکشن‌های جاوا (List, Set, Map)",
    titleEn: "Java Collections Framework in Depth: List, Set, Map",
    targetObjective: "قرارداد equals و hashCode، نحوه عملکرد سطل‌های HashMap و تفاوت آن با Map در JS",
    prerequisites: ["آشنایی با آرایه‌ها و آبجکت‌های جاوااسکریپت"],
    explanationQuality: "High",
    codeRelevance: "High",
    runnability: "Java 25 LTS",
    exerciseQuality: "Realistic",
    quizQuality: "Balanced",
    concurrencyModel: "ThreadSafe",
    benchmarkClaim: "Accurate",
    officialReference: "https://dev.java/learn/api/collections-framework/",
    rewriteStatus: "Handcrafted",
  },
];
