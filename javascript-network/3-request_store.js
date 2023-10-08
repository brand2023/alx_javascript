#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const Url = process.arg[2];
const filePath = process.arg[3];

request.get(Url, {encoding: 'UTF-8'}, function(error, response, body){
    fs.writeFile(filePath, body, {enencoding: 'UTF-8'});
});
