import { fork } from 'node:child_process'
import { release } from 'node:os'
import { fileURLToPath } from 'node:url'
import logger from '@/logger'
import { createWindow } from '@/manager/window'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { useUIKit } from '@electron-uikit/core/main'
import { registerTitleBarListener } from '@electron-uikit/titlebar'
import { app, BrowserWindow } from 'electron'

// 关闭安全提示
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
// 忽略证书相关错误
app.commandLine.appendSwitch('ignore-certificate-errors')
app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors') // 允许跨域
// win7下禁用gpu加速
if (release().startsWith('6.1')) {
  app.disableHardwareAcceleration()
}
app.whenReady().then(async() => {
  electronApp.setAppUserModelId('com.electron')
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })
  useUIKit()
  registerTitleBarListener()
  await createWindow()
  logger.info('The app started.')
  fork(fileURLToPath(new URL('test.js', import.meta.url)))
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
