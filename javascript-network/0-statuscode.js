#!/usr/bin/node
const request = require('request');
request.get(process.arg[2], {encoding: 'UTF-8'})
.on('response', function(response){
    console.log("code:", response.statusCode);
})
