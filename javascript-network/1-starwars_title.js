#!/usr/bin/node
const request = require('request');
const Nbepisod = process.arg[2];
const Url = `https://swapi-api.alx-tools.com/api/films/${Nbepisod}`;

request.get(Url, {encoding: 'UTF-8'}, function(error, response, body){
    if (error){
        console.error('Error:', error);
        return;
    }
    const starwars = JSON.parse(body);
    console.log(starwars.title);
});
