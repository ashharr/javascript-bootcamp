var myMap = new Map
myMap.set(1, "EK");
myMap.set(2, "DO");
myMap.set(3, "TEEN");
myMap.set(4, "CHAAR");

for ( let [k,v] of myMap.entries()) {
    console.log(k,v);
}
console.log("");
for (const key of myMap.keys()) {
    console.log(key);
}
console.log("");
//DELETE KEY:VALUE PAIR
myMap.delete(4);
console.log(myMap);

//MODIFY VALUE BY KEY
myMap.set(2, "CHAAR/DO");
console.log(myMap);