import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    ge: {
        translation:{
          "Home":"მთავარი",
          "Services":"სერვისი",
          "About":"ჩვენს შესახებ",
          "Contact":"კონტაქტები"
        }
    },
    en: {
        translation:{
          "Home":"Home",
          "Services":"Services",
          "About":"About",
          "Contact":"Contact"
        }
    }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: `${localStorage.getItem('lang') || 'ge'}`,
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;