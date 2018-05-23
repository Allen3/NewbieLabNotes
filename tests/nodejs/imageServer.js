'use strict';

const http = require('http');
const fileSystem = require('fs');

let port = 8080;
let imageURL = '../../assets/diff_process_thread.png';

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    fileSystem.createReadStream(imageURL).pipe(res);
}).listen(port);
console.log(`Server start at ${port}.`);