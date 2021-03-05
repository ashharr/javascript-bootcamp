var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

var count = 1;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
}, 10);

setTimeout(() => {
  followers.innerHTML = "Followers on Instagram. Congrats!";
}, 5500);
