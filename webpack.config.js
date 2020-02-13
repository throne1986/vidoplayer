const path = require('path');
const webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const bundleOutputDir = './dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return [{
        entry: './src/main.js',
        plugins: [
            // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
             title: 'Output Management',
             title: 'Caching',
            })
        ],
        output: {
   
            filename: 'widget.[contenthash].js',
            path: path.resolve(bundleOutputDir),      
        },
        devServer: {
            contentBase: bundleOutputDir
        },
        plugins: isDevBuild
            ? [new webpack.SourceMapDevToolPlugin(), new copyWebpackPlugin([{ from: 'demo/' }])]
            : [new webpack.optimize.UglifyJsPlugin()],
        module: {
            rules: [
                { test: /\.html$/i, use: 'html-loader' },
                { test: /\.css$/i, use: ['style-loader', 'css-loader' + (isDevBuild ? '' : '?minimize')] },
                {
                    test: /\.js$/i, exclude: /node_modules/, use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/env', {
                                'targets': {
                                    'browsers': ['ie 6', 'safari 7']
                                }
                            }]]
                        }
                    }
                }
            ]
        }
    }];
};