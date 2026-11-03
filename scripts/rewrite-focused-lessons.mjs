import fs from 'node:fs';
import { focusedLessons } from './focused-lessons.mjs';

const content = new Map(focusedLessons.map(row => [row[0], row]));
if (content.size !== 150) throw new Error('Every lesson 7–156 must have an authored note');
const references = {
  2: 'https://dev.java/learn/generics/', 3: 'https://dev.java/learn/records/',
  4: 'https://docs.oracle.com/en/java/javase/25/core/concurrency.html',
  5: 'https://docs.spring.io/spring-boot/3.5/reference/features/external-config.html',
  6: 'https://docs.spring.io/spring-framework/reference/web/webmvc.html',
  7: 'https://docs.spring.io/spring-data/jpa/reference/repositories.html',
  8: 'https://docs.spring.io/spring-framework/reference/core/aop.html',
  9: 'https://docs.spring.io/spring-data/jpa/reference/jpa/entity-persistence.html',
  10: 'https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html',
  11: 'https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html',
  12: 'https://www.postgresql.org/docs/17/ddl-constraints.html',
  13: 'https://docs.spring.io/spring-security/reference/servlet/architecture.html',
  14: 'https://docs.junit.org/5.11.4/user-guide/',
  15: 'https://java.testcontainers.org/modules/databases/postgres/',
  16: 'https://resilience4j.readme.io/docs/circuitbreaker',
  17: 'https://www.rabbitmq.com/docs/confirms', 18: 'https://www.rabbitmq.com/docs/reliability',
  19: 'https://redis.io/docs/latest/develop/',
  20: 'https://docs.oracle.com/en/java/javase/25/core/virtual-threads.html',
  21: 'https://www.postgresql.org/docs/17/transaction-iso.html',
  22: 'https://docs.spring.io/spring-modulith/reference/fundamentals.html',
  23: 'https://docs.micrometer.io/micrometer/reference/concepts.html',
  24: 'https://docs.docker.com/build/building/multi-stage/',
  25: 'https://docs.spring.io/spring-boot/3.5/reference/web/graceful-shutdown.html',
  26: 'https://dev.java/learn/',
};
const bridges = {
  2: 'در TypeScript تایپ‌ها هنگام اجرا حذف می‌شوند؛ قرارداد کامپایل جاوا هم جای validation ورودی را نمی‌گیرد. به API و نوع خطای مثال دقت کن.',
  3: 'با تجربه TypeScript، destructuring یا readonly را با immutability عمیق یکی نگیر. برابری، واحد پول و مدل زمان در Java قراردادهای صریح دارند.',
  4: 'Event Loop اجرای callbackهای JavaScript را زمان‌بندی می‌کند؛ libuv و Worker Threads نیز وجود دارند. در Java state یک singleton می‌تواند همزمان از چند thread لمس شود.',
  5: 'Constructor injection در Nest آشناست؛ تفاوت مهم اینجا scope هر ApplicationContext و عبور از proxyهای Spring است. annotation فقط با زیرساخت فعال معنا دارد.',
  6: 'Controller/DTO در Nest مشابهت دارند، اما Bean Validation و زنجیره Servlet قرارداد خود را دارند. status و body را از قواعد تجاری مستقل طراحی کن.',
  7: 'مانند providerها و repositoryهای Nest، dependency direction مهم‌تر از نام پوشه است. service جاوا می‌تواند همزمان توسط چند درخواست استفاده شود.',
  8: 'Filter/Interceptor و decoratorهای Nest را یک‌به‌یک معادل proxy Spring نگیر. برای idempotency در هر دو اکوسیستم، حافظه یک process کافی نیست.',
  9: 'Entityهای JPA مانند objectهای معمول یا DTOهای TypeScript نیستند؛ managed/detached بودن و session روی رفتار query و write اثر دارد.',
  10: 'مانند ORMهای Node، SQL واقعی را ببین. تفاوت JPA این است که persistence context و lazy proxy می‌توانند query را در زمان دسترسی بعدی اجرا کنند.',
  11: 'قفل Node در یک process هم مشکل چند instance را حل نمی‌کند. در Spring مرز transaction معمولاً با proxy و thread فعلی مرتبط است، نه کل زنجیره Promise دلخواه.',
  12: 'قواعد SQL و ظرفیت DB در هر دو پشته مشترک‌اند؛ تفاوت اصلی در مدیریت context، pool و migration است، نه قدرت جادویی زبان Java.',
  13: 'Guard و Passport در Nest آشنا هستند؛ در Spring زنجیره filter و method security را جدا بشناس. احراز هویت معتبر در هیچ‌کدام جای کنترل مالکیت را نمی‌گیرد.',
  14: 'تجربه Jest را به طراحی تست منتقل کن، اما تفاوت JUnit lifecycle، Mockito و context Spring را بشناس. mock هیچ‌کدام رفتار DB را اثبات نمی‌کند.',
  15: 'همان اصل integration test در Node برقرار است: dependency واقعی برای قرارداد واقعی. تراکنش Spring معمولاً به thread محدود است؛ rollback تست را سراسری فرض نکن.',
  16: 'Promise timeout در Node نیز ممکن است کار زیرین را ادامه دهد. در هر دو پشته deadline، cancellation، retry امن و ظرفیت downstream باید مستقل طراحی شوند.',
  17: 'قرارداد تحویل broker مستقل از زبان client است. در Spring AMQP به تنظیمات ack/confirm container دقت کن؛ API publish به تنهایی اثبات پردازش نیست.',
  18: 'Outbox و dedup در Nest و Spring همان مرز DB/broker را حل می‌کنند؛ annotation تراکنش Spring، broker مستقل را خودبه‌خود عضو commit نمی‌کند.',
  19: 'دانش Redis در Node منتقل می‌شود؛ annotationهای Spring فقط مسیر اتصال به cache را ساده می‌کنند، نه invalidation و consistency را.',
  20: 'CompletableFuture معادل کامل Promise نیست و Virtual Thread هم Event Loop نیست. blocking، executor، context و cancellation هرکدام قرارداد جدا دارند.',
  21: 'Timeout، duplicate و partition مستقل از زبان‌اند. هیچ frameworkی بدون طراحی state و قرارداد شکست، consistency توزیع‌شده نمی‌دهد.',
  22: 'تجربه معماری Node را حفظ کن؛ تغییر زبان دلیل کافی برای microservices بیشتر نیست. معیار انتخاب، نیاز دامنه، ظرفیت و هزینه عملیات است.',
  23: 'مفاهیم log/metric/trace مشترک‌اند؛ در Spring ابزارهایی مثل Micrometer اتصال را ساده می‌کنند. داده حساس و cardinality در هر پشته مهم است.',
  24: 'Docker و CI آشنا هستند؛ تفاوت اینجاست که artifact Java یک JAR و runtime یک JVM با نیاز حافظه و signal مشخص است.',
  25: 'مهارت عملیات Node منتقل می‌شود؛ برای Java به heap/native memory، GC، thread و زمان drain نیز نگاه کن. با شواهد تغییر بده، نه حدس.',
  26: 'در پاسخ‌ها تجربه واقعی Node را نقطه شروع قرار بده و تفاوت Java را با مثال توضیح بده؛ برتری مطلق یک پشته را ادعا نکن.',
};

for (let week = 2; week <= 26; week++) {
  const filename = `src/data/lessons/week-${String(week).padStart(2, '0')}.ts`;
  const raw = fs.readFileSync(filename, 'utf8');
  const oldLessons = JSON.parse(raw.slice(raw.indexOf('= [') + 2, raw.lastIndexOf(']') + 1));
  const lessons = oldLessons.map(old => {
    const num = Number(old.id.slice(-3));
    const row = content.get(num);
    if (!row) throw new Error(`Missing authored content: ${old.id}`);
    const [, explanation, sample, exercise, quiz, pitfall] = row;
    const match = sample.match(/^(bash|sql|yaml|json|text|http|promql|markdown|javascript|dockerfile):/);
    const language = match?.[1] || 'java';
    const code = match ? sample.slice(match[0].length) : sample;
    const [question, correct, ...distractors] = quiz;
    const correctIndex = num % 3;
    const options = [...distractors];
    options.splice(correctIndex, 0, correct);
    return {
      ...old,
      estimatedMinutes: 25,
      prerequisites: [week === 2 ? 'مدل کلاس، متد و کالکشن‌های هفته اول' : `مفاهیم و تمرین‌های هفته ${week - 1}`, 'توانایی خواندن کد TypeScript و نوشتن تست بک‌اند'],
      learningObjectives: [question.replace(/[؟?]$/, ''), exercise],
      whyItMatters: pitfall,
      introduction: old.description,
      conceptualSections: [{ title: 'مدل ذهنی و رفتار واقعی', content: explanation }],
      internalsAndMechanisms: undefined,
      realWorldScenario: { scenario: exercise, solution: pitfall },
      codeExamples: [{ title: 'نمونهٔ آموزشی متمرکز', language, code, explanation: 'این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست.' }],
      comparisonWithNestJS: { nestConcept: 'تجربهٔ Node.js / NestJS', javaConcept: old.titleEn, explanation: bridges[week] },
      commonMistakes: [{ mistake: pitfall, whyBad: explanation, solution: correct }],
      bestPractices: [pitfall, exercise],
      exercise: {
        title: 'تمرین اصلی · حدود ۱۵ دقیقه', instructions: exercise,
        acceptanceCriteria: [exercise, 'نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست.'],
        hints: [pitfall],
        solution: { code, language, explanation: `این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ${correct}. ${pitfall}` },
      },
      quizzes: [{ id: `focused-v2-${old.id}`, question, options, correctIndex, explanation: `${correct}. ${explanation}` }],
      interviewQuestions: [{ question: `بدون نگاه‌کردن به متن پاسخ بده: ${question}`, answer: `${correct}. ${pitfall}` }],
      summary: explanation,
      references: [{ title: 'مستندات رسمی برای ادامهٔ اختیاری', url: references[week] }],
      lastReviewedAt: '2026-11-03',
      contentVersion: 2,
      capstoneConnection: undefined,
    };
  });
  fs.writeFileSync(filename, `import { Lesson } from "../types";\n\nexport const WEEK_${String(week).padStart(2,'0')}_LESSONS: Lesson[] = ${JSON.stringify(lessons, null, 2)};\n`);
}
console.log('Rewrote 150 focused lessons; IDs and slugs preserved. No generic fallback is available.');

const cards = [];
for (let week = 1; week <= 26; week++) {
  const raw = fs.readFileSync(`src/data/lessons/week-${String(week).padStart(2,'0')}.ts`, 'utf8');
  const lessons = JSON.parse(raw.slice(raw.indexOf('= [') + 2, raw.lastIndexOf(']') + 1));
  for (const lesson of lessons) {
    const quiz = lesson.quizzes[0];
    cards.push({ id: `fc-${lesson.id}`, category: lesson.category, question: quiz.question,
      answer: quiz.options[quiz.correctIndex], explanation: quiz.explanation, keyPoints: [] });
  }
}
fs.writeFileSync('src/data/flashcards.ts', `export interface Flashcard { id: string; category: string; question: string; answer: string; explanation: string; keyPoints: string[]; }\n\nexport const FLASHCARDS: Flashcard[] = ${JSON.stringify(cards, null, 2)};\n`);
