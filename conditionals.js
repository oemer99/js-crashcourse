let subscribed = false
let loggedIn = true

if (subscribed === true) {
    console.log("shot the video");
    
}
else if (loggedIn === true) {
console.log("tell the user to upgrade their subscription")
    
}
else { // you can have a if statement without else, aber kein else kann alleine stehen
    console.log("tell user to log into account");
}
// ONLY ONE OF THEM CAN RUN, entweder if, else if oder else, keins kann gleichzeitig laufen

// ------------------------------------------------------------------

let cash = 50
let price = 40

if (cash > price) {
    console.log("you paid extra -here's your rest change");
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!");
}

let cash2 = 40
let price2 = 40

if (cash2 > price2) {
    console.log("you paid extra -here's your rest change");
}
else if (cash2 === price2) {
    console.log("you paid the exact amount, have a nice day!");
}

let cash3 = 30
let price3 = 40

if (cash3 > price3) {
    console.log("you paid extra -here's your rest change");
}
else if (cash3 === price3) {
    console.log("you paid the exact amount, have a nice day!");
}

else {
    console.log("not enough money - you still owe x dollars");
}

// Mini aufgabe


let cash4 = 100
let price4 = 400
let difference = cash4 - price4

if (cash4 > price4) {
    console.log(`you paid extra -here's ${difference} rest change`);
}
else if (cash4 === price4) {
    console.log("you paid the exact amount, have a nice day!");
}
else {
    console.log(`not enough money - you still owe ${difference * -1} dollars`);
}

/*

COMPARISON OPERATORS
Comparing two values with each other

    ==  equal values
    === equal values and type
    !=  not equal
    !=  not equal value and equal type
    > greather than
    < less than
    >= greater than or equal to
    <= less than or equal to


LOGICAL OPERATIORS
&& checks if the left *and* right side of the comparison is true

true && true => true
true && false => false
false && true => false
false && false => false
*/

let cash6 = 50
let price6 = 40
let isStoreOpen = true
if (cash >= price && isStoreOpen === true) {
    console.log("we have enough cash to buy the products and the store is open");
}

/* 

|| checks if the left *or* right side of the comparison is true 

true || true => true
true || false => true
false || true => true
false || false => false
*/

let cash7 = 50
let price7 = 40
let isStoreOpen2 = true
if (cash7 >= price7 || isStoreOpen2 /*ist das selbe wie === true, wenn man gegenteil fragen will dann mit !isStoreOpen2*/) {
    console.log("print the receipt");
}


/*

Falsy Values

A falsy value is considered as "false" when converted to a boolean

undefined
null
NaN
0
""
false


Truthy values

A truthy value is considered as "true" when converted to a boolean

10
3.14

"Testtest"
"false"
"0"

[]
{}


*/

if ("blala") {
    console.log("print the receipt");
    
}
else {
    console.log("falsy value");
}

if ("") {
    console.log("print the receipt");
    
}
else {
    console.log("falsy value");
}

// Oder noch einfacher...

let val ="Ömer"

if (val) {
    console.log(!!val);         // Mit double !! kann man schauen ob es true oder false ist in der Konsole
                                // true da val = "Ömer"
}

let val2 =""

if (val2) {
    console.log(!!val2);        //false da val2 "" ist und somit es zu else geht und in der Konsole false gibt
}
else {
    console.log(!!val2);
}

// -----------------------------------------------------


// Ternary Operators
// A shortcut for an if else condition

// isObese ? "unhealty" : "healty"
// subscribed? "show video" : "hide video"

let hot = false
hot ? console.log("weather is hot outside") : console.log("weather is cold");




let subscribed2 = true
let loggedIn2 = false

let str = subscribed2 || loggedIn2 ? "show the video" : "hide the video"
console.log(str);

// Mini Aufgabe

let geld = 50
let preis = 40
let istGeschäftOffen = true

if (geld >= preis && !!istGeschäftOffen) {
    console.log("give receipt");
}
else {
    console.log("do not give receipt");
}

let geld2 = 50
let preis2 = 40
let istGeschäftOffen2 = false

if (geld2 >= preis2 && !!istGeschäftOffen2) {
    console.log("give receipt");
}
else {
    console.log("do not give receipt");
}


// Gängigste Methode 
let str2 = geld2 >= preis2 && istGeschäftOffen2 ? "give receipt" : "do not give receipt"
console.log(str2);
