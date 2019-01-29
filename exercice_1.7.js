/*
**Ask to the user its shoe size and its birth year. Then make the following calculation:

**Multiply the shoe size by 2
**Add 5 to the result
**Multiply that by 50
**Subtract the birth year
**Add 1766

**Test with your own birth year and your shoe size.
*/

const readLineSync = require("readline-sync");//Call the module to ask question to the user.

let userShoesSize = readLineSync.question("Please enter your shoes size: ");

let userBierthYear = readLineSync.question("Please enter your birth year: ");

let finalNumber = ((((userShoesSize * 2) + 5) * 50) - userBierthYear) + 1766;

console.log("After a lot off different calcul, the result is: " + finalNumber);
