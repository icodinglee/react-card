var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
      // publicPath: "/static/",
      stats: { colors: true },
      port: 3000,
      inline: true
    },
    resolve: {
      extensions: ["", ".js", ".jsx"],
    },
    module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
          {
              test: /\.css/,
              loader: 'style!css!autoprefixer'
            },
          {
            test: /\.(jpe?g|png)$/,
            loader: 'file-loader'
          }
        ]
      }
}
