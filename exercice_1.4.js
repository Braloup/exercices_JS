/*
**Make this same thing as Exercise 2 but this time ask the user for the name, the first name and the city.
*/

const readLineSync = require("readline-sync");//Call the module to ask question to the user.

let userName = readLineSync.question("What is your name? ");

let userFirstName = readLineSync.question("What is your firstname? ");

let userCity = readLineSync.question("Where do you come from? ")

console.log("You are " + userFirstName + " " + userName + ". And you're come from " + userCity + ".");
