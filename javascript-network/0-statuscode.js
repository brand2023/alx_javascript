#!/usr/bin/node
const request = require('request');
request
    .get(process.argv[1], {encoding: 'UTF-8'})
    .on('response', function(response){
        console.log('code:', response.statusCode);})