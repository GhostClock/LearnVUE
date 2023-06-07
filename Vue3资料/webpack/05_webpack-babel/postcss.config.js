// 配置postcss

module.exports = {
  plugins: [
    // require('autoprefixer')
    // 使用postcss-preset-env替换autoprefixer
    require('postcss-preset-env')
  ]
}