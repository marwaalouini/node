const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    response.write('<h1>Hello Node!!!!</h1>\n');
    response.end();
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
