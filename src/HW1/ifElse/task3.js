// task #3
function getSum(a, b, c) {
    return [a, b, c]
      .filter(number => number > 0)
      .reduce((acc, curr) => acc + curr, 0);
  }