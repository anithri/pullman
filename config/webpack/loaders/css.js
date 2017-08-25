const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {env} = require('../configuration.js')

module.exports = {
  test: /\.css$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: env.NODE_ENV === 'production',
          modules: true,
          sourceMap: true,
          importLoaders: 2,
          localIdentName: '[folder]__[local]___[hash:base64:5]'
        }
      },
      {loader: 'postcss-loader', options: {sourceMap: true}},
      'resolve-url-loader'
    ]
  })
}
