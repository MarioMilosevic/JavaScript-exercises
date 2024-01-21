"use strict";
// First exercise
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / (heightMark * heightMark);
// const bmiJohn = massJohn / (heightJohn * heightJohn);

// console.log(bmiMark, bmiJohn);
// let isHigherBMI = bmiMark > bmiJohn;
// console.log(isHigherBMI);
// Second exercise
// Napisi program koji izracunava ukupan iznos moje kupovine
// Kupujte te telefone (petlja) dokle god imam dovoljno novca na racunu
// Uz telefone kupujte i dodatnu opremu dokle god je ispod mentalnog praga kojeg sebi zadate
// Posto izracunate iznos kupovine onda dodajte porez a zatim napisite ukupan iznos pravilno formatiran. Na kraju provjerite sebi stanje na racunu da vidite da li mozete da priustite sebi tu kupovinu.
// Trebalo bi da definisete funckije za izracunavanje poreza za dopunjavanje iznosa znakom za valutu $ i zaokruzivanje na 2 decimalna mjesta

// const tax = 0.15;
// let budget = 400;
// const phonePrice = 99.99;
// const phoneAcessories = 9.99;

// const iznosKupovine = function (budget, phonePrice, phoneAcessories) {
//   let shoppingCost = 0;
//   for (let i = 0; budget > phonePrice; i++) {
//     let boughtPhones = i + 1;
//     shoppingCost = phoneAcessories + phonePrice;
//     budget -= shoppingCost;
//     console.log(boughtPhones, budget, shoppingCost);
//   }
//   return shoppingCost;
// };
// console.log(iznosKupovine());

// Second exercise from course

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// let isHigherBMI = BMIMark > BMIJohn;

// if (isHigherBMI) {
//   // console.log("Mark's BMI is higher than John's !");
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   // console.log("John's BMI is higher than Mark's !");
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// Third exercise from course
// const dolphins = [96, 108, 89];
// const koalas = [88, 91, 110];

// const calcAverage = function(arr){
//   let score = 0
//   for (let i = 0; i < arr.length; i++) {
//      score += arr[i] / arr.length
//   }
//   return score
// }

// let scoreDolphins = 0
// for (let i = 0; i < dolphins.length; i++) {
//   console.log(dolphins[i]);
//    scoreDolphins += dolphins[i] / dolphins.length
// }
// console.log(scoreDolphins);

// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins win the trophy`);
// } else if (scoreDolphins < scoreKoalas) {
//   console.log(`Koalas win the trophy`);
// } else if (scoreKoalas === scoreDolphins) {
//   console.log(`Both win the trophy`);
// }

// CHALLENGE #4 //////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// const bills = [275,40,430]
// const bill = 275
// const tip = bill >= 50 && bill <=300 ? bill*0.15 : bill*0.2
// console.log(`The bill was ${bill}, the tip was ${tip}, and the final value was ${bill + tip}`);
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// CHALLENGE 1 ////////          SECTION 9           /////////////////////////////////

// // 1. Create one player array for each team (variables 'players1' and 'players2')

// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const substitutes = ['Thiago', 'Coutinho', 'Perisic'];
// const player1Final = [...players1, ...substitutes];
// console.log(player1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// function printGoals(...players) {
//   const goalsScored = players.length;
//   const playersList = players.join(', ');
//   console.log(`${goalsScored} goals were scored: ${playersList}`);
// }

// // Example usage:
// // printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals(...game.scored)

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator

//  team1 < team2 && console.log(`Team 1 is more likely to win`)
//  team1 > team2 && console.log(`Team 1 is more likely to win`)
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* CHALLENGE #2
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// kako sam sam rijesio
// for(const player of game.scored.entries()){
//   console.log(`Goal ${player[0] + 1}: ${player[1]}`);
// }
// kako je chatGpt rijesio koristeci Object.entries()
// console.log('------------- PART 1 ----------------');
// for (const [goalNumber, player] of Object.entries(game.scored)) {
//   console.log(`Goal ${+goalNumber + 1}: ${player}`);
// }
// console.log('----------- PART 2 -------------');
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// console.log(game.odds);
// console.log(Object.entries(game.odds));
// let average = 0;
// // [[team1, 1.33] [x, 3.25] [team2, 6.5]]
// const odds = Object.keys(game.odds);
// // console.log(odds);
// for (const [index, odd] of Object.entries(game.odds)) {
//   // console.log(index);
//   // console.log(odd);
//   average += odd / odds.length;
// }
// console.log(average);

// console.log('------------ PART 3 ----------------')/
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
//  Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// NISAM ZNAO DA RIJESIM OVAJ 3I DIO DOK PRETHODNA 2 SAM USPIO

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// console.log('---------------- PART 1 ----------------');
// const events = [...new Set(gameEvents.values())]
// console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// console.log('---------------- PART 2 ----------------');
// gameEvents.delete(64)
// console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log('---------------- PART 3 ----------------');
// const gameLength = 90
//   console.log(`An event happened, on average every ${gameLength / gameEvents.size} minutes`);
//   const time = [...gameEvents.keys()].pop()
//   console.log(time);

//   console.log('---------------- PART 4 ----------------');
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL
//moje rjesenje
// const entries = [...gameEvents]
// console.log(entries);
// for (const [minute,event] of entries){
//   minute <= 45 ? console.log(`First half minute ${minute}: ${event}`) : console.log(`Second half minute ${minute}: ${event}`);
// }

