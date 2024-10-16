import { createApp } from 'vue'
import App from './app.vue'
import globalStore from '@/store/globalStore'

import '@/assets/base.scss'
import './index.scss'

const elePickerPopover = document.createElement("div");
elePickerPopover.id = 'media-picker-app'
elePickerPopover.classList.add('xh-media__')
document.body.appendChild(elePickerPopover)

createApp(App).use(globalStore).mount('#media-picker-app')

self.onerror = function (message, source, lineno, colno, error) {
  doLog(
    'content-script/MediaPickerApp/index.ts',
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${error}`
  )
}
