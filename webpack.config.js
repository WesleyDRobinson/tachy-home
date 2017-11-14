'use strict';

const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    devServer: {
        contentBase: './public',
        historyApiFallback: true
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ],
    devtool: 'eval-source-map',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                    'file-loader',
                    'extract-loader'
                ]
            }
        ]
    }
}
