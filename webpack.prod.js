const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        publicPath: '',
        path: path.resolve('./bundles/'),
        filename: "[name]-[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Extract CSS into files
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/'
                        }
                    },
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
                sideEffects: true,
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                // Configured for IE10+(ish)
                use: ['babel-loader']
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name]-[contenthash].css"})
    ],
});