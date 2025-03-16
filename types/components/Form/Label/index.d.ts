import React, { ComponentPropsWithoutRef } from 'react';
export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
    required?: boolean;
    children: React.ReactNode;
}
declare const Label: Component<LabelProps>;
export default Label;
