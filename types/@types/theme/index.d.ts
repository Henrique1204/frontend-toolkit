export type PaletteBase = {
    neutral: {
        white: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        black: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    };
    feedback: {
        error: {
            light: string;
            main: string;
            dark: string;
        };
        success: {
            light: string;
            main: string;
            dark: string;
        };
        warning: {
            light: string;
            main: string;
            dark: string;
        };
        info: {
            light: string;
            main: string;
            dark: string;
        };
    };
};
export type PaletteTheme = {
    primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
    };
    secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
    };
};
export type FontVariants = 'serif' | 'sans' | 'mono';
export type Fonts = {
    'title-serif': string;
    'title-sans': string;
    'title-mono': string;
    'body-serif': string;
    'body-sans': string;
    'body-mono': string;
};
export type Theme = {
    palette: PaletteBase & PaletteTheme;
    fonts: Fonts;
};
export type ThemeEnum = 'sininho' | 'sapataria';
