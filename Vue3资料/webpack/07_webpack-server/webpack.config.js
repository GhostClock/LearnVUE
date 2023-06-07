
const path = require('path')
// 清理打包文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 生成html模板
const  htmlWebpackPlugin  = require('html-webpack-plugin')

// 默认插件解决BASE_URL报错问题
const { DefinePlugin } = require('webpack')

// 复制public里面的文件
const CopyWebpackPlugin = require('copy-webpack-plugin')

// vue-loader plugin
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
  },
  devServer: {
    // 如果某些资源找不到就去设置的contentBase文件夹里面去找
    // 一般开发阶段使用
    // contentBase: './public', // 已经弃用
    static: path.join(__dirname, "/public"),
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
  resolve: {
    // 设置默认后缀名
    extensions: ['.js', '.json', '.vue', 'ts', '.jsx', 'tsx'],
    // 设置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
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
      // 是否支持 OPTIONS API
      __VUE_OPTIONS_API__: true,
      // 是否在生产环境中使用DEVTOOLS
      __VUE_PROD_DEVTOOLS__: false,
    }),
    // 复制public里面的文件
    // 最好使用 copy-webpack-plugin v9版本
    // https://stackoverflow.com/questions/70080671/copy-webpack-plugin-error-invalid-host-defined-options
    // 一般打包，生产阶段使用
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
    // vue 
    new VueLoaderPlugin(),
  ],
}