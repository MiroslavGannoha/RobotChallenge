const path = require('path');
const sourcePath = path.join(__dirname, './src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.argv.indexOf('-p') >= 0;

module.exports = {
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,

				use: [
					{
						loader: 'style-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            'app': path.resolve(__dirname, 'src/app/'),
        },
    },
    target: 'web',
    context: sourcePath,
    entry: {
        main: './index.ts',
    },
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    // devtool: isProduction ? false : 'source-map',
    devServer: {
        port: 3003,
        open: true,
        contentBase: sourcePath,
        stats: 'minimal',
    },
	// mode: isProduction ? 'production' : 'development'
};
