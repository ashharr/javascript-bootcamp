const website = [
    "YouTube",
    "Facebook",
    "Netflix",
    "Amazon",
    "Uber",
    "Lyft",
];

//for of
for (const i of website) {
    console.log(i);
}

const symbols = {
    ig: "Instagram",
    fb: "Facebook",
    yt: "YouTube",
    amzn: "Amazon"
}

//for in
for (const key in symbols) {
    console.log(` Key = ${key} and Value = ${symbols[key]}`);
}