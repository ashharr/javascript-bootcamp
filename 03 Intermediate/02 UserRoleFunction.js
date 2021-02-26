function getUserRole(name,role){
    switch(role){
        case "admin":
            return `${name} is admin with all access.`;
        case "subadmin":
            return `${name} is subadmin with create/delete course access.`;
        case "testprep":
            return `${name} can create/delete tests`
        case "user":
            return `${name} can consume content`
        default:
            return `${name} is a trial user`
        }
}

console.log(getUserRole("Ashhar", "admin"));