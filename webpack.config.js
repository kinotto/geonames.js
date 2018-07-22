const path = require('path');
const nodeExternals = require('webpack-node-externals');

const baseConfig = {
  entry: './src/geonames.js',
  devtool: 'eval-source-map',
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
  }
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



