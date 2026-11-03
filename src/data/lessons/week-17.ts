import { Lesson } from "../types";

export const WEEK_17_LESSONS: Lesson[] = [
  {
    "id": "lesson-097",
    "slug": "exchanges-queues-routing",
    "week": 17,
    "day": 1,
    "title": "مفاهیم صف‌ها، مبادلات (Exchanges) و مسیریابی در RabbitMQ",
    "titleEn": "Exchanges, Queues, Routing",
    "description": "کالبدشکافی ساختار پیام‌رسان RabbitMQ و تفاوت بنیادی مبادلات Direct, Fanout و Topic در مقایسه با وب‌هوک و ردیس.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "RabbitMQ",
      "Exchanges",
      "Queues",
      "Routing Keys",
      "AMQP"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 16",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "Consumer معمولاً از کجا پیام می‌خواند",
      "دو queue با binding متفاوت بساز؛ یک event باید فقط به صف‌های منطبق برسد."
    ],
    "whyItMatters": "exchange بدون binding مناسب می‌تواند پیام unroutable بسازد؛ برگشت آن را بررسی کن.",
    "introduction": "کالبدشکافی ساختار پیام‌رسان RabbitMQ و تفاوت بنیادی مبادلات Direct, Fanout و Topic در مقایسه با وب‌هوک و ردیس.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Exchange پیام را براساس نوع و binding به queue هدایت می‌کند؛ consumer از queue می‌خواند. direct تطبیق دقیق routing key و topic الگوی قطعه‌بندی‌شده دارد. durable بودن تعریف با پایداری هر پیام یکی نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو queue با binding متفاوت بساز؛ یک event باید فقط به صف‌های منطبق برسد.",
      "solution": "exchange بدون binding مناسب می‌تواند پیام unroutable بسازد؛ برگشت آن را بررسی کن."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "Producer -> topic exchange orders\nBinding: order.created -> inventory-events queue\nConsumer <- inventory-events",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Exchanges, Queues, Routing",
      "explanation": "قرارداد تحویل broker مستقل از زبان client است. در Spring AMQP به تنظیمات ack/confirm container دقت کن؛ API publish به تنهایی اثبات پردازش نیست."
    },
    "commonMistakes": [
      {
        "mistake": "exchange بدون binding مناسب می‌تواند پیام unroutable بسازد؛ برگشت آن را بررسی کن.",
        "whyBad": "Exchange پیام را براساس نوع و binding به queue هدایت می‌کند؛ consumer از queue می‌خواند. direct تطبیق دقیق routing key و topic الگوی قطعه‌بندی‌شده دارد. durable بودن تعریف با پایداری هر پیام یکی نیست.",
        "solution": "Queue"
      }
    ],
    "bestPractices": [
      "exchange بدون binding مناسب می‌تواند پیام unroutable بسازد؛ برگشت آن را بررسی کن.",
      "دو queue با binding متفاوت بساز؛ یک event باید فقط به صف‌های منطبق برسد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو queue با binding متفاوت بساز؛ یک event باید فقط به صف‌های منطبق برسد.",
      "acceptanceCriteria": [
        "دو queue با binding متفاوت بساز؛ یک event باید فقط به صف‌های منطبق برسد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "exchange بدون binding مناسب می‌تواند پیام unroutable بسازد؛ برگشت آن را بررسی کن."
      ],
      "solution": {
        "code": "Producer -> topic exchange orders\nBinding: order.created -> inventory-events queue\nConsumer <- inventory-events",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. Queue. exchange بدون binding مناسب می‌تواند پیام unroutable بسازد؛ برگشت آن را بررسی کن."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-097",
        "question": "Consumer معمولاً از کجا پیام می‌خواند؟",
        "options": [
          "مستقیماً از routing key بدون queue",
          "Queue",
          "از جدول metadata exchange"
        ],
        "correctIndex": 1,
        "explanation": "Queue. Exchange پیام را براساس نوع و binding به queue هدایت می‌کند؛ consumer از queue می‌خواند. direct تطبیق دقیق routing key و topic الگوی قطعه‌بندی‌شده دارد. durable بودن تعریف با پایداری هر پیام یکی نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: Consumer معمولاً از کجا پیام می‌خواند؟",
        "answer": "Queue. exchange بدون binding مناسب می‌تواند پیام unroutable بسازد؛ برگشت آن را بررسی کن."
      }
    ],
    "summary": "Exchange پیام را براساس نوع و binding به queue هدایت می‌کند؛ consumer از queue می‌خواند. direct تطبیق دقیق routing key و topic الگوی قطعه‌بندی‌شده دارد. durable بودن تعریف با پایداری هر پیام یکی نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/confirms"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-098",
    "slug": "publishers-and-consumers",
    "week": 17,
    "day": 2,
    "title": "پیاده‌سازی ناشران (Publishers) و مصرف‌کنندگان (Consumers) در Spring AMQP",
    "titleEn": "Publishers and Consumers",
    "description": "کار با RabbitTemplate، انوتیشن @RabbitListener و سریالایز کردن خودکار اشیای رویداد به JSON.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Spring AMQP",
      "RabbitTemplate",
      "RabbitListener",
      "Serialization"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 16",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "Publisher confirm موفق چه چیزی را اثبات نمی‌کند",
      "binding را حذف کن و رفتار publish را مشاهده کن؛ خطا نباید بی‌صدا ناپدید شود."
    ],
    "whyItMatters": "ارسال async بدون مشاهده confirm به معنی تحویل تضمینی نیست.",
    "introduction": "کار با RabbitTemplate، انوتیشن @RabbitListener و سریالایز کردن خودکار اشیای رویداد به JSON.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "تأیید publisher یعنی broker پیام را پذیرفته؛ به معنی پردازش consumer نیست. consumer باید پس از موفقیت اثر محلی ack کند. برای پیام unroutable، mandatory و return handling را متناسب پیکربندی کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "binding را حذف کن و رفتار publish را مشاهده کن؛ خطا نباید بی‌صدا ناپدید شود.",
      "solution": "ارسال async بدون مشاهده confirm به معنی تحویل تضمینی نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "template.convertAndSend(\"orders\", \"order.created\", event);\n// Configure publisher confirms and returned-message handling separately.\n// Ack consumer only after its durable transaction commits.",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Publishers and Consumers",
      "explanation": "قرارداد تحویل broker مستقل از زبان client است. در Spring AMQP به تنظیمات ack/confirm container دقت کن؛ API publish به تنهایی اثبات پردازش نیست."
    },
    "commonMistakes": [
      {
        "mistake": "ارسال async بدون مشاهده confirm به معنی تحویل تضمینی نیست.",
        "whyBad": "تأیید publisher یعنی broker پیام را پذیرفته؛ به معنی پردازش consumer نیست. consumer باید پس از موفقیت اثر محلی ack کند. برای پیام unroutable، mandatory و return handling را متناسب پیکربندی کن.",
        "solution": "اجرای موفق منطق consumer"
      }
    ],
    "bestPractices": [
      "ارسال async بدون مشاهده confirm به معنی تحویل تضمینی نیست.",
      "binding را حذف کن و رفتار publish را مشاهده کن؛ خطا نباید بی‌صدا ناپدید شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "binding را حذف کن و رفتار publish را مشاهده کن؛ خطا نباید بی‌صدا ناپدید شود.",
      "acceptanceCriteria": [
        "binding را حذف کن و رفتار publish را مشاهده کن؛ خطا نباید بی‌صدا ناپدید شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "ارسال async بدون مشاهده confirm به معنی تحویل تضمینی نیست."
      ],
      "solution": {
        "code": "template.convertAndSend(\"orders\", \"order.created\", event);\n// Configure publisher confirms and returned-message handling separately.\n// Ack consumer only after its durable transaction commits.",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. اجرای موفق منطق consumer. ارسال async بدون مشاهده confirm به معنی تحویل تضمینی نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-098",
        "question": "Publisher confirm موفق چه چیزی را اثبات نمی‌کند؟",
        "options": [
          "پذیرش publish طبق semantics broker",
          "رسیدن تأیید به publisher",
          "اجرای موفق منطق consumer"
        ],
        "correctIndex": 2,
        "explanation": "اجرای موفق منطق consumer. تأیید publisher یعنی broker پیام را پذیرفته؛ به معنی پردازش consumer نیست. consumer باید پس از موفقیت اثر محلی ack کند. برای پیام unroutable، mandatory و return handling را متناسب پیکربندی کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: Publisher confirm موفق چه چیزی را اثبات نمی‌کند؟",
        "answer": "اجرای موفق منطق consumer. ارسال async بدون مشاهده confirm به معنی تحویل تضمینی نیست."
      }
    ],
    "summary": "تأیید publisher یعنی broker پیام را پذیرفته؛ به معنی پردازش consumer نیست. consumer باید پس از موفقیت اثر محلی ack کند. برای پیام unroutable، mandatory و return handling را متناسب پیکربندی کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/confirms"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-099",
    "slug": "at-least-once-delivery-and-acknowledgments",
    "week": 17,
    "day": 3,
    "title": "تضمین تحویل حداقل یک‌بار (At-least-once) و تاییدیه‌های دستی (Acks)",
    "titleEn": "At-least-once Delivery and Acknowledgments",
    "description": "تنظیم AcknowledgeMode.MANUAL، مدیریت BasicAck و BasicNack و خطرات از دست رفتن پیام‌ها در حین قطع سرور.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Message Acks",
      "Reliability",
      "At-least-once",
      "Message Delivery"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 16",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا پیام بعد از commit ممکن است تکرار شود",
      "consumer را پس از commit و قبل از ack متوقف کن؛ redelivery نباید دوباره موجودی را تغییر دهد."
    ],
    "whyItMatters": "ack قبل از commit ریسک گم‌شدن اثر را در crash بالا می‌برد.",
    "introduction": "تنظیم AcknowledgeMode.MANUAL، مدیریت BasicAck و BasicNack و خطرات از دست رفتن پیام‌ها در حین قطع سرور.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "At-least-once یعنی duplicate ممکن است. اگر consumer پس از commit و پیش از ack قطع شود، پیام دوباره تحویل می‌شود. اثر تجاری باید با eventId و constraint یکتا idempotent شود."
      }
    ],
    "realWorldScenario": {
      "scenario": "consumer را پس از commit و قبل از ack متوقف کن؛ redelivery نباید دوباره موجودی را تغییر دهد.",
      "solution": "ack قبل از commit ریسک گم‌شدن اثر را در crash بالا می‌برد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "1. Receive event\n2. Begin DB transaction\n3. Claim eventId and apply business change\n4. Commit\n5. Ack",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "At-least-once Delivery and Acknowledgments",
      "explanation": "قرارداد تحویل broker مستقل از زبان client است. در Spring AMQP به تنظیمات ack/confirm container دقت کن؛ API publish به تنهایی اثبات پردازش نیست."
    },
    "commonMistakes": [
      {
        "mistake": "ack قبل از commit ریسک گم‌شدن اثر را در crash بالا می‌برد.",
        "whyBad": "At-least-once یعنی duplicate ممکن است. اگر consumer پس از commit و پیش از ack قطع شود، پیام دوباره تحویل می‌شود. اثر تجاری باید با eventId و constraint یکتا idempotent شود.",
        "solution": "ack هنوز به broker نرسیده است"
      }
    ],
    "bestPractices": [
      "ack قبل از commit ریسک گم‌شدن اثر را در crash بالا می‌برد.",
      "consumer را پس از commit و قبل از ack متوقف کن؛ redelivery نباید دوباره موجودی را تغییر دهد."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "consumer را پس از commit و قبل از ack متوقف کن؛ redelivery نباید دوباره موجودی را تغییر دهد.",
      "acceptanceCriteria": [
        "consumer را پس از commit و قبل از ack متوقف کن؛ redelivery نباید دوباره موجودی را تغییر دهد.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "ack قبل از commit ریسک گم‌شدن اثر را در crash بالا می‌برد."
      ],
      "solution": {
        "code": "1. Receive event\n2. Begin DB transaction\n3. Claim eventId and apply business change\n4. Commit\n5. Ack",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ack هنوز به broker نرسیده است. ack قبل از commit ریسک گم‌شدن اثر را در crash بالا می‌برد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-099",
        "question": "چرا پیام بعد از commit ممکن است تکرار شود؟",
        "options": [
          "ack هنوز به broker نرسیده است",
          "commit به معنی حذف همه queueهاست",
          "RabbitMQ فقط exactly-once دارد"
        ],
        "correctIndex": 0,
        "explanation": "ack هنوز به broker نرسیده است. At-least-once یعنی duplicate ممکن است. اگر consumer پس از commit و پیش از ack قطع شود، پیام دوباره تحویل می‌شود. اثر تجاری باید با eventId و constraint یکتا idempotent شود."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا پیام بعد از commit ممکن است تکرار شود؟",
        "answer": "ack هنوز به broker نرسیده است. ack قبل از commit ریسک گم‌شدن اثر را در crash بالا می‌برد."
      }
    ],
    "summary": "At-least-once یعنی duplicate ممکن است. اگر consumer پس از commit و پیش از ack قطع شود، پیام دوباره تحویل می‌شود. اثر تجاری باید با eventId و constraint یکتا idempotent شود.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/confirms"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-100",
    "slug": "publishing-ordercreated-events",
    "week": 17,
    "day": 4,
    "title": "انتشار رویداد OrderCreated و ارسال اعلان خرید (پروژه محوری)",
    "titleEn": "Publishing OrderCreated Events",
    "description": "ارسال ناهمگام ایونت ساخت سفارش به ربیت‌ام‌کیو و دریافت آن توسط سرویس شبیه‌سازی انبار و صدور فاکتور.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "OrderCreated Event",
      "Async Processing",
      "RabbitMQ Flow"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 16",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "چرا OrderCreated را از entity JPA کامل نسازیم",
      "payload را serialize و deserialize کن؛ producer نباید entity کامل و اطلاعات حساس مشتری را منتشر کند."
    ],
    "whyItMatters": "نام event باید واقعیت رخ‌داده را بگوید، نه فرمانی که هنوز ممکن است شکست بخورد.",
    "introduction": "ارسال ناهمگام ایونت ساخت سفارش به ربیت‌ام‌کیو و دریافت آن توسط سرویس شبیه‌سازی انبار و صدور فاکتور.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Event تجاری باید شناسه، نوع، زمان و نسخه schema داشته باشد. انتشار مستقیم بعد از commit پنجره گم‌شدن پیام دارد و انتشار قبل از commit می‌تواند رویداد سفارش rollback‌شده بسازد؛ outbox این مرز را هماهنگ می‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "payload را serialize و deserialize کن؛ producer نباید entity کامل و اطلاعات حساس مشتری را منتشر کند.",
      "solution": "نام event باید واقعیت رخ‌داده را بگوید، نه فرمانی که هنوز ممکن است شکست بخورد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "json",
        "code": "{\"eventId\":\"unique-id\",\"type\":\"OrderCreated\",\"version\":1,\"occurredAt\":\"2026-01-01T00:00:00Z\",\"data\":{\"orderId\":\"order-id\"}}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Publishing OrderCreated Events",
      "explanation": "قرارداد تحویل broker مستقل از زبان client است. در Spring AMQP به تنظیمات ack/confirm container دقت کن؛ API publish به تنهایی اثبات پردازش نیست."
    },
    "commonMistakes": [
      {
        "mistake": "نام event باید واقعیت رخ‌داده را بگوید، نه فرمانی که هنوز ممکن است شکست بخورد.",
        "whyBad": "Event تجاری باید شناسه، نوع، زمان و نسخه schema داشته باشد. انتشار مستقیم بعد از commit پنجره گم‌شدن پیام دارد و انتشار قبل از commit می‌تواند رویداد سفارش rollback‌شده بسازد؛ outbox این مرز را هماهنگ می‌کند.",
        "solution": "قرارداد event باید مستقل و حداقلی باشد"
      }
    ],
    "bestPractices": [
      "نام event باید واقعیت رخ‌داده را بگوید، نه فرمانی که هنوز ممکن است شکست بخورد.",
      "payload را serialize و deserialize کن؛ producer نباید entity کامل و اطلاعات حساس مشتری را منتشر کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "payload را serialize و deserialize کن؛ producer نباید entity کامل و اطلاعات حساس مشتری را منتشر کند.",
      "acceptanceCriteria": [
        "payload را serialize و deserialize کن؛ producer نباید entity کامل و اطلاعات حساس مشتری را منتشر کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "نام event باید واقعیت رخ‌داده را بگوید، نه فرمانی که هنوز ممکن است شکست بخورد."
      ],
      "solution": {
        "code": "{\"eventId\":\"unique-id\",\"type\":\"OrderCreated\",\"version\":1,\"occurredAt\":\"2026-01-01T00:00:00Z\",\"data\":{\"orderId\":\"order-id\"}}",
        "language": "json",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. قرارداد event باید مستقل و حداقلی باشد. نام event باید واقعیت رخ‌داده را بگوید، نه فرمانی که هنوز ممکن است شکست بخورد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-100",
        "question": "چرا OrderCreated را از entity JPA کامل نسازیم؟",
        "options": [
          "JSON هیچ entity را serialize نمی‌کند",
          "قرارداد event باید مستقل و حداقلی باشد",
          "event نباید هیچ شناسه‌ای داشته باشد"
        ],
        "correctIndex": 1,
        "explanation": "قرارداد event باید مستقل و حداقلی باشد. Event تجاری باید شناسه، نوع، زمان و نسخه schema داشته باشد. انتشار مستقیم بعد از commit پنجره گم‌شدن پیام دارد و انتشار قبل از commit می‌تواند رویداد سفارش rollback‌شده بسازد؛ outbox این مرز را هماهنگ می‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: چرا OrderCreated را از entity JPA کامل نسازیم؟",
        "answer": "قرارداد event باید مستقل و حداقلی باشد. نام event باید واقعیت رخ‌داده را بگوید، نه فرمانی که هنوز ممکن است شکست بخورد."
      }
    ],
    "summary": "Event تجاری باید شناسه، نوع، زمان و نسخه schema داشته باشد. انتشار مستقیم بعد از commit پنجره گم‌شدن پیام دارد و انتشار قبل از commit می‌تواند رویداد سفارش rollback‌شده بسازد؛ outbox این مرز را هماهنگ می‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/confirms"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-101",
    "slug": "retry-and-dead-letter-queues",
    "week": 17,
    "day": 5,
    "title": "مدیریت پیام‌های مسموم با صف‌های بازبینی (Dead Letter Queues)",
    "titleEn": "Retry and Dead Letter Queues",
    "description": "پیکربندی Dead Letter Exchange (DLX)، تعیین سقف تلاش مجدد و بایگانی پیام‌های غیرقابل پردازش جهت تحلیل دستی.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "Dead Letter Queue",
      "DLX",
      "Error Handling",
      "Poison Pills"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 16",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "پیام با schema نامعتبر معمولاً چه می‌خواهد",
      "یک payload خراب و یک timeout موقت بساز؛ اولی به DLQ و دومی پس از بازیابی موفق شود."
    ],
    "whyItMatters": "redelivery فوری بدون تأخیر می‌تواند حلقه داغ مصرف CPU بسازد.",
    "introduction": "پیکربندی Dead Letter Exchange (DLX)، تعیین سقف تلاش مجدد و بایگانی پیام‌های غیرقابل پردازش جهت تحلیل دستی.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Retry بی‌نهایت یک poison message می‌تواند صف را قفل یا overload کند. تعداد تلاش، backoff و DLQ مشخص کن؛ پیام‌های validation دائمی معمولاً retry یکسان نمی‌خواهند. replay باید با کنترل و idempotency باشد."
      }
    ],
    "realWorldScenario": {
      "scenario": "یک payload خراب و یک timeout موقت بساز؛ اولی به DLQ و دومی پس از بازیابی موفق شود.",
      "solution": "redelivery فوری بدون تأخیر می‌تواند حلقه داغ مصرف CPU بسازد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "text",
        "code": "main queue -> failure classification\ntransient -> delayed retry with bounded attempts\npermanent / exhausted -> dead-letter queue + alert",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Retry and Dead Letter Queues",
      "explanation": "قرارداد تحویل broker مستقل از زبان client است. در Spring AMQP به تنظیمات ack/confirm container دقت کن؛ API publish به تنهایی اثبات پردازش نیست."
    },
    "commonMistakes": [
      {
        "mistake": "redelivery فوری بدون تأخیر می‌تواند حلقه داغ مصرف CPU بسازد.",
        "whyBad": "Retry بی‌نهایت یک poison message می‌تواند صف را قفل یا overload کند. تعداد تلاش، backoff و DLQ مشخص کن؛ پیام‌های validation دائمی معمولاً retry یکسان نمی‌خواهند. replay باید با کنترل و idempotency باشد.",
        "solution": "قرنطینه و بررسی، نه retry بی‌پایان"
      }
    ],
    "bestPractices": [
      "redelivery فوری بدون تأخیر می‌تواند حلقه داغ مصرف CPU بسازد.",
      "یک payload خراب و یک timeout موقت بساز؛ اولی به DLQ و دومی پس از بازیابی موفق شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "یک payload خراب و یک timeout موقت بساز؛ اولی به DLQ و دومی پس از بازیابی موفق شود.",
      "acceptanceCriteria": [
        "یک payload خراب و یک timeout موقت بساز؛ اولی به DLQ و دومی پس از بازیابی موفق شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "redelivery فوری بدون تأخیر می‌تواند حلقه داغ مصرف CPU بسازد."
      ],
      "solution": {
        "code": "main queue -> failure classification\ntransient -> delayed retry with bounded attempts\npermanent / exhausted -> dead-letter queue + alert",
        "language": "text",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. قرنطینه و بررسی، نه retry بی‌پایان. redelivery فوری بدون تأخیر می‌تواند حلقه داغ مصرف CPU بسازد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-101",
        "question": "پیام با schema نامعتبر معمولاً چه می‌خواهد؟",
        "options": [
          "retry هر میلی‌ثانیه تا همیشه",
          "ack و فراموشی بدون مشاهده‌پذیری",
          "قرنطینه و بررسی، نه retry بی‌پایان"
        ],
        "correctIndex": 2,
        "explanation": "قرنطینه و بررسی، نه retry بی‌پایان. Retry بی‌نهایت یک poison message می‌تواند صف را قفل یا overload کند. تعداد تلاش، backoff و DLQ مشخص کن؛ پیام‌های validation دائمی معمولاً retry یکسان نمی‌خواهند. replay باید با کنترل و idempotency باشد."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: پیام با schema نامعتبر معمولاً چه می‌خواهد؟",
        "answer": "قرنطینه و بررسی، نه retry بی‌پایان. redelivery فوری بدون تأخیر می‌تواند حلقه داغ مصرف CPU بسازد."
      }
    ],
    "summary": "Retry بی‌نهایت یک poison message می‌تواند صف را قفل یا overload کند. تعداد تلاش، backoff و DLQ مشخص کن؛ پیام‌های validation دائمی معمولاً retry یکسان نمی‌خواهند. replay باید با کنترل و idempotency باشد.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/confirms"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-102",
    "slug": "rabbitmq-with-docker",
    "week": 17,
    "day": 6,
    "title": "راه‌اندازی، تنظیمات امنیتی و مانیتورینگ RabbitMQ با Docker",
    "titleEn": "RabbitMQ with Docker",
    "description": "اجرای کانتینر rabbitmq:3-management با داکر کامپوز، تنظیم کاربر و رمزهای اختصاصی و ورود به داشبورد مدیریتی وب.",
    "category": "Event-Driven",
    "difficulty": "Advanced",
    "estimatedMinutes": 25,
    "tags": [
      "RabbitMQ Docker",
      "Management UI",
      "DevOps"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 16",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "durable queue به تنهایی تضمین پایداری همه پیام‌هاست",
      "broker را restart کن و باقی‌ماندن queue durable و پیام persistent را جدا بررسی کن."
    ],
    "whyItMatters": "depends_on بدون health و سیاست reconnect به تنهایی آماده‌بودن broker را تضمین نمی‌کند.",
    "introduction": "اجرای کانتینر rabbitmq:3-management با داکر کامپوز، تنظیم کاربر و رمزهای اختصاصی و ورود به داشبورد مدیریتی وب.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "RabbitMQ محلی با volume و healthcheck تکرارپذیرتر است. credential نمونه فقط برای توسعه است و پورت management نباید بی‌دلیل عمومی باشد. readiness اپ را با رفتار واقعی اتصال و retry راه‌اندازی بسنج."
      }
    ],
    "realWorldScenario": {
      "scenario": "broker را restart کن و باقی‌ماندن queue durable و پیام persistent را جدا بررسی کن.",
      "solution": "depends_on بدون health و سیاست reconnect به تنهایی آماده‌بودن broker را تضمین نمی‌کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "services:\n  rabbitmq:\n    image: rabbitmq:4-management\n    ports:\n      - \"127.0.0.1:15672:15672\"\n    volumes:\n      - rabbit_data:/var/lib/rabbitmq\nvolumes:\n  rabbit_data:",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "RabbitMQ with Docker",
      "explanation": "قرارداد تحویل broker مستقل از زبان client است. در Spring AMQP به تنظیمات ack/confirm container دقت کن؛ API publish به تنهایی اثبات پردازش نیست."
    },
    "commonMistakes": [
      {
        "mistake": "depends_on بدون health و سیاست reconnect به تنهایی آماده‌بودن broker را تضمین نمی‌کند.",
        "whyBad": "RabbitMQ محلی با volume و healthcheck تکرارپذیرتر است. credential نمونه فقط برای توسعه است و پورت management نباید بی‌دلیل عمومی باشد. readiness اپ را با رفتار واقعی اتصال و retry راه‌اندازی بسنج.",
        "solution": "خیر؛ persistence پیام و confirm هم مهم‌اند"
      }
    ],
    "bestPractices": [
      "depends_on بدون health و سیاست reconnect به تنهایی آماده‌بودن broker را تضمین نمی‌کند.",
      "broker را restart کن و باقی‌ماندن queue durable و پیام persistent را جدا بررسی کن."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "broker را restart کن و باقی‌ماندن queue durable و پیام persistent را جدا بررسی کن.",
      "acceptanceCriteria": [
        "broker را restart کن و باقی‌ماندن queue durable و پیام persistent را جدا بررسی کن.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "depends_on بدون health و سیاست reconnect به تنهایی آماده‌بودن broker را تضمین نمی‌کند."
      ],
      "solution": {
        "code": "services:\n  rabbitmq:\n    image: rabbitmq:4-management\n    ports:\n      - \"127.0.0.1:15672:15672\"\n    volumes:\n      - rabbit_data:/var/lib/rabbitmq\nvolumes:\n  rabbit_data:",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ persistence پیام و confirm هم مهم‌اند. depends_on بدون health و سیاست reconnect به تنهایی آماده‌بودن broker را تضمین نمی‌کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-102",
        "question": "durable queue به تنهایی تضمین پایداری همه پیام‌هاست؟",
        "options": [
          "خیر؛ persistence پیام و confirm هم مهم‌اند",
          "بله؛ حتی پیام transient بدون confirm",
          "فقط نام queue باید durable باشد"
        ],
        "correctIndex": 0,
        "explanation": "خیر؛ persistence پیام و confirm هم مهم‌اند. RabbitMQ محلی با volume و healthcheck تکرارپذیرتر است. credential نمونه فقط برای توسعه است و پورت management نباید بی‌دلیل عمومی باشد. readiness اپ را با رفتار واقعی اتصال و retry راه‌اندازی بسنج."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: durable queue به تنهایی تضمین پایداری همه پیام‌هاست؟",
        "answer": "خیر؛ persistence پیام و confirm هم مهم‌اند. depends_on بدون health و سیاست reconnect به تنهایی آماده‌بودن broker را تضمین نمی‌کند."
      }
    ],
    "summary": "RabbitMQ محلی با volume و healthcheck تکرارپذیرتر است. credential نمونه فقط برای توسعه است و پورت management نباید بی‌دلیل عمومی باشد. readiness اپ را با رفتار واقعی اتصال و retry راه‌اندازی بسنج.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://www.rabbitmq.com/docs/confirms"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
