// Preload (Isolated World)
import { contextBridge } from "electron";
import { API } from "./bridge";

contextBridge.exposeInMainWorld("api", API);
