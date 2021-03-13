const plugin = require('tailwindcss/plugin');

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
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				bg: '#131415',
				primary: '#0162ff'
			},
			textColor: {
				primary: '#fafbfc',
				link: '#0162ff'
			},
			fontFamily: {
				sans: fonts
			},
			borderRadius: {
				DEFAULT: '8px'
			},
			borderColor: {
				link: '#0162ff'
			},
			fontSize: {
				'4xl': ['4.292rem', '6rem'],
				'3xl': ['3.433rem', '4.5rem'],
				'2xl': ['2.747rem', '4.5rem'],
				xl: ['2.197rem', '3rem'],
				lg: ['1.758rem', '3rem'],
				md: ['1.406rem', '3rem'],
				base: ['1.125rem', '1.5rem'],
				sm: ['0.9rem', '1.5rem'],
				xs: ['0.72rem', '1.5rem']
			},
			spacing: {
				quarter: '0.375rem',
				half: '0.75rem',
				one: '1.5rem',
				two: '3rem',
				three: '4.5rem',
				four: '6rem',
				five: '7.5rem',
				six: '9rem',
				eight: '12rem',
				twelve: '18rem',
				sixteen: '24rem'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
