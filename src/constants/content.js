// Centralized bilingual content for Adham's landing page.
// The site renders Arabic only, but the { en, ar } structure is kept so the
// shared components stay unchanged. Edit Arabic copy here in one place.

export const NAV = [
  { id: "services", en: "Services", ar: "الخدمات" },
  { id: "work", en: "Work", ar: "أعمالي" },
  { id: "testimonials", en: "Testimonials", ar: "آراء العملاء" },
  { id: "ventures", en: "Ventures", ar: "مشاريعي" },
  { id: "about", en: "About", ar: "عني" },
  { id: "faq", en: "FAQ", ar: "أسئلة شائعة" },
];

export const HERO = {
  eyebrow: {
    en: "Motion Graphics Designer & Video Editor",
    ar: "مصمم موشن جرافيك ومونتير",
  },
  title: {
    en: ["We craft visual content", "that stops the scroll and sells."],
    ar: ["نصنع لعلامتك محتوى", "يوقف التمرير ويبيع"],
  },
  subtitle: {
    en: "Professional motion graphics and video editing for brands. Over 5 years freelancing in the Saudi market — turning ideas into content that grabs attention and drives action.",
    ar: "موشن جرافيك ومونتاج فيديو احترافي للعلامات التجارية. أكثر من 5 سنوات في السوق السعودي — أحوّل الفكرة إلى محتوى يلفت الانتباه ويحرّك الجمهور للفعل.",
  },
  primaryCta: { en: "Book your project", ar: "احجز مشروعك" },
  secondaryCta: { en: "Watch my work", ar: "شاهد أعمالي" },
  microcopy: {
    en: "Fast reply · Professional delivery · Satisfaction guaranteed",
    ar: "رد سريع · تسليم احترافي · رضا مضمون",
  },
};

export const TRUST = {
  label: {
    en: "Trusted across the Saudi market",
    ar: "خبرة موثوقة في السوق السعودي",
  },
  items: [
    { en: "5+ years experience", ar: "+5 سنوات خبرة" },
    { en: "Saudi market", ar: "السوق السعودي" },
    { en: "After Effects · Premiere", ar: "After Effects · Premiere" },
    { en: "Founder mindset", ar: "عقلية مؤسس" },
  ],
};

export const PROBLEM = {
  heading: { en: "Why most content never stops the scroll", ar: "ليش معظم المحتوى ما بيوقف التمرير" },
  intro: {
    en: "A great product with weak content stays invisible. I've seen brands lose attention not because of a bad offer — but because the video didn't say it right.",
    ar: "منتج ممتاز بمحتوى ضعيف يبقى غير مرئي. شفت علامات تخسر جمهورها ليس بسبب عرض سيّئ — بل لأن الفيديو لم يوصِل الرسالة بالشكل الصحيح.",
  },
  pains: [
    {
      icon: "swipe",
      title: { en: "Content that gets ignored", ar: "محتوى يتم تجاهله" },
      desc: {
        en: "A video with no identity, rhythm, or hook scrolls right past your audience in two seconds.",
        ar: "فيديو بلا هوية ولا إيقاع ولا خطّاف يمرّ أمام جمهورك في ثانيتين دون أن يلاحظه أحد.",
      },
    },
    {
      icon: "clock",
      title: { en: "Slow production misses the moment", ar: "إنتاج بطيء يفوّت اللحظة" },
      desc: {
        en: "The trend passes before the edit is ready, and the opportunity goes with it.",
        ar: "التريند يمرّ قبل ما يخلص المونتاج، وتروح الفرصة معه.",
      },
    },
    {
      icon: "gem",
      title: { en: "Quality that hides your value", ar: "جودة لا تعكس قيمتك" },
      desc: {
        en: "An excellent product presented poorly lowers trust instead of building it.",
        ar: "منتج ممتاز بعرض ضعيف يقلّل الثقة بدل ما يبنيها.",
      },
    },
  ],
};

