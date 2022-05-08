module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    SOMETHING: true
  },
  parser: 'vue-eslint-parser', // 识别vue文件
  parserOptions: {
    sourceType: 'module',
    parser: '@babel/eslint-parser' // 配合vue-eslint-parser，解析一些最新的es6语法
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'prettier'
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never']
  }
}