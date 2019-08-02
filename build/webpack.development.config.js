const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const webpack = require("webpack");

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		})
	],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {
                                path: path.resolve(__dirname,"./postcss.config.js")
                            }
                        }
                    }
                ]
            },
			{
				test: /\.scss|sass$/,
				use: [
					{
						loader: "style-loader" // 将 JS 字符串生成为 style 节点
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader" // 将 Sass 编译成 CSS
					}
				]
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader",   // translates CSS into CommonJS
					options: {
						modules: true,
						localIdentName: "simple-[local]"
					}
				}, {
					loader: "less-loader", // compiles Less to CSS
				}]
			},
        ]
    }
})