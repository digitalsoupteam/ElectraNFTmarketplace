import { StyledSocialButton } from './styled';

interface ISocialButton {
  children?: React.ReactNode;
  link: string;
  target: string;
  className?: string;
  currentColor: string;
  light?: boolean;
}

const SocialButton: React.FC<ISocialButton> = ({
  children,
  link,
  target,
  className,
  currentColor,
  light,
}) => {
  return (
    <StyledSocialButton
      className={className}
      currentColor={currentColor}
      link={link}
      target={target}
      light={light}
    >
      {children}
    </StyledSocialButton>
  );
};

export default SocialButton;
