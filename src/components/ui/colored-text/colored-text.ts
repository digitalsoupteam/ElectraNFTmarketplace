import styled from 'styled-components';

interface IColoredText {
  $isCrimson?: boolean;
}

const ColoredText = styled.span<IColoredText>`
  font-weight: 600;
  color: ${(props) =>
    props.$isCrimson ? props.theme.crimson : props.theme.diamond};
`;

export default ColoredText;
