var collectStrings = function (obj, result = []) {
  for (const property in obj) {
    if (typeof obj[property] === 'object') {
      collectStrings(obj[property], result);
    } else {
      result.push(obj[property]);
    }
  }
  return result;
};

console.log(collectStrings({
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
}));
