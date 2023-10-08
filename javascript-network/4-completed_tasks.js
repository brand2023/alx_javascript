#!/usr/bin/node
const request = require('request');

const Url = process.arg[2];

request.get(Url, {encoding: 'UTF-8'}, function(error, response, body){
    const tout = JSON.parse(response.body);
    const Toutcomp = tout.filter(t => t.completed);

    const result = {};
    for (const Toutcomp of Toutcomp) {
        if (result[Toutcomp.userId]) {
            result[Toutcomp.userId] += 1;
        } else{
            result[Toutcomp.userId] = 1;
        }
    }
});
