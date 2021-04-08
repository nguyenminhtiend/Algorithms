/* eslint-disable no-continue */
function minimumSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === i + 1) continue;

    while (arr[i] !== (i + 1)) {
      const swapPosition = arr[i] - 1;
      [arr[i], arr[swapPosition]] = [arr[swapPosition], arr[i]];
      swaps += 1;
    }
  }
  return swaps;
}
// console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6])); // 5
console.log(minimumSwaps([4, 3, 1, 2])); // 3
// console.log(minimumSwaps([2, 3, 4, 1, 5])); // 3
