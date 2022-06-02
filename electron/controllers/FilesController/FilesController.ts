import { execSync } from "child_process";

class FilesController {
  static listFiles(dir: string) {
    return execSync(`dir "${dir}" /t /c`).toString().split("\n").slice(7);
  }

  static openFile(dir: string, fileName: string) {
    execSync(`"${dir}\\${fileName}"`);
  }
}

export { FilesController };
