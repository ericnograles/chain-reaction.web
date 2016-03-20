var hostname = 'localhost';
var port = 8081;

module.exports = {
  context: __dirname + "/tests",
  entry: {
    javascript: 'mocha!./index.js',
    html: './index.html'
  } ,
  output: {
    filename: 'test.build.js',
    path: __dirname + "/unit-tests",
    publicPath: 'http://' + hostname + ':' + port + '/tests'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query:
        {
          presets:['react', 'es2015']
        }
      },
      {
        test: /(\.css|\.less)$/,
        loader: 'null-loader',
        exclude: [
          /build/
        ]
      },
      {
        test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
        loader: 'null-loader'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },
  devServer: {
    host: hostname,
    port: port
  }
};