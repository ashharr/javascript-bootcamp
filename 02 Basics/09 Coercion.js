console.log(2 + 2);
console.log(2 + "2");
console.log("2" + "2");

// == vs ===
// == check only values whereas === checks values as well as type. its used for strict type checking

if (2 == "2") {
  console.log('For == : 2 and "2" are equal');
}
if (2 === "2") {
  console.log('For == : 2 and "2" are equal');
} else {
  console.log('For ===: 2 and "2" are not equal. Type is different');
}
