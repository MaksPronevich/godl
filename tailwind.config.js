/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},

		fontFamily: {
			noto: "'Noto Sans', 'sans-serif'",
			comic: "'Comic Sans MS', 'sans-serif'",
		},

		colors: {
			sky: "#00FFF0",
			white: "#FFFFFF",
			black: "#000000",
			orange: "#C99100",
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
