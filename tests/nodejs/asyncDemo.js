'use strict';

let fileSystem = require('fs');

fileSystem.readFile('./resources.json', function(er, data) {
    console.log(JSON.parse(data));
});