const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// we have to create a function for this
// const colorBG = window.getComputedStyle(red).backgroundColor;
// In JS we use getComputedStyle to fetch the CSS stylinh properties if any available wrapped along the variable

var getBGColor = (element) => {
  return window.getComputedStyle(element).backgroundColor;
};

console.log(getBGColor(red));
console.log(getBGColor(violet));
console.log(getBGColor(orange));
console.log(getBGColor(pink));
console.log(getBGColor(center));
// OUTPUT:
// scripts.js:rgb(228, 66, 54)
// scripts.js:20 rgb(139, 120, 230)
// scripts.js:21 rgb(234, 119, 115)
// scripts.js:22 rgb(187, 44, 217)
// scripts.js:23 rgb(66, 66, 66)

/*
red.addEventListener("mouseenter",  () => {
    center.style.background = getBGColor(red);
});  
*/

// Now lets create a function for this to do it for all the colors

var magicCenterColorChanger = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};

magicCenterColorChanger(red, getBGColor(red));
magicCenterColorChanger(violet, getBGColor(violet));
magicCenterColorChanger(pink, getBGColor(pink));
magicCenterColorChanger(orange, getBGColor(orange));
magicCenterColorChanger(cyan, getBGColor(cyan));