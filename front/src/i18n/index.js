import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from '../locales/en.json';
import esTranslations from '../locales/es.json';
import deTranslations from '../locales/de.json';

i18n.use(initReactI18next).init({
  resources: {
    en: enTranslations,
    es: esTranslations,
    de: deTranslations,
  },
    lng: localStorage.getItem("lang"),
    debug: true,
    fallbackLng: "de",
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation",
});

export default i18n;