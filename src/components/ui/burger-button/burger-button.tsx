import { useState, useRef } from 'react';
import { StyledBurgerButton } from './styled';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import BurgerData from './burger.json';

interface IBurgerButton {
  onClick: () => void;
  className?: string;
}

const BurgerButton: React.FC<IBurgerButton> = ({ onClick, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState<number>(1);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
    setDirection(direction * -1);
    if (lottieRef.current) {
      if (direction > 0) {
        lottieRef.current.setDirection(1);
      } else {
        lottieRef.current.setDirection(-1);
      }
      lottieRef.current.play();
    }
  };

  return (
    <StyledBurgerButton
      className={className}
      onClick={() => {
        setDirection(direction * -1);
        toggleAnimation();
        onClick();
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={BurgerData}
        loop={false}
        autoplay={false}
        style={{ height: 32, width: 32 }}
      />
    </StyledBurgerButton>
  );
};

export default BurgerButton;
