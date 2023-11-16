import styled from 'styled-components';
import MarketHeroBg from '../../../assets/market-bg.png';
import { Title } from '../../ui/title/title';
import Subtitle from '../../ui/subtitle/subtitle';

const StyledMarketHero = styled.section`
  background-color: ${(props) => props.theme.blackPrimary};
`;

const MarketHeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
  padding: 92px 0 245px;
  background-image: url(${MarketHeroBg});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    align-items: flex-start;
    gap: 57px;
    padding: 101px 0 127px;
    background-position: bottom right;
  }
`;

const MarketheroTitle = styled(Title)`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    max-width: 620px;
    text-align: start;
  }
`;

const MarketSubtitle = styled(Subtitle)`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    max-width: 406px;
    text-align: start;
  }
`;

export { StyledMarketHero, MarketHeroInner, MarketheroTitle, MarketSubtitle };
