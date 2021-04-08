var mergeTwoLists = function (l1, l2) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < l1.length & j < l2.length) {
    if (l1[i] < l2[j]) {
      result.push(l1[i]);
      i++;
    } else {
      result.push(l2[j]);
      j++;
    }
  }
  return result;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));