const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // 自定义入口文件
      entry: 'src/main.js',

    },
  },
  lintOnSave: false, // 忽略语法规则错误 
})
