import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    ge: {
        translation:{
          "Home":"მთავარი",
          "About":"ჩვენს შესახებ",
          "News":"სიახლეები",
          "Gallery":"გალერეა",
          "Contact":"კონტაქტები",
          "EN":"ინგ.",
          "GE":"ქარ."
        }
    },
    en: {
        translation:{
          "Home":"Home",
          "About":"About",
          "News":"News",
          "Gallery":"Gallery",
          "Contact":"Contact",
          "EN":"EN",
          "GE":"GE"
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