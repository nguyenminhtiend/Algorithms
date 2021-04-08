var majorityElement = function (nums) {
  const set = {};
  const moreThanHalf = Math.floor(nums.length / 2);
  for (const num of nums) {
    set[num] = (set[num] || 0) + 1;
    if (set[num] > moreThanHalf) {
      return num;
    }
  }
  return null;
};