// Remove All Duplicates in the Array
// – Q1: Write a function which removes all duplicates from the array.

function uniqueArr(arr: number[]) {
  const unique: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const alreadyExists = unique.some((num) => num === currentNumber);
    if (!alreadyExists) {
      unique.push(currentNumber);
    }
  }
  return unique;
}

console.log(uniqueArr([1, 1, 2])); // [1,2]
