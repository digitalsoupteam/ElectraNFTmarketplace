import styled from 'styled-components';
import Button from '../button/button';

interface IStyledSocialButton {
  children: React.ReactNode;
  currentColor: string;
  light?: boolean;
}

const StyledSocialButton = styled(Button)<IStyledSocialButton>`
  display: flex;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) =>
    props.light ? props.theme.white : props.theme.green};
  color: ${(props) =>
    props.currentColor ? props.currentColor : props.theme.grey};
  transition: all 0.2s;
  border: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;

  &:hover {
    background-color: ${(props) =>
      props.light ? props.theme.green : props.theme.diamond};
    color: ${(props) =>
      props.light ? props.theme.currentColor : props.theme.white};
  }
`;

export { StyledSocialButton };
