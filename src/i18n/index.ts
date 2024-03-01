import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales';

const detectionOptions = {
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage'],
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    ns: ['main', 'menu', 'footer', 'my-electra', 'exchange', 'nft'],
    defaultNS: ['main'],
    detection: detectionOptions,
    fallbackLng: ['en'],
    supportedLngs: ['en', 'ru'],
    interpolation: {
      escapeValue: false,
    },
  });

document.documentElement.lang = i18next.language;

export default i18next;
