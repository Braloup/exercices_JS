/*
**Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

**You will have to perform a search on Google to know how to only keep the integer part of a number.
*/

const readLineSync = require("readline-sync");//Call the module to ask question to the user.

let firstNumber = readLineSync.question("Please enter a float nunber: ");

let secondNumber = readLineSync.question("Please enter a second float number: ");

let totalNumber = parseInt(firstNumber) * secondNumber;

console.log("The product of " + parseInt(firstNumber) + " and " + secondNumber + " is " + totalNumber);
