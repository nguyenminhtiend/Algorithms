var reverseString = function (s) {
  const length = Math.floor(s.length);
  for (let i = 0; i < Math.floor(length / 2); i++) {
    [s[i], s[length - 1 - i]] = [s[length - 1 - i], s[i]];
  }
  return s;
};

console.log(reverseString(['a']));
