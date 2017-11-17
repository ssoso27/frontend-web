// server.js
var http = require('http'); // 사용자의 request 받음

http.createServer(function (req, res) { // 웹서버 객체 만듬. http 요청시마다 실행
  res.writeHead(200, {'Content-Type': 'text/plain'}); // 상태 코드, 헤더
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/'); // localhost
