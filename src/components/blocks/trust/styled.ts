import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import Star from '../../../assets/star.svg';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import SliderNav from '../../ui/slider-nav/slider-nav';
import P from '../../../elements/p';
import Ul from '../../../elements/ul';

const StyledTrust = styled.section`
  padding: 30px 0 78px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 55px 0 55px;
  }
`;

const TrustTitle = styled(Title)`
  position: relative;
  margin-bottom: 40px;

  &:after {
    content: '';
    position: absolute;
    top: -5px;
    right: -1px;
    width: 18px;
    height: 19px;
    background-image: url(${Star});
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(15deg);
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    text-align: start;
    width: fit-content;

    &:after {
      top: -8px;
      right: -49px;
      width: 26px;
      height: 28px;
    }
  }
`;

const SliderContainer = styled.div`
  position: relative;
  margin-bottom: 22px;
`;

const StyledSwiper = styled(Swiper)`
  cursor: grab;
`;

const StyledSliderNav = styled(SliderNav)`
  top: 50%;
  transform: translateY(-50%);
`;

const Card = styled.div`
  padding: 14px 0;
  margin: 0 40px;
  border-top: 1px solid ${(props) => props.theme.darkGrey};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    display: flex;
    align-items: center;
    gap: 65px;
    padding: 44px 0;
    margin: 0;
  }
`;

interface ICardTitle {
  ico: string;
}

const CardTitle = styled(Title)<ICardTitle>`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.blackPrimary};
  padding: 10px 0;
  margin-bottom: 9px;

  &:before {
    flex-shrink: 0;
    content: '';
    width: 40px;
    height: 44px;
    background-image: urL(${(props) => props.ico});
    background-size: contain;
    background-position: left center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin: 0;
    padding: 0;
    gap: 65px;
    text-align: start;
    flex-basis: 398px;

    &:before {
      width: 58px;
      height: 63px;
    }
  }
`;

const CardText = styled(P)`
  color: ${(props) => props.theme.grey};
  font-size: 14px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    flex-basis: 700px;
    font-size: 20px;
  }
`;

const CardsList = styled(Ul)`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
`;

export {
  StyledTrust,
  TrustTitle,
  SliderContainer,
  StyledSwiper,
  StyledSliderNav,
  Card,
  CardTitle,
  CardText,
  CardsList,
};
