import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

const LanguageToggle = ({ className = "" }) => {
  const { language, toggle } = useLanguageStore();

  return (
    <button
      onClick={toggle}
      className={`
        relative w-10 h-10 rounded-full flex items-center justify-center
        transition-all duration-300 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        font-bold text-xs
        ${className}
      `}
      style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--accent)' }}
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
      title={language === "en" ? "العربية" : "English"}
    >
      {language === "en" ? "ع" : "EN"}
    </button>
  );
};

export default LanguageToggle;
