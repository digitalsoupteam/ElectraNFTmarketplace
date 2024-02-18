import styled from 'styled-components';
import CommunicationBgMob from '../../../assets/communication.png';
import { Title } from '../../ui/title/title';
import P from '../../../elements/p';
import { Socials } from '../../ui/socials/socials';
import CommunicationBgDesktop from '../../../assets/communication-desktop.png';

const StyledCommunication = styled.section`
  padding: 40px 0 30px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 83px 0 55px;
  }
`;

const CommunicationInner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.blackPrimary};
  background-image: url(${CommunicationBgMob});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 229px 10px 26px;
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 68px;
    background-image: url(${CommunicationBgDesktop});
    background-position: bottom;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    background-position: top center;
  }
`;

const CommunicationTitle = styled(Title)`
  margin-bottom: 18px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 12px;
  }
`;

const CommunicationText = styled(P)`
  line-height: 130%;
  text-align: center;
  white-space: pre-wrap;
  margin-bottom: 24px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
    margin-bottom: 28px;
  }
`;

const StyledSocials = styled(Socials)`
  margin-bottom: 5px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 18px;
  }
`;

const CommunicationBottomText = styled(P)`
  font-size: 10px;
  line-height: 130%;
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 14px;
  }
`;

export {
  StyledCommunication,
  CommunicationInner,
  CommunicationTitle,
  CommunicationText,
  StyledSocials,
  CommunicationBottomText,
};
