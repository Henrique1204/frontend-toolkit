import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: (config) => {
    if (!config.resolve) {
      config.resolve = { alias: {} };
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@tests': path.resolve(__dirname, '../src/tests'),
      '@types': path.resolve(__dirname, '../src/types'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@theme': path.resolve(__dirname, '../src/theme'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@mocks': path.resolve(__dirname, '../src/mocks'),
    };

    return config;
  },
};
export default config;
