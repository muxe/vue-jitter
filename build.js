var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js')

process.env.NODE_ENV = 'production';

webpack(webpackConfig, function (err, stats) {
  if (err || stats.hasErrors()) {
    console.log('something went wrong')
  } else {
    console.log('it worked');
  }
});
