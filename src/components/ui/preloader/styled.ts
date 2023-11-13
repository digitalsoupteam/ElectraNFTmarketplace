import styled from 'styled-components';
import Lottie from 'lottie-react';

const StyledLottie = styled(Lottie)`
  position: relative;
  overflow: hidden;

  svg {
    transform: translate3d(0px, -50%, 0px) !important;
    height: auto !important;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }

  path {
    fill: ${(props) => props.theme.basicWhite};
  }
`;

export { StyledLottie };
