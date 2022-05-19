import fs from "fs";
import { execSync } from "child_process";

class FilesController {
  static listFiles(dir: string) {
    return execSync(`ls -a '${dir}' -l`).toString().split("\n");
  }
}

export { FilesController };
