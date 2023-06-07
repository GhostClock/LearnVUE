
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,// 正则表达式
        // 写法1.loader的写法 语法糖
        // loader: 'css-loader',
        // 写法2.完整写法
        use: [
          // { loader: 'css-loader',}
          'style-loader',
          'css-loader',

          // 自动加上浏览器前缀 -- 提取到postcss.config.js 文件中
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require('autoprefixer')
          //       ]
          //     }
          //   }
          // }, 

          "postcss-loader",
        ]
      },
      // 处理less
      {
        test: /\.less$/i, // i：表示忽略大小写
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },

      // 上面的css和less写在一起
      // {
      //   test: /\.(less|css)$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'less-loader',
      //   ]
      // }

      

    ]
  }
}