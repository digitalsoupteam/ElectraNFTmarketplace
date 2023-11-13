export interface Theme {
  [key: string]: string;
}

const defaultTheme: Theme = {
  fontFamily: '"Tilda Sans VF", "Arial", sans-serif',
  white: '#fff',
  black: '#000',
  grey: '#323232',
  lightGrey: '#f4f4f4',
  darkGrey: '#a6a6a6',
  diamond: '#1dd0cc',
  green: '#bcf085',
  crimson: '#c10000;',
  blackPrimary: '#161616',
  defaultFontSizeMobile: '17px',
  defaultFontSizeDesktop: '24px',
  lineHieghtDefault: '130%',
  indentMobile: '17px',
  indentTablet: '60px',
  indentDesktop: '120px',
  borderRadiusMobileSmall: '6px',
  borderRadiusMobileMedium: '13px',
  borderRadiusMobileLarge: '23px',
  borderRadiusDesktopSmall: '8px',
  borderRadiusDesktopMedium: '19px',
  borderRadiusDesktopLarge: '38px',
  contentWidePhoneWidth: '480px',
  contentTabletWidth: '768px',
  contentWidthDesktop: '1400px',
  widePhoneWidth: '480px',
  tabletWidth: '768px',
  desktopWidth: '1400px',
};

export { defaultTheme };