// jonasovo rjesenje
// for(const [minute, event] of gameEvents){
//   const half = minute >= 45 ? `SECOND` : `FIRST`
//   console.log(`${half} half minute ${minute}: ${event}`);
// }

// FUNDAMENTALS PART 2 ///////////////////////////////////////////////////////////////

// CHALLENGE #1 /////////////////////////////////////////////////////////////////////
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const scoredolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas2 = calcAverage(23, 34, 27);

// const checkWinner = function(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No team wins..");
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(scoredolphins2, scoreKoalas2)

// CHALLENGE #2 //////////////////////////////////////////////////////////////////////

// const calcTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// console.log(calcTip(100));
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + bills[1] + bills[2] + tips[0] + tips[1] + tips[2]];
// console.log(totals);

// challenge 3/////////////////////////////////////////////////////////////////

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI() {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };
// const john = {
//   fullName: "John Johnson",
//   mass: 92,
//   height: 1.95,
//   calcBMI() {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI} !) `
//   );
// } else {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})! `
//   );
// }
// // mark.calcBMI()
// console.log(mark);

//challenge 4 ////////////////////////////////////////////////////////////////////////

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }
// console.log(bills, tips);
// console.log(totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   let average = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   average = sum / arr.length;
//   return average;
// };
// console.log(calcAverage(totals));

// challenge #1 sekcija 5

/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures. 
Example: [17, 21, 23] will print 
"... 17C in 1 days ...21C in 2 days ... 23C in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem solving framweork: Understand the problem and break it up into sub-problems! 

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
// const printForecast = function(arr){
//   let text = ''
//   for (let i = 0; i < arr.length; i++) {
//     text += `... ${arr[i]}C in ${i + 1} days `
//   }
//   return text + '...'
// }

// console.log(printForecast([17,21,23]));
// console.log(printForecast([12,5,-5,0,4]));

// CODING CHALLENGE 2 ////////////////////////////////////////////////////////////////

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// function checkDogs(dogsJulia, dogsKate){
//   const dogsJuliaCopy = [...dogsJulia]
//    dogsJuliaCopy.splice(0,1)
//    dogsJuliaCopy.splice(2,1)
//    const allDogs = [...dogsJuliaCopy, ...dogsKate]
//    console.log(allDogs);

//    allDogs.forEach((dog, num) => {
//     const isAdult = dog >= 3 ? 'adult' : 'puppy'
//     console.log(`Dog number ${num + 1} is an ${isAdult} and is ${dog} years old`);
//    })
// }

// checkDogs([3,5,2,12,7],[4,1,15,8,3])
// checkDogs([9,16,6,8,3],[10,5,6,1,4])

// const max = movements.reduce((acc, curr) => {
//   acc > curr ? acc : curr
//   if (acc > curr) {
//     return acc;
//   } else {
//     return curr;
//   }
// }, movements[0]);
// console.log(max);

// CODING CHALLENGE 3 ////////////////////////////////////////////////////////////////
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// function calcAverageHumanAge(ages) {
//   const humanAges = ages.map(dogAge =>
//     dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
//   );
//   const over18 = humanAges.filter(age => age >= 18);
//   const average = over18.reduce((acc, curr, i) => acc + curr, 0);
//   const sum = average / over18.length;
//   return sum;
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const calcAverageHumanAge = ages =>
//   ages
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, curr) => acc + curr, 0)
//     .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

// Coding Challenge #4 ///////////////////////////////////////////////////////////////

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
// console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// const sarahDog = dogs.find(obj => obj.owners.includes('Sarah'));
// if (sarahDog.curFood > sarahDog.recFood) {
//   console.log(`Sarah's dog is eating too much`);
// } else if (sarahDog.curFood < sarahDog.recFood) {
//   console.log(`Sarah's dog is eating too little`);
// } else {
//   console.log(`Sarah's dog is eating the right amount`);
// }
// console.log(sarahDog);
// // 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

// const ownersEatTooMuch = [];
// console.log(ownersEatTooMuch);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]); */

// ASYNC JAVASCRIPT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* api https://countries-api-836d.onrender.com/countries/ */

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////////////////////////////////
// const getCountryData = (country) => {

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

// request.addEventListener("load", function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

//   const html = `<article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// });
// }

// getCountryData('montenegro')
// getCountryData('serbia')

const renderCountry = (data, className = "") => {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryDataAndNeighbour = (country) => {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country
//     // const neighbour = data.borders?.[0]

//     const [neighbour] = data.borders
//     if(!neighbour) return

//   // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//   request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//   request2.send();

//   request2.addEventListener('load', function(){
//     const data2 = JSON.parse(this.responseText)
//     console.log(data2)

//     renderCountry(data2, 'neighbour')
//   })
//   });
// };

// getCountryDataAndNeighbour('montenegro')

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//         setTimeout(() => {
//           console.log('5 second passed');
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v2/name/montenegro`);

// console.log(request);

const getCountryData = (country) => {
  fetch(`https://restcountries.com/v2/name/${country}`).then((response) => {
    console.log(response);
    return response.json();
  }).then((data) => {
    console.log(data);
    renderCountry(data[0])
  })
};

getCountryData("montenegro");
