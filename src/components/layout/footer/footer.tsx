import {
  StyledFooter,
  FooterInner,
  FooterLogo,
  FooterButton,
  FooterAppButtons,
  Copyright,
  FooterNav,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import AppButton from '../../ui/app-button/app-button';
import { Socials, SocialIcons } from '../../ui/socials/socials';
import AppStoreIco from '../../../assets/appstore.svg?react';
import GooglePlayIco from '../../../assets/googleplay.svg?react';

const socials = [
  {
    img: SocialIcons.INSTAGRAM,
    link: '/',
  },
  {
    img: SocialIcons.FACEBOOK,
    link: '/',
  },
  {
    img: SocialIcons.TWITTER,
    link: '/',
  },
  {
    img: SocialIcons.TIKTOK,
    link: '/',
  },
];

interface ImenuItems {
  title: React.ReactNode;
  link: string;
  isDecorated?: boolean;
}

const menuItems: ImenuItems[] = [
  {
    title: 'support@electra.space',
    link: 'mailto:support@electra.space',
    isDecorated: true,
  },
  {
    title: 'Terms of Service',
    link: '/',
  },
  {
    title: 'Privacy policy',
    link: '/',
  },
  {
    title: 'Company details',
    link: '/',
  },
];

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <FooterInner>
          <FooterLogo isLink />
          <FooterAppButtons>
            <AppButton link={'/'}>
              <AppStoreIco />
            </AppButton>
            <AppButton link={'/'}>
              <GooglePlayIco />
            </AppButton>
          </FooterAppButtons>
          <Socials socials={socials} currentColor={'#000'} light />
          <FooterButton>Support chat</FooterButton>
          <FooterNav menuItems={menuItems} isDark={true} />
          <Copyright>Electra © 2023 — All rights reserved</Copyright>
        </FooterInner>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
