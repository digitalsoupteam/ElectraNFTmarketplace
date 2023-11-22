import { useRef, useState, useEffect } from 'react';
import {
  StyledHowItWorks,
  HowItWorksInner,
  HowItWorksTitle,
  HowItWorksSubtitle,
  SliderContainer,
  CardContainer,
  StyledSwiper,
  Card,
  CardTitle,
  CardText,
  ButtonContainer,
  MoreButton,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import TextGradient from '../../ui/text-gradient/text-gradient';
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import SliderNav from '../../ui/slider-nav/slider-nav';
import Button from '../../ui/button/button';
import SlideImg1 from '../../../assets/how-it-works-slide-1.png';
import SlideImg2 from '../../../assets/how-it-works-slide-2.png';
import SlideImg2Desktop from '../../../assets/how-it-works-slide-2-desktop.png';
import SlideImg3 from '../../../assets/how-it-works-slide-3.png';
import SlideImg3Desktop from '../../../assets/how-it-works-slide-3-desktop.png';
import SlideImg4 from '../../../assets/how-it-works-slide-4.png';

const breakpoints = {
  768: {
    slidesPerView: 2,
    spaceBetween: -35,
  },
};

interface ISlide {
  title: string;
  text: string;
  imgMobile: string;
  imgDesktop?: string;
  isDark?: boolean;
}

const slides: ISlide[] = [
  {
    title: '1.  Getting started',
    text: 'You purchase NFTs from our e-vehicle collection',
    imgMobile: SlideImg1,
  },
  {
    title: '2.  What do these NFTs offer?',
    text: 'They represent real electric vehicles that will earn you money',
    imgMobile: SlideImg2,
    imgDesktop: SlideImg2Desktop,
    isDark: true,
  },
  {
    title: '3.  How is income generated?',
    text: 'People from all over the world rent equipment on the Electra Sharing App and the profit is shared among investors and NFT buyers',
    imgMobile: SlideImg3,
    imgDesktop: SlideImg3Desktop,
  },
  {
    title: '4.  Your profit',
    text: 'You receive income every month based on the quantity and type of NFTs purchased',
    imgMobile: SlideImg4,
    imgDesktop: SlideImg4,
  },
];

const HowItWorks: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.matchMedia('(min-width: 1400px)').matches
  );

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
    <StyledHowItWorks>
      <Wrapper>
        <HowItWorksInner>
          <HowItWorksTitle size={TitleSize.MEDIUM}>
            <TextGradient>Invest from anywhere</TextGradient>
            {'\n'}in the world
          </HowItWorksTitle>
          <HowItWorksSubtitle size={TitleSize.MEDIUM} as={'p'}>
            How does it work?
          </HowItWorksSubtitle>

          {isDesktop ? (
            <CardContainer>
              {slides &&
                slides.length &&
                slides.map((item, index) => (
                  <Card
                    $imgMobile={item.imgMobile}
                    $imgDesktop={item.imgDesktop}
                    key={index}
                  >
                    <CardTitle size={TitleSize.SMALL} $isDark={item.isDark}>
                      {item.title}
                    </CardTitle>
                    <CardText $isDark={item.isDark}>{item.text}</CardText>
                  </Card>
                ))}
            </CardContainer>
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
                {slides &&
                  slides.length &&
                  slides.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Card $imgMobile={item.imgMobile}>
                        <CardTitle size={TitleSize.SMALL} $isDark={item.isDark}>
                          {item.title}
                        </CardTitle>
                        <CardText $isDark={item.isDark}>{item.text}</CardText>
                      </Card>
                    </SwiperSlide>
                  ))}
              </StyledSwiper>
              <SliderNav
                onNextClick={handlerNextButton}
                onPrevClick={handlerPrevButton}
              />
            </SliderContainer>
          )}

          <ButtonContainer>
            <Button to={'/market'}>Buy NFTs</Button>
            <MoreButton isAlt={true} to={'/market'}>
              More details in the NFT marketplace
            </MoreButton>
          </ButtonContainer>
        </HowItWorksInner>
      </Wrapper>
    </StyledHowItWorks>
  );
};

export default HowItWorks;
