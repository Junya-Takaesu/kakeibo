const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kakeibo'
    })
  ]
};