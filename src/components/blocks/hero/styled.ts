import styled from 'styled-components';
import HeroImgLoggedIm from '../../../assets/hero-logge-in.png';
import HeroImgLoggedImMob from '../../../assets/hero-logge-in-m.png';
import HeroImgLoggedOut from '../../../assets/hero-logge-out.png';
import HeroImgLoggedOutMob from '../../../assets/hero-logge-out-m.png';
import { Title } from '../../ui/title/title';
import P from '../../../elements/p';
import { Socials } from '../../ui/socials/socials';

interface IStyledHero {
  $isLoggedIn: boolean;
}

const getHeroImg = (isLoggedIn: boolean, mob: boolean) => {
  if (mob) {
    if (isLoggedIn) {
      return HeroImgLoggedImMob;
    } else {
      return HeroImgLoggedOutMob;
    }
  } else {
    if (isLoggedIn) {
      return HeroImgLoggedIm;
    } else {
      return HeroImgLoggedOut;
    }
  }
};

const StyledHero = styled.section<IStyledHero>`
  position: relative;
  /* box-sizing: border-box; */
  background-color: ${(props) => props.theme.blackPrimary};
  background-image: url(${(props) => getHeroImg(props.$isLoggedIn, true)});
  padding: 92px 0 327px;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  padding: ${(props) => (props.$isLoggedIn ? '92px 0 327px' : '100px 0 500px')};

  @media screen and (min-width: ${(props) => props.theme.widePhoneWidth}) {
    background-image: url(${(props) => getHeroImg(props.$isLoggedIn, false)});
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    /* height: calc(100vh - 177px); */
    padding: ${(props) =>
      props.$isLoggedIn ? '92px 0 493px' : '125px 0 554px'};
  }
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  padding: 0 15px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    gap: 0;
    align-items: center;
  }
`;

const HeroTitle = styled(Title)`
  padding: 0 5px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 19px;
  }
`;

const HeroTitleNowrapSpan = styled.span`
  white-space: nowrap;
`;

const HeroSubtitle = styled(P)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  align-content: center;
  gap: 5px 6px;
  font-size: 20px;
  font-weight: 600;
  line-height: 100%;
  text-align: center;
  padding: 0 35px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 46px;
    margin-bottom: 50px;
    gap: 9px;
    align-items: center;
  }
`;

const HeroText = styled(P)`
  line-height: 120%;
  color: ${(props) => props.theme.lightGrey};
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 28px;
    margin-bottom: 50px;
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
  StyledHero,
  HeroInner,
  HeroTitle,
  HeroTitleNowrapSpan,
  HeroSubtitle,
  HeroText,
  HeroSocials,
};
