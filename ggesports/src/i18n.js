import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend"; 
import { initReactI18next } from "react-i18next";

const fallbackLng = ["en"];

i18n
  .use(HttpBackend) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng, 
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '/locale/{{lng}}/{{ns}}.json' 
    },
  });

export default i18n;