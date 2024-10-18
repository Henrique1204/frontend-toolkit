import React from 'react';
import type { Preview } from '@storybook/react';

import '../src/globals.css';

import { applyTheme } from '../src/theme/plugins/tailwind/utils';

const preview: Preview = {
  decorators: [
    (Story) => {
      applyTheme('sapataria');

      return <Story />;
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
