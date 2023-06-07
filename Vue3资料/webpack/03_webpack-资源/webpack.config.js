
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,// 正则表达式
        use: [
          // { loader: 'css-loader',}
          'style-loader',
          'css-loader',
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
      // 处理资源1: file-loader
      /*
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            // outputPath: "img",
            name: "img/[name]-[hash:6].[ext]"
          }
        }
      },
      */
       // 处理资源1: url-loader
      /*
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            // outputPath: "img",
            name: "img/[name]-[hash:6].[ext]",
            limit: 100 * 1024 // 小于100kb才进行base64编码
          }
        }
      },
      */
      //  webpack开始，可以直接用asset module type加载资源
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        },
        generator: {
           filename: 'img/[name]-[hash:6].[ext]',
        },
      },
      // 加载字体
      {
        test: /\.(eot|ttf|woff2?)$/i,
        type: "asset/resource",
        generator: {
          filename: 'font/[name]-[hash:6][ext]',
       },
      },

      
    ]
  }
}