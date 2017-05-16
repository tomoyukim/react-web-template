const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');

module.exports = options => webpackMerge(commonConfig(options), {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ]
});
