import styled from 'styled-components';
import Button from '../../ui/button/button';

interface IStyledButton {
  children?: React.ReactNode;
}

const StyledButton = styled(Button)<IStyledButton>`
  border-radius: 8px;
  background-color: ${(props) => props.theme.grey};
  border: 1px solid #424242;
  height: 46px;

  &:hover {
    opacity: 0.8;
    background-color: ${(props) => props.theme.grey};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    flex-direction: row;
    padding: 13px 12px;
    height: 48px;
  }
`;

export { StyledButton };
