const path = require('path')
const WebpackDevServer = require('webpack-dev-server')
const Webpack = require('webpack')
const chalk = require('chalk')

const webpackConfig = require('../build/webpack.config.dev')

const PORT = process.env.HOST_PORT || 10086

const compiler = Webpack(webpackConfig)
const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, '../dist'),
  compress: true,
  clientLogLevel: 'silent',
  hot: true, // 热加载
  hotOnly:true,
  progress: true, // 打包进度
  open: true, //自动打开浏览器
  inline:true,
  noInfo: true,
  proxy: {}, // 代理接口转发
  quiet: true, // 日志信息
  // before (app, server) {

  // },
  setup: function(app) {
  },
})

server.listen(PORT, '0.0.0.0', function () {
  console.log('\n')
  console.log(chalk.cyan(`server is running at: http://localhost:${PORT}/\n`))
})