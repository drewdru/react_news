import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

// the translations
const locales = { en, ru };

const language = localStorage.getItem("language") || "en"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: locales,
    lng: language,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
