class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    // we make use of # to make it private variable
    #courseList = [];
    meta = {websiteName: "Sleeves7.com", hosting: "hostinger.com"}
    getInfo() {
        return { name: this.name, email: this.email, coursesEnrolled: this.#courseList };
    }
    enrollCOurse(courseName) {
        this.#courseList.push(courseName);
    }
    getCourseList(){
        return this.#courseList;
    }
    static login(){ //no wthis method cannot be inherited to Sub-admin child
        return "You are now Logged In."
    }
}
module.exports = User;

// const rock = new User("therock", "DtherockJ@rock.com");
// rock.enrollCOurse("Angular JS");
// rock.enrollCOurse("Python ML");

// console.log(rock.getCourseList()); //can access private fields through getters
// console.log(rock.#courseList); //cant access directly cause its private

// INHERITANCE
class subAdmin extends User {
    constructor(name, email){
        super(name,email);
    }
    getAdminInfo(){
        return "I am a Sub-Admin";
    }
    login(){
        return "You are logged in as a SUb-Admin."
    }
}

const tom = new subAdmin("tom", "tom@tommy.com");
console.log(tom.getAdminInfo());
tom.enrollCOurse("Javascript Fundamentals")
console.log(tom.getCourseList());
console.log(tom.login());  //Runs login from child class
console.log(tom.meta);

