const path = require('path');
var webpack = require('webpack')

module.exports = {
  entry:[
    'webpack-hot-middleware/client',
    './main.js'
  ],
  output: {
    path: path.join(__dirname, 'dcms/public'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

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