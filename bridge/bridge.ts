import { ipcRenderer } from "electron";

const API = {
  listFiles: async (dir: string): Promise<string[]> =>
    await ipcRenderer.invoke("files/list", dir),
};

const ExecFileOpen = {
  openFile: (dir: string, fileName: string): void =>
    ipcRenderer.send("open/files", dir, fileName),
};

const ExecFileFolder = {
  openFolder: async (dir: string): Promise<string> =>
    await ipcRenderer.invoke("folder/Dir", dir),
};

export { API, ExecFileOpen, ExecFileFolder };
