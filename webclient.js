const http = require('http');

const url = "http://localhost:3000";
http.get(url, (res) => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => { body += data; });
  res.on("end", () => {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADER: ' + JSON.stringify(res.headers));
    console.log('CONTENT-TYPE: ' + res.headers['content-type']);
    console.log('BODY: ' + body);
  });
});