export const APPROACH = {
  heading: { en: "From freelancer to founder", ar: "من فريلانسر إلى مؤسس" },
  paragraphs: {
    en: [
      "I started as a freelance motion designer and editor, and spent over five years sharpening my craft in the demanding Saudi market — from social ads to full brand campaigns.",
      "Along the way I learned that great editing isn't enough; content has to serve a business goal. So I moved from executing orders to thinking like a partner in the result.",
      "Today I'm the founder of Rees for real-estate media production and a co-founder of Urood marketing agency — and I'm preparing to launch my own courses to pass on what I've learned.",
    ],
    ar: [
      "بدأت كمصمم موشن ومونتير فريلانس، وأمضيت أكثر من خمس سنوات أصقل مهاراتي في السوق السعودي المتطلّب — من إعلانات السوشال إلى حملات كاملة للعلامات التجارية.",
      "تعلّمت بالطريق أن المونتاج الجميل وحده لا يكفي؛ المحتوى لازم يخدم هدفاً تجارياً. فانتقلت من تنفيذ الطلبات إلى التفكير كشريك في النتيجة.",
      "اليوم أنا مؤسس «ريز» للإنتاج الإعلامي العقاري، وشريك مؤسس في وكالة «عروض» للتسويق — وأستعد لإطلاق كورساتي الخاصة لأنقل خبرتي للآخرين.",
    ],
  },
};

export const SERVICES_SECTION = {
  heading: { en: "How I can serve you", ar: "كيف بقدر أخدمك" },
  subheading: {
    en: "From a single reel to a full animated identity — everything your brand needs to show up sharp.",
    ar: "من ريل واحد إلى هوية متحركة كاملة — كل ما تحتاجه علامتك لتظهر باحترافية.",
  },
};

export const PROCESS = {
  heading: { en: "How we work together", ar: "كيف نشتغل سوا" },
  subheading: {
    en: "A clear path from brief to final delivery — you always know what's next.",
    ar: "مسار واضح من البريف للتسليم النهائي — دايماً بتعرف الخطوة الجاية.",
  },
  steps: [
    {
      no: "01",
      title: { en: "Brief", ar: "استلام البريف" },
      desc: {
        en: "We define the goal, the audience, and the platform — and gather your raw material.",
        ar: "نحدّد الهدف والجمهور والمنصة — ونجمع المواد الخام لمشروعك.",
      },
    },
    {
      no: "02",
      title: { en: "Script & Storyboard", ar: "السكربت والستوري بورد" },
      desc: {
        en: "I map the story, the rhythm, and the key moments before any editing starts.",
        ar: "أرسم القصة والإيقاع واللحظات المفصلية قبل ما يبدأ أي مونتاج.",
      },
    },
    {
      no: "03",
      title: { en: "Edit & Motion", ar: "المونتاج والموشن" },
      desc: {
        en: "I build the edit, the motion graphics, the sound, and the color until it feels alive.",
        ar: "أبني المونتاج والموشن جرافيك والصوت والألوان لحد ما يصير العمل حيّاً.",
      },
    },
    {
      no: "04",
      title: { en: "Review & Deliver", ar: "المراجعة والتسليم" },
      desc: {
        en: "We refine through clear revisions, then deliver in formats ready for every platform.",
        ar: "نحسّن عبر مراجعات واضحة، وبعدها أسلّم بصيغ جاهزة لكل منصة.",
      },
    },
  ],
};

export const WHY_ME = {
  heading: { en: "Why brands work with me", ar: "ليش العلامات تشتغل معي" },
  points: [
    {
      title: { en: "Cinematic quality", ar: "جودة سينمائية" },
      desc: {
        en: "Clean cuts, intentional motion, color and sound that make even a 15-second reel feel premium.",
        ar: "قطعات نظيفة، حركة مدروسة، ألوان وصوت تخلّي حتى ريل من 15 ثانية يحسّ بالفخامة.",
      },
    },
    {
      title: { en: "Speed at the pace of trends", ar: "سرعة بإيقاع التريند" },
      desc: {
        en: "I deliver fast enough to catch the moment, without sacrificing the finish.",
        ar: "أسلّم بسرعة كافية لألحق اللحظة، دون التضحية بالإتقان.",
      },
    },
    {
      title: { en: "I understand the Saudi market", ar: "أفهم السوق السعودي" },
      desc: {
        en: "Five years of content that speaks to the local audience and the local platforms.",
        ar: "خمس سنوات من المحتوى الذي يخاطب الجمهور المحلي ومنصاته بلغته.",
      },
    },
    {
      title: { en: "Delivery ready for every platform", ar: "تسليم جاهز لكل منصة" },
      desc: {
        en: "Vertical, horizontal, captioned, and resized — formatted for exactly where it'll run.",
        ar: "طولي، عرضي، بترجمة، وبمقاسات مضبوطة — جاهز تماماً للمكان الذي سيُنشر فيه.",
      },
    },
  ],
};

