const request = require('request');
request('https://intranet.alxswe.com', function (response){
    console.log('code:', response && response.statusCode);
})