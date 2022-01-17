import { defineConfig, ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

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

export default defineConfig(({ command, mode }) => {
  console.log(command, mode);
  return {
    plugins: [vue()],
    server: {
      port: 3333,
      // proxy: { // 代理配置
      //   '/api': {
      //     target: 'http://localhost:3000',
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/api/, '')
      //   }
      // }
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "./src"),
        },
      ],
      extensions: [".vue", ".ts", ".tsx", ".js", ".jsx"],
    },
  };
});
