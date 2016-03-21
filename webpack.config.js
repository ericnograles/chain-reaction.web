var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var currentEnvironment = process.env.NODE_ENV || 'dev';
var config = require('./config/' + currentEnvironment);

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./app.js",
    html: './index.html'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:
        {
          presets:['react', 'es2015']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file?name=images/[name].[ext]"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin("app.css"),
    new webpack.DefinePlugin({
      API_PATH: '"' + config.API_PATH + '"'
    })
  ],

  devServer: {
    historyApiFallback: true
  },

  // Need to set this so webpack won't attempt to load node_modules in chain-reaction.common
  // In relation to the folder we are referencing
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  devtool: 'source-map',
}