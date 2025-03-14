import { session } from 'electron'

export function registerRequest() {
  const defaultSession = session.defaultSession
  const cookieRegex = / secure; HttpOnly/
  defaultSession.webRequest.onHeadersReceived({ urls: ['https://*/auth/login'] }, (details, callback) => {
    const { responseHeaders } = details
    const headersToRemove = ['X-Frame-Options', 'x-frame-options']
    const cookieHeader = responseHeaders?.['Set-Cookie'] || responseHeaders?.['set-cookie']

    for (const header of headersToRemove) {
      if (responseHeaders?.[header]) {
        delete responseHeaders[header]
      }
    }

    if (cookieHeader) {
      const updatedCookieHeader = cookieHeader.map(cookie => cookie.replace(cookieRegex, 'SameSite=None; Secure; HttpOnly'))
      responseHeaders!['set-cookie'] = updatedCookieHeader
    }
    callback({ cancel: false, responseHeaders: details.responseHeaders })
  })
  defaultSession.webRequest.onBeforeSendHeaders({ urls: ['https://test2.qlinkcn.com/user/info'] }, (details, callback) => {
    details.requestHeaders['x-app-version'] = 'pc'
    callback({ cancel: false, requestHeaders: details.requestHeaders })
  })
}
