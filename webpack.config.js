var path = require('path');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "app.min.js",
        sourceMapFilename: "app.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
}
