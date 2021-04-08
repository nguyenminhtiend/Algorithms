//WAY 1

// var moveZeroes = function (nums) {
//   const length = nums.length;
//   let fistStartZeros = null;
//   for (let i = 0; i < length - 1; i++) {
//     if (nums[i] !== 0) continue;

//     if (nums[i + 1] === 0) {
//       fistStartZeros = fistStartZeros !== null ? fistStartZeros : i;
//       continue;
//     }

//     const swapPosition = fistStartZeros !== null ? fistStartZeros : i;
//     [nums[swapPosition], nums[i + 1]] = [nums[i + 1], nums[swapPosition]];
//     fistStartZeros = swapPosition + 1;
//   }
//   return nums;
// };

//WAY 2
var moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    };
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([1, 0, 3, 12, 0]));
console.log(moveZeroes([0, 0, 0, 3, 12, 0]));
console.log(moveZeroes([4, 2, 4, 3, 0, 5, 1, 0, 0, 0]));