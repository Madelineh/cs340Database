'use strict';

var port = process.env.PORT || 1338;
var url = require("url");

var http = require('http');
var server = http.createServer(function (req, res) {
    var path = url.parse(req.url).pathname;
    switch (path) {
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text-plain'
            });
            res.write("Test Message, hello world");
            res.end();
            break;
        case '/index.html':
            fs.readfile(__dirname + path, function (error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write(error);
                    res.end();
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text\html'
                    });
                    res.write(data);
                    res.end();
                }
            });
            break;
        default:
            res.writeHead(404);
            res.write("oopsies, 404");
            res.end();
            break;


    }
});
server.listen(port);

