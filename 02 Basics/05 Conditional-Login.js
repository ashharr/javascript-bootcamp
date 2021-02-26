
var email = false, facebook = true, google = false;


// if(facebook){
//     console.log("Login Success");
// }else if(google){
//     console.log("Login Success");
// }else if(email){
//     console.log("Login Success");
// }
// else{
//     console.log("Login Failed");
// }

if( email || facebook || google){
    console.log("Login Success");
}else{
    console.log("Login Failed");
}