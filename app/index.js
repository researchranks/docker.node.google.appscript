var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('08222016-014129AM');
});
server.listen(8080);
