import styled from 'styled-components';
import HeroImg from '../../../assets/my-elctra-hero-bg.png';
import { Title } from '../../ui/title/title';
import Subtitle from '../../ui/subtitle/subtitle';
import { Socials } from '../../ui/socials/socials';

const StyledMyElectraHero = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.blackPrimary};
`;

const MyElectraHeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
  padding: 92px 0 245px;
  background-image: url(${HeroImg});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: ${(props) => props.theme.blackPrimary};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    align-items: flex-start;
    gap: 57px;
    padding: 101px 0 127px;
    background-position: bottom right;
  }
`;

const MyElectraHeroTitle = styled(Title)`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    max-width: 620px;
    text-align: start;
  }
`;

const MyElectraHeroText = styled(Subtitle)`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    max-width: 406px;
    text-align: start;
  }
`;

const HeroSocials = styled(Socials)`
  position: absolute;
  bottom: 24px;
  right: 34px;
  display: none;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    display: flex;
  }
`;

export {
  StyledMyElectraHero,
  MyElectraHeroInner,
  MyElectraHeroTitle,
  MyElectraHeroText,
  HeroSocials,
};
