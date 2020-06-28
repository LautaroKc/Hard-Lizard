const http = require('http');
const router = require('./router');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf8'});
        
    router(req.url, res)
}).listen(3000, 'localhost', () => console.log('Server corriendo'))