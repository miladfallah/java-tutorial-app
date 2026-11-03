import { Lesson } from "../types";

export const WEEK_13_LESSONS: Lesson[] = [
  {
    "id": "lesson-073",
    "slug": "authentication-and-authorization",
    "week": 13,
    "day": 1,
    "title": "مفاهیم بنیادی احراز هویت (Authentication) و مجوزدهی (Authorization)",
    "titleEn": "Authentication and Authorization",
    "description": "تفاوت بنیادی احراز هویت با تشخیص دسترسی، مدل‌های امنیتی مدرن و تطبیق آنها با تجربیات پاسپورت در NestJS.",
    "category": "Security",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Authentication",
      "Authorization",
      "Security Fundamentals"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 12",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "آیا authenticated بودن برای خواندن هر order کافی است",
      "دو کاربر با دو سفارش بساز؛ خواندن سفارش کاربر دیگر نباید داده افشا کند."
    ],
    "whyItMatters": "customerId معتبر را از principal بگیر، نه از body یا query قابل جعل.",
    "introduction": "تفاوت بنیادی احراز هویت با تشخیص دسترسی، مدل‌های امنیتی مدرن و تطبیق آنها با تجربیات پاسپورت در NestJS.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Authentication هویت را مشخص می‌کند؛ authorization مجازبودن عمل روی منبع را. کاربر لاگین‌شده نباید سفارش مشتری دیگر را فقط با حدس id بخواند. ownership را در query یا service enforce کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "دو کاربر با دو سفارش بساز؛ خواندن سفارش کاربر دیگر نباید داده افشا کند.",
      "solution": "customerId معتبر را از principal بگیر، نه از body یا query قابل جعل."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@PreAuthorize(\"isAuthenticated()\")\npublic OrderResponse get(UUID id, String customerId) {\n    return repository.findByIdAndCustomerId(id, customerId)\n        .map(OrderResponse::fromEntity).orElseThrow(NotFoundException::new);\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Authentication and Authorization",
      "explanation": "Guard و Passport در Nest آشنا هستند؛ در Spring زنجیره filter و method security را جدا بشناس. احراز هویت معتبر در هیچ‌کدام جای کنترل مالکیت را نمی‌گیرد."
    },
    "commonMistakes": [
      {
        "mistake": "customerId معتبر را از principal بگیر، نه از body یا query قابل جعل.",
        "whyBad": "Authentication هویت را مشخص می‌کند؛ authorization مجازبودن عمل روی منبع را. کاربر لاگین‌شده نباید سفارش مشتری دیگر را فقط با حدس id بخواند. ownership را در query یا service enforce کن.",
        "solution": "خیر؛ ownership یا policy دسترسی هم لازم است"
      }
    ],
    "bestPractices": [
      "customerId معتبر را از principal بگیر، نه از body یا query قابل جعل.",
      "دو کاربر با دو سفارش بساز؛ خواندن سفارش کاربر دیگر نباید داده افشا کند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "دو کاربر با دو سفارش بساز؛ خواندن سفارش کاربر دیگر نباید داده افشا کند.",
      "acceptanceCriteria": [
        "دو کاربر با دو سفارش بساز؛ خواندن سفارش کاربر دیگر نباید داده افشا کند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "customerId معتبر را از principal بگیر، نه از body یا query قابل جعل."
      ],
      "solution": {
        "code": "@PreAuthorize(\"isAuthenticated()\")\npublic OrderResponse get(UUID id, String customerId) {\n    return repository.findByIdAndCustomerId(id, customerId)\n        .map(OrderResponse::fromEntity).orElseThrow(NotFoundException::new);\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ ownership یا policy دسترسی هم لازم است. customerId معتبر را از principal بگیر، نه از body یا query قابل جعل."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-073",
        "question": "آیا authenticated بودن برای خواندن هر order کافی است؟",
        "options": [
          "بله؛ UUID غیرقابل حدس است",
          "خیر؛ ownership یا policy دسترسی هم لازم است",
          "بله؛ اگر role نام USER داشته باشد"
        ],
        "correctIndex": 1,
        "explanation": "خیر؛ ownership یا policy دسترسی هم لازم است. Authentication هویت را مشخص می‌کند؛ authorization مجازبودن عمل روی منبع را. کاربر لاگین‌شده نباید سفارش مشتری دیگر را فقط با حدس id بخواند. ownership را در query یا service enforce کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: آیا authenticated بودن برای خواندن هر order کافی است؟",
        "answer": "خیر؛ ownership یا policy دسترسی هم لازم است. customerId معتبر را از principal بگیر، نه از body یا query قابل جعل."
      }
    ],
    "summary": "Authentication هویت را مشخص می‌کند؛ authorization مجازبودن عمل روی منبع را. کاربر لاگین‌شده نباید سفارش مشتری دیگر را فقط با حدس id بخواند. ownership را در query یا service enforce کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-security/reference/servlet/architecture.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-074",
    "slug": "spring-security-filter-chain",
    "week": 13,
    "day": 2,
    "title": "کالبدشکافی زنجیره فیلترهای امنیتی (SecurityFilterChain) در اسپرینگ",
    "titleEn": "Spring Security Filter Chain",
    "description": "نحوه پردازش درخواست‌ها در زنجیره فیلترهای اسپرینگ، انطباق با نسخه‌های جدید Spring Security 6 بدون WebSecurityConfigurerAdapter.",
    "category": "Security",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "SecurityFilterChain",
      "Spring Security 6",
      "Servlet Filters"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 12",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "SecurityFilterChain معمولاً چه زمانی اجرا می‌شود",
      "برای anonymous، کاربر معتبر و مسیر health تست 401/200 بنویس؛ تمام actuatorها عمومی نباشند."
    ],
    "whyItMatters": "CSRF را فقط با تحلیل نوع credential و client غیرفعال کن؛ stateless بودن به تنهایی کافی نیست.",
    "introduction": "نحوه پردازش درخواست‌ها در زنجیره فیلترهای اسپرینگ، انطباق با نسخه‌های جدید Spring Security 6 بدون WebSecurityConfigurerAdapter.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "SecurityFilterChain پیش از MVC درخواست را احراز و مجوزدهی می‌کند. چند chain با matcher و order انتخاب می‌شوند؛ نخستین chain منطبق مهم است. permitAll برای /api/** محافظت واقعی API را حذف می‌کند."
      }
    ],
    "realWorldScenario": {
      "scenario": "برای anonymous، کاربر معتبر و مسیر health تست 401/200 بنویس؛ تمام actuatorها عمومی نباشند.",
      "solution": "CSRF را فقط با تحلیل نوع credential و client غیرفعال کن؛ stateless بودن به تنهایی کافی نیست."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@Bean\nSecurityFilterChain security(HttpSecurity http) throws Exception {\n    return http.authorizeHttpRequests(a -> a\n        .requestMatchers(\"/actuator/health/**\").permitAll()\n        .anyRequest().authenticated()).httpBasic(Customizer.withDefaults()).build();\n}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Spring Security Filter Chain",
      "explanation": "Guard و Passport در Nest آشنا هستند؛ در Spring زنجیره filter و method security را جدا بشناس. احراز هویت معتبر در هیچ‌کدام جای کنترل مالکیت را نمی‌گیرد."
    },
    "commonMistakes": [
      {
        "mistake": "CSRF را فقط با تحلیل نوع credential و client غیرفعال کن؛ stateless بودن به تنهایی کافی نیست.",
        "whyBad": "SecurityFilterChain پیش از MVC درخواست را احراز و مجوزدهی می‌کند. چند chain با matcher و order انتخاب می‌شوند؛ نخستین chain منطبق مهم است. permitAll برای /api/** محافظت واقعی API را حذف می‌کند.",
        "solution": "پیش از رسیدن درخواست به controller"
      }
    ],
    "bestPractices": [
      "CSRF را فقط با تحلیل نوع credential و client غیرفعال کن؛ stateless بودن به تنهایی کافی نیست.",
      "برای anonymous، کاربر معتبر و مسیر health تست 401/200 بنویس؛ تمام actuatorها عمومی نباشند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "برای anonymous، کاربر معتبر و مسیر health تست 401/200 بنویس؛ تمام actuatorها عمومی نباشند.",
      "acceptanceCriteria": [
        "برای anonymous، کاربر معتبر و مسیر health تست 401/200 بنویس؛ تمام actuatorها عمومی نباشند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "CSRF را فقط با تحلیل نوع credential و client غیرفعال کن؛ stateless بودن به تنهایی کافی نیست."
      ],
      "solution": {
        "code": "@Bean\nSecurityFilterChain security(HttpSecurity http) throws Exception {\n    return http.authorizeHttpRequests(a -> a\n        .requestMatchers(\"/actuator/health/**\").permitAll()\n        .anyRequest().authenticated()).httpBasic(Customizer.withDefaults()).build();\n}",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. پیش از رسیدن درخواست به controller. CSRF را فقط با تحلیل نوع credential و client غیرفعال کن؛ stateless بودن به تنهایی کافی نیست."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-074",
        "question": "SecurityFilterChain معمولاً چه زمانی اجرا می‌شود؟",
        "options": [
          "فقط پس از serialization پاسخ",
          "فقط اگر controller آن را دستی صدا کند",
          "پیش از رسیدن درخواست به controller"
        ],
        "correctIndex": 2,
        "explanation": "پیش از رسیدن درخواست به controller. SecurityFilterChain پیش از MVC درخواست را احراز و مجوزدهی می‌کند. چند chain با matcher و order انتخاب می‌شوند؛ نخستین chain منطبق مهم است. permitAll برای /api/** محافظت واقعی API را حذف می‌کند."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: SecurityFilterChain معمولاً چه زمانی اجرا می‌شود؟",
        "answer": "پیش از رسیدن درخواست به controller. CSRF را فقط با تحلیل نوع credential و client غیرفعال کن؛ stateless بودن به تنهایی کافی نیست."
      }
    ],
    "summary": "SecurityFilterChain پیش از MVC درخواست را احراز و مجوزدهی می‌کند. چند chain با matcher و order انتخاب می‌شوند؛ نخستین chain منطبق مهم است. permitAll برای /api/** محافظت واقعی API را حذف می‌کند.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-security/reference/servlet/architecture.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-075",
    "slug": "jwt-and-oauth2-oidc",
    "week": 13,
    "day": 3,
    "title": "پیاده‌سازی توکن‌های بدون وضعیت JWT و استاندارد OAuth2/OIDC",
    "titleEn": "JWT and OAuth2/OIDC",
    "description": "رمزگذاری و اعتبارسنجی توکن‌های امضاشده JWT، مدیریت کلیدهای عمومی/خصوصی RSA و معرفی الگوهای Resource Server.",
    "category": "Security",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "JWT",
      "OAuth2",
      "Stateless Auth",
      "Token Validation"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 12",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "خواندن payload JWT بدون verification چه تضمینی دارد",
      "token منقضی، issuer اشتباه و audience اشتباه را تست کن؛ هیچ‌کدام نباید به endpoint برسند."
    ],
    "whyItMatters": "starter مناسب resource server و تنظیم chain لازم است؛ token واقعی را در log نگذار.",
    "introduction": "رمزگذاری و اعتبارسنجی توکن‌های امضاشده JWT، مدیریت کلیدهای عمومی/خصوصی RSA و معرفی الگوهای Resource Server.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "OAuth2 مجوز دسترسی و OIDC هویت را استاندارد می‌کنند؛ JWT فقط یک قالب token است. decode کردن Base64 احراز هویت نیست. signature، issuer، زمان اعتبار و audience مورد انتظار را بررسی کن؛ refresh token کار resource server نیست."
      }
    ],
    "realWorldScenario": {
      "scenario": "token منقضی، issuer اشتباه و audience اشتباه را تست کن؛ هیچ‌کدام نباید به endpoint برسند.",
      "solution": "starter مناسب resource server و تنظیم chain لازم است؛ token واقعی را در log نگذار."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "spring:\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: https://idp.example.com/issuer\n          audiences: orders-api",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "JWT and OAuth2/OIDC",
      "explanation": "Guard و Passport در Nest آشنا هستند؛ در Spring زنجیره filter و method security را جدا بشناس. احراز هویت معتبر در هیچ‌کدام جای کنترل مالکیت را نمی‌گیرد."
    },
    "commonMistakes": [
      {
        "mistake": "starter مناسب resource server و تنظیم chain لازم است؛ token واقعی را در log نگذار.",
        "whyBad": "OAuth2 مجوز دسترسی و OIDC هویت را استاندارد می‌کنند؛ JWT فقط یک قالب token است. decode کردن Base64 احراز هویت نیست. signature، issuer، زمان اعتبار و audience مورد انتظار را بررسی کن؛ refresh token کار resource server نیست.",
        "solution": "هیچ تضمین اصالت یا مجوزی نمی‌دهد"
      }
    ],
    "bestPractices": [
      "starter مناسب resource server و تنظیم chain لازم است؛ token واقعی را در log نگذار.",
      "token منقضی، issuer اشتباه و audience اشتباه را تست کن؛ هیچ‌کدام نباید به endpoint برسند."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "token منقضی، issuer اشتباه و audience اشتباه را تست کن؛ هیچ‌کدام نباید به endpoint برسند.",
      "acceptanceCriteria": [
        "token منقضی، issuer اشتباه و audience اشتباه را تست کن؛ هیچ‌کدام نباید به endpoint برسند.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "starter مناسب resource server و تنظیم chain لازم است؛ token واقعی را در log نگذار."
      ],
      "solution": {
        "code": "spring:\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: https://idp.example.com/issuer\n          audiences: orders-api",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. هیچ تضمین اصالت یا مجوزی نمی‌دهد. starter مناسب resource server و تنظیم chain لازم است؛ token واقعی را در log نگذار."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-075",
        "question": "خواندن payload JWT بدون verification چه تضمینی دارد؟",
        "options": [
          "هیچ تضمین اصالت یا مجوزی نمی‌دهد",
          "اثبات هویت چون JSON معتبر است",
          "کافی است اگر token طولانی باشد"
        ],
        "correctIndex": 0,
        "explanation": "هیچ تضمین اصالت یا مجوزی نمی‌دهد. OAuth2 مجوز دسترسی و OIDC هویت را استاندارد می‌کنند؛ JWT فقط یک قالب token است. decode کردن Base64 احراز هویت نیست. signature، issuer، زمان اعتبار و audience مورد انتظار را بررسی کن؛ refresh token کار resource server نیست."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: خواندن payload JWT بدون verification چه تضمینی دارد؟",
        "answer": "هیچ تضمین اصالت یا مجوزی نمی‌دهد. starter مناسب resource server و تنظیم chain لازم است؛ token واقعی را در log نگذار."
      }
    ],
    "summary": "OAuth2 مجوز دسترسی و OIDC هویت را استاندارد می‌کنند؛ JWT فقط یک قالب token است. decode کردن Base64 احراز هویت نیست. signature، issuer، زمان اعتبار و audience مورد انتظار را بررسی کن؛ refresh token کار resource server نیست.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-security/reference/servlet/architecture.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-076",
    "slug": "securing-the-order-api",
    "week": 13,
    "day": 4,
    "title": "امن‌سازی کامل اندپوینت‌های سفارشات با JWT (پروژه محوری)",
    "titleEn": "Securing the Order API",
    "description": "پیاده‌سازی فیلتر اختصاصی استخراج توکن کاربر، تزریق مشخصات خریدار به لایه سرویس و محافظت از متدها.",
    "category": "Security",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Capstone",
      "API Security",
      "JWT Filter",
      "User Context"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 12",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "کاربر معتبر فاقد permission معمولاً چه پاسخی می‌گیرد",
      "کاربر فقط‌خواندنی را با GET موفق و POST ممنوع تست کن؛ مالکیت سفارش را نیز جدا بسنج."
    ],
    "whyItMatters": "امنیت URL به تنهایی جلوی فراخوانی داخلی نامجاز service را نمی‌گیرد.",
    "introduction": "پیاده‌سازی فیلتر اختصاصی استخراج توکن کاربر، تزریق مشخصات خریدار به لایه سرویس و محافظت از متدها.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "امن‌سازی API باید policy قابل آزمون داشته باشد. روش credential را صریح انتخاب کن؛ HTTP Basic محلی برای آموزش ساده است و در انتقال واقعی TLS لازم دارد. JWT مسیر دیگری است، نه نام جدید Basic."
      }
    ],
    "realWorldScenario": {
      "scenario": "کاربر فقط‌خواندنی را با GET موفق و POST ممنوع تست کن؛ مالکیت سفارش را نیز جدا بسنج.",
      "solution": "امنیت URL به تنهایی جلوی فراخوانی داخلی نامجاز service را نمی‌گیرد."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "http.authorizeHttpRequests(a -> a\n    .requestMatchers(HttpMethod.GET, \"/api/orders/**\").hasAuthority(\"orders:read\")\n    .requestMatchers(HttpMethod.POST, \"/api/orders\").hasAuthority(\"orders:write\")\n    .anyRequest().denyAll());",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Securing the Order API",
      "explanation": "Guard و Passport در Nest آشنا هستند؛ در Spring زنجیره filter و method security را جدا بشناس. احراز هویت معتبر در هیچ‌کدام جای کنترل مالکیت را نمی‌گیرد."
    },
    "commonMistakes": [
      {
        "mistake": "امنیت URL به تنهایی جلوی فراخوانی داخلی نامجاز service را نمی‌گیرد.",
        "whyBad": "امن‌سازی API باید policy قابل آزمون داشته باشد. روش credential را صریح انتخاب کن؛ HTTP Basic محلی برای آموزش ساده است و در انتقال واقعی TLS لازم دارد. JWT مسیر دیگری است، نه نام جدید Basic.",
        "solution": "403"
      }
    ],
    "bestPractices": [
      "امنیت URL به تنهایی جلوی فراخوانی داخلی نامجاز service را نمی‌گیرد.",
      "کاربر فقط‌خواندنی را با GET موفق و POST ممنوع تست کن؛ مالکیت سفارش را نیز جدا بسنج."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "کاربر فقط‌خواندنی را با GET موفق و POST ممنوع تست کن؛ مالکیت سفارش را نیز جدا بسنج.",
      "acceptanceCriteria": [
        "کاربر فقط‌خواندنی را با GET موفق و POST ممنوع تست کن؛ مالکیت سفارش را نیز جدا بسنج.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "امنیت URL به تنهایی جلوی فراخوانی داخلی نامجاز service را نمی‌گیرد."
      ],
      "solution": {
        "code": "http.authorizeHttpRequests(a -> a\n    .requestMatchers(HttpMethod.GET, \"/api/orders/**\").hasAuthority(\"orders:read\")\n    .requestMatchers(HttpMethod.POST, \"/api/orders\").hasAuthority(\"orders:write\")\n    .anyRequest().denyAll());",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. 403. امنیت URL به تنهایی جلوی فراخوانی داخلی نامجاز service را نمی‌گیرد."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-076",
        "question": "کاربر معتبر فاقد permission معمولاً چه پاسخی می‌گیرد؟",
        "options": [
          "همیشه 401 مانند anonymous",
          "403",
          "201 همراه warning"
        ],
        "correctIndex": 1,
        "explanation": "403. امن‌سازی API باید policy قابل آزمون داشته باشد. روش credential را صریح انتخاب کن؛ HTTP Basic محلی برای آموزش ساده است و در انتقال واقعی TLS لازم دارد. JWT مسیر دیگری است، نه نام جدید Basic."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: کاربر معتبر فاقد permission معمولاً چه پاسخی می‌گیرد؟",
        "answer": "403. امنیت URL به تنهایی جلوی فراخوانی داخلی نامجاز service را نمی‌گیرد."
      }
    ],
    "summary": "امن‌سازی API باید policy قابل آزمون داشته باشد. روش credential را صریح انتخاب کن؛ HTTP Basic محلی برای آموزش ساده است و در انتقال واقعی TLS لازم دارد. JWT مسیر دیگری است، نه نام جدید Basic.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-security/reference/servlet/architecture.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-077",
    "slug": "rbac-and-method-security",
    "week": 13,
    "day": 5,
    "title": "کنترل دسترسی نقشی (RBAC) و امنیت لایه متد با @PreAuthorize",
    "titleEn": "RBAC and Method Security",
    "description": "تعریف نقش‌های کاربر، ادمین و انباردار، فعال‌سازی @EnableMethodSecurity و به‌کارگیری عبارات شرطی SpEL.",
    "category": "Security",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "RBAC",
      "Method Security",
      "PreAuthorize",
      "SpEL"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 12",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "hasRole(\"ADMIN\") پیش‌فرض دنبال چه authority است",
      "service را با principal فاقد permission مستقیماً در Spring test صدا بزن؛ دسترسی باید رد شود."
    ],
    "whyItMatters": "self-invocation یا ساخت service با new می‌تواند proxy method security را دور بزند.",
    "introduction": "تعریف نقش‌های کاربر، ادمین و انباردار، فعال‌سازی @EnableMethodSecurity و به‌کارگیری عبارات شرطی SpEL.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "RBAC role را به مجموعه permissionها وصل می‌کند؛ method security برای محافظت مرز use case مفید است. hasRole پیشوند ROLE_ دارد، hasAuthority تطبیق مستقیم می‌خواهد. @EnableMethodSecurity را فعال کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "service را با principal فاقد permission مستقیماً در Spring test صدا بزن؛ دسترسی باید رد شود.",
      "solution": "self-invocation یا ساخت service با new می‌تواند proxy method security را دور بزند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "java",
        "code": "@EnableMethodSecurity\n@Configuration\nclass MethodSecurityConfig {}\n// On a Spring-managed service method:\n@PreAuthorize(\"hasAuthority('orders:write')\")\npublic UUID place(CreateOrder request) { return create(request); }",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "RBAC and Method Security",
      "explanation": "Guard و Passport در Nest آشنا هستند؛ در Spring زنجیره filter و method security را جدا بشناس. احراز هویت معتبر در هیچ‌کدام جای کنترل مالکیت را نمی‌گیرد."
    },
    "commonMistakes": [
      {
        "mistake": "self-invocation یا ساخت service با new می‌تواند proxy method security را دور بزند.",
        "whyBad": "RBAC role را به مجموعه permissionها وصل می‌کند؛ method security برای محافظت مرز use case مفید است. hasRole پیشوند ROLE_ دارد، hasAuthority تطبیق مستقیم می‌خواهد. @EnableMethodSecurity را فعال کن.",
        "solution": "ROLE_ADMIN"
      }
    ],
    "bestPractices": [
      "self-invocation یا ساخت service با new می‌تواند proxy method security را دور بزند.",
      "service را با principal فاقد permission مستقیماً در Spring test صدا بزن؛ دسترسی باید رد شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "service را با principal فاقد permission مستقیماً در Spring test صدا بزن؛ دسترسی باید رد شود.",
      "acceptanceCriteria": [
        "service را با principal فاقد permission مستقیماً در Spring test صدا بزن؛ دسترسی باید رد شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "self-invocation یا ساخت service با new می‌تواند proxy method security را دور بزند."
      ],
      "solution": {
        "code": "@EnableMethodSecurity\n@Configuration\nclass MethodSecurityConfig {}\n// On a Spring-managed service method:\n@PreAuthorize(\"hasAuthority('orders:write')\")\npublic UUID place(CreateOrder request) { return create(request); }",
        "language": "java",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. ROLE_ADMIN. self-invocation یا ساخت service با new می‌تواند proxy method security را دور بزند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-077",
        "question": "hasRole(\"ADMIN\") پیش‌فرض دنبال چه authority است؟",
        "options": [
          "admin بدون توجه به حروف",
          "هر authority شامل متن ADMIN",
          "ROLE_ADMIN"
        ],
        "correctIndex": 2,
        "explanation": "ROLE_ADMIN. RBAC role را به مجموعه permissionها وصل می‌کند؛ method security برای محافظت مرز use case مفید است. hasRole پیشوند ROLE_ دارد، hasAuthority تطبیق مستقیم می‌خواهد. @EnableMethodSecurity را فعال کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: hasRole(\"ADMIN\") پیش‌فرض دنبال چه authority است؟",
        "answer": "ROLE_ADMIN. self-invocation یا ساخت service با new می‌تواند proxy method security را دور بزند."
      }
    ],
    "summary": "RBAC role را به مجموعه permissionها وصل می‌کند؛ method security برای محافظت مرز use case مفید است. hasRole پیشوند ROLE_ دارد، hasAuthority تطبیق مستقیم می‌خواهد. @EnableMethodSecurity را فعال کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-security/reference/servlet/architecture.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  },
  {
    "id": "lesson-078",
    "slug": "secrets-management",
    "week": 13,
    "day": 6,
    "title": "مدیریت امن سکرت‌ها، کلیدها و متغیرهای حساس سازمانی",
    "titleEn": "Secrets Management",
    "description": "پرهیز از ثبت کلیدها در گیت، تزریق امن پارامترها از طریق Environment Variables و ابزارهای مدیریت سکرت پروداکشن.",
    "category": "Security",
    "difficulty": "Intermediate",
    "estimatedMinutes": 25,
    "tags": [
      "Secrets Management",
      "Security Best Practices",
      "DevSecOps"
    ],
    "prerequisites": [
      "مفاهیم و تمرین‌های هفته 12",
      "توانایی خواندن کد TypeScript و نوشتن تست بک‌اند"
    ],
    "learningObjectives": [
      "حذف رمز از آخرین commit برای رفع افشا کافی است",
      "رمز را از محیط تزریق کن و با جستجوی repo/image/log نبودنش را بررسی کن؛ تعویض بدون commit انجام شود."
    ],
    "whyItMatters": "مقدار پیش‌فرض production برای password نگذار که نبود secret را پنهان کند.",
    "introduction": "پرهیز از ثبت کلیدها در گیت، تزریق امن پارامترها از طریق Environment Variables و ابزارهای مدیریت سکرت پروداکشن.",
    "conceptualSections": [
      {
        "title": "مدل ذهنی و رفتار واقعی",
        "content": "Secret نباید وارد git، image layer یا log شود. environment و secret file روش تزریق‌اند، نه به‌خودی‌خود سیاست دسترسی یا rotation. دسترسی محدود، عمر کوتاه و قابلیت تعویض را طراحی کن."
      }
    ],
    "realWorldScenario": {
      "scenario": "رمز را از محیط تزریق کن و با جستجوی repo/image/log نبودنش را بررسی کن؛ تعویض بدون commit انجام شود.",
      "solution": "مقدار پیش‌فرض production برای password نگذار که نبود secret را پنهان کند."
    },
    "codeExamples": [
      {
        "title": "نمونهٔ آموزشی متمرکز",
        "language": "yaml",
        "code": "spring:\n  datasource:\n    password: ${DB_PASSWORD}",
        "explanation": "این قطعه بخش مرتبط با موضوع را نشان می‌دهد؛ مگر کد مستقل CLI، در کلاس/پروژه و با importها و وابستگی‌های همان موضوع قرار می‌گیرد. نمونهٔ کامل production یا اثبات اجرای مستقل نیست."
      }
    ],
    "comparisonWithNestJS": {
      "nestConcept": "تجربهٔ Node.js / NestJS",
      "javaConcept": "Secrets Management",
      "explanation": "Guard و Passport در Nest آشنا هستند؛ در Spring زنجیره filter و method security را جدا بشناس. احراز هویت معتبر در هیچ‌کدام جای کنترل مالکیت را نمی‌گیرد."
    },
    "commonMistakes": [
      {
        "mistake": "مقدار پیش‌فرض production برای password نگذار که نبود secret را پنهان کند.",
        "whyBad": "Secret نباید وارد git، image layer یا log شود. environment و secret file روش تزریق‌اند، نه به‌خودی‌خود سیاست دسترسی یا rotation. دسترسی محدود، عمر کوتاه و قابلیت تعویض را طراحی کن.",
        "solution": "خیر؛ باید رمز rotate و تاریخچه و دسترسی بررسی شود"
      }
    ],
    "bestPractices": [
      "مقدار پیش‌فرض production برای password نگذار که نبود secret را پنهان کند.",
      "رمز را از محیط تزریق کن و با جستجوی repo/image/log نبودنش را بررسی کن؛ تعویض بدون commit انجام شود."
    ],
    "exercise": {
      "title": "تمرین اصلی · حدود ۱۵ دقیقه",
      "instructions": "رمز را از محیط تزریق کن و با جستجوی repo/image/log نبودنش را بررسی کن؛ تعویض بدون commit انجام شود.",
      "acceptanceCriteria": [
        "رمز را از محیط تزریق کن و با جستجوی repo/image/log نبودنش را بررسی کن؛ تعویض بدون commit انجام شود.",
        "نتیجهٔ مشاهده‌شده را با یک تست یا فرمان قابل تکرار ثبت کن؛ صرف اجرا یا نبود exception، قبولی نیست."
      ],
      "hints": [
        "مقدار پیش‌فرض production برای password نگذار که نبود secret را پنهان کند."
      ],
      "solution": {
        "code": "spring:\n  datasource:\n    password: ${DB_PASSWORD}",
        "language": "yaml",
        "explanation": "این نمونه نقطه شروع است؛ شاهد تکمیل تمرین باید از تست خودت به دست بیاید. خیر؛ باید رمز rotate و تاریخچه و دسترسی بررسی شود. مقدار پیش‌فرض production برای password نگذار که نبود secret را پنهان کند."
      }
    },
    "quizzes": [
      {
        "id": "focused-v2-lesson-078",
        "question": "حذف رمز از آخرین commit برای رفع افشا کافی است؟",
        "options": [
          "خیر؛ باید رمز rotate و تاریخچه و دسترسی بررسی شود",
          "بله؛ git نسخه قبلی را خودکار پاک می‌کند",
          "بله؛ اگر فایل به .gitignore اضافه شود"
        ],
        "correctIndex": 0,
        "explanation": "خیر؛ باید رمز rotate و تاریخچه و دسترسی بررسی شود. Secret نباید وارد git، image layer یا log شود. environment و secret file روش تزریق‌اند، نه به‌خودی‌خود سیاست دسترسی یا rotation. دسترسی محدود، عمر کوتاه و قابلیت تعویض را طراحی کن."
      }
    ],
    "interviewQuestions": [
      {
        "question": "بدون نگاه‌کردن به متن پاسخ بده: حذف رمز از آخرین commit برای رفع افشا کافی است؟",
        "answer": "خیر؛ باید رمز rotate و تاریخچه و دسترسی بررسی شود. مقدار پیش‌فرض production برای password نگذار که نبود secret را پنهان کند."
      }
    ],
    "summary": "Secret نباید وارد git، image layer یا log شود. environment و secret file روش تزریق‌اند، نه به‌خودی‌خود سیاست دسترسی یا rotation. دسترسی محدود، عمر کوتاه و قابلیت تعویض را طراحی کن.",
    "references": [
      {
        "title": "مستندات رسمی برای ادامهٔ اختیاری",
        "url": "https://docs.spring.io/spring-security/reference/servlet/architecture.html"
      }
    ],
    "lastReviewedAt": "2026-11-03",
    "contentVersion": 2
  }
];
