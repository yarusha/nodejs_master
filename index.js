var http = require('http');
var url = require('url');
const serverPort = 8085;
const responseData = {
  'text': 'Hello world!!!'
};
const successStatusCode = 200;
const responseJson = JSON.stringify(responseData);
var server = http.createServer(function(req, res){
  path = url.parse(req.url).pathname.replace(/^\/+|\/+$/g, "");
  if(path==='api') {
    res.setHeader('Content-type', 'application:json');
    res.writeHead(successStatusCode);
    res.end(responseJson);
  } else {
    res.writeHead(successStatusCode)
    res.end('Route: /' + path + ' not found, use /api\n');
  }
});

server.listen(serverPort, function(){
  console.log('Start server listen on port: ' + serverPort);
});
