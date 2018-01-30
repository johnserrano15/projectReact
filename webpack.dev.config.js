const path = require('path');
// const webpack = require('webpack');
/* css-loaders, style-loader y  extract-text-webpack-plugin */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* 
  Config Advanced dev
  Nota: siempre hay que copilar webpack la primera vez y luego si correr webpack-dev-server
*/
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'views'),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'es2016', 'react']
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
  ]
}