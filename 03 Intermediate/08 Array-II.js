// Arrow Functions;
var isEven = (element) => {
  return element % 2 === 0;
};

console.log(isEven(3));

//CALLBACK
var result = [2, 4, 6, 8].every(isEven  /*This is a callback */ );
console.log(result);

//When we user curly bracket with arrwo functions we will write RETURN
var result2 = [2, 3, 4, 10].every((e) => {
  return e % 2 === 0;
});
console.log(result2);


//CALLBACK
// When we use round brackets with arrow fucntions we dont write RETURN
var result3 = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(result3);
