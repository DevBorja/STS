var http = require('http');
var server = http.createServer();

function control(petic, resp) {
resp.writeHead(200, {'content-type': 'text/plain'});
resp.write('Hola, Mundossss');
resp.end();
}
server.on('request', control);
server.listen(process.env.PORT || 80);
