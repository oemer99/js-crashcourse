// What are arrays?

// Data structure that can hold multiple data values in one variable

// let arr = []     das ist ein Array

let arr = [20, 30, 40, 50, 100]

// First element of array:
console.log(arr[0]);

// Last element of array:
console.log(arr[arr.length - 1]);

// Add element onto end of array:
arr.push(200)

arr.filter(() => {})    //Syntax of a callback function


// lange version
let newArr = arr.filter(element => {            //filter method only applies when its true
    return element < 50; 
})
console.log(newArr);


// one line version
let newArr2 = arr.filter(element => element < 50)

console.log(newArr2);

/** Aufgabe
 * 
 *  Filter out all the "FAIL" elements in an array
 * 
 * @examples
 * ["A+", "A", "FAIL"] => ["A+", "A"]
 * ["FAIL", "FAIL". "B"] => ["B"]
 * ["FAIL"] => []
 */

let grades = ["A+", "A", "FAIL"]

let newGrades = grades.filter(element => element !== "FAIL")
console.log(newGrades);

let grades2 = ["FAIL", "FAIL", "B"]

let newGrades2 = grades2.filter(element => element !== "FAIL")
console.log(newGrades2);

let grades3 = ["FAIL"] 

let newGrades3 = grades3.filter(element => element !== "FAIL")
console.log(newGrades3);

// ----------------------------------------------------------------

let gradesArr = ["A+", "A", "FAIL"]

for (let i = 0; i < gradesArr.length; i++) {
        console.log(gradesArr[i]);
    
}

/** Aufgabe
 * 
 *  Filter out all the "FAIL" elements in an array
 * WITHOUT USING THE ARRAY.FILTER METHOD
 * 
 * @examples
 * ["A+", "A", "FAIL"] => ["A+", "A"]
 * ["FAIL", "FAIL". "B"] => ["B"]
 * ["FAIL"] => []
 */

let gradesArr2 = ["A+", "A", "FAIL"]

let goodGrades = []

for (let i = 0; i < gradesArr2.length; i++) {
        if (gradesArr2[i] !== "FAIL") {
            goodGrades.push(gradesArr2[i])
        }
}
console.log(goodGrades);

// ----------------------------------------------------------

let arr2 = [1, 4, 9, 16]

// lange version
let newArray = arr2.map((element) =>{          // .map, to turn each one of the element to something else
    console.log(element);
    return "dog";
})
console.log(newArray);

// one line Version
let newArray2 = arr2.map( element => "dog")
console.log(newArray2);

// Mini Aufgabe
/**
 * Turn each element in an array of dollars into cents
 * 
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */

let dollars = [1, 5, 10, 3]

// let cents = dollars.map( (element) =>{
//     console.log(element);
//     return element * 100
// })
// console.log(cents);

let cents = dollars.map (element => element * 100)
console.log(cents);

let dollars2 = [0, 10, 20] 

// let cents2 = dollars2.map (element => {
//     console.log(element);
//     return element * 100
// })
// console.log(cents2);

let cents2 = dollars2.map (element => element * 100)
console.log(cents2);

// -------------------------------------------------------

// WITHOUT USING THE MAP METHOD
// "BRUTE FORCE SOLUTION"

let euro = [1, 5, 10, 3]

let zents = []

for (let i = 0; i < euro.length; i++) {
    zents.push(euro[i] * 100)
}
console.log(zents);