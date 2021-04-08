var lengthOfLIS = function (nums) {
  const result = Array(nums.length).fill(1);
  let max = 1;
  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        result[j] = Math.max(result[j], result[i] + 1);
        max = Math.max(max, result[j]);
      }
    }
  }
  return Math.max(...result);
};



//console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4

console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])); // 6

//console.log(lengthOfLIS([1, 3, 6, 7, 9, 4])); // 6