const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),

  },
  // code obfuscation (i.e. replace with shorter variable names)
  // optimization: {
  //   minimize: false
  // },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        // produce old browsers-compatible JavaScript from ES5
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        //  css-loader: css to a string
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    // cleans dist folder before build
    new CleanWebpackPlugin(),
    // extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
    new MiniCssExtractPlugin(),
    // injects JS and CSS bundles into HTML template file.
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
};
