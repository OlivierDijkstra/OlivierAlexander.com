const fonts = [
	'Inter',
	'-apple-system',
	'BlinkMacSystemFont',
	'Segoe UI',
	'Roboto',
	'Helvetica Neue',
	'sans-serif'
];

module.exports = {
	purge: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				sans: fonts
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/line-clamp')]
};
