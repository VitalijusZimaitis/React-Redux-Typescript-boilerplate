import { initReactI18next } from 'react-i18next';
import localeLt from 'assets/locales/lt.json';
import i18n from 'i18next';

const language = i18n.language || 'LT';

const resources = {
  LT: {
    translation: localeLt,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: language,
  initImmediate: false,
  ns: ['translation'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
