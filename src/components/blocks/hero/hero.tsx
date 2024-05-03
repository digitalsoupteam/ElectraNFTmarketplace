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
import { useTranslation } from 'react-i18next';

interface ISocialItem {
  img: string;
  link: string;
}

const socials: ISocialItem[] = [
  {
    img: SocialIcons.TELEGRAM,
    link: 'https://t.me/+dGR6vwpEbRNlMTU6',
  },
  {
    img: SocialIcons.TWITTER,
    link: 'https://twitter.com/electra_elct',
  },
  {
    img: SocialIcons.DISCORD,
    link: 'https://discord.gg/RsGyxRXQ9E',
  },
];

interface IHero {
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const Hero: React.FC<IHero> = ({ isLoggedIn, connectWallet }) => {
  const { t } = useTranslation();
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
                {t('hero.t1')}{' '}
                <Logo
                  isGradient
                  $width={{ mobile: '114px', desktop: '191px' }}
                  $height={{ mobile: '32px', desktop: '54px' }}
                />{' '}
                {t('hero.marketplace')}
              </HeroTitle>
              <HeroText>{t('hero.d')}</HeroText>
              <Button onClick={connectWallet}>{t('hero.login-button')}</Button>
              <HeroSocials socials={socials} currentColor={'#323232'} />
            </>
          )}
        </HeroInner>
      </Wrapper>
    </StyledHero>
  );
};

export default Hero;
