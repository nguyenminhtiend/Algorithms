var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;

  for (let i = 0; i < nums.length; i++) {
    if ((i - 1 < 0 || nums[i] > nums[i - 1]) && (i + 1 >= nums.length || nums[i] > nums[i + 1])) {
      return i;
    }
  }
  return -1;
};