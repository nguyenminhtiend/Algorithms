const maxSubArray = function (nums) {
  let maxSoFar = nums[0];
  let currentMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax += nums[i];

    currentMax = Math.max(nums[i], currentMax);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  return maxSoFar;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-1, -2])); // 6
