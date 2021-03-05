user = {
    firstName : "Ashhar",
    courseCount : 4,
    getCourseCount : function(){
        console.log("Line 5 this = ",this);
        function sayHello(){
            console.log("\nHELLO");
            console.log("Line 9 this = ", this);
        }
        sayHello();
    },
}
user.getCourseCount();