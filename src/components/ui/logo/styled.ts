import styled from 'styled-components';

interface ISize {
  mobile: string;
  desktop: string;
}

interface IStyledLogoRout {
  $width?: ISize;
  $height?: ISize;
}

const StyledLogoRout = styled.a<IStyledLogoRout>`
  display: inline-block;
  width: ${(props) => (props.$width?.mobile ? props.$width.mobile : '110px')};
  height: ${(props) => (props.$height?.mobile ? props.$height.mobile : '32px')};

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: ${(props) =>
      props.$width?.desktop ? props.$width.desktop : '152px'};
    height: ${(props) =>
      props.$height?.desktop ? props.$height.desktop : '44px'};
  }
`;

export { StyledLogoRout };
