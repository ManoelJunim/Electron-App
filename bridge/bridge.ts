import { ipcRenderer } from "electron";

const API = {
  listFiles: async (dir: string): Promise<string[]> =>
    await ipcRenderer.invoke("files/list", dir),
};

const ExecFile = {
  openFile: (dir: string, fileName: string): void =>
    ipcRenderer.send("open/files", dir, fileName),

  deleteFile: (dir: string): void => {
    ipcRenderer.send("delete/file", dir);
  },
};

const ExecFileFolder = {
  openFolder: async (dir: string): Promise<string> =>
    await ipcRenderer.invoke("folder/Dir", dir),
};

const ExecFolder = {
  creatFolder: (dir: string): void => ipcRenderer.send("creat/folder", dir),

  deleteFolder: (dir: string): void => ipcRenderer.send("delete/folder", dir),
};

export { API, ExecFile, ExecFileFolder, ExecFolder };
