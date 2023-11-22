import {
  StyledHero,
  HeroInner,
  HeroTitle,
  HeroTitleNowrapSpan,
  HeroSubtitle,
  HeroText,
  HeroSocials,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import Button from '../../ui/button/button';
import { SocialIcons } from '../../ui/socials/socials';
import Logo from '../../ui/logo/logo';

interface ISocialItem {
  img: string;
  link: string;
}

const socials: ISocialItem[] = [
  {
    img: SocialIcons.TELEGRAM,
    link: 'https://t.me/electra_nft',
  },
  {
    img: SocialIcons.TWITTER,
    link: 'https://twitter.com/Electra__NFT',
  },
  {
    img: SocialIcons.DISCORD,
    link: 'https://discord.gg/rFkgyXpB',
  },
];

interface IHero {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Hero: React.FC<IHero> = ({ isLoggedIn, connectWallet }) => {
  return (
    <StyledHero $isLoggedIn={isLoggedIn}>
      <Wrapper>
        <HeroInner>
          {isLoggedIn ? (
            <>
              <HeroTitle size={TitleSize.BIG}>
                Buy NFTs from the{' '}
                <HeroTitleNowrapSpan>e-vehicle</HeroTitleNowrapSpan> collection
              </HeroTitle>
              <HeroSubtitle>
                Earn income from the{' '}
                <Logo
                  isGradient
                  $width={{ mobile: '114px', desktop: '191px' }}
                  $height={{ mobile: '32px', desktop: '54px' }}
                />{' '}
                sharing app
              </HeroSubtitle>
              <HeroText>
                An NFT platform for investing in an operational sharing business
              </HeroText>
              <Button to={'/market'}>Buy NFT</Button>
              <HeroSocials socials={socials} currentColor={'#323232'} />
            </>
          ) : (
            <>
              <HeroTitle size={TitleSize.BIG}>
                Log into the{' '}
                <Logo
                  isGradient
                  $width={{ mobile: '114px', desktop: '191px' }}
                  $height={{ mobile: '32px', desktop: '54px' }}
                />{' '}
                marketplace
              </HeroTitle>
              <HeroText>
                NFT-platform of investing in the already working sharing
                business
              </HeroText>
              <Button onClick={connectWallet}>Log in with Metamask</Button>
              <HeroSocials socials={socials} currentColor={'#323232'} />
            </>
          )}
        </HeroInner>
      </Wrapper>
    </StyledHero>
  );
};

export default Hero;
