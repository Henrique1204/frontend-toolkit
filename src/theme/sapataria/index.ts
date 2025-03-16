import { fontsBase, paletteBase } from '@theme/base';
import { Fonts, PaletteTheme, Theme } from 'src/@types/theme';

export const palette: PaletteTheme = {
  primary: {
    lighter: '#FCEB8A',
    light: '#F0C23C',
    main: '#F0AC3C',
    dark: '#A87715',
    darker: '#7A5B0E',
  },
  secondary: {
    lighter: '#A76D64',
    light: '#56342E',
    main: '#462521',
    dark: '#130A02',
    darker: '#0A0501',
  },
};

const fonts: Partial<Fonts> = {
  'title-sans': 'Poppins',
  'body-sans': 'Poppins',
};

export const theme: Theme = {
  palette: Object.assign(paletteBase, palette),
  fonts: Object.assign(fontsBase, fonts),
};
