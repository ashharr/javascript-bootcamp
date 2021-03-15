const arr = [3, 4, -2, 10, -7];
console.log(arr.sort());

var mySort = (a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
};

console.log(arr.sort(mySort));

function batmanGameOrder(a, b) {
  var batman = [
    "Arkham Origins",
    "Arkham Origins Blackgate",
    "Assault On Arkham",
    "Arkham Asylum",
    "Arkham City",
    "Arkham Knight",
  ];

  return batman.indexOf(a) - batman.indexOf(b);
}

var games = [
  "Arkham Knight",
  "Arkham Asylum",
  "Arkham Origins",
  "Arkham Origins Blackgate",
];

games.sort(batmanGameOrder);
console.log(games);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// https://docs.oracle.com/cd/B10501_01/server.920/a96529/appb.htm#951505

// https://developer.apple.com/documentation/swift/unicode/scalar/properties/3081577-isemoji
