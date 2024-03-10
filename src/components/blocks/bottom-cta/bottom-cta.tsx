import {
  StyledBottomCta,
  BottomCtaTitle,
  CtaList,
  CtaItem,
  CtaItemTitle,
  StyledCtaButton,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import TextGradient from '../../ui/text-gradient/text-gradient';
import ScooterIco from '../../../assets/scooter-ico.png';
import PuzzleIco from '../../../assets/puzzle-ico.png';
import MoonIco from '../../../assets/moon-ico.png';
import { t } from 'i18next';

interface ICtaItems {
  ico: string;
  title: string;
  button_text: string;
  link: string;
}

const BottomCta: React.FC = () => {
  const buttonsLinks = [
    '/market',
    'https://discord.com/invite/PgpMjgTJ',
    '/exchange',
  ];

  const ctaItems: ICtaItems[] = [
    {
      ico: ScooterIco,
      title: t('bottom-cta.list.i1.t'),
      button_text: t('bottom-cta.list.i1.button'),
      link: '#',
    },
    {
      ico: PuzzleIco,
      title: t('bottom-cta.list.i2.t'),
      button_text: t('bottom-cta.list.i2.button'),
      link: '#',
    },
    {
      ico: MoonIco,
      title: t('bottom-cta.list.i3.t'),
      button_text: t('bottom-cta.list.i3.button'),
      link: '#',
    },
  ];

  return (
    <StyledBottomCta>
      <Wrapper>
        <BottomCtaTitle size={TitleSize.MEDIUM}>
          {t('bottom-cta.t1')}{' '}
          <TextGradient>{t('bottom-cta.t2')}?</TextGradient>
        </BottomCtaTitle>
        <CtaList>
          {ctaItems &&
            ctaItems.length &&
            ctaItems.map((item, index) => (
              <CtaItem key={index} ico={item.ico}>
                <CtaItemTitle size={TitleSize.SMALL} as={'h3'}>
                  {item.title}
                </CtaItemTitle>
                <StyledCtaButton
                  isSmall={true}
                  {...(index === 1
                    ? { link: buttonsLinks[index] }
                    : { to: buttonsLinks[index] })}
                >
                  {item.button_text}
                </StyledCtaButton>
              </CtaItem>
            ))}
        </CtaList>
      </Wrapper>
    </StyledBottomCta>
  );
};

export default BottomCta;
