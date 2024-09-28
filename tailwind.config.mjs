/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	theme: {
		extend: {
			fontFamily: {
				anton: ['Anton SC', 'sans-serif'], // Fuente principal
				raleway: ['Raleway', 'serif'],      // Fuente secundaria
			},			
		},
	},
	plugins: [],
};
