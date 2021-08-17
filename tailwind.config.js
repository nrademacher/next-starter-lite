const openColor = require('open-color');
const bootstrapGrid = require('tailwind-bootstrap-grid');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: openColor,
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    bootstrapGrid({
      gridGutterWidth: '2rem',
      gridGutters: {
        0: 0,
        1: '0.25rem',
        2: '0.5rem',
        3: '1rem',
        4: '1.5rem',
        5: '2rem',
        6: '4rem',
        7: '6rem',
        8: '8rem',
      },
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
    }),
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
