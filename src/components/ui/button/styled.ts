import styled from 'styled-components';

interface IStyledButton {
  $isLightBg?: boolean;
  $isSmall?: boolean;
  $isAlt?: boolean;
}

const StyledButton = styled.a<IStyledButton>`
  text-align: center;
  color: ${(props) =>
    props.$isAlt ? props.theme.diamond : props.theme.blackPrimary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.$isSmall ? '16px' : '20px')};
  line-height: 100%;
  text-decoration: none;
  border: none;
  border-radius: 100px;
  background-color: ${(props) =>
    props.$isAlt ? 'transparent' : props.theme.green};
  border: 1px solid
    ${(props) => (props.$isAlt ? props.theme.diamond : 'transparent')};
  padding: ${(props) => (props.$isSmall ? '11px 24px' : '13px 34px')};
  transition: all 200ms;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.blackPrimary};
    background-color: ${(props) => props.theme.diamond};
  }

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: ${(props) => (props.$isSmall ? '24px' : '30px')};
    padding: ${(props) => (props.$isSmall ? '16px 36px' : '22px 30px')};
  }
`;

export default StyledButton;
