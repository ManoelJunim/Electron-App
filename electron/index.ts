import { app, BrowserWindow, ipcMain } from "electron";
import { FilesController } from "./controllers";
// This allows TypeScript to pick up the magic constant that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minHeight: 500,
    minWidth: 500,
    height: 775,
    width: 1000,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.removeMenu();

  mainWindow.setTitle("Explorer");

  mainWindow.once("ready-to-show", () => {
    ipcMain.handle("files/list", (ev, dir: string) => {
      return FilesController.listFiles(dir);
    });

    ipcMain.on("open/files", (ev, dir: string, fileName: string) => {
      FilesController.openFile(dir, fileName);
    });

    ipcMain.on("creat/folder", (ev, dir: string) => {
      FilesController.creatFolder(dir);
    });

    ipcMain.handle("folder/Dir", (ev, dir: string) => {
      return FilesController.openFolder(dir);
    });

    ipcMain.on("delete/file", (ev, dir: string) => {
      FilesController.deleteFile(dir);
    });

    ipcMain.on("delete/folder", (ev, dir: string) => {
      FilesController.deleteFolder(dir);
    });
  });
};

app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
