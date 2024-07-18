
const webpack = require('webpack')
const path = require('path')

const preload = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  optimization: {
    moduleIds: 'named',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: ['node_modules'],
  },

  plugins: [
    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: 'production',
    // }),

  ],

  target: 'electron-preload',

  entry: {
    preload: './preload.ts',
  },

  output: {
    path: __dirname,
  },
}

module.exports = [preload]
