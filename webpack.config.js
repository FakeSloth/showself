const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin()
  ]
};
