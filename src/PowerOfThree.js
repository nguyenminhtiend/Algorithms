var isPowerOfThree = function (n) {
  if (n < 1) return false;

  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};

console.log(isPowerOfThree(116236236262437373736111))