const longestCommonSubstring = (str1, str2) => {
  let max = 0;
  let i = 0;
  while (i < str1.length) {
    let j = 0;
    let maxI = 0;
    let isMatch = false;
    while (j < str2.length) {
      if (str1[i] === str2[j]) {
        i++;
        maxI++;
        isMatch = true;
      }
      j++;
    }
    max = Math.max(max, maxI);
    if (!isMatch) {
      i++;
    }
  }
  return max;
}

console.log(longestCommonSubstring('123456', '12345aa123456'));