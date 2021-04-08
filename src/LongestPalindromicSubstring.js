var getSurround = function (s, index) {
  let start = index;
  let end = index;
  while (start > -1 && s[start] === s[start - 1]) {
    start = start - 1;
  }
  while (end < s.length && s[end] === s[end + 1]) {
    end = end + 1;
  }
  while (s[start] === s[end] && start > -1 && end < s.length) {
    start--;
    end++;
  }
  return s.substring(start + 1, end);
};

var longestPalindrome = function (s) {
  const length = s.length;
  let result = s[0]
  for (let i = 0; i < length; i++) {
    const subPalindromic = getSurround(s, i);
    if (subPalindromic.length > result.length) {
      result = subPalindromic;
    }
  }
  return result;
};

//console.log(getSurround('bb', 1)); //cbc

console.log(longestPalindrome('aaaa')); //cbc
console.log(longestPalindrome('cbbd')); //bb

