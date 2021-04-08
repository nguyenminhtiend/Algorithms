var getSum = function (a, b) {
  while (b != 0) {
    const carry = a & b;
    a ^= b;
    b = carry << 1;
  }
  return a;
}

console.log(getSum(2, 3));