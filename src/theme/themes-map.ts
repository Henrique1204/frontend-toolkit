import { Theme, ThemeEnum } from 'src/@types/theme';

import * as SininhoTheme from '@theme/sininho';
import * as SapatariaTheme from '@theme/sapataria';

export const themeMap: Record<ThemeEnum, Theme> = {
  sininho: SininhoTheme.theme,
  sapataria: SapatariaTheme.theme,
};
