import { join } from 'node:path'
import { is } from '@electron-toolkit/utils'
import { attachTitleBarToWindow } from '@electron-uikit/titlebar'
import { BrowserWindow, shell } from 'electron'

export async function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    frame: false, // 去掉默认的标题栏
    titleBarStyle: 'hidden', // 设置标题栏样式
    autoHideMenuBar: true,
    // transparent: true,
    // backgroundColor: '#00000000',
    alwaysOnTop: false,
    icon: join(__dirname, '../../resources/icon.png'),
    webPreferences: {
      preload: join(__dirname, '../preload/index.mjs'),
      sandbox: false,
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false, // 禁用同源策略
      allowRunningInsecureContent: false,
      spellcheck: false,
      enableWebSQL: false,
      disableHtmlFullscreenWindowResize: true,
      devTools: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // 屏蔽F11，F12
  const blackKeys = ['F11', 'F12']
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (blackKeys.includes(input.key)) {
      event.preventDefault()
    }
  })
  // 禁止打开开发工具

  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    await mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
    mainWindow.webContents.openDevTools()
  } else {
    await mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
  attachTitleBarToWindow(mainWindow)
}
