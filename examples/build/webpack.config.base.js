const path = require('path')
const Webpack = require('webpack')
// const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const safePostCssParser = require('postcss-safe-parser')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = (env) => {
  const isProduction = env.production === true

  return {
    context: path.resolve(__dirname, '../src'),
    devtool: isProduction ? false : 'source-map',
    mode: isProduction ? 'production' : 'development',

    entry: {
      main: ['./main.js']
    },

    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'static/js/[name].[hash].js',
      chunkFilename: 'static/js/[name].[hash].js',
      publicPath: './',
      assetModuleFilename: 'static/img/[name].[hash:7][ext]'
    },

    resolve: {
      extensions: ['.jsx', '.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
        '@libs': path.resolve(__dirname, '../src/libs'),
        vue: '@vue/runtime-dom'
      },
    },
    optimization: {
      // ...(isProduction ? {runtimeChunk: 'single'} : {}),
      minimize: isProduction,
      minimizer: [
        // new TerserPlugin({
        //   cache: true,
        //   parallel: true,
        //   sourceMap: isProduction, // 如果在生产环境中使用 source-maps，必须设置为 true
        //   terserOptions: {
        //     // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        //   }
        // }),
        // 用于优化或者压缩CSS资源
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: !isProduction ?
              {
                inline: false,
                annotation: true
              } :
              false
          }
        })
      ],
      splitChunks: {
        chunks: 'all',
        name: false,
        cacheGroups: {
          // 缓存组
          vendor: {
            name: 'vendor',
            test: /node_modules/,
            chunks: 'initial',
            priority: 10,
            enforce: true
          },
          common: {
            name: 'chunk-commons',
            test: /\.jsx?$/,
            chunks: 'initial',
            minChunks: 2, //两个共享以及以上都提取,
            minSize: 0,
            priority: -20, //优先级
            reuseExistingChunk: true
          },
          css: {
            name: 'css-commons',
            test: /\.less$/,
            minChunks: 2,
            minSize: 0,
            priority: -30,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      }
    },

    module: {
      rules: [{
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader'
          }
        },
        // {
        //   test: /\.js$/,
        //   use: {
        //     loader: 'babel-loader'
        //   }
        // },
        {
          test: /\.(png|jpg|gif)$/,
          type: 'asset/resource'
        },
        {
          test: /\.css$/,
          use: isProduction ? [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] :
            ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.less$/,
          use: !isProduction ?
            [
              'style-loader',
              'css-loader',
              'postcss-loader',
              {
                loader: require.resolve('less-loader'),
                options: {}
              }
            ] :
            [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              {
                loader: require.resolve('less-loader'),
                options: {}
              }
            ]
        },
      ]
    },

    plugins: [
      new Webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: !isProduction
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../index.html'),
        inject: true
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[hash:8].css',
        chunkFilename: 'static/css/[id].[hash:8].chunk.css'
      }),
      new VueLoaderPlugin()
    ],

    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      }
    },
  }
}