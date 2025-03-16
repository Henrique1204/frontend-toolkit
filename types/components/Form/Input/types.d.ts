import { ComponentPropsWithoutRef } from 'react';
import { MaskEnum } from '@utils/mask';
export type InputProps = MergeTypes<[
    Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'name'>,
    {
        name: string;
        value?: string;
        onChange?: (value: string) => void;
        onEnterSubmit?: () => void;
        validateError?: (value?: string) => string;
        mask?: MaskEnum;
    },
    ClassNamesElements<['wrapper', 'input', 'error']>
]>;
