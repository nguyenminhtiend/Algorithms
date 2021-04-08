function rotLeft(a, d) {
  const result = [];
  for (let i = d; i < a.length; i++) {
    result.push(a[i]);
  }
  for (let i = 0; i < d; i++) {
    result.push(a[i]);
  }
  return result;
}

console.log(rotLeft([1, 2, 3, 4, 5], 2))