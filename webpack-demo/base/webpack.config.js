const path = require('path')
module.exports = {
  mode: 'production', // 设置打包模式
  entry: [path.join(__dirname, 'app.js')],
  // entry: {
  //   gg: path.join(__dirname, 'app.js')
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    // filename: 'app.[hash].js',
    filename: 'app.js'
  },
  // optimization: {
  //   minimize: false // 是否压缩代码
  // }
}