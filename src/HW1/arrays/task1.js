let arr = [10, 20, 30, 40, 50];
console.log(Math.min(...arr));

let minValueInArr = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] === Math.min(...arr)) {
    minValueInArr += arr[i];
  }
}
console.log(minValueInArr);