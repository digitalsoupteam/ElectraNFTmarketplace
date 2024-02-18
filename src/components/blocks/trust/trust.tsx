import { useRef, useState, useEffect } from 'react';
import {
  StyledTrust,
  TrustTitle,
  SliderContainer,
  StyledSwiper,
  StyledSliderNav,
  Card,
  CardTitle,
  CardText,
  CardsList,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import ColoredText from '../../ui/colored-text/colored-text';
import { Swiper } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import EcoIco from '../../../assets/eco-ico.png';
import ScooterIco from '../../../assets/scooter-ico.png';
import UmbrellaIco from '../../../assets/umbrella-ico.png';
import ChatIco from '../../../assets/chat-ico.png';
import StarCardList from '../../ui/star-card-list/star-card-list';
import { t } from 'i18next';

const breakpoints = {
  768: {
    slidesPerView: 2,
    spaceBetween: -35,
  },
};

interface ITrustFactor {
  ico: string;
  title: string;
  text: string;
}

interface IStarCards {
  title: string;
  text: string;
}

const Trust: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.matchMedia('(min-width: 1400px)').matches
  );

  const starCards: IStarCards[] = [
    {
      title: t('trust.list2.i1.t'),
      text: t('trust.list2.i1.d'),
    },
    {
      title: t('trust.list2.i2.t'),
      text: t('trust.list2.i2.d'),
    },
    {
      title: t('trust.list2.i3.t'),
      text: t('trust.list2.i3.d'),
    },
    {
      title: t('trust.list2.i4.t'),
      text: t('trust.list2.i4.d'),
    },
  ];

  const trustFactors: ITrustFactor[] = [
    {
      ico: EcoIco,
      title: t('trust.list1.i1.t'),
      text: t('trust.list1.i1.d'),
    },
    {
      ico: ScooterIco,
      title: t('trust.list1.i2.t'),
      text: t('trust.list1.i2.d'),
    },
    {
      ico: UmbrellaIco,
      title: t('trust.list1.i3.t'),
      text: t('trust.list1.i3.d'),
    },
    {
      ico: ChatIco,
      title: t('trust.list1.i4.t'),
      text: t('trust.list1.i4.d'),
    },
  ];

  const handlerNextButton = () => {
    swiperRef.current ? swiperRef.current.slideNext() : null;
  };
  const handlerPrevButton = () => {
    swiperRef.current ? swiperRef.current.slidePrev() : null;
  };

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

  return (
    <StyledTrust>
      <Wrapper>
        <TrustTitle size={TitleSize.MEDIUM} $isDark={true}>
          {t('trust.t1')} <ColoredText> {t('trust.t2')}?</ColoredText>
        </TrustTitle>
        {isDesktop ? (
          <CardsList>
            {trustFactors &&
              trustFactors.length &&
              trustFactors.map((item, index) => (
                <li key={index}>
                  <Card>
                    <CardTitle size={TitleSize.SMALL} ico={item.ico} as={'h3'}>
                      {item.title}
                    </CardTitle>
                    <CardText>{item.text}</CardText>
                  </Card>
                </li>
              ))}
          </CardsList>
        ) : (
          <SliderContainer>
            <StyledSwiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={5}
              slidesPerView={1}
              breakpoints={breakpoints}
              modules={[Navigation]}
            >
              {trustFactors &&
                trustFactors.length &&
                trustFactors.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card>
                      <CardTitle
                        size={TitleSize.SMALL}
                        ico={item.ico}
                        as={'h3'}
                      >
                        {item.title}
                      </CardTitle>
                      <CardText>{item.text}</CardText>
                    </Card>
                  </SwiperSlide>
                ))}
            </StyledSwiper>
            <StyledSliderNav
              onNextClick={handlerNextButton}
              onPrevClick={handlerPrevButton}
            />
          </SliderContainer>
        )}
        <StarCardList cards={starCards} />
      </Wrapper>
    </StyledTrust>
  );
};

export default Trust;
