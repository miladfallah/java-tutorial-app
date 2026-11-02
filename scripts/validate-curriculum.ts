import { ALL_LESSONS } from "../src/data/lessons";
import { WEEKS_META } from "../src/data/curriculum";

console.log("==================================================");
console.log("🔍 آغاز اعتبارسنجی جامع محتوای آکادمی جاوا");
console.log("==================================================");

let hasErrors = false;

// 1. Total count check
if (ALL_LESSONS.length !== 156) {
  console.error(`❌ تعداد کل درس‌ها مغایرت دارد! مورد انتظار: ۱۵۶، یافت شده: ${ALL_LESSONS.length}`);
  hasErrors = true;
} else {
  console.log(`✓ تعداد کل درس‌ها دقیقاً ۱۵۶ درس است.`);
}

// 2. Weeks check
if (WEEKS_META.length !== 26) {
  console.error(`❌ تعداد سرفصل‌های هفته مغایرت دارد! مورد انتظار: ۲۶، یافت شده: ${WEEKS_META.length}`);
  hasErrors = true;
} else {
  console.log(`✓ تعداد هفته‌ها دقیقاً ۲۶ هفته است.`);
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
    hasErrors = true;
  }
}
console.log(`✓ تمام ۲۶ هفته دارای دقیقاً ۶ درس اختصاصی هستند.`);

// 4. Unique IDs and Slugs
const ids = new Set<string>();
const slugs = new Set<string>();

ALL_LESSONS.forEach((lesson) => {
  if (ids.has(lesson.id)) {
    console.error(`❌ شناسه تکراری: ${lesson.id}`);
    hasErrors = true;
  }
  ids.add(lesson.id);

  if (slugs.has(lesson.slug)) {
    console.error(`❌ اسلاگ تکراری: ${lesson.slug}`);
    hasErrors = true;
  }
  slugs.add(lesson.slug);

  // 5. Check mandatory educational fields
  if (!lesson.title || lesson.title.trim().length < 5) {
    console.error(`❌ عنوان نامعتبر برای ${lesson.id}`);
    hasErrors = true;
  }

  if (!lesson.titleEn || lesson.titleEn.trim().length < 3) {
    console.error(`❌ عنوان انگلیسی نامعتبر برای ${lesson.id}`);
    hasErrors = true;
  }

  if (!lesson.introduction || lesson.introduction.trim().length < 50) {
    console.error(`❌ بخش مقدمه برای درس ${lesson.id} ناکافی است`);
    hasErrors = true;
  }

  if (!lesson.conceptualSections || lesson.conceptualSections.length < 1) {
    console.error(`❌ بخش‌های مفهومی برای درس ${lesson.id} وجود ندارد`);
    hasErrors = true;
  }

  if (!lesson.codeExamples || lesson.codeExamples.length < 1) {
    console.error(`❌ نمونه کد برای درس ${lesson.id} وجود ندارد`);
    hasErrors = true;
  }

  if (!lesson.exercise || !lesson.exercise.solution || !lesson.exercise.solution.code) {
    console.error(`❌ تمرین یا راهکار مرجع برای درس ${lesson.id} ناقص است`);
    hasErrors = true;
  }

  // 6. Quizzes: at least 3 with valid options and correctIndex
  if (!lesson.quizzes || lesson.quizzes.length < 3) {
    console.error(`❌ درس ${lesson.id} کمتر از ۳ سوال کوییز دارد! (تعداد: ${lesson.quizzes?.length || 0})`);
    hasErrors = true;
  } else {
    lesson.quizzes.forEach((q, qIdx) => {
      if (!q.options || q.options.length < 3) {
        console.error(`❌ سوال ${qIdx + 1} در درس ${lesson.id} گزینه‌های ناکافی دارد`);
        hasErrors = true;
      }
      if (q.correctIndex < 0 || q.correctIndex >= q.options.length) {
        console.error(`❌ شاخص پاسخ صحیح در سوال ${qIdx + 1} درس ${lesson.id} نامعتبر است: ${q.correctIndex}`);
        hasErrors = true;
      }
      if (!q.explanation || q.explanation.trim().length < 10) {
        console.error(`❌ توضیح پاسخ در سوال ${qIdx + 1} درس ${lesson.id} ناقص است`);
        hasErrors = true;
      }
    });
  }

  // 7. Comparison with NestJS
  if (!lesson.comparisonWithNestJS || !lesson.comparisonWithNestJS.explanation) {
    console.error(`❌ مقایسه با NestJS برای درس ${lesson.id} وجود ندارد`);
    hasErrors = true;
  }
});

console.log("==================================================");
if (hasErrors) {
  console.error("❌ اعتبارسنجی محتوا با خطا مواجه شد. لطفاً مشکلات بالا را برطرف کنید.");
  process.exit(1);
} else {
  console.log("🎉 تبریک! تمامی ۱۵۶ درس با بالاترین استانداردهای کیفیت تایید شدند.");
  console.log("✓ ۱۵۶ درس یکتا و بدون تکرار");
  console.log("✓ ۲۶ هفته کامل (هر هفته ۶ درس)");
  console.log(`✓ مجموع سوالات کوییز تخصصی: ${ALL_LESSONS.reduce((acc, l) => acc + l.quizzes.length, 0)} سوال`);
  console.log(`✓ مجموع تمرین‌های کارگاهی با راهکار: ${ALL_LESSONS.length} تمرین`);
  console.log("==================================================");
}
