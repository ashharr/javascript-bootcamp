// // context = window or global
// function init() {
//     // context = init
//     var firstName = "ashhar";
//     function sayFirstName() {
//         // context = sayFirstName
//       console.log(firstName);
//     }
//     return sayFirstName;
//   }

//   var value = init();
//   value();

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = doAddition(4);
result = add5(5);
console.log(result);

console.log(doAddition(5)(5)); //this is called as curring
