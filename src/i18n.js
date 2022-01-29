import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import languageDetector from 'i18next-browser-languagedetector' ;
import HttpApi from 'i18next-http-backend';
const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
  
  ]
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(languageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection:{
      order:['cookie' , 'htmlTag' , 'localStorage'],
      caches : ['cookie'],
    },
    backend:{
      loadPath : '/assets/locales/{{lng}}/translation.json'
    },
    react: {useSuspense:false},
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });