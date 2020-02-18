let a = 10;

console.log(Math.sqrt(a));
for (let i = 1; i < a; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    console.log(Math.sqrt(i));
  } else {
    continue;
  }
}