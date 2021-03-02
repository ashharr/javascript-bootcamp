var user = {
  firstName: "Ashhar",
  lastName: "Shaikh",
  role: "Developer",
  loginCount: "69",
  googleSignIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    return this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} has enrolled in ${this.courseList.length} course(s)`;
  },
  displayCourseList: function () {
    var stringCourse = "";
    for (let i = 0; i < this.courseList.length; i++) {
      stringCourse += this.courseList[i] + ", ";
    }
    return stringCourse;
  },
  info: function () { //ternary operator
    return this.googleSignIn
      ? `${this.firstName} has logged in ${this.loginCount} times and has enrolled in ${this.displayCourseList()} courses and is signed in from Google`
      : `${this.firstName} has logged in ${this.loginCount} times and has enrolled in ${this.displayCourseList()} courses and is NOT signed in from Google`;
  },
};

// console.log(user.firstName);
user.buyCourse("Node JS");
user.buyCourse("MERN Full stack");
// console.log(user.getCourseCount());
console.log(user.displayCourseList());
console.log(user.info());

