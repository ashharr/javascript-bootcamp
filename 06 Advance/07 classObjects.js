const User = require("./06classjs.js");

const ashhar = new User("Ashhar", "shaikh.ashhar6@gmail.com");

console.log(ashhar.getInfo());

ashhar.enrollCOurse("Complete Python Development");
ashhar.enrollCOurse("React JS");
ashhar.enrollCOurse("Express JS and Mongo DB");

// ashhar.#courseList.forEach((course) => {
//     console.log(course);
// });

console.log(ashhar.getCourseList()); //undefined bacause its private

