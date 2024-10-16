const doLog = (message?: any, ...optionalParams: any[]) => {
  const msgList: any[] = []
  if (message) {
    if (typeof message === 'string') {
      msgList.push(`%c悬壶灵感采集%c ${message}`)
      msgList.push('background:#666; color:#fff; padding:3px 5px; border-radius:5px;')
      msgList.push('color: #09f;')
    } else {
      msgList.push('%c悬壶灵感采集')
      msgList.push('background:#666; color:#fff; padding:3px 5px; border-radius:5px;')
      msgList.push(message)
    }
  }
  if (msgList && msgList.length) {
    msgList.splice(msgList.length, 0, ...optionalParams)
  }

  console.log(...msgList)
}

export default doLog
