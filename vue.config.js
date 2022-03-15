const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,

	configureWebpack: (config) => {
		config.output.filename = '[name].[hash:8].js';
	},
});
