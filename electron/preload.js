const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: ipcRenderer.send,
    on: ipcRenderer.on,
    removeListener: ipcRenderer.removeListener,
  },
});
