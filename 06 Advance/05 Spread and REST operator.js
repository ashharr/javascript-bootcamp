// create a fn like Math.max() which takes  multiple input values
// var max1 = Math.max(2, 3, 5, 8, 9, 1);
// console.log(max1);
// var myObj = {};
// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, x: 8, y: 6 });
// console.log(myObj);

function sumOne(a, b) {
  return a + b;
};

var myA = [2,3,5];
console.log(sumOne(...myA));  //SPREAD operator args in python if many arguments are there it takes it and assigns it to each argument till all are assigned rest are ignored

function productOfTwoSumOfRest(a,b,...args){  //This is REST poerator lets you take many input for a given function
    mul = a*b;
    let sum = 0;
    for (const arg of args) { //To access all arguments one by one 
        sum += arg;
    };
    return [mul, sum];
};

const [product, sum] = productOfTwoSumOfRest(2,3,1,2,3);
console.log(product, sum);
