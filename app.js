console.log("test");

function celsiusToFahr() {
  let celsius = window.prompt("Let's convert Celsius to Fahrenhit. how many degrees?")
  let fahr = (celsius * 9 / 5) + 32;
  console.log(celsius + " Celsius degrees are " + fahr + " Fahrenhit.");
}

celsiusToFahr();