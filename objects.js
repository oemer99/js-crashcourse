// What are objects in javascript?
// Used to store multiple properties in one variable

let userFirstName = "Ömer";
let userLastName = "Ay";
let userDiscordId = "Ömer #0001";
// ------------------------------------------------------


// let test = {}, dies ist ein Objekt ==> immer mit {}

let users = [
  {
    username: "Ömer",
    email: "oemeray99@outlook.de",
    password: "test123",
    subscritionStatus: "VIP",
    discordId: "Ömer Ay#0001",
    lessonsCompleted: [0, 1],
  },
  {
    // username: "Mitri",
    // email: "mitri11@outlook.de",
    // password: "mitri",
    // subscritionStatus: "VIP",
    // discordId: "Mitri Ay#0001",
    // lessonsCompleted: [0, 1]
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      // wenn die email vom login = vom users[i] ist, gebe mir den user an
      console.log(users[i]);
      if (users[i].password === password) {
        // wenn das password vom login = vom users[i] ist, gebe mir den user an
        console.log("log the user in - the details ar correct");
      } else {
        console.log("password incorrect");
      }
      return;
    }
  }
  console.log("could not find an email that matches");
}
login("oemeray99@outlook.de", "test123");

// Mini Aufgabe

/**
 * Create a register function that accepts:
 * username
 * email
 * password
 * subscriptionStatus
 * discordId
 * lessonsCompleted
 *
 * Inside your register function:
 * Create a user object
 * Push this user object onto the "users" array
 */

function register(user) {
      users.push(user);
  }

register({
  username: "Markus",
  email: "Markus@gmail.com",
  password: "test1233",
  subscriptionStatus: "VIPIMP",
  discordId: "Markus#01",
  lessonsCompleted: [0, 1]
});

// log the new user in
console.log(users);
