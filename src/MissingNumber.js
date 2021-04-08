var missingNumber = function (nums) {
  let result = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    result += (i - nums[i]);
  }
  return result + length;
};

console.log(missingNumber([0]));