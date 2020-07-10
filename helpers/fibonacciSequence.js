exports.getFibonacciArray = maxCount => {
  var fibArr = [0, 1];

  for (let i = 2; i < maxCount; i++) {
    fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    if (fibArr[i] > maxCount) break;
  }
  return fibArr;
};
