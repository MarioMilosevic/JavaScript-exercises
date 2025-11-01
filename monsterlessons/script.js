// • Find the Number of Occurences of Minimum Value in List
//  – Q1: Find the number of occurrences of minimum value in the list of numbers

const numbers = [3, 1, 2, 1, 4, 1, 1, 1, 1];

// Step 1 → Find the minimum number in the array.
const minNum = Math.min(...numbers);

// Step 2 → Count how many times that number appears.

// Step 3 → Return or print that count.

function occurences(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    const minNum = Math.min(...numbers);

    if (numbers[i] === minNum) {
      count++;
    }
  }
  return count;
}

console.log(occurences(numbers));
