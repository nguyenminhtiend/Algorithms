/* eslint-disable no-param-reassign */
function minimumBribes(q) {
  let bribes = 0;
  for (let i = 0; i < q.length; i += 1) {
    const steps = q[i] - (i + 1);
    if (steps > 2) {
      console.log('Too chaotic');
      return;
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j += 1) {
      if (q[j] > q[i]) {
        bribes += 1;
      }
    }
  }
  console.log(bribes);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

// minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

// 1 2 4 3

// 1 2 5 3 7 8 6 4

// 1 2 3 5 7 8 6 4  //1

// 1 2 3 4 7 8 6 5 //4

// 1 2 5 3 4 6 7 8

// 1 2 5 3 4 7 6 8

// 1 2 5 3 7 4 6 8

// 1 2 5 3 6 4 7 8
// 1 2 5 3 6 4 7 8

// 1 2 5 3 6 7 4 8
// 1 2 5 3 7 6 4 8
// 1 2 5 3 7 6 8 4

// 1 2 5 3 7 8 6 4
