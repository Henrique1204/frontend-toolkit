import plugin from 'tailwindcss/plugin';

import { createTokenVariables, getBaseTheme } from '@theme/plugins/tailwind/utils';

export const tailwindPlugin = () => {
  return plugin(
    function ({ config }) {
      return config();
    },
    {
      theme: {
        extend: {
          ...getBaseTheme(),
          colors: createTokenVariables('palette'),
          fontFamily: createTokenVariables('fonts'),
          screens: {
            mobile: { max: '720px' },
            tablet: { min: '721px', max: '1199' },
            desktop: { min: '1200px' },
          },
        },
      },
    }
  );
};
