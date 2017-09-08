var fs = require("fs");

var data = fs.readFileSync('foofile.txt');

console.log(data.toString());

console.log("<<done>>");