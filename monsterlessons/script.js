// Q1: Create a counter function which has increment and getValue
// functionality
// const counter = privateCounter();
// console.log(counter.getValue()); // 0
// counter.increment();
// console.log(counter.getValue()); // 1

function privateCounter() {
  let count = 0;
  function increment() {
    count = count + 1;
  }
  function getValue() {
    return count;
  }

  return {
    increment,
    getValue,
  };
}

const counter = privateCounter();
console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1

// – Q2: Create a function which stores a secret string inside which is not
// accessible but is returned only when we call this function.
// const getSecret = privateSecret();
// console.log(getSecret()); //'secret'

function privateSecret() {
  const secret = "secret";

  return function getSecret() {
    return secret;
  };
}

const getSecret = privateSecret();

console.log(getSecret());
