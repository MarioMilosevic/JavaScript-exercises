// Q1: Write a function which implements a range

function range(start: number, end: number) {
  const arr: number[] = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(range(1, 50)); // [1,2,3,4,5...,50]
console.log(range(39, 46)); // [1,2,3,4,5...,50]
