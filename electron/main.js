const { app, BrowserWindow } = require('electron')
const path = require('path')

// Verifica se está em desenvolvimento
const isDev = !app.isPackaged;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  })

  if (isDev) {
    // No dev, aponta para o servidor do Next.js
    win.loadURL('http://localhost:5173')
    // Opcional: Abre o DevTools automaticamente
    // win.webContents.openDevTools()
  } else {
    // No prod, carrega o arquivo estático gerado pelo 'next export'
    win.loadFile(path.join(__dirname, '../renderer/dist/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})