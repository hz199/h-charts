const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const Webpack = require('webpack')
const webpackConfig = require('../build/webpack.config.prod')

console.log()
const spinner = ora(chalk.cyan('building code for production...')).start()
rm(path.join(__dirname, '../dist'), err => {
  if (err) throw err
  Webpack(webpackConfig, (err, Stats) => {
    // console.log(Stats.toString(), 1111)

    spinner.stop()
    if (err) throw err
    process.stdout.write(Stats.toString({
      colors: true,
      errors: true,
      hash: false,
      // modules: true,
      // children: false,
      // chunks: false,
      // chunkModules: false,
      warnings: false,
      // entrypoints: false
    }) + '\n\n')

    if (Stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.green(' 🔥 Build complete......\n'))
  })
})
