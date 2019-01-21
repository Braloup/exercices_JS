const readLineSync = require("readline-sync");

let firstNumber = readLineSync.question("Please enter a float nunber: ");
let secondNumber = readLineSync.question("Please enter a second float number: ");

let totalNumber = parseInt(firstNumber) * secondNumber;

console.log("The product of " + parseInt(firstNumber) + " and " + secondNumber + " is " + totalNumber);
