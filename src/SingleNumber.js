var singleNumber = function (nums) {
  const set = {};
  let bit = 0;
  for (const num of nums) {
    bit ^= num;
    if (set[num]) {
      delete set[num];
    } else {
      set[num] = true;
    }
    console.log(set)
  }
  return Object.keys(set)[0];
};

var singleNumberBitwise = function (nums) {
  return nums.reduce((bit, num) => bit ^ num, 0);
};


// console.log(singleNumber([2, 1, 4, 5, 4, 5, 2]));
console.log(singleNumberBitwise([2, 1, 4, 5, 4, 5, 2]));