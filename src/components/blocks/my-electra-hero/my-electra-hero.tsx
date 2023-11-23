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
            Welcome to your personal Electra account
          </MyElectraHeroTitle>
          <MyElectraHeroText>
            In this section you can track your income and collect profits from
            your NFTs
          </MyElectraHeroText>
          <Button onClick={connectWallet}>Connect wallet</Button>
          <HeroSocials socials={socials} currentColor={'#323232'} />
        </MyElectraHeroInner>
      </Wrapper>
    </StyledMyElectraHero>
  );
};

export default MyElectraHero;
