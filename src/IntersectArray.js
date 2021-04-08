var intersect = function (nums1, nums2) {
  const small = nums1.length < nums2.length ? nums1 : nums2;
  const bigger = nums1.length >= nums2.length ? nums1 : nums2;
  const result = [];
  const set = {};
  for (const num of small) {
    set[num] = (set[num] || 0) + 1;
  }
  for (const num of bigger) {
    const value = set[num];
    if (value) {
      result.push(num);
      set[num] = value - 1;
    }
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));