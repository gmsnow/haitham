"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import ar from "@/lang/ar";
import en from "@/lang/en";

export type Language = "en" | "ar";
type Dictionary = typeof en;

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: "ltr" | "rtl";
  dictionary: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  dir: "ltr",
  dictionary: en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-ar", lang === "ar");
  }, [lang]);

  const dictionary = lang === "ar" ? ar : en;

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        dir: lang === "ar" ? "rtl" : "ltr",
        dictionary,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);