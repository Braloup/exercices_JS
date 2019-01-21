const readLineSync = require("readline-sync");

let numberOfQuestion = 4;

let userFirstNamneChoice = readLineSync.question("Enter the first name you wish to start your pretty story: ");
console.log((numberOfQuestion -= 1) + " more questions");

let userActionChoice = readLineSync.question("Enter a conjugated verb to start the action of your pretty story: ");
console.log((numberOfQuestion -= 1) + " more question");

let userComplementChoice = readLineSync.question("Enter a complement to bring your pretty story to life: ");
console.log((numberOfQuestion -= 1) + " more question");

let addAString = readLineSync.question("Enter a phase so that your pretty story becomes exciting: ");

console.log(userFirstNamneChoice + " " + userActionChoice + " " + userComplementChoice + ".");
console.log(addAString);
