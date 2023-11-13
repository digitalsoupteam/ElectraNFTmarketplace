import {
  StyledBottomCta,
  BottomCtaTitle,
  CtaList,
  CtaItem,
  CtaItemTitle,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import TextGradient from '../../ui/text-gradient/text-gradient';
import ScooterIco from '../../../assets/scooter-ico.png';
import PuzzleIco from '../../../assets/puzzle-ico.png';
import MoonIco from '../../../assets/moon-ico.png';
import Button from '../../ui/button/button';

interface ICtaItems {
  ico: string;
  title: string;
  button_text: string;
  link: string;
}

const ctaItems: ICtaItems[] = [
  {
    ico: ScooterIco,
    title: 'Buy NFTs\nand earn a profit',
    button_text: 'Go to marketplace',
    link: '#',
  },
  {
    ico: PuzzleIco,
    title: 'Join our community',
    button_text: `Let's go!`,
    link: '#',
  },
  {
    ico: MoonIco,
    title: 'Purchase ELCT\ntokens and stake\nthem',
    button_text: 'Go to exchange',
    link: '#',
  },
];

const BottomCta: React.FC = () => {
  return (
    <StyledBottomCta>
      <Wrapper>
        <BottomCtaTitle size={TitleSize.MEDIUM}>
          What <TextGradient>can you do now?</TextGradient>
        </BottomCtaTitle>
        <CtaList>
          {ctaItems &&
            ctaItems.length &&
            ctaItems.map((item, index) => (
              <CtaItem key={index} ico={item.ico}>
                <CtaItemTitle size={TitleSize.SMALL} as={'h3'}>
                  {item.title}
                </CtaItemTitle>
                <Button isSmall={true}>{item.button_text}</Button>
              </CtaItem>
            ))}
        </CtaList>
      </Wrapper>
    </StyledBottomCta>
  );
};

export default BottomCta;
