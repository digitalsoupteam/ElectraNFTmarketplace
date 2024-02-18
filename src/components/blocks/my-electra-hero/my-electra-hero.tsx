import {
  StyledMyElectraHero,
  MyElectraHeroInner,
  MyElectraHeroTitle,
  MyElectraHeroText,
  HeroSocials,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import Button from '../../ui/button/button';
import { SocialIcons } from '../../ui/socials/socials';
import { t } from 'i18next';

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

interface IMyElectraHero {
  connectWallet: () => void;
}

const MyElectraHero: React.FC<IMyElectraHero> = ({ connectWallet }) => {
  return (
    <StyledMyElectraHero>
      <Wrapper>
        <MyElectraHeroInner>
          <MyElectraHeroTitle size={TitleSize.BIG}>
            {t('my-electra:t')}
          </MyElectraHeroTitle>
          <MyElectraHeroText>{t('my-electra:d')}</MyElectraHeroText>
          <Button onClick={connectWallet}>{t('menu:c-w')}</Button>
          <HeroSocials socials={socials} currentColor={'#323232'} />
        </MyElectraHeroInner>
      </Wrapper>
    </StyledMyElectraHero>
  );
};

export default MyElectraHero;
