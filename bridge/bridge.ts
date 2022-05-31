import { ipcRenderer } from "electron";

const API = {
  listFiles: async (dir: string): Promise<string[]> =>
    await ipcRenderer.invoke("files/list", dir),

  readtext: async (dir: string): Promise<string> =>
    await ipcRenderer.invoke("files/read", dir),
};

export { API };
