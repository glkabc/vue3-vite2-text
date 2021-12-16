import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     port: 3333,
//   },
//   resolve: {
//     alias: [
//       {
//         find: "@",
//         replacement: './src'
//       }
//     ]
//   }
// })

export default defineConfig(({command, mode}) => {
  console.log(command, mode)
  return {
    plugins: [vue()],
    server: {
      port: 3333,
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname,'./src')
        }
      ]
    }
  }
})
