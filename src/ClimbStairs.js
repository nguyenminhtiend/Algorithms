var climbStairs = function (n) {
  const set = [];

  if (n < 3) return n;

  for (let i = 1; i <= n; i++) {
    if (i < 3) {
      set[i] = i;
    } else {
      set[i] = set[i - 1] + set[i - 2];
    }
  }
  return set[n];
};

console.log(climbStairs(45));