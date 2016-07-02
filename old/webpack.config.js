var path = require('path');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "app.js",
        sourceMapFilename: "app.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
                exclude: /node_modules/
            }
        ]
    }
}
