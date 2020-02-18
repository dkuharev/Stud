let arr2 = [10, 20, 30, 40, 50];
console.log(Math.max(...arr2)); // простое решение
let maxValueInArr = 0;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === Math.max(...arr2)) {
    maxValueInArr += arr2[i];
  }
}
console.log(maxValueInArr);