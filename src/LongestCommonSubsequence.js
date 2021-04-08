var longestCommonSubsequence = function (text1, text2) {
  let result = 0;
  const matrix = [];
  for (let i = 0; i <= text1.length; i++) {
    matrix[i] = [];
    for (let j = 0; j <= text2.length; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0;
        continue;
      }
      if (text1[i - 1] === text2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        result = Math.max(matrix[i][j], result);
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }
  console.log(matrix)
  return result;
}

console.log(longestCommonSubsequence('abcde', 'ace')); //3

console.log(longestCommonSubsequence('abcba', 'abcbcba')); //5

console.log(longestCommonSubsequence('ghexybyrgzczy', 'hafcdqbgncrcbihkd')); //4 // h b r c
console.log(longestCommonSubsequence('abc', 'def')); //0
console.log(longestCommonSubsequence('oxcpqrsvwf', 'shmtulqrypy')); //2
