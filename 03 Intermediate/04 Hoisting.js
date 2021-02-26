tipper("80");


//Another way of defining function in JS

// var tipper = function (a){
//     var bill = parseInt(a);
//     console.log(bill + 5, " $ is the tip." );
// } 

//Since tipper is a function but it is declared as a variable function so it wont run
// This will run because function declarations are scanned and made available

 function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5, " $ is the tip." );
}

console.log(names);     // Undefined because variable declarations are all scannned and 
var names = "Ashhar";   // made undefined until assigned value 
                      
console.log(names);

function myName(){
    var names = "Orochimaru"
    console.log(names);
}
myName();

console.log(names);