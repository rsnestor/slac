const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;
const loan = {
  "loan":
  {
    "upb": 525000,
    "type": "conv",
    "amort": "FRM",
    "term": 30,
    "borrower": [
      {
        "name": "John Doe",
        "fico": "700",
        "age": 40
      }, {
        "name": "Jane Doe",
        "fico": "710",
        "age": 38
      }
    ]
  }
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(loan));
  res.end("\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
