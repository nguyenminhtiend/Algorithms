var titleToNumber = function (s) {
  const startASCII = 65;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const value = s.charCodeAt(i) - startASCII + 1;
    sum = sum * 26 + value;
  }
  return sum;
};
//console.log(titleToNumber('AZ')); //52
//console.log(titleToNumber('ZY')); //701

console.log(titleToNumber('A')); //702
console.log(titleToNumber('AA')); //27
console.log(titleToNumber('ZZ')); //702
console.log(titleToNumber('AAA')); //703 // 26 ^ 2 + 26 ^ 1 + 26 ^ 0

// console.log(titleToNumber('AZ')); // 26 ^ 1 +  52
// console.log(titleToNumber('BA')); //53

// 27 *  (27 -36)
// console.log(titleToNumber('')); //27




// AB -> 26 + 2
