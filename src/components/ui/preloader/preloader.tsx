import { StyledLottie } from './styled';
import PreloaderData from './preloader.json';

const Preloader: React.FC = () => {
  return (
    <StyledLottie
      animationData={PreloaderData}
      loop={true}
      autoplay={true}
      style={{ height: 20, width: 220 }}
    />
  );
};

export default Preloader;
