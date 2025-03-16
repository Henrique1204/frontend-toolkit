// src/components/Form/Label/Label.stories.tsx

import React from 'react';
import Label, { LabelProps } from './index';
import { Meta, StoryFn } from '@storybook/react/*';

export default {
  title: 'Components/Form/Label',
  component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label Padrão',
};

export const Required = Template.bind({});
Required.args = {
  required: true,
  children: 'Label Obrigatório',
};
