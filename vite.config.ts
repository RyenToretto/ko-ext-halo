import { dirname, relative } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
// import vueDevTools from 'vite-plugin-vue-devtools'
import { defineViteConfig as define } from './define.config'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      src: fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('src/assets', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        modifyVars: {},
        javascriptEnabled: true,
        additionalData: `@use "src/assets/common/index.scss" as *;`
      },
    },
  },
  plugins: [
    vue(),
    ElementPlus({
      defaultLocale: 'zh-cn'
    }),
    // vueDevTools(),
    Pages({
      dirs: [
        {
          dir: 'src/pages',
          baseRoute: 'common',
        },
        {
          dir: 'src/splash/pages',
          baseRoute: 'splash',
        },
        {
          dir: 'src/popup/pages',
          baseRoute: 'popup',
        },
        {
          dir: 'src/setting/pages',
          baseRoute: 'setting',
        },
        {
          dir: 'src/content-script/MediaPickerApp/pages',
          baseRoute: 'mediapickerapp',
        },
      ],
    }),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          'webextension-polyfill': [['*', 'browser']],
        },
      ],
      dts: 'src/types/auto-imports.d.ts',
      dirs: ['src/composables/', 'src/stores/', 'src/utils/'],
      eslintrc: {
        enabled: true,
        filepath: 'src/types/.eslintrc-auto-import.json',
      },
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ['src/components'],
      // generate `components.d.ts` for ts support with Volar
      dts: 'src/types/components.d.ts',
      resolvers: [
        // auto import icons
        IconsResolver(),
      ],
    }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      scale: 1.5,
    }),
    // rewrite assets to use relative path
    {
      name: 'assets-rewrite',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml(html, { path }) {
        const assetsPath = relative(dirname(path), '/assets').replace(
          /\\/g,
          '/'
        )
        return html.replace(/"\/assets\//g, `"${assetsPath}/`)
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html',
        splash: 'src/splash/index.html',
        setting: 'src/setting/index.html',
      },
    },
  },
  optimizeDeps: {
    include: ['vue', '@vueuse/core', 'webextension-polyfill'],
    exclude: ['vue-demi'],
  },
  assetsInclude: ['src/assets/*/**'],
  define,
})
