# xh-media-picker

> 悬壶灵感采集

> 支持热更新

> 代码库: https://hn.devcloud.huaweicloud.com/codehub/project/7d347ae24ad64e0c84f9efd96923e043/codehub/7924075/repo

> 巨量创量采集: https://cc.oceanengine.com/inspiration/creative-hot/ad/detail/7403272359740293139?appCode=999&period=3&listType=10&materialType=3

---

- `npm install -g pnpm` - 安装pnpm
- `pnpm i` - 安装依赖
- `pnpm dev` - 本地开发; 将dist的对应插件目录, 拖曳到浏览器的扩展程序页面即可
- `pnpm build` - 打包
- `pnpm lint`


## 项目配置

- `manifest.config.ts` - 通用插件配置
- `manifest.chrome.config.ts` - Chrome 插件配置
- `manifest.firefox.config.ts` - Firefox 插件配置
- `vite.config.ts` - 通用 vite配置
- `vite.chrome.config.ts` - Chrome vite配置
- `vite.firefox.config.ts` - Firefox vite配置

## 项目文件夹

- `dist`
  - `chrome` - Chrome 插件
  - `firefox` - Firefox 插件

- `src` - 项目源码.
  - `assets` - assets used in Vue components
  - `background`
  - `components` - 自动导入的 Vue components
  - `composables` - vue hooks
  - `content-script` - 注入 scripts 和 components
    - `MediaPickerApp` - 将注入到页面的 一个vue3 APP
  - `offscreen` - 离屏页面 audio, screen recording etc
  - `pages` - 通用视图 (About, Contact, Authentication etc)
  - `popup` - [vue3根项目]: 弹层
  - `setting` - [vue3根项目]: 插件右键 => 选项
  - `splash` - [vue3根项目]: 插件安装成功/插件更新成功
    - chrome-extension://ohebeancjiloneconfhomlmfmndmghnk/src/splash/index.html?type=install#/

## 文档

### Vue Plugins

- [`Pinia`](https://pinia.vuejs.org/) - Intuitive, type safe, light and flexible Store for Vue
  - Pinia stores Coding Style [`setup` SFC syntax](https://pinia.vuejs.org/cookbook/composables.html#Setup-Stores)
- [`VueUse`](https://github.com/antfu/vueuse) - collection of useful composition APIs

### Vite Plugins

- [`Vite`](https://vitejs.dev/)
- [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - File system based route generator for Vite
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use `browser` and Vue Composition API without importing
- [`unplugin-vue-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as components

### UI Frameworks

- [`Icons`](./src/components)
  - 默认启用 [Material Design Icons](https://materialdesignicons.com/cdn/1.6.50-dev/)

### Plugins

- [Chrome插件开发](https://developer.chrome.com/docs/extensions/reference/),
  - [`offscreen`](https://developer.chrome.google.cn/docs/extensions/reference/api/offscreen?authuser=0&hl=zh-cn)
- [FireFox插件开发](https://addons.mozilla.org/en-US/developers/)
- [`CRXJS Vite Plugin`](https://crxjs.dev/vite-plugin) 基于Vite Build Chrome, Firefox and Other 浏览器插件
- [`webext-bridge`](https://github.com/zikaari/webext-bridge) 插件通信
- [`Marked`](https://github.com/markedjs/marked) - markdown 解析编译器. 用于 CHANGELOG.md 展示与更新
- [`TypeScript`](https://www.typescriptlang.org/)

## 参考

- https://github.com/zxlie/FeHelper
- https://github.com/zxlie/FeHelper/blob/master/apps/popup/index.html
