const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

function runPMD() {
    return new Promise((resolve, reject) => {

        const pmdPath = path.join(__dirname, "..", "pmd");
        const reportPath = path.join(pmdPath, "out", "pmd-report.json");

        // Run docker compose
        exec("docker compose up --abort-on-container-exit", { cwd: pmdPath }, (error, stdout, stderr) => {

            if (error && error.code !== 4) {
                return reject(`Docker execution failed: ${stderr}`);
            }

            // Read generated JSON report
            fs.readFile(reportPath, "utf8", (err, data) => {
                if (err) {
                    return reject("Could not read PMD report.");
                }

                try {
                    const json = JSON.parse(data);
                    resolve(json);
                } catch (parseError) {
                    reject("Invalid JSON in PMD report.");
                }
            });
        });
    });
}

module.exports = runPMD;
