var path = require('path');
var webpack = require('webpack');

var entryPoints = require('./entryPoints');

module.exports = {
  entry: entryPoints,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: [
        'jquery-3.4.1.js',
        'popper.min.js'
      ]
    })
  ]
};
