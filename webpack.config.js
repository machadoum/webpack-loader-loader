var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.json.js$/,
        loader: "tojson"
      },
      {
        test: /\.jpg$/,
        loader: "file"
      }
    ]
  }
};
