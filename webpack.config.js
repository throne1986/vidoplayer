const path = require('path');
const webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const bundleOutputDir = './dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return [{
        entry: './resources/views/pages/settings/testa.js',
        plugins: [
            // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
            new CleanWebpackPlugin(),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
              }),
            new HtmlWebpackPlugin({
             title: 'Output Management',
             title: 'Caching',
             inlineSource: '.(js|css)$' // embed all javascript and css inline
            }),
            new HtmlWebpackInlineSourcePlugin()
        ],
        output: {
   
            filename: 'embed_codeid.js',
            path: path.resolve(bundleOutputDir),      
        },
        externals: {
            jquery: 'jQuery'
          },
        devServer: {
            contentBase: bundleOutputDir
        },
        module: {
            rules: [
                { test: /\.html$/i, use: 'html-loader' },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                  },
                  {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                  },
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
                },
                {
                    // Exposes jQuery for use outside Webpack build
                    test: require.resolve('jquery'),
                    use: [{
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }, {
                        loader: 'expose-loader',
                        options: '$'
                    }]
                }
            ]
        }
    }];
};