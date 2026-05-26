// نادي أجوان الرياضي - ملف الصور
// ===================================================
// لو انا عايز ابدلها بأي صور تانيه عادي

const AJWAN_IMAGES = {

  // صور الهيرو سلايدر - Hero Slider (الصفحة الرئيسية)
  hero: [
    {
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80",
      alt: "نادي أجوان الرياضي",
      title: "مرحباً بك في نادي أجوان",
      subtitle: "الوجهة الرياضية الترفيهية الأولى"
    },
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80",
      alt: "صالة الجيم",
      title: "جيم بمعدات عالمية",
      subtitle: "تدرب مع أفضل المدربين المتخصصين"
    },
    {
      src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1600&q=80",
      alt: "حمام السباحة",
      title: "حمامات سباحة أولمبية",
      subtitle: "استمتع بالسباحة في بيئة نظيفة وآمنة"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&q=80",
      alt: "قاعة الأفراح",
      title: "قاعات أفراح فاخرة",
      subtitle: "اجعل مناسبتك لا تُنسى"
    },
    {
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1600&q=80",
      alt: "ملاعب كرة القدم",
      title: "ملاعب كرة قدم احترافية",
      subtitle: "العب على أفضل الملاعب المجهزة"
    }
  ],

  // حمامات السباحة - Swimming Pools
  pool: [
    "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
    "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80",
    "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80"
  ],

  // قاعات الأفراح - Wedding Halls
  halls: [
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
  ],

  // الجيم - Gym
  gym: [
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"
  ],

  // كيدز ايريا - Kids Area
  kids: [
    "https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=800&q=80",
    "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?w=800&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
  ],

  // ملاعب كرة القدم - Football Fields
  football: [
    "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80"
  ],

  // بادل - Padel
  padel: [
    "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
    "https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?w=800&q=80",
    "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80"
  ],

  // كافيه أركان - Arkan Café
  cafe: [
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1400&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    "https://images.unsplash.com/photo-1576424453792-6f5a22a73d08?q=80&w=464&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1762631178352-f7ae732b42c4?q=80&w=870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
  ],

  // مطعم مشوي - Mashwi Restaurant
  restaurant: [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80",
    "https://images.unsplash.com/photo-1777891258069-454e66f8bedc?q=80&w=387&auto=format&fit=crop"
  ]
};

// تصدير الصور للاستخدام في الموقع
if (typeof module !== 'undefined') {
  module.exports = AJWAN_IMAGES;
}
