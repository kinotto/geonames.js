'use strict'
const webpack = require('webpack')
const path = require('path')

const ENVIRONMENT = process.env.NODE_ENV || 'development'
const IS_PRODUCTION = ENVIRONMENT === 'production'
const OUTPUT_PATH = path.join(__dirname, 'dist')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const LOADER_OPTIONS = new webpack.LoaderOptionsPlugin({
  minimize: IS_PRODUCTION,
  debug: !IS_PRODUCTION,
  options: {
    context: __dirname
  }
})

let plugins = [LOADER_OPTIONS]

const entries = {
  geonames: [path.join(__dirname, 'src', 'geonames.ts')]
}

const JS_LOADERS = [
  { loader: 'ts-loader', options: { transpileOnly: true } }
]
if (ENVIRONMENT === 'production') {
  plugins.push(
    new UglifyJSPlugin({
      uglifyOptions: { ecma: 8 }
    })
  )
}

const webpackConfig = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  context: path.join(__dirname, 'src'),
  entry: entries,
  output: {
    path: OUTPUT_PATH,
    publicPath: '/',
    library: 'Geonames',
    libraryTarget: 'umd',
    libraryExport: 'Geonames',
    filename: IS_PRODUCTION ? '[name].min.js' : '[name].js',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: JS_LOADERS
      }
    ]
  },
  resolve: {
    extensions: [
      '.js', // automatically in webpack 2
      '.jsx',
      '.ts',
      '.tsx',
      '.json' // automatically in webpack 2
    ],
    modules: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  externals: {
    axios: 'axios'
  },
  plugins: plugins,
  devtool: IS_PRODUCTION ? false : 'source-map'
}

module.exports = webpackConfig
