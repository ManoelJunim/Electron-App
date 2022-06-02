import { API, ExecFileOpen } from "../../bridge/bridge";

declare global {
  interface Window {
    api: typeof API;
    openFile: typeof ExecFileOpen;
  }
}
