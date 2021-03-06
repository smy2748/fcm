const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module:{
    rules: [
      {
        test: /\.jsx?/,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        use : [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg||gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

