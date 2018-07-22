const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = {
  entry: './src/geonames.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: { presets: ['env'] }
        },
        exclude: /(node_modules)/,
        test: /\.js$/
      }
    ]
  },
  plugins: [
    // set env variable to production to reduce bundle size, only for prod
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // minification -> reduce the bundle , only for prod
    new UglifyJSPlugin(),
  ]
}

const browserConfig = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Geonames',
    filename: 'geonames.min.js'
  }
}

const serverConfig = {
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Geonames',
    filename: 'geonames.min.node.js'
  }
}

module.exports = [Object.assign({}, baseConfig, browserConfig)
  , Object.assign({}, baseConfig, serverConfig)];



