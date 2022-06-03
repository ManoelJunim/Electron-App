// Preload (Isolated World)
import { contextBridge } from "electron";
import { API, ExecFileFolder, ExecFileOpen } from "./bridge";

contextBridge.exposeInMainWorld("api", API);
contextBridge.exposeInMainWorld("openFile", ExecFileOpen);
contextBridge.exposeInMainWorld("openFolder", ExecFileFolder);
