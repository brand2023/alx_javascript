#!/usr/bin/node
const request = require('request');

const Url = `https://swapi-api.alx-tools.com/api/films/`;

request.get(Url, {encoding: 'UTF-8'}, function(error, response, body){
    const films = JSON.parse(body).results;
    const count = films.filters((film) => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)).length;
    console.log(`${count}`);
});
