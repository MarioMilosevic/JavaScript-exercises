"use strict";

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout((resolve) => {}, ms);
    } else {
      reject(console.log("Shop closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]}`);

    await time(0);
    console.log("start the production");
    await time(1000);
    console.log("cut the fruit");
  } catch (error) {
    console.log("Customer left CATCH", error);
  } finally {
    console.log(`Day ended FINALLY`);
  }
}

kitchen();
//////////////////////////////////////////////////////////////////////////////////////////////
// const toppingsChoice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you like"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log("a");
//   console.log("b");
//   console.log("c");
//   await toppingsChoice();
//   console.log("d");
//   console.log("e");
// }

// kitchen();

// console.log("Doing the dishes");
// console.log("Cleaning the tables");
// console.log("Taking orders");

// let order = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// order.then().then().then().catch().finally()

// async function order() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc doesn't exist", error);
//   } finally {
//     console.log("runs code anyway");
//   }
// }

// order().then(() => {
//     console.log('mario');
// })

// const order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed !"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected `))
//   .then(() => {
//     return order(0, () => console.log("Start the production"));
//   })
//   .then(() => {
//     return order(2000, () => console.log("The fruit was chopped"));
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`)
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log("The machine has started"));
//   })
//   .then(() => {
//     return order(2000, () => console.log(`${stocks.holder[1]} was selected`));
//   })
//   .then(() => {
//     return order(3000, () =>
//       console.log(
//         `${stocks.toppings[0]} and ${stocks.toppings[1]} were selected`
//       )
//     );
//   })
//   .then(() => {
//     return order(2000, () => console.log("Ice cream has been served"));
//   })

//   .catch(() => {
//     console.log('Customer left');
//   }).finally(() => {
//     console.log('Day ended, shop is closed');
//   })
