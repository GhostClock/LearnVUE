// 公共配置

const path = require('path')
// 生成html模板
const  htmlWebpackPlugin  = require('html-webpack-plugin')
// vue-loader plugin
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'web',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/bundle.js',
  },
  resolve: {
    // 设置默认后缀名
    extensions: ['.js', '.json', '.vue', 'ts', '.jsx', 'tsx'],
    // 设置路径别名
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
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
      // babel抽取配置文件 babel.config.js
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
      // vue
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
      },
    ]
  },
  plugins: [
    // 生成html模板
    new htmlWebpackPlugin({
      // 指定模板 针对根目录
      template: "./public/index.html",
      title: "这是网站标题"
    }),
    // vue 
    new VueLoaderPlugin(),
  ],
}