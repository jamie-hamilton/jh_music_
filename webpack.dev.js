const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    output: {
        publicPath: "",
        path: path.resolve('./bundles/'),
        filename: "[name]-[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes into DOM
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            }
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        writeToDisk: true,
    }
});