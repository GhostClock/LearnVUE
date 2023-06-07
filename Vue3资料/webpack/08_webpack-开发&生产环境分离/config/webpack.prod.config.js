// 生产环境配置

const { merge } = require('webpack-merge')

// 清理打包文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 复制public里面的文件
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 默认插件解决BASE_URL报错问题
const { DefinePlugin } = require('webpack')

const commConfig = require("./webpack.comm.config")

module.exports = merge(commConfig, {
  mode: 'production',
  plugins: [
    // 清理打包文件夹
    new CleanWebpackPlugin(),
    // 复制public里面的文件
    // 最好使用 copy-webpack-plugin v9版本
    // https://stackoverflow.com/questions/70080671/copy-webpack-plugin-error-invalid-host-defined-options
    // 一般打包，生产阶段使用
    new CopyWebpackPlugin({
      patterns:[
        {
          from: "./public/", // 从那里复制
          to: "./", // 复制到那里去
          globOptions: {
            // 忽略哪些文件
            ignore: [ 
              "**/index.html",
            ]
          }
        },
      ]
    }),
     // 默认插件解决BASE_URL报错问题
     new DefinePlugin({
      // 配置BASE_URL路径
      BASE_URL: "'./'",
      // 是否支持 OPTIONS API
      __VUE_OPTIONS_API__: true,
      // 是否在生产环境中使用DEVTOOLS
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ]
})