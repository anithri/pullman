module.exports = {
  test: /\.(js|jsx)?(\.erb)?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {cacheDirectory: 'tmp/.babel-cache'}
}
