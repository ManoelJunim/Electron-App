import fs from "fs";
import { execSync } from "child_process";

class FilesController {
  static listFiles(dir: string) {
    return execSync(`ls -a '${dir}' -l`).toString().split("\n");
  }

  static readTextFile(dir: string) {
    try {
      const data = fs.readFileSync(dir, "utf8");
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

export { FilesController };
