const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ projectRoot }) => ({
  cache: true,
  entry: {
    js: ['babel-polyfill', './src/main.js']
  },
  output: {
    path: `${projectRoot}/build/`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
            // modules: 'common'
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', query: { minimize: true, modules: true } },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=assets/[name].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      title: 'React Web Template',
      color: '#000000',
      filename: 'index.html',
      template: '!!handlebars-loader!src/index.hbs',
      minify: {
        collapseWhitespace: true
      }
    })
    /*
    new CopyWebpackPlugin([
      { from: 'static' }
    ], {
      copyUnmodified: true
      })
    */
  ]
});
