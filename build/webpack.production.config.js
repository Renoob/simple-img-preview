const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(baseConfig, {
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all"
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions:{
                    compress :{
                        drop_console:true,//去除console.log
                    }
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles/[name].[chunkhash].css"
        }),
        new webpack.ContextReplacementPlugin(
            /moment[/\\]locale$/,
            /zh-cn/,
        ),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "/"
                    }
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: path.resolve(__dirname,"./postcss.config.js")
                        }
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",
                }, {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: path.resolve(__dirname,"./postcss.config.js")
                        }
                    }
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                    loader: "css-loader",  // translates CSS into CommonJS
                }, {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: path.resolve(__dirname,"./postcss.config.js")
                        }
                    }
                }, {
                    loader: "less-loader", // compiles Less to CSS
                }]
            },
        ]
    }
});