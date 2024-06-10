import { FC, useState, useEffect } from 'react';
import {
  StyledHeader,
  HeaderInner,
  HeaderBurger,
  HeaderMenu,
  HeaderSocials,
  UserNav,
  StyledMyElectra,
} from './styled';
import Wrapper from '../wrapper/wrapper';
import Logo from '../../ui/logo/logo';
import MainNav from '../../ui/main-nav/main-nav';
import OutsideClickHandler from 'react-outside-click-handler';
import { SocialIcons } from '../../ui/socials/socials';
import ConnectWallet from '../../ui/connect-wallet/connect-wallet';
import { useTranslation } from 'react-i18next';
import User from '../../../assets/user.svg?react';

interface IMenuItems {
  title: string;
  to?: string;
  link?: string;
  mobileInvisible?: boolean;
}

interface IHeader {
  handlerConnect: () => void;
  address: string;
}

const Header: FC<IHeader> = ({ handlerConnect, address }) => {
  const { t } = useTranslation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.matchMedia('(min-width: 1400px)').matches,
  );

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const menuItems: IMenuItems[] = [
    {
      title: t('menu:nft-marketplace'),
      to: 'market',
    },
    {
      title: t('menu:exchange'),
      to: 'exchange',
    },
    {
      title: 'Roadmap',
      to: 'roadmap',
    },
    {
      title: t('menu:contact'),
      link: 'mailto:support@electra.space',
      mobileInvisible: true,
    },
  ];

  const socials: any = [
    {
      img: SocialIcons.TELEGRAM,
      link: 'https://t.me/electra_nft',
    },
    {
      img: SocialIcons.DISCORD,
      link: 'https://discord.gg/RsGyxRXQ9E',
    },
    {
      img: SocialIcons.TWITTER,
      link: 'https://twitter.com/Electra__NFT',
    },
  ];

  useEffect(() => {
    const body = document.querySelector('body');

    if (isMenuOpened) {
      body ? (body.style.overflow = 'hidden') : null;
    } else {
      body ? (body.style.overflow = 'visible') : null;
    }

    return () => {
      body ? (body.style.overflow = 'visible') : null;
    };
  }, [isMenuOpened]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1400px)');

    const handleMediaChange = (evt: MediaQueryListEvent) => {
      setIsDesktop(evt.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const MyElectra: FC = () => {
    return (
      <StyledMyElectra to={'my-electra'} onClick={closeMenu}>
        <User />
      </StyledMyElectra>
    );
  };

  return (
    <StyledHeader>
      <Wrapper>
        <OutsideClickHandler onOutsideClick={closeMenu}>
          <HeaderInner>
            <Logo isLink />
            <HeaderBurger onClick={toggleMenu} />
            <HeaderMenu $isMenuOpened={isMenuOpened}>
              {!isDesktop && (
                <UserNav>
                  {address && <MyElectra />}
                  <ConnectWallet onClick={handlerConnect} address={address} />
                </UserNav>
              )}
              <MainNav onClick={closeMenu} menuItems={menuItems} />
              <HeaderSocials socials={socials} currentColor={'#323232'} />
            </HeaderMenu>
            {isDesktop && (
              <UserNav>
                {address && <MyElectra />}
                <ConnectWallet onClick={handlerConnect} address={address} />
              </UserNav>
            )}
          </HeaderInner>
        </OutsideClickHandler>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
