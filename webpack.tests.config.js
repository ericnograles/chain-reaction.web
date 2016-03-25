var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var hostname = 'localhost';
var port = 8082;

module.exports = {
  context: __dirname + '/tests',
  entry: {
    javascript: 'mocha!./index.js',
    html: './index.html'
  } ,
  output: {
    filename: 'test.build.js',
    path: __dirname + '/unit-tests'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
        {
          presets:['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
        loader: 'null-loader'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('mocha.css'),
    new OpenBrowserPlugin({ url: 'http://' + hostname + ':' + port })
  ],
  devServer: {
    host: hostname,
    port: port
  }
};