const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  devtool: 'hidden-source-map', // 这个方式比较是个调研
  mode: 'development',
  // entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  optimization: {
    usedExports: true,
  },
  // module: {
  //   rules: [
  //     // loaders config
  //   ]
  // },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  // 开发服务器
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    // compress: true, 
    port: 3000,
    open: true,
  }
};