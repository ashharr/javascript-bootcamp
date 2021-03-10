// context = window or global
function init() {
    // context = init
    var firstName = "ashhar";
    function sayFirstName() {
        // context = sayFirstName
      console.log(firstName);
    }
    sayFirstName();
  }
  
  init();
  