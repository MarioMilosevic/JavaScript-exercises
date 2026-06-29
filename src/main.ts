// Q1: Design a function which returns a fibonacci sequence value

// 0 + 1
// a + b = result
// result + result = newResult
//  newResult = newResult + newResult

// 1,2,3,5,8,13

function fibonnaci() {
  const numbers = [];
  let firstNumber = 0;
  let secondNumber = 1;
  for (let i = 0; i < 10; i++) {
    const nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
    numbers.push(nextNumber);
  }
  return numbers;
}

console.log(fibonnaci());
