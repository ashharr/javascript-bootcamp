

var user_type = "admin" 


switch(user_type){
    case "admin":
        console.log("You get access full access");
        break;
    case "sub-admin":
        console.log("You get access to create/delete courses");
        break;
    case "testprep":
        console.log("You get acccess to create/delete tests");
        break;
    case "user":
        console.log("You get access to consume content");
        break;
    default:
        console.log("Trial user");
        break;
}
