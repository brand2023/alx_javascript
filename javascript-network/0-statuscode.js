#!/usr/bin/node
const request = require('request');
request.get(process.argv[1], function (response){
    console.log('code:', response.statusCode);
})