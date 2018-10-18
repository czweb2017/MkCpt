const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/g,
                use: ['style-loader','css-loader']
            },{
                test: /\.(js|jsx)$/g,
                use: {
                    loader: 'babel-loader',
                },
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new uglify()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: 'localhost',
        port: 8887,
        compress: true
    }
}