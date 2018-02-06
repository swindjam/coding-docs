const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./build",
        publicPath: "./build/",
        filename: "main.js"
    },
    module: {
        rules: [
          {
              test: /\.js/,
              loader: 'babel-loader',
              exclude: "./node_modules/"
          },
          {
            test: /\.scss/,
            exclude: "./node_modules/",
            loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: [
                'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]',
                'postcss-loader',
                'sass-loader'
              ]
            })
          },
          {
            test: /\.html/,
            loader: 'raw-loader'
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'styles.css', allChunks: true}),
        new HtmlWebpackPlugin({
          template: './index.html',
          inject: 'body'
        })
    ],
    devServer: {
      contentBase: './'
    }
};
