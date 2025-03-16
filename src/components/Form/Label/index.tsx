// src/components/Form/Label/index.tsx

import React, { ComponentPropsWithoutRef } from 'react';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  required?: boolean;
  children: React.ReactNode;
}

const Label: Component<LabelProps> = ({ required, children, ...labelProps }) => {
  return (
    <label className="flex items-center font-body-sans" {...labelProps}>
      {children}

      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default Label;
