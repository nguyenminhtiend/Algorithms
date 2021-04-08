const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const remaining = target - value;
    const position = map[remaining];
    if (position !== undefined) {
      return [i, position]
    } else {
      map[value] = i;
    }
  }
  return [];
}

