const path = require('path')
module.exports = {
  mode: 'production', // 设置打包模式
  // entry: path.join(__dirname, 'app.js'),
  entry: {
    app: path.join(__dirname, 'app.ts')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // filename: 'app.[hash].js',
    filename: 'app.js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.join( __dirname, 'tsconfig.json' ),
              transpileOnly: true,
              allowTsInNodeModules: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    // 自动解析确定的扩展
    extensions: [ ".js", ".ts", ".tsx" ]
  },
  optimization: {
    minimize: false // 是否压缩代码
  }
}