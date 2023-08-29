// DOM (Document Object Model)
// What is the DOM?
// The DOM allows you to access and change the styling and content of elements on your website


// First way of accessing an element - most used one
console.log(document.querySelector("#title"));
console.log(document.querySelector(".title"));
console.log(document.querySelector("h1"));
// (.) für classes, (#) für ids


// Second Way of accessing an element - uncommon
console.log(document.getElementById("title"));

//Change HTML
document.querySelector(".title").innerHTML += " Frontend Simplified"

//Change CSS
document.querySelector(".title").style.fontSize = "50px"

function changeTitleToRed(){
    document.querySelector(".title").style.color = "red"
}

function toggleDarkMode(){
    document.querySelector("body").classList.toggle("dark-theme");
}