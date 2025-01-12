"use strict";
/*let js = "amazing";
console.log(30 + 20); */
// const country = "Nigeria";
// const continent = "Africa";
// let population = 14;

// console.log(country);
// console.log(continent);
// console.log(population + " " + "million");

// const isIsland = false;
// let language;
// language = "Urhobo";
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

/*    If your country split in half, and each half would contain half the population, then how many people would live in each half?

    Increase the population of your country by 1 and log the result to the console.

    Finland has a population of 6 million. Does your country have more people than Finland?

    The average population of a country is 33 million people. Does you country have less people than the average country?

    Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.*/

// const countrySplit = population / 2;
// console.log(countrySplit);
// population++;
// console.log(population);

/*let finlandPopulation = 6;
finlandPopulation = finlandPopulation;
console.log(population > finlandPopulation);

let avgCountryPopulation = 13000000;
console.log(population < avgCountryPopulation);
const description =
  country +
  " " +
  "is in" +
  " " +
  continent +
  ", " +
  "and its" +
  " " +
  population +
  " " +
  " million people speak" +
  " " +
  language;
console.log(description); */

/* If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

    After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.*/

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`
//   );
// }

// console.log("9" - "5"); // -> 4
// console.log("19" - "13" + "17"); // -> 617
// console.log("19" - "13" + 17); // -> 23
// console.log("123" < 57); // -> false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// const markBmi2 = massMark2 / (heightMark2 * heightMark2);
// const johnBmi2 = massJohn2 / (heightJohn2 * heightJohn2);

/* Write your code below. Good luck! 🙂 */
//const BMI = mass / (height * height)
//let massMark, heightMark, massJohn, heightJohn;
// Test 1
/*massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

console.log(massMark, heightMark, massJohn, heightJohn);
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//Test 2
let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;

console.log(BMIMark, BMIJohn);

console.log(markHigherBMI);*/

/*const day = "monday";

if (day === "monday") {
  console.log("plan course structure");
  console.log("Go to coding meeting");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log(" Enjoy the weekend :D");
} else {
  console.log("Not a valid day");
}
*/

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

//const avgKoalas = checkWinner(scoreDolphins, scoreKoalas)
//avgDolphins = calcAverage(85, 54, 41)
//avgKoalas = calcAverage()
//console.log(avgDolphins)
//console.log(avgKoalas)
// mine
// const calcAverage = (score1, score2, score3) => {
//   const averageScore = (score1 + score2 + score3) / 3;
//   return averageScore;
// };

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     return avgDolphins;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     return avgKoalas;
//   } else {
//     console.log("No team wins...");
//   }
// }
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
//const scoreDolphins = calcAverage(85, 54, 41)
//const scoreKoalas = calcAverage(23, 34, 27)
// console.log(scoreDolphins);
// console.log(scoreKoalas);
// const winner = checkWinner(scoreDolphins, scoreKoalas);

// jonas
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     // return avgDolphins;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     // return avgKoalas;
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// let sarahLanguage = "english";
// if (language === sarahLanguage && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Scmedtmann",
//   job: "teacher",
//   friends: ["Micheal", "Peter", "Linda"],
// };
// console.log();

// challenge 1
let arr;
function printForeCast(arr) {
  console.log(
    `...${arr[0]} in 1 day... ${arr[1]} in 2 days ... ${arr[2]} in 3 days ...`
  );
}
printForeCast([17, 21, 23]);
