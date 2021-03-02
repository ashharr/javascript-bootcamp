const myStates = [
  "Assam",
  "Rajasthan",
  "Maharashtra",
  1947,
  "Uttarakhand",
  "Jammu Kashmir",
  "Gujarat",
];

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== "string") continue; //goto next iteration
  console.log(myStates[i]);
}

//while loop
let i = 0;
while (i < myStates.length) {
  console.log(myStates[i]);
  i += 1;
}

//do while loop
do {
    console.log(myStates[i]);
    i += 1;
} while (i < myStates.length);