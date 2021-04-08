var singleNumber = function (nums) {
  const map = {};
  for (const num of nums) {
    if (map[num] === undefined) {
      map[num] = false;
      continue;
    }
    map[num] = true;
  }
  console.log(map)
  for (const [key, value] of Object.entries(map)) {
    if (!value) return key;
  }
};

// console.log(singleNumber([2, 1, 4, 5, 4, 5, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));