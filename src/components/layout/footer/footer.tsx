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
import { Socials } from '../../ui/socials/socials';
// import { Socials, SocialIcons } from '../../ui/socials/socials';
import AppStoreIco from '../../../assets/appstore.svg?react';
import GooglePlayIco from '../../../assets/googleplay.svg?react';

// const socials = [
//   {
//     img: SocialIcons.INSTAGRAM,
//     link: '/',
//   },
//   {
//     img: SocialIcons.FACEBOOK,
//     link: '/',
//   },
//   {
//     img: SocialIcons.TWITTER,
//     link: '/',
//   },
//   {
//     img: SocialIcons.TIKTOK,
//     link: '/',
//   },
// ];

interface ImenuItems {
  title: React.ReactNode;
  link?: string;
  to?: string;
  isDecorated?: boolean;
}

const menuItems: ImenuItems[] = [
  {
    title: 'support@electra.space',
    link: 'mailto:support@electra.space',
    isDecorated: true,
  },
  {
    title: 'Privacy policy',
    to: '/',
  },
];

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <FooterInner>
          <FooterLogo isLink />
          <FooterAppButtons>
            <AppButton
              link={'https://apps.apple.com/kg/app/electra/id1548675057'}
              target={'_blank'}
            >
              <AppStoreIco />
            </AppButton>
            <AppButton
              link={
                'https://play.google.com/store/apps/details?id=space.electra&hl=en&gl=US'
              }
              target={'_blank'}
            >
              <GooglePlayIco />
            </AppButton>
          </FooterAppButtons>
          {/* <Socials socials={socials} currentColor={'#000'} light /> */}
          <Socials currentColor={'#000'} light />
          <FooterButton
            link={'https://t.me/+dGR6vwpEbRNlMTU6'}
            target={'_blank'}
          >
            Support chat
          </FooterButton>
          <FooterNav menuItems={menuItems} isDark={true} />
          <Copyright>Electra © 2023 — All rights reserved</Copyright>
        </FooterInner>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
