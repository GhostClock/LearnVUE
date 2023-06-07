
const path = require('path')
// 清理打包文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 生成html模板
const  htmlWebpackPlugin  = require('html-webpack-plugin')

// 默认插件解决BASE_URL报错问题
const { DefinePlugin } = require('webpack')

// 复制public里面的文件
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // 设置模式
  // development: 开发模式
  // production: 生产模式
  mode: 'development',
  // 设置source-map, 建立js映射，方便代码调试
  devtool: 'source-map',// eval：默认值 ，source-map：符号文件
  
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
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
      // babel
      // {
      //   test: /\.js$/i,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       // plugins: [
      //       //   "@babel/plugin-transform-arrow-functions",
      //       //   "@babel/plugin-transform-block-scoping",
      //       // ]
            
      //       // 预设
      //       presets: [
      //         "@babel/preset-env",
      //       ]
      //     }
      //   },
      // },
      // babel抽取配置文件 babel.config.js
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
    ]
  },
  plugins: [
    // 放一个个的插件
    // 清理打包文件夹
    new CleanWebpackPlugin(),
    // 生成html模板
    new htmlWebpackPlugin({
      // 指定模板
      template: "/public/index.html",
      title: "这是网站标题"
    }),
    // 默认插件解决BASE_URL报错问题
    new DefinePlugin({
      // 配置BASE_URL路径
      BASE_URL: "'./'",

    }),
    // 复制public里面的文件
    // 最好使用 copy-webpack-plugin v9版本
    // https://stackoverflow.com/questions/70080671/copy-webpack-plugin-error-invalid-host-defined-options
    new CopyWebpackPlugin({
      patterns:[
        {
          from: "public/", // 从那里复制
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

  ]
}