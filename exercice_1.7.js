const readLineSync = require("readline-sync");

let userShoesSize = readLineSync.question("Please enter your shoes size: ");
let userBierthYear = readLineSync.question("Please enter your birth year: ");

let finalNumber = ((((userShoesSize * 2) + 5) * 50) - userBierthYear) + 1766;

console.log("After a lot off different calcul, the result is: " + finalNumber);
