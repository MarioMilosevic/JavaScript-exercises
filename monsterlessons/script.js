// Q1: Write a function which get’s an array and an element and returns
// an array with this element at the end.

// const numbers = [1, 2];
// const newNumbers = append(numbers, 3);
// console.log(newNumbers, numbers); // [1,2,3]

const numbers = [1, 2];

function append(arr, element) {
  arr.push(element);
  return arr;
  return [...arr, element];
}

const newNumbers = append(numbers, 3);
console.log(newNumbers);
