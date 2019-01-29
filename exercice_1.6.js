/*
**Ask two integers to the user. Display the rest of the integer division of the two numbers.
*/

const readLineSync = require("readline-sync");//Call the module to ask question to the user.

let firstNumber = readLineSync.question("Please enter a float nunber: ");
let secondNumber = readLineSync.question("Please enter a second float number: ");

let totalNumber = firstNumber / secondNumber;

console.log("The division of " + firstNumber + " and " + secondNumber + " is " + parseInt(totalNumber) + " after keep integer part.");
