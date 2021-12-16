const openColor = require('open-color');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: openColor,
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.optimize-legibility': {
            'text-rendering': 'optimizeLegibility',
          },
        },
        ['responsive', 'hover']
      );
    }),
  ],
};
