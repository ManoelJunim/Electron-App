import { execSync } from "child_process";

class FilesController {
  static listFiles(dir: string) {
    return execSync(`dir "${dir}" /t /c`).toString().split("\n").slice(7);
  }

  static openFile(dir: string, fileName: string) {
    execSync(`"${dir}\\${fileName}"`);
  }

  static openFolder(dir: string) {
    return execSync(`cd ${dir}`);
  }

  static creatFolder(dir: string) {
    return execSync(`mkdir "${dir}"`);
  }

  static deleteFile(dir: string) {
    return execSync(`Del "${dir}"`);
  }

  static deleteFolder(dir: string) {
    return execSync(`rmdir "${dir}"`);
  }
}

export { FilesController };
