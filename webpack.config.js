var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/js/index.js',

    output: {
        path:  path.join(__dirname, 'public'),
        //publicPath: '',
        filename: 'js/bundle.js'
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(["css?sourceMap", "sass?sourceMap"], {publicPath: '../'})
            },
            {
                test: /\.jpg$|\.png$|\.gif$/,
                loader: "file-loader?name=img/[name].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/style.css", {
            allChunks: true
        })
    ]
};
