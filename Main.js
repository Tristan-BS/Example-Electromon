const { app, BrowserWindow } = require('electron')
const path = require('node:path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
    //webPreferences: {
    //  preload: path.join(__dirname, 'preload.js')
    //}
  })

  mainWindow.loadFile('HTML/MainPage.html')

  // Open DevTools or with strg + shift + i
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS.
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
