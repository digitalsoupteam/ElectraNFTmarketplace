import styled from 'styled-components';
import Button from '../button/button';

const StyledBurgerButton = styled(Button)`
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;

  svg path {
    fill: ${(props) => props.theme.white};
    stroke: ${(props) => props.theme.white};
  }

  &:hover {
    background-color: transparent;
  }
`;

export { StyledBurgerButton };
