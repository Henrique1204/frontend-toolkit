import React from 'react';
import { Meta } from '@storybook/react';
declare const _default: Meta;
export default _default;
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "name" | "onChange"> & {
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    onEnterSubmit?: () => void;
    validateError?: (value?: string) => string;
    mask?: import("../../../utils/mask").MaskEnum;
} & ClassNamesElements<["wrapper", "input", "error"]>>;
export declare const WithError: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "name" | "onChange"> & {
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    onEnterSubmit?: () => void;
    validateError?: (value?: string) => string;
    mask?: import("../../../utils/mask").MaskEnum;
} & ClassNamesElements<["wrapper", "input", "error"]>>;
export declare const Disabled: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "name" | "onChange"> & {
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    onEnterSubmit?: () => void;
    validateError?: (value?: string) => string;
    mask?: import("../../../utils/mask").MaskEnum;
} & ClassNamesElements<["wrapper", "input", "error"]>>;
