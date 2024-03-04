import styled, { css } from 'styled-components';
import Button from '../button/button';

const StyledQuantity = styled.div`
  display: flex;
  position: relative;
`;

const QuantityInput = styled.input`
  outline: none;
  font-size: 20px;
  padding: 12px 0;
  width: 200px;
  text-align: center;
  border: none;
  border-radius: ${(props) => props.theme.borderRadiusMobileSmall};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    ${(props) => props.theme.borderRadiusDesktopSmall};
  }
`;

interface IQunatityButton {
  $isLeft: boolean;
}

const QuantityButton: any = styled(Button)<IQunatityButton>`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.white};
  ${(props) =>
    props.$isLeft
      ? css`
          left: 0;
          border-top-left-radius: ${(props) =>
            props.theme.borderRadiusMobileSmall};
          border-bottom-left-radius: ${(props) =>
            props.theme.borderRadiusMobileSmall};
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        `
      : css`
          right: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-top-right-radius: ${(props) =>
            props.theme.borderRadiusMobileSmall};
          border-bottom-right-radius: ${(props) =>
            props.theme.borderRadiusMobileSmall};
        `}

  &:hover {
    background-color: ${(props) => props.theme.green};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    ${(props) =>
      props.$isLeft
        ? css`
            border-top-left-radius: ${(props) =>
              props.theme.borderRadiusDesktopSmall};
            border-bottom-left-radius: ${(props) =>
              props.theme.borderRadiusDesktopSmall};
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          `
        : css`
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: ${(props) =>
              props.theme.borderRadiusDesktopSmall};
            border-bottom-right-radius: ${(props) =>
              props.theme.borderRadiusDesktopSmall};
          `}
  }
`;

export { StyledQuantity, QuantityInput, QuantityButton };
