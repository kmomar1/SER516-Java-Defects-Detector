const { exec } = require("child_process");

function runPMD() {
    const projectPath = "C:\\Users\\Admin\\Desktop\\ASU\\SER516\\Project";

    const command = `docker run --rm -v "${projectPath}:/src" ghcr.io/pmd/pmd check -d /src -R category/java/bestpractices.xml -f json`;

    exec(command, (error, stdout, stderr) => {

        // PMD returns exit code 4 if violations exist — this is NOT a failure
        if (error && error.code !== 4) {
            console.error("Real execution error:", error.message);
            return;
        }

        try {
            const jsonOutput = JSON.parse(stdout);
            console.log("PMD JSON Parsed Successfully:");
            console.log(JSON.stringify(jsonOutput, null, 2));
        } catch (parseError) {
            console.error("Failed to parse JSON:", parseError.message);
            console.log("Raw Output:", stdout);
        }
    });
}

runPMD();
