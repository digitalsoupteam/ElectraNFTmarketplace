import styled from 'styled-components';
import Logo from '../../ui/logo/logo';
import MainNav from '../../ui/main-nav/main-nav';
import P from '../../../elements/p';
import Button from '../../ui/button/button';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.black};
`;

const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 113px 26px 87px;
  gap: 24px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    gap: 36px 24px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const FooterLogo = styled(Logo)`
  width: 152px;
  height: 44px;
  margin: 0 auto;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin: 0;
    margin-right: 31px;
  }
`;

const FooterButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.green};
  color: ${(props) => props.theme.green};

  &:hover {
    background-color: ${(props) => props.theme.green};
    color: ${(props) => props.theme.blackPrimary};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 20px;
    padding: 14px 36px;
  }
`;

const FooterAppButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    flex-direction: row;
    margin-right: auto;
  }
`;

const FooterNav = styled(MainNav)`
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    flex-direction: row;
    gap: 35px;
    order: 1;
    padding: 0;
  }
`;

const Copyright = styled(P)`
  text-align: center;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => props.theme.darkGrey};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-right: auto;
    flex-basis: 33%;
    text-align: left;
  }
`;

export {
  StyledFooter,
  FooterInner,
  FooterLogo,
  FooterButton,
  FooterAppButtons,
  Copyright,
  FooterNav,
};
