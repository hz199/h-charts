
const assetsDir = 'static'

module.exports = {
  publicPath: '/',
  assetsDir: assetsDir,
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    open: true,
  }
}
