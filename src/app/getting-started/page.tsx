import Link from 'next/link';
import { CodeBlock } from '@/components/lesson/CodeBlock';

export default function GettingStartedPage() {
  return <article className="max-w-3xl mx-auto space-y-8 pb-12">
    <header className="space-y-3">
      <p className="text-primary text-sm font-semibold">قبل از جلسهٔ اول · حدود ۱۰ دقیقه</p>
      <h1 className="text-3xl font-bold">از تجربهٔ Node به Java، با تمرین کوتاه</h1>
      <p className="text-muted-foreground leading-loose">لازم نیست برنامه‌نویسی را از اول یاد بگیری. این مسیر روی تفاوت زبان، JVM، قراردادهای Spring و رفتار واقعی دیتابیس تمرکز دارد. هدف هر روز یک تصمیم درست و یک تمرین قابل بررسی است.</p>
    </header>
    <section className="space-y-3"><h2 className="text-xl font-bold">۱. محیط را آماده کن</h2>
      <p className="leading-loose">برای مطالعه فقط همین اپ محلی کافی است. برای تمرین Java، یک JDK 25 و IDE مانند IntelliJ IDEA یا VS Code دارای افزونه Java لازم داری. Docker Desktop برای تست PostgreSQL و سرویس‌های تمرینی استفاده می‌شود. نصب و اولین دریافت وابستگی‌ها اینترنت می‌خواهد.</p>
      <CodeBlock code={'java --version\njavac --version\ndocker compose version'} language="bash" />
      <p className="text-sm text-muted-foreground">هر دو فرمان Java باید نسخهٔ ۲۵ نشان دهند. در macOS با /usr/libexec/java_home -V می‌توان JDKهای نصب‌شده را دید. راهنمای نصب رسمی: <a className="text-primary underline" href="https://adoptium.net/installation/" target="_blank" rel="noopener noreferrer">Eclipse Temurin ↗</a></p>
    </section>
    <section className="space-y-3"><h2 className="text-xl font-bold">۲. ریتم جلسه را انتخاب کن</h2>
      <ul className="list-disc list-inside leading-loose space-y-2"><li>۵ دقیقه اصل موضوع و نمونه را بخوان.</li><li>۱۵ دقیقه تمرین را در پروژه یا فایل کوچک خودت انجام بده.</li><li>۵ دقیقه سؤال را پاسخ بده و نتیجهٔ تست یا نکتهٔ مبهم را یادداشت کن.</li><li>اگر تمرین تمام نشد، همان جلسه را ادامه بده؛ سرعت تقویمی معیار تسلط نیست.</li></ul>
      <p className="text-muted-foreground leading-loose">شش درس اول کمی مفصل‌ترند. از هفتهٔ دوم جلسه‌ها متمرکزند؛ منابع و مقایسهٔ Node اختیاری‌اند. «خوانده‌شده»، «تمرین انجام‌شده» و «پاسخ درست» سه شاهد متفاوت‌اند.</p>
    </section>
    <section className="space-y-3"><h2 className="text-xl font-bold">سه آزمایش آماده، بدون وابستگی بیرونی</h2>
      <p className="leading-loose">فایل را دریافت کن و با JDK 25 اجرا کن؛ در صورت نقض شرط، برنامه خطا می‌دهد. پس از نصب JDK برای این آزمایش‌ها اینترنت لازم نیست.</p>
      <ul className="space-y-2 text-primary underline underline-offset-4"><li><a download href="/practice/CoreLab.java">CoreLab: ژنریک، کپی دفاعی، پول و Clock</a></li><li><a download href="/practice/InventoryLab.java">InventoryLab: رقابت رزرو موجودی در یک JVM</a></li><li><a download href="/practice/AsyncLab.java">AsyncLab: Virtual Thread و محدودیت ظرفیت</a></li></ul>
      <CodeBlock code="java CoreLab.java" language="bash" />
    </section>
    <section className="space-y-3"><h2 className="text-xl font-bold">۳. سطح شروع را بسنج</h2>
      <p className="leading-loose">اگر این‌ها برایت تازه‌اند، از هفتهٔ اول برو: توضیح تفاوت equals و ==، نوشتن کلاس با invariant، خواندن stack trace، اجرای تست با Maven، و توضیح اینکه چرا volatile برای count++ کافی نیست. در غیر این صورت از نقشه راه موضوع موردنیاز را انتخاب کن؛ پیش‌نیاز را حذف نکن.</p>
    </section>
    <section className="rounded-xl border border-border p-5 space-y-3"><h2 className="text-xl font-bold">نسخه‌ها و حدود مثال‌ها</h2>
      <p className="leading-loose">مبنای زبان Java 25 LTS است. پروژهٔ همراه از شاخهٔ سازگار Spring Boot 3.5 استفاده می‌کند؛ این شاخه جدیدترین major نیست. تفاوت نسخه‌های اصلی را از مستندات همان نسخه دنبال کن. قطعه‌های آموزشی هر درس، پروژهٔ مستقل production نیستند و ممکن است به import، مدل دامنه و وابستگی نیاز داشته باشند.</p>
      <p className="text-sm text-muted-foreground">یادداشت و پیشرفت در مرورگر همین دستگاه ذخیره می‌شود؛ برای انتقال به مک یا مرورگر دیگر از بخش مرور، فایل پشتیبان بگیر. لینک‌های بیرونی و دانلود ابزارها آفلاین نیستند.</p>
    </section>
    <div className="flex flex-wrap gap-3"><Link className="bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold" href="/lessons/jdk-jre-jvm-project-structure">شروع جلسهٔ اول ←</Link><Link className="border border-border px-5 py-3 rounded-lg" href="/roadmap">انتخاب از نقشه راه</Link></div>
  </article>;
}
