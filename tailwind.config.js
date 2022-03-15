module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false,
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
	plugins: [],
};
