"use client";

import { useLanguage } from "@/components/LanguageProvider";

const LangToggle = () => {
  const { lang, setLang, dictionary } = useLanguage();
  const next = lang === "en" ? "ar" : "en";
  const label = next === "ar" ? dictionary.toggle.toArabic : dictionary.toggle.toEnglish;

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={label}
      title={label}
      className="border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-light tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer"
    >
      {label}
    </button>
  );
};

export default LangToggle;