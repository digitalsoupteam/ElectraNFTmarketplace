import { StyledButton } from './styled';

interface IAppButton {
  children?: React.ReactNode;
  link?: string;
}

const AppButton: React.FC<IAppButton> = ({ children, link }) => {
  return <StyledButton link={link}>{children}</StyledButton>;
};

export default AppButton;
