import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 375px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.indentMobile};
  max-width: ${(props) => props.theme.desktopWidth};

  @media screen and (min-width: ${(props) => props.theme.widePhoneWidth}) {
    max-width: ${(props) => props.theme.contentWidePhoneWidth};
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 0 ${(props) => props.theme.indentTablet};
    max-width: ${(props) => props.theme.contentTabletWidth};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 0 ${(props) => props.theme.indentDesktop};
    max-width: ${(props) => props.theme.contentWidthDesktop};
  }
`;

export default Wrapper;
