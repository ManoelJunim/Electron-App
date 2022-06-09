// Preload (Isolated World)
import { contextBridge } from "electron";
import { API, ExecFileFolder, ExecFile, ExecFolder } from "./bridge";

contextBridge.exposeInMainWorld("api", API);
contextBridge.exposeInMainWorld("openFile", ExecFile);
contextBridge.exposeInMainWorld("openFolder", ExecFileFolder);
contextBridge.exposeInMainWorld("creatFolder", ExecFolder);
