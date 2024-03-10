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
import { useTranslation } from 'react-i18next';

interface IExchange {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Exchange: React.FC<IExchange> = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('exchange:list.i1.t'),
      text: t('exchange:list.i1.d'),
      ico: EarnIco,
    },
    {
      title: t('exchange:list.i2.t'),
      text: t('exchange:list.i2.d'),
      ico: ExchangeIco,
    },
    {
      title: t('exchange:list.i3.t'),
      text: t('exchange:list.i3.d'),
      ico: StakeIco,
    },
  ];

  return (
    <main>
      <Wrapper>
        <StyledExchange>
          <ExchangeHeader>
            <ExchangeTitle size={TitleSize.BIG}>
              <TitleLogo src={ElectraLogo} /> {t('exchange:t')}
            </ExchangeTitle>
            <Button isSmall={true} to={'/market'}>
              {t('menu:nft-marketplace')}
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
