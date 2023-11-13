import styled from 'styled-components';

const Image = styled.img<{ maxWidth?: number }>`
  width: 100%;
  height: auto;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : null)};
`;

export default Image;
