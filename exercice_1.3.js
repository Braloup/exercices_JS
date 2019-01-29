/*
**Ask the user to enter its first name and display a message saying "Hello first name".
*/

const readLineSync = require("readline-sync");

let userFirstName = readLineSync.question("Enter your first name please. ");

console.log("Hello " + userFirstName);
