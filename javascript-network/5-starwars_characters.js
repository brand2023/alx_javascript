#!/usr/bin/node
const request = require('request');

const MovieId = process.arg[2]
const Url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(Url, {encoding: 'UTF-8'}, function(error, response, body){
    const Movie = JSON.parse(body);
    const characters = Movie.characters;
    characters.forEach((chUrl) => {
        request.get(chUrl, {encoding: 'UTF-8'})
        const chr =JSON.parse(body);
        console.log(chr.name)});
    }
);
