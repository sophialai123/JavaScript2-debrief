// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time 
// hint; you will need to research the Date object to get the current date! (https://www.w3schools.com/jsref/jsref_obj_date.asp)

// 2. That prints “I’m ready” after 5 seconds.
// hint: you will need to research the setTimeout JavaScript function. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C


// solution 1:
let date = new Date();

let day = date.toISOString().split("T")[0];
console.log(day);

let time = date.toLocaleTimeString();
console.log(time);
console.log(date.toLocaleDateString());

let CurrentDayTime = `The current date is: ${day}, and time is: ${time}.`

console.log(CurrentDayTime);



//solution 2:
function myFunction() {
  console.log(`I am ready after ${timeOut}`);
}

//pass a higher order function, delay for 5 seconds on the broswer and on the console.
let timeOut = setTimeout((myFunction), 5000);



// solution 3:
function temperatureCovert(num) {
  return num;
}

function getCelsius(celsius) {
  //return from Celsius to Fahrenheit
  return temperatureCovert(celsius * 9 / 5) + 32
}

function getFahrenheit(num) {
  //return from Fahrenheit to Celsius 
  return temperatureCovert((num - 32) * 5 / 9);

}


console.log(getCelsius(15));
console.log(getFahrenheit(59));


