export const promoVideoConfig = {
  url: "https://youtu.be/ALJ1RXWw56Y",
  id: "ALJ1RXWw56Y",
  videoSrc: "/videos/promo.mp4",
  thumbnail: "/videos/promo-poster.jpg"
};

export const servicesData = [
  {
    id: "ac",
    title: "كشف وصيانة تكييف سبليت",
    fullTitle: "كشف وفحص صيانة تكييف سبليت وشارب وجميع الماركات",
    price: 250,
    subtitle: "تنظيف شامل وفحص كفاءة التبريد",
    description: "فحص متكامل يشمل الأداء الكهربائي، ضغط الفريون، وتنقية المجاري الهوائية بأحدث الأجهزة.",
    timeEstimate: "متوسط الوقت: 45 دقيقة",
    badge: "الأكثر طلباً",
    iconName: "snowflake",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "قياس ضغط الفريون", iconName: "gauge" },
      { title: "تسليك الصرف الداخلي", iconName: "water" },
      { title: "تعقيم الفلاتر الداخلية", iconName: "spray-can" },
      { title: "اختبار كفاءة الكومبروسر", iconName: "bolt" }
    ],
    commonIssues: [
      "ضعف التبريد وخروج هواء دافئ",
      "تسريب مياه من الوحدة الداخلية",
      "صوت عالي أو اهتزاز في الكومبروسر",
      "تنظيف وغسيل فلاتر شامل",
      "رائحة كريهة عند تشغيل التكييف",
      "فصل مستمر لقاطع الكهرباء"
    ],
    technicianId: "ahmed"
  },
  {
    id: "plumbing",
    title: "تأسيس وصيانة سباكة طارئة",
    fullTitle: "كشف وإصلاح أعطال السباكة وصيانة الشبكات والمحابس",
    price: 200,
    subtitle: "فحص التسريبات وقطع الغيار",
    description: "كشف التسريبات، صيانة الخلاطات والمحابس، وحلول سريعة لأي طوارئ صرف ومياه بأحدث أجهزة الكشف الدقيقة.",
    timeEstimate: "طوارئ خلال 60 دقيقة",
    badge: "طوارئ سريعة",
    iconName: "wrench",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "كشف تسربات المياه", iconName: "magnifying-glass" },
      { title: "صيانة الخلاطات والمحابس", iconName: "faucet" },
      { title: "تسليك انسداد الصرف", iconName: "filter" },
      { title: "استبدال الوصلات التالفة", iconName: "screwdriver-wrench" }
    ],
    commonIssues: [
      "تسريب مياه في الحمام أو المطبخ",
      "انسداد في مواسير الصرف أو البالوعات",
      "تلف أو تسريب في خلاط أو محبس عمومي",
      "عطل في صندوق الطرد (السيفون)",
      "تركيب غسالة ملابس أو أطباق",
      "تأسيس وتعديل خطوط التغذية"
    ],
    technicianId: "mahmoud"
  },
  {
    id: "electricity",
    title: "إصلاح وصيانة لوحات كهربائية",
    fullTitle: "إصلاح وصيانة لوحات الكهرباء وتأمين الأحمال المنزلية",
    price: 220,
    subtitle: "تأمين أحمال وتجديد مفاتيح",
    description: "فحص القواطع، صيانة الماس والجهد، وأمان كامل للأسلاك المنزلية الحساسة وقطع الغيار المعتمدة.",
    timeEstimate: "فني كهرباء معتمد",
    badge: "أمان عالي",
    iconName: "bolt",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "كشف الماس والأعطال", iconName: "bolt" },
      { title: "موازنة وتأمين الأحمال", iconName: "scale-balanced" },
      { title: "تغيير القواطع الأوتوماتيكية", iconName: "power-off" },
      { title: "فحص شبكة الإضاءة والبرايز", iconName: "lightbulb" }
    ],
    commonIssues: [
      "فصل متكرر لمفتاح الكهرباء العمومي",
      "ماس كهربائي أو شرز في مفتاح أو بريزة",
      "انقطاع التيار عن جزء محدد من الشقة",
      "تجميع وتركيب لوحة قواطع جديدة",
      "تركيب نجف وإسبوتات إنارة حديثة",
      "فحص أمان الأحمال للغسالة والتكييف"
    ],
    technicianId: "karim"
  },
  {
    id: "appliances",
    title: "صيانة غسالات وسخانات وثلاجات",
    fullTitle: "كشف وإصلاح الغسالات الأوتوماتيك والثلاجات وسخانات الغاز والكهرباء",
    price: 220,
    subtitle: "فحص الأعطال وتوفير قطع غيار أصلية",
    description: "صيانة فورية لجميع الماركات العالمية والمحلية مع فحص دقيق للكارتات، الموتور، تسريبات الغاز والماء مع كارت ضمان معتمد.",
    timeEstimate: "فحص فوري خلال 60 دقيقة",
    badge: "الأكثر طلباً",
    iconName: "kitchen-set",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "كشف أعطال الكارتات والموتور", iconName: "gauge" },
      { title: "صيانة وتأمين سخانات الغاز والكهرباء", iconName: "fire" },
      { title: "فحص دورة التبريد وشحن الفريون", iconName: "snowflake" },
      { title: "استبدال طلمبات ومساعدين الغسالات", iconName: "screwdriver-wrench" }
    ],
    commonIssues: [
      "الغسالة لا تطرد المياه أو لا تعصر",
      "السخان لا يشعل أو شعلته ضعيفة",
      "الثلاجة لا تبرد أو تكون ثلج كثيف",
      "صوت عالي أو اهتزاز عنيف في الغسالة",
      "تسريب مياه من أسفل الغسالة أو السخان",
      "عطل في لوحة التحكم الرقمية (الكارتة)"
    ],
    technicianId: "tarek"
  },
  {
    id: "carpentry",
    title: "أعمال نجارة وصيانة أبواب وكالونات",
    fullTitle: "صيانة الأبواب والشبابيك وتركيب الكالونات والأقفال وصيانة المطابخ",
    price: 180,
    subtitle: "تغيير كالونات وصيانة غرف ومطابخ",
    description: "ضبط وزنية الأبواب الساقطة، استبدال وتركيب الكالونات والأقفال، صيانة مفصلات وسحابات المطابخ والدواليب وتجميع الأثاث باحترافية.",
    timeEstimate: "فني نجار محترف",
    badge: "دقة في التركيب",
    iconName: "hammer",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "تغيير وتركيب الكالونات والأقفال", iconName: "key" },
      { title: "وزن وصيانة الأبواب والشبابيك", iconName: "door-open" },
      { title: "صيانة مفصلات وسحابات المطابخ", iconName: "screwdriver-wrench" },
      { title: "تجميع وإصلاح الدواليب والغرف", iconName: "hammer" }
    ],
    commonIssues: [
      "باب بيحك في الأرض أو مش بيقفل بسهولة",
      "تغيير كالون باب شقة مصفح أو باب غرفة",
      "صيانة مفصلات وسحابات مطبخ ساقطة",
      "تركيب أرفف أو براويز أو كرتينة ستارة",
      "إصلاح سرير أو ضلفة دولاب مكسورة",
      "تغيير أوكر ومقابض الأبواب والشبابيك"
    ],
    technicianId: "hassan"
  },
  {
    id: "water-filter",
    title: "صيانة وتغيير شمعات فلاتر مياه",
    fullTitle: "فحص نقاء مياه الشرب وتغيير شمعات أصلية وصيانة مواتير الفلاتر 5 و 7 مراحل",
    price: 150,
    subtitle: "مراحل 5 و 7 وفحص نسبة الأملاح",
    description: "كشف جودة المياه بجهاز TDS، استبدال الشمعات المعقمة المطابقة للمواصفات، صيانة موتور وخزان الضغط، وتأمين الوصلات ضد أي تسريب.",
    timeEstimate: "مياه نقية وصحية",
    badge: "صحة ونقاء",
    iconName: "filter",
    image: "https://images.unsplash.com/photo-1585697348496-e263c9eb6722?auto=format&fit=crop&w=800&q=80",
    features: [
      { title: "قياس نسبة الأملاح الذائبة TDS", iconName: "gauge" },
      { title: "استبدال شمعات أصلية ومطابقة", iconName: "filter" },
      { title: "فحص وصيانة مضخة وخزان الفلتر", iconName: "bolt" },
      { title: "عزل ومعالجة تسريبات الوصلات", iconName: "droplet" }
    ],
    commonIssues: [
      "تغيير طقم شمعات الفلتر بالكامل (دوري)",
      "انخفاض شديد في ضغط وتدفق صنبور الفلتر",
      "طعم أو رائحة غير طبيعية في مياه الشرب",
      "تسريب مياه من خراطيم أو هاوسنج الشمعات",
      "الموتور يعمل باستمرار دون توقف",
      "نقل وتركيب الفلتر في مكان جديد"
    ],
    technicianId: "sameh"
  }
];

