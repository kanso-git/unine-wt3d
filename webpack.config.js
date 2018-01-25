/* eslint global-require: 0 */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');


// "build:prod": "webpack -p --env prod"
// for more read https://webpack.js.org/api/cli/#environment-options

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

module.exports = (env, argv) => ({
  entry:['./src/app.js'],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
    }, {
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],

      }),

    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      publicPath: path.join(__dirname, 'public', 'dist'),
    }),
    new webpack.DefinePlugin({

      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_I),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.WT3D_API': JSON.stringify(process.env.WT3D_API),
      'process.env.BDL_SECURITY_TOKEN': JSON.stringify(process.env.BDL_SECURITY_TOKEN),
      'process.env.BDL_SECURITY_TOKEN_VAL': JSON.stringify(process.env.BDL_SECURITY_TOKEN_VAL),

    }),
  ],

  devtool: env === 'prod' ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/dist/',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '/api' },
      },
    },
  },

});

