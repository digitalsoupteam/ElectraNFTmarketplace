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

const breakpoints = {
  768: {
    slidesPerView: 2,
    spaceBetween: -35,
  },
};

interface IItems {
  colored_title: string;
  title: string;
  text: string;
  isCrimson?: boolean;
}

const items: IItems[] = [
  {
    colored_title: 'Personal cars',
    title: ': expensive, polluting, out of trend',
    text: 'Owning a car can be quite costly, considering maintenance, parking fees, and taxes. Plus, it takes longer to get around because of traffic jams.',
    isCrimson: true,
  },
  {
    colored_title: 'E-sharing',
    title: ': lightning-fast & hassle-free',
    text: 'People no longer want to spend time and money on taking care of their personal vehicles. Thus, sharing becomes the best solution.',
  },
  {
    colored_title: 'State regulators',
    title: ': support micromobility',
    text: 'State regulators are paving the way for micromobility services to flourish by creating supportive legal frameworks and urban infrastructure.',
  },
];

const Micromobility: React.FC = () => {
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
    <StyledMicromobility>
      <Wrapper>
        <MicromobilityTitle size={TitleSize.MEDIUM} $isDark={true}>
          The decade of micromobility has come
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
