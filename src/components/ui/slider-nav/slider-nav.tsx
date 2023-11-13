import { SliderNavContainer, SliderNavButton } from './styled';
import Arrow from '../../../assets/arrow.svg?react';

interface ISliderNav {
  onNextClick: () => void;
  onPrevClick: () => void;
  className?: string;
}

const SliderNav: React.FC<ISliderNav> = ({
  onNextClick,
  onPrevClick,
  className,
}) => {
  return (
    <SliderNavContainer className={className}>
      <SliderNavButton onClick={onPrevClick}>
        <Arrow />
      </SliderNavButton>
      <SliderNavButton isNextButton={true} onClick={onNextClick}>
        <Arrow />
      </SliderNavButton>
    </SliderNavContainer>
  );
};

export default SliderNav;
