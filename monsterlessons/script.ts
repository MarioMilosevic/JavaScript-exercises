const num1 = [1, 3, 7, 9, 2];
const target = 11;

const findIndexesByTarget = (target: number, numbers: number[]) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] + numbers[i + 1] === target) {
      return [i, i + 1];
    }
  }
  return null;
};

const result = findIndexesByTarget(target, num1);

console.log(result);
