// What is a funciton in Javascript?
// It is a block of code designed to perform a particular task

// Function definition
function welcomePersontoFES(firstName, lastName){
     console.log(`Welcome to FES, ${firstName} ${lastName}`);
}

// Call the function
welcomePersontoFES("David", "Leaf");         // the number of arguments needs to be equal like in the function
welcomePersontoFES("Ömer" , "Ay");


function fn() {
     console.log("my function");
}

fn();               // brauchen keine console.log um es in der Konsole auszugeben


function sumOfTwoNumbers(num1, num2) {
     return num1 + num2
}

console.log(sumOfTwoNumbers(10, 10));

// Mini Aufgabe

/**
 * Create a funciton that converts to Fahrenheit
 * 
 * Celsius to Fahrenheit formula:
 * 
 * F = C x 1.8 + 32
 * 
 * @example
 * convertCelsiusToFahrenheit(0) => 32
 * convertCelsiusToFahrenheit(10) => 50
 * convertCelsiusToFahrenheit(30) => 86
 */


function convertCelsiusToFahrenheit(celsius){
      return celsius * 1.8 + 32
}
console.log(convertCelsiusToFahrenheit(0));
console.log(convertCelsiusToFahrenheit(10));
console.log(convertCelsiusToFahrenheit(30));

// oder auch

const convertCelsiusToFahrenheit2 = (celsius) => {          // "() => {}" ist eine Arrow-Function
     return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit2(0));
console.log(convertCelsiusToFahrenheit2(10));
console.log(convertCelsiusToFahrenheit2(30));

