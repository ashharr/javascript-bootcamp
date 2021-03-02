var countries = ["India", "USA", "Japan", "Russia"];

//another way of defining arrays
var states = new Array("Maharashtra", "UP", "Tamil Nadu", "Orissa");

console.log(states[1]);
console.log(states.slice(0,2)); //slicing of array index

console.log("The length of the array states = ", states.length,"\n");

var user = ["ashhar", "shaikh.ashhar6@gmail.com", 3, 34, true];

var len = user.unshift("New Value");
console.log("unshift returned ", len, ". New Array = ", user ,"\n");
user.shift();
console.log("Array after shifting", user);

var popped = user.pop();
console.log("Array after popping = ", user,"\n");

user.push(true);
console.log("Array after pushing = ", user, "\n");
