var compress = function (chars) {
  let result = '';
  let currentChar = chars[0];
  let numberOfCurrent = 1;
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === currentChar) {
      numberOfCurrent++;
    } else {

      result += `${currentChar}${numberOfCurrent > 1 ? numberOfCurrent : ''}`;
      currentChar = chars[i];
      numberOfCurrent = 1;
    }
  }

  result += `${currentChar}${numberOfCurrent > 1 ? numberOfCurrent : ''}`;
  return result.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
console.log(compress(["a"]))
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))
console.log(compress(["a", "a", "a", "b", "b", "a", "a"]))
