import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import SliderNav from '../../ui/slider-nav/slider-nav';
import P from '../../../elements/p';

const StyledMicromobility = styled.section`
  padding: 21px 0 88px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 55px 0 126px;
  }
`;

const MicromobilityTitle = styled(Title)`
  margin-bottom: 50px;
  text-align: start;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 60px;
  }
`;

const StyledSwiper = styled(Swiper)`
  cursor: grab;
`;

const StyledNav = styled(SliderNav)`
  top: 50%;
  transform: translateY(-50%);
`;

const MicroMobilityCards = styled.div`
  position: relative;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

const Card = styled.div`
  padding: 25px 22px 26px;
  background-color: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadiusMobileMedium};
  margin: 0 44px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 36px 20px 36px 32px;
    margin: 0;
  }
`;

const CardTitle = styled(Title)`
  text-align: start;
  line-height: 120%;
  margin-bottom: 14px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 28px;
    margin-bottom: 21px;
  }
`;

const CardText = styled(P)`
  color: ${(props) => props.theme.grey};
  font-size: 13px;
  line-height: 120%;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 18px;
  }
`;

export {
  StyledMicromobility,
  MicromobilityTitle,
  StyledSwiper,
  StyledNav,
  MicroMobilityCards,
  Card,
  CardTitle,
  CardText,
};
