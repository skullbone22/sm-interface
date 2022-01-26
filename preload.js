const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
  },
  filesApi: {
    saveConfig(type, data){
      ipcRenderer.send('saveConfig', [type, data]);
    },
    getConfig(type){
      return ipcRenderer.sendSync('loadConfig', type)
    },
    selectDirectory(type){
      return ipcRenderer.sendSync('selectDirectory', type)
    }
  },
  gameAPI: {
    loadArma(){
      ipcRenderer.send('loadGame');
    },
    checkForUpdates(){
      ipcRenderer.send('checkForUpdates');
    }
  }
})