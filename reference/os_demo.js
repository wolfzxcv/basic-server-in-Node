const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
//console.log(os.cpus());

//Total memory
console.log((os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' G');

// Free memory
console.log((os.freemem() / 1024 / 1024 / 1024).toFixed(2) + ' G');

// Home dir
console.log(os.homedir());

// Uptime
// amount of time your system has been up in sec
console.log(
  'You have used computer for ' + (os.uptime() / 60 / 60).toFixed(2) + ' hours'
);
