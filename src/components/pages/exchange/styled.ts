import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import Image from '../../../elements/image';
import GuideLinks from '../../ui/guide-links/guide-links';

const StyledExchange = styled.section`
  padding: 150px 0 70px;
`;

const ExchangeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 35px;
  flex-wrap: wrap;
  row-gap: 20px;

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

const AddToken = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledGuideLinks = styled(GuideLinks)``;

const HelperButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
`;

export {
  StyledExchange,
  ExchangeHeader,
  ExchangeTitle,
  TitleLogo,
  AddToken,
  StyledGuideLinks,
  HelperButtons,
};
