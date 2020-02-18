let variable = 10;
let anotherVariable = "some string";
console.log(variable, anotherVarible);


let myNumber = 576;
let myString = "some string";
let myBool = true;
let myNull = null;
let mySymbol = Symbol();
let myUndef = undefined;
console.log(myNumber, myString, myBool, myNull, mySymbol, myUndef);


typeof function a(){};
typeof[];
Array.isArray([]);
typeof null;


console.log(10);
console.log(0xfffcc);
console.log(0345);
console.log(012348);


console.log(12.45);
console.log(.89);
console.log(1.24e4);


console.log(0 / 0);
console.log(Infinity / Infinity);
console.log(Math.sqrt(-10));


console.log(1/0);
console.log(-1/0);


let number = 4000;
console.log(typeof number);
letnewNumber = new Number(4000);
console.log(typeof newNumber);
console.log(newNumber.toFixed(2));
console.log(number.toFixed(2));


let count = 10;
console.log(++count);
console.log(count);
console.log(count++);
console.log(count);


let variable = 100;
variable = variable + 20;
let anotherVariable = 25;
anotherVariable = anotherVariable * 4;


console.log(5 < 10);
console.log(5 > 10);
console.log(10 >= 10);
console.log(8 <= 10);

console.log(10 === 10);
console.log(10 !== 10);


console.log(10 == "10");
console.log(10 === "10");


console.log("string");
console.log('newString');
console.log('anotherString');


console.log("this is my string");
console.log("this is my \"string\"");


let myString = "new string";
console.log(myString[2]);


console.log(5 === 6);
console.log(5 === 5);


let number = 5;
console.log(number && 10 + number);
let prevString = "my String";
let newString = prevString || "default";


let temp;
console.log(temp);
let obj = {};
console.log(obj.property);
let ar = [1, 2, 3];
console.log(ar[3]);
const func = () => {
    return;
};
console.log(func());


console.log(typeof null);
console.log(typeof undefined);
console.log(null == undefined);
console.log(null === undefined);


let symbol = Symbol();
console.log(symbol);
console.log(typeof symbol);


let anotherSymbol = Symbol("name");
console.log(anotherSymbol);