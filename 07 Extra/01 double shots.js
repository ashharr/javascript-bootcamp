const loginGoogle = "Google";
const loginFacebook = null;

if (loginGoogle) { // string truthy value
    console.log("THIS IS BLOCK 1");
}
if (loginFacebook) { // falsy value null
    console.log("THIS IS BLOCK 2");
}
if (!!loginFacebook) { //falsy converted to boolean false value which is the best practise
    console.log("THIS IS BLOCK 3");
}
