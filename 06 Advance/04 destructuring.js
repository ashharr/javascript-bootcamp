//called as variable unpacking in python
// 1) Array unpacking
// no rule such as to keep the unpacker variable name same as the value of elements since there is no key here
var user = ["Ashhar", 4, "sub-admin"];

var [name, courseCount, role] = user;
console.log(name, courseCount, role);

// 2) Object unpacking
//keep the unpacker list variables name same as particular elements  for location.street eg:  const [street,..]  = location  
const location = {
  street: "Springboards 32",
  city: "Mumbai",
  state: "Maharashtra",
};
const { street, city, state } = location;
console.log(street, city, state);
