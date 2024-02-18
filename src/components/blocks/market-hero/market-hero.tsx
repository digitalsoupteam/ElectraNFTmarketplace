import {
  StyledMarketHero,
  MarketHeroInner,
  MarketheroTitle,
  MarketSubtitle,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import Button from '../../ui/button/button';
import { t } from 'i18next';

interface IMarketHero {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const MartketHero: React.FC<IMarketHero> = ({ isLoggedIn, connectWallet }) => {
  return (
    <StyledMarketHero>
      <Wrapper>
        <MarketHeroInner>
          <MarketheroTitle size={TitleSize.BIG}>{t('nft:t')}</MarketheroTitle>
          <MarketSubtitle>{t('nft:d')}</MarketSubtitle>
          {isLoggedIn ? null : (
            <Button onClick={connectWallet}>{t('menu:c-w')}</Button>
          )}
        </MarketHeroInner>
      </Wrapper>
    </StyledMarketHero>
  );
};

export default MartketHero;
