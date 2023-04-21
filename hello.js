// console.log("hello world");

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('My name is shiv sharma');
});

server.listen(4000);
