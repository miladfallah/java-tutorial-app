import { Lesson } from "../types";

export const WEEK_22_LESSONS: Lesson[] = [
  {
    "id": "lesson-127",
    "slug": "scalability-and-bottlenecks",
    "week": 22,
    "day": 1,
    "title": "اصول مقیاس‌پذیری عمودی و افقی و شناسایی گلوگاه‌های سیستم",
    "titleEn": "Scalability and Bottlenecks",
    "description": "بررسی مقیاس‌پذیری عمودی (Scale-up) در برابر افقی (Scale-out)، قانون امدال و عوامل اصلی افت سرعت سیستم زیر بار.",
    "category": "System Design",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Scalability",
      "Bottlenecks",
      "Amdahl's Law",
      "Scale Out"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 21",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "وقتی DB اشباع است افزودن instance اپ چه ریسکی دارد",
      "برای یک endpoint breakdown زمان بساز؛ فقط بزرگ‌ترین مؤلفه را تغییر بده و دوباره اندازه بگیر."
    ],
    "whyItMatters": "بهبود microbenchmark را بدون بار واقعی به بهبود end-to-end تعمیم نده.",
    "introduction": "بررسی مقیاس‌پذیری عمودی (Scale-up) در برابر افقی (Scale-out)، قانون امدال و عوامل اصلی افت سرعت سیستم زیر بار.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "گلوگاه با افزایش بار جابه‌جا می‌شود؛ بهینه‌سازی بخش غیرغالب سود محدودی دارد. throughput، utilization و زمان انتظار را کنار هم ببین. scaling اپ وقتی DB اشباع است ممکن است وضعیت را بدتر کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای یک endpoint breakdown زمان بساز؛ فقط بزرگ‌ترین مؤلفه را تغییر بده و دوباره اندازه بگیر.",
      "solution": "بهبود microbenchmark را بدون بار واقعی به بهبود end-to-end تعمیم نده."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Request time = queue wait + CPU + DB wait + external I/O\nMeasure the largest component before changing resources.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Scalability and Bottlenecks",
      "explanation": "تجربه معماری Node را حفظ کن؛ تغییر زبان دلیل کافی برای microservices بیشتر نیست. معیار انتخاب، نیاز دامنه، ظرفیت و هزینه عملیات است."
    },
    "commonMistakes": [
      {
        "mistake": "بهبود microbenchmark را بدون بار واقعی به بهبود end-to-end تعمیم نده.",
        "whyBad": "گلوگاه با افزایش بار جابه‌جا می‌شود؛ بهینه‌سازی بخش غیرغالب سود محدودی دارد. throughput، utilization و زمان انتظار را کنار هم ببین. scaling اپ وقتی DB اشباع است ممکن است وضعیت را بدتر کند.",
        "solution": "اتصال و فشار بیشتر روی همان گلوگاه"
      }
    ],
    "bestPractices": [
      "بهبود microbenchmark را بدون بار واقعی به بهبود end-to-end تعمیم نده.",
      "برای یک endpoint breakdown زمان بساز؛ فقط بزرگ‌ترین مؤلفه را تغییر بده و دوباره اندازه بگیر."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای یک endpoint breakdown زمان بساز؛ فقط بزرگ‌ترین مؤلفه را تغییر بده و دوباره اندازه بگیر.",
      "acceptanceCriteria": [
        "برای یک endpoint breakdown زمان بساز؛ فقط بزرگ‌ترین مؤلفه را تغییر بده و دوباره اندازه بگیر.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "بهبود microbenchmark را بدون بار واقعی به بهبود end-to-end تعمیم نده."
      ],
      "solution": {
        "code": "Request time = queue wait + CPU + DB wait + external I/O\nMeasure the largest component before changing resources.",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. اتصال و فشار بیشتر روی همان گلوگاه. بهبود microbenchmark را بدون بار واقعی به بهبود end-to-end تعمیم نده."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-127",
        "question": "وقتی DB اشباع است افزودن instance اپ چه ریسکی دارد؟",
        "options": [
          "حل قطعی مشکل با CPU بیشتر اپ",
          "اتصال و فشار بیشتر روی همان گلوگاه",
          "حذف خودکار lockهای DB"
        ],
        "correctIndex": 1,
        "explanation": "اتصال و فشار بیشتر روی همان گلوگاه. گلوگاه با افزایش بار جابه‌جا می‌شود؛ بهینه‌سازی بخش غیرغالب سود محدودی دارد. throughput، utilization و زمان انتظار را کنار هم ببین. scaling اپ وقتی DB اشباع است ممکن است وضعیت را بدتر کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: وقتی DB اشباع است افزودن instance اپ چه ریسکی دارد؟",
        "answer": "اتصال و فشار بیشتر روی همان گلوگاه. بهبود microbenchmark را بدون بار واقعی به بهبود end-to-end تعمیم نده."
      }
    ],
    "summary": "گلوگاه با افزایش بار جابه‌جا می‌شود؛ بهینه‌سازی بخش غیرغالب سود محدودی دارد. throughput، utilization و زمان انتظار را کنار هم ببین. scaling اپ وقتی DB اشباع است ممکن است وضعیت را بدتر کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-modulith/reference/fundamentals.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-128",
    "slug": "load-balancing-and-stateless-services",
    "week": 22,
    "day": 2,
    "title": "توزیع بار (Load Balancing) و معماری سرویس‌های بدون وضعیت (Stateless)",
    "titleEn": "Load Balancing and Stateless Services",
    "description": "الگوریتم‌های لودبالانسینگ (Round-robin, Least connections, Consistent hashing) و چرایی حذف نشست‌های درون‌حافظه‌ای.",
    "category": "System Design",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Load Balancing",
      "Stateless Architecture",
      "Reverse Proxy"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 21",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "stateless service یعنی چه",
      "در میانه چند درخواست instance را عوض کن؛ کاربر نباید سفارش یا session لازم را از دست بدهد."
    ],
    "whyItMatters": "sticky session مشکل را پنهان می‌کند اما fault tolerance داده محلی را ایجاد نمی‌کند.",
    "introduction": "الگوریتم‌های لودبالانسینگ (Round-robin, Least connections, Consistent hashing) و چرایی حذف نشست‌های درون‌حافظه‌ای.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "سرویس stateless داده حیاتی session را در حافظه یک instance نگه نمی‌دارد؛ این به معنی بدون state بودن کل سیستم نیست. load balancer با health/readiness ترافیک را هدایت می‌کند و drain انتشار را امن‌تر می‌سازد."
      }
    ],
    "realWorldScenario": {
      "scenario": "در میانه چند درخواست instance را عوض کن؛ کاربر نباید سفارش یا session لازم را از دست بدهد.",
      "solution": "sticky session مشکل را پنهان می‌کند اما fault tolerance داده محلی را ایجاد نمی‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Client -> load balancer -> app A / app B\nDurable state -> database\nShared session if required -> explicit shared store",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Load Balancing and Stateless Services",
      "explanation": "تجربه معماری Node را حفظ کن؛ تغییر زبان دلیل کافی برای microservices بیشتر نیست. معیار انتخاب، نیاز دامنه، ظرفیت و هزینه عملیات است."
    },
    "commonMistakes": [
      {
        "mistake": "sticky session مشکل را پنهان می‌کند اما fault tolerance داده محلی را ایجاد نمی‌کند.",
        "whyBad": "سرویس stateless داده حیاتی session را در حافظه یک instance نگه نمی‌دارد؛ این به معنی بدون state بودن کل سیستم نیست. load balancer با health/readiness ترافیک را هدایت می‌کند و drain انتشار را امن‌تر می‌سازد.",
        "solution": "عدم وابستگی correctness درخواست به حافظه همان instance"
      }
    ],
    "bestPractices": [
      "sticky session مشکل را پنهان می‌کند اما fault tolerance داده محلی را ایجاد نمی‌کند.",
      "در میانه چند درخواست instance را عوض کن؛ کاربر نباید سفارش یا session لازم را از دست بدهد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "در میانه چند درخواست instance را عوض کن؛ کاربر نباید سفارش یا session لازم را از دست بدهد.",
      "acceptanceCriteria": [
        "در میانه چند درخواست instance را عوض کن؛ کاربر نباید سفارش یا session لازم را از دست بدهد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "sticky session مشکل را پنهان می‌کند اما fault tolerance داده محلی را ایجاد نمی‌کند."
      ],
      "solution": {
        "code": "Client -> load balancer -> app A / app B\nDurable state -> database\nShared session if required -> explicit shared store",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. عدم وابستگی correctness درخواست به حافظه همان instance. sticky session مشکل را پنهان می‌کند اما fault tolerance داده محلی را ایجاد نمی‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-128",
        "question": "stateless service یعنی چه؟",
        "options": [
          "نبود هیچ دیتابیس در کل سیستم",
          "اجبار به JWT برای هر کاربرد",
          "عدم وابستگی correctness درخواست به حافظه همان instance"
        ],
        "correctIndex": 2,
        "explanation": "عدم وابستگی correctness درخواست به حافظه همان instance. سرویس stateless داده حیاتی session را در حافظه یک instance نگه نمی‌دارد؛ این به معنی بدون state بودن کل سیستم نیست. load balancer با health/readiness ترافیک را هدایت می‌کند و drain انتشار را امن‌تر می‌سازد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: stateless service یعنی چه؟",
        "answer": "عدم وابستگی correctness درخواست به حافظه همان instance. sticky session مشکل را پنهان می‌کند اما fault tolerance داده محلی را ایجاد نمی‌کند."
      }
    ],
    "summary": "سرویس stateless داده حیاتی session را در حافظه یک instance نگه نمی‌دارد؛ این به معنی بدون state بودن کل سیستم نیست. load balancer با health/readiness ترافیک را هدایت می‌کند و drain انتشار را امن‌تر می‌سازد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-modulith/reference/fundamentals.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-129",
    "slug": "architectural-trade-offs",
    "week": 22,
    "day": 3,
    "title": "تحلیل مصالحه‌های معماری (Architectural Trade-offs)",
    "titleEn": "Architectural Trade-offs",
    "description": "چگونه بین سادگی و انعطاف‌پذیری، تاخیر و توان عملیاتی، و هزینه سرورها با الزامات بیزینس موازنه برقرار کنیم.",
    "category": "System Design",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Architectural Trade-offs",
      "Decision Making",
      "System Architecture"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 21",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "دلیل معتبر انتخاب ابزار معماری چیست",
      "برای یک تیم سه‌نفره monolith و microservices را با سه معیار مقایسه و یک trigger بازنگری تعیین کن."
    ],
    "whyItMatters": "پیچیدگی operational را هزینه بیرونیِ نامرئی فرض نکن.",
    "introduction": "چگونه بین سادگی و انعطاف‌پذیری، تاخیر و توان عملیاتی، و هزینه سرورها با الزامات بیزینس موازنه برقرار کنیم.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Trade-off باید با requirement قابل سنجش شروع شود: latency، consistency، هزینه یا سادگی عملیات. معماری «بهترین مطلق» ندارد. گزینه ساده‌تر را تا وقتی constraint واقعی نقض نشده جدی بگیر."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای یک تیم سه‌نفره monolith و microservices را با سه معیار مقایسه و یک trigger بازنگری تعیین کن.",
      "solution": "پیچیدگی operational را هزینه بیرونیِ نامرئی فرض نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Decision: modular monolith initially\nDrivers: one team, shared transactions, low operational budget\nRevisit: independent scaling or team ownership becomes necessary",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Architectural Trade-offs",
      "explanation": "تجربه معماری Node را حفظ کن؛ تغییر زبان دلیل کافی برای microservices بیشتر نیست. معیار انتخاب، نیاز دامنه، ظرفیت و هزینه عملیات است."
    },
    "commonMistakes": [
      {
        "mistake": "پیچیدگی operational را هزینه بیرونیِ نامرئی فرض نکن.",
        "whyBad": "Trade-off باید با requirement قابل سنجش شروع شود: latency، consistency، هزینه یا سادگی عملیات. معماری «بهترین مطلق» ندارد. گزینه ساده‌تر را تا وقتی constraint واقعی نقض نشده جدی بگیر.",
        "solution": "پاسخ به constraint و trade-off مستند"
      }
    ],
    "bestPractices": [
      "پیچیدگی operational را هزینه بیرونیِ نامرئی فرض نکن.",
      "برای یک تیم سه‌نفره monolith و microservices را با سه معیار مقایسه و یک trigger بازنگری تعیین کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای یک تیم سه‌نفره monolith و microservices را با سه معیار مقایسه و یک trigger بازنگری تعیین کن.",
      "acceptanceCriteria": [
        "برای یک تیم سه‌نفره monolith و microservices را با سه معیار مقایسه و یک trigger بازنگری تعیین کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "پیچیدگی operational را هزینه بیرونیِ نامرئی فرض نکن."
      ],
      "solution": {
        "code": "Decision: modular monolith initially\nDrivers: one team, shared transactions, low operational budget\nRevisit: independent scaling or team ownership becomes necessary",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. پاسخ به constraint و trade-off مستند. پیچیدگی operational را هزینه بیرونیِ نامرئی فرض نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-129",
        "question": "دلیل معتبر انتخاب ابزار معماری چیست؟",
        "options": [
          "پاسخ به constraint و trade-off مستند",
          "فقط محبوب‌بودن در شبکه اجتماعی",
          "داشتن تعداد سرویس بیشتر از رقیب"
        ],
        "correctIndex": 0,
        "explanation": "پاسخ به constraint و trade-off مستند. Trade-off باید با requirement قابل سنجش شروع شود: latency، consistency، هزینه یا سادگی عملیات. معماری «بهترین مطلق» ندارد. گزینه ساده‌تر را تا وقتی constraint واقعی نقض نشده جدی بگیر."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: دلیل معتبر انتخاب ابزار معماری چیست؟",
        "answer": "پاسخ به constraint و trade-off مستند. پیچیدگی operational را هزینه بیرونیِ نامرئی فرض نکن."
      }
    ],
    "summary": "Trade-off باید با requirement قابل سنجش شروع شود: latency، consistency، هزینه یا سادگی عملیات. معماری «بهترین مطلق» ندارد. گزینه ساده‌تر را تا وقتی constraint واقعی نقض نشده جدی بگیر.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-modulith/reference/fundamentals.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-130",
    "slug": "designing-a-marketplace-architecture",
    "week": 22,
    "day": 4,
    "title": "طراحی سیستم کامل پلتفرم مارکت‌پلیس و پردازش سفارشات (پروژه محوری)",
    "titleEn": "Designing a Marketplace Architecture",
    "description": "ارائه طرح جامع معماری پلتفرم تجارت الکترونیک شامل ماژول‌های وب، پایگاه داده، صف‌های پیام، کش و لایه‌های امنیتی.",
    "category": "System Design",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "System Design",
      "Marketplace",
      "High-Level Architecture"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 21",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا search index منبع نهایی موجودی رزروشدنی است",
      "مسیر خرید، failure پرداخت و تاخیر search را رسم کن؛ برای هرکدام consistency مورد نیاز را بنویس."
    ],
    "whyItMatters": "قبل از طراحی برای میلیون‌ها کاربر، load target و ظرفیت واقعی را مشخص کن.",
    "introduction": "ارائه طرح جامع معماری پلتفرم تجارت الکترونیک شامل ماژول‌های وب، پایگاه داده، صف‌های پیام، کش و لایه‌های امنیتی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Marketplace چند مسئله مستقل دارد: catalog خواندنی، سفارش با invariant مالی و جستجوی eventual. مسیر critical خرید را ساده نگه دار و read model را با منبع حقیقت اشتباه نگیر."
      }
    ],
    "realWorldScenario": {
      "scenario": "مسیر خرید، failure پرداخت و تاخیر search را رسم کن؛ برای هرکدام consistency مورد نیاز را بنویس.",
      "solution": "قبل از طراحی برای میلیون‌ها کاربر، load target و ظرفیت واقعی را مشخص کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Catalog -> product read model\nCheckout -> order + inventory reservation\nSearch index <- asynchronous product events\nPayments -> explicit authorization/capture workflow",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Designing a Marketplace Architecture",
      "explanation": "تجربه معماری Node را حفظ کن؛ تغییر زبان دلیل کافی برای microservices بیشتر نیست. معیار انتخاب، نیاز دامنه، ظرفیت و هزینه عملیات است."
    },
    "commonMistakes": [
      {
        "mistake": "قبل از طراحی برای میلیون‌ها کاربر، load target و ظرفیت واقعی را مشخص کن.",
        "whyBad": "Marketplace چند مسئله مستقل دارد: catalog خواندنی، سفارش با invariant مالی و جستجوی eventual. مسیر critical خرید را ساده نگه دار و read model را با منبع حقیقت اشتباه نگیر.",
        "solution": "معمولاً نه؛ رزرو به منبع authoritative نیاز دارد"
      }
    ],
    "bestPractices": [
      "قبل از طراحی برای میلیون‌ها کاربر، load target و ظرفیت واقعی را مشخص کن.",
      "مسیر خرید، failure پرداخت و تاخیر search را رسم کن؛ برای هرکدام consistency مورد نیاز را بنویس."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "مسیر خرید، failure پرداخت و تاخیر search را رسم کن؛ برای هرکدام consistency مورد نیاز را بنویس.",
      "acceptanceCriteria": [
        "مسیر خرید، failure پرداخت و تاخیر search را رسم کن؛ برای هرکدام consistency مورد نیاز را بنویس.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "قبل از طراحی برای میلیون‌ها کاربر، load target و ظرفیت واقعی را مشخص کن."
      ],
      "solution": {
        "code": "Catalog -> product read model\nCheckout -> order + inventory reservation\nSearch index <- asynchronous product events\nPayments -> explicit authorization/capture workflow",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. معمولاً نه؛ رزرو به منبع authoritative نیاز دارد. قبل از طراحی برای میلیون‌ها کاربر، load target و ظرفیت واقعی را مشخص کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-130",
        "question": "آیا search index منبع نهایی موجودی رزروشدنی است؟",
        "options": [
          "بله؛ چون سریع‌تر است",
          "معمولاً نه؛ رزرو به منبع authoritative نیاز دارد",
          "بله؛ اگر نتیجه cache شده باشد"
        ],
        "correctIndex": 1,
        "explanation": "معمولاً نه؛ رزرو به منبع authoritative نیاز دارد. Marketplace چند مسئله مستقل دارد: catalog خواندنی، سفارش با invariant مالی و جستجوی eventual. مسیر critical خرید را ساده نگه دار و read model را با منبع حقیقت اشتباه نگیر."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا search index منبع نهایی موجودی رزروشدنی است؟",
        "answer": "معمولاً نه؛ رزرو به منبع authoritative نیاز دارد. قبل از طراحی برای میلیون‌ها کاربر، load target و ظرفیت واقعی را مشخص کن."
      }
    ],
    "summary": "Marketplace چند مسئله مستقل دارد: catalog خواندنی، سفارش با invariant مالی و جستجوی eventual. مسیر critical خرید را ساده نگه دار و read model را با منبع حقیقت اشتباه نگیر.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-modulith/reference/fundamentals.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-131",
    "slug": "database-replication-and-partitioning",
    "week": 22,
    "day": 5,
    "title": "تکثیر پایگاه داده (Replication) و شاردینگ (Database Partitioning)",
    "titleEn": "Database Replication and Partitioning",
    "description": "پیکربندی Primary-Replica در پایگاه‌های داده، جداسازی عملیات خواندن از نوشتن (CQRS) و پارتیشن‌بندی افقی جداول حجیم.",
    "category": "System Design",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Database Replication",
      "Sharding",
      "Read Replicas",
      "CQRS"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 21",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "خواندن فوری از replica async چه ریسکی دارد",
      "بلافاصله پس از write از replica عقب‌افتاده بخوان؛ سیاست read-your-write را پیشنهاد بده."
    ],
    "whyItMatters": "partitioning به تنهایی تمام queryها را سریع نمی‌کند؛ partition pruning و الگوی query مهم‌اند.",
    "introduction": "پیکربندی Primary-Replica در پایگاه‌های داده، جداسازی عملیات خواندن از نوشتن (CQRS) و پارتیشن‌بندی افقی جداول حجیم.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Replication برای دسترس‌پذیری و خواندن مفید است اما replica lag دارد. Partitioning داده را به بخش‌ها تقسیم می‌کند؛ sharding میان گره‌ها هزینه join و transaction را بالا می‌برد. key انتخابی باید با queryها و توزیع بار سازگار باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "بلافاصله پس از write از replica عقب‌افتاده بخوان؛ سیاست read-your-write را پیشنهاد بده.",
      "solution": "partitioning به تنهایی تمام queryها را سریع نمی‌کند؛ partition pruning و الگوی query مهم‌اند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Write -> primary\nImmediate read-your-write -> primary or consistency-aware routing\nLag-tolerant reporting -> replica",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Database Replication and Partitioning",
      "explanation": "تجربه معماری Node را حفظ کن؛ تغییر زبان دلیل کافی برای microservices بیشتر نیست. معیار انتخاب، نیاز دامنه، ظرفیت و هزینه عملیات است."
    },
    "commonMistakes": [
      {
        "mistake": "partitioning به تنهایی تمام queryها را سریع نمی‌کند؛ partition pruning و الگوی query مهم‌اند.",
        "whyBad": "Replication برای دسترس‌پذیری و خواندن مفید است اما replica lag دارد. Partitioning داده را به بخش‌ها تقسیم می‌کند؛ sharding میان گره‌ها هزینه join و transaction را بالا می‌برد. key انتخابی باید با queryها و توزیع بار سازگار باشد.",
        "solution": "ندیدن آخرین write به علت lag"
      }
    ],
    "bestPractices": [
      "partitioning به تنهایی تمام queryها را سریع نمی‌کند؛ partition pruning و الگوی query مهم‌اند.",
      "بلافاصله پس از write از replica عقب‌افتاده بخوان؛ سیاست read-your-write را پیشنهاد بده."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "بلافاصله پس از write از replica عقب‌افتاده بخوان؛ سیاست read-your-write را پیشنهاد بده.",
      "acceptanceCriteria": [
        "بلافاصله پس از write از replica عقب‌افتاده بخوان؛ سیاست read-your-write را پیشنهاد بده.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "partitioning به تنهایی تمام queryها را سریع نمی‌کند؛ partition pruning و الگوی query مهم‌اند."
      ],
      "solution": {
        "code": "Write -> primary\nImmediate read-your-write -> primary or consistency-aware routing\nLag-tolerant reporting -> replica",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ندیدن آخرین write به علت lag. partitioning به تنهایی تمام queryها را سریع نمی‌کند؛ partition pruning و الگوی query مهم‌اند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-131",
        "question": "خواندن فوری از replica async چه ریسکی دارد؟",
        "options": [
          "تضمین همیشگی linearizability",
          "تبدیل خودکار replication به sharding",
          "ندیدن آخرین write به علت lag"
        ],
        "correctIndex": 2,
        "explanation": "ندیدن آخرین write به علت lag. Replication برای دسترس‌پذیری و خواندن مفید است اما replica lag دارد. Partitioning داده را به بخش‌ها تقسیم می‌کند؛ sharding میان گره‌ها هزینه join و transaction را بالا می‌برد. key انتخابی باید با queryها و توزیع بار سازگار باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: خواندن فوری از replica async چه ریسکی دارد؟",
        "answer": "ندیدن آخرین write به علت lag. partitioning به تنهایی تمام queryها را سریع نمی‌کند؛ partition pruning و الگوی query مهم‌اند."
      }
    ],
    "summary": "Replication برای دسترس‌پذیری و خواندن مفید است اما replica lag دارد. Partitioning داده را به بخش‌ها تقسیم می‌کند؛ sharding میان گره‌ها هزینه join و transaction را بالا می‌برد. key انتخابی باید با queryها و توزیع بار سازگار باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-modulith/reference/fundamentals.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-132",
    "slug": "architecture-decision-records",
    "week": 22,
    "day": 6,
    "title": "مستندسازی استاندارد تصمیمات با Architecture Decision Records (ADR)",
    "titleEn": "Architecture Decision Records",
    "description": "چگونگی نگارش اسناد تصمیمات معماری (ADR)، ساختار استاندارد وضعیت، زمینه، تصمیم و پیامدها در پروژه‌های تیمی.",
    "category": "System Design",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "ADR",
      "Documentation",
      "Architecture Governance"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 21",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "ADR خوب چه چیزی را حفظ می‌کند",
      "برای idempotency یک ADR یک‌صفحه‌ای بنویس؛ گزینه حافظه‌ای و دلیل رد آن را هم ثبت کن."
    ],
    "whyItMatters": "مستندات باید با تغییر تصمیم به‌روز شوند؛ تاریخچه تصمیم را بی‌صدا بازنویسی نکن.",
    "introduction": "چگونگی نگارش اسناد تصمیمات معماری (ADR)، ساختار استاندارد وضعیت، زمینه، تصمیم و پیامدها در پروژه‌های تیمی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "ADR تصمیم، زمینه، گزینه‌های کنارگذاشته‌شده و پیامدها را ثبت می‌کند. هدف مستندات حجیم نیست؛ همکار آینده باید بداند چرا راهکار فعلی انتخاب شده و چه زمانی بازنگری شود."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای idempotency یک ADR یک‌صفحه‌ای بنویس؛ گزینه حافظه‌ای و دلیل رد آن را هم ثبت کن.",
      "solution": "مستندات باید با تغییر تصمیم به‌روز شوند؛ تاریخچه تصمیم را بی‌صدا بازنویسی نکن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "markdown",
        "code": "# ADR: Inventory locking\nStatus: Accepted\nContext: competing reservations across instances\nDecision: conditional update in one transaction\nConsequences: inspect affected-row count; retry transient DB conflicts",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Architecture Decision Records",
      "explanation": "تجربه معماری Node را حفظ کن؛ تغییر زبان دلیل کافی برای microservices بیشتر نیست. معیار انتخاب، نیاز دامنه، ظرفیت و هزینه عملیات است."
    },
    "commonMistakes": [
      {
        "mistake": "مستندات باید با تغییر تصمیم به‌روز شوند؛ تاریخچه تصمیم را بی‌صدا بازنویسی نکن.",
        "whyBad": "ADR تصمیم، زمینه، گزینه‌های کنارگذاشته‌شده و پیامدها را ثبت می‌کند. هدف مستندات حجیم نیست؛ همکار آینده باید بداند چرا راهکار فعلی انتخاب شده و چه زمانی بازنگری شود.",
        "solution": "چرایی تصمیم و پیامدهای آن"
      }
    ],
    "bestPractices": [
      "مستندات باید با تغییر تصمیم به‌روز شوند؛ تاریخچه تصمیم را بی‌صدا بازنویسی نکن.",
      "برای idempotency یک ADR یک‌صفحه‌ای بنویس؛ گزینه حافظه‌ای و دلیل رد آن را هم ثبت کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای idempotency یک ADR یک‌صفحه‌ای بنویس؛ گزینه حافظه‌ای و دلیل رد آن را هم ثبت کن.",
      "acceptanceCriteria": [
        "برای idempotency یک ADR یک‌صفحه‌ای بنویس؛ گزینه حافظه‌ای و دلیل رد آن را هم ثبت کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "مستندات باید با تغییر تصمیم به‌روز شوند؛ تاریخچه تصمیم را بی‌صدا بازنویسی نکن."
      ],
      "solution": {
        "code": "# ADR: Inventory locking\nStatus: Accepted\nContext: competing reservations across instances\nDecision: conditional update in one transaction\nConsequences: inspect affected-row count; retry transient DB conflicts",
        "language": "markdown",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. چرایی تصمیم و پیامدهای آن. مستندات باید با تغییر تصمیم به‌روز شوند؛ تاریخچه تصمیم را بی‌صدا بازنویسی نکن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-132",
        "question": "ADR خوب چه چیزی را حفظ می‌کند؟",
        "options": [
          "چرایی تصمیم و پیامدهای آن",
          "فقط نام کتابخانه انتخاب‌شده",
          "کپی کامل همه کلاس‌های پروژه"
        ],
        "correctIndex": 0,
        "explanation": "چرایی تصمیم و پیامدهای آن. ADR تصمیم، زمینه، گزینه‌های کنارگذاشته‌شده و پیامدها را ثبت می‌کند. هدف مستندات حجیم نیست؛ همکار آینده باید بداند چرا راهکار فعلی انتخاب شده و چه زمانی بازنگری شود."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: ADR خوب چه چیزی را حفظ می‌کند؟",
        "answer": "چرایی تصمیم و پیامدهای آن. مستندات باید با تغییر تصمیم به‌روز شوند؛ تاریخچه تصمیم را بی‌صدا بازنویسی نکن."
      }
    ],
    "summary": "ADR تصمیم، زمینه، گزینه‌های کنارگذاشته‌شده و پیامدها را ثبت می‌کند. هدف مستندات حجیم نیست؛ همکار آینده باید بداند چرا راهکار فعلی انتخاب شده و چه زمانی بازنگری شود.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-modulith/reference/fundamentals.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
