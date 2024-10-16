/*
 * **** 监听消息 ****
 * background.js 在所有页面都会事先运行
 */
chrome.runtime.onInstalled.addListener(async (opt) => {
  if (opt.reason === 'install') {
    await chrome.storage.local.clear()

    /* 打开一个新的标签页 */
    chrome.tabs.create({
      active: true,
      url: chrome.runtime.getURL('src/splash/index.html?type=install'),
    })
  }

  if (opt.reason === 'update') {
    /* 打开一个新的标签页 */
    chrome.tabs.create({
      active: true,
      url: chrome.runtime.getURL('src/splash/index.html?type=update'),
    })
  }
})

doLog('background/index.ts', 'hello world')

/* 打印错误日志 */
self.onerror = function (message, source, lineno, colno, error) {
  doLog(
    'background/index.ts',
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${error}`
  )
}

export {}
