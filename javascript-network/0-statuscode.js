#!/usr/bin/node
const request = require('request');
request.get(process.argv[1], {encoding: 'UTF-8'}, function (response){
    console.log('code:', response.statusCode);
})