import i18n from "i18next";
import XHR from "i18next-xhr-backend";

const language = i18n.language || "en-US";

const backendOptions = {
  type: "backend",
  crossDomain: false,
  allowMultiLoading: false,
  loadPath: `your-backend-api/?locale_code=${language}`
};

const options: any = {
  initImmediate: false,
  debug: true,
  lng: language,
  fallbackLng: language,
  ns: ["translations"],
  defaultNS: "translations",

  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default",
    defaultTransParent: "div"
  }
};

options["backend"] = backendOptions;

i18n.use(XHR).init(options);
