'use strict';

const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        // loader是链式调用，执行顺序也是从右到左的，所以它会先执行css-loader，然后把执行的结果传递给style-loader
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  mode: 'production'
}