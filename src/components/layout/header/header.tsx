import { useState, useEffect } from 'react';
import {
  StyledHeader,
  HeaderInner,
  HeaderBurger,
  HeaderMenu,
  HeaderSocials,
} from './styled';
import Wrapper from '../wrapper/wrapper';
import Logo from '../../ui/logo/logo';
import MainNav from '../../ui/main-nav/main-nav';
import OutsideClickHandler from 'react-outside-click-handler';
import { SocialIcons } from '../../ui/socials/socials';
import ConnectWallet from '../../ui/connect-wallet/connect-wallet';
import { MetaMaskAvatar } from 'react-metamask-avatar';

const socials = [
  {
    img: SocialIcons.TELEGRAM,
    link: '/',
  },
  {
    img: SocialIcons.DISCORD,
    link: '/',
  },
  {
    img: SocialIcons.TWITTER,
    link: '/',
  },
];

interface ImenuItems {
  title: string;
  to: string;
}

const menuItems: ImenuItems[] = [
  {
    title: 'NFT-Marketplace',
    to: 'market',
  },
  {
    title: 'EXCHANGE',
    to: '/',
  },
  {
    title: 'MyElectra',
    to: '/my-electra',
  },
  {
    title: 'Contact us',
    to: '/',
  },
];

interface IHeader {
  handlerConnect: () => void;
  address: string;
}

const Header: React.FC<IHeader> = ({ handlerConnect, address }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const formateAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.matchMedia('(min-width: 1400px)').matches
  );

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

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

  const connectWallet = (
    <ConnectWallet
      onClick={handlerConnect}
      isConnected={address ? true : false}
    >
      {address ? <MetaMaskAvatar address={address} size={46} /> : null}
      {address ? formateAddress(address) : 'Connect wallet'}
    </ConnectWallet>
  );

  return (
    <StyledHeader>
      <Wrapper>
        <OutsideClickHandler onOutsideClick={closeMenu}>
          <HeaderInner>
            <Logo isLink />
            <HeaderBurger onClick={toggleMenu} />
            <HeaderMenu $isMenuOpened={isMenuOpened}>
              {isDesktop ? null : connectWallet}
              <MainNav onClick={closeMenu} menuItems={menuItems} />
              <HeaderSocials socials={socials} currentColor={'#323232'} />
            </HeaderMenu>
            {isDesktop ? connectWallet : null}
          </HeaderInner>
        </OutsideClickHandler>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
