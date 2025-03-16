import { fontsBase, paletteBase } from '@theme/base';
import { Fonts, PaletteTheme, Theme } from 'src/@types/theme';

export const palette: PaletteTheme = {
  primary: {
    lighter: '#FFE6CC',
    light: '#FFBF80',
    main: '#FF8C1A',
    dark: '#CC6600',
    darker: '#994C00',
  },
  secondary: {
    lighter: '#BFBFBF',
    light: '#8C8C8C',
    main: '#595959',
    dark: '#262626',
    darker: '#111111',
  },
};

const fonts: Partial<Fonts> = {};

export const theme: Theme = {
  palette: Object.assign(paletteBase, palette),
  fonts: Object.assign(fontsBase, fonts),
};
