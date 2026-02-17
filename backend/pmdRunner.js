const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

function runCommand(command, cwd = null) {
    return new Promise((resolve, reject) => {
        exec(command, { cwd }, (error, stdout, stderr) => {
            // We do NOT immediately reject on non-zero exit
            // because PMD may exit with non-zero codes even when report is generated
            if (error) {
                console.warn("Command exited with code:", error.code);
                console.warn(stderr);
            }
            resolve(stdout);
        });
    });
}

async function runPMD(repoUrl) {
    const projectRoot = path.join(__dirname, "..");
    const pmdPath = path.join(projectRoot, "pmd");
    const targetRepoPath = path.join(pmdPath, "target-repo");
    const outPath = path.join(pmdPath, "out");
    const configPath = path.join(pmdPath, "config");
    const reportPath = path.join(outPath, "pmd-report.json");

    try {
        // 1️⃣ Remove old target-repo if exists
        if (fs.existsSync(targetRepoPath)) {
            await runCommand(`rmdir /s /q target-repo`, pmdPath);
        }

        // 2️⃣ Clone repository
        console.log("Cloning repository...");
        await runCommand(`git clone ${repoUrl} target-repo`, pmdPath);

        // 3️⃣ Remove old report if exists
        if (fs.existsSync(reportPath)) {
            fs.unlinkSync(reportPath);
        }

        // 4️⃣ Run PMD container dynamically
        console.log("Running PMD analysis...");

        const dockerCommand = `
            docker run --rm
            -v "${targetRepoPath}:/src:ro"
            -v "${outPath}:/out"
            -v "${configPath}:/config:ro"
            ghcr.io/pmd/pmd:latest
            check -d /src -R /config/ruleset.xml -f json -r /out/pmd-report.json
        `.replace(/\n/g, " ");

        await runCommand(dockerCommand);

        // 5️⃣ Ensure report exists
        if (!fs.existsSync(reportPath)) {
            throw new Error("PMD report was not generated.");
        }

        // 6️⃣ Read report
        const reportData = fs.readFileSync(reportPath, "utf8");
        const json = JSON.parse(reportData);

        // 7️⃣ Cleanup cloned repo
        console.log("Cleaning up...");
        await runCommand(`rmdir /s /q target-repo`, pmdPath);

        return json;

    } catch (error) {
        throw new Error("Task-33 PMD integration failed: " + error.message);
    }
}

module.exports = runPMD;
