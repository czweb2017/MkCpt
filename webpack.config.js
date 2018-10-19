const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/g,
            //     use: ['style-loader','css-loader']
            // },
            {
                test: /\.(js|jsx)$/g,
                use: {
                    loader: 'babel-loader',
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'less-loader'}
                    ],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new uglify(),
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new extractTextPlugin('css/index.css')
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: 'localhost',
        port: 8887,
        compress: true
    }
}