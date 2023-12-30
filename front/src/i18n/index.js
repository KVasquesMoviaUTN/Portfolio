import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/translation.json';
import translationsInGerman from '../locales/de/translation.json';
import translationsInItalian from '../locales/it/translation.json';

// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  de: {
    translation: translationsInGerman
  },
  it: {
    translation: translationsInItalian
  },
};

i18n.use(initReactI18next).init({
    lng: "it",
    debug: true,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation",
  resources: {
    en: {
      translation: {
        welcome: 'Welcome',
        about: 'About',
        contact: 'Contact',
      },
    },
    es: {
      translation: {
        welcome: 'Bienvenido',
        about: 'Acerca de',
        contact: 'Contacto',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;