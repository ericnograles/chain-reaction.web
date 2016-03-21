module.exports = {
  API_PATH: 'http://localhost:1337',
  WEBPACK: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
    devtool: 'source-map'
  }
};