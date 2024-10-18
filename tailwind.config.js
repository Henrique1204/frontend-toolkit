import { tailwindPlugin } from './src/theme/plugins/tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [tailwindPlugin()],
};
