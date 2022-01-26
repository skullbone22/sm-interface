const {
  BrowserWindow,
  app,
  ipcMain,
  shell,
  Notification,
  dialog,
} = require("electron");
const path = require("path");
const fs = require("fs");

var child = require("child_process").execFile;

const isDev = !app.isPackaged;

var mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    minWidth: 1024,
    height: 600,
    minHeight: 600,
    maxHeight: 600,
    maxWidth: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");

  mainWindow.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });
}

// Saves config data to file
ipcMain.on("saveConfig", (_, data) => {
  var settingsPath = "";
  if (data[0] == "gameDirectories") {
    settingsPath = "./gameDirectories.json";
  } else {
    settingsPath = "./gameParameters.json";
  }
  fs.writeFile(settingsPath, data[1], (err) => {
    if (err) {
      console.error(err);
    }
  });
});

// Loads user settings into interface
ipcMain.on("loadConfig", (event, arg) => {
  var settingsPath = "";
  if (arg == "gameDirectories") {
    settingsPath = "./gameDirectories.json";
  } else {
    settingsPath = "./gameParameters.json";
  }
  fs.readFile(settingsPath, "utf8", function (err, data) {
    if (err) {
      fs.writeFile(settingsPath, '{"data":"none"}', function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
      event.returnValue = '{"data":"none"}';
    } else {
      event.returnValue = data;
    }
  });
});

// Load Function
ipcMain.on("loadGame", (_) => {
  var executablePath = "E:\\steam\\steamapps\\common\\Arma 3\\arma3.exe";
  parameters = []
  child(executablePath,parameters, function (err, data) {
    mainWindow.close()
  });
});

// Looks for Mod and Application updates
ipcMain.on("checkForUpdates", (_) => {
  new Notification({ title: "Notification", body: "No Updates found" }).show();
});

ipcMain.on("selectDirectory", (_) => {
  dialog.showOpenDialog({ properties: ["openFile"] });
});

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(createWindow);
