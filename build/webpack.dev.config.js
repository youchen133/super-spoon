module.exports = {
  devServer: {
    hot: true,
    port: 7000,
    historyApiFallback: true,
    open: true
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 // 如果css中使用@import语句，就先采用前面两个loader处理@import模块
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}