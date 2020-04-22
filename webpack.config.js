module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
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
