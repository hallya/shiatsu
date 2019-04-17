// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: ['main.ts', 'main.scss'],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        transformAssetUrl: {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: ['xlink:href', 'href'],
          use: ['xlink:href', 'href']
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)/,
        use: ExtractTextPlugin.extract([
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ])
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin({
      filename: '[name].min.css',
    }),

  ]
}