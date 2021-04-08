const initArray = (value, numberOfValue) => {
  return [...Array(numberOfValue).keys()].map(() => value);
}

const initSet = (value, numberOfValue) => {
  let sum = 0;
  const set = [];
  for (let i = 1; i <= numberOfValue; i++) {
    sum += value;
    set.push(value);
  }
  return { sum, set };
}

const getCombinationWith = (index, numberOf, candidates, target) => {
  if (index > (candidates.length - 1)) return null;

  const value = candidates[index];
  const remainingValue = target - (value * numberOf);
  if (remainingValue < 0) return null;

  if (remainingValue === 0) {
    return initArray(value, numberOf);
  }
  return getCombinationWith(index + 1, null, candidates, remainingValue);

}

const combinationSum = (candidates, target) => {
  const sortedCandidates = candidates.sort();
  const result = [];

  for (let i = 0; i < sortedCandidates.length; i += 1) {
    let maxNumberOfI = Math.ceil(target / i);
    for (let numberOfI = 1; i < maxNumberOfI; numberOfI += 1) {
      const combinations = getCombinationWith(i, numberOfI, sortedCandidates, target);
      if (result) {
        result = result.concat(combinations)
      }
    }
  }
  return result;
};