import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '../src')}
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
  }
})
