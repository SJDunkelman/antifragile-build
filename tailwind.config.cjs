/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'besley': ['Besley', 'serif'],
				'source': ['Source Sans Pro', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
