import StyledButton from './styled.ts';
import { Link } from 'react-router-dom';

interface Button {
  className?: string;
  link?: string;
  to?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  target?: string;
  type?: string;
  isLightBg?: boolean;
  disabled?: boolean;
  isSmall?: boolean;
  isAlt?: boolean;
}

const Button: React.FC<Button> = ({
  className,
  link,
  to,
  onClick,
  children,
  target,
  type,
  isLightBg = false,
  disabled,
  isSmall = false,
  isAlt = false,
}) => {
  return (
    <StyledButton
      className={className}
      $isLightBg={isLightBg}
      $isSmall={isSmall}
      $isAlt={isAlt}
      {...(link
        ? { href: link, target: target, onClick: onClick }
        : {
            as: 'button',
            disabled: disabled,
            onClick,
            type: type ? type : 'button',
          })}
      {...(to ? { as: Link, to: to } : null)}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
