export const XH_PREFIX = 'https://cli1.mobgi.com'

const xhRequest = new DoRequest(XH_PREFIX)

export const requestAccountInfo = () => {
  return xhRequest.get('/Idea/Manage/checkLogin?Material-Db-Type=2', { withCredentials: true })
}
