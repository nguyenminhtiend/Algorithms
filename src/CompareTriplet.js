function compareTriplets(a, b) {
  let rewardA = 0;
  let rewardB = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) {
      rewardA += 1;
    } else if (a[i] < b[i]) {
      rewardB += 1;
    }
  }
  return [rewardA, rewardB];
}
