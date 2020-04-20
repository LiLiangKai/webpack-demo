const path = require('path')

const tsLoader = {
  loader: 'ts-loader',
  options: {
    configFile: path.join( __dirname, 'tsconfig.json' ),
    transpileOnly: true,
    allowTsInNodeModules: true
  }
}

const babelLoader = {
  loader: 'babel-loader',
  options: {
    babelrc: false,
    configFile: path.join( __dirname, '.babelrc' ),
    cacheDirectory: true
  }
}

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
        use: [ babelLoader, tsLoader ]
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