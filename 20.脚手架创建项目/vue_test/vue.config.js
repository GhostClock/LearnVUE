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
  // 开启代理服务器
  devServer: {
    proxy: "https://httpbin.org", // 指向远程服务器
  }
})
