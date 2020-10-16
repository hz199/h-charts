const path = require("path")

module.exports = {
  port: 8090,
  // open: true,
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@es/': path.resolve(__dirname, '../libs/es')
  }
}
