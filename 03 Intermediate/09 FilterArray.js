var testArray = [2, 4, 6, 8, 9, 10, 50, 49];
console.log(testArray.fill(0));

const myArray = [22, 35, 64, 55, 89, 66, 88];
const result = myArray.filter((num) => num >= 55);
//All the elements that satisfy will be filtered and rest will be removed.

console.log(result);

//Slicing and Splicing

var users = ["Ashhar", "Zayd", "Faisal", "Imran", "Mufeed"];

users.slice(1, 3);
console.log();

users.splice(1, 2, "Ibrahim"); // start from 1 count 2 elements delete them and return the deleted elements
//inplace add argument string "Ibrahim"
console.log(users);
