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

const trustFactors: ITrustFactor[] = [
  {
    ico: EcoIco,
    title: 'Sustainable Business',
    text: 'The environmentally friendly electric vehicle sector is gaining momentum all the time, meaning you are investing in a steadily growing industry',
  },
  {
    ico: ScooterIco,
    title: 'Real Business Income',
    text: 'Unlike most crypto projects, the income from our NFTs is tied to a real business, making it more stable',
  },
  {
    ico: UmbrellaIco,
    title: 'Honest Collaboration',
    text: 'We disclose all company income data, allowing you to see your earnings and the overall income of the Electra company',
  },
  {
    ico: ChatIco,
    title: 'Accessible Investments',
    text: `This investment format is highly convenient because we've taken the best from cryptocurrency: investment accessibility from anywhere in the world and stability confirmed by smart contracts`,
  },
];

interface IStarCards {
  title: string;
  text: string;
}

const starCards: IStarCards[] = [
  {
    title: '1,500 e-vehicles',
    text: 'are already operating within our application',
  },
  {
    title: '200,000 customers',
    text: 'use our application annually',
  },
  {
    title: '45% annual return',
    text: 'is the average income for flexible investors',
  },
  {
    title: '200% growth',
    text: 'we anticipate the electric sharing market to grow in the next 5 years',
  },
];

const Trust: React.FC = () => {
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
    <StyledTrust>
      <Wrapper>
        <TrustTitle size={TitleSize.MEDIUM} $isDark={true}>
          Why should I <ColoredText>trust you?</ColoredText>
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
