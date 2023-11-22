'use strict'
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
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
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