import fs from 'node:fs';
import { WEEK_01_LESSONS } from '../src/data/lessons/week-01';

function revise(value: unknown): unknown {
  if (typeof value === 'string') return value
    .replaceAll('Java 21', 'Java 25').replaceAll('جاوا ۲۱', 'جاوا ۲۵')
    .replaceAll('Spring Boot 3.3', 'Spring Boot 3.5')
    .replaceAll('/javase/21/', '/javase/25/').replaceAll('/se21/', '/se25/')
    .replace('برخلاف زبان‌های تفسیری سنتی مانند جاوااسکریپت خالص که مدام باید کد را خط به خط پارس کنند،', 'مشابه موتور V8 که از JIT و بهینه‌سازی پویا استفاده می‌کند،')
    .replace('متد main نقطه ورود برنامه است که همیشه به صورت public static void main با آرگومان رشته‌ای تعریف می‌شود.', 'شکل کلاسیک و سازگار نقطه ورود، public static void main(String[] args) است. Java 25 شکل‌های ساده‌تر instance main و compact source files نیز دارد؛ برای پروژه Maven اینجا شکل کلاسیک را تمرین می‌کنیم.')
    .replace('اگر پکیج com.academy.order را تعریف کنید ولی فایل را مستقیماً داخل src قرار دهید، کامپایلر با خطای ناسازگاری پکیج متوقف خواهد شد.', 'ساختار نامنطبق با package، کشف خودکار سورس و ابزارهای build/IDE را مختل می‌کند؛ javac در بعضی حالت‌های فراخوانی مستقیم فایل را کامپایل می‌کند. ساختار استاندارد Maven را رعایت کن.');
  if (Array.isArray(value)) return value.map(revise);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, revise(item)]));
  return value;
}
const lessons = WEEK_01_LESSONS.map(lesson => ({ ...revise(lesson) as typeof lesson, lastReviewedAt: '2026-11-03' }));
const oop = lessons.find(lesson => lesson.id === 'lesson-003')!;
if (!oop.conceptualSections.some(section => section.title === 'نوع مقدار، ارجاع و pass-by-value')) oop.conceptualSections.push({
  title: 'نوع مقدار، ارجاع و pass-by-value',
  content: 'Java همیشه pass-by-value است: برای primitive خود مقدار و برای object مقدار reference کپی می‌شود. تغییر فیلد object از متد ممکن است دیده شود، اما انتساب reference پارامتر به object جدید، متغیر caller را عوض نمی‌کند. Integer wrapper می‌تواند null باشد؛ unboxing آن NullPointerException می‌دهد. == روی objectها هویت reference را می‌سنجد؛ برای برابری مقدار از قرارداد equals استفاده کن. cache برخی wrapperها ممکن است نتیجه مقایسه == را گمراه‌کننده کند؛ به آن تکیه نکن.',
});
const maven = lessons.find(lesson => lesson.id === 'lesson-002')!;
for (const example of maven.codeExamples) if (example.code.includes('boolean isMavenConfigured = true')) {
  example.code = 'import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\nclass ToolchainTest {\n    @Test void runsOnTheExpectedJdk() {\n        assertEquals(25, Runtime.version().feature());\n    }\n}';
  example.explanation = 'این smoke test فقط JDK اجرای تست را بررسی می‌کند، نه قواعد دامنه یا کل پیکربندی Maven را. نام فایل ToolchainTest.java باشد و وابستگی JUnit در پروژه فعال شود.';
}
fs.writeFileSync('src/data/lessons/week-01.ts', `import { Lesson } from "../types";\n\nexport const WEEK_01_LESSONS: Lesson[] = ${JSON.stringify(lessons, null, 2)};\n`);
