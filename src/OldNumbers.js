function oddNumbers(l, r) {
  // Write your code here
  const result = [];
  let start = l % 2 === 0 ? l + 1 : l;
  while (start <= r) {
    result.push(start);
    start += 2;
  }
  return result;
}

console.log(oddNumbers(3, 12));
