import { API, ExecFolder, ExecFileFolder, ExecFile } from "../../bridge/bridge";

declare global {
  interface Window {
    api: typeof API;
    openFile: typeof ExecFile;
    openFolder: typeof ExecFileFolder;
    creatFolder: typeof ExecFolder;
  }
}
