import { StyledLogoRout } from './styled';
import Image from '../../../elements/image';
import LogoImage from '../../../assets/logo.svg';
import LogoImageGradient from '../../../assets/logo-gradient.svg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface ISize {
  mobile: string;
  desktop: string;
}

interface ILogo {
  className?: string;
  isLink?: boolean;
  isGradient?: boolean;
  $width?: ISize;
  $height?: ISize;
}

const Logo: React.FC<ILogo> = ({
  className,
  isLink,
  isGradient,
  $width,
  $height,
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/ru';

  return (
    <StyledLogoRout
      className={className}
      {...(isLink
        ? isHomePage
          ? { href: '#hero' }
          : { as: Link, to: '/' }
        : { as: 'span' })}
      $width={$width}
      $height={$height}
    >
      <Image src={isGradient ? LogoImageGradient : LogoImage}></Image>
    </StyledLogoRout>
  );
};

export default Logo;
