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
  // 开启代理服务器 方式一
  /*
  devServer: {
    proxy: "https://httpbin.org", // 指向远程服务器
  },
  */
  // 开启代理服务器 方式二
  devServer: {
    proxy:{
      '/ghostclock': { // 请求前缀
        target: "https://httpbin.org",
        pathRewrite: {'^/ghostclock': ''}, // 真正发起请求时，去掉这个前缀
        // ws: true, // 用于支持webscoket 默认true
        // changeOrigin: true, // 用于控制请求头中的host值 默认true
      },
      '/demo': { // 请求前缀
        target: "https://httpbin.org",
        pathRewrite: {'^/demo': ''},
      },
    }
  }
})
