import mainEN from './en-main.json';
import menuEN from './en-menu.json';
import footerEN from './en-footer.json';
import myElectraEN from './en-my-electra-page.json';
import exchangeEN from './en-exchange-page.json';
import nftEN from './en-nft-marketplace-page.json';

import mainRU from './ru-main.json';
import menuRU from './ru-menu.json';
import footerRU from './ru-footer.json';
import myElectraRU from './ru-my-electra-page.json';
import exchangeRU from './ru-exchange-page.json';
import nftRU from './ru-nft-marketplace-page.json';

export const resources = {
  ru: {
    main: mainRU,
    menu: menuRU,
    footer: footerRU,
    'my-electra': myElectraRU,
    exchange: exchangeRU,
    nft: nftRU,
  },
  en: {
    main: mainEN,
    menu: menuEN,
    footer: footerEN,
    'my-electra': myElectraEN,
    exchange: exchangeEN,
    nft: nftEN,
  },
};

export default resources;
