module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				'card-web': '400px',
				'card-mobile': '200px',
			},
			height: {
				'card-web': '400px',
				'card-mobile': '200px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
