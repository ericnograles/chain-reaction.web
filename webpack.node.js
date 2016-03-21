// This file is to support Webpack run as a Node application, for IDE's such as WebStom or IntelliJ
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var exec = require('child_process').exec;

exec('rm -rf ./dist', function(error, stdout, stderr) {
  console.log(error || stdout);
  console.log('Building for ' + process.env.NODE_ENV || 'dev');
  var compiler = webpack(webpackConfig);
  compiler.run(function(err, stats) {
    if (err) {
      console.log('OH NOES! ' + err);
    } else {
      console.log(stats);
    }
  });
});
