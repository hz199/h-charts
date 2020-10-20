const path = require("path")

module.exports = {
  // root:,
  base: './',
  port: 8090,
  open: true,
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@es/': path.resolve(__dirname, '../libs/es')
  },
  // resolvers: [{
  //   requestToFile: publicPath => {
  //     if (publicPath.match(/^\/@es\//)) {

  //     console.log(path.join(__dirname, `../libs/es/${publicPath.replace(/^\/@es\//, '')}/index.js`))
  //       return path.join(__dirname, `../libs/es/${publicPath.replace(/^\/@es\//, '')}/index.js`)
  //     }
  //   }
  // }]
}
