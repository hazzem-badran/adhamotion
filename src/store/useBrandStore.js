import { create } from "zustand";

// Adham's brand palette — cool blues only. He loves blue & navy, so every
// option is a shade of blue. `rgb` feeds the single CSS variable --accent-rgb,
// so the whole site re-themes instantly.
export const BRAND_COLORS = [
  {
    id: "royal",
    hex: "#2563eb",
    rgb: "37, 99, 235",
    label: { en: "Royal", ar: "أزرق ملكي" },
    story: { en: "Bold & premium", ar: "جرأة وفخامة" },
  },
  {
    id: "navy",
    hex: "#1e3a8a",
    rgb: "30, 58, 138",
    label: { en: "Navy", ar: "كحلي" },
    story: { en: "Deep & trusted", ar: "عمق وثقة" },
  },
  {
    id: "cobalt",
    hex: "#3b6dff",
    rgb: "59, 109, 255",
    label: { en: "Cobalt", ar: "كوبالت" },
    story: { en: "Energetic & modern", ar: "طاقة وعصرية" },
  },
  {
    id: "indigo",
    hex: "#4f46e5",
    rgb: "79, 70, 229",
    label: { en: "Indigo", ar: "نيلي" },
    story: { en: "Creative & sharp", ar: "إبداع وحدّة" },
  },
  {
    id: "azure",
    hex: "#0ea5e9",
    rgb: "14, 165, 233",
    label: { en: "Azure", ar: "أزرق سماوي" },
    story: { en: "Open & clear", ar: "انفتاح وصفاء" },
  },
  {
    id: "cyan",
    hex: "#06b6d4",
    rgb: "6, 182, 212",
    label: { en: "Cyan", ar: "تركوازي" },
    story: { en: "Fresh & crisp", ar: "انتعاش ونقاء" },
  },
  {
    id: "steel",
    hex: "#0369a1",
    rgb: "3, 105, 161",
    label: { en: "Steel", ar: "أزرق فولاذي" },
    story: { en: "Stable & grounded", ar: "ثبات ورسوخ" },
  },
];

const KEY = "adham-brand";
const DEFAULT_ID = "royal";

const getSaved = () => {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && BRAND_COLORS.some((c) => c.id === saved)) return saved;
  } catch {
    /* ignore */
  }
  return DEFAULT_ID;
};

const apply = (id) => {
  const c = BRAND_COLORS.find((x) => x.id === id) || BRAND_COLORS[0];
  if (typeof document !== "undefined") {
    document.documentElement.style.setProperty("--accent-rgb", c.rgb);
  }
};

// Apply on load before React mounts
const initial = getSaved();
if (typeof window !== "undefined") apply(initial);

export const useBrandStore = create((set) => ({
  brand: initial,
  setBrand: (id) => {
    apply(id);
    try {
      localStorage.setItem(KEY, id);
    } catch {
      /* ignore */
    }
    set({ brand: id });
  },
}));
