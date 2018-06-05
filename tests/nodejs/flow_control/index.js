'use strict';

const flow = require('nimble');

let callback = function() {
    console.log("I'm the callback function!");
};

flow.series([
    (callback) => {        
        setTimeout(() => {
            console.log('I execute first.');
            callback();
        }, 1000);
    },

    (callback) => {
        setTimeout(() => {
            console.log('I execute next.');
            callback();
        }, 500);
    },

    (callback) => {
        setTimeout(() => {
            console.log('I execute last.');
            callback();
        }, 100);
    }
]);

