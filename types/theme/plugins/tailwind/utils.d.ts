import * as Types from 'src/@types/theme';
export declare const mapThemeVariables: <T extends object>(themeBase: Types.Theme | T, prefix: string) => Record<string, string>;
export declare const applyTheme: (themeName?: Types.ThemeEnum) => void;
export declare const createTokenVariables: (keyToMap: keyof Types.Theme) => {};
export declare const getBaseTheme: () => {};
