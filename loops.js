// What are Loops used for?
// Repeat the same code over and over again


//DRY Dont rpeat yourself

// What are the types fof loops in JavaScript?

// for loop     most favourit "for my first job I only need for loop"
// while loop
// do while

let count = 1;

while(count <= 15){
    console.log("this ran");
    count = count + 1

}
let zahl = 1
while (zahl <= 20){
    console.log(zahl);
    zahl = zahl + 1
}

//----------------------------------------------------

for (let i = 0; i < 100; i++) {
    console.log(i + 1);
}

// selbe wie

for (let i = 1; i < 100; i++) {
    console.log(i);
}


/* 

INTERVIEW QUESTION


Write a for-loop that loops through 1 to 20
If the number is divisible by 3, print "Fronted"
If the number is divisible by5, print "Simplified"
If the number is divisible by 3 and 5, print "Frontend Simplified"
If the number is *not* divisible by either 3 or 5, print the number

@example

1 => 1
2 => 2
3 => "Fronted"
4 => 
5 => "Simplified
...
15 => "Frontend Simplified
...
20 => "Simplified"
"
*/

for (let i = 1; i <= 20; i++){

    if  (i % 5 === 0 && i % 3 === 0 ) {
        console.log(`${i} => Frontend Simplified`);
    }

    else if (i % 3 === 0) {
         console.log(`${i} => Frontend`);
    }

    else if (i % 5 === 0) {
        console.log(`${i} => Simplified`);
    }

    else {
        console.log(i);
    }

}

// ----------------------------

/**
 * Print out every character from the string:
 * "Frontend Simplified
 * 
 * @example
 * "F"
 * "r"
 * "o"
 * ..
 * "e"
 * "d"
 */

const str = "Frontend Simplified"           //str.length = 19

for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}




