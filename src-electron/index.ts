import { release } from 'node:os'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { useUIKit } from '@electron-uikit/core/main'
import { registerTitleBarListener } from '@electron-uikit/titlebar'
import { BrowserWindow, app } from 'electron'
import { createWindow } from '@/core/window-manager'

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

process.on('uncaughtException', (error) => {
  console.error(`uncaughtException: ${error.message}`)
})

process.on('unhandledRejection', async(reason, promise) => {
  console.error(`unhandledRejection: ${reason}`, await promise)
})
