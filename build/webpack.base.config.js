const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../node_modules'),
            'node_modules'
        ],
        alias: {
            src: path.resolve(__dirname, '../src'),
            ASSETS: 'src/assets',
            COMPONENTS: 'src/components',
            CONTAINERS: 'src/containers',
            MODULES: 'src/modules',
            ROUTER: 'src/router',
            STORE: 'src/store',
            STYLES: 'src/styles',
            UTILS: 'src/utils',
        }, // 别名
        extensions: ['.js', '.jsx', '.css', '.scss', '.less', '.json'], // 自动解析的扩展
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                include: path.resolve(__dirname, '../src'),
                loader: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
						outputPath: '../assets',
						publicPath: '../assets'
                    }
                }]
            },
            {
                test: /\.(eot|woff|ttf|ico|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
						outputPath: '../assets',
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../view/index.html'),
            filename: 'index.html'
        })
    ]
}