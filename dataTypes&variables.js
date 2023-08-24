
// STRING

console.log("Hello World") //immer mit quotes, also anführungszeichen
console.log("Hello" + " Ömsen") // Quotes => String
console.log("100")
console.log("Ömer"[0]) // [0] 1. index genommen von Ömer
console.log("Ömer Ay"[6]) 
console.log("12345".length) //wie viel Zeichen ein String hat

let str = "Ömer"
console.log(str[1])     // das selbe wie console.log("Ömer Ay"[6]) 
console.log(str.length) //das selbe wie console.log("12345".length)
console.log(str[str.length - 1]) //gibt immer letzte Zeichen vom index
console.log(str[3 - 1])


// Variables

// String, Numbers etc. everything are in variables
// store data

// var     !!var ist outdated, wird kaum noch benutzt
// let      we can literally use it anywhere
// const    you can not reassign another value to it, const = konstant

// !!never put x or y as variables, we are not in math

let testName = "Ömer Ay"        // in quotes yani its a string

// variablegeben, testName ist Variable Name und kann alles sein

let temperature = 20            // Zahl
let isRaining = true            // boolean
let planet = "Earth"            // String

temperature = temperature + 2

console.log(temperature)


// ---------------------------------------------------------------------

// Mini Aufgabe

// F = C x 1.8 + 32

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32

console.log(fahrenheit);            // semicolons are not neccessary


// ----------------------------------------------------------------------

// EQUALITY

// "==" and "==="

// "="   one equal reassign a value, z.B:     let firstName = Ömer

// "=="  Double equals checks the values        rarely used

// "===" Triple equals checks the values and the types      common used, a bit more type safety

let test = "1" == 1

console.log(test);          //console gibt "true" aus


let test2 = "1" === 1

console.log(test2);         //console gibt "false" aus


let test3 = "1" !== 1       // oposite of triple equals

console.log(test3);         

let test4 = "1" != 1       // oposite of double equals

console.log(test4);         


let test5 = !true       // oposite of true

console.log(test5);         