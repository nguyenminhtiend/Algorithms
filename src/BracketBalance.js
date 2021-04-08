const isBracketBalance = (s) => {
  const openBrackets = ['[', '{', '('];
  const pairBracket = {
    ']': '[',
    '}': '{',
    ')': '('
  }
  const stack = [];
  for (const char of s) {
    if (openBrackets.includes(char)) {
      stack.push(char);
      continue;
    }
    const openBracket = pairBracket[char];
    if (openBracket) {
      const lastBracket = stack.pop();
      if (lastBracket !== openBracket) return false;
    }
  }
  return stack.length === 0;
};

console.log(isBracketBalance('}[(])'));