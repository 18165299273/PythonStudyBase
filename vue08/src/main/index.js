'use strict'

import { app, BrowserWindow, Notification } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let ipc
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipc = require('electron').ipcMain
ipc.on('add', () => {
  console.log(Notification.isSupported())

  // 实例化不会进行通知
  let notification = new Notification({
    // 通知的标题, 将在通知窗口的顶部显示
    title: 'Boss',
    // 通知的副标题, 显示在标题下面 macOS
    subtitle: '重要消息',
    // 通知的正文文本, 将显示在标题或副标题下面
    body: '@所有人 放假！！！',
    // false有声音，true没声音
    silent: false,
    icon: '1.png',
    // 通知的超时持续时间 'default' or 'never'
    timeoutType: 'default'
  })
  // 向用户展示 notification
  notification.show()
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