// Section heading for the showreel / portfolio gallery.
export const SHOWREEL = {
  eyebrow: { en: "Work", ar: "أعمالي" },
  heading: { en: "Selected work", ar: "أعمال مختارة" },
  subheading: {
    en: "A taste of what I create — montage and motion, vertical and horizontal.",
    ar: "لمحة من اللي بصنعه — مونتاج وموشن، طولي وعرضي.",
  },
  note: {
    en: "Sample placeholders — replace with the real videos.",
    ar: "نماذج تجريبية (موك) — تُستبدل بالفيديوهات الفعلية.",
  },
  tabs: [
    { id: "montage-v", en: "Vertical Montage", ar: "مونتاج طولي" },
    { id: "motion-v", en: "Vertical Motion", ar: "موشن طولي" },
    { id: "motion-h", en: "Horizontal Motion", ar: "موشن عرضي" },
  ],
  playLabel: { en: "Play", ar: "تشغيل" },
  modalNote: {
    en: "This is a placeholder. The real video goes here.",
    ar: "هذا نموذج تجريبي. الفيديو الفعلي بينحط هنا.",
  },
};

export const WORK = {
  eyebrow: { en: "Ventures", ar: "مشاريعي" },
  heading: { en: "I don't just offer services — I build brands", ar: "ما أقدّم خدمات فقط — أبني علامات" },
  subheading: {
    en: "Companies I founded and co-founded. I live the same decisions I help my clients make.",
    ar: "شركات أسّستها وشاركت في تأسيسها. أعيش القرارات نفسها التي أساعد عملائي على اتخاذها.",
  },
  viewText: { en: "Visit", ar: "زيارة" },
};

export const FAQ = {
  heading: { en: "Questions clients ask", ar: "أسئلة يطرحها العملاء" },
  items: [
    {
      q: { en: "How much does a project cost?", ar: "كم تكلفة المشروع؟" },
      a: {
        en: "It depends on the type, length, and complexity. Tell me about your project and you'll get a clear quote with no surprises.",
        ar: "تعتمد على النوع والمدة ودرجة التعقيد. احكيلي عن مشروعك وبتوصلك تسعيرة واضحة بدون مفاجآت.",
      },
    },
    {
      q: { en: "How long does delivery take?", ar: "كم تستغرق مدة التسليم؟" },
      a: {
        en: "A short reel can be ready in a few days; larger motion projects take longer. We agree on a clear timeline up front.",
        ar: "الريل القصير ممكن يجهز خلال أيام؛ مشاريع الموشن الأكبر تاخذ وقت أطول. نتفق على جدول زمني واضح من البداية.",
      },
    },
    {
      q: { en: "How many revisions are included?", ar: "كم عدد التعديلات المتاحة؟" },
      a: {
        en: "Every project includes a clear number of revision rounds so we reach the result you want without endless back-and-forth.",
        ar: "كل مشروع يشمل عدد جولات تعديل واضح حتى نوصل للنتيجة اللي تريدها دون أخذ وردّ بلا نهاية.",
      },
    },
    {
      q: { en: "What formats do you deliver?", ar: "بأي صيغ تسلّم العمل؟" },
      a: {
        en: "Vertical (9:16), horizontal (16:9), or square — sized and exported for Instagram, TikTok, YouTube, or TV, with captions when needed.",
        ar: "طولي (9:16)، عرضي (16:9)، أو مربّع — بمقاسات وتصدير مناسب لإنستغرام وتيك توك ويوتيوب أو التلفزيون، مع ترجمة عند الحاجة.",
      },
    },
    {
      q: { en: "How do we start?", ar: "كيف نبدأ؟" },
      a: {
        en: "Send me a message with your idea and goal. We'll talk it through, agree on scope and timeline, and get going.",
        ar: "ابعتلي رسالة بفكرتك وهدفك. نتناقش فيها، نتفق على النطاق والجدول الزمني، ونبدأ.",
      },
    },
  ],
};

