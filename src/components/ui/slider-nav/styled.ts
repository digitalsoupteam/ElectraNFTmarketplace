import styled, { css } from 'styled-components';
import Button from '../button/button';

const SliderNavContainer = styled.div`
  position: absolute;
  top: calc(50% - 39px);
  transform: translateY(-50%);
  left: 5px;
  right: 5px;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`;

interface ISliderNavButton {
  isNextButton?: boolean;
}

const SliderNavButton = styled(Button)<ISliderNavButton>`
  padding: 0;
  border: none;
  pointer-events: auto;
  background-color: transparent;
  cursor: pointer;
  svg {
    ${(props) =>
      props.isNextButton
        ? css`
            transform: rotate(180deg);
          `
        : null}
  }

  &:hover {
    background-color: transparent;
    border: none;

    svg path {
      transition: all 0.2s;
      stroke: ${(props) => props.theme.green};
    }
  }
`;

export { SliderNavContainer, SliderNavButton };
