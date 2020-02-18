let arr4 = [13, 20, 33, 44, 50, 11, 55];
let test = [];
for (let i = 0; i <= arr4.length - 1; i++) {
  if (arr4[i] % 2 === 1) {
    test.push(arr4[i]);
  }
}
console.log(test);
console.log(test.length);