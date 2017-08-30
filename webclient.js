const http = require('http');

http.get({
  hostname: 'localhost',
  port: 3000,
  path: '/',
  agent: false  // create a new agent just for this one request
}, (res) => {
  // Do stuff 
  res.on('data', function (chunk) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADER: ' + JSON.stringify(res.headers));
    console.log('CONTENT-TYPE: ' + res.headers['content-type']);
    console.log('BODY: ' + chunk);
  });
});