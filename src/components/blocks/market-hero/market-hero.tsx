import {
  StyledMarketHero,
  MarketHeroInner,
  MarketheroTitle,
  MarketSubtitle,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import Button from '../../ui/button/button';

interface IMarketHero {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const MartketHero: React.FC<IMarketHero> = ({ isLoggedIn, connectWallet }) => {
  return (
    <StyledMarketHero>
      <Wrapper>
        <MarketHeroInner>
          <MarketheroTitle size={TitleSize.BIG}>
            Buy NFTs that represent real sharing vehicles
          </MarketheroTitle>
          <MarketSubtitle>
            Earn money by investing in a real, operating business. Choose your
            investment type and receive returns ranging from 4% to 100% annually
          </MarketSubtitle>
          {isLoggedIn ? null : (
            <Button onClick={connectWallet}>Connect wallet</Button>
          )}
        </MarketHeroInner>
      </Wrapper>
    </StyledMarketHero>
  );
};

export default MartketHero;
