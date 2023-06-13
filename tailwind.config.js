/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
      'league': ['League Spartan', 'sans-serif'],
    },
    screens: {
      'mobile-1': {'max': '321px'},
      // => @media (max-width: 321px) { ... }
      'mobile-0': {'max': '576px'},
      // => @media (max-width: 576px) { ... }
      'mobile': {'max': '991px'},
      // => @media (max-width: 991px) { ... }
      'laptop': {'min': '992px'},
      // => @media (min-width: 992px) { ... }
      'desktop': {'min': '1280px'}
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      margin: {
        'auto-important': 'auto !important',
      },
      backgroundSize: {
        'size-0-5': '0% 5%',
        'size-100-5': '100% 5%',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-children'),
    require('flowbite/plugin')
  ],
}