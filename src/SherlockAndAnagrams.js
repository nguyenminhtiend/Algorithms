function sherlockAndAnagrams(s) {
  let count = 0;
  for (let i = 0; i < s.length; i += 1) {
    const found = {};

    for (let j = 0; j + i <= s.length; j += 1) {
      let substr = s.substr(j, i);
      if (substr) {
        substr = substr.split('').sort().join('');
        if (found[substr]) {
          count += found[substr];
          found[substr]++;
        } else {
          found[substr] = 1;
        }
      }
    }
  }

  return count;
}
