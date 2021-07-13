const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/root.js',
  },
  output: {
    filename: 'app.js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
      },
      hash: true, // 정적 파일을 불러올 떄 쿼리문자열에 웹팩 해쉬값을 추가한다.
    }),
  ],
};
