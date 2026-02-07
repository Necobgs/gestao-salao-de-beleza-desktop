const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      contextIsolation: true
    }
  });

  const isDev = !app.isPackaged;

  if (isDev) {
    // DEV → Next.js
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
  } else {
    // PROD → Next export estático
    win.loadFile(
      path.join(__dirname, '../renderer/out/index.html')
    );
  }
}

app.whenReady().then(createWindow);
