import styled from 'styled-components';
import BurgerButton from '../../ui/burger-button/burger-button';
import { Socials } from '../../ui/socials/socials';

const StyledHeader = styled.header`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.blackPrimary};

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    position: absolute;
  }
`;

const HeaderInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 38px 13px 13px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    align-items: flex-end;
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 88px 0 41px;
  }
`;

const HeaderBurger = styled(BurgerButton)`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    display: none;
  }
`;

const HeaderMenu = styled.div<{
  $isMenuOpened: boolean;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: -1;
  top: ${(props) => (props.$isMenuOpened ? '-10px' : '-700px')};
  left: -17px;
  right: -17px;
  padding: 165px 10px 80px;
  background-color: ${(props) => props.theme.blackPrimary};
  transition: all 0.4s;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    top: ${(props) => (props.$isMenuOpened ? '-20px' : '-700px')};
    right: -60px;
    left: -60px;
    padding: 250px 10px 80px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    z-index: 1;
    position: static;
    padding: 0;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
  }
`;

interface ISocialItem {
  img: string;
  link: string;
  currentColor: string;
}

interface IHeaderSocials {
  socials: ISocialItem[];
}

const HeaderSocials = styled(Socials)<IHeaderSocials>`
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    display: none;
  }
`;

export { StyledHeader, HeaderInner, HeaderBurger, HeaderMenu, HeaderSocials };
