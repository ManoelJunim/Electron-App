import { ipcRenderer } from "electron";

const API = {
  listFiles: async (dir: string): Promise<string[]> =>
    await ipcRenderer.invoke("files/list", dir),
};

export { API };
