// Something that gives you a value some time in the future



// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"));

const emailRef = document.querySelector(".email");

/**
 * // 1. Then     uncommon
 * 
 * fetch("https://jsonplaceholder.typicode.com/users/1")   //this is a promise    //fetch() fetching the backend, fetch = holen/bringen
  .then((response) => {                                 //"unlocking" the promise with .then; accetpting the argument but its pure gibberish for the frontend, gibberich = Unlesbar bzw "Quatsch"
    return response.json();                    // with return response.json(), the whole thing (bis dahin) gets repsonse.json also ein promise
  })                                           // so what do we do to unlock a promise?
 // once of all this stuff above is done, 
 // we can absolutely use the data from the backend 
 // and that is how to hit a back-end API
  .then((data) => {                            // we need to use .then again; It accepts our callback, inside of the argument has the data that we´re looking for.
    console.log(data);                         // let´s console.log the data; 
    emailRef.innerHTML = data.email            // data.email nehme ich aus der Console, und bringe es zum emailRef.innerHTML, also zur HTML Datei ins Frontend
                                               // damit erscheint die Emailadresse jetzt auf der Webseite
});

*/
// 2. Async/Await   Common One
async function main() {
const response = await fetch("https://jsonplaceholder.typicode.com/users/1")     //await = erwarten    //await needs to be inside an "async function"; we can store it in a variable
const data = await response.json();    //its for frontend gibberish if there is no .json() after the variable, also verpacken wir das entschlüsselte wieder in eine variable namens data
console.log(data);                      //somit haben wir in der Console die Daten entschlüsselt und haben zugriff darauf für das frontend

emailRef.innerHTML = data.email         // data.email nehme ich aus der Console, und bringe es zum emailRef.innerHTML, also zur HTML Datei ins Frontend
                                        // damit erscheint die Emailadresse jetzt auf der Webseite
}
// EVERYONE USES ASYNC (finde ich auch pesönlich viel leichter)

main()