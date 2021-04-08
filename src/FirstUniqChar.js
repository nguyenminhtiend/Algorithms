var firstUniqChar = function (s) {
  const set = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (set[char] === undefined) {
      set[char] = i;
    } else {
      set[char] = -1;
    }
  }
  for (const char in set) {
    if (set[char] > -1) return set[char];
  }
  return -1;
};

console.log(firstUniqChar("loveleetcode"))