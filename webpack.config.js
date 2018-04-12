const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var webpackConfig = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'jitter.js',
    libraryTarget: 'umd',
    library: 'jitter',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ],
  },
  plugins: [
    new UglifyJsPlugin()
  ],
};

module.exports = webpackConfig
