import shell from "shelljs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const runPMD = async () => {
  try {
    const repoPath = path.join(__dirname, "target-repo");

    if (!shell.test("-d", repoPath)) {
      throw new Error("target-repo folder does not exist.");
    }

    console.log("Running PMD analysis...");

    const command = `docker run --rm -v "${repoPath}:/src" ghcr.io/pmd/pmd:latest check -d /src -R rulesets/java/quickstart.xml -f json`;

    const result = shell.exec(command);

    if (result.code !== 0 && result.code !== 4) {
      throw new Error(result.stderr || "Unknown PMD error");
    }

    console.log("PMD analysis complete.");

    return result.stdout;

  } catch (error) {
    throw new Error(`PMD analysis failed: ${error.message}`);
  }
};
