const { addIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			rubik: ['Rubik', 'sans-serif'],
			league: ['League Spartan', 'sans-serif']
		},
		colors: {
			prime: '#191B1D',
			primeTarns: '#191B1D99',
			central: '#D7D7D7'
		},
		screens: {
			mobile1: { max: '321px' },
			// => @media (max-width: 321px) { ... }
			mobile0: { max: '576px' },
			// => @media (max-width: 576px) { ... }
			mobile: { max: '991px' },
			// => @media (max-width: 991px) { ... }
			laptop: { min: '992px' },
			// => @media (min-width: 992px) { ... }
			desktop: { min: '1280px' }
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			margin: {
				'auto-important': 'auto !important'
			},
			backgroundSize: {
				'size-0-5': '0% 5%',
				'size-100-5': '100% 5%',
				'size-0-100': '0 100%',
				'size-100-100': '100% 100%'
			},
			animation: {
				slideleft: 'slide-left 20s linear infinite',
				wave: 'wave 1s ease-in infinite'
			},
			keyframes: {
				wave: {
					'100%': {
						width: '100%'
					}
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('tailwind-scrollbar')({ nocompatible: true }),
		//require('tailwind-scrollbar'),
		require('flowbite/plugin'),
		require('daisyui'),
		addIconSelectors(['la'])
	]
};
