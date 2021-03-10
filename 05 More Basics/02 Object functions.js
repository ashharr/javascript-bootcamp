//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// it can also be a function with arguments ⬇
var Employee = {
    name:"",
    department: "",
    getName: function(){
        console.log(`Name of the employee is ${this.name}`);
    },
};

//Now not using new and using 
//1) Object.create
var emp1 = Object.create(Employee);
emp1.name = "Ashhar";
emp1.department = "Technology";
emp1.getName();

//2)Object.defineProperty
Object.defineProperty(Employee, "salary", {
    value: 0,
    writable: false
})
console.log(emp1.salary);