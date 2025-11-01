// Q1: Write a function which implements a range
// console.log(range(1, 50)); // [1,2,3,4,5...,50]

function range(from, to) {
  const arr = [];
  arr.push(from);
  for (let i = from + 1; i <= to; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(range(1, 50));
