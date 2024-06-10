import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';

import {
  StyledRoadmap,
  StyledSwiper,
  RoadmapItem,
  TopPart,
  TopContent,
  BottomPart,
  ItemText,
  ItemYear,
  LimeText,
  DiamondText,
  BottomContent,
} from './styled.ts';
import { RoadmapData } from './roadmap.constants.ts';
import { IRoadmapItem } from './interface.ts';

const Roadmap: FC = () => {
  return (
    <StyledRoadmap>
      <StyledSwiper
        spaceBetween={55}
        slidesPerView={'auto'}
        modules={[FreeMode, Mousewheel]}
        freeMode={{ enabled: true }}
        mousewheel={true}
      >
        {RoadmapData &&
          RoadmapData.length &&
          RoadmapData.map((item: IRoadmapItem) => (
            <SwiperSlide>
              <RoadmapItem>
                <TopPart>
                  {item.top && (
                    <TopContent
                      style={{ border: item.top.noBorder ? 'none' : '' }}
                    >
                      <ItemText>{item.top.text}</ItemText>
                      <LimeText> {item.top.q}</LimeText>
                    </TopContent>
                  )}
                </TopPart>
                <BottomPart>
                  <BottomContent
                    style={{ border: item.bottom.noBorder ? 'none' : '' }}
                  >
                    <ItemYear>{item.bottom.year || ' '}</ItemYear>
                    <DiamondText>{item.bottom.q}</DiamondText>
                    <ItemText>{item.bottom.text}</ItemText>
                  </BottomContent>
                </BottomPart>
              </RoadmapItem>
            </SwiperSlide>
          ))}
      </StyledSwiper>
    </StyledRoadmap>
  );
};

export default Roadmap;
