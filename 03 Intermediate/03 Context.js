// Context exists always in Javascript whereever you run the JS code
// In browser consol it is called as Window when running from node
// It is not called as window , here the global context exists but it isnt called window

sayHello("Ashhar");

function sayHello(name){
    console.log(`Hello ${name}.`);
}

// this runs due to global context

var myName = "Ashhar"

if(myName == window.myName){            // doesnt run here but it runs on browser 
    console.log("This is true");        // throws ReferenceError: window is not defined
}

// Browser
// var myName = "Ashhar"
// myName
// > "Ashhar"
// myName === window.myName
// > true