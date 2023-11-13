import { createGlobalStyle } from 'styled-components';
import TildaSanasVFwoff from '../../fonts/TildaSans-VF.woff';
import TildaSanasVFwoff2 from '../../fonts/TildaSans-VF.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Tilda Sans VF';
    src: local('Tilda Sans VF'), url(${TildaSanasVFwoff2}) format('woff2'),
         url(${TildaSanasVFwoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 60px;
  }

  html,
  body {
    margin: 0;
  }

  body {
    overflow-x: hidden;
    background-color: ${(props) => props.theme.lightGrey};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.defaultFontSizeMobile};
    line-height: ${(props) => props.theme.lineHieghtDefault};
    font-weight: 400;
    color: ${(props) => props.theme.white};
    padding-top: 83px;

    @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
      padding-top: 177px;
    }
  }

  body div#root {
    display: grid;
    min-height: 100vh;
    grid-template-rows: 1fr min-content;
  }

  &::selection {
    background-color: ${(props) => props.theme.green};
    color: ${(props) => props.theme.blackPrimary};
  }
  .swiper {
    z-index: auto;
    overflow-y: visible;
  }

  .swiper-wrapper {
    width: 10px;
    z-index: auto;
  }

  .swiper-scrollbar {
    position: static !important;
    margin-top: 20px;
    height: 10px !important;
    background-color: ${(props) => props.theme.transparent};
    height: 18px !important;
    border-radius: 4px;
  }

  .swiper-scrollbar-drag {
    border-radius: 4px;
    left: 0px;
    right: 0px;
    background-position-x: -2px;
    background-color: transparent;
  }

  @media (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    body {
      font-size: ${(props) => props.theme.fontSizeDesktop};
    }
  }
`;

export default GlobalStyle;
