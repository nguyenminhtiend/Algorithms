var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let hash = {};
  let currentCount = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hash[char] === undefined || hash[char] < start) {
      currentCount += 1;
    } else {
      start = hash[char] + 1;
      currentCount = i - hash[char];
      delete hash[char];
    };
    hash[char] = i;
    maxLength = Math.max(maxLength, currentCount);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring('abba'))
console.log(lengthOfLongestSubstring('abcabcbb'));