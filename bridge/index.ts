// Preload (Isolated World)
import { contextBridge } from "electron";
import { API, ExecFileOpen } from "./bridge";

contextBridge.exposeInMainWorld("api", API);
contextBridge.exposeInMainWorld("openFile", ExecFileOpen);
