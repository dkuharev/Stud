let arr = [40, 10, 20, 30, 40, 50, 33];
let maxValueInArr = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === Math.max(...arr)) {
    maxValueInArr += arr[i];
    console.log(arr.indexOf(maxValueInArr));
  }
}