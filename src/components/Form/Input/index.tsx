import React from 'react';

import BaseInput from './BaseInput';

import * as Types from './types';

export { BaseInput };

export const Input: Component<Types.InputProps> = (props) => {
  return <BaseInput {...props} />;
};
