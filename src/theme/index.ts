import * as SininhoTheme from '@theme/sininho';
import * as SapatariaTheme from '@theme/sapataria';
import { Theme, ThemeEnum } from 'src/@types/theme';

export { tailwindPlugin } from '@theme/plugins/tailwind';
export { applyTheme } from '@theme/plugins/tailwind/utils';

export const themeMap: Record<ThemeEnum, Theme> = {
  sininho: SininhoTheme.theme,
  sapataria: SapatariaTheme.theme,
};
