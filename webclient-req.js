const request = require("request");

const url = "http://localhost:3000";

request.get(url, (error, response, body) => {
    console.log('STATUS: ',response.statusCode, 
    '\nHEADER: ' , JSON.stringify(response.headers), 
    '\nCONTENT-TYPE: ' , response.headers['content-type'] ,
    '\nBODY: ' , body);
});
