const http = require('http');

// Create server object
http
  .createServer((req, res) => {
    // Write response
    res.write('Hello world');
    res.end();
  })
  .listen(3000, () => console.log('server running'));
