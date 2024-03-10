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
  lookupCookie: 'lng',
  lookupLocalStorage: 'lng',
  caches: ['localStorage'],
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'main',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    ns: ['main', 'menu', 'footer', 'my-electra', 'exchange', 'nft'],
    detection: detectionOptions,
    interpolation: {
      escapeValue: false,
    },
  });

document.documentElement.lang = i18next.language;

export default i18next;
