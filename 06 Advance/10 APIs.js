fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("DATA is :", data);
    var joke = data.value;
    console.log("JOKE:", joke);
  })
  .catch();
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise