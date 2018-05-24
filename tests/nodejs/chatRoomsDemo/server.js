'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

let cache = {};

/**
 * Send 404 error response when trying to request the file which doesn't exist.
 * 
 * @param {*} response The response object.
 */
function send404response(response) {
    response.writeHead(404, {'Content-type': 'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
}

/**
 * Serve files data.
 * 
 * @param {*} response 
 * @param {*} filePath 
 * @param {*} fileContents 
 */
function sendFile(response, filePath, fileContents) {
    response.writeHead(200, {
        'Content-type': mime.getType(path.basename(filePath))
    });    

    response.end(fileContents);
}

/**
 * Serve static files
 * 
 * @param {*} response 
 * @param {*} cache 
 * @param {*} absPath 
 */
function serveStatic(response, cache, absPath) {
    if (cache[absPath]) {
        sendFile(response, absPath, cache[absPath]);
    } else {
        fs.exists(absPath, (exists) => {
            if (exists) {
                fs.readFile(absPath, function(err, data) {
                    if (err) {
                        send404response(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data);
                    }
                });
            } else {
                send404response(response);
            }
        });
    }
}

http.createServer((request, response) => {
    let filePath = false;

    if (request.url == '/') {
        filePath = 'public/index.html';
    } else {
        filePath = 'public' + request.url;
    }

    let absPath = './' + filePath;
    serveStatic(response, cache, absPath);
}).listen(8080, () => {
    console.log("Server is listening on port 8080.");
});