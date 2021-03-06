// webpack.config.js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['main.ts', 'main.scss'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
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
          use: ['xlink:href', 'href'],
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)/,
        use: ExtractTextPlugin.extract([
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ]),
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    http2: true,
    https: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin({
      filename: '[name].min.css',
    }),
  ],
  optimization: {
    usedExports: true,
  },
};
