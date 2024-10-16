import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import App from './app.vue'
import globalStore from '@/store/globalStore'
import routes from '~pages'

import '@/assets/base.scss'
import '@/assets/reset.scss'
import './index.scss'

routes.push({
  path: '/',
  redirect: '/setting',
})

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

createApp(App).use(router).use(globalStore).mount('#app')

doLog('setting/index.ts', router.getRoutes())

self.onerror = function (message, source, lineno, colno, error) {
  doLog(
    'setting/index.ts',
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${error}`
  )
}
