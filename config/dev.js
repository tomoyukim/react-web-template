const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');

module.exports = options => webpackMerge(commonConfig(options), {
  devtool: 'source-map'
});
