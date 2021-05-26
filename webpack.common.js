var webpack = require("webpack");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = {
    context: __dirname,
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
    ],
};