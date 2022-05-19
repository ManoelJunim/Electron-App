import { API } from "../../bridge/bridge";

declare global {
  interface Window {
    api: typeof API;
  }
}
