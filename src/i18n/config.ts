import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
export const supportedLanguages = {
    ru: "Русский",
    en: "English"
}

i18n.use(LanguageDetector).use(HttpApi).use(initReactI18next).init({
        fallbackLng: "ru",
        debug: true,
        supportedLngs: Object.keys(supportedLanguages),
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;