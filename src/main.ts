// Q1: Write a function which get’s an array and an element and returns
// an array with this element at the end.

function append(arr: number[], element: number) {
  const copy = [...arr];
  copy.push(element);
  return copy;
}

const numbers = [1, 2];
const newNumbers = append(numbers, 3);
console.log(newNumbers, numbers); // [1,2,3]
