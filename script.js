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