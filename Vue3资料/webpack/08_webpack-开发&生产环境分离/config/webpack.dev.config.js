// 开发环境配置

const path = require('path')

const { DefinePlugin } = require('webpack')

const { merge } = require('webpack-merge')

const commConfig = require("./webpack.comm.config")

// 合并配置
module.exports = merge(commConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // 如果某些资源找不到就去设置的contentBase文件夹里面去找
    // 一般开发阶段使用
    // contentBase: './public', // 已经弃用
    static: path.join(__dirname, "./public"),
    // 模块热替换
    hot: true,
    // host: "0.0.0.0",
    port: 8000,
    // open: true,// 自动打开浏览器
    compress: true, // 开启gzip压缩
    // 设置跨域
    proxy: {
      '/': {
        target: 'https://httpbin.org',
        // 重写地址
        // pathRewrite: {
        //   '^/api': ""
        // },
        secure: false,
        changeOrigin: true, // 是否修改源
      },
    }
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ],
})