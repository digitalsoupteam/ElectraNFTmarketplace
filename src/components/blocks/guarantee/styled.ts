import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import P from '../../../elements/p';
import GuranteeBgMob from '../../../assets/guarantee-bg.png';
import GuaranteeBgDesktop from '../../../assets/guarantee-bg-desktop.png';
import Button from '../../ui/button/button';

const StyledGuarantee = styled.section`
  padding: 39px 0 32px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 55px 0 75px;
  }
`;

const GuaranteeInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 196px 32px 29px;
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  background-color: ${(props) => props.theme.blackPrimary};

  &:before {
    content: '';
    position: absolute;
    top: -58px;
    left: 0;
    right: 0;
    width: 340px;
    height: 243px;
    margin: 0 auto;
    background-image: url(${GuranteeBgMob});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 37px 34px 35px 53px;
    border-radius: ${(props) => props.theme.borderRadiusDesktopSmall};

    &:before {
      pointer-events: none;
      background-image: url(${GuaranteeBgDesktop});
      top: 50%;
      transform: translateY(-50%);
      left: 24px;
      right: auto;
      width: 1128px;
      height: 244px;
      margin: 0;
    }
  }
`;

const TextContainer = styled.div``;

const GuaranteeTitle = styled(Title)`
  padding: 0 38px;
  line-height: 120%;
  margin-bottom: 20px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 0;
    text-align: start;
    margin-bottom: 9px;
  }
`;

const GuranteeText = styled(P)`
  padding: 0 29px;
  text-align: center;
  line-height: 130%;
  margin-bottom: 20px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 0;
    font-size: 24px;
    text-align: start;
    margin-bottom: 0px;
  }
`;

const GuarenteeButton = styled(Button)`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
    padding: 16px 36px;
  }
`;

export {
  StyledGuarantee,
  GuaranteeInner,
  TextContainer,
  GuaranteeTitle,
  GuranteeText,
  GuarenteeButton,
};
