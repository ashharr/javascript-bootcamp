// PROMISES resolve,reject & ASYNC, AWAIT

const uno = () => {
  return "I am ONE";
};

// const dos = async() => {
//   setTimeout(() => {
//     return "I am TWO";
//   }, 3000);
  
// };
const dos = () => {
    return  new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("I am Two");
        }, 3000);
    });
  };
const tres = () => {
  return "I am THREE";
};

const callMe =  async() => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};
callMe();

// ***** IMPORTANT *****
// Promise is used to promise a resource that might/might not be available in the near future
// The function is async function and whenever we call a function that has a Promise Object we 
// use await to wait out until the promise object is resolved othewise its rejected
// NOTE: await is only valid in async function