var random = require('./random');
var convert = require('./convert');

var output = {
finishedProduct: function(){ //The first function should call Module 2,
// passing the result of Module 1 as an argument.
return convert(random(1,1000000));
},


amount: function() {
  return "Account balance: \n";
}
};

module.exports = output;//

// The first function should call Module 2,
// passing the result of Module 1 as an argument.
// The second function should return the text “Account balance: \n”.

//3rd Module
