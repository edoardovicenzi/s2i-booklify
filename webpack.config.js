const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        index: './src/app/index.js'
    },
    output: {
        publicPath: process.env.NODE_ENV === 'production'
            ? '/edoardovicenzi/'
            : '/'
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.(jpe?g|png|webp)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            title: 'Applicazione Webpack',
            template: './src/app/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './src/app/style.css'
        }),
        new Dotenv(),
    ],
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        port: 8080,
        open: true,
        static: path.resolve(__dirname, 'dist'),
    }
}
