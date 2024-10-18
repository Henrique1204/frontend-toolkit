import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Input } from './index';
import * as Types from './types';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'changed' },
    onKeyUp: { action: 'key up' },
    onEnterSubmit: { action: 'enter submit' },
    validateError: { control: 'text' },
    mask: {
      control: {
        type: 'select',
        options: ['none', 'cpf', 'cnpj', 'phone'],
      },
    },
    name: { control: 'text' },
    onBlur: { action: 'blurred' },
    onFocus: { action: 'focused' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<Types.InputProps> = (args) => {
  const [value, setValue] = React.useState('');

  return (
    <Input
      {...args}
      placeholder="Input Text"
      value={value}
      onChange={setValue}
      classNames={{ wrapper: 'max-w-80 mx-auto mt-40' }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  mask: 'none',
  name: 'default-input',
};

export const WithError = Template.bind({});
WithError.args = {
  validateError: (value) => (value ? '' : 'Campo obrigatório'),
  name: 'error-input',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: 'disabled-input',
};
