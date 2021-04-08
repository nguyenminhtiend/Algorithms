
var letterCombinationsRecursive = function (list, n = 0, result = [], current = '') {
  if (n === list.length) {
    result.push(current);
    return;
  }
  for (const item of list[n]) {
    letterCombinationsRecursive(list, n + 1, result, current + item);
  }
}

var letterCombinations = function (digits) {
  if (!digits) return [];

  const mapNumber = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  const combinations = [];
  const result = [];
  for (let i = 0; i < digits.length; i++) {
    combinations.push(mapNumber[digits[i]]);
  }
  letterCombinationsRecursive(combinations, 0, result, '');
  return result;
};

console.log(letterCombinations('23'));