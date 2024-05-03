import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

// eslint-disable-next-line
// @ts-ignore
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem("lang") || "en",
    debug: false,
    detection: {
      order: ["queryString"],
      cache: [],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
