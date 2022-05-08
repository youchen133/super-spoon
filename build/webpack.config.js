const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

module.exports = (env, argv) => {
  console.log(argv)
  console.log(process.env.NODE_ENV, 999999931)
  const config = process.env.NODE_ENV == 'development' ? devConfig : prodConfig
  return merge(baseConfig, config) 
}