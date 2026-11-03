import { Lesson } from "../types";

export const WEEK_24_LESSONS: Lesson[] = [
  {
    "id": "lesson-139",
    "slug": "docker-multi-stage-builds",
    "week": 24,
    "day": 1,
    "title": "بهینه‌سازی حداکثری ایمیج‌های جاوا با ساخت چندمرحله‌ای (Multi-stage Docker)",
    "titleEn": "Docker Multi-stage Builds",
    "description": "تفکیک مرحله کامپایل از محیط اجرای نهایی، استفاده از Distroless یا Alpine و کاهش سایز ایمیج از ۸۰۰ مگابایت به کمتر از ۱۲۰ مگابایت.",
    "category": "DevOps",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Multi-stage Docker",
      "Image Optimization",
      "Alpine",
      "Security"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 23",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "مزیت اصلی stage runtime چیست",
      "finalName را app تنظیم و image را بساز؛ final stage نباید Maven یا سورس داشته باشد."
    ],
    "whyItMatters": "برای عبور build از -DskipTests بی‌دلیل استفاده نکن.",
    "introduction": "تفکیک مرحله کامپایل از محیط اجرای نهایی، استفاده از Distroless یا Alpine و کاهش سایز ایمیج از ۸۰۰ مگابایت به کمتر از ۱۲۰ مگابایت.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Multi-stage build ابزار ساخت را از runtime جدا می‌کند. lock نسخه dependency و wrapper تکرارپذیری را بهتر می‌کنند؛ cache فقط بهینه‌سازی است. build بومی ARM64 برای مک نیاز به اجبار amd64 ندارد."
      }
    ],
    "realWorldScenario": {
      "scenario": "finalName را app تنظیم و image را بساز؛ final stage نباید Maven یا سورس داشته باشد.",
      "solution": "برای عبور build از -DskipTests بی‌دلیل استفاده نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "dockerfile",
        "code": "FROM maven:3.9-eclipse-temurin-25 AS build\nWORKDIR /src\nCOPY . .\nRUN mvn -B package\nFROM eclipse-temurin:25-jre\nWORKDIR /app\nCOPY --from=build /src/target/app.jar app.jar\nUSER 10001\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Docker Multi-stage Builds",
      "explanation": "Docker و CI آشنا هستند؛ تفاوت اینجاست که artifact Java یک JAR و runtime یک JVM با نیاز حافظه و signal مشخص است."
    },
    "commonMistakes": [
      {
        "mistake": "برای عبور build از -DskipTests بی‌دلیل استفاده نکن.",
        "whyBad": "Multi-stage build ابزار ساخت را از runtime جدا می‌کند. lock نسخه dependency و wrapper تکرارپذیری را بهتر می‌کنند؛ cache فقط بهینه‌سازی است. build بومی ARM64 برای مک نیاز به اجبار amd64 ندارد.",
        "solution": "نبود ابزار build و سطح حمله/حجم کمتر"
      }
    ],
    "bestPractices": [
      "برای عبور build از -DskipTests بی‌دلیل استفاده نکن.",
      "finalName را app تنظیم و image را بساز؛ final stage نباید Maven یا سورس داشته باشد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "finalName را app تنظیم و image را بساز؛ final stage نباید Maven یا سورس داشته باشد.",
      "acceptanceCriteria": [
        "finalName را app تنظیم و image را بساز؛ final stage نباید Maven یا سورس داشته باشد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "برای عبور build از -DskipTests بی‌دلیل استفاده نکن."
      ],
      "solution": {
        "code": "FROM maven:3.9-eclipse-temurin-25 AS build\nWORKDIR /src\nCOPY . .\nRUN mvn -B package\nFROM eclipse-temurin:25-jre\nWORKDIR /app\nCOPY --from=build /src/target/app.jar app.jar\nUSER 10001\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]",
        "language": "dockerfile",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. نبود ابزار build و سطح حمله/حجم کمتر. برای عبور build از -DskipTests بی‌دلیل استفاده نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-139",
        "question": "مزیت اصلی stage runtime چیست؟",
        "options": [
          "دانلود dependency در هر startup",
          "نبود ابزار build و سطح حمله/حجم کمتر",
          "تضمین خودکار correctness کد"
        ],
        "correctIndex": 1,
        "explanation": "نبود ابزار build و سطح حمله/حجم کمتر. Multi-stage build ابزار ساخت را از runtime جدا می‌کند. lock نسخه dependency و wrapper تکرارپذیری را بهتر می‌کنند؛ cache فقط بهینه‌سازی است. build بومی ARM64 برای مک نیاز به اجبار amd64 ندارد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: مزیت اصلی stage runtime چیست؟",
        "answer": "نبود ابزار build و سطح حمله/حجم کمتر. برای عبور build از -DskipTests بی‌دلیل استفاده نکن."
      }
    ],
    "summary": "Multi-stage build ابزار ساخت را از runtime جدا می‌کند. lock نسخه dependency و wrapper تکرارپذیری را بهتر می‌کنند؛ cache فقط بهینه‌سازی است. build بومی ARM64 برای مک نیاز به اجبار amd64 ندارد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.docker.com/build/building/multi-stage/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-140",
    "slug": "docker-compose-and-networking",
    "week": 24,
    "day": 2,
    "title": "مدیریت ارتباطات و شبکه‌های داخلی سرویس‌ها با Docker Compose",
    "titleEn": "Docker Compose and Networking",
    "description": "پیکربندی شبکه‌های مجزای داخلی، مدیریت اولویت بالا آمدن کانتینرها با depends_on و healthcheck و مدیریت ولوم‌ها.",
    "category": "DevOps",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Docker Compose",
      "Container Networking",
      "Healthchecks"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 23",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "از داخل app، localhost به کجا اشاره می‌کند",
      "تفاوت localhost از host و container را با اتصال DB توضیح بده؛ حذف container بدون حذف volume داده را حفظ کند."
    ],
    "whyItMatters": "فایل Compose آموزشی را کامل کن؛ نمونه fragment به تنهایی تنظیم امن production نیست.",
    "introduction": "پیکربندی شبکه‌های مجزای داخلی، مدیریت اولویت بالا آمدن کانتینرها با depends_on و healthcheck و مدیریت ولوم‌ها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Compose شبکه سرویس‌ها را با DNS نام سرویس می‌سازد. ports برای دسترسی host است؛ سرویس داخل شبکه از پورت داخلی استفاده می‌کند. volume داده را از چرخه container جدا می‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "تفاوت localhost از host و container را با اتصال DB توضیح بده؛ حذف container بدون حذف volume داده را حفظ کند.",
      "solution": "فایل Compose آموزشی را کامل کن؛ نمونه fragment به تنهایی تنظیم امن production نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "services:\n  app:\n    environment:\n      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/orders\n  db:\n    image: postgres:17-alpine",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Docker Compose and Networking",
      "explanation": "Docker و CI آشنا هستند؛ تفاوت اینجاست که artifact Java یک JAR و runtime یک JVM با نیاز حافظه و signal مشخص است."
    },
    "commonMistakes": [
      {
        "mistake": "فایل Compose آموزشی را کامل کن؛ نمونه fragment به تنهایی تنظیم امن production نیست.",
        "whyBad": "Compose شبکه سرویس‌ها را با DNS نام سرویس می‌سازد. ports برای دسترسی host است؛ سرویس داخل شبکه از پورت داخلی استفاده می‌کند. volume داده را از چرخه container جدا می‌کند.",
        "solution": "خود container اپ"
      }
    ],
    "bestPractices": [
      "فایل Compose آموزشی را کامل کن؛ نمونه fragment به تنهایی تنظیم امن production نیست.",
      "تفاوت localhost از host و container را با اتصال DB توضیح بده؛ حذف container بدون حذف volume داده را حفظ کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "تفاوت localhost از host و container را با اتصال DB توضیح بده؛ حذف container بدون حذف volume داده را حفظ کند.",
      "acceptanceCriteria": [
        "تفاوت localhost از host و container را با اتصال DB توضیح بده؛ حذف container بدون حذف volume داده را حفظ کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "فایل Compose آموزشی را کامل کن؛ نمونه fragment به تنهایی تنظیم امن production نیست."
      ],
      "solution": {
        "code": "services:\n  app:\n    environment:\n      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/orders\n  db:\n    image: postgres:17-alpine",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خود container اپ. فایل Compose آموزشی را کامل کن؛ نمونه fragment به تنهایی تنظیم امن production نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-140",
        "question": "از داخل app، localhost به کجا اشاره می‌کند؟",
        "options": [
          "به طور خودکار سرویس db",
          "تمام hostهای شبکه Docker",
          "خود container اپ"
        ],
        "correctIndex": 2,
        "explanation": "خود container اپ. Compose شبکه سرویس‌ها را با DNS نام سرویس می‌سازد. ports برای دسترسی host است؛ سرویس داخل شبکه از پورت داخلی استفاده می‌کند. volume داده را از چرخه container جدا می‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: از داخل app، localhost به کجا اشاره می‌کند؟",
        "answer": "خود container اپ. فایل Compose آموزشی را کامل کن؛ نمونه fragment به تنهایی تنظیم امن production نیست."
      }
    ],
    "summary": "Compose شبکه سرویس‌ها را با DNS نام سرویس می‌سازد. ports برای دسترسی host است؛ سرویس داخل شبکه از پورت داخلی استفاده می‌کند. volume داده را از چرخه container جدا می‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.docker.com/build/building/multi-stage/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-141",
    "slug": "ci-cd-pipeline-design",
    "week": 24,
    "day": 3,
    "title": "طراحی اصولی خط‌لوله تحویل و استقرار مداوم (CI/CD Pipeline)",
    "titleEn": "CI/CD Pipeline Design",
    "description": "فازهای اتوماسیون شامل بررسی لایسنس، تست‌های واحد، تست‌های امنیتی، ساخت ایمیج کانتینر و استقرار بدون وقفه.",
    "category": "DevOps",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "CI/CD",
      "Continuous Integration",
      "DevOps Pipelines"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 23",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا promote همان artifact بهتر است",
      "digest دو محیط را مقایسه کن؛ staging و production باید همان build را با config جدا اجرا کنند."
    ],
    "whyItMatters": "secret و config محیط را در build artifact جاسازی نکن.",
    "introduction": "فازهای اتوماسیون شامل بررسی لایسنس، تست‌های واحد، تست‌های امنیتی، ساخت ایمیج کانتینر و استقرار بدون وقفه.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Pipeline باید artifact را یک بار بسازد و همان artifact را در محیط‌ها ارتقا دهد. test، scan و migration gateها باید شکست را متوقف کنند. deploy با tag شناور قابلیت بازتولید را کم می‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "digest دو محیط را مقایسه کن؛ staging و production باید همان build را با config جدا اجرا کنند.",
      "solution": "secret و config محیط را در build artifact جاسازی نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "checkout -> verify -> build image -> scan -> publish immutable digest\n-> deploy staging -> smoke tests -> approve production -> deploy same digest",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "CI/CD Pipeline Design",
      "explanation": "Docker و CI آشنا هستند؛ تفاوت اینجاست که artifact Java یک JAR و runtime یک JVM با نیاز حافظه و signal مشخص است."
    },
    "commonMistakes": [
      {
        "mistake": "secret و config محیط را در build artifact جاسازی نکن.",
        "whyBad": "Pipeline باید artifact را یک بار بسازد و همان artifact را در محیط‌ها ارتقا دهد. test، scan و migration gateها باید شکست را متوقف کنند. deploy با tag شناور قابلیت بازتولید را کم می‌کند.",
        "solution": "تفاوت پنهان build میان محیط‌ها کم می‌شود"
      }
    ],
    "bestPractices": [
      "secret و config محیط را در build artifact جاسازی نکن.",
      "digest دو محیط را مقایسه کن؛ staging و production باید همان build را با config جدا اجرا کنند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "digest دو محیط را مقایسه کن؛ staging و production باید همان build را با config جدا اجرا کنند.",
      "acceptanceCriteria": [
        "digest دو محیط را مقایسه کن؛ staging و production باید همان build را با config جدا اجرا کنند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "secret و config محیط را در build artifact جاسازی نکن."
      ],
      "solution": {
        "code": "checkout -> verify -> build image -> scan -> publish immutable digest\n-> deploy staging -> smoke tests -> approve production -> deploy same digest",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. تفاوت پنهان build میان محیط‌ها کم می‌شود. secret و config محیط را در build artifact جاسازی نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-141",
        "question": "چرا promote همان artifact بهتر است؟",
        "options": [
          "تفاوت پنهان build میان محیط‌ها کم می‌شود",
          "دیگر هیچ smoke test لازم نیست",
          "secret باید داخل image ثابت قرار گیرد"
        ],
        "correctIndex": 0,
        "explanation": "تفاوت پنهان build میان محیط‌ها کم می‌شود. Pipeline باید artifact را یک بار بسازد و همان artifact را در محیط‌ها ارتقا دهد. test، scan و migration gateها باید شکست را متوقف کنند. deploy با tag شناور قابلیت بازتولید را کم می‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا promote همان artifact بهتر است؟",
        "answer": "تفاوت پنهان build میان محیط‌ها کم می‌شود. secret و config محیط را در build artifact جاسازی نکن."
      }
    ],
    "summary": "Pipeline باید artifact را یک بار بسازد و همان artifact را در محیط‌ها ارتقا دهد. test، scan و migration gateها باید شکست را متوقف کنند. deploy با tag شناور قابلیت بازتولید را کم می‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.docker.com/build/building/multi-stage/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-142",
    "slug": "building-the-project-pipeline",
    "week": 24,
    "day": 4,
    "title": "ساخت پایپ‌لاین اتوماتیک پروژه سفارشات در GitHub Actions (پروژه محوری)",
    "titleEn": "Building the Project Pipeline",
    "description": "پیاده‌سازی ورک‌فلو کامل کامپایل کد، اجرای تست‌ها، ساخت ایمیج داکر و انتشار خودکار به رجیستری.",
    "category": "DevOps",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "GitHub Actions Workflow",
      "Automated Build"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 23",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "هدف اجرای verify پیش از publish چیست",
      "یک تست قرمز و یک خطای build ایجاد کن؛ هیچ artifact نامعتبر نباید به مرحله انتشار برسد."
    ],
    "whyItMatters": "cache ناسالم یا قدیمی نباید باعث عبور تستی شود که واقعاً اجرا نشده است.",
    "introduction": "پیاده‌سازی ورک‌فلو کامل کامپایل کد، اجرای تست‌ها، ساخت ایمیج داکر و انتشار خودکار به رجیستری.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Pipeline پروژه باید با یک command قابل اجرای محلی هم باشد. تست DB واقعی به Docker runner نیاز دارد؛ reportها را در شکست هم ذخیره کن. انتشار image نباید پیش از عبور gateهای لازم رخ دهد."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک تست قرمز و یک خطای build ایجاد کن؛ هیچ artifact نامعتبر نباید به مرحله انتشار برسد.",
      "solution": "cache ناسالم یا قدیمی نباید باعث عبور تستی شود که واقعاً اجرا نشده است."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "steps:\n  - run: ./mvnw -B verify\n  - run: docker build -t orders:${GIT_SHA} .\n  # Publish only after successful verification and scanning.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Building the Project Pipeline",
      "explanation": "Docker و CI آشنا هستند؛ تفاوت اینجاست که artifact Java یک JAR و runtime یک JVM با نیاز حافظه و signal مشخص است."
    },
    "commonMistakes": [
      {
        "mistake": "cache ناسالم یا قدیمی نباید باعث عبور تستی شود که واقعاً اجرا نشده است.",
        "whyBad": "Pipeline پروژه باید با یک command قابل اجرای محلی هم باشد. تست DB واقعی به Docker runner نیاز دارد؛ reportها را در شکست هم ذخیره کن. انتشار image نباید پیش از عبور gateهای لازم رخ دهد.",
        "solution": "جلوگیری از انتشار artifact با تست شکست‌خورده"
      }
    ],
    "bestPractices": [
      "cache ناسالم یا قدیمی نباید باعث عبور تستی شود که واقعاً اجرا نشده است.",
      "یک تست قرمز و یک خطای build ایجاد کن؛ هیچ artifact نامعتبر نباید به مرحله انتشار برسد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک تست قرمز و یک خطای build ایجاد کن؛ هیچ artifact نامعتبر نباید به مرحله انتشار برسد.",
      "acceptanceCriteria": [
        "یک تست قرمز و یک خطای build ایجاد کن؛ هیچ artifact نامعتبر نباید به مرحله انتشار برسد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "cache ناسالم یا قدیمی نباید باعث عبور تستی شود که واقعاً اجرا نشده است."
      ],
      "solution": {
        "code": "steps:\n  - run: ./mvnw -B verify\n  - run: docker build -t orders:${GIT_SHA} .\n  # Publish only after successful verification and scanning.",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. جلوگیری از انتشار artifact با تست شکست‌خورده. cache ناسالم یا قدیمی نباید باعث عبور تستی شود که واقعاً اجرا نشده است."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-142",
        "question": "هدف اجرای verify پیش از publish چیست؟",
        "options": [
          "تبدیل تست‌ها به مستندات HTML فقط",
          "جلوگیری از انتشار artifact با تست شکست‌خورده",
          "حذف وابستگی به JDK برای build"
        ],
        "correctIndex": 1,
        "explanation": "جلوگیری از انتشار artifact با تست شکست‌خورده. Pipeline پروژه باید با یک command قابل اجرای محلی هم باشد. تست DB واقعی به Docker runner نیاز دارد؛ reportها را در شکست هم ذخیره کن. انتشار image نباید پیش از عبور gateهای لازم رخ دهد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: هدف اجرای verify پیش از publish چیست؟",
        "answer": "جلوگیری از انتشار artifact با تست شکست‌خورده. cache ناسالم یا قدیمی نباید باعث عبور تستی شود که واقعاً اجرا نشده است."
      }
    ],
    "summary": "Pipeline پروژه باید با یک command قابل اجرای محلی هم باشد. تست DB واقعی به Docker runner نیاز دارد؛ reportها را در شکست هم ذخیره کن. انتشار image نباید پیش از عبور gateهای لازم رخ دهد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.docker.com/build/building/multi-stage/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-143",
    "slug": "kubernetes-basics-and-probes",
    "week": 24,
    "day": 5,
    "title": "مقدمه‌ای بر کوبرنتیز (Kubernetes) و پروب‌های سلامت Liveness و Readiness",
    "titleEn": "Kubernetes Basics and Probes",
    "description": "نقش پادها و سرویس‌ها در کوبرنتیز و نحوه کانفیگ پروب‌های سلامت اسپرینگ بوت جهت هدایت ترافیک به پادهای آماده به خدمت.",
    "category": "DevOps",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Kubernetes",
      "Liveness Probe",
      "Readiness Probe",
      "Cloud Native"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 23",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "readiness ناموفق چه اثری باید داشته باشد",
      "زمان شروع کند و قطع DB را شبیه‌سازی کن؛ restart storm رخ ندهد و ترافیک به instance آماده برود."
    ],
    "whyItMatters": "liveness را به همه وابستگی‌های مشترک وصل نکن.",
    "introduction": "نقش پادها و سرویس‌ها در کوبرنتیز و نحوه کانفیگ پروب‌های سلامت اسپرینگ بوت جهت هدایت ترافیک به پادهای آماده به خدمت.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Startup probe برای شروع کند، readiness برای دریافت ترافیک و liveness برای گیرکردن process است. endpointها باید سبک و کم‌وابستگی باشند. resource request/limit بر scheduling و رفتار runtime اثر دارد."
      }
    ],
    "realWorldScenario": {
      "scenario": "زمان شروع کند و قطع DB را شبیه‌سازی کن؛ restart storm رخ ندهد و ترافیک به instance آماده برود.",
      "solution": "liveness را به همه وابستگی‌های مشترک وصل نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "readinessProbe:\n  httpGet:\n    path: /actuator/health/readiness\n    port: 8080\nlivenessProbe:\n  httpGet:\n    path: /actuator/health/liveness\n    port: 8080",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Kubernetes Basics and Probes",
      "explanation": "Docker و CI آشنا هستند؛ تفاوت اینجاست که artifact Java یک JAR و runtime یک JVM با نیاز حافظه و signal مشخص است."
    },
    "commonMistakes": [
      {
        "mistake": "liveness را به همه وابستگی‌های مشترک وصل نکن.",
        "whyBad": "Startup probe برای شروع کند، readiness برای دریافت ترافیک و liveness برای گیرکردن process است. endpointها باید سبک و کم‌وابستگی باشند. resource request/limit بر scheduling و رفتار runtime اثر دارد.",
        "solution": "حذف از مسیر ترافیک، نه الزاماً restart"
      }
    ],
    "bestPractices": [
      "liveness را به همه وابستگی‌های مشترک وصل نکن.",
      "زمان شروع کند و قطع DB را شبیه‌سازی کن؛ restart storm رخ ندهد و ترافیک به instance آماده برود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "زمان شروع کند و قطع DB را شبیه‌سازی کن؛ restart storm رخ ندهد و ترافیک به instance آماده برود.",
      "acceptanceCriteria": [
        "زمان شروع کند و قطع DB را شبیه‌سازی کن؛ restart storm رخ ندهد و ترافیک به instance آماده برود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "liveness را به همه وابستگی‌های مشترک وصل نکن."
      ],
      "solution": {
        "code": "readinessProbe:\n  httpGet:\n    path: /actuator/health/readiness\n    port: 8080\nlivenessProbe:\n  httpGet:\n    path: /actuator/health/liveness\n    port: 8080",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. حذف از مسیر ترافیک، نه الزاماً restart. liveness را به همه وابستگی‌های مشترک وصل نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-143",
        "question": "readiness ناموفق چه اثری باید داشته باشد؟",
        "options": [
          "حذف فوری تمام volumeها",
          "تغییر خودکار schema",
          "حذف از مسیر ترافیک، نه الزاماً restart"
        ],
        "correctIndex": 2,
        "explanation": "حذف از مسیر ترافیک، نه الزاماً restart. Startup probe برای شروع کند، readiness برای دریافت ترافیک و liveness برای گیرکردن process است. endpointها باید سبک و کم‌وابستگی باشند. resource request/limit بر scheduling و رفتار runtime اثر دارد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: readiness ناموفق چه اثری باید داشته باشد؟",
        "answer": "حذف از مسیر ترافیک، نه الزاماً restart. liveness را به همه وابستگی‌های مشترک وصل نکن."
      }
    ],
    "summary": "Startup probe برای شروع کند، readiness برای دریافت ترافیک و liveness برای گیرکردن process است. endpointها باید سبک و کم‌وابستگی باشند. resource request/limit بر scheduling و رفتار runtime اثر دارد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.docker.com/build/building/multi-stage/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-144",
    "slug": "deployment-and-rollback",
    "week": 24,
    "day": 6,
    "title": "استراتژی‌های استقرار بدون قطعی (Blue-Green و Rolling Update) و بازگشت نسخه",
    "titleEn": "Deployment and Rollback",
    "description": "مقایسه روش‌های استقرار تدریجی، مدیریت رول‌بک فوری در صورت بروز خطای پیش‌بینی‌نشده در پروداکشن.",
    "category": "DevOps",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Zero-downtime Deployment",
      "Rolling Update",
      "Blue-Green",
      "Rollback"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 23",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا expand/contract مفید است",
      "کد قبلی را پس از migration جدید اجرا کن؛ اگر ناسازگار است rollback plan را اصلاح کن."
    ],
    "whyItMatters": "برگشت image به تنهایی داده حذف‌شده را بازیابی نمی‌کند.",
    "introduction": "مقایسه روش‌های استقرار تدریجی، مدیریت رول‌بک فوری در صورت بروز خطای پیش‌بینی‌نشده در پروداکشن.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Rollback image وقتی schema سازگار مانده ساده‌تر است. انتشار expand/contract اجازه می‌دهد نسخه قدیم و جدید مدتی همزیستی کنند. smoke test پس از deploy باید مسیر واقعی و محدود را بسنجد."
      }
    ],
    "realWorldScenario": {
      "scenario": "کد قبلی را پس از migration جدید اجرا کن؛ اگر ناسازگار است rollback plan را اصلاح کن.",
      "solution": "برگشت image به تنهایی داده حذف‌شده را بازیابی نمی‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Deploy 1: add nullable column\nDeploy 2: write/read new field with compatibility\nBackfill and observe\nDeploy 3: remove old field after old clients are gone",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Deployment and Rollback",
      "explanation": "Docker و CI آشنا هستند؛ تفاوت اینجاست که artifact Java یک JAR و runtime یک JVM با نیاز حافظه و signal مشخص است."
    },
    "commonMistakes": [
      {
        "mistake": "برگشت image به تنهایی داده حذف‌شده را بازیابی نمی‌کند.",
        "whyBad": "Rollback image وقتی schema سازگار مانده ساده‌تر است. انتشار expand/contract اجازه می‌دهد نسخه قدیم و جدید مدتی همزیستی کنند. smoke test پس از deploy باید مسیر واقعی و محدود را بسنجد.",
        "solution": "حفظ سازگاری طی rollout و rollback کد"
      }
    ],
    "bestPractices": [
      "برگشت image به تنهایی داده حذف‌شده را بازیابی نمی‌کند.",
      "کد قبلی را پس از migration جدید اجرا کن؛ اگر ناسازگار است rollback plan را اصلاح کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "کد قبلی را پس از migration جدید اجرا کن؛ اگر ناسازگار است rollback plan را اصلاح کن.",
      "acceptanceCriteria": [
        "کد قبلی را پس از migration جدید اجرا کن؛ اگر ناسازگار است rollback plan را اصلاح کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "برگشت image به تنهایی داده حذف‌شده را بازیابی نمی‌کند."
      ],
      "solution": {
        "code": "Deploy 1: add nullable column\nDeploy 2: write/read new field with compatibility\nBackfill and observe\nDeploy 3: remove old field after old clients are gone",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. حفظ سازگاری طی rollout و rollback کد. برگشت image به تنهایی داده حذف‌شده را بازیابی نمی‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-144",
        "question": "چرا expand/contract مفید است؟",
        "options": [
          "حفظ سازگاری طی rollout و rollback کد",
          "حذف نیاز به backup برای همیشه",
          "اجرای خودکار تمام migrationهای معکوس"
        ],
        "correctIndex": 0,
        "explanation": "حفظ سازگاری طی rollout و rollback کد. Rollback image وقتی schema سازگار مانده ساده‌تر است. انتشار expand/contract اجازه می‌دهد نسخه قدیم و جدید مدتی همزیستی کنند. smoke test پس از deploy باید مسیر واقعی و محدود را بسنجد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا expand/contract مفید است؟",
        "answer": "حفظ سازگاری طی rollout و rollback کد. برگشت image به تنهایی داده حذف‌شده را بازیابی نمی‌کند."
      }
    ],
    "summary": "Rollback image وقتی schema سازگار مانده ساده‌تر است. انتشار expand/contract اجازه می‌دهد نسخه قدیم و جدید مدتی همزیستی کنند. smoke test پس از deploy باید مسیر واقعی و محدود را بسنجد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.docker.com/build/building/multi-stage/"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
