var http = require('http'); //get a module
var random = require('./random');//exported a function
var output = require('./output');
var convert = require('./convert');//exported an object
//console.log(random(1, 1000000));

http.createServer(function(req, res) {
  res.writeHead(200); //head
  res.write(output.amount());
  res.write(output.finishedProduct());
  res.end();
}).listen(3000);
