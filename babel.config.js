module.exports = {
  exclude: [
    /node_modules/
  ],
  presets: [
    [
      // 转换es6等新特性代码, 按需引入
      '@babel/preset-env',
      {
        useBuiltIns: "usage",
        corejs: 3
      }
    ]
  ],
  plugins: [
  ]
}
