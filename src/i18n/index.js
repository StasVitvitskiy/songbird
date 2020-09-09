import i18n from "i18next"
import languageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next";
import {en} from "./en";
import {ru} from "./ru";

export const initI18n = () => i18n.use(languageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en,
        ru
      },
      fallbackLng: "en",
      debug: false,
      keySeparator: ".",
      interpolation: {
        escapeValue: false,
      },
      react: {
        wait: true,
      },
      initImmediate: true,
      ns: ['translations'],
      defaultNS: 'translations',
      detection: {
        order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        lookupQuerystring: 'lng',
      }
    })