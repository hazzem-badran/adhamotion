// Showreel items — mock placeholders grouped into the three categories Adham
// requested: vertical montage, vertical motion, horizontal motion. Each item
// renders as a gradient poster card; swap `src`/poster in when real videos exist.
//   cat:   matches SHOWREEL.tabs id in content.js
//   ratio: "9/16" (vertical) or "16/9" (horizontal)
//   gradient: [from, to] used for the placeholder poster

export const SHOWREEL_ITEMS = [
  // ===== Vertical Montage (مونتاج طولي) =====
  {
    id: "mv1",
    cat: "montage-v",
    ratio: "9/16",
    duration: "0:28",
    title: { en: "Real-estate reel", ar: "ريل عقاري" },
    tag: { en: "Montage", ar: "مونتاج" },
    gradient: ["#1e3a8a", "#2563eb"],
  },
  {
    id: "mv2",
    cat: "montage-v",
    ratio: "9/16",
    duration: "0:19",
    title: { en: "Product ad", ar: "إعلان منتج" },
    tag: { en: "Montage", ar: "مونتاج" },
    gradient: ["#0369a1", "#0ea5e9"],
  },
  {
    id: "mv3",
    cat: "montage-v",
    ratio: "9/16",
    duration: "0:34",
    title: { en: "Social clip", ar: "مقطع سوشال" },
    tag: { en: "Montage", ar: "مونتاج" },
    gradient: ["#3b3ad1", "#6d5efc"],
  },

  // ===== Vertical Motion (موشن طولي) =====
  {
    id: "tv1",
    cat: "motion-v",
    ratio: "9/16",
    duration: "0:15",
    title: { en: "Promo motion", ar: "موشن إعلاني" },
    tag: { en: "Motion", ar: "موشن" },
    gradient: ["#0e7490", "#06b6d4"],
  },
  {
    id: "tv2",
    cat: "motion-v",
    ratio: "9/16",
    duration: "0:22",
    title: { en: "Animated infographic", ar: "إنفوجرافيك متحرك" },
    tag: { en: "Motion", ar: "موشن" },
    gradient: ["#1e40af", "#3b6dff"],
  },
  {
    id: "tv3",
    cat: "motion-v",
    ratio: "9/16",
    duration: "0:18",
    title: { en: "Product teaser", ar: "تيزر منتج" },
    tag: { en: "Motion", ar: "موشن" },
    gradient: ["#4f46e5", "#818cf8"],
  },

  // ===== Horizontal Motion (موشن عرضي) =====
  {
    id: "th1",
    cat: "motion-h",
    ratio: "16/9",
    duration: "0:45",
    title: { en: "Animated identity", ar: "هوية متحركة" },
    tag: { en: "Motion", ar: "موشن" },
    gradient: ["#1e3a8a", "#3b6dff"],
  },
  {
    id: "th2",
    cat: "motion-h",
    ratio: "16/9",
    duration: "1:02",
    title: { en: "TV-style ad", ar: "إعلان تلفزيوني" },
    tag: { en: "Motion", ar: "موشن" },
    gradient: ["#0c4a6e", "#0ea5e9"],
  },
  {
    id: "th3",
    cat: "motion-h",
    ratio: "16/9",
    duration: "0:38",
    title: { en: "Show intro", ar: "مقدمة برنامج" },
    tag: { en: "Motion", ar: "موشن" },
    gradient: ["#155e75", "#06b6d4"],
  },
];
