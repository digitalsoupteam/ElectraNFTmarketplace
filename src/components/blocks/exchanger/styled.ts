import styled from 'styled-components';
import ExchangeBg from '../../../assets/exchange-bg.png';
import P from '../../../elements/p';

const StyledExchanger = styled.section`
  background-color: ${(props) => props.theme.diamond};
  border-radius: ${(props) => props.theme.borderRadiusDesktopLarge};
  background-image: url(${ExchangeBg});
  background-repeat: no-repeat;
  background-position: left center;

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 34px 33px 32px 579px;
  }
  /* min-height: 732px; */
`;

const ExchangeInner = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadiusDesktopLarge};
  padding: 39px 30px;
`;

const ExchangeTitle = styled(P)`
  color: ${(props) => props.theme.grey};
  font-size: 30px;
  font-weight: 600;
  line-height: 120%;
`;

export { StyledExchanger, ExchangeInner, ExchangeTitle };
