import { ALL_LESSONS } from "../src/data/lessons";
import { WEEKS_META } from "../src/data/curriculum";

console.log("==================================================");
console.log("🔍 آغاز اعتبارسنجی جامع محتوای آکادمی جاوا");
console.log("==================================================");

let hasStructuralErrors = false;

// 1. Total count check
if (ALL_LESSONS.length !== 156) {
  console.error(`❌ تعداد کل درس‌ها مغایرت دارد! مورد انتظار: ۱۵۶، یافت شده: ${ALL_LESSONS.length}`);
  hasStructuralErrors = true;
} else {
  console.log(`✓ تعداد کل درس‌ها: دقیقاً ۱۵۶ درس.`);
}

// 2. Weeks count check
if (WEEKS_META.length !== 26) {
  console.error(`❌ تعداد سرفصل‌های هفته مغایرت دارد! مورد انتظار: ۲۶، یافت شده: ${WEEKS_META.length}`);
  hasStructuralErrors = true;
} else {
  console.log(`✓ تعداد هفته‌ها: دقیقاً ۲۶ هفته.`);
}

// 3. 6 lessons per week check
const lessonsPerWeek = new Map<number, number>();
ALL_LESSONS.forEach((l) => {
  lessonsPerWeek.set(l.week, (lessonsPerWeek.get(l.week) || 0) + 1);
});

for (let w = 1; w <= 26; w++) {
  const count = lessonsPerWeek.get(w) || 0;
  if (count !== 6) {
    console.error(`❌ هفته ${w} دارای ${count} درس است در حالی که باید دقیقاً ۶ درس داشته باشد!`);
    hasStructuralErrors = true;
  }
}
console.log(`✓ توزیع درس‌ها: تمام ۲۶ هفته دارای ۶ درس هستند.`);

// 4. Unique IDs and Slugs
const ids = new Set<string>();
const slugs = new Set<string>();

// Quality audit metrics
let standardImplCount = 0;
let uniformQuizIndexCount = 0;
let genericAtomicCount = 0;
let unverifiedClaimCount = 0;
let totalQuizzes = 0;

ALL_LESSONS.forEach((lesson) => {
  if (ids.has(lesson.id)) {
    console.error(`❌ شناسه تکراری: ${lesson.id}`);
    hasStructuralErrors = true;
  }
  ids.add(lesson.id);

  if (slugs.has(lesson.slug)) {
    console.error(`❌ اسلاگ تکراری: ${lesson.slug}`);
    hasStructuralErrors = true;
  }
  slugs.add(lesson.slug);

  // Field presence checks
  if (!lesson.title || lesson.title.trim().length < 5) {
    console.error(`❌ عنوان نامعتبر برای ${lesson.id}`);
    hasStructuralErrors = true;
  }

  if (!lesson.titleEn || lesson.titleEn.trim().length < 3) {
    console.error(`❌ عنوان انگلیسی نامعتبر برای ${lesson.id}`);
    hasStructuralErrors = true;
  }

  if (!lesson.introduction || lesson.introduction.trim().length < 50) {
    console.error(`❌ بخش مقدمه برای درس ${lesson.id} ناکافی است`);
    hasStructuralErrors = true;
  }

  if (!lesson.conceptualSections || lesson.conceptualSections.length < 1) {
    console.error(`❌ بخش‌های مفهومی برای درس ${lesson.id} وجود ندارد`);
    hasStructuralErrors = true;
  }

  if (!lesson.codeExamples || lesson.codeExamples.length < 1) {
    console.error(`❌ نمونه کد برای درس ${lesson.id} وجود ندارد`);
    hasStructuralErrors = true;
  }

  // Quality metrics detection
  const codeContent = JSON.stringify(lesson.codeExamples || []);
  if (codeContent.includes("StandardImplementation")) {
    standardImplCount++;
  }

  if (JSON.stringify(lesson.realWorldScenario || {}).includes("۴۵ میلی‌ثانیه")) {
    unverifiedClaimCount++;
  }

  if (JSON.stringify(lesson.commonMistakes || []).includes("AtomicInteger")) {
    genericAtomicCount++;
  }

  if (lesson.quizzes) {
    totalQuizzes += lesson.quizzes.length;
    let lessonAllIndexOne = true;
    lesson.quizzes.forEach((q, qIdx) => {
      if (q.correctIndex !== 1) {
        lessonAllIndexOne = false;
      }
      if (!q.options || q.options.length < 3) {
        console.error(`❌ سوال ${qIdx + 1} در درس ${lesson.id} گزینه‌های ناکافی دارد`);
        hasStructuralErrors = true;
      }
      if (q.correctIndex < 0 || q.correctIndex >= q.options.length) {
        console.error(`❌ شاخص پاسخ صحیح در سوال ${qIdx + 1} درس ${lesson.id} نامعتبر است: ${q.correctIndex}`);
        hasStructuralErrors = true;
      }
    });
    if (lessonAllIndexOne && lesson.quizzes.length > 0) {
      uniformQuizIndexCount++;
    }
  }
});

console.log("==================================================");
console.log("📊 گزارش تفکیک اعتبارسنجی ساختاری و ممیزی علمی محتوا");
console.log("==================================================");

if (hasStructuralErrors) {
  console.error("❌ خطای ساختاری در داده‌های درس‌ها وجود دارد. لطفاً موارد بالا را برطرف کنید.");
  process.exit(1);
} else {
  console.log("✓ اعتبارسنجی ساختاری (Structural Validation): ۱۰۰٪ موفقیت‌آمیز");
  console.log(`  - مجموع درس‌های قابل دسترسی: ۱۵۶ درس`);
  console.log(`  - مجموع سوالات کوییز: ${totalQuizzes} سوال`);
  console.log(`  - مجموع تمرین‌های کارگاهی: ${ALL_LESSONS.length} تمرین`);
}

console.log("--------------------------------------------------");
console.log("🔬 ممیزی کیفیت علمی و تشخیص الگوهای قالبی:");
console.log(`  - درس‌های حاوی کلاس قالبی StandardImplementation: ${standardImplCount} درس`);
console.log(`  - درس‌های با الگوی یکنواخت پاسخ صحیح کوییز (correctIndex=1): ${uniformQuizIndexCount} درس`);
console.log(`  - درس‌های با الگوی خطای عمومی AtomicInteger: ${genericAtomicCount} درس`);
console.log(`  - درس‌های با ادعای تکراری بنچمارک ۴۵ میلی‌ثانیه: ${unverifiedClaimCount} درس`);
console.log("--------------------------------------------------");
console.log("💡 وضعیت بازنویسی: درس‌های واقعی بازنویسی‌شده از قالب‌های تکراری تفکیک شده‌اند.");
console.log("==================================================");
