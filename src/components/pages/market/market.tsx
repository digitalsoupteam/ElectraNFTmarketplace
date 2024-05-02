import { SideBar, StyledCommunication } from './styled';
import MartketHero from '../../blocks/market-hero/market-hero';
import MarketArchive from '../../blocks/market-archive/market-archive';
import MarketLoop from '../../blocks/market-loop/market-loop';
// import NftMopedImage from '../../../assets/nft-moped.png';
import NftMopedTest from '../../../assets/mopedTest.png';
import NftCar from '../../../assets/nft-car.png';
import NftBike from '../../../assets/nft-bike.png';
import NftScooter from '../../../assets/nft-scooter.png';
// import Moped from '../../../contracts/moped.json';
import MopedTest from '../../../contracts/mopedTest.json';
import { t } from 'i18next';
import GuideLinks, { WalletIcons } from '../../ui/guide-links/guide-links';
import Accordion from '../../ui/accordion/accordion';

interface IMarket {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Market: React.FC<IMarket> = ({ isLoggedIn, connectWallet }) => {
  const accordionItems = [
    {
      title: t('nft:i-type'),
      content: (
        <>
          <b>{t('nft:stable')}</b> - {t('nft:type-stable')}.
          <br />
          <br />
          <b>{t('nft:flex')}</b> - {t('nft:type-offers')}.
        </>
      ),
    },
    {
      title: t('nft:p-summary'),
      content: t('nft:p-summary-details') + '.',
    },
    {
      title: t('nft:income'),
      content: t('nft:income-details') + '.',
    },
  ];

  const marketItems = [
    {
      title: 'E-Moped',
      image: NftMopedTest,
      address: MopedTest.address as `0x${string}`,
      abi: MopedTest.abi,
    },
    {
      title: 'E-Bike',
      image: NftBike,
      disabled: true,
    },
    {
      title: 'E-Car',
      image: NftCar,
      disabled: true,
    },
    {
      title: 'E-Scooter',
      image: NftScooter,
      disabled: true,
    },
  ];

  const guideLinks = [
    {
      walletIcon: WalletIcons.METAMASK,
      link: 'https://nft.electra.space/guides/metamask_nft/',
    },
    {
      walletIcon: WalletIcons.TRUSTWALLET,
      link: 'https://nft.electra.space/guides/trust_nft/',
    },
  ];

  return (
    <main>
      <MartketHero isLoggedIn={isLoggedIn} connectWallet={connectWallet} />
      <MarketArchive>
        <SideBar>
          <GuideLinks title="NFT buying guide:" links={guideLinks} />
          <Accordion accordionItems={accordionItems} />
        </SideBar>
        <MarketLoop
          items={marketItems}
          isLoggedIn={isLoggedIn}
          connectWallet={connectWallet}
        />
      </MarketArchive>
      <StyledCommunication />
    </main>
  );
};

export default Market;
