import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdownToVuePlugin from './builds/markdownToVuePlugin'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    markdownToVuePlugin(),
    vue({
      include: [/(\.vue)$/, /\.md$/]
    }),
  ],
  base: './',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') }
    ]
  },
  server: {
    hmr: {
      overlay: false,
    }, // 禁止服务器错误遮罩
    port: 4000,
    // proxy: {
    //   '/apis': {
    //       target: 'http://xx.xx.xx.xxx:xx',
    //       secure: false,
    //       changeOrigin: true,
    //   }
    // }
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'echarts',
      'mockjs',
      'prismjs'
    ]
  }
})
