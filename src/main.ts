import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naive from '@/config/naiveUI'


createApp(App)
    .use(router)
    .use(store)
    .use(naive)
    .mount('#app')
