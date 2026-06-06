import { create } from "zustand";

// Adham's portfolio is Arabic-only (RTL). The bilingual { en, ar } content
// structure is kept so components stay unchanged, but the language is locked
// to Arabic everywhere — no toggle, no English.
const LANG = "ar";

if (typeof document !== "undefined") {
  document.documentElement.dir = "rtl";
  document.documentElement.lang = "ar";
}

export const useLanguageStore = create(() => ({
  language: LANG,
  toggle: () => {}, // no-op: site is Arabic-only
}));
