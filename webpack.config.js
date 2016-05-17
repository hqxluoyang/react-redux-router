/* eslint-disable */
const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    },{
      test:/\.css$/,
      loader:'style!css'
    },{
      test:/\.less$/,
      loader:'style!css!less'
    }]
  }
}


var src = path.join(__dirname, '..', '..', 'src')
var fs = require('fs')
if (fs.existsSync(src)) {
  // Use the latest src
  module.exports.resolve = { alias: { 'react-router-redux': src } }
  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: ['babel'],
    include: src
  });
}
