import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import HowItWoHowItWorksBgTopMobile from '../../../assets/how-it-works-bg-top-m.png';
import HowItWorksBgBottomMobile from '../../../assets/how-it-works-bg-bottom-m.png';
import HowItWorksBgTopDesktop from '../../../assets/how-it-works-bg-top.png';
import HowItWorksBgBottomDesktop from '../../../assets/how-it-works-bg-bottom.png';
import SliderBgMobile from '../../../assets/how-it-works-slider-bg-mob.svg';
import Button from '../../ui/button/button';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import P from '../../../elements/p';
import MoneyImg from '../../../assets/money.png';
import UpperImage from '../../../assets/how-it-works-upper.png';

const StyledHowItWorks = styled.section`
  background-color: ${(props) => props.theme.black};
  background-image: url(${HowItWoHowItWorksBgTopMobile}),
    url(${HowItWorksBgBottomMobile});
  background-repeat: no-repeat, no-repeat;
  background-size: contain, contain;
  background-position: top center, bottom center;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    background-image: url(${HowItWorksBgTopDesktop}),
      url(${HowItWorksBgBottomDesktop});
  }
`;

const HowItWorksInner = styled.div`
  padding: 68px 0 338px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 142px 0 487px;
  }
`;

const HowItWorksTitle = styled(Title)`
  padding: 0 22px;
  white-space: pre-wrap;
  margin-bottom: 63px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    white-space: normal;
    margin-bottom: 137px;
  }
`;

const HowItWorksSubtitle = styled(Title)`
  margin: 0 0 15px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    text-align: start;
    margin-bottom: 35px;
  }
`;

const StyledSwiper = styled(Swiper)`
  cursor: grab;
`;

interface ICard {
  $imgMobile: string;
  $imgDesktop?: string;
  $isWide: boolean;
}

const Card = styled.div<ICard>`
  grid-column: ${(props) => (props.$isWide ? 'span 2' : 'auto')};
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};
  margin: 0 38px;
  box-sizing: border-box;
  padding: 22px 26px;
  min-height: 262px;
  background-image: url(${(props) => props.$imgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    border-radius: ${(props) => props.theme.borderRadiusDesktopSmall};
    margin: 0;
    padding: 31px 38px;
    background-image: url(${(props) =>
      props.$imgDesktop ? props.$imgDesktop : props.$imgMobile});
  }
`;

interface ICardTitle {
  $isDark?: boolean;
}

const CardTitle = styled(Title)<ICardTitle>`
  font-size: 600;
  font-weight: 600;
  color: ${(props) => (props.$isDark ? props.theme.grey : props.theme.white)};
  margin-bottom: 15px;
  text-align: start;
  line-height: 120%;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 30px;
  }
`;

interface ICardText {
  $isDark?: boolean;
}

const CardText = styled(P)<ICardText>`
  color: ${(props) => (props.$isDark ? props.theme.grey : props.theme.white)};
  line-height: 130%;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  background-image: url(${SliderBgMobile});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 57px 0 33px;
  margin-bottom: 14px;

  .swiper-slide {
    &:nth-child(1) {
      ${CardText} {
        padding-right: 113px;
        padding-bottom: 80px;
      }
    }

    &:nth-child(2) {
      ${Card} {
        min-height: 337px;

        ${CardText} {
          padding-bottom: 165px;
        }
      }
    }

    &:nth-child(3) {
      ${Card} {
        min-height: 337px;
      }
      ${CardText} {
        padding-right: 0;
        padding-bottom: 180px;
      }
    }

    &:nth-child(4) {
      ${Card} {
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 70px;
          right: -22px;
          width: 91px;
          height: 100px;
          background-image: url(${MoneyImg});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
      }
      ${CardText} {
        padding-right: 95px;
        padding-bottom: 80px;
      }
    }
  }
`;

const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: 100px, 80px, 100px; */
  gap: 40px 60px;
  padding-top: 35px;
  margin-bottom: 61px;

  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    top: -45px;
    left: 306px;
    width: 499px;
    height: 666px;
    background-image: url(${UpperImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  ${Card} {
    &:nth-child(1) {
      min-height: 375px;
      max-width: 366px;

      ${CardText} {
        padding-right: 150px;
        padding-bottom: 80px;
      }
    }

    &:nth-child(2) {
      min-height: 264px;
      max-width: 731px;
      padding-right: 455px;
    }

    &:nth-child(3) {
      min-height: 261px;

      ${CardText} {
        padding-right: 365px;
      }
    }

    &:nth-child(4) {
      min-height: 375px;

      &::before {
        content: '';
        background-image: url(${MoneyImg});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
      ${CardText} {
        padding-right: 100px;
        padding-bottom: 150px;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    flex-direction: row;
    gap: 11px;
  }
`;

interface IMoreButton {
  isAlt: boolean;
}

const MoreButton = styled(Button)<IMoreButton>`
  padding: 13px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 22px 30px;
  }
`;

export {
  StyledHowItWorks,
  HowItWorksInner,
  HowItWorksTitle,
  HowItWorksSubtitle,
  SliderContainer,
  CardContainer,
  StyledSwiper,
  Card,
  CardTitle,
  CardText,
  ButtonContainer,
  MoreButton,
};
