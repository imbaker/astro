/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	fontFamily: {
		sans: ['Lato'],
		serif: ['Bitter']
	},
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
