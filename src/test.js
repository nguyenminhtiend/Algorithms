function ArrayChallenge(arr) {
  const startingRotate = arr[0];
  let result = '';
  for (let i = startingRotate; i < arr.length; i += 1) {
    result += arr[i];
  }
  for (let i = 0; i < startingRotate; i += 1) {
    result += arr[i];
  }
  return result;
}

console.log(ArrayChallenge([3, 2, 1, 6]));
console.log(ArrayChallenge([4, 3, 4, 3, 1, 2]));
console.log(ArrayChallenge([2, 3, 4, 1, 6, 10]));
