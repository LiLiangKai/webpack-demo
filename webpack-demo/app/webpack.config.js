const path = require('path')

const babelLoader = {
  loader: 'babel-loader',
  options: {
    babelrc: false,
    configFile: path.join( __dirname, '.babelrc' ),
    cacheDirectory: true
  }
}

const tsLoader = {
  loader: 'ts-loader',
  options: {
    configFile: path.join( __dirname, 'tsconfig.json' ),
    transpileOnly: true,
    allowTsInNodeModules: true
  }
}

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: [ babelLoader, tsLoader ]
      },
      {
        test: /\.(css|scss)$/,
        use: [ 'css-loader', 'sass-loader']
      },
      {
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader']
      }
    ]
  },
  resolve: {
    // 自动解析确定的扩展
    extensions: [ ".js", '.jsx', ".ts", ".tsx" ]
  },
}
