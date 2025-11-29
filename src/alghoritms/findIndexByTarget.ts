const numbers = [1, 3, 7, 9, 2];
const target = 11;

// const findIndexesByTarget = (nums: number[], target: number) => {
//   for (let p1 = 0; p1 < nums.length; p1++) {
//     for (let p2 = 1; p2 < nums.length; p2++) {
//       if (nums[p1] + nums[p2] === target) {
//         return [p1, p2];
//       }
//     }
//   }
//   return null;
// };

// const firstResult = findIndexesByTarget(numbers, target);
// console.log(firstResult);

const findIndexesByTarget = (nums: number[], target: number) => {
  const mapping: { [key: number]: number } = {};
  for (let p1 = 0; p1 < nums.length; p1++) {
    const currentMappingIndex = mapping[nums[p1]];
    if (currentMappingIndex >= 0) {
      return [currentMappingIndex, p1];
    } else {
      mapping[target - nums[p1]] = p1;
    }
  }
  return null;
};

const firstResult = findIndexesByTarget(numbers, target);
console.log(firstResult);
