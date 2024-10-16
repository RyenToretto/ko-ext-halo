import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import App from './app.vue'
import routes from '~pages'

import '@/assets/base.scss'
import '@/assets/reset.scss'
import './index.scss'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App)

app.use(router).mount('#app')

self.onerror = function (message, source, lineno, colno, error) {
  doLog(
    'splash/index.ts',
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${error}`
  )
}
