import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import {
  StyledExchange,
  ExchangeHeader,
  ExchangeTitle,
  TitleLogo,
} from './styled';
import ElectraLogo from '../../../assets/logo-gradient.svg';
import Button from '../../ui/button/button';
import ExchangeFeatureList from '../../blocks/exchange-feature-list/exchange-feature-list';
import EarnIco from '../../../assets/earn-ico.png';
import ExchangeIco from '../../../assets/exchange-ico.png';
import StakeIco from '../../../assets/stake-ico.png';
import Exchanger from '../../blocks/exchanger/exchanger';

const features = [
  {
    title: 'Earn',
    text: 'ELCT tokens using\nour NFT investment',
    ico: EarnIco,
  },
  {
    title: 'Exchange',
    text: 'ELCT tokens in\njust three seconds',
    ico: ExchangeIco,
  },
  {
    title: 'Stake',
    text: 'ELCT tokens for an\nincreased income',
    ico: StakeIco,
  },
];

interface IExchange {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Exchange: React.FC<IExchange> = () => {
  return (
    <main>
      <Wrapper>
        <StyledExchange>
          <ExchangeHeader>
            <ExchangeTitle size={TitleSize.BIG}>
              <TitleLogo src={ElectraLogo} /> token
            </ExchangeTitle>
            <Button isSmall={true} to={'/market'}>
              NFT-Marketplace
            </Button>
          </ExchangeHeader>
          <ExchangeFeatureList features={features} />
          <Exchanger />
        </StyledExchange>
      </Wrapper>
    </main>
  );
};

export default Exchange;
