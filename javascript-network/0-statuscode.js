#!/usr/bin/node
const request = require('request');
request
    .get(intranet.alxswe.com)
    .on('response', function(response){
        console.log('code:', response.statusCode);})