// Q1: Write a function which implements a range
// console.log(range(1, 50)); // [1,2,3,4,5...,50]

function range(a: number, b: number) {
  const rangedArray = [];
  for (let i = a; i <= b; i++) {
    rangedArray.push(i);
  }
  console.log(rangedArray);
}

range(45, 50);
