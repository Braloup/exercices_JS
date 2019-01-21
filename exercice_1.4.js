const readLineSync = require("readline-sync");

let userName = readLineSync.question("What is your name? ");
let userFirstName = readLineSync.question("What is your firstname? ");
let userCity = readLineSync.question("Where do you come from? ")

console.log("You are " + userFirstName + " " + userName + ". And you're come from " + userCity + ".");
