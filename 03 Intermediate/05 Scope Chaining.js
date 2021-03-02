var name = "Ashhar"; // Global scope is Grandfather
console.log("Line no 2 : Hello ", name);

function Father() {
//   var name = "Mr A";
  console.log("Line no 6 : Hello ", name);
  function Son() {
    //   var name = "Mr S"
      console.log("Line no 9: Hello ", name);
  }
  Son()
}
Father();
