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


// CHALLENGE 1 ///////////////////////////////////////////////////////////////////////

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