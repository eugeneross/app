const execSync = require('child_process').execSync;

const arg = process.argv[2] || 'numie-lib'; 
// Default value `numie-lib` if no args provided via CLI.

execSync('yarn link ' + arg + ' && rm -rf node_modules/' + arg + '/node_modules/styled-components', {stdio:[0, 1, 2]});
// execSync('rm -rf node_modules/' + arg + '/node_modules/', {stdio:[0, 1, 2]});


// execSync('yarn link ' + arg + ' && rm -rf node_modules/' + arg + '/node_modules/styled-components', { stdio: [0, 1, 2] });