export const techniciansData = {
  ahmed: {
    id: "ahmed",
    name: "م. أحمد إبراهيم",
    role: "فني تبريد وتكييف معتمد",
    rating: "4.9",
    reviewsCount: "340+ طلب ناجح",
    experience: "12 سنة خبرة",
    securityStatus: "فيش جنائي معتمد ساري",
    punctualityRate: "99%",
    punctualityText: "التزام بالوقت المحدد",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  mahmoud: {
    id: "mahmoud",
    name: "أ. محمود عبد الرحمن",
    role: "خبير سباكة وشبكات مياه معتمد",
    rating: "4.8",
    reviewsCount: "410+ طلب ناجح",
    experience: "15 سنة خبرة",
    securityStatus: "فيش جنائي معتمد ساري",
    punctualityRate: "98%",
    punctualityText: "التزام فوري بالمواعيد",
    avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=400&q=80"
  },
  karim: {
    id: "karim",
    name: "م. كريم حسن",
    role: "مهندس كهرباء وشبكات منزلية",
    rating: "4.95",
    reviewsCount: "290+ طلب ناجح",
    experience: "10 سنوات خبرة",
    securityStatus: "فيش جنائي معتمد ساري",
    punctualityRate: "100%",
    punctualityText: "دقة متناهية والتزام",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  tarek: {
    id: "tarek",
    name: "م. طارق الصاوي",
    role: "مهندس صيانة أجهزة وسخانات معتمد",
    rating: "4.9",
    reviewsCount: "285+ طلب ناجح",
    experience: "11 سنة خبرة",
    securityStatus: "فيش جنائي معتمد ساري",
    punctualityRate: "99%",
    punctualityText: "دقة في المواعيد وتشخيص دقيق",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  hassan: {
    id: "hassan",
    name: "أ. حسن المنشاوي",
    role: "فني نجارة وأقفال معتمد",
    rating: "4.85",
    reviewsCount: "320+ طلب ناجح",
    experience: "14 سنة خبرة",
    securityStatus: "فيش جنائي معتمد ساري",
    punctualityRate: "97%",
    punctualityText: "التزام كامل ونظافة مكان العمل",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  sameh: {
    id: "sameh",
    name: "م. سامح فهمي",
    role: "أخصائي معالجة مياه وفلاتر",
    rating: "4.98",
    reviewsCount: "390+ طلب ناجح",
    experience: "9 سنوات خبرة",
    securityStatus: "فيش جنائي معتمد ساري",
    punctualityRate: "100%",
    punctualityText: "دقة متناهية والتزام بالموعد",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80"
  }
};

export const cairoCities = [
  "الشيخ زايد",
  "6 أكتوبر",
  "التجمع الخامس",
  "التجمع الأول والرحاب",
  "مدينتي والشروق",
  "المعادي والمقطم",
  "مدينة نصر",
  "مصر الجديدة",
  "الدقي والمهندسين",
  "الهرم وفيصل"
];

export const trustBadges = [
  { id: 1, title: "فيش جنائي معتمد", iconName: "id-card", sub: "فحص أمني دقيق" },
  { id: 2, title: "تسعيرة موحدة", iconName: "money-bill-wave", sub: "دون إكراميات" },
  { id: 3, title: "موعد محدد بدقة", iconName: "clock", sub: "متابعة لحظية" },
  { id: 4, title: "ضمان 30 يوم", iconName: "shield-halved", sub: "إصلاح مجاني" }
];

export const stepsData = [
  {
    step: 1,
    title: "اختار الخدمة",
    description: "حدد نوع المشكلة أو الخدمة اللي محتاجها في بيتك من القائمة بكل بساطة.",
    iconName: "list-check"
  },
  {
    step: 2,
    title: "شوف السعر",
    description: "هتشوف السعر التقديري الشفاف قبل ما تأكد حجزك دون أي مفاجآت.",
    iconName: "tag"
  },
  {
    step: 3,
    title: "الفني يعاين",
    description: "الفني يوصل في الميعاد ويعاين المشكلة ويقدملك عرض مكتوب ونهائي.",
    iconName: "clipboard-check"
  },
  {
    step: 4,
    title: "وافق وابدأ",
    description: "بعد موافقتك الفني يبدأ الشغل فوراً وبضمان معتمد لمدة 30 يوم.",
    iconName: "circle-check"
  }
];

export const whyUsData = [
  {
    id: 1,
    title: "الأمان التام",
    badge: "فنيون بفيش جنائي معتمد",
    description: "كل فني لديه فيش جنائي معتمد وبروفايل كامل بصورته وسجل تقييماته من عملاء حقيقيين.",
    iconName: "shield-halved"
  },
  {
    id: 2,
    title: "الشفافية الكاملة",
    badge: "تسعيرة موحدة دون إكراميات",
    description: "السعر يظهر قبل الطلب، لا إكراميات ولا بقشيش ولا أي بنود مفاجئة في الفاتورة النهائية.",
    iconName: "money-bill-wave"
  },
  {
    id: 3,
    title: "الدقة في المواعيد",
    badge: "موعد محدد ومتابعة",
    description: "موعد محدد، الفني يوصل في وقته بدقة، ونوفر متابعة لحظية عبر الهاتف حتى باب بيتك.",
    iconName: "clock"
  },
  {
    id: 4,
    title: "ضمان حقيقي",
    badge: "ضمان 30 يوماً على الصيانة",
    description: "30 يوم ضمان على كل أعمال الصيانة، لو العطل رجع الفني يرجع فوراً ويكشف مجاناً.",
    iconName: "circle-check"
  }
];

export const pricingPlans = [
  {
    id: "plumbing-inspect",
    serviceId: "plumbing",
    title: "كشف ومعاينة سباكة",
    subtitle: "فحص شامل لشبكة المياه الداخلية والتسريبات",
    price: 150
  },
  {
    id: "ac-inspect",
    serviceId: "ac",
    title: "صيانة دورية لتكييف",
    subtitle: "تنظيف شامل وفحص كفاءة التبريد والفريون",
    price: 250
  },
  {
    id: "electric-inspect",
    serviceId: "electricity",
    title: "كشف وتأمين كهرباء",
    subtitle: "فحص الماس وحمل القواطع وشبكة الإنارة",
    price: 200
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "ساره",
    location: "الشيخ زايد",
    rating: 5,
    avatarChar: "س",
    text: "الفني وصل في معاده بالظبط، وشغله كان نضيف جداً. أول مرة أحس بأمان إن حد غريب يدخل البيت، وفكرة الفيش الجنائي ممتازة."
  },
  {
    id: 2,
    name: "محمد",
    location: "التجمع الخامس",
    rating: 5,
    avatarChar: "م",
    text: "السعر كان واضح من الأول، ومفيش أي حاجة اتغيرت بعد كده. خدمة محترمة وتستاهل كل مليم وما دفعتش ولا مليم إكرامية."
  },
  {
    id: 3,
    name: "نورا",
    location: "الشروق",
    rating: 5,
    avatarChar: "ن",
    text: "حجزت سباكة طارئة والفني جه في أقل من ساعة. وصلح العطل بمنتهى المهارة، والضمان الـ 30 يوم خلاني مطمنة تماماً."
  }
];

export const faqsData = [
  {
    id: 1,
    question: "مش واثق في فني غريب يدخل بيتي؟",
    answer: "كل فني في صلحلي يخضع لفحص جنائي معتمد وله بروفايل كامل بصورته واسمه وخبرته وتقييمات العملاء السابقين يصلك قبل الزيارة، لتعرف تماماً من سيطرق بابك."
  },
  {
    id: 2,
    question: "خايف من الفاتورة اللي بتتضاعف في الآخر؟",
    answer: "في صلحلي، السعر المعياري يظهر قبل الطلب، والفني يقدم عرضاً نهائياً ومكتوباً قبل البدء. لا يبدأ التنفيذ إلا بعد موافقتك الصريحة، ولا توجد أي إكراميات أو رسوم خفية."
  },
  {
    id: 3,
    question: "الفني بيتأخر أو مبيجيش أصلاً؟",
    answer: "تحدد الموعد بالساعة من الموقع وتصلك رسالة تأكيد، ويتابع معك الفني حتى وصوله للعنوان بدقة متناهية."
  },
  {
    id: 4,
    question: "لو الأعطال رجعت تاني بعد ما مشي؟",
    answer: "جميع أعمال الصيانة مشمولة بضمان رسمي لمدة 30 يوماً. إذا تكرر نفس العطل خلال هذه المدة، يعود الفني لمعالجته فوراً مجاناً دون أي تكلفة إضافية."
  },
  {
    id: 5,
    question: "أنا متعود على صنايعي الجيران؟",
    answer: "نحن لا نطلب منك ترك من تثق به، بل نوفر لك ما لا يستطيع صنايعي الجيران تقديمه: ضمان مكتوب لمدة 30 يوماً، تسعيرة موحدة دون فصال، وفنيون مفحوصون أمنياً ومسجلون رسمياً."
  }
];
