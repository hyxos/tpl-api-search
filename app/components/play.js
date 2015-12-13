var PlayFetch = require('fetch').PlayFetch;

var fetch = new PlayFetch("192.168.39.53:3000/books");

fetch.on('data', function(chunk) {
  console.log(chunk);
});