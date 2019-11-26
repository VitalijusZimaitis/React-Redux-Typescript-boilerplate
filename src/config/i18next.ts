import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import localeEn from "../locales/en.json";

const resources = {
  en: {
    translation: localeEn
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
