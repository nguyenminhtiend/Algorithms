var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const set = {};
  for (const char of s) {
    set[char] = (set[char] || 0) + 1;
  }
  for (const char of t) {
    if (!set[char]) return false;

    set[char] -= 1;
  }
  return true;
};

console.log(isAnagram('ab', 'a'));