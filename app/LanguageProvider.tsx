"use client";


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nextProvider } from "react-i18next";

import enTranslations from "./en.json";
import esTranslations from "./es.json";
import ptTranslations from "./pt.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
    pt: {
      translation: ptTranslations,
    },
  },
  lng: "es", // default language
  fallbackLng: "es",
  interpolation: {
    escapeValue: false, // react already escapes values
  },
});

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
