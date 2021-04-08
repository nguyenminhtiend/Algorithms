function isPowerOf(n, r) {
  if (n === 0) return false;

  while (n % r === 0) {
    n /= r;
  }
  return n === 1;
}

function countTriplets(arr, r) {
  let result = 0;
  let previous = -1;
  const combo = {
    1: 0,
    2: 0,
    3: 0,
  };
  let currentSet = 0;
  arr.forEach((i) => {
    if (!isPowerOf(i, r)) {
      return;
    }

    if (i !== previous) {
      if (currentSet === 3) {
        result += (combo['1'] * combo['2'] * combo['3']);
        combo['1'] = combo['2'];
        combo['2'] = combo['3'];
        combo['3'] = 1;
      } else {
        currentSet += 1;
        combo[`${currentSet}`] += 1;
      }
    } else {
      combo[`${currentSet}`] += 1;
    }
    previous = i;
  });

  return result + (combo['1'] * combo['2'] * combo['3']);
}

console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
// console.log(isPowerOf(9, 3));
