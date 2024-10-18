import { themeMap } from '@theme/index';

import * as Types from 'src/@types/theme';

export const mapThemeVariables = <T extends object>(
  themeBase: Types.Theme | T,
  prefix: string
): Record<string, string> => {
  return Object.keys(themeBase).reduce<Record<string, string>>((result, key) => {
    if (typeof key === 'string') {
      const value = themeBase[key as keyof (T | Types.Theme)];

      if (typeof value === 'object' && value !== null) {
        const newPrefix = prefix ? `${prefix}-${key}` : `--${key}`;
        const subObject = mapThemeVariables(value, newPrefix);

        Object.assign(result, subObject);
      } else {
        const prefixArray = prefix.split('-');
        const lastPrefix = prefixArray[prefixArray.length - 1];

        const removedDuplicatedPrefix = key.startsWith(lastPrefix)
          ? key.replace(lastPrefix, '').toLocaleLowerCase()
          : key;

        const newKey = prefix ? `${prefix}-${removedDuplicatedPrefix}` : `--${key}`;

        result[newKey] = value as string;
      }
    }

    return result;
  }, {});
};

export const applyTheme = (themeName: Types.ThemeEnum = 'sininho'): void => {
  const colorsObject = mapThemeVariables(themeMap[themeName].palette, '');
  // const fontFamilyObject = mapThemeVariables(themeMap[themeName].fonts, '');
  const fontFamilyObject = {};

  if (!colorsObject || !fontFamilyObject) return;

  const root = document.documentElement;

  const theme = Object.assign(colorsObject, fontFamilyObject);

  Object.keys(theme).forEach((property) => {
    if (property === 'name') return;

    root.style.setProperty(property, theme[property]);
  });
};

export const createTokenVariables = (keyToMap: keyof Types.Theme) => {
  const themeObject = mapThemeVariables(themeMap.sininho[keyToMap] as object, '');

  return Object.keys(themeObject).reduce((prev, key) => {
    const resultKey = key.substring(2);

    return {
      ...prev,
      [resultKey]: `var(${key})`,
    };
  }, {});
};

export const getBaseTheme = () => {
  return {};
};
