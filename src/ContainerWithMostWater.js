var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(max, area);
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return max;
};

console.log(maxArea([2, 3, 10, 5, 7, 8, 9]));