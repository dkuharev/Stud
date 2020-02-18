// task #4
function getResult(a, b, c) {
    const amount = a + b + c;
    const multiplication = a * b * c;
    const addendum = 3;
  
    return multiplication > amount
      ? multiplication + addendum
      : amount + addendum;
  }