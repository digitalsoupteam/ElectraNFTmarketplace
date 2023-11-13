import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import ColoredText from '../../ui/colored-text/colored-text';
import Ul from '../../../elements/ul';
import PlusIco from '../../../assets/plus-white.svg';
import Button from '../../ui/button/button';
import BgElectra from '../../../assets/energy-ico.svg';
import BgImage from '../../../assets/flexible-investment-bg.png';
import P from '../../../elements/p';

const StyledFlexibleInvestment = styled.section`
  padding: 40px 0 0;
  background-color: ${(props) => props.theme.white};
`;

const FlexibleInvestmentInner = styled.div`
  background-color: ${(props) => props.theme.diamond};
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  padding: 37px 32px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    background-image: url(${BgElectra});
    background-repeat: no-repeat;
    background-position: right top;
    border-radius: ${(props) => props.theme.borderRadiusDesktopSmall};
    position: relative;
    padding: 56px 53px 37px;
  }
`;

const FlexibleInvestmentTitle = styled(Title)`
  margin-bottom: 33px;
`;

const StyledColoredtext = styled(ColoredText)`
  color: ${(props) => props.theme.white};
`;

const FlexibleInvestmentList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 23px;
  margin-bottom: 23px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    display: block;
    columns: 2;
    column-fill: auto;
    column-gap: 87px;
    height: 418px;
    margin: 0;
  }
`;

const FlexibleInvestmentItem = styled.li`
  position: relative;
  line-height: 130%;
  color: ${(props) => props.theme.white};
  padding-left: 43px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 29px;
    height: 29px;
    background-size: contain;
    background-image: url(${PlusIco});
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
    padding-left: 62px;
    break-inside: avoid;

    &:not(:last-child) {
      margin-bottom: 35px;
    }

    &:before {
      width: 43px;
      height: 43px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    position: absolute;
    right: 156px;
    bottom: 44px;
    gap: 12px;
  }
`;

const StyledBuyButton = styled(Button)`
  &:hover {
    background-color: ${(props) => props.theme.white};
  }
`;

const StyledMoreButton = styled(Button)`
  border-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  background-color: transparent;
`;

const BottomTextContainer = styled.div`
  padding: 45px 0 208px;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom center;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 104px 0 272px;
  }
`;

const BottomText = styled(P)`
  color: ${(props) => props.theme.black};
  font-weight: 600;
  line-height: 120%;
  padding: 0 70px 0 30px;
  background-color: ${(props) => props.theme.white};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 30px;
    background-color: transparent;
    padding: 42px;
    max-width: 450px;
  }
`;

export {
  StyledFlexibleInvestment,
  FlexibleInvestmentInner,
  FlexibleInvestmentTitle,
  StyledColoredtext,
  FlexibleInvestmentList,
  FlexibleInvestmentItem,
  ButtonContainer,
  StyledBuyButton,
  StyledMoreButton,
  BottomTextContainer,
  BottomText,
};