export const FINAL_CTA = {
  heading: { en: "Got a project? Let's start today.", ar: "عندك مشروع؟ نبدأ من اليوم." },
  subtitle: {
    en: "Tell me your idea and I'll turn it into content your audience can't scroll past.",
    ar: "احكيلي فكرتك وأنا بحوّلها لمحتوى ما يقدر جمهورك يمرّ عنه.",
  },
  cta: { en: "Book your project", ar: "احجز مشروعك" },
  or: { en: "or message me directly", ar: "أو راسلني مباشرة" },
};

export const FOOTER = {
  tagline: {
    en: "Motion & video that makes brands impossible to ignore.",
    ar: "موشن وفيديو يخلّي العلامات مستحيل تجاهلها.",
  },
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
};

// ===== Premium / conversion sections =====

export const LOGOS = {
  label: {
    en: "Brands and clients who trusted me",
    ar: "علامات وعملاء وثقوا فيي",
  },
};

export const STATS_SECTION = {
  heading: { en: "Numbers that speak", ar: "أرقام تتكلم عني" },
  subheading: {
    en: "Five years of work distilled into results.",
    ar: "خمس سنوات من الشغل اختصرتها النتائج.",
  },
};

export const GUARANTEES = {
  heading: { en: "Working with me is a safe bet", ar: "الشغل معي قرار مضمون" },
  subheading: {
    en: "I take the risk off your shoulders — so the only thing left is great content.",
    ar: "أشيل المخاطرة عن كتفك — فما يبقى إلا محتوى ممتاز.",
  },
  items: [
    {
      icon: "clock",
      title: { en: "Reply within an hour", ar: "رد خلال ساعة" },
      desc: {
        en: "Message me and you won't be left waiting — you'll get a clear, fast response.",
        ar: "راسلني وما رح تنطر طويل — بيوصلك رد واضح وسريع.",
      },
    },
    {
      icon: "refresh",
      title: { en: "Revisions until you're happy", ar: "تعديلات حتى الرضا" },
      desc: {
        en: "We refine through clear revision rounds until the result matches your vision.",
        ar: "نحسّن عبر جولات تعديل واضحة لحد ما توصل النتيجة لرؤيتك.",
      },
    },
    {
      icon: "shield",
      title: { en: "On-time, every time", ar: "تسليم بالموعد دائماً" },
      desc: {
        en: "We agree on a deadline up front — and I deliver on it. No surprises.",
        ar: "نتفق على الموعد من البداية — وألتزم فيه. بدون مفاجآت.",
      },
    },
    {
      icon: "gem",
      title: { en: "Files you fully own", ar: "ملفات تملكها بالكامل" },
      desc: {
        en: "You get final exports ready for every platform — the work is yours.",
        ar: "بتستلم النسخ النهائية جاهزة لكل منصة — الشغل ملكك بالكامل.",
      },
    },
  ],
};

export const TESTIMONIALS_SECTION = {
  eyebrow: { en: "Testimonials", ar: "آراء العملاء" },
  heading: { en: "What clients say about working with me", ar: "شو بيقول العملاء عن الشغل معي" },
  subheading: {
    en: "Real results, real partners.",
    ar: "نتائج حقيقية، وشركاء حقيقيون.",
  },
  note: {
    en: "Sample testimonials — replace with real client quotes.",
    ar: "نماذج تجريبية — تُستبدل بآراء عملاء حقيقيين.",
  },
};

// Bold looping headline between the trust bar and the Problem section —
// pure visual energy, no CTA. Words alternate outline/filled style.
export const STATEMENT = {
  words: [
    { en: "MOTION", ar: "موشن" },
    { en: "STORY", ar: "قصة" },
    { en: "RHYTHM", ar: "إيقاع" },
    { en: "IMPACT", ar: "تأثير" },
    { en: "MOTION", ar: "موشن" },
    { en: "EDIT", ar: "مونتاج" },
  ],
};

export const WHATSAPP = {
  // Mock number — replace with Adham's real WhatsApp number (international format, no +).
  number: "966500000000",
  message: {
    en: "Hi Adham, I'd like to discuss a project.",
    ar: "هلا أدهم، حابب أناقش معك مشروع.",
  },
  label: { en: "Chat on WhatsApp", ar: "تواصل واتساب" },
};
