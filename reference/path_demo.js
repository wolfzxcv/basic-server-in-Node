const path = require('path');

// Base file name
// path_demo.js
console.log(path.basename(__filename));

// Directory name
// /home/wolf/Desktop/node-course/reference
console.log(path.dirname(__filename));

// File extension
// .js
console.log(path.extname(__filename));

// Create path object
// return an object with "root", "dir", "base", "ext" and "name", basically all stuff you tried above
console.log(path.parse(__filename));

// Concatenate paths
// we want this "../test/hello.html"
console.log(path.join(__dirname, 'test', 'hello.html'));
