const readLineSync = require("readline-sync");

let firstNumber = readLineSync.question("Please enter a float nunber: ");
let secondNumber = readLineSync.question("Please enter a second float number: ");

let totalNumber = firstNumber / secondNumber;

console.log("The division of " + firstNumber + " and " + secondNumber + " is " + parseInt(totalNumber) + " after keep integer part.");
