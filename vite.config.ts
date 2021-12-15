// const { resolve } = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { V_ON_WITH_KEYS } from '@vue/compiler-dom'

const Lis = V_ON_WITH_KEYS
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3333,
  },
  resolve: {
    // alias: [
    //   {
    //     find: "@",
    //     replacement: 
    //   }
    // ]
  }
})
