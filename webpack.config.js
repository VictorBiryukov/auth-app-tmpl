var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');

const filenameF = (ext) => { return 'bundle.[contenthash].' + ext };

module.exports = {
    entry: './src/index.tsx',
    cache: true,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './fn/static/'),
        filename: "js/" + filenameF('js')
    },
    plugins: [

        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                },
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './template/index.html'),
            minify: {
                collapseWhitespace: true
            }
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.env']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                },
            ],
        },
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]
        }
        ]
    }
};