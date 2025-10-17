function findEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i]; // Place breakpoint here
    if (num % 2 === 0) {
      console.log("Found even:", num);
    }
  }
}

let nums = [3, 7, 9, 12, 15, 18, 21];
findEven(nums);
