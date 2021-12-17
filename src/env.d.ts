/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module 'vue-router' {
//   interface RouteMeta {
//     title?: string
//   }
// }

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
  readonly VITE_SOME_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
