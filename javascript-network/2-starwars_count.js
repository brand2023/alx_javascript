#!/usr/bin/node
const request = require("request");

const url = process.argv[2];
const ID = 18;

request.get(url, function (error, response, body) {
  const results = JSON.parse(response.body)["results"];

  count = 0;

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    
    const Characters = result.characters.find(character => {
      return character.split("/")[5] === ID.toString();
    });

    if (Characters) count += 1;
  }

  console.log(count);
});