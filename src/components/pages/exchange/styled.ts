import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import Image from '../../../elements/image';

const StyledExchange = styled.section`
  padding: 150px 0 70px;
`;

const ExchangeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 35px;

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    align-items: center;
    flex-direction: row;
  }
`;

const ExchangeTitle = styled(Title)`
  color: ${(props) => props.theme.grey};
  text-align: start;
`;

const TitleLogo = styled(Image)`
  width: 191px;
  height: 54px;
  position: relative;
  top: 7px;
`;

export { StyledExchange, ExchangeHeader, ExchangeTitle, TitleLogo };
