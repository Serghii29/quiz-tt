import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetecror from 'i18next-browser-languagedetector';
import { LOCALS } from './constants';
import { EN } from './copies/en';
import { FR } from './copies/fr';
import { DE } from './copies/de';
import { ES } from './copies/es';

const resources = {
  [LOCALS.EN]: {
    translation: EN,
  },

  [LOCALS.FR]: {
    translation: FR,
  },

  [LOCALS.DE]: {
    translation: DE,
  },

  [LOCALS.ES]: {
    translation: ES,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetecror)
  .init({
    resources,
    fallbackLng: LOCALS.DE,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
