import { useRef, useState, useEffect } from 'react';
import {
  StyledMicromobility,
  MicromobilityTitle,
  StyledSwiper,
  StyledNav,
  MicroMobilityCards,
  Card,
  CardTitle,
  CardText,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import ColoredText from '../../ui/colored-text/colored-text';
import { t } from 'i18next';

const breakpoints = {
  768: {
    slidesPerView: 1,
    spaceBetween: -35,
  },
};

interface IItems {
  colored_title: string;
  title: string;
  text: string;
  isCrimson?: boolean;
}

const Micromobility: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.matchMedia('(min-width: 1400px)').matches
  );

  const items: IItems[] = [
    {
      colored_title: t('micromobility.list.i1.t1'),
      title: ': ' + t('micromobility.list.i1.t2'),
      text: t('micromobility.list.i1.d'),
      isCrimson: true,
    },
    {
      colored_title: t('micromobility.list.i2.t1'),
      title: ': ' + t('micromobility.list.i2.t2'),
      text: t('micromobility.list.i2.d'),
    },
    {
      colored_title: t('micromobility.list.i3.t1'),
      title: ': ' + t('micromobility.list.i3.t2'),
      text: t('micromobility.list.i3.d'),
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
    <StyledMicromobility>
      <Wrapper>
        <MicromobilityTitle size={TitleSize.MEDIUM} $isDark={true}>
          {t('micromobility.t')}
        </MicromobilityTitle>

        {isDesktop ? (
          <MicroMobilityCards>
            {items &&
              items.length &&
              items.map((item, index) => (
                <Card key={index}>
                  <CardTitle
                    size={TitleSize.EXTRA_SMALL}
                    as={'h3'}
                    $isDark={true}
                  >
                    <ColoredText $isCrimson={item.isCrimson}>
                      {item.colored_title}
                    </ColoredText>
                    {item.title}
                  </CardTitle>
                  <CardText>{item.text}</CardText>
                </Card>
              ))}
          </MicroMobilityCards>
        ) : (
          <MicroMobilityCards>
            <StyledSwiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={5}
              slidesPerView={1}
              breakpoints={breakpoints}
              modules={[Navigation]}
            >
              {items &&
                items.length &&
                items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card>
                      <CardTitle
                        size={TitleSize.EXTRA_SMALL}
                        as={'h3'}
                        $isDark={true}
                      >
                        <ColoredText $isCrimson={item.isCrimson}>
                          {item.colored_title}
                        </ColoredText>
                        {item.title}
                      </CardTitle>
                      <CardText>{item.text}</CardText>
                    </Card>
                  </SwiperSlide>
                ))}
            </StyledSwiper>
            <StyledNav
              onNextClick={handlerNextButton}
              onPrevClick={handlerPrevButton}
            />
          </MicroMobilityCards>
        )}
      </Wrapper>
    </StyledMicromobility>
  );
};

export default Micromobility;
