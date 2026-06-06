import { useLanguageStore } from "../store/useLanguageStore";

// Returns a picker that resolves a { en, ar } object to the active language.
export const useT = () => {
  const { language } = useLanguageStore();
  const t = (obj) => {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[language] ?? obj.en;
  };
  return { t, language, isAr: language === "ar" };
};
