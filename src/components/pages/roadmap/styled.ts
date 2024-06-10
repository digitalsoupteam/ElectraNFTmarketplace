import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';

import RoadmapBg1 from '../../../assets/roadmap-bg.svg';
import RoadmapBg2 from '../../../assets/roadmap-bg2.png';
import Nft from '../../../assets/roadmap-nft.png';
import Items from '../../../assets/roadmap-items.png';
import Scooter from '../../../assets/roadmap-scooter.png';

const StyledRoadmap = styled.section`
  background-color: #161616;
  width: 100vw;
  overflow: hidden;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: 99vw;
  }
`;

const StyledSwiper = styled(Swiper)`
  align-items: flex-end;

  .swiper-slide {
    z-index: 1;
    position: relative;
    width: fit-content;
    height: auto;
  }

  .swiper-slide:first-child {
    padding-left: 240px;
  }

  .swiper-slide:last-child {
    padding-right: 240px;
  }

  .swiper-slide:nth-child(6)::after {
    z-index: -1;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 381px;
    height: 152px;
    background: url(${Scooter});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
      width: 528px;
      height: 211px;
    }
  }

  .swiper-slide:nth-child(6)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 240px;
    background: url(${Nft});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
      width: 400px;
      height: 350px;
    }
  }

  .swiper-slide:nth-child(9):before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 275px;
    height: 183px;
    background: url(${Items});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
      width: 400px;
      height: 350px;
    }
  }

  .swiper-wrapper {
    cursor: grab;
    padding-left: 90px;
    position: relative;
    width: max-content;
    box-sizing: border-box;

    &::before {
      pointer-events: none;
      content: '';
      position: absolute;
      top: -40px;
      left: 120px;
      width: 750px;
      height: 393px;
      background: url(${RoadmapBg2});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: top left;

      @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
        top: -50px;
        width: 1023px;
        height: 543px;
      }
    }

    &::after {
      z-index: 0;
      pointer-events: none;
      content: '';
      position: absolute;
      top: calc(50% + 65px);
      right: 180px;
      transform: translateY(-50%);
      width: 100%;
      height: 266px;
      background: url(${RoadmapBg1});
      background-repeat: no-repeat;
      background-position: center right;

      @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
        height: 543px;
      }
    }

    @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
      padding-left: 120px;
    }
  }
`;

const RoadmapItem = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 110px;
  height: 100%;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: 150px;
  }
`;

const TopPart = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    gap: 30px;
  }
`;

const TopContent = styled.div`
  border-left: 1px solid ${(props) => props.theme.green};
  height: fit-content;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding-left: 15px;
    gap: 28px;
  }
`;

const BottomPart = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 0;
`;

const BottomContent = styled.div`
  border-left: 1px solid ${(props) => props.theme.diamond};
  height: fit-content;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding-left: 15px;
    gap: 28px;
  }
`;

const ItemText = styled.div`
  white-space: pre-wrap;
  color: ${(props) => props.theme.white};
  font-size: 13px;
  line-height: 130%;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: 17px;
  }
`;

const ItemYear = styled.div`
  position: relative;
  white-space: pre-wrap;
  color: ${(props) => props.theme.white};
  font-size: 32px;
  line-height: 130%;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: 45px;
  }
`;

const LimeText = styled.div`
  color: ${(props) => props.theme.green};
  font-size: 13px;
  line-height: 130%;
  padding-bottom: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding-bottom: 20px;
    font-size: 18px;
  }
`;

const DiamondText = styled.div`
  color: ${(props) => props.theme.diamond};
  font-size: 13px;
  line-height: 130%;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: 18px;
  }
`;

export {
  StyledRoadmap,
  StyledSwiper,
  RoadmapItem,
  TopPart,
  TopContent,
  BottomPart,
  BottomContent,
  ItemText,
  ItemYear,
  LimeText,
  DiamondText,
};
