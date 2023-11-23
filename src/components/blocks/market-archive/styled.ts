import styled from 'styled-components';
import marketBackground from '../../../assets/market-right-bg.png';
import { Title } from '../../ui/title/title';

const StyledMarketArchive = styled.section`
  padding: 80px 0 0;
  background-color: ${(props) => props.theme.white};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 100px 0 0;
  }
`;

const MarketArchiveTitle = styled(Title)`
  margin-bottom: 30px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 46px;
    text-align: start;
  }
`;

const MarketArchiveInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 35px;
  padding: 0 10px;

  background-repeat: no-repeat;
  background-size: 816px auto;
  background-position: right bottom;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    grid-template-columns: 1fr 410px;
    background-image: url(${marketBackground});
  }
`;

export { StyledMarketArchive, MarketArchiveTitle, MarketArchiveInner };
