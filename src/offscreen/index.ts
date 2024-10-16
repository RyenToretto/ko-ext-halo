// redirect logs to background script
window.console.log = (...data) => {
  chrome.runtime.sendMessage({
    type: 'CONSOLE_LOG',
    data,
  })
}

console.log('offscreen/index.ts')
