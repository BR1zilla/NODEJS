var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Ciao Luca! La tua richiesta e' stata elaborata, il risultato e' che sei proprio un bel BOVINO!");
}).listen(8080);