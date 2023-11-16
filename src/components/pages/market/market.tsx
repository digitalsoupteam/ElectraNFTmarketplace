import { StyledAccordion } from './styled';
import MartketHero from '../../blocks/market-hero/market-hero';
import Communication from '../../blocks/communication/communication';
import MarketArchive from '../../blocks/market-archive/market-archive';
import MarketLoop from '../../blocks/market-loop/market-loop';
import NftMopedImage from '../../../assets/nft-moped.png';
import NftCar from '../../../assets/nft-car.png';

const accordionItems = [
  {
    title: 'Investment Type',
    content: (
      <>
        <b>Stable - </b>
        Provides a consistent income based on the investment duration. The
        longer the duration, the higher the annual percentage yield. After the
        investment term ends, you receive 100% of the NFT value you purchased.
        You can withdraw your earnings every month
        <br />
        <br />
        <b>Flex - </b>
        Offers 12% annual returns for the first four months. During this period,
        the equipment is deployed in cities, and 50% of its income is paid to
        you every month.You can purchase different types of equipment and
        various investment types simultaneously, each providing its own income
        stream in your personal account.
      </>
    ),
  },
  {
    title: 'Project Summary',
    content:
      'We created this business and now invite people to become a part of it. Essentially, by buying NFTs, you invest in the purchase of a new electric vehicle that will operate and generate income for you while we handle its maintenance',
  },
  {
    title: 'Income',
    content:
      'The level of income depends on the number of NFTs, the type of NFT, and the investment duration (for stable investments).',
  },
];

const marketItems = [
  { title: 'E-Moped', image: NftMopedImage },
  { title: 'E-Car', image: NftCar },
];

interface IMarket {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Market: React.FC<IMarket> = ({ isLoggedIn, connectWallet }) => {
  return (
    <main>
      <MartketHero isLoggedIn={isLoggedIn} connectWallet={connectWallet} />
      <MarketArchive>
        <StyledAccordion accordionItems={accordionItems} />
        <MarketLoop items={marketItems} />
      </MarketArchive>
      <Communication />
    </main>
  );
};

export default Market;
