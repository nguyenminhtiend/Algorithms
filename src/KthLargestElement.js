var findKthLargest = function (nums, k) {
  const sortedNums = nums.sort((a, b) => (a < b));
  //console.log(sortedNums)

  console.log(sortedNums[k - 1]);
  return sortedNums[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))


