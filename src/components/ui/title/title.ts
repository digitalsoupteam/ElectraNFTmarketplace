import styled, { css } from 'styled-components';

const enum TitleSize {
  BIG = 'big',
  MEDIUM = 'medium',
  SMALL = 'small',
  EXTRA_SMALL = 'extra_small',
}

interface ITitleSizeValue {
  [TitleSize.BIG]: {
    fontSizeDesktop: string;
    fontSizeMobile: string;
  };
  [TitleSize.MEDIUM]: {
    fontSizeDesktop: string;
    fontSizeMobile: string;
  };
  [TitleSize.SMALL]: {
    fontSizeDesktop: string;
    fontSizeMobile: string;
  };
  [TitleSize.EXTRA_SMALL]: {
    fontSizeDesktop: string;
    fontSizeMobile: string;
  };
}

const TitleSizeValue: ITitleSizeValue = {
  [TitleSize.BIG]: {
    fontSizeDesktop: '60px',
    fontSizeMobile: '36px',
  },
  [TitleSize.MEDIUM]: {
    fontSizeDesktop: '44px',
    fontSizeMobile: '30px',
  },
  [TitleSize.SMALL]: {
    fontSizeDesktop: '30px',
    fontSizeMobile: '21px',
  },
  [TitleSize.EXTRA_SMALL]: {
    fontSizeDesktop: '24px',
    fontSizeMobile: '17px',
  },
};

interface ITitle {
  size: TitleSize;
  $isDark?: boolean;
}

const Title = styled.h1<ITitle>`
  margin: 0;
  padding: 0;
  font-weight: 600;
  line-height: 110%;
  text-align: center;
  color: ${(props) =>
    props.$isDark ? props.theme.black : props.theme.basicWhite};

  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
    return css`
      font-size: ${values.fontSizeMobile};
    `;
  }};

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    ${(props) => {
      const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
      return css`
        font-size: ${values.fontSizeDesktop};
      `;
    }};
  }
`;

export { Title, TitleSize };
