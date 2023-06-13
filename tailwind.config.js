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
      'mobile': {'max': '991px'},
      // => @media (max-width: 639px) { ... }
      'laptop': {'min': '992px'},
      // => @media (min-width: 1024px) { ... }
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