module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				"pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				pulse: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0.92 },
				},
			},
		},
	},

	variants: {
		extend: {
			backgroundColor: ["active"],
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
