import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import localeEn from '../assets/locales/en.json';

const language = i18n.language || "en-US";

// const resources = {
//   en: {
//     translation: localeEn
//   }
// };

const backendOptions = {
  type: "backend",
  crossDomain: false,
  allowMultiLoading: false,
  loadPath: `your-backend-api/?locale_code={{lng}}`
};

const options: any = {
  initImmediate: false,
  debug: true,
  lng: language,
  fallbackLng: language,
  ns: ["translations"],
  defaultNS: "translations",
  saveMissing: true,
  updateMissing: true,

  react: {
    wait: true,
    useSuspense: false
  }
};

options["backend"] = backendOptions;

i18n.use(XHR).init(options);

export default i18n;
