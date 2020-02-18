let num = 123;
let res = "";

for (let i = String(num).length; i > 0; i--) {
  console.log(i);
  res += i;
}
res = Number(res);
console.log(res);