'use strict';

const flow = require('nimble');

let callback_f = function() {
    console.log("I'm the callback function!");
};

flow.series([
    /**
     * According to unofficial doc, the callback here is used to start the next task
     */
    (callback) => {        
        setTimeout(() => {            
            console.log('I execute first.');
        }, 2000);
        callback();
    },

    (callback) => {
        setTimeout(() => {
            console.log('I execute next.');
            callback();
        }, 1000);
    },

    (callback) => {
        setTimeout(() => {
            console.log('I execute last.');
            callback();
        }, 3000);
    }
], () => {
    console.log('Flow.series successfully ends.');
});

