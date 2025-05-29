import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from 'react-native-localize'

import kr from "./locales/kr.json";
import en from "./locales/en.json";
import jp from "./locales/jp.json";
import cn from "./locales/cn.json";

const resources = {
  en: { translation: { ...en } },
  kr: { translation: { ...kr } },
  jp: { translation: { ...jp } },
  cn: { translation: { ...cn } },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: resources,
    lng: getLocales()[0].languageCode, // if you're using a language detector, do not define the lng option
    fallbackLng: "kr",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;

//getLocales()[0].languageCode
