import { Fonts, PaletteBase } from 'src/@types/theme';

export const paletteBase: PaletteBase = {
  neutral: {
    white: {
      100: '#FFF',
      200: '#F9FAFB',
      300: '#F4F6F8',
      400: '#DFE3E8',
      500: '#CBD2D9',
      600: '#9AA5B1',
      700: '#697586',
      800: '#4D5566',
      900: '#343D50',
    },
    black: {
      100: '#000000',
      200: '#1A1A1A',
      300: '#333333',
      400: '#4D4D4D',
      500: '#666666',
      600: '#808080',
      700: '#999999',
      800: '#B3B3B3',
      900: '#CDCDCD',
    },
  },
  feedback: {
    error: {
      light: '#F0C7CD',
      main: '#FF2F20',
      dark: '#B91C1C',
    },
    success: {
      light: '#E6F7E6',
      main: '#4CAF50',
      dark: '#388E3C',
    },
    warning: {
      light: '#FFF9E6',
      main: '#FFC107',
      dark: '#FFA000',
    },
    info: {
      light: '#E3F2FD',
      main: '#2196F3',
      dark: '#1976D2',
    },
  },
};

export const fontsBase: Fonts = {
  'title-serif': 'Merriweather',
  'title-sans': 'Roboto',
  'title-mono': 'Recursive Mono',
  'body-serif': 'Libre Baskerville',
  'body-sans': 'Open Sans',
  'body-mono': 'Roboto Mono',
};
