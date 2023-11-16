import styled from 'styled-components';
import { Title } from '../../ui/title/title';

const StyledMarketArchive = styled.section`
  padding: 80px 0 0;
  background-color: ${(props) => props.theme.white};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 100px 0 0;
  }
`;

const MarketArchiveInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0 10px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding-right: 410px;
  }
`;

const MarketArchiveTitle = styled(Title)`
  margin-bottom: 10px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    text-align: start;
  }
`;

export { StyledMarketArchive, MarketArchiveInner, MarketArchiveTitle };
