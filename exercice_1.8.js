/*
*Create a "Story Teller".

**Ask questions to the user about different things. Store the results he gives to you. Display them in a way that it creates a fun story!

**Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked.
*/


const readLineSync = require("readline-sync");//Call the module to ask question to the user.

let numberOfQuestion = 4;

let userFirstNamneChoice = readLineSync.question("Enter the first name you wish to start your pretty story: ");
console.log((numberOfQuestion -= 1) + " more questions");

let userActionChoice = readLineSync.question("Enter a conjugated verb to start the action of your pretty story: ");
console.log((numberOfQuestion -= 1) + " more question");

let userComplementChoice = readLineSync.question("Enter a complement to bring your pretty story to life: ");
console.log((numberOfQuestion -= 1) + " more question");

let addAString = readLineSync.question("Enter a sentence so that your pretty story becomes exciting: ");
console.log(userFirstNamneChoice + " " + userActionChoice + " " + userComplementChoice + ".");

console.log(addAString);
