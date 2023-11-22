import { StyledButton } from './styled';

interface IAppButton {
  children?: React.ReactNode;
  link?: string;
  target?: string;
}

const AppButton: React.FC<IAppButton> = ({ children, link, target }) => {
  return (
    <StyledButton link={link} target={target}>
      {children}
    </StyledButton>
  );
};

export default AppButton;
