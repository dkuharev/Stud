let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;
for (let value of arr3) {
  if (arr3[value] % 2 === 1) {
    result += arr3[value];
  }
}
console.log(result);