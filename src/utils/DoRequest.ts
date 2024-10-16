/**
 * MV3中，由于Service Workers的机制，background pages中不支持XMLHttpRequest，建议使用原生fetch()。
 * 由于axios使用的是XMLHttpRequest，因此，不能使用axios进行API请求。
 *
 * 使用示例:
 * const doRequest = new DoRequest('https://api.example.com')
 * doRequest.get('/endpoint', { withCredentials: true }) // 会发送 cookies
 * doRequest.post('/endpoint', { key: 'value' }, { withCredentials: true }) // 会发送 cookies
 */

class DoRequest {
  baseUrl: string;

  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  // 构建完整的 URL
  buildUrl(url: string) {
    return this.baseUrl ? `${this.baseUrl}${url}` : url;
  }

  // GET 请求
  async get(url: string, config: RequestInit & { withCredentials?: boolean } = {}) {
    return this.request(url, { ...config, method: 'GET' });
  }

  // POST 请求
  async post(url: string, data: any = {}, config: RequestInit & { withCredentials?: boolean } = {}) {
    return this.request(url, { ...config, method: 'POST', body: JSON.stringify(data) });
  }

  // PUT 请求
  async put(url: string, data: any = {}, config: RequestInit & { withCredentials?: boolean } = {}) {
    return this.request(url, { ...config, method: 'PUT', body: JSON.stringify(data) });
  }

  // DELETE 请求
  async delete(url: string, config: RequestInit & { withCredentials?: boolean } = {}) {
    return this.request(url, { ...config, method: 'DELETE' });
  }

  // 核心请求函数
  async request(url: string, config: RequestInit & { withCredentials?: boolean }) {
    const fullUrl = this.buildUrl(url);
    const headers = {
      'Content-Type': 'application/json',
      ...(config.headers || {}),
    };

    // 如果 withCredentials 为 true，则设置 credentials 为 'include'
    const credentials = config.withCredentials ? 'include' : 'same-origin';

    try {
      const response = await fetch(fullUrl, {
        ...config,
        headers,
        credentials,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default DoRequest
