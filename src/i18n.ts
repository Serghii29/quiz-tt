import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LOCALS } from './i18n/constants';
import { questions } from './i18n/copies/en';

const resources = {
  [LOCALS.EN]: {
    translation: questions,
  },

  [LOCALS.FR]: {
    translation: {},
  },

  [LOCALS.DE]: {
    translation: {},
  },

  [LOCALS.ES]: {
    translation: {},
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
