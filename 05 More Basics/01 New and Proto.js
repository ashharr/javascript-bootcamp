var userBase = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`The course count of ${this.firstName} = ${this.courseCount}.`);
    };
};

const ashhar = new userBase("ashhar", 6);
console.log(ashhar);
ashhar.getCourseCount()

//without new keyword the context remains as window (in browser) or undefined in node example:

const ashhar2 = userBase("ashhar2", 7);
console.log(ashhar2); //undefined

//Injesting new function onto the userBase context using prototype
userBase.prototype.getFirstName = function(){
    console.log(`First Name of user is ${this.firstName}.`);
};

//Before calling a getter from an object we need to check whether the var we are tryna fetch is available in that object
if (ashhar.hasOwnProperty("firstName")) { 
    //its better to check this condition first to avoid mistakes
    ashhar.getFirstName();
}
